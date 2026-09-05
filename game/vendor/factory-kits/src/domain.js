import { sha256 } from "./foundation/hash.js";

function list(value) { return Object.freeze([...(value ?? [])]); }
function ids(value) { return list(value).map(String); }

function inferredCategory(domainPath = "") {
  const path = String(domainPath);
  const rules = [[":creature","Creatures"],[":weapon","Weapons"],[":foliage","Nature"],[":structure","Structures"],[":vehicle","Vehicles"],[":material","Materials"],[":texture","Textures"],[":vfx","VFX"],[":scene","Scenes"],[":animation","Animation"],[":prop","Props"]];
  return rules.find(([needle]) => path.includes(needle))?.[1] ?? "Other";
}
function inferredLevel(entry) {
  const explicit = entry?.editor?.level;
  if (["primary","advanced","internal"].includes(explicit)) return explicit;
  return /(count|segments?|resolution|iterations?|octaves?|samples?|subdivisions?)/i.test(String(entry?.id ?? "")) ? "advanced" : "primary";
}
function normalizeEditor(editor = {}, parameterSchema = [], context = {}) {
  const parameterIds = new Set(parameterSchema.map((entry) => String(entry.id)));
  const allowed = new Set([...parameterIds, "seed"]);
  const hasExplicitLevels = (editor.primary?.length ?? 0) + (editor.advanced?.length ?? 0) + (editor.internal?.length ?? 0) > 0;
  const inferredPrimary = parameterSchema.filter((entry) => inferredLevel(entry) === "primary").map((entry) => String(entry.id));
  const inferredAdvanced = parameterSchema.filter((entry) => inferredLevel(entry) === "advanced").map((entry) => String(entry.id));
  const inferredInternal = parameterSchema.filter((entry) => inferredLevel(entry) === "internal").map((entry) => String(entry.id));
  const primary = ids(hasExplicitLevels ? editor.primary : inferredPrimary);
  const advanced = ids(hasExplicitLevels ? editor.advanced : inferredAdvanced);
  const internal = ids(hasExplicitLevels ? editor.internal : inferredInternal);
  const assigned = new Set();
  for (const [label, values] of [["primary", primary], ["advanced", advanced], ["internal", internal]]) {
    for (const id of values) {
      if (!allowed.has(id)) throw new TypeError(`Editor ${label} references unknown control: ${id}`);
      if (assigned.has(id)) throw new TypeError(`Editor control ${id} is assigned more than once.`);
      assigned.add(id);
    }
  }
  const fallbackPrimary = primary.length || advanced.length || internal.length ? primary : [...parameterIds];
  const materialIds = parameterSchema.filter((entry) => /(wear|roughness|metallic|color|material|weather|surface|clearcoat|iridescence|transmission|pattern|palette)/i.test(String(entry.id))).map((entry) => String(entry.id));
  const autoGroups = [
    { id: "everything", label: "Everything", parameters: [...parameterIds], rerollSeed: true },
    ...(fallbackPrimary.length ? [{ id: "shape", label: "Shape", parameters: fallbackPrimary.filter((id) => !materialIds.includes(id)), rerollSeed: false }] : []),
    ...(advanced.length ? [{ id: "details", label: "Details", parameters: advanced, rerollSeed: false }] : []),
    ...(materialIds.length ? [{ id: "materials", label: "Materials", parameters: materialIds, rerollSeed: false }] : [])
  ].filter((group) => group.parameters.length || group.rerollSeed);
  const groups = Object.freeze((editor.randomizationGroups?.length ? editor.randomizationGroups : autoGroups).map((group) => {
    if (!group?.id) throw new TypeError("Randomization group requires id.");
    const parameters = ids(group.parameters);
    for (const id of parameters) if (!allowed.has(id)) throw new TypeError(`Randomization group ${group.id} references unknown control: ${id}`);
    return Object.freeze({ id: String(group.id), label: group.label ?? String(group.id), parameters, rerollSeed: group.rerollSeed === true });
  }));
  const sections = Object.freeze((editor.sections ?? []).map((section) => {
    if (!section?.id) throw new TypeError("Editor section requires id.");
    const parameters = ids(section.parameters);
    for (const id of parameters) if (!allowed.has(id)) throw new TypeError(`Editor section ${section.id} references unknown control: ${id}`);
    return Object.freeze({ id:String(section.id), label:section.label??String(section.id), parameters });
  }));
  const debounceMs = Math.max(0, Math.min(5000, Number(editor.generation?.debounceMs ?? 180)));
  const generation = Object.freeze({ mode:editor.generation?.mode === "manual" ? "manual" : "debounced", debounceMs:Number.isFinite(debounceMs)?debounceMs:180 });
  return Object.freeze({
    title: editor.title ?? context.displayName ?? null,
    category: editor.category ?? inferredCategory(context.domainPath),
    tags: list(editor.tags?.length ? editor.tags : String(context.domainPath ?? "").split(":").slice(2)),
    preview: editor.preview ?? "none",
    inspector: editor.inspector ?? "schema",
    surfaces: list(editor.surfaces),
    primary: Object.freeze(fallbackPrimary),
    advanced: Object.freeze(advanced),
    internal: Object.freeze(internal),
    randomizationGroups: groups,
    sections,
    generation,
  });
}

export function defineDomain(config) {
  if (!config?.id || !config?.domainPath) throw new TypeError("Domain requires id and domainPath.");
  if (!/^n:factory(?:$|:)/.test(config.domainPath)) throw new TypeError(`Invalid factory domain path: ${config.domainPath}`);
  const record = { kind:"domain", id:config.id, domainPath:config.domainPath, parentDomainPath:config.parentDomainPath??null, apiName:config.apiName??config.id.replaceAll("-","_"), version:config.version??"0.1.0", stability:config.stability??"experimental", requires:list(config.requires), provides:list(config.provides), owns:list(config.owns), doesNotOwn:list(config.doesNotOwn), services:list(config.services), metadata:Object.freeze({...(config.metadata??{})}) };
  return Object.freeze({ ...record, contentFingerprint: sha256(record) });
}

export function defineKit(config) {
  if (!config?.id || !config?.domainPath) throw new TypeError("Kit requires id and domainPath.");
  const parameterSchema = Object.freeze((config.parameterSchema ?? []).map((entry) => Object.freeze({ ...entry })));
  const manifest = { kind:"kit", id:config.id, displayName:config.displayName??config.id, version:config.version??"0.1.0", domainPath:config.domainPath, requires:list(config.requires), provides:list(config.provides), services:list(config.services), parameterSchema, editor:normalizeEditor(config.editor, parameterSchema, { displayName: config.displayName ?? config.id, domainPath: config.domainPath }), runtime:Object.freeze({ environments:list(config.runtime?.environments??["node","browser"]), permissions:list(config.runtime?.permissions) }), source:Object.freeze({ module:config.source?.module??null, exportName:config.source?.exportName??"kit" }), metadata:Object.freeze({...(config.metadata??{})}) };
  return Object.freeze({ ...manifest, contentFingerprint: sha256(manifest) });
}
