# Horror character models

Source folder: [Astra Assets / Horror Characters](https://drive.google.com/drive/folders/1pjnMU6clYeSCQ9C32EFbmWlAHv0hedDU).

| Runtime model | Source | Encounter roles |
| --- | --- | --- |
| `butler.glb` | The_Butler_Idle_Walk.glb, Drive `1MhOm4ENqpZOwJSGb49COSsrs0UscQdbW` | Guest/reflection, porter, moving mannequin and warden encounters |
| `hollow.glb` | the-hollow-animated-materials-v2.glb, Drive `1GcmdUsJbQbN_i0qTORIYpWjsS6M45SeS` | Tall figure, shadow, weaver and mourner encounters |
| `matriarch.glb` | Brood_Matriarch_Animated.glb, Drive `1At4jBpepq07aKawh5vPkfh8qe3ydZb5z` | Ceiling encounters |
| `unburied.glb` | The_Unburied_Animated.glb, Drive `1K43FBFcL7k5wbbofE6RafQbRlAp3L7Cj` | Stationary harmless figures on seeded normal floors |

Butler and Matriarch use the latest retopologized local exports corresponding to the Drive replacement uploads. Hollow uses materials-v2, not the older export. Runtime textures are capped at 1024 pixels by `scripts/optimize-character-textures.py`; geometry, skinning and animation data are retained. Each file is self-contained and loaded locally before gameplay starts. Idle/Walk are selected by encounter state, and encounter simulation controls approach distance. Clones have separate skeletons; geometry/materials/textures are shared until scene disposal.

Unburied is explicitly **non-attacking**: it only sways in place on normal floors. Rejecting that normal floor still counts as a false alarm. It has one five-second Idle clip. Its body and head were rebuilt using QuadriFlow, projected to the approved source, reweighted and baked from matched source meshes; original hand/finger geometry was retained. Whole-model triangle count fell from 761,948 to 229,210. Clean reimport and five posed comparisons were checked; sampled maximum surface difference was approximately 4.2 cm at a wound edge, with approximately 0.034 mm overall sampled mean. This is a runtime candidate, not a claim of perfect source equivalence. The approved source remains untouched.

These are user-supplied project assets. Source and runtime SHA-256 hashes are recorded in `provenance.json`; no new third-party license grant is inferred from Drive access. The existing supplied-audio license gap remains separate.
