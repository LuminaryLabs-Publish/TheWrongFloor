/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const REVISION = '165';

const MOUSE = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 };
const TOUCH = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 };
const CullFaceNone = 0;
const CullFaceBack = 1;
const CullFaceFront = 2;
const CullFaceFrontBack = 3;
const BasicShadowMap = 0;
const PCFShadowMap = 1;
const PCFSoftShadowMap = 2;
const VSMShadowMap = 3;
const FrontSide = 0;
const BackSide = 1;
const DoubleSide = 2;
const NoBlending = 0;
const NormalBlending = 1;
const AdditiveBlending = 2;
const SubtractiveBlending = 3;
const MultiplyBlending = 4;
const CustomBlending = 5;
const AddEquation = 100;
const SubtractEquation = 101;
const ReverseSubtractEquation = 102;
const MinEquation = 103;
const MaxEquation = 104;
const ZeroFactor = 200;
const OneFactor = 201;
const SrcColorFactor = 202;
const OneMinusSrcColorFactor = 203;
const SrcAlphaFactor = 204;
const OneMinusSrcAlphaFactor = 205;
const DstAlphaFactor = 206;
const OneMinusDstAlphaFactor = 207;
const DstColorFactor = 208;
const OneMinusDstColorFactor = 209;
const SrcAlphaSaturateFactor = 210;
const ConstantColorFactor = 211;
const OneMinusConstantColorFactor = 212;
const ConstantAlphaFactor = 213;
const OneMinusConstantAlphaFactor = 214;
const NeverDepth = 0;
const AlwaysDepth = 1;
const LessDepth = 2;
const LessEqualDepth = 3;
const EqualDepth = 4;
const GreaterEqualDepth = 5;
const GreaterDepth = 6;
const NotEqualDepth = 7;
const MultiplyOperation = 0;
const MixOperation = 1;
const AddOperation = 2;
const NoToneMapping = 0;
const LinearToneMapping = 1;
const ReinhardToneMapping = 2;
const CineonToneMapping = 3;
const ACESFilmicToneMapping = 4;
const CustomToneMapping = 5;
const AgXToneMapping = 6;
const NeutralToneMapping = 7;
const AttachedBindMode = 'attached';
const DetachedBindMode = 'detached';

const UVMapping = 300;
const CubeReflectionMapping = 301;
const CubeRefractionMapping = 302;
const EquirectangularReflectionMapping = 303;
const EquirectangularRefractionMapping = 304;
const CubeUVReflectionMapping = 306;
const RepeatWrapping = 1000;
const ClampToEdgeWrapping = 1001;
const MirroredRepeatWrapping = 1002;
const NearestFilter = 1003;
const NearestMipmapNearestFilter = 1004;
const NearestMipMapNearestFilter = 1004;
const NearestMipmapLinearFilter = 1005;
const NearestMipMapLinearFilter = 1005;
const LinearFilter = 1006;
const LinearMipmapNearestFilter = 1007;
const LinearMipMapNearestFilter = 1007;
const LinearMipmapLinearFilter = 1008;
const LinearMipMapLinearFilter = 1008;
const UnsignedByteType = 1009;
const ByteType = 1010;
const ShortType = 1011;
const UnsignedShortType = 1012;
const IntType = 1013;
const UnsignedIntType = 1014;
const FloatType = 1015;
const HalfFloatType = 1016;
const UnsignedShort4444Type = 1017;
const UnsignedShort5551Type = 1018;
const UnsignedInt248Type = 1020;
const UnsignedInt5999Type = 35902;
const AlphaFormat = 1021;
const RGBFormat = 1022;
const RGBAFormat = 1023;
const LuminanceFormat = 1024;
const LuminanceAlphaFormat = 1025;
const DepthFormat = 1026;
const DepthStencilFormat = 1027;
const RedFormat = 1028;
const RedIntegerFormat = 1029;
const RGFormat = 1030;
const RGIntegerFormat = 1031;
const RGBAIntegerFormat = 1033;

const RGB_S3TC_DXT1_Format = 33776;
const RGBA_S3TC_DXT1_Format = 33777;
const RGBA_S3TC_DXT3_Format = 33778;
const RGBA_S3TC_DXT5_Format = 33779;
const RGB_PVRTC_4BPPV1_Format = 35840;
const RGB_PVRTC_2BPPV1_Format = 35841;
const RGBA_PVRTC_4BPPV1_Format = 35842;
const RGBA_PVRTC_2BPPV1_Format = 35843;
const RGB_ETC1_Format = 36196;
const RGB_ETC2_Format = 37492;
const RGBA_ETC2_EAC_Format = 37496;
const RGBA_ASTC_4x4_Format = 37808;
const RGBA_ASTC_5x4_Format = 37809;
const RGBA_ASTC_5x5_Format = 37810;
const RGBA_ASTC_6x5_Format = 37811;
const RGBA_ASTC_6x6_Format = 37812;
const RGBA_ASTC_8x5_Format = 37813;
const RGBA_ASTC_8x6_Format = 37814;
const RGBA_ASTC_8x8_Format = 37815;
const RGBA_ASTC_10x5_Format = 37816;
const RGBA_ASTC_10x6_Format = 37817;
const RGBA_ASTC_10x8_Format = 37818;
const RGBA_ASTC_10x10_Format = 37819;
const RGBA_ASTC_12x10_Format = 37820;
const RGBA_ASTC_12x12_Format = 37821;
const RGBA_BPTC_Format = 36492;
const RGB_BPTC_SIGNED_Format = 36494;
const RGB_BPTC_UNSIGNED_Format = 36495;
const RED_RGTC1_Format = 36283;
const SIGNED_RED_RGTC1_Format = 36284;
const RED_GREEN_RGTC2_Format = 36285;
const SIGNED_RED_GREEN_RGTC2_Format = 36286;
const LoopOnce = 2200;
const LoopRepeat = 2201;
const LoopPingPong = 2202;
const InterpolateDiscrete = 2300;
const InterpolateLinear = 2301;
const InterpolateSmooth = 2302;
const ZeroCurvatureEnding = 2400;
const ZeroSlopeEnding = 2401;
const WrapAroundEnding = 2402;
const NormalAnimationBlendMode = 2500;
const AdditiveAnimationBlendMode = 2501;
const TrianglesDrawMode = 0;
const TriangleStripDrawMode = 1;
const TriangleFanDrawMode = 2;
const BasicDepthPacking = 3200;
const RGBADepthPacking = 3201;
const TangentSpaceNormalMap = 0;
const ObjectSpaceNormalMap = 1;

// Color space string identifiers, matching CSS Color Module Level 4 and WebGPU names where available.
const NoColorSpace = '';
const SRGBColorSpace = 'srgb';
const LinearSRGBColorSpace = 'srgb-linear';
const DisplayP3ColorSpace = 'display-p3';
const LinearDisplayP3ColorSpace = 'display-p3-linear';

const LinearTransfer = 'linear';
const SRGBTransfer = 'srgb';

const Rec709Primaries = 'rec709';
const P3Primaries = 'p3';

const ZeroStencilOp = 0;
const KeepStencilOp = 7680;
const ReplaceStencilOp = 7681;
const IncrementStencilOp = 7682;
const DecrementStencilOp = 7683;
const IncrementWrapStencilOp = 34055;
const DecrementWrapStencilOp = 34056;
const InvertStencilOp = 5386;

const NeverStencilFunc = 512;
const LessStencilFunc = 513;
const EqualStencilFunc = 514;
const LessEqualStencilFunc = 515;
const GreaterStencilFunc = 516;
const NotEqualStencilFunc = 517;
const GreaterEqualStencilFunc = 518;
const AlwaysStencilFunc = 519;

const NeverCompare = 512;
const LessCompare = 513;
const EqualCompare = 514;
const LessEqualCompare = 515;
const GreaterCompare = 516;
const NotEqualCompare = 517;
const GreaterEqualCompare = 518;
const AlwaysCompare = 519;

const StaticDrawUsage = 35044;
const DynamicDrawUsage = 35048;
const StreamDrawUsage = 35040;
const StaticReadUsage = 35045;
const DynamicReadUsage = 35049;
const StreamReadUsage = 35041;
const StaticCopyUsage = 35046;
const DynamicCopyUsage = 35050;
const StreamCopyUsage = 35042;

const GLSL1 = '100';
const GLSL3 = '300 es';

const WebGLCoordinateSystem = 2000;
const WebGPUCoordinateSystem = 2001;

/**
 * https://github.com/mrdoob/eventdispatcher.js/
 */

class EventDispatcher {

	addEventListener( type, listener ) {

		if ( this._listeners === undefined ) this._listeners = {};

		const listeners = this._listeners;

		if ( listeners[ type ] === undefined ) {

			listeners[ type ] = [];

		}

		if ( listeners[ type ].indexOf( listener ) === - 1 ) {

			listeners[ type ].push( listener );

		}

	}

	hasEventListener( type, listener ) {

		if ( this._listeners === undefined ) return false;

		const listeners = this._listeners;

		return listeners[ type ] !== undefined && listeners[ type ].indexOf( listener ) !== - 1;

	}

	removeEventListener( type, listener ) {

		if ( this._listeners === undefined ) return;

		const listeners = this._listeners;
		const listenerArray = listeners[ type ];

		if ( listenerArray !== undefined ) {

			const index = listenerArray.indexOf( listener );

			if ( index !== - 1 ) {

				listenerArray.splice( index, 1 );

			}

		}

	}

	dispatchEvent( event ) {

		if ( this._listeners === undefined ) return;

		const listeners = this._listeners;
		const listenerArray = listeners[ event.type ];

		if ( listenerArray !== undefined ) {

			event.target = this;

			// Make a copy, in case listeners are removed while iterating.
			const array = listenerArray.slice( 0 );

			for ( let i = 0, l = array.length; i < l; i ++ ) {

				array[ i ].call( this, event );

			}

			event.target = null;

		}

	}

}

const _lut = [ '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '0a', '0b', '0c', '0d', '0e', '0f', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '1a', '1b', '1c', '1d', '1e', '1f', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '2a', '2b', '2c', '2d', '2e', '2f', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '3a', '3b', '3c', '3d', '3e', '3f', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '4a', '4b', '4c', '4d', '4e', '4f', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '5a', '5b', '5c', '5d', '5e', '5f', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '6a', '6b', '6c', '6d', '6e', '6f', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '7a', '7b', '7c', '7d', '7e', '7f', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '8a', '8b', '8c', '8d', '8e', '8f', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '9a', '9b', '9c', '9d', '9e', '9f', 'a0', 'a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'aa', 'ab', 'ac', 'ad', 'ae', 'af', 'b0', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9', 'ba', 'bb', 'bc', 'bd', 'be', 'bf', 'c0', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'ca', 'cb', 'cc', 'cd', 'ce', 'cf', 'd0', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'da', 'db', 'dc', 'dd', 'de', 'df', 'e0', 'e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8', 'e9', 'ea', 'eb', 'ec', 'ed', 'ee', 'ef', 'f0', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'fa', 'fb', 'fc', 'fd', 'fe', 'ff' ];

let _seed = 1234567;


const DEG2RAD = Math.PI / 180;
const RAD2DEG = 180 / Math.PI;

// http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136
function generateUUID() {

	const d0 = Math.random() * 0xffffffff | 0;
	const d1 = Math.random() * 0xffffffff | 0;
	const d2 = Math.random() * 0xffffffff | 0;
	const d3 = Math.random() * 0xffffffff | 0;
	const uuid = _lut[ d0 & 0xff ] + _lut[ d0 >> 8 & 0xff ] + _lut[ d0 >> 16 & 0xff ] + _lut[ d0 >> 24 & 0xff ] + '-' +
			_lut[ d1 & 0xff ] + _lut[ d1 >> 8 & 0xff ] + '-' + _lut[ d1 >> 16 & 0x0f | 0x40 ] + _lut[ d1 >> 24 & 0xff ] + '-' +
			_lut[ d2 & 0x3f | 0x80 ] + _lut[ d2 >> 8 & 0xff ] + '-' + _lut[ d2 >> 16 & 0xff ] + _lut[ d2 >> 24 & 0xff ] +
			_lut[ d3 & 0xff ] + _lut[ d3 >> 8 & 0xff ] + _lut[ d3 >> 16 & 0xff ] + _lut[ d3 >> 24 & 0xff ];

	// .toLowerCase() here flattens concatenated strings to save heap memory space.
	return uuid.toLowerCase();

}

function clamp( value, min, max ) {

	return Math.max( min, Math.min( max, value ) );

}

// compute euclidean modulo of m % n
// https://en.wikipedia.org/wiki/Modulo_operation
function euclideanModulo( n, m ) {

	return ( ( n % m ) + m ) % m;

}

// Linear mapping from range <a1, a2> to range <b1, b2>
function mapLinear( x, a1, a2, b1, b2 ) {

	return b1 + ( x - a1 ) * ( b2 - b1 ) / ( a2 - a1 );

}

// https://www.gamedev.net/tutorials/programming/general-and-gameplay-programming/inverse-lerp-a-super-useful-yet-often-overlooked-function-r5230/
function inverseLerp( x, y, value ) {

	if ( x !== y ) {

		return ( value - x ) / ( y - x );

	} else {

		return 0;

	}

}

// https://en.wikipedia.org/wiki/Linear_interpolation
function lerp( x, y, t ) {

	return ( 1 - t ) * x + t * y;

}

// http://www.rorydriscoll.com/2016/03/07/frame-rate-independent-damping-using-lerp/
function damp( x, y, lambda, dt ) {

	return lerp( x, y, 1 - Math.exp( - lambda * dt ) );

}

// https://www.desmos.com/calculator/vcsjnyz7x4
function pingpong( x, length = 1 ) {

	return length - Math.abs( euclideanModulo( x, length * 2 ) - length );

}

// http://en.wikipedia.org/wiki/Smoothstep
function smoothstep( x, min, max ) {

	if ( x <= min ) return 0;
	if ( x >= max ) return 1;

	x = ( x - min ) / ( max - min );

	return x * x * ( 3 - 2 * x );

}

function smootherstep( x, min, max ) {

	if ( x <= min ) return 0;
	if ( x >= max ) return 1;

	x = ( x - min ) / ( max - min );

	return x * x * x * ( x * ( x * 6 - 15 ) + 10 );

}

// Random integer from <low, high> interval
function randInt( low, high ) {

	return low + Math.floor( Math.random() * ( high - low + 1 ) );

}

// Random float from <low, high> interval
function randFloat( low, high ) {

	return low + Math.random() * ( high - low );

}

// Random float from <-range/2, range/2> interval
function randFloatSpread( range ) {

	return range * ( 0.5 - Math.random() );

}

// Deterministic pseudo-random float in the interval [ 0, 1 ]
function seededRandom( s ) {

	if ( s !== undefined ) _seed = s;

	// Mulberry32 generator

	let t = _seed += 0x6D2B79F5;

	t = Math.imul( t ^ t >>> 15, t | 1 );

	t ^= t + Math.imul( t ^ t >>> 7, t | 61 );

	return ( ( t ^ t >>> 14 ) >>> 0 ) / 4294967296;

}

function degToRad( degrees ) {

	return degrees * DEG2RAD;

}

function radToDeg( radians ) {

	return radians * RAD2DEG;

}

function isPowerOfTwo( value ) {

	return ( value & ( value - 1 ) ) === 0 && value !== 0;

}

function ceilPowerOfTwo( value ) {

	return Math.pow( 2, Math.ceil( Math.log( value ) / Math.LN2 ) );

}

function floorPowerOfTwo( value ) {

	return Math.pow( 2, Math.floor( Math.log( value ) / Math.LN2 ) );

}

function setQuaternionFromProperEuler( q, a, b, c, order ) {

	// Intrinsic Proper Euler Angles - see https://en.wikipedia.org/wiki/Euler_angles

	// rotations are applied to the axes in the order specified by 'order'
	// rotation by angle 'a' is applied first, then by angle 'b', then by angle 'c'
	// angles are in radians

	const cos = Math.cos;
	const sin = Math.sin;

	const c2 = cos( b / 2 );
	const s2 = sin( b / 2 );

	const c13 = cos( ( a + c ) / 2 );
	const s13 = sin( ( a + c ) / 2 );

	const c1_3 = cos( ( a - c ) / 2 );
	const s1_3 = sin( ( a - c ) / 2 );

	const c3_1 = cos( ( c - a ) / 2 );
	const s3_1 = sin( ( c - a ) / 2 );

	switch ( order ) {

		case 'XYX':
			q.set( c2 * s13, s2 * c1_3, s2 * s1_3, c2 * c13 );
			break;

		case 'YZY':
			q.set( s2 * s1_3, c2 * s13, s2 * c1_3, c2 * c13 );
			break;

		case 'ZXZ':
			q.set( s2 * c1_3, s2 * s1_3, c2 * s13, c2 * c13 );
			break;

		case 'XZX':
			q.set( c2 * s13, s2 * s3_1, s2 * c3_1, c2 * c13 );
			break;

		case 'YXY':
			q.set( s2 * c3_1, c2 * s13, s2 * s3_1, c2 * c13 );
			break;

		case 'ZYZ':
			q.set( s2 * s3_1, s2 * c3_1, c2 * s13, c2 * c13 );
			break;

		default:
			console.warn( 'THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: ' + order );

	}

}

function denormalize( value, array ) {

	switch ( array.constructor ) {

		case Float32Array:

			return value;

		case Uint32Array:

			return value / 4294967295.0;

		case Uint16Array:

			return value / 65535.0;

		case Uint8Array:

			return value / 255.0;

		case Int32Array:

			return Math.max( value / 2147483647.0, - 1.0 );

		case Int16Array:

			return Math.max( value / 32767.0, - 1.0 );

		case Int8Array:

			return Math.max( value / 127.0, - 1.0 );

		default:

			throw new Error( 'Invalid component type.' );

	}

}

function normalize( value, array ) {

	switch ( array.constructor ) {

		case Float32Array:

			return value;

		case Uint32Array:

			return Math.round( value * 4294967295.0 );

		case Uint16Array:

			return Math.round( value * 65535.0 );

		case Uint8Array:

			return Math.round( value * 255.0 );

		case Int32Array:

			return Math.round( value * 2147483647.0 );

		case Int16Array:

			return Math.round( value * 32767.0 );

		case Int8Array:

			return Math.round( value * 127.0 );

		default:

			throw new Error( 'Invalid component type.' );

	}

}

const MathUtils = {
	DEG2RAD: DEG2RAD,
	RAD2DEG: RAD2DEG,
	generateUUID: generateUUID,
	clamp: clamp,
	euclideanModulo: euclideanModulo,
	mapLinear: mapLinear,
	inverseLerp: inverseLerp,
	lerp: lerp,
	damp: damp,
	pingpong: pingpong,
	smoothstep: smoothstep,
	smootherstep: smootherstep,
	randInt: randInt,
	randFloat: randFloat,
	randFloatSpread: randFloatSpread,
	seededRandom: seededRandom,
	degToRad: degToRad,
	radToDeg: radToDeg,
	isPowerOfTwo: isPowerOfTwo,
	ceilPowerOfTwo: ceilPowerOfTwo,
	floorPowerOfTwo: floorPowerOfTwo,
	setQuaternionFromProperEuler: setQuaternionFromProperEuler,
	normalize: normalize,
	denormalize: denormalize
};

class Vector2 {

	constructor( x = 0, y = 0 ) {

		Vector2.prototype.isVector2 = true;

		this.x = x;
		this.y = y;

	}

	get width() {

		return this.x;

	}

	set width( value ) {

		this.x = value;

	}

	get height() {

		return this.y;

	}

	set height( value ) {

		this.y = value;

	}

	set( x, y ) {

		this.x = x;
		this.y = y;

		return this;

	}

	setScalar( scalar ) {

		this.x = scalar;
		this.y = scalar;

		return this;

	}

	setX( x ) {

		this.x = x;

		return this;

	}

	setY( y ) {

		this.y = y;

		return this;

	}

	setComponent( index, value ) {

		switch ( index ) {

			case 0: this.x = value; break;
			case 1: this.y = value; break;
			default: throw new Error( 'index is out of range: ' + index );

		}

		return this;

	}

	getComponent( index ) {

		switch ( index ) {

			case 0: return this.x;
			case 1: return this.y;
			default: throw new Error( 'index is out of range: ' + index );

		}

	}

	clone() {

		return new this.constructor( this.x, this.y );

	}

	copy( v ) {

		this.x = v.x;
		this.y = v.y;

		return this;

	}

	add( v ) {

		this.x += v.x;
		this.y += v.y;

		return this;

	}

	addScalar( s ) {

		this.x += s;
		this.y += s;

		return this;

	}

	addVectors( a, b ) {

		this.x = a.x + b.x;
		this.y = a.y + b.y;

		return this;

	}

	addScaledVector( v, s ) {

		this.x += v.x * s;
		this.y += v.y * s;

		return this;

	}

	sub( v ) {

		this.x -= v.x;
		this.y -= v.y;

		return this;

	}

	subScalar( s ) {

		this.x -= s;
		this.y -= s;

		return this;

	}

	subVectors( a, b ) {

		this.x = a.x - b.x;
		this.y = a.y - b.y;

		return this;

	}

	multiply( v ) {

		this.x *= v.x;
		this.y *= v.y;

		return this;

	}

	multiplyScalar( scalar ) {

		this.x *= scalar;
		this.y *= scalar;

		return this;

	}

	divide( v ) {

		this.x /= v.x;
		this.y /= v.y;

		return this;

	}

	divideScalar( scalar ) {

		return this.multiplyScalar( 1 / scalar );

	}

	applyMatrix3( m ) {

		const x = this.x, y = this.y;
		const e = m.elements;

		this.x = e[ 0 ] * x + e[ 3 ] * y + e[ 6 ];
		this.y = e[ 1 ] * x + e[ 4 ] * y + e[ 7 ];

		return this;

	}

	min( v ) {

		this.x = Math.min( this.x, v.x );
		this.y = Math.min( this.y, v.y );

		return this;

	}

	max( v ) {

		this.x = Math.max( this.x, v.x );
		this.y = Math.max( this.y, v.y );

		return this;

	}

	clamp( min, max ) {

		// assumes min < max, componentwise

		this.x = Math.max( min.x, Math.min( max.x, this.x ) );
		this.y = Math.max( min.y, Math.min( max.y, this.y ) );

		return this;

	}

	clampScalar( minVal, maxVal ) {

		this.x = Math.max( minVal, Math.min( maxVal, this.x ) );
		this.y = Math.max( minVal, Math.min( maxVal, this.y ) );

		return this;

	}

	clampLength( min, max ) {

		const length = this.length();

		return this.divideScalar( length || 1 ).multiplyScalar( Math.max( min, Math.min( max, length ) ) );

	}

	floor() {

		this.x = Math.floor( this.x );
		this.y = Math.floor( this.y );

		return this;

	}

	ceil() {

		this.x = Math.ceil( this.x );
		this.y = Math.ceil( this.y );

		return this;

	}

	round() {

		this.x = Math.round( this.x );
		this.y = Math.round( this.y );

		return this;

	}

	roundToZero() {

		this.x = Math.trunc( this.x );
		this.y = Math.trunc( this.y );

		return this;

	}

	negate() {

		this.x = - this.x;
		this.y = - this.y;

		return this;

	}

	dot( v ) {

		return this.x * v.x + this.y * v.y;

	}

	cross( v ) {

		return this.x * v.y - this.y * v.x;

	}

	lengthSq() {

		return this.x * this.x + this.y * this.y;

	}

	length() {

		return Math.sqrt( this.x * this.x + this.y * this.y );

	}

	manhattanLength() {

		return Math.abs( this.x ) + Math.abs( this.y );

	}

	normalize() {

		return this.divideScalar( this.length() || 1 );

	}

	angle() {

		// computes the angle in radians with respect to the positive x-axis

		const angle = Math.atan2( - this.y, - this.x ) + Math.PI;

		return angle;

	}

	angleTo( v ) {

		const denominator = Math.sqrt( this.lengthSq() * v.lengthSq() );

		if ( denominator === 0 ) return Math.PI / 2;

		const theta = this.dot( v ) / denominator;

		// clamp, to handle numerical problems

		return Math.acos( clamp( theta, - 1, 1 ) );

	}

	distanceTo( v ) {

		return Math.sqrt( this.distanceToSquared( v ) );

	}

	distanceToSquared( v ) {

		const dx = this.x - v.x, dy = this.y - v.y;
		return dx * dx + dy * dy;

	}

	manhattanDistanceTo( v ) {

		return Math.abs( this.x - v.x ) + Math.abs( this.y - v.y );

	}

	setLength( length ) {

		return this.normalize().multiplyScalar( length );

	}

	lerp( v, alpha ) {

		this.x += ( v.x - this.x ) * alpha;
		this.y += ( v.y - this.y ) * alpha;

		return this;

	}

	lerpVectors( v1, v2, alpha ) {

		this.x = v1.x + ( v2.x - v1.x ) * alpha;
		this.y = v1.y + ( v2.y - v1.y ) * alpha;

		return this;

	}

	equals( v ) {

		return ( ( v.x === this.x ) && ( v.y === this.y ) );

	}

	fromArray( array, offset = 0 ) {

		this.x = array[ offset ];
		this.y = array[ offset + 1 ];

		return this;

	}

	toArray( array = [], offset = 0 ) {

		array[ offset ] = this.x;
		array[ offset + 1 ] = this.y;

		return array;

	}

	fromBufferAttribute( attribute, index ) {

		this.x = attribute.getX( index );
		this.y = attribute.getY( index );

		return this;

	}

	rotateAround( center, angle ) {

		const c = Math.cos( angle ), s = Math.sin( angle );

		const x = this.x - center.x;
		const y = this.y - center.y;

		this.x = x * c - y * s + center.x;
		this.y = x * s + y * c + center.y;

		return this;

	}

	random() {

		this.x = Math.random();
		this.y = Math.random();

		return this;

	}

	*[ Symbol.iterator ]() {

		yield this.x;
		yield this.y;

	}

}

class Matrix3 {

	constructor( n11, n12, n13, n21, n22, n23, n31, n32, n33 ) {

		Matrix3.prototype.isMatrix3 = true;

		this.elements = [

			1, 0, 0,
			0, 1, 0,
			0, 0, 1

		];

		if ( n11 !== undefined ) {

			this.set( n11, n12, n13, n21, n22, n23, n31, n32, n33 );

		}

	}

	set( n11, n12, n13, n21, n22, n23, n31, n32, n33 ) {

		const te = this.elements;

		te[ 0 ] = n11; te[ 1 ] = n21; te[ 2 ] = n31;
		te[ 3 ] = n12; te[ 4 ] = n22; te[ 5 ] = n32;
		te[ 6 ] = n13; te[ 7 ] = n23; te[ 8 ] = n33;

		return this;

	}

	identity() {

		this.set(

			1, 0, 0,
			0, 1, 0,
			0, 0, 1

		);

		return this;

	}

	copy( m ) {

		const te = this.elements;
		const me = m.elements;

		te[ 0 ] = me[ 0 ]; te[ 1 ] = me[ 1 ]; te[ 2 ] = me[ 2 ];
		te[ 3 ] = me[ 3 ]; te[ 4 ] = me[ 4 ]; te[ 5 ] = me[ 5 ];
		te[ 6 ] = me[ 6 ]; te[ 7 ] = me[ 7 ]; te[ 8 ] = me[ 8 ];

		return this;

	}

	extractBasis( xAxis, yAxis, zAxis ) {

		xAxis.setFromMatrix3Column( this, 0 );
		yAxis.setFromMatrix3Column( this, 1 );
		zAxis.setFromMatrix3Column( this, 2 );

		return this;

	}

	setFromMatrix4( m ) {

		const me = m.elements;

		this.set(

			me[ 0 ], me[ 4 ], me[ 8 ],
			me[ 1 ], me[ 5 ], me[ 9 ],
			me[ 2 ], me[ 6 ], me[ 10 ]

		);

		return this;

	}

	multiply( m ) {

		return this.multiplyMatrices( this, m );

	}

	premultiply( m ) {

		return this.multiplyMatrices( m, this );

	}

	multiplyMatrices( a, b ) {

		const ae = a.elements;
		const be = b.elements;
		const te = this.elements;

		const a11 = ae[ 0 ], a12 = ae[ 3 ], a13 = ae[ 6 ];
		const a21 = ae[ 1 ], a22 = ae[ 4 ], a23 = ae[ 7 ];
		const a31 = ae[ 2 ], a32 = ae[ 5 ], a33 = ae[ 8 ];

		const b11 = be[ 0 ], b12 = be[ 3 ], b13 = be[ 6 ];
		const b21 = be[ 1 ], b22 = be[ 4 ], b23 = be[ 7 ];
		const b31 = be[ 2 ], b32 = be[ 5 ], b33 = be[ 8 ];

		te[ 0 ] = a11 * b11 + a12 * b21 + a13 * b31;
		te[ 3 ] = a11 * b12 + a12 * b22 + a13 * b32;
		te[ 6 ] = a11 * b13 + a12 * b23 + a13 * b33;

		te[ 1 ] = a21 * b11 + a22 * b21 + a23 * b31;
		te[ 4 ] = a21 * b12 + a22 * b22 + a23 * b32;
		te[ 7 ] = a21 * b13 + a22 * b23 + a23 * b33;

		te[ 2 ] = a31 * b11 + a32 * b21 + a33 * b31;
		te[ 5 ] = a31 * b12 + a32 * b22 + a33 * b32;
		te[ 8 ] = a31 * b13 + a32 * b23 + a33 * b33;

		return this;

	}

	multiplyScalar( s ) {

		const te = this.elements;

		te[ 0 ] *= s; te[ 3 ] *= s; te[ 6 ] *= s;
		te[ 1 ] *= s; te[ 4 ] *= s; te[ 7 ] *= s;
		te[ 2 ] *= s; te[ 5 ] *= s; te[ 8 ] *= s;

		return this;

	}

	determinant() {

		const te = this.elements;

		const a = te[ 0 ], b = te[ 1 ], c = te[ 2 ],
			d = te[ 3 ], e = te[ 4 ], f = te[ 5 ],
			g = te[ 6 ], h = te[ 7 ], i = te[ 8 ];

		return a * e * i - a * f * h - b * d * i + b * f * g + c * d * h - c * e * g;

	}

	invert() {

		const te = this.elements,

			n11 = te[ 0 ], n21 = te[ 1 ], n31 = te[ 2 ],
			n12 = te[ 3 ], n22 = te[ 4 ], n32 = te[ 5 ],
			n13 = te[ 6 ], n23 = te[ 7 ], n33 = te[ 8 ],

			t11 = n33 * n22 - n32 * n23,
			t12 = n32 * n13 - n33 * n12,
			t13 = n23 * n12 - n22 * n13,

			det = n11 * t11 + n21 * t12 + n31 * t13;

		if ( det === 0 ) return this.set( 0, 0, 0, 0, 0, 0, 0, 0, 0 );

		const detInv = 1 / det;

		te[ 0 ] = t11 * detInv;
		te[ 1 ] = ( n31 * n23 - n33 * n21 ) * detInv;
		te[ 2 ] = ( n32 * n21 - n31 * n22 ) * detInv;

		te[ 3 ] = t12 * detInv;
		te[ 4 ] = ( n33 * n11 - n31 * n13 ) * detInv;
		te[ 5 ] = ( n31 * n12 - n32 * n11 ) * detInv;

		te[ 6 ] = t13 * detInv;
		te[ 7 ] = ( n21 * n13 - n23 * n11 ) * detInv;
		te[ 8 ] = ( n22 * n11 - n21 * n12 ) * detInv;

		return this;

	}

	transpose() {

		let tmp;
		const m = this.elements;

		tmp = m[ 1 ]; m[ 1 ] = m[ 3 ]; m[ 3 ] = tmp;
		tmp = m[ 2 ]; m[ 2 ] = m[ 6 ]; m[ 6 ] = tmp;
		tmp = m[ 5 ]; m[ 5 ] = m[ 7 ]; m[ 7 ] = tmp;

		return this;

	}

	getNormalMatrix( matrix4 ) {

		return this.setFromMatrix4( matrix4 ).invert().transpose();

	}

	transposeIntoArray( r ) {

		const m = this.elements;

		r[ 0 ] = m[ 0 ];
		r[ 1 ] = m[ 3 ];
		r[ 2 ] = m[ 6 ];
		r[ 3 ] = m[ 1 ];
		r[ 4 ] = m[ 4 ];
		r[ 5 ] = m[ 7 ];
		r[ 6 ] = m[ 2 ];
		r[ 7 ] = m[ 5 ];
		r[ 8 ] = m[ 8 ];

		return this;

	}

	setUvTransform( tx, ty, sx, sy, rotation, cx, cy ) {

		const c = Math.cos( rotation );
		const s = Math.sin( rotation );

		this.set(
			sx * c, sx * s, - sx * ( c * cx + s * cy ) + cx + tx,
			- sy * s, sy * c, - sy * ( - s * cx + c * cy ) + cy + ty,
			0, 0, 1
		);

		return this;

	}

	//

	scale( sx, sy ) {

		this.premultiply( _m3.makeScale( sx, sy ) );

		return this;

	}

	rotate( theta ) {

		this.premultiply( _m3.makeRotation( - theta ) );

		return this;

	}

	translate( tx, ty ) {

		this.premultiply( _m3.makeTranslation( tx, ty ) );

		return this;

	}

	// for 2D Transforms

	makeTranslation( x, y ) {

		if ( x.isVector2 ) {

			this.set(

				1, 0, x.x,
				0, 1, x.y,
				0, 0, 1

			);

		} else {

			this.set(

				1, 0, x,
				0, 1, y,
				0, 0, 1

			);

		}

		return this;

	}

	makeRotation( theta ) {

		// counterclockwise

		const c = Math.cos( theta );
		const s = Math.sin( theta );

		this.set(

			c, - s, 0,
			s, c, 0,
			0, 0, 1

		);

		return this;

	}

	makeScale( x, y ) {

		this.set(

			x, 0, 0,
			0, y, 0,
			0, 0, 1

		);

		return this;

	}

	//

	equals( matrix ) {

		const te = this.elements;
		const me = matrix.elements;

		for ( let i = 0; i < 9; i ++ ) {

			if ( te[ i ] !== me[ i ] ) return false;

		}

		return true;

	}

	fromArray( array, offset = 0 ) {

		for ( let i = 0; i < 9; i ++ ) {

			this.elements[ i ] = array[ i + offset ];

		}

		return this;

	}

	toArray( array = [], offset = 0 ) {

		const te = this.elements;

		array[ offset ] = te[ 0 ];
		array[ offset + 1 ] = te[ 1 ];
		array[ offset + 2 ] = te[ 2 ];

		array[ offset + 3 ] = te[ 3 ];
		array[ offset + 4 ] = te[ 4 ];
		array[ offset + 5 ] = te[ 5 ];

		array[ offset + 6 ] = te[ 6 ];
		array[ offset + 7 ] = te[ 7 ];
		array[ offset + 8 ] = te[ 8 ];

		return array;

	}

	clone() {

		return new this.constructor().fromArray( this.elements );

	}

}

const _m3 = /*@__PURE__*/ new Matrix3();

function arrayNeedsUint32( array ) {

	// assumes larger values usually on last

	for ( let i = array.length - 1; i >= 0; -- i ) {

		if ( array[ i ] >= 65535 ) return true; // account for PRIMITIVE_RESTART_FIXED_INDEX, #24565

	}

	return false;

}

const TYPED_ARRAYS = {
	Int8Array: Int8Array,
	Uint8Array: Uint8Array,
	Uint8ClampedArray: Uint8ClampedArray,
	Int16Array: Int16Array,
	Uint16Array: Uint16Array,
	Int32Array: Int32Array,
	Uint32Array: Uint32Array,
	Float32Array: Float32Array,
	Float64Array: Float64Array
};

function getTypedArray( type, buffer ) {

	return new TYPED_ARRAYS[ type ]( buffer );

}

function createElementNS( name ) {

	return document.createElementNS( 'http://www.w3.org/1999/xhtml', name );

}

function createCanvasElement() {

	const canvas = createElementNS( 'canvas' );
	canvas.style.display = 'block';
	return canvas;

}

const _cache = {};

function warnOnce( message ) {

	if ( message in _cache ) return;

	_cache[ message ] = true;

	console.warn( message );

}

function probeAsync( gl, sync, interval ) {

	return new Promise( function ( resolve, reject ) {

		function probe() {

			switch ( gl.clientWaitSync( sync, gl.SYNC_FLUSH_COMMANDS_BIT, 0 ) ) {

				case gl.WAIT_FAILED:
					reject();
					break;

				case gl.TIMEOUT_EXPIRED:
					setTimeout( probe, interval );
					break;

				default:
					resolve();

			}

		}

		setTimeout( probe, interval );

	} );

}

/**
 * Matrices converting P3 <-> Rec. 709 primaries, without gamut mapping
 * or clipping. Based on W3C specifications for sRGB and Display P3,
 * and ICC specifications for the D50 connection space. Values in/out
 * are _linear_ sRGB and _linear_ Display P3.
 *
 * Note that both sRGB and Display P3 use the sRGB transfer functions.
 *
 * Reference:
 * - http://www.russellcottrell.com/photo/matrixCalculator.htm
 */

const LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = /*@__PURE__*/ new Matrix3().set(
	0.8224621, 0.177538, 0.0,
	0.0331941, 0.9668058, 0.0,
	0.0170827, 0.0723974, 0.9105199,
);

const LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = /*@__PURE__*/ new Matrix3().set(
	1.2249401, - 0.2249404, 0.0,
	- 0.0420569, 1.0420571, 0.0,
	- 0.0196376, - 0.0786361, 1.0982735
);

/**
 * Defines supported color spaces by transfer function and primaries,
 * and provides conversions to/from the Linear-sRGB reference space.
 */
const COLOR_SPACES = {
	[ LinearSRGBColorSpace ]: {
		transfer: LinearTransfer,
		primaries: Rec709Primaries,
		toReference: ( color ) => color,
		fromReference: ( color ) => color,
	},
	[ SRGBColorSpace ]: {
		transfer: SRGBTransfer,
		primaries: Rec709Primaries,
		toReference: ( color ) => color.convertSRGBToLinear(),
		fromReference: ( color ) => color.convertLinearToSRGB(),
	},
	[ LinearDisplayP3ColorSpace ]: {
		transfer: LinearTransfer,
		primaries: P3Primaries,
		toReference: ( color ) => color.applyMatrix3( LINEAR_DISPLAY_P3_TO_LINEAR_SRGB ),
		fromReference: ( color ) => color.applyMatrix3( LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 ),
	},
	[ DisplayP3ColorSpace ]: {
		transfer: SRGBTransfer,
		primaries: P3Primaries,
		toReference: ( color ) => color.convertSRGBToLinear().applyMatrix3( LINEAR_DISPLAY_P3_TO_LINEAR_SRGB ),
		fromReference: ( color ) => color.applyMatrix3( LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 ).convertLinearToSRGB(),
	},
};

const SUPPORTED_WORKING_COLOR_SPACES = new Set( [ LinearSRGBColorSpace, LinearDisplayP3ColorSpace ] );

const ColorManagement = {

	enabled: true,

	_workingColorSpace: LinearSRGBColorSpace,

	get workingColorSpace() {

		return this._workingColorSpace;

	},

	set workingColorSpace( colorSpace ) {

		if ( ! SUPPORTED_WORKING_COLOR_SPACES.has( colorSpace ) ) {

			throw new Error( `Unsupported working color space, "${ colorSpace }".` );

		}

		this._workingColorSpace = colorSpace;

	},

	convert: function ( color, sourceColorSpace, targetColorSpace ) {

		if ( this.enabled === false || sourceColorSpace === targetColorSpace || ! sourceColorSpace || ! targetColorSpace ) {

			return color;

		}

		const sourceToReference = COLOR_SPACES[ sourceColorSpace ].toReference;
		const targetFromReference = COLOR_SPACES[ targetColorSpace ].fromReference;

		return targetFromReference( sourceToReference( color ) );

	},

	fromWorkingColorSpace: function ( color, targetColorSpace ) {

		return this.convert( color, this._workingColorSpace, targetColorSpace );

	},

	toWorkingColorSpace: function ( color, sourceColorSpace ) {

		return this.convert( color, sourceColorSpace, this._workingColorSpace );

	},

	getPrimaries: function ( colorSpace ) {

		return COLOR_SPACES[ colorSpace ].primaries;

	},

	getTransfer: function ( colorSpace ) {

		if ( colorSpace === NoColorSpace ) return LinearTransfer;

		return COLOR_SPACES[ colorSpace ].transfer;

	},

};


function SRGBToLinear( c ) {

	return ( c < 0.04045 ) ? c * 0.0773993808 : Math.pow( c * 0.9478672986 + 0.0521327014, 2.4 );

}

function LinearToSRGB( c ) {

	return ( c < 0.0031308 ) ? c * 12.92 : 1.055 * ( Math.pow( c, 0.41666 ) ) - 0.055;

}

let _canvas;

class ImageUtils {

	static getDataURL( image ) {

		if ( /^data:/i.test( image.src ) ) {

			return image.src;

		}

		if ( typeof HTMLCanvasElement === 'undefined' ) {

			return image.src;

		}

		let canvas;

		if ( image instanceof HTMLCanvasElement ) {

			canvas = image;

		} else {

			if ( _canvas === undefined ) _canvas = createElementNS( 'canvas' );

			_canvas.width = image.width;
			_canvas.height = image.height;

			const context = _canvas.getContext( '2d' );

			if ( image instanceof ImageData ) {

				context.putImageData( image, 0, 0 );

			} else {

				context.drawImage( image, 0, 0, image.width, image.height );

			}

			canvas = _canvas;

		}

		if ( canvas.width > 2048 || canvas.height > 2048 ) {

			console.warn( 'THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons', image );

			return canvas.toDataURL( 'image/jpeg', 0.6 );

		} else {

			return canvas.toDataURL( 'image/png' );

		}

	}

	static sRGBToLinear( image ) {

		if ( ( typeof HTMLImageElement !== 'undefined' && image instanceof HTMLImageElement ) ||
			( typeof HTMLCanvasElement !== 'undefined' && image instanceof HTMLCanvasElement ) ||
			( typeof ImageBitmap !== 'undefined' && image instanceof ImageBitmap ) ) {

			const canvas = createElementNS( 'canvas' );

			canvas.width = image.width;
			canvas.height = image.height;

			const context = canvas.getContext( '2d' );
			context.drawImage( image, 0, 0, image.width, image.height );

			const imageData = context.getImageData( 0, 0, image.width, image.height );
			const data = imageData.data;

			for ( let i = 0; i < data.length; i ++ ) {

				data[ i ] = SRGBToLinear( data[ i ] / 255 ) * 255;

			}

			context.putImageData( imageData, 0, 0 );

			return canvas;

		} else if ( image.data ) {

			const data = image.data.slice( 0 );

			for ( let i = 0; i < data.length; i ++ ) {

				if ( data instanceof Uint8Array || data instanceof Uint8ClampedArray ) {

					data[ i ] = Math.floor( SRGBToLinear( data[ i ] / 255 ) * 255 );

				} else {

					// assuming float

					data[ i ] = SRGBToLinear( data[ i ] );

				}

			}

			return {
				data: data,
				width: image.width,
				height: image.height
			};

		} else {

			console.warn( 'THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.' );
			return image;

		}

	}

}

let _sourceId = 0;

class Source {

	constructor( data = null ) {

		this.isSource = true;

		Object.defineProperty( this, 'id', { value: _sourceId ++ } );

		this.uuid = generateUUID();

		this.data = data;
		this.dataReady = true;

		this.version = 0;

	}

	set needsUpdate( value ) {

		if ( value === true ) this.version ++;

	}

	toJSON( meta ) {

		const isRootObject = ( meta === undefined || typeof meta === 'string' );

		if ( ! isRootObject && meta.images[ this.uuid ] !== undefined ) {

			return meta.images[ this.uuid ];

		}

		const output = {
			uuid: this.uuid,
			url: ''
		};

		const data = this.data;

		if ( data !== null ) {

			let url;

			if ( Array.isArray( data ) ) {

				// cube texture

				url = [];

				for ( let i = 0, l = data.length; i < l; i ++ ) {

					if ( data[ i ].isDataTexture ) {

						url.push( serializeImage( data[ i ].image ) );

					} else {

						url.push( serializeImage( data[ i ] ) );

					}

				}

			} else {

				// texture

				url = serializeImage( data );

			}

			output.url = url;

		}

		if ( ! isRootObject ) {

			meta.images[ this.uuid ] = output;

		}

		return output;

	}

}

function serializeImage( image ) {

	if ( ( typeof HTMLImageElement !== 'undefined' && image instanceof HTMLImageElement ) ||
		( typeof HTMLCanvasElement !== 'undefined' && image instanceof HTMLCanvasElement ) ||
		( typeof ImageBitmap !== 'undefined' && image instanceof ImageBitmap ) ) {

		// default images

		return ImageUtils.getDataURL( image );

	} else {

		if ( image.data ) {

			// images of DataTexture

			return {
				data: Array.from( image.data ),
				width: image.width,
				height: image.height,
				type: image.data.constructor.name
			};

		} else {

			console.warn( 'THREE.Texture: Unable to serialize Texture.' );
			return {};

		}

	}

}

let _textureId = 0;

class Texture extends EventDispatcher {

	constructor( image = Texture.DEFAULT_IMAGE, mapping = Texture.DEFAULT_MAPPING, wrapS = ClampToEdgeWrapping, wrapT = ClampToEdgeWrapping, magFilter = LinearFilter, minFilter = LinearMipmapLinearFilter, format = RGBAFormat, type = UnsignedByteType, anisotropy = Texture.DEFAULT_ANISOTROPY, colorSpace = NoColorSpace ) {

		super();

		this.isTexture = true;

		Object.defineProperty( this, 'id', { value: _textureId ++ } );

		this.uuid = generateUUID();

		this.name = '';

		this.source = new Source( image );
		this.mipmaps = [];

		this.mapping = mapping;
		this.channel = 0;

		this.wrapS = wrapS;
		this.wrapT = wrapT;

		this.magFilter = magFilter;
		this.minFilter = minFilter;

		this.anisotropy = anisotropy;

		this.format = format;
		this.internalFormat = null;
		this.type = type;

		this.offset = new Vector2( 0, 0 );
		this.repeat = new Vector2( 1, 1 );
		this.center = new Vector2( 0, 0 );
		this.rotation = 0;

		this.matrixAutoUpdate = true;
		this.matrix = new Matrix3();

		this.generateMipmaps = true;
		this.premultiplyAlpha = false;
		this.flipY = true;
		this.unpackAlignment = 4;	// valid values: 1, 2, 4, 8 (see http://www.khronos.org/opengles/sdk/docs/man/xhtml/glPixelStorei.xml)

		this.colorSpace = colorSpace;

		this.userData = {};

		this.version = 0;
		this.onUpdate = null;

		this.isRenderTargetTexture = false; // indicates whether a texture belongs to a render target or not
		this.pmremVersion = 0; // indicates whether this texture should be processed by PMREMGenerator or not (only relevant for render target textures)

	}

	get image() {

		return this.source.data;

	}

	set image( value = null ) {

		this.source.data = value;

	}

	updateMatrix() {

		this.matrix.setUvTransform( this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y );

	}

	clone() {

		return new this.constructor().copy( this );

	}

	copy( source ) {

		this.name = source.name;

		this.source = source.source;
		this.mipmaps = source.mipmaps.slice( 0 );

		this.mapping = source.mapping;
		this.channel = source.channel;

		this.wrapS = source.wrapS;
		this.wrapT = source.wrapT;

		this.magFilter = source.magFilter;
		this.minFilter = source.minFilter;

		this.anisotropy = source.anisotropy;

		this.format = source.format;
		this.internalFormat = source.internalFormat;
		this.type = source.type;

		this.offset.copy( source.offset );
		this.repeat.copy( source.repeat );
		this.center.copy( source.center );
		this.rotation = source.rotation;

		this.matrixAutoUpdate = source.matrixAutoUpdate;
		this.matrix.copy( source.matrix );

		this.generateMipmaps = source.generateMipmaps;
		this.premultiplyAlpha = source.premultiplyAlpha;
		this.flipY = source.flipY;
		this.unpackAlignment = source.unpackAlignment;
		this.colorSpace = source.colorSpace;

		this.userData = JSON.parse( JSON.stringify( source.userData ) );

		this.needsUpdate = true;

		return this;

	}

	toJSON( meta ) {

		const isRootObject = ( meta === undefined || typeof meta === 'string' );

		if ( ! isRootObject && meta.textures[ this.uuid ] !== undefined ) {

			return meta.textures[ this.uuid ];

		}

		const output = {

			metadata: {
				version: 4.6,
				type: 'Texture',
				generator: 'Texture.toJSON'
			},

			uuid: this.uuid,
			name: this.name,

			image: this.source.toJSON( meta ).uuid,

			mapping: this.mapping,
			channel: this.channel,

			repeat: [ this.repeat.x, this.repeat.y ],
			offset: [ this.offset.x, this.offset.y ],
			center: [ this.center.x, this.center.y ],
			rotation: this.rotation,

			wrap: [ this.wrapS, this.wrapT ],

			format: this.format,
			internalFormat: this.internalFormat,
			type: this.type,
			colorSpace: this.colorSpace,

			minFilter: this.minFilter,
			magFilter: this.magFilter,
			anisotropy: this.anisotropy,

			flipY: this.flipY,

			generateMipmaps: this.generateMipmaps,
			premultiplyAlpha: this.premultiplyAlpha,
			unpackAlignment: this.unpackAlignment

		};

		if ( Object.keys( this.userData ).length > 0 ) output.userData = this.userData;

		if ( ! isRootObject ) {

			meta.textures[ this.uuid ] = output;

		}

		return output;

	}

	dispose() {

		this.dispatchEvent( { type: 'dispose' } );

	}

	transformUv( uv ) {

		if ( this.mapping !== UVMapping ) return uv;

		uv.applyMatrix3( this.matrix );

		if ( uv.x < 0 || uv.x > 1 ) {

			switch ( this.wrapS ) {

				case RepeatWrapping:

					uv.x = uv.x - Math.floor( uv.x );
					break;

				case ClampToEdgeWrapping:

					uv.x = uv.x < 0 ? 0 : 1;
					break;

				case MirroredRepeatWrapping:

					if ( Math.abs( Math.floor( uv.x ) % 2 ) === 1 ) {

						uv.x = Math.ceil( uv.x ) - uv.x;

					} else {

						uv.x = uv.x - Math.floor( uv.x );

					}

					break;

			}

		}

		if ( uv.y < 0 || uv.y > 1 ) {

			switch ( this.wrapT ) {

				case RepeatWrapping:

					uv.y = uv.y - Math.floor( uv.y );
					break;

				case ClampToEdgeWrapping:

					uv.y = uv.y < 0 ? 0 : 1;
					break;

				case MirroredRepeatWrapping:

					if ( Math.abs( Math.floor( uv.y ) % 2 ) === 1 ) {

						uv.y = Math.ceil( uv.y ) - uv.y;

					} else {

						uv.y = uv.y - Math.floor( uv.y );

					}

					break;

			}

		}

		if ( this.flipY ) {

			uv.y = 1 - uv.y;

		}

		return uv;

	}

	set needsUpdate( value ) {

		if ( value === true ) {

			this.version ++;
			this.source.needsUpdate = true;

		}

	}

	set needsPMREMUpdate( value ) {

		if ( value === true ) {

			this.pmremVersion ++;

		}

	}

}

Texture.DEFAULT_IMAGE = null;
Texture.DEFAULT_MAPPING = UVMapping;
Texture.DEFAULT_ANISOTROPY = 1;

class Vector4 {

	constructor( x = 0, y = 0, z = 0, w = 1 ) {

		Vector4.prototype.isVector4 = true;

		this.x = x;
		this.y = y;
		this.z = z;
		this.w = w;

	}

	get width() {

		return this.z;

	}

	set width( value ) {

		this.z = value;

	}

	get height() {

		return this.w;

	}

	set height( value ) {

		this.w = value;

	}

	set( x, y, z, w ) {

		this.x = x;
		this.y = y;
		this.z = z;
		this.w = w;

		return this;

	}

	setScalar( scalar ) {

		this.x = scalar;
		this.y = scalar;
		this.z = scalar;
		this.w = scalar;

		return this;

	}

	setX( x ) {

		this.x = x;

		return this;

	}

	setY( y ) {

		this.y = y;

		return this;

	}

	setZ( z ) {

		this.z = z;

		return this;

	}

	setW( w ) {

		this.w = w;

		return this;

	}

	setComponent( index, value ) {

		switch ( index ) {

			case 0: this.x = value; break;
			case 1: this.y = value; break;
			case 2: this.z = value; break;
			case 3: this.w = value; break;
			default: throw new Error( 'index is out of range: ' + index );

		}

		return this;

	}

	getComponent( index ) {

		switch ( index ) {

			case 0: return this.x;
			case 1: return this.y;
			case 2: return this.z;
			case 3: return this.w;
			default: throw new Error( 'index is out of range: ' + index );

		}

	}

	clone() {

		return new this.constructor( this.x, this.y, this.z, this.w );

	}

	copy( v ) {

		this.x = v.x;
		this.y = v.y;
		this.z = v.z;
		this.w = ( v.w !== undefined ) ? v.w : 1;

		return this;

	}

	add( v ) {

		this.x += v.x;
		this.y += v.y;
		this.z += v.z;
		this.w += v.w;

		return this;

	}

	addScalar( s ) {

		this.x += s;
		this.y += s;
		this.z += s;
		this.w += s;

		return this;

	}

	addVectors( a, b ) {

		this.x = a.x + b.x;
		this.y = a.y + b.y;
		this.z = a.z + b.z;
		this.w = a.w + b.w;

		return this;

	}

	addScaledVector( v, s ) {

		this.x += v.x * s;
		this.y += v.y * s;
		this.z += v.z * s;
		this.w += v.w * s;

		return this;

	}

	sub( v ) {

		this.x -= v.x;
		this.y -= v.y;
		this.z -= v.z;
		this.w -= v.w;

		return this;

	}

	subScalar( s ) {

		this.x -= s;
		this.y -= s;
		this.z -= s;
		this.w -= s;

		return this;

	}

	subVectors( a, b ) {

		this.x = a.x - b.x;
		this.y = a.y - b.y;
		this.z = a.z - b.z;
		this.w = a.w - b.w;

		return this;

	}

	multiply( v ) {

		this.x *= v.x;
		this.y *= v.y;
		this.z *= v.z;
		this.w *= v.w;

		return this;

	}

	multiplyScalar( scalar ) {

		this.x *= scalar;
		this.y *= scalar;
		this.z *= scalar;
		this.w *= scalar;

		return this;

	}

	applyMatrix4( m ) {

		const x = this.x, y = this.y, z = this.z, w = this.w;
		const e = m.elements;

		this.x = e[ 0 ] * x + e[ 4 ] * y + e[ 8 ] * z + e[ 12 ] * w;
		this.y = e[ 1 ] * x + e[ 5 ] * y + e[ 9 ] * z + e[ 13 ] * w;
		this.z = e[ 2 ] * x + e[ 6 ] * y + e[ 10 ] * z + e[ 14 ] * w;
		this.w = e[ 3 ] * x + e[ 7 ] * y + e[ 11 ] * z + e[ 15 ] * w;

		return this;

	}

	divideScalar( scalar ) {

		return this.multiplyScalar( 1 / scalar );

	}

	setAxisAngleFromQuaternion( q ) {

		// http://www.euclideanspace.com/maths/geometry/rotations/conversions/quaternionToAngle/index.htm

		// q is assumed to be normalized

		this.w = 2 * Math.acos( q.w );

		const s = Math.sqrt( 1 - q.w * q.w );

		if ( s < 0.0001 ) {

			this.x = 1;
			this.y = 0;
			this.z = 0;

		} else {

			this.x = q.x / s;
			this.y = q.y / s;
			this.z = q.z / s;

		}

		return this;

	}

	setAxisAngleFromRotationMatrix( m ) {

		// http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToAngle/index.htm

		// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

		let angle, x, y, z; // variables for result
		const epsilon = 0.01,		// margin to allow for rounding errors
			epsilon2 = 0.1,		// margin to distinguish between 0 and 180 degrees

			te = m.elements,

			m11 = te[ 0 ], m12 = te[ 4 ], m13 = te[ 8 ],
			m21 = te[ 1 ], m22 = te[ 5 ], m23 = te[ 9 ],
			m31 = te[ 2 ], m32 = te[ 6 ], m33 = te[ 10 ];

		if ( ( Math.abs( m12 - m21 ) < epsilon ) &&
		     ( Math.abs( m13 - m31 ) < epsilon ) &&
		     ( Math.abs( m23 - m32 ) < epsilon ) ) {

			// singularity found
			// first check for identity matrix which must have +1 for all terms
			// in leading diagonal and zero in other terms

			if ( ( Math.abs( m12 + m21 ) < epsilon2 ) &&
			     ( Math.abs( m13 + m31 ) < epsilon2 ) &&
			     ( Math.abs( m23 + m32 ) < epsilon2 ) &&
			     ( Math.abs( m11 + m22 + m33 - 3 ) < epsilon2 ) ) {

				// this singularity is identity matrix so angle = 0

				this.set( 1, 0, 0, 0 );

				return this; // zero angle, arbitrary axis

			}

			// otherwise this singularity is angle = 180

			angle = Math.PI;

			const xx = ( m11 + 1 ) / 2;
			const yy = ( m22 + 1 ) / 2;
			const zz = ( m33 + 1 ) / 2;
			const xy = ( m12 + m21 ) / 4;
			const xz = ( m13 + m31 ) / 4;
			const yz = ( m23 + m32 ) / 4;

			if ( ( xx > yy ) && ( xx > zz ) ) {

				// m11 is the largest diagonal term

				if ( xx < epsilon ) {

					x = 0;
					y = 0.707106781;
					z = 0.707106781;

				} else {

					x = Math.sqrt( xx );
					y = xy / x;
					z = xz / x;

				}

			} else if ( yy > zz ) {

				// m22 is the largest diagonal term

				if ( yy < epsilon ) {

					x = 0.707106781;
					y = 0;
					z = 0.707106781;

				} else {

					y = Math.sqrt( yy );
					x = xy / y;
					z = yz / y;

				}

			} else {

				// m33 is the largest diagonal term so base result on this

				if ( zz < epsilon ) {

					x = 0.707106781;
					y = 0.707106781;
					z = 0;

				} else {

					z = Math.sqrt( zz );
					x = xz / z;
					y = yz / z;

				}

			}

			this.set( x, y, z, angle );

			return this; // return 180 deg rotation

		}

		// as we have reached here there are no singularities so we can handle normally

		let s = Math.sqrt( ( m32 - m23 ) * ( m32 - m23 ) +
			( m13 - m31 ) * ( m13 - m31 ) +
			( m21 - m12 ) * ( m21 - m12 ) ); // used to normalize

		if ( Math.abs( s ) < 0.001 ) s = 1;

		// prevent divide by zero, should not happen if matrix is orthogonal and should be
		// caught by singularity test above, but I've left it in just in case

		this.x = ( m32 - m23 ) / s;
		this.y = ( m13 - m31 ) / s;
		this.z = ( m21 - m12 ) / s;
		this.w = Math.acos( ( m11 + m22 + m33 - 1 ) / 2 );

		return this;

	}

	min( v ) {

		this.x = Math.min( this.x, v.x );
		this.y = Math.min( this.y, v.y );
		this.z = Math.min( this.z, v.z );
		this.w = Math.min( this.w, v.w );

		return this;

	}

	max( v ) {

		this.x = Math.max( this.x, v.x );
		this.y = Math.max( this.y, v.y );
		this.z = Math.max( this.z, v.z );
		this.w = Math.max( this.w, v.w );

		return this;

	}

	clamp( min, max ) {

		// assumes min < max, componentwise

		this.x = Math.max( min.x, Math.min( max.x, this.x ) );
		this.y = Math.max( min.y, Math.min( max.y, this.y ) );
		this.z = Math.max( min.z, Math.min( max.z, this.z ) );
		this.w = Math.max( min.w, Math.min( max.w, this.w ) );

		return this;

	}

	clampScalar( minVal, maxVal ) {

		this.x = Math.max( minVal, Math.min( maxVal, this.x ) );
		this.y = Math.max( minVal, Math.min( maxVal, this.y ) );
		this.z = Math.max( minVal, Math.min( maxVal, this.z ) );
		this.w = Math.max( minVal, Math.min( maxVal, this.w ) );

		return this;

	}

	clampLength( min, max ) {

		const length = this.length();

		return this.divideScalar( length || 1 ).multiplyScalar( Math.max( min, Math.min( max, length ) ) );

	}

	floor() {

		this.x = Math.floor( this.x );
		this.y = Math.floor( this.y );
		this.z = Math.floor( this.z );
		this.w = Math.floor( this.w );

		return this;

	}

	ceil() {

		this.x = Math.ceil( this.x );
		this.y = Math.ceil( this.y );
		this.z = Math.ceil( this.z );
		this.w = Math.ceil( this.w );

		return this;

	}

	round() {

		this.x = Math.round( this.x );
		this.y = Math.round( this.y );
		this.z = Math.round( this.z );
		this.w = Math.round( this.w );

		return this;

	}

	roundToZero() {

		this.x = Math.trunc( this.x );
		this.y = Math.trunc( this.y );
		this.z = Math.trunc( this.z );
		this.w = Math.trunc( this.w );

		return this;

	}

	negate() {

		this.x = - this.x;
		this.y = - this.y;
		this.z = - this.z;
		this.w = - this.w;

		return this;

	}

	dot( v ) {

		return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w;

	}

	lengthSq() {

		return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;

	}

	length() {

		return Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w );

	}

	manhattanLength() {

		return Math.abs( this.x ) + Math.abs( this.y ) + Math.abs( this.z ) + Math.abs( this.w );

	}

	normalize() {

		return this.divideScalar( this.length() || 1 );

	}

	setLength( length ) {

		return this.normalize().multiplyScalar( length );

	}

	lerp( v, alpha ) {

		this.x += ( v.x - this.x ) * alpha;
		this.y += ( v.y - this.y ) * alpha;
		this.z += ( v.z - this.z ) * alpha;
		this.w += ( v.w - this.w ) * alpha;

		return this;

	}

	lerpVectors( v1, v2, alpha ) {

		this.x = v1.x + ( v2.x - v1.x ) * alpha;
		this.y = v1.y + ( v2.y - v1.y ) * alpha;
		this.z = v1.z + ( v2.z - v1.z ) * alpha;
		this.w = v1.w + ( v2.w - v1.w ) * alpha;

		return this;

	}

	equals( v ) {

		return ( ( v.x === this.x ) && ( v.y === this.y ) && ( v.z === this.z ) && ( v.w === this.w ) );

	}

	fromArray( array, offset = 0 ) {

		this.x = array[ offset ];
		this.y = array[ offset + 1 ];
		this.z = array[ offset + 2 ];
		this.w = array[ offset + 3 ];

		return this;

	}

	toArray( array = [], offset = 0 ) {

		array[ offset ] = this.x;
		array[ offset + 1 ] = this.y;
		array[ offset + 2 ] = this.z;
		array[ offset + 3 ] = this.w;

		return array;

	}

	fromBufferAttribute( attribute, index ) {

		this.x = attribute.getX( index );
		this.y = attribute.getY( index );
		this.z = attribute.getZ( index );
		this.w = attribute.getW( index );

		return this;

	}

	random() {

		this.x = Math.random();
		this.y = Math.random();
		this.z = Math.random();
		this.w = Math.random();

		return this;

	}

	*[ Symbol.iterator ]() {

		yield this.x;
		yield this.y;
		yield this.z;
		yield this.w;

	}

}

/*
 In options, we can specify:
 * Texture parameters for an auto-generated target texture
 * depthBuffer/stencilBuffer: Booleans to indicate if we should generate these buffers
*/
class RenderTarget extends EventDispatcher {

	constructor( width = 1, height = 1, options = {} ) {

		super();

		this.isRenderTarget = true;

		this.width = width;
		this.height = height;
		this.depth = 1;

		this.scissor = new Vector4( 0, 0, width, height );
		this.scissorTest = false;

		this.viewport = new Vector4( 0, 0, width, height );

		const image = { width: width, height: height, depth: 1 };

		options = Object.assign( {
			generateMipmaps: false,
			internalFormat: null,
			minFilter: LinearFilter,
			depthBuffer: true,
			stencilBuffer: false,
			resolveDepthBuffer: true,
			resolveStencilBuffer: true,
			depthTexture: null,
			samples: 0,
			count: 1
		}, options );

		const texture = new Texture( image, options.mapping, options.wrapS, options.wrapT, options.magFilter, options.minFilter, options.format, options.type, options.anisotropy, options.colorSpace );

		texture.flipY = false;
		texture.generateMipmaps = options.generateMipmaps;
		texture.internalFormat = options.internalFormat;

		this.textures = [];

		const count = options.count;
		for ( let i = 0; i < count; i ++ ) {

			this.textures[ i ] = texture.clone();
			this.textures[ i ].isRenderTargetTexture = true;

		}

		this.depthBuffer = options.depthBuffer;
		this.stencilBuffer = options.stencilBuffer;

		this.resolveDepthBuffer = options.resolveDepthBuffer;
		this.resolveStencilBuffer = options.resolveStencilBuffer;

		this.depthTexture = options.depthTexture;

		this.samples = options.samples;

	}

	get texture() {

		return this.textures[ 0 ];

	}

	set texture( value ) {

		this.textures[ 0 ] = value;

	}

	setSize( width, height, depth = 1 ) {

		if ( this.width !== width || this.height !== height || this.depth !== depth ) {

			this.width = width;
			this.height = height;
			this.depth = depth;

			for ( let i = 0, il = this.textures.length; i < il; i ++ ) {

				this.textures[ i ].image.width = width;
				this.textures[ i ].image.height = height;
				this.textures[ i ].image.depth = depth;

			}

			this.dispose();

		}

		this.viewport.set( 0, 0, width, height );
		this.scissor.set( 0, 0, width, height );

	}

	clone() {

		return new this.constructor().copy( this );

	}

	copy( source ) {

		this.width = source.width;
		this.height = source.height;
		this.depth = source.depth;

		this.scissor.copy( source.scissor );
		this.scissorTest = source.scissorTest;

		this.viewport.copy( source.viewport );

		this.textures.length = 0;

		for ( let i = 0, il = source.textures.length; i < il; i ++ ) {

			this.textures[ i ] = source.textures[ i ].clone();
			this.textures[ i ].isRenderTargetTexture = true;

		}

		// ensure image object is not shared, see #20328

		const image = Object.assign( {}, source.texture.image );
		this.texture.source = new Source( image );

		this.depthBuffer = source.depthBuffer;
		this.stencilBuffer = source.stencilBuffer;

		this.resolveDepthBuffer = source.resolveDepthBuffer;
		this.resolveStencilBuffer = source.resolveStencilBuffer;

		if ( source.depthTexture !== null ) this.depthTexture = source.depthTexture.clone();

		this.samples = source.samples;

		return this;

	}

	dispose() {

		this.dispatchEvent( { type: 'dispose' } );

	}

}

class WebGLRenderTarget extends RenderTarget {

	constructor( width = 1, height = 1, options = {} ) {

		super( width, height, options );

		this.isWebGLRenderTarget = true;

	}

}

class DataArrayTexture extends Texture {

	constructor( data = null, width = 1, height = 1, depth = 1 ) {

		super( null );

		this.isDataArrayTexture = true;

		this.image = { data, width, height, depth };

		this.magFilter = NearestFilter;
		this.minFilter = NearestFilter;

		this.wrapR = ClampToEdgeWrapping;

		this.generateMipmaps = false;
		this.flipY = false;
		this.unpackAlignment = 1;

		this.layerUpdates = new Set();

	}

	addLayerUpdate( layerIndex ) {

		this.layerUpdates.add( layerIndex );

	}

	clearLayerUpdates() {

		this.layerUpdates.clear();

	}

}

class WebGLArrayRenderTarget extends WebGLRenderTarget {

	constructor( width = 1, height = 1, depth = 1, options = {} ) {

		super( width, height, options );

		this.isWebGLArrayRenderTarget = true;

		this.depth = depth;

		this.texture = new DataArrayTexture( null, width, height, depth );

		this.texture.isRenderTargetTexture = true;

	}

}

class Data3DTexture extends Texture {

	constructor( data = null, width = 1, height = 1, depth = 1 ) {

		// We're going to add .setXXX() methods for setting properties later.
		// Users can still set in DataTexture3D directly.
		//
		//	const texture = new THREE.DataTexture3D( data, width, height, depth );
		// 	texture.anisotropy = 16;
		//
		// See #14839

		super( null );

		this.isData3DTexture = true;

		this.image = { data, width, height, depth };

		this.magFilter = NearestFilter;
		this.minFilter = NearestFilter;

		this.wrapR = ClampToEdgeWrapping;

		this.generateMipmaps = false;
		this.flipY = false;
		this.unpackAlignment = 1;

	}

}

class WebGL3DRenderTarget extends WebGLRenderTarget {

	constructor( width = 1, height = 1, depth = 1, options = {} ) {

		super( width, height, options );

		this.isWebGL3DRenderTarget = true;

		this.depth = depth;

		this.texture = new Data3DTexture( null, width, height, depth );

		this.texture.isRenderTargetTexture = true;

	}

}

class Quaternion {

	constructor( x = 0, y = 0, z = 0, w = 1 ) {

		this.isQuaternion = true;

		this._x = x;
		this._y = y;
		this._z = z;
		this._w = w;

	}

	static slerpFlat( dst, dstOffset, src0, srcOffset0, src1, srcOffset1, t ) {

		// fuzz-free, array-based Quaternion SLERP operation

		let x0 = src0[ srcOffset0 + 0 ],
			y0 = src0[ srcOffset0 + 1 ],
			z0 = src0[ srcOffset0 + 2 ],
			w0 = src0[ srcOffset0 + 3 ];

		const x1 = src1[ srcOffset1 + 0 ],
			y1 = src1[ srcOffset1 + 1 ],
			z1 = src1[ srcOffset1 + 2 ],
			w1 = src1[ srcOffset1 + 3 ];

		if ( t === 0 ) {

			dst[ dstOffset + 0 ] = x0;
			dst[ dstOffset + 1 ] = y0;
			dst[ dstOffset + 2 ] = z0;
			dst[ dstOffset + 3 ] = w0;
			return;

		}

		if ( t === 1 ) {

			dst[ dstOffset + 0 ] = x1;
			dst[ dstOffset + 1 ] = y1;
			dst[ dstOffset + 2 ] = z1;
			dst[ dstOffset + 3 ] = w1;
			return;

		}

		if ( w0 !== w1 || x0 !== x1 || y0 !== y1 || z0 !== z1 ) {

			let s = 1 - t;
			const cos = x0 * x1 + y0 * y1 + z0 * z1 + w0 * w1,
				dir = ( cos >= 0 ? 1 : - 1 ),
				sqrSin = 1 - cos * cos;

			// Skip the Slerp for tiny steps to avoid numeric problems:
			if ( sqrSin > Number.EPSILON ) {

				const sin = Math.sqrt( sqrSin ),
					len = Math.atan2( sin, cos * dir );

				s = Math.sin( s * len ) / sin;
				t = Math.sin( t * len ) / sin;

			}

			const tDir = t * dir;

			x0 = x0 * s + x1 * tDir;
			y0 = y0 * s + y1 * tDir;
			z0 = z0 * s + z1 * tDir;
			w0 = w0 * s + w1 * tDir;

			// Normalize in case we just did a lerp:
			if ( s === 1 - t ) {

				const f = 1 / Math.sqrt( x0 * x0 + y0 * y0 + z0 * z0 + w0 * w0 );

				x0 *= f;
				y0 *= f;
				z0 *= f;
				w0 *= f;

			}

		}

		dst[ dstOffset ] = x0;
		dst[ dstOffset + 1 ] = y0;
		dst[ dstOffset + 2 ] = z0;
		dst[ dstOffset + 3 ] = w0;

	}

	static multiplyQuaternionsFlat( dst, dstOffset, src0, srcOffset0, src1, srcOffset1 ) {

		const x0 = src0[ srcOffset0 ];
		const y0 = src0[ srcOffset0 + 1 ];
		const z0 = src0[ srcOffset0 + 2 ];
		const w0 = src0[ srcOffset0 + 3 ];

		const x1 = src1[ srcOffset1 ];
		const y1 = src1[ srcOffset1 + 1 ];
		const z1 = src1[ srcOffset1 + 2 ];
		const w1 = src1[ srcOffset1 + 3 ];

		dst[ dstOffset ] = x0 * w1 + w0 * x1 + y0 * z1 - z0 * y1;
		dst[ dstOffset + 1 ] = y0 * w1 + w0 * y1 + z0 * x1 - x0 * z1;
		dst[ dstOffset + 2 ] = z0 * w1 + w0 * z1 + x0 * y1 - y0 * x1;
		dst[ dstOffset + 3 ] = w0 * w1 - x0 * x1 - y0 * y1 - z0 * z1;

		return dst;

	}

	get x() {

		return this._x;

	}

	set x( value ) {

		this._x = value;
		this._onChangeCallback();

	}

	get y() {

		return this._y;

	}

	set y( value ) {

		this._y = value;
		this._onChangeCallback();

	}

	get z() {

		return this._z;

	}

	set z( value ) {

		this._z = value;
		this._onChangeCallback();

	}

	get w() {

		return this._w;

	}

	set w( value ) {

		this._w = value;
		this._onChangeCallback();

	}

	set( x, y, z, w ) {

		this._x = x;
		this._y = y;
		this._z = z;
		this._w = w;

		this._onChangeCallback();

		return this;

	}

	clone() {

		return new this.constructor( this._x, this._y, this._z, this._w );

	}

	copy( quaternion ) {

		this._x = quaternion.x;
		this._y = quaternion.y;
		this._z = quaternion.z;
		this._w = quaternion.w;

		this._onChangeCallback();

		return this;

	}

	setFromEuler( euler, update = true ) {

		const x = euler._x, y = euler._y, z = euler._z, order = euler._order;

		// http://www.mathworks.com/matlabcentral/fileexchange/
		// 	20696-function-to-convert-between-dcm-euler-angles-quaternions-and-euler-vectors/
		//	content/SpinCalc.m

		const cos = Math.cos;
		const sin = Math.sin;

		const c1 = cos( x / 2 );
		const c2 = cos( y / 2 );
		const c3 = cos( z / 2 );

		const s1 = sin( x / 2 );
		const s2 = sin( y / 2 );
		const s3 = sin( z / 2 );

		switch ( order ) {

			case 'XYZ':
				this._x = s1 * c2 * c3 + c1 * s2 * s3;
				this._y = c1 * s2 * c3 - s1 * c2 * s3;
				this._z = c1 * c2 * s3 + s1 * s2 * c3;
				this._w = c1 * c2 * c3 - s1 * s2 * s3;
				break;

			case 'YXZ':
				this._x = s1 * c2 * c3 + c1 * s2 * s3;
				this._y = c1 * s2 * c3 - s1 * c2 * s3;
				this._z = c1 * c2 * s3 - s1 * s2 * c3;
				this._w = c1 * c2 * c3 + s1 * s2 * s3;
				break;

			case 'ZXY':
				this._x = s1 * c2 * c3 - c1 * s2 * s3;
				this._y = c1 * s2 * c3 + s1 * c2 * s3;
				this._z = c1 * c2 * s3 + s1 * s2 * c3;
				this._w = c1 * c2 * c3 - s1 * s2 * s3;
				break;

			case 'ZYX':
				this._x = s1 * c2 * c3 - c1 * s2 * s3;
				this._y = c1 * s2 * c3 + s1 * c2 * s3;
				this._z = c1 * c2 * s3 - s1 * s2 * c3;
				this._w = c1 * c2 * c3 + s1 * s2 * s3;
				break;

			case 'YZX':
				this._x = s1 * c2 * c3 + c1 * s2 * s3;
				this._y = c1 * s2 * c3 + s1 * c2 * s3;
				this._z = c1 * c2 * s3 - s1 * s2 * c3;
				this._w = c1 * c2 * c3 - s1 * s2 * s3;
				break;

			case 'XZY':
				this._x = s1 * c2 * c3 - c1 * s2 * s3;
				this._y = c1 * s2 * c3 - s1 * c2 * s3;
				this._z = c1 * c2 * s3 + s1 * s2 * c3;
				this._w = c1 * c2 * c3 + s1 * s2 * s3;
				break;

			default:
				console.warn( 'THREE.Quaternion: .setFromEuler() encountered an unknown order: ' + order );

		}

		if ( update === true ) this._onChangeCallback();

		return this;

	}

	setFromAxisAngle( axis, angle ) {

		// http://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToQuaternion/index.htm

		// assumes axis is normalized

		const halfAngle = angle / 2, s = Math.sin( halfAngle );

		this._x = axis.x * s;
		this._y = axis.y * s;
		this._z = axis.z * s;
		this._w = Math.cos( halfAngle );

		this._onChangeCallback();

		return this;

	}

	setFromRotationMatrix( m ) {

		// http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm

		// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

		const te = m.elements,

			m11 = te[ 0 ], m12 = te[ 4 ], m13 = te[ 8 ],
			m21 = te[ 1 ], m22 = te[ 5 ], m23 = te[ 9 ],
			m31 = te[ 2 ], m32 = te[ 6 ], m33 = te[ 10 ],

			trace = m11 + m22 + m33;

		if ( trace > 0 ) {

			const s = 0.5 / Math.sqrt( trace + 1.0 );

			this._w = 0.25 / s;
			this._x = ( m32 - m23 ) * s;
			this._y = ( m13 - m31 ) * s;
			this._z = ( m21 - m12 ) * s;

		} else if ( m11 > m22 && m11 > m33 ) {

			const s = 2.0 * Math.sqrt( 1.0 + m11 - m22 - m33 );

			this._w = ( m32 - m23 ) / s;
			this._x = 0.25 * s;
			this._y = ( m12 + m21 ) / s;
			this._z = ( m13 + m31 ) / s;

		} else if ( m22 > m33 ) {

			const s = 2.0 * Math.sqrt( 1.0 + m22 - m11 - m33 );

			this._w = ( m13 - m31 ) / s;
			this._x = ( m12 + m21 ) / s;
			this._y = 0.25 * s;
			this._z = ( m23 + m32 ) / s;

		} else {

			const s = 2.0 * Math.sqrt( 1.0 + m33 - m11 - m22 );

			this._w = ( m21 - m12 ) / s;
			this._x = ( m13 + m31 ) / s;
			this._y = ( m23 + m32 ) / s;
			this._z = 0.25 * s;

		}

		this._onChangeCallback();

		return this;

	}

	setFromUnitVectors( vFrom, vTo ) {

		// assumes direction vectors vFrom and vTo are normalized

		let r = vFrom.dot( vTo ) + 1;

		if ( r < Number.EPSILON ) {

			// vFrom and vTo point in opposite directions

			r = 0;

			if ( Math.abs( vFrom.x ) > Math.abs( vFrom.z ) ) {

				this._x = - vFrom.y;
				this._y = vFrom.x;
				this._z = 0;
				this._w = r;

			} else {

				this._x = 0;
				this._y = - vFrom.z;
				this._z = vFrom.y;
				this._w = r;

			}

		} else {

			// crossVectors( vFrom, vTo ); // inlined to avoid cyclic dependency on Vector3

			this._x = vFrom.y * vTo.z - vFrom.z * vTo.y;
			this._y = vFrom.z * vTo.x - vFrom.x * vTo.z;
			this._z = vFrom.x * vTo.y - vFrom.y * vTo.x;
			this._w = r;

		}

		return this.normalize();

	}

	angleTo( q ) {

		return 2 * Math.acos( Math.abs( clamp( this.dot( q ), - 1, 1 ) ) );

	}

	rotateTowards( q, step ) {

		const angle = this.angleTo( q );

		if ( angle === 0 ) return this;

		const t = Math.min( 1, step / angle );

		this.slerp( q, t );

		return this;

	}

	identity() {

		return this.set( 0, 0, 0, 1 );

	}

	invert() {

		// quaternion is assumed to have unit length

		return this.conjugate();

	}

	conjugate() {

		this._x *= - 1;
		this._y *= - 1;
		this._z *= - 1;

		this._onChangeCallback();

		return this;

	}

	dot( v ) {

		return this._x * v._x + this._y * v._y + this._z * v._z + this._w * v._w;

	}

	lengthSq() {

		return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;

	}

	length() {

		return Math.sqrt( this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w );

	}

	normalize() {

		let l = this.length();

		if ( l === 0 ) {

			this._x = 0;
			this._y = 0;
			this._z = 0;
			this._w = 1;

		} else {

			l = 1 / l;

			this._x = this._x * l;
			this._y = this._y * l;
			this._z = this._z * l;
			this._w = this._w * l;

		}

		this._onChangeCallback();

		return this;

	}

	multiply( q ) {

		return this.multiplyQuaternions( this, q );

	}

	premultiply( q ) {

		return this.multiplyQuaternions( q, this );

	}

	multiplyQuaternions( a, b ) {

		// from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/code/index.htm

		const qax = a._x, qay = a._y, qaz = a._z, qaw = a._w;
		const qbx = b._x, qby = b._y, qbz = b._z, qbw = b._w;

		this._x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
		this._y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
		this._z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
		this._w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;

		this._onChangeCallback();

		return this;

	}

	slerp( qb, t ) {

		if ( t === 0 ) return this;
		if ( t === 1 ) return this.copy( qb );

		const x = this._x, y = this._y, z = this._z, w = this._w;

		// http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/slerp/

		let cosHalfTheta = w * qb._w + x * qb._x + y * qb._y + z * qb._z;

		if ( cosHalfTheta < 0 ) {

			this._w = - qb._w;
			this._x = - qb._x;
			this._y = - qb._y;
			this._z = - qb._z;

			cosHalfTheta = - cosHalfTheta;

		} else {

			this.copy( qb );

		}

		if ( cosHalfTheta >= 1.0 ) {

			this._w = w;
			this._x = x;
			this._y = y;
			this._z = z;

			return this;

		}

		const sqrSinHalfTheta = 1.0 - cosHalfTheta * cosHalfTheta;

		if ( sqrSinHalfTheta <= Number.EPSILON ) {

			const s = 1 - t;
			this._w = s * w + t * this._w;
			this._x = s * x + t * this._x;
			this._y = s * y + t * this._y;
			this._z = s * z + t * this._z;

			this.normalize(); // normalize calls _onChangeCallback()

			return this;

		}

		const sinHalfTheta = Math.sqrt( sqrSinHalfTheta );
		const halfTheta = Math.atan2( sinHalfTheta, cosHalfTheta );
		const ratioA = Math.sin( ( 1 - t ) * halfTheta ) / sinHalfTheta,
			ratioB = Math.sin( t * halfTheta ) / sinHalfTheta;

		this._w = ( w * ratioA + this._w * ratioB );
		this._x = ( x * ratioA + this._x * ratioB );
		this._y = ( y * ratioA + this._y * ratioB );
		this._z = ( z * ratioA + this._z * ratioB );

		this._onChangeCallback();

		return this;

	}

	slerpQuaternions( qa, qb, t ) {

		return this.copy( qa ).slerp( qb, t );

	}

	random() {

		// sets this quaternion to a uniform random unit quaternnion

		// Ken Shoemake
		// Uniform random rotations
		// D. Kirk, editor, Graphics Gems III, pages 124-132. Academic Press, New York, 1992.

		const theta1 = 2 * Math.PI * Math.random();
		const theta2 = 2 * Math.PI * Math.random();

		const x0 = Math.random();
		const r1 = Math.sqrt( 1 - x0 );
		const r2 = Math.sqrt( x0 );

		return this.set(
			r1 * Math.sin( theta1 ),
			r1 * Math.cos( theta1 ),
			r2 * Math.sin( theta2 ),
			r2 * Math.cos( theta2 ),
		);

	}

	equals( quaternion ) {

		return ( quaternion._x === this._x ) && ( quaternion._y === this._y ) && ( quaternion._z === this._z ) && ( quaternion._w === this._w );

	}

	fromArray( array, offset = 0 ) {

		this._x = array[ offset ];
		this._y = array[ offset + 1 ];
		this._z = array[ offset + 2 ];
		this._w = array[ offset + 3 ];

		this._onChangeCallback();

		return this;

	}

	toArray( array = [], offset = 0 ) {

		array[ offset ] = this._x;
		array[ offset + 1 ] = this._y;
		array[ offset + 2 ] = this._z;
		array[ offset + 3 ] = this._w;

		return array;

	}

	fromBufferAttribute( attribute, index ) {

		this._x = attribute.getX( index );
		this._y = attribute.getY( index );
		this._z = attribute.getZ( index );
		this._w = attribute.getW( index );

		this._onChangeCallback();

		return this;

	}

	toJSON() {

		return this.toArray();

	}

	_onChange( callback ) {

		this._onChangeCallback = callback;

		return this;

	}

	_onChangeCallback() {}

	*[ Symbol.iterator ]() {

		yield this._x;
		yield this._y;
		yield this._z;
		yield this._w;

	}

}

class Vector3 {

	constructor( x = 0, y = 0, z = 0 ) {

		Vector3.prototype.isVector3 = true;

		this.x = x;
		this.y = y;
		this.z = z;

	}

	set( x, y, z ) {

		if ( z === undefined ) z = this.z; // sprite.scale.set(x,y)

		this.x = x;
		this.y = y;
		this.z = z;

		return this;

	}

	setScalar( scalar ) {

		this.x = scalar;
		this.y = scalar;
		this.z = scalar;

		return this;

	}

	setX( x ) {

		this.x = x;

		return this;

	}

	setY( y ) {

		this.y = y;

		return this;

	}

	setZ( z ) {

		this.z = z;

		return this;

	}

	setComponent( index, value ) {

		switch ( index ) {

			case 0: this.x = value; break;
			case 1: this.y = value; break;
			case 2: this.z = value; break;
			default: throw new Error( 'index is out of range: ' + index );

		}

		return this;

	}

	getComponent( index ) {

		switch ( index ) {

			case 0: return this.x;
			case 1: return this.y;
			case 2: return this.z;
			default: throw new Error( 'index is out of range: ' + index );

		}

	}

	clone() {

		return new this.constructor( this.x, this.y, this.z );

	}

	copy( v ) {

		this.x = v.x;
		this.y = v.y;
		this.z = v.z;

		return this;

	}

	add( v ) {

		this.x += v.x;
		this.y += v.y;
		this.z += v.z;

		return this;

	}

	addScalar( s ) {

		this.x += s;
		this.y += s;
		this.z += s;

		return this;

	}

	addVectors( a, b ) {

		this.x = a.x + b.x;
		this.y = a.y + b.y;
		this.z = a.z + b.z;

		return this;

	}

	addScaledVector( v, s ) {

		this.x += v.x * s;
		this.y += v.y * s;
		this.z += v.z * s;

		return this;

	}

	sub( v ) {

		this.x -= v.x;
		this.y -= v.y;
		this.z -= v.z;

		return this;

	}

	subScalar( s ) {

		this.x -= s;
		this.y -= s;
		this.z -= s;

		return this;

	}

	subVectors( a, b ) {

		this.x = a.x - b.x;
		this.y = a.y - b.y;
		this.z = a.z - b.z;

		return this;

	}

	multiply( v ) {

		this.x *= v.x;
		this.y *= v.y;
		this.z *= v.z;

		return this;

	}

	multiplyScalar( scalar ) {

		this.x *= scalar;
		this.y *= scalar;
		this.z *= scalar;

		return this;

	}

	multiplyVectors( a, b ) {

		this.x = a.x * b.x;
		this.y = a.y * b.y;
		this.z = a.z * b.z;

		return this;

	}

	applyEuler( euler ) {

		return this.applyQuaternion( _quaternion$4.setFromEuler( euler ) );

	}

	applyAxisAngle( axis, angle ) {

		return this.applyQuaternion( _quaternion$4.setFromAxisAngle( axis, angle ) );

	}

	applyMatrix3( m ) {

		const x = this.x, y = this.y, z = this.z;
		const e = m.elements;

		this.x = e[ 0 ] * x + e[ 3 ] * y + e[ 6 ] * z;
		this.y = e[ 1 ] * x + e[ 4 ] * y + e[ 7 ] * z;
		this.z = e[ 2 ] * x + e[ 5 ] * y + e[ 8 ] * z;

		return this;

	}

	applyNormalMatrix( m ) {

		return this.applyMatrix3( m ).normalize();

	}

	applyMatrix4( m ) {

		const x = this.x, y = this.y, z = this.z;
		const e = m.elements;

		const w = 1 / ( e[ 3 ] * x + e[ 7 ] * y + e[ 11 ] * z + e[ 15 ] );

		this.x = ( e[ 0 ] * x + e[ 4 ] * y + e[ 8 ] * z + e[ 12 ] ) * w;
		this.y = ( e[ 1 ] * x + e[ 5 ] * y + e[ 9 ] * z + e[ 13 ] ) * w;
		this.z = ( e[ 2 ] * x + e[ 6 ] * y + e[ 10 ] * z + e[ 14 ] ) * w;

		return this;

	}

	applyQuaternion( q ) {

		// quaternion q is assumed to have unit length

		const vx = this.x, vy = this.y, vz = this.z;
		const qx = q.x, qy = q.y, qz = q.z, qw = q.w;

		// t = 2 * cross( q.xyz, v );
		const tx = 2 * ( qy * vz - qz * vy );
		const ty = 2 * ( qz * vx - qx * vz );
		const tz = 2 * ( qx * vy - qy * vx );

		// v + q.w * t + cross( q.xyz, t );
		this.x = vx + qw * tx + qy * tz - qz * ty;
		this.y = vy + qw * ty + qz * tx - qx * tz;
		this.z = vz + qw * tz + qx * ty - qy * tx;

		return this;

	}

	project( camera ) {

		return this.applyMatrix4( camera.matrixWorldInverse ).applyMatrix4( camera.projectionMatrix );

	}

	unproject( camera ) {

		return this.applyMatrix4( camera.projectionMatrixInverse ).applyMatrix4( camera.matrixWorld );

	}

	transformDirection( m ) {

		// input: THREE.Matrix4 affine matrix
		// vector interpreted as a direction

		const x = this.x, y = this.y, z = this.z;
		const e = m.elements;

		this.x = e[ 0 ] * x + e[ 4 ] * y + e[ 8 ] * z;
		this.y = e[ 1 ] * x + e[ 5 ] * y + e[ 9 ] * z;
		this.z = e[ 2 ] * x + e[ 6 ] * y + e[ 10 ] * z;

		return this.normalize();

	}

	divide( v ) {

		this.x /= v.x;
		this.y /= v.y;
		this.z /= v.z;

		return this;

	}

	divideScalar( scalar ) {

		return this.multiplyScalar( 1 / scalar );

	}

	min( v ) {

		this.x = Math.min( this.x, v.x );
		this.y = Math.min( this.y, v.y );
		this.z = Math.min( this.z, v.z );

		return this;

	}

	max( v ) {

		this.x = Math.max( this.x, v.x );
		this.y = Math.max( this.y, v.y );
		this.z = Math.max( this.z, v.z );

		return this;

	}

	clamp( min, max ) {

		// assumes min < max, componentwise

		this.x = Math.max( min.x, Math.min( max.x, this.x ) );
		this.y = Math.max( min.y, Math.min( max.y, this.y ) );
		this.z = Math.max( min.z, Math.min( max.z, this.z ) );

		return this;

	}

	clampScalar( minVal, maxVal ) {

		this.x = Math.max( minVal, Math.min( maxVal, this.x ) );
		this.y = Math.max( minVal, Math.min( maxVal, this.y ) );
		this.z = Math.max( minVal, Math.min( maxVal, this.z ) );

		return this;

	}

	clampLength( min, max ) {

		const length = this.length();

		return this.divideScalar( length || 1 ).multiplyScalar( Math.max( min, Math.min( max, length ) ) );

	}

	floor() {

		this.x = Math.floor( this.x );
		this.y = Math.floor( this.y );
		this.z = Math.floor( this.z );

		return this;

	}

	ceil() {

		this.x = Math.ceil( this.x );
		this.y = Math.ceil( this.y );
		this.z = Math.ceil( this.z );

		return this;

	}

	round() {

		this.x = Math.round( this.x );
		this.y = Math.round( this.y );
		this.z = Math.round( this.z );

		return this;

	}

	roundToZero() {

		this.x = Math.trunc( this.x );
		this.y = Math.trunc( this.y );
		this.z = Math.trunc( this.z );

		return this;

	}

	negate() {

		this.x = - this.x;
		this.y = - this.y;
		this.z = - this.z;

		return this;

	}

	dot( v ) {

		return this.x * v.x + this.y * v.y + this.z * v.z;

	}

	// TODO lengthSquared?

	lengthSq() {

		return this.x * this.x + this.y * this.y + this.z * this.z;

	}

	length() {

		return Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z );

	}

	manhattanLength() {

		return Math.abs( this.x ) + Math.abs( this.y ) + Math.abs( this.z );

	}

	normalize() {

		return this.divideScalar( this.length() || 1 );

	}

	setLength( length ) {

		return this.normalize().multiplyScalar( length );

	}

	lerp( v, alpha ) {

		this.x += ( v.x - this.x ) * alpha;
		this.y += ( v.y - this.y ) * alpha;
		this.z += ( v.z - this.z ) * alpha;

		return this;

	}

	lerpVectors( v1, v2, alpha ) {

		this.x = v1.x + ( v2.x - v1.x ) * alpha;
		this.y = v1.y + ( v2.y - v1.y ) * alpha;
		this.z = v1.z + ( v2.z - v1.z ) * alpha;

		return this;

	}

	cross( v ) {

		return this.crossVectors( this, v );

	}

	crossVectors( a, b ) {

		const ax = a.x, ay = a.y, az = a.z;
		const bx = b.x, by = b.y, bz = b.z;

		this.x = ay * bz - az * by;
		this.y = az * bx - ax * bz;
		this.z = ax * by - ay * bx;

		return this;

	}

	projectOnVector( v ) {

		const denominator = v.lengthSq();

		if ( denominator === 0 ) return this.set( 0, 0, 0 );

		const scalar = v.dot( this ) / denominator;

		return this.copy( v ).multiplyScalar( scalar );

	}

	projectOnPlane( planeNormal ) {

		_vector$c.copy( this ).projectOnVector( planeNormal );

		return this.sub( _vector$c );

	}

	reflect( normal ) {

		// reflect incident vector off plane orthogonal to normal
		// normal is assumed to have unit length

		return this.sub( _vector$c.copy( normal ).multiplyScalar( 2 * this.dot( normal ) ) );

	}

	angleTo( v ) {

		const denominator = Math.sqrt( this.lengthSq() * v.lengthSq() );

		if ( denominator === 0 ) return Math.PI / 2;

		const theta = this.dot( v ) / denominator;

		// clamp, to handle numerical problems

		return Math.acos( clamp( theta, - 1, 1 ) );

	}

	distanceTo( v ) {

		return Math.sqrt( this.distanceToSquared( v ) );

	}

	distanceToSquared( v ) {

		const dx = this.x - v.x, dy = this.y - v.y, dz = this.z - v.z;

		return dx * dx + dy * dy + dz * dz;

	}

	manhattanDistanceTo( v ) {

		return Math.abs( this.x - v.x ) + Math.abs( this.y - v.y ) + Math.abs( this.z - v.z );

	}

	setFromSpherical( s ) {

		return this.setFromSphericalCoords( s.radius, s.phi, s.theta );

	}

	setFromSphericalCoords( radius, phi, theta ) {

		const sinPhiRadius = Math.sin( phi ) * radius;

		this.x = sinPhiRadius * Math.sin( theta );
		this.y = Math.cos( phi ) * radius;
		this.z = sinPhiRadius * Math.cos( theta );

		return this;

	}

	setFromCylindrical( c ) {

		return this.setFromCylindricalCoords( c.radius, c.theta, c.y );

	}

	setFromCylindricalCoords( radius, theta, y ) {

		this.x = radius * Math.sin( theta );
		this.y = y;
		this.z = radius * Math.cos( theta );

		return this;

	}

	setFromMatrixPosition( m ) {

		const e = m.elements;

		this.x = e[ 12 ];
		this.y = e[ 13 ];
		this.z = e[ 14 ];

		return this;

	}

	setFromMatrixScale( m ) {

		const sx = this.setFromMatrixColumn( m, 0 ).length();
		const sy = this.setFromMatrixColumn( m, 1 ).length();
		const sz = this.setFromMatrixColumn( m, 2 ).length();

		this.x = sx;
		this.y = sy;
		this.z = sz;

		return this;

	}

	setFromMatrixColumn( m, index ) {

		return this.fromArray( m.elements, index * 4 );

	}

	setFromMatrix3Column( m, index ) {

		return this.fromArray( m.elements, index * 3 );

	}

	setFromEuler( e ) {

		this.x = e._x;
		this.y = e._y;
		this.z = e._z;

		return this;

	}

	setFromColor( c ) {

		this.x = c.r;
		this.y = c.g;
		this.z = c.b;

		return this;

	}

	equals( v ) {

		return ( ( v.x === this.x ) && ( v.y === this.y ) && ( v.z === this.z ) );

	}

	fromArray( array, offset = 0 ) {

		this.x = array[ offset ];
		this.y = array[ offset + 1 ];
		this.z = array[ offset + 2 ];

		return this;

	}

	toArray( array = [], offset = 0 ) {

		array[ offset ] = this.x;
		array[ offset + 1 ] = this.y;
		array[ offset + 2 ] = this.z;

		return array;

	}

	fromBufferAttribute( attribute, index ) {

		this.x = attribute.getX( index );
		this.y = attribute.getY( index );
		this.z = attribute.getZ( index );

		return this;

	}

	random() {

		this.x = Math.random();
		this.y = Math.random();
		this.z = Math.random();

		return this;

	}

	randomDirection() {

		// https://mathworld.wolfram.com/SpherePointPicking.html

		const theta = Math.random() * Math.PI * 2;
		const u = Math.random() * 2 - 1;
		const c = Math.sqrt( 1 - u * u );

		this.x = c * Math.cos( theta );
		this.y = u;
		this.z = c * Math.sin( theta );

		return this;

	}

	*[ Symbol.iterator ]() {

		yield this.x;
		yield this.y;
		yield this.z;

	}

}

const _vector$c = /*@__PURE__*/ new Vector3();
const _quaternion$4 = /*@__PURE__*/ new Quaternion();

class Box3 {

	constructor( min = new Vector3( + Infinity, + Infinity, + Infinity ), max = new Vector3( - Infinity, - Infinity, - Infinity ) ) {

		this.isBox3 = true;

		this.min = min;
		this.max = max;

	}

	set( min, max ) {

		this.min.copy( min );
		this.max.copy( max );

		return this;

	}

	setFromArray( array ) {

		this.makeEmpty();

		for ( let i = 0, il = array.length; i < il; i += 3 ) {

			this.expandByPoint( _vector$b.fromArray( array, i ) );

		}

		return this;

	}

	setFromBufferAttribute( attribute ) {

		this.makeEmpty();

		for ( let i = 0, il = attribute.count; i < il; i ++ ) {

			this.expandByPoint( _vector$b.fromBufferAttribute( attribute, i ) );

		}

		return this;

	}

	setFromPoints( points ) {

		this.makeEmpty();

		for ( let i = 0, il = points.length; i < il; i ++ ) {

			this.expandByPoint( points[ i ] );

		}

		return this;

	}

	setFromCenterAndSize( center, size ) {

		const halfSize = _vector$b.copy( size ).multiplyScalar( 0.5 );

		this.min.copy( center ).sub( halfSize );
		this.max.copy( center ).add( halfSize );

		return this;

	}

	setFromObject( object, precise = false ) {

		this.makeEmpty();

		return this.expandByObject( object, precise );

	}

	clone() {

		return new this.constructor().copy( this );

	}

	copy( box ) {

		this.min.copy( box.min );
		this.max.copy( box.max );

		return this;

	}

	makeEmpty() {

		this.min.x = this.min.y = this.min.z = + Infinity;
		this.max.x = this.max.y = this.max.z = - Infinity;

		return this;

	}

	isEmpty() {

		// this is a more robust check for empty than ( volume <= 0 ) because volume can get positive with two negative axes

		return ( this.max.x < this.min.x ) || ( this.max.y < this.min.y ) || ( this.max.z < this.min.z );

	}

	getCenter( target ) {

		return this.isEmpty() ? target.set( 0, 0, 0 ) : target.addVectors( this.min, this.max ).multiplyScalar( 0.5 );

	}

	getSize( target ) {

		return this.isEmpty() ? target.set( 0, 0, 0 ) : target.subVectors( this.max, this.min );

	}

	expandByPoint( point ) {

		this.min.min( point );
		this.max.max( point );

		return this;

	}

	expandByVector( vector ) {

		this.min.sub( vector );
		this.max.add( vector );

		return this;

	}

	expandByScalar( scalar ) {

		this.min.addScalar( - scalar );
		this.max.addScalar( scalar );

		return this;

	}

	expandByObject( object, precise = false ) {

		// Computes the world-axis-aligned bounding box of an object (including its children),
		// accounting for both the object's, and children's, world transforms

		object.updateWorldMatrix( false, false );

		const geometry = object.geometry;

		if ( geometry !== undefined ) {

			const positionAttribute = geometry.getAttribute( 'position' );

			// precise AABB computation based on vertex data requires at least a position attribute.
			// instancing isn't supported so far and uses the normal (conservative) code path.

			if ( precise === true && positionAttribute !== undefined && object.isInstancedMesh !== true ) {

				for ( let i = 0, l = positionAttribute.count; i < l; i ++ ) {

					if ( object.isMesh === true ) {

						object.getVertexPosition( i, _vector$b );

					} else {

						_vector$b.fromBufferAttribute( positionAttribute, i );

					}

					_vector$b.applyMatrix4( object.matrixWorld );
					this.expandByPoint( _vector$b );

				}

			} else {

				if ( object.boundingBox !== undefined ) {

					// object-level bounding box

					if ( object.boundingBox === null ) {

						object.computeBoundingBox();

					}

					_box$4.copy( object.boundingBox );


				} else {

					// geometry-level bounding box

					if ( geometry.boundingBox === null ) {

						geometry.computeBoundingBox();

					}

					_box$4.copy( geometry.boundingBox );

				}

				_box$4.applyMatrix4( object.matrixWorld );

				this.union( _box$4 );

			}

		}

		const children = object.children;

		for ( let i = 0, l = children.length; i < l; i ++ ) {

			this.expandByObject( children[ i ], precise );

		}

		return this;

	}

	containsPoint( point ) {

		return point.x < this.min.x || point.x > this.max.x ||
			point.y < this.min.y || point.y > this.max.y ||
			point.z < this.min.z || point.z > this.max.z ? false : true;

	}

	containsBox( box ) {

		return this.min.x <= box.min.x && box.max.x <= this.max.x &&
			this.min.y <= box.min.y && box.max.y <= this.max.y &&
			this.min.z <= box.min.z && box.max.z <= this.max.z;

	}

	getParameter( point, target ) {

		// This can potentially have a divide by zero if the box
		// has a size dimension of 0.

		return target.set(
			( point.x - this.min.x ) / ( this.max.x - this.min.x ),
			( point.y - this.min.y ) / ( this.max.y - this.min.y ),
			( point.z - this.min.z ) / ( this.max.z - this.min.z )
		);

	}

	intersectsBox( box ) {

		// using 6 splitting planes to rule out intersections.
		return box.max.x < this.min.x || box.min.x > this.max.x ||
			box.max.y < this.min.y || box.min.y > this.max.y ||
			box.max.z < this.min.z || box.min.z > this.max.z ? false : true;

	}

	intersectsSphere( sphere ) {

		// Find the point on the AABB closest to the sphere center.
		this.clampPoint( sphere.center, _vector$b );

		// If that point is inside the sphere, the AABB and sphere intersect.
		return _vector$b.distanceToSquared( sphere.center ) <= ( sphere.radius * sphere.radius );

	}

	intersectsPlane( plane ) {

		// We compute the minimum and maximum dot product values. If those values
		// are on the same side (back or front) of the plane, then there is no intersection.

		let min, max;

		if ( plane.normal.x > 0 ) {

			min = plane.normal.x * this.min.x;
			max = plane.normal.x * this.max.x;

		} else {

			min = plane.normal.x * this.max.x;
			max = plane.normal.x * this.min.x;

		}

		if ( plane.normal.y > 0 ) {

			min += plane.normal.y * this.min.y;
			max += plane.normal.y * this.max.y;

		} else {

			min += plane.normal.y * this.max.y;
			max += plane.normal.y * this.min.y;

		}

		if ( plane.normal.z > 0 ) {

			min += plane.normal.z * this.min.z;
			max += plane.normal.z * this.max.z;

		} else {

			min += plane.normal.z * this.max.z;
			max += plane.normal.z * this.min.z;

		}

		return ( min <= - plane.constant && max >= - plane.constant );

	}

	intersectsTriangle( triangle ) {

		if ( this.isEmpty() ) {

			return false;

		}

		// compute box center and extents
		this.getCenter( _center );
		_extents.subVectors( this.max, _center );

		// translate triangle to aabb origin
		_v0$2.subVectors( triangle.a, _center );
		_v1$7.subVectors( triangle.b, _center );
		_v2$4.subVectors( triangle.c, _center );

		// compute edge vectors for triangle
		_f0.subVectors( _v1$7, _v0$2 );
		_f1.subVectors( _v2$4, _v1$7 );
		_f2.subVectors( _v0$2, _v2$4 );

		// test against axes that are given by cross product combinations of the edges of the triangle and the edges of the aabb
		// make an axis testing of each of the 3 sides of the aabb against each of the 3 sides of the triangle = 9 axis of separation
		// axis_ij = u_i x f_j (u0, u1, u2 = face normals of aabb = x,y,z axes vectors since aabb is axis aligned)
		let axes = [
			0, - _f0.z, _f0.y, 0, - _f1.z, _f1.y, 0, - _f2.z, _f2.y,
			_f0.z, 0, - _f0.x, _f1.z, 0, - _f1.x, _f2.z, 0, - _f2.x,
			- _f0.y, _f0.x, 0, - _f1.y, _f1.x, 0, - _f2.y, _f2.x, 0
		];
		if ( ! satForAxes( axes, _v0$2, _v1$7, _v2$4, _extents ) ) {

			return false;

		}

		// test 3 face normals from the aabb
		axes = [ 1, 0, 0, 0, 1, 0, 0, 0, 1 ];
		if ( ! satForAxes( axes, _v0$2, _v1$7, _v2$4, _extents ) ) {

			return false;

		}

		// finally testing the face normal of the triangle
		// use already existing triangle edge vectors here
		_triangleNormal.crossVectors( _f0, _f1 );
		axes = [ _triangleNormal.x, _triangleNormal.y, _triangleNormal.z ];

		return satForAxes( axes, _v0$2, _v1$7, _v2$4, _extents );

	}

	clampPoint( point, target ) {

		return target.copy( point ).clamp( this.min, this.max );

	}

	distanceToPoint( point ) {

		return this.clampPoint( point, _vector$b ).distanceTo( point );

	}

	getBoundingSphere( target ) {

		if ( this.isEmpty() ) {

			target.makeEmpty();

		} else {

			this.getCenter( target.center );

			target.radius = this.getSize( _vector$b ).length() * 0.5;

		}

		return target;

	}

	intersect( box ) {

		this.min.max( box.min );
		this.max.min( box.max );

		// ensure that if there is no overlap, the result is fully empty, not slightly empty with non-inf/+inf values that will cause subsequence intersects to erroneously return valid values.
		if ( this.isEmpty() ) this.makeEmpty();

		return this;

	}

	union( box ) {

		this.min.min( box.min );
		this.max.max( box.max );

		return this;

	}

	applyMatrix4( matrix ) {

		// transform of empty box is an empty box.
		if ( this.isEmpty() ) return this;

		// NOTE: I am using a binary pattern to specify all 2^3 combinations below
		_points[ 0 ].set( this.min.x, this.min.y, this.min.z ).applyMatrix4( matrix ); // 000
		_points[ 1 ].set( this.min.x, this.min.y, this.max.z ).applyMatrix4( matrix ); // 001
		_points[ 2 ].set( this.min.x, this.max.y, this.min.z ).applyMatrix4( matrix ); // 010
		_points[ 3 ].set( this.min.x, this.max.y, this.max.z ).applyMatrix4( matrix ); // 011
		_points[ 4 ].set( this.max.x, this.min.y, this.min.z ).applyMatrix4( matrix ); // 100
		_points[ 5 ].set( this.max.x, this.min.y, this.max.z ).applyMatrix4( matrix ); // 101
		_points[ 6 ].set( this.max.x, this.max.y, this.min.z ).applyMatrix4( matrix ); // 110
		_points[ 7 ].set( this.max.x, this.max.y, this.max.z ).applyMatrix4( matrix ); // 111

		this.setFromPoints( _points );

		return this;

	}

	translate( offset ) {

		this.min.add( offset );
		this.max.add( offset );

		return this;

	}

	equals( box ) {

		return box.min.equals( this.min ) && box.max.equals( this.max );

	}

}

const _points = [
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3()
];

const _vector$b = /*@__PURE__*/ new Vector3();

const _box$4 = /*@__PURE__*/ new Box3();

// triangle centered vertices

const _v0$2 = /*@__PURE__*/ new Vector3();
const _v1$7 = /*@__PURE__*/ new Vector3();
const _v2$4 = /*@__PURE__*/ new Vector3();

// triangle edge vectors

const _f0 = /*@__PURE__*/ new Vector3();
const _f1 = /*@__PURE__*/ new Vector3();
const _f2 = /*@__PURE__*/ new Vector3();

const _center = /*@__PURE__*/ new Vector3();
const _extents = /*@__PURE__*/ new Vector3();
const _triangleNormal = /*@__PURE__*/ new Vector3();
const _testAxis = /*@__PURE__*/ new Vector3();

function satForAxes( axes, v0, v1, v2, extents ) {

	for ( let i = 0, j = axes.length - 3; i <= j; i += 3 ) {

		_testAxis.fromArray( axes, i );
		// project the aabb onto the separating axis
		const r = extents.x * Math.abs( _testAxis.x ) + extents.y * Math.abs( _testAxis.y ) + extents.z * Math.abs( _testAxis.z );
		// project all 3 vertices of the triangle onto the separating axis
		const p0 = v0.dot( _testAxis );
		const p1 = v1.dot( _testAxis );
		const p2 = v2.dot( _testAxis );
		// actual test, basically see if either of the most extreme of the triangle points intersects r
		if ( Math.max( - Math.max( p0, p1, p2 ), Math.min( p0, p1, p2 ) ) > r ) {

			// points of the projected triangle are outside the projected half-length of the aabb
			// the axis is separating and we can exit
			return false;

		}

	}

	return true;

}

const _box$3 = /*@__PURE__*/ new Box3();
const _v1$6 = /*@__PURE__*/ new Vector3();
const _v2$3 = /*@__PURE__*/ new Vector3();

class Sphere {

	constructor( center = new Vector3(), radius = - 1 ) {

		this.isSphere = true;

		this.center = center;
		this.radius = radius;

	}

	set( center, radius ) {

		this.center.copy( center );
		this.radius = radius;

		return this;

	}

	setFromPoints( points, optionalCenter ) {

		const center = this.center;

		if ( optionalCenter !== undefined ) {

			center.copy( optionalCenter );

		} else {

			_box$3.setFromPoints( points ).getCenter( center );

		}

		let maxRadiusSq = 0;

		for ( let i = 0, il = points.length; i < il; i ++ ) {

			maxRadiusSq = Math.max( maxRadiusSq, center.distanceToSquared( points[ i ] ) );

		}

		this.radius = Math.sqrt( maxRadiusSq );

		return this;

	}

	copy( sphere ) {

		this.center.copy( sphere.center );
		this.radius = sphere.radius;

		return this;

	}

	isEmpty() {

		return ( this.radius < 0 );

	}

	makeEmpty() {

		this.center.set( 0, 0, 0 );
		this.radius = - 1;

		return this;

	}

	containsPoint( point ) {

		return ( point.distanceToSquared( this.center ) <= ( this.radius * this.radius ) );

	}

	distanceToPoint( point ) {

		return ( point.distanceTo( this.center ) - this.radius );

	}

	intersectsSphere( sphere ) {

		const radiusSum = this.radius + sphere.radius;

		return sphere.center.distanceToSquared( this.center ) <= ( radiusSum * radiusSum );

	}

	intersectsBox( box ) {

		return box.intersectsSphere( this );

	}

	intersectsPlane( plane ) {

		return Math.abs( plane.distanceToPoint( this.center ) ) <= this.radius;

	}

	clampPoint( point, target ) {

		const deltaLengthSq = this.center.distanceToSquared( point );

		target.copy( point );

		if ( deltaLengthSq > ( this.radius * this.radius ) ) {

			target.sub( this.center ).normalize();
			target.multiplyScalar( this.radius ).add( this.center );

		}

		return target;

	}

	getBoundingBox( target ) {

		if ( this.isEmpty() ) {

			// Empty sphere produces empty bounding box
			target.makeEmpty();
			return target;

		}

		target.set( this.center, this.center );
		target.expandByScalar( this.radius );

		return target;

	}

	applyMatrix4( matrix ) {

		this.center.applyMatrix4( matrix );
		this.radius = this.radius * matrix.getMaxScaleOnAxis();

		return this;

	}

	translate( offset ) {

		this.center.add( offset );

		return this;

	}

	expandByPoint( point ) {

		if ( this.isEmpty() ) {

			this.center.copy( point );

			this.radius = 0;

			return this;

		}

		_v1$6.subVectors( point, this.center );

		const lengthSq = _v1$6.lengthSq();

		if ( lengthSq > ( this.radius * this.radius ) ) {

			// calculate the minimal sphere

			const length = Math.sqrt( lengthSq );

			const delta = ( length - this.radius ) * 0.5;

			this.center.addScaledVector( _v1$6, delta / length );

			this.radius += delta;

		}

		return this;

	}

	union( sphere ) {

		if ( sphere.isEmpty() ) {

			return this;

		}

		if ( this.isEmpty() ) {

			this.copy( sphere );

			return this;

		}

		if ( this.center.equals( sphere.center ) === true ) {

			 this.radius = Math.max( this.radius, sphere.radius );

		} else {

			_v2$3.subVectors( sphere.center, this.center ).setLength( sphere.radius );

			this.expandByPoint( _v1$6.copy( sphere.center ).add( _v2$3 ) );

			this.expandByPoint( _v1$6.copy( sphere.center ).sub( _v2$3 ) );

		}

		return this;

	}

	equals( sphere ) {

		return sphere.center.equals( this.center ) && ( sphere.radius === this.radius );

	}

	clone() {

		return new this.constructor().copy( this );

	}

}

const _vector$a = /*@__PURE__*/ new Vector3();
const _segCenter = /*@__PURE__*/ new Vector3();
const _segDir = /*@__PURE__*/ new Vector3();
const _diff = /*@__PURE__*/ new Vector3();

const _edge1 = /*@__PURE__*/ new Vector3();
const _edge2 = /*@__PURE__*/ new Vector3();
const _normal$1 = /*@__PURE__*/ new Vector3();

class Ray {

	constructor( origin = new Vector3(), direction = new Vector3( 0, 0, - 1 ) ) {

		this.origin = origin;
		this.direction = direction;

	}

	set( origin, direction ) {

		this.origin.copy( origin );
		this.direction.copy( direction );

		return this;

	}

	copy( ray ) {

		this.origin.copy( ray.origin );
		this.direction.copy( ray.direction );

		return this;

	}

	at( t, target ) {

		return target.copy( this.origin ).addScaledVector( this.direction, t );

	}

	lookAt( v ) {

		this.direction.copy( v ).sub( this.origin ).normalize();

		return this;

	}

	recast( t ) {

		this.origin.copy( this.at( t, _vector$a ) );

		return this;

	}

	closestPointToPoint( point, target ) {

		target.subVectors( point, this.origin );

		const directionDistance = target.dot( this.direction );

		if ( directionDistance < 0 ) {

			return target.copy( this.origin );

		}

		return target.copy( this.origin ).addScaledVector( this.direction, directionDistance );

	}

	distanceToPoint( point ) {

		return Math.sqrt( this.distanceSqToPoint( point ) );

	}

	distanceSqToPoint( point ) {

		const directionDistance = _vector$a.subVectors( point, this.origin ).dot( this.direction );

		// point behind the ray

		if ( directionDistance < 0 ) {

			return this.origin.distanceToSquared( point );

		}

		_vector$a.copy( this.origin ).addScaledVector( this.direction, directionDistance );

		return _vector$a.distanceToSquared( point );

	}

	distanceSqToSegment( v0, v1, optionalPointOnRay, optionalPointOnSegment ) {

		// from https://github.com/pmjoniak/GeometricTools/blob/master/GTEngine/Include/Mathematics/GteDistRaySegment.h
		// It returns the min distance between the ray and the segment
		// defined by v0 and v1
		// It can also set two optional targets :
		// - The closest point on the ray
		// - The closest point on the segment

		_segCenter.copy( v0 ).add( v1 ).multiplyScalar( 0.5 );
		_segDir.copy( v1 ).sub( v0 ).normalize();
		_diff.copy( this.origin ).sub( _segCenter );

		const segExtent = v0.distanceTo( v1 ) * 0.5;
		const a01 = - this.direction.dot( _segDir );
		const b0 = _diff.dot( this.direction );
		const b1 = - _diff.dot( _segDir );
		const c = _diff.lengthSq();
		const det = Math.abs( 1 - a01 * a01 );
		let s0, s1, sqrDist, extDet;

		if ( det > 0 ) {

			// The ray and segment are not parallel.

			s0 = a01 * b1 - b0;
			s1 = a01 * b0 - b1;
			extDet = segExtent * det;

			if ( s0 >= 0 ) {

				if ( s1 >= - extDet ) {

					if ( s1 <= extDet ) {

						// region 0
						// Minimum at interior points of ray and segment.

						const invDet = 1 / det;
						s0 *= invDet;
						s1 *= invDet;
						sqrDist = s0 * ( s0 + a01 * s1 + 2 * b0 ) + s1 * ( a01 * s0 + s1 + 2 * b1 ) + c;

					} else {

						// region 1

						s1 = segExtent;
						s0 = Math.max( 0, - ( a01 * s1 + b0 ) );
						sqrDist = - s0 * s0 + s1 * ( s1 + 2 * b1 ) + c;

					}

				} else {

					// region 5

					s1 = - segExtent;
					s0 = Math.max( 0, - ( a01 * s1 + b0 ) );
					sqrDist = - s0 * s0 + s1 * ( s1 + 2 * b1 ) + c;

				}

			} else {

				if ( s1 <= - extDet ) {

					// region 4

					s0 = Math.max( 0, - ( - a01 * segExtent + b0 ) );
					s1 = ( s0 > 0 ) ? - segExtent : Math.min( Math.max( - segExtent, - b1 ), segExtent );
					sqrDist = - s0 * s0 + s1 * ( s1 + 2 * b1 ) + c;

				} else if ( s1 <= extDet ) {

					// region 3

					s0 = 0;
					s1 = Math.min( Math.max( - segExtent, - b1 ), segExtent );
					sqrDist = s1 * ( s1 + 2 * b1 ) + c;

				} else {

					// region 2

					s0 = Math.max( 0, - ( a01 * segExtent + b0 ) );
					s1 = ( s0 > 0 ) ? segExtent : Math.min( Math.max( - segExtent, - b1 ), segExtent );
					sqrDist = - s0 * s0 + s1 * ( s1 + 2 * b1 ) + c;

				}

			}

		} else {

			// Ray and segment are parallel.

			s1 = ( a01 > 0 ) ? - segExtent : segExtent;
			s0 = Math.max( 0, - ( a01 * s1 + b0 ) );
			sqrDist = - s0 * s0 + s1 * ( s1 + 2 * b1 ) + c;

		}

		if ( optionalPointOnRay ) {

			optionalPointOnRay.copy( this.origin ).addScaledVector( this.direction, s0 );

		}

		if ( optionalPointOnSegment ) {

			optionalPointOnSegment.copy( _segCenter ).addScaledVector( _segDir, s1 );

		}

		return sqrDist;

	}

	intersectSphere( sphere, target ) {

		_vector$a.subVectors( sphere.center, this.origin );
		const tca = _vector$a.dot( this.direction );
		const d2 = _vector$a.dot( _vector$a ) - tca * tca;
		const radius2 = sphere.radius * sphere.radius;

		if ( d2 > radius2 ) return null;

		const thc = Math.sqrt( radius2 - d2 );

		// t0 = first intersect point - entrance on front of sphere
		const t0 = tca - thc;

		// t1 = second intersect point - exit point on back of sphere
		const t1 = tca + thc;

		// test to see if t1 is behind the ray - if so, return null
		if ( t1 < 0 ) return null;

		// test to see if t0 is behind the ray:
		// if it is, the ray is inside the sphere, so return the second exit point scaled by t1,
		// in order to always return an intersect point that is in front of the ray.
		if ( t0 < 0 ) return this.at( t1, target );

		// else t0 is in front of the ray, so return the first collision point scaled by t0
		return this.at( t0, target );

	}

	intersectsSphere( sphere ) {

		return this.distanceSqToPoint( sphere.center ) <= ( sphere.radius * sphere.radius );

	}

	distanceToPlane( plane ) {

		const denominator = plane.normal.dot( this.direction );

		if ( denominator === 0 ) {

			// line is coplanar, return origin
			if ( plane.distanceToPoint( this.origin ) === 0 ) {

				return 0;

			}

			// Null is preferable to undefined since undefined means.... it is undefined

			return null;

		}

		const t = - ( this.origin.dot( plane.normal ) + plane.constant ) / denominator;

		// Return if the ray never intersects the plane

		return t >= 0 ? t : null;

	}

	intersectPlane( plane, target ) {

		const t = this.distanceToPlane( plane );

		if ( t === null ) {

			return null;

		}

		return this.at( t, target );

	}

	intersectsPlane( plane ) {

		// check if the ray lies on the plane first

		const distToPoint = plane.distanceToPoint( this.origin );

		if ( distToPoint === 0 ) {

			return true;

		}

		const denominator = plane.normal.dot( this.direction );

		if ( denominator * distToPoint < 0 ) {

			return true;

		}

		// ray origin is behind the plane (and is pointing behind it)

		return false;

	}

	intersectBox( box, target ) {

		let tmin, tmax, tymin, tymax, tzmin, tzmax;

		const invdirx = 1 / this.direction.x,
			invdiry = 1 / this.direction.y,
			invdirz = 1 / this.direction.z;

		const origin = this.origin;

		if ( invdirx >= 0 ) {

			tmin = ( box.min.x - origin.x ) * invdirx;
			tmax = ( box.max.x - origin.x ) * invdirx;

		} else {

			tmin = ( box.max.x - origin.x ) * invdirx;
			tmax = ( box.min.x - origin.x ) * invdirx;

		}

		if ( invdiry >= 0 ) {

			tymin = ( box.min.y - origin.y ) * invdiry;
			tymax = ( box.max.y - origin.y ) * invdiry;

		} else {

			tymin = ( box.max.y - origin.y ) * invdiry;
			tymax = ( box.min.y - origin.y ) * invdiry;

		}

		if ( ( tmin > tymax ) || ( tymin > tmax ) ) return null;

		if ( tymin > tmin || isNaN( tmin ) ) tmin = tymin;

		if ( tymax < tmax || isNaN( tmax ) ) tmax = tymax;

		if ( invdirz >= 0 ) {

			tzmin = ( box.min.z - origin.z ) * invdirz;
			tzmax = ( box.max.z - origin.z ) * invdirz;

		} else {

			tzmin = ( box.max.z - origin.z ) * invdirz;
			tzmax = ( box.min.z - origin.z ) * invdirz;

		}

		if ( ( tmin > tzmax ) || ( tzmin > tmax ) ) return null;

		if ( tzmin > tmin || tmin !== tmin ) tmin = tzmin;

		if ( tzmax < tmax || tmax !== tmax ) tmax = tzmax;

		//return point closest to the ray (positive side)

		if ( tmax < 0 ) return null;

		return this.at( tmin >= 0 ? tmin : tmax, target );

	}

	intersectsBox( box ) {

		return this.intersectBox( box, _vector$a ) !== null;

	}

	intersectTriangle( a, b, c, backfaceCulling, target ) {

		// Compute the offset origin, edges, and normal.

		// from https://github.com/pmjoniak/GeometricTools/blob/master/GTEngine/Include/Mathematics/GteIntrRay3Triangle3.h

		_edge1.subVectors( b, a );
		_edge2.subVectors( c, a );
		_normal$1.crossVectors( _edge1, _edge2 );

		// Solve Q + t*D = b1*E1 + b2*E2 (Q = kDiff, D = ray direction,
		// E1 = kEdge1, E2 = kEdge2, N = Cross(E1,E2)) by
		//   |Dot(D,N)|*b1 = sign(Dot(D,N))*Dot(D,Cross(Q,E2))
		//   |Dot(D,N)|*b2 = sign(Dot(D,N))*Dot(D,Cross(E1,Q))
		//   |Dot(D,N)|*t = -sign(Dot(D,N))*Dot(Q,N)
		let DdN = this.direction.dot( _normal$1 );
		let sign;

		if ( DdN > 0 ) {

			if ( backfaceCulling ) return null;
			sign = 1;

		} else if ( DdN < 0 ) {

			sign = - 1;
			DdN = - DdN;

		} else {

			return null;

		}

		_diff.subVectors( this.origin, a );
		const DdQxE2 = sign * this.direction.dot( _edge2.crossVectors( _diff, _edge2 ) );

		// b1 < 0, no intersection
		if ( DdQxE2 < 0 ) {

			return null;

		}

		const DdE1xQ = sign * this.direction.dot( _edge1.cross( _diff ) );

		// b2 < 0, no intersection
		if ( DdE1xQ < 0 ) {

			return null;

		}

		// b1+b2 > 1, no intersection
		if ( DdQxE2 + DdE1xQ > DdN ) {

			return null;

		}

		// Line intersects triangle, check if ray does.
		const QdN = - sign * _diff.dot( _normal$1 );

		// t < 0, no intersection
		if ( QdN < 0 ) {

			return null;

		}

		// Ray intersects triangle.
		return this.at( QdN / DdN, target );

	}

	applyMatrix4( matrix4 ) {

		this.origin.applyMatrix4( matrix4 );
		this.direction.transformDirection( matrix4 );

		return this;

	}

	equals( ray ) {

		return ray.origin.equals( this.origin ) && ray.direction.equals( this.direction );

	}

	clone() {

		return new this.constructor().copy( this );

	}

}

class Matrix4 {

	constructor( n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44 ) {

		Matrix4.prototype.isMatrix4 = true;

		this.elements = [

			1, 0, 0, 0,
			0, 1, 0, 0,
			0, 0, 1, 0,
			0, 0, 0, 1

		];

		if ( n11 !== undefined ) {

			this.set( n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44 );

		}

	}

	set( n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44 ) {

		const te = this.elements;

		te[ 0 ] = n11; te[ 4 ] = n12; te[ 8 ] = n13; te[ 12 ] = n14;
		te[ 1 ] = n21; te[ 5 ] = n22; te[ 9 ] = n23; te[ 13 ] = n24;
		te[ 2 ] = n31; te[ 6 ] = n32; te[ 10 ] = n33; te[ 14 ] = n34;
		te[ 3 ] = n41; te[ 7 ] = n42; te[ 11 ] = n43; te[ 15 ] = n44;

		return this;

	}

	identity() {

		this.set(

			1, 0, 0, 0,
			0, 1, 0, 0,
			0, 0, 1, 0,
			0, 0, 0, 1

		);

		return this;

	}

	clone() {

		return new Matrix4().fromArray( this.elements );

	}

	copy( m ) {

		const te = this.elements;
		const me = m.elements;

		te[ 0 ] = me[ 0 ]; te[ 1 ] = me[ 1 ]; te[ 2 ] = me[ 2 ]; te[ 3 ] = me[ 3 ];
		te[ 4 ] = me[ 4 ]; te[ 5 ] = me[ 5 ]; te[ 6 ] = me[ 6 ]; te[ 7 ] = me[ 7 ];
		te[ 8 ] = me[ 8 ]; te[ 9 ] = me[ 9 ]; te[ 10 ] = me[ 10 ]; te[ 11 ] = me[ 11 ];
		te[ 12 ] = me[ 12 ]; te[ 13 ] = me[ 13 ]; te[ 14 ] = me[ 14 ]; te[ 15 ] = me[ 15 ];

		return this;

	}

	copyPosition( m ) {

		const te = this.elements, me = m.elements;

		te[ 12 ] = me[ 12 ];
		te[ 13 ] = me[ 13 ];
		te[ 14 ] = me[ 14 ];

		return this;

	}

	setFromMatrix3( m ) {

		const me = m.elements;

		this.set(

			me[ 0 ], me[ 3 ], me[ 6 ], 0,
			me[ 1 ], me[ 4 ], me[ 7 ], 0,
			me[ 2 ], me[ 5 ], me[ 8 ], 0,
			0, 0, 0, 1

		);

		return this;

	}

	extractBasis( xAxis, yAxis, zAxis ) {

		xAxis.setFromMatrixColumn( this, 0 );
		yAxis.setFromMatrixColumn( this, 1 );
		zAxis.setFromMatrixColumn( this, 2 );

		return this;

	}

	makeBasis( xAxis, yAxis, zAxis ) {

		this.set(
			xAxis.x, yAxis.x, zAxis.x, 0,
			xAxis.y, yAxis.y, zAxis.y, 0,
			xAxis.z, yAxis.z, zAxis.z, 0,
			0, 0, 0, 1
		);

		return this;

	}

	extractRotation( m ) {

		// this method does not support reflection matrices

		const te = this.elements;
		const me = m.elements;

		const scaleX = 1 / _v1$5.setFromMatrixColumn( m, 0 ).length();
		const scaleY = 1 / _v1$5.setFromMatrixColumn( m, 1 ).length();
		const scaleZ = 1 / _v1$5.setFromMatrixColumn( m, 2 ).length();

		te[ 0 ] = me[ 0 ] * scaleX;
		te[ 1 ] = me[ 1 ] * scaleX;
		te[ 2 ] = me[ 2 ] * scaleX;
		te[ 3 ] = 0;

		te[ 4 ] = me[ 4 ] * scaleY;
		te[ 5 ] = me[ 5 ] * scaleY;
		te[ 6 ] = me[ 6 ] * scaleY;
		te[ 7 ] = 0;

		te[ 8 ] = me[ 8 ] * scaleZ;
		te[ 9 ] = me[ 9 ] * scaleZ;
		te[ 10 ] = me[ 10 ] * scaleZ;
		te[ 11 ] = 0;

		te[ 12 ] = 0;
		te[ 13 ] = 0;
		te[ 14 ] = 0;
		te[ 15 ] = 1;

		return this;

	}

	makeRotationFromEuler( euler ) {

		const te = this.elements;

		const x = euler.x, y = euler.y, z = euler.z;
		const a = Math.cos( x ), b = Math.sin( x );
		const c = Math.cos( y ), d = Math.sin( y );
		const e = Math.cos( z ), f = Math.sin( z );

		if ( euler.order === 'XYZ' ) {

			const ae = a * e, af = a * f, be = b * e, bf = b * f;

			te[ 0 ] = c * e;
			te[ 4 ] = - c * f;
			te[ 8 ] = d;

			te[ 1 ] = af + be * d;
			te[ 5 ] = ae - bf * d;
			te[ 9 ] = - b * c;

			te[ 2 ] = bf - ae * d;
			te[ 6 ] = be + af * d;
			te[ 10 ] = a * c;

		} else if ( euler.order === 'YXZ' ) {

			const ce = c * e, cf = c * f, de = d * e, df = d * f;

			te[ 0 ] = ce + df * b;
			te[ 4 ] = de * b - cf;
			te[ 8 ] = a * d;

			te[ 1 ] = a * f;
			te[ 5 ] = a * e;
			te[ 9 ] = - b;

			te[ 2 ] = cf * b - de;
			te[ 6 ] = df + ce * b;
			te[ 10 ] = a * c;

		} else if ( euler.order === 'ZXY' ) {

			const ce = c * e, cf = c * f, de = d * e, df = d * f;

			te[ 0 ] = ce - df * b;
			te[ 4 ] = - a * f;
			te[ 8 ] = de + cf * b;

			te[ 1 ] = cf + de * b;
			te[ 5 ] = a * e;
			te[ 9 ] = df - ce * b;

			te[ 2 ] = - a * d;
			te[ 6 ] = b;
			te[ 10 ] = a * c;

		} else if ( euler.order === 'ZYX' ) {

			const ae = a * e, af = a * f, be = b * e, bf = b * f;

			te[ 0 ] = c * e;
			te[ 4 ] = be * d - af;
			te[ 8 ] = ae * d + bf;

			te[ 1 ] = c * f;
			te[ 5 ] = bf * d + ae;
			te[ 9 ] = af * d - be;

			te[ 2 ] = - d;
			te[ 6 ] = b * c;
			te[ 10 ] = a * c;

		} else if ( euler.order === 'YZX' ) {

			const ac = a * c, ad = a * d, bc = b * c, bd = b * d;

			te[ 0 ] = c * e;
			te[ 4 ] = bd - ac * f;
			te[ 8 ] = bc * f + ad;

			te[ 1 ] = f;
			te[ 5 ] = a * e;
			te[ 9 ] = - b * e;

			te[ 2 ] = - d * e;
			te[ 6 ] = ad * f + bc;
			te[ 10 ] = ac - bd * f;

		} else if ( euler.order === 'XZY' ) {

			const ac = a * c, ad = a * d, bc = b * c, bd = b * d;

			te[ 0 ] = c * e;
			te[ 4 ] = - f;
			te[ 8 ] = d * e;

			te[ 1 ] = ac * f + bd;
			te[ 5 ] = a * e;
			te[ 9 ] = ad * f - bc;

			te[ 2 ] = bc * f - ad;
			te[ 6 ] = b * e;
			te[ 10 ] = bd * f + ac;

		}

		// bottom row
		te[ 3 ] = 0;
		te[ 7 ] = 0;
		te[ 11 ] = 0;

		// last column
		te[ 12 ] = 0;
		te[ 13 ] = 0;
		te[ 14 ] = 0;
		te[ 15 ] = 1;

		return this;

	}

	makeRotationFromQuaternion( q ) {

		return this.compose( _zero, q, _one );

	}

	lookAt( eye, target, up ) {

		const te = this.elements;

		_z.subVectors( eye, target );

		if ( _z.lengthSq() === 0 ) {

			// eye and target are in the same position

			_z.z = 1;

		}

		_z.normalize();
		_x.crossVectors( up, _z );

		if ( _x.lengthSq() === 0 ) {

			// up and z are parallel

			if ( Math.abs( up.z ) === 1 ) {

				_z.x += 0.0001;

			} else {

				_z.z += 0.0001;

			}

			_z.normalize();
			_x.crossVectors( up, _z );

		}

		_x.normalize();
		_y.crossVectors( _z, _x );

		te[ 0 ] = _x.x; te[ 4 ] = _y.x; te[ 8 ] = _z.x;
		te[ 1 ] = _x.y; te[ 5 ] = _y.y; te[ 9 ] = _z.y;
		te[ 2 ] = _x.z; te[ 6 ] = _y.z; te[ 10 ] = _z.z;

		return this;

	}

	multiply( m ) {

		return this.multiplyMatrices( this, m );

	}

	premultiply( m ) {

		return this.multiplyMatrices( m, this );

	}

	multiplyMatrices( a, b ) {

		const ae = a.elements;
		const be = b.elements;
		const te = this.elements;

		const a11 = ae[ 0 ], a12 = ae[ 4 ], a13 = ae[ 8 ], a14 = ae[ 12 ];
		const a21 = ae[ 1 ], a22 = ae[ 5 ], a23 = ae[ 9 ], a24 = ae[ 13 ];
		const a31 = ae[ 2 ], a32 = ae[ 6 ], a33 = ae[ 10 ], a34 = ae[ 14 ];
		const a41 = ae[ 3 ], a42 = ae[ 7 ], a43 = ae[ 11 ], a44 = ae[ 15 ];

		const b11 = be[ 0 ], b12 = be[ 4 ], b13 = be[ 8 ], b14 = be[ 12 ];
		const b21 = be[ 1 ], b22 = be[ 5 ], b23 = be[ 9 ], b24 = be[ 13 ];
		const b31 = be[ 2 ], b32 = be[ 6 ], b33 = be[ 10 ], b34 = be[ 14 ];
		const b41 = be[ 3 ], b42 = be[ 7 ], b43 = be[ 11 ], b44 = be[ 15 ];

		te[ 0 ] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
		te[ 4 ] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
		te[ 8 ] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
		te[ 12 ] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;

		te[ 1 ] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
		te[ 5 ] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
		te[ 9 ] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
		te[ 13 ] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;

		te[ 2 ] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
		te[ 6 ] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
		te[ 10 ] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
		te[ 14 ] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;

		te[ 3 ] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
		te[ 7 ] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
		te[ 11 ] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
		te[ 15 ] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;

		return this;

	}

	multiplyScalar( s ) {

		const te = this.elements;

		te[ 0 ] *= s; te[ 4 ] *= s; te[ 8 ] *= s; te[ 12 ] *= s;
		te[ 1 ] *= s; te[ 5 ] *= s; te[ 9 ] *= s; te[ 13 ] *= s;
		te[ 2 ] *= s; te[ 6 ] *= s; te[ 10 ] *= s; te[ 14 ] *= s;
		te[ 3 ] *= s; te[ 7 ] *= s; te[ 11 ] *= s; te[ 15 ] *= s;

		return this;

	}

	determinant() {

		const te = this.elements;

		const n11 = te[ 0 ], n12 = te[ 4 ], n13 = te[ 8 ], n14 = te[ 12 ];
		const n21 = te[ 1 ], n22 = te[ 5 ], n23 = te[ 9 ], n24 = te[ 13 ];
		const n31 = te[ 2 ], n32 = te[ 6 ], n33 = te[ 10 ], n34 = te[ 14 ];
		const n41 = te[ 3 ], n42 = te[ 7 ], n43 = te[ 11 ], n44 = te[ 15 ];

		//TODO: make this more efficient
		//( based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm )

		return (
			n41 * (
				+ n14 * n23 * n32
				 - n13 * n24 * n32
				 - n14 * n22 * n33
				 + n12 * n24 * n33
				 + n13 * n22 * n34
				 - n12 * n23 * n34
			) +
			n42 * (
				+ n11 * n23 * n34
				 - n11 * n24 * n33
				 + n14 * n21 * n33
				 - n13 * n21 * n34
				 + n13 * n24 * n31
				 - n14 * n23 * n31
			) +
			n43 * (
				+ n11 * n24 * n32
				 - n11 * n22 * n34
				 - n14 * n21 * n32
				 + n12 * n21 * n34
				 + n14 * n22 * n31
				 - n12 * n24 * n31
			) +
			n44 * (
				- n13 * n22 * n31
				 - n11 * n23 * n32
				 + n11 * n22 * n33
				 + n13 * n21 * n32
				 - n12 * n21 * n33
				 + n12 * n23 * n31
			)

		);

	}

	transpose() {

		const te = this.elements;
		let tmp;

		tmp = te[ 1 ]; te[ 1 ] = te[ 4 ]; te[ 4 ] = tmp;
		tmp = te[ 2 ]; te[ 2 ] = te[ 8 ]; te[ 8 ] = tmp;
		tmp = te[ 6 ]; te[ 6 ] = te[ 9 ]; te[ 9 ] = tmp;

		tmp = te[ 3 ]; te[ 3 ] = te[ 12 ]; te[ 12 ] = tmp;
		tmp = te[ 7 ]; te[ 7 ] = te[ 13 ]; te[ 13 ] = tmp;
		tmp = te[ 11 ]; te[ 11 ] = te[ 14 ]; te[ 14 ] = tmp;

		return this;

	}

	setPosition( x, y, z ) {

		const te = this.elements;

		if ( x.isVector3 ) {

			te[ 12 ] = x.x;
			te[ 13 ] = x.y;
			te[ 14 ] = x.z;

		} else {

			te[ 12 ] = x;
			te[ 13 ] = y;
			te[ 14 ] = z;

		}

		return this;

	}

	invert() {

		// based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm
		const te = this.elements,

			n11 = te[ 0 ], n21 = te[ 1 ], n31 = te[ 2 ], n41 = te[ 3 ],
			n12 = te[ 4 ], n22 = te[ 5 ], n32 = te[ 6 ], n42 = te[ 7 ],
			n13 = te[ 8 ], n23 = te[ 9 ], n33 = te[ 10 ], n43 = te[ 11 ],
			n14 = te[ 12 ], n24 = te[ 13 ], n34 = te[ 14 ], n44 = te[ 15 ],

			t11 = n23 * n34 * n42 - n24 * n33 * n42 + n24 * n32 * n43 - n22 * n34 * n43 - n23 * n32 * n44 + n22 * n33 * n44,
			t12 = n14 * n33 * n42 - n13 * n34 * n42 - n14 * n32 * n43 + n12 * n34 * n43 + n13 * n32 * n44 - n12 * n33 * n44,
			t13 = n13 * n24 * n42 - n14 * n23 * n42 + n14 * n22 * n43 - n12 * n24 * n43 - n13 * n22 * n44 + n12 * n23 * n44,
			t14 = n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34;

		const det = n11 * t11 + n21 * t12 + n31 * t13 + n41 * t14;

		if ( det === 0 ) return this.set( 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 );

		const detInv = 1 / det;

		te[ 0 ] = t11 * detInv;
		te[ 1 ] = ( n24 * n33 * n41 - n23 * n34 * n41 - n24 * n31 * n43 + n21 * n34 * n43 + n23 * n31 * n44 - n21 * n33 * n44 ) * detInv;
		te[ 2 ] = ( n22 * n34 * n41 - n24 * n32 * n41 + n24 * n31 * n42 - n21 * n34 * n42 - n22 * n31 * n44 + n21 * n32 * n44 ) * detInv;
		te[ 3 ] = ( n23 * n32 * n41 - n22 * n33 * n41 - n23 * n31 * n42 + n21 * n33 * n42 + n22 * n31 * n43 - n21 * n32 * n43 ) * detInv;

		te[ 4 ] = t12 * detInv;
		te[ 5 ] = ( n13 * n34 * n41 - n14 * n33 * n41 + n14 * n31 * n43 - n11 * n34 * n43 - n13 * n31 * n44 + n11 * n33 * n44 ) * detInv;
		te[ 6 ] = ( n14 * n32 * n41 - n12 * n34 * n41 - n14 * n31 * n42 + n11 * n34 * n42 + n12 * n31 * n44 - n11 * n32 * n44 ) * detInv;
		te[ 7 ] = ( n12 * n33 * n41 - n13 * n32 * n41 + n13 * n31 * n42 - n11 * n33 * n42 - n12 * n31 * n43 + n11 * n32 * n43 ) * detInv;

		te[ 8 ] = t13 * detInv;
		te[ 9 ] = ( n14 * n23 * n41 - n13 * n24 * n41 - n14 * n21 * n43 + n11 * n24 * n43 + n13 * n21 * n44 - n11 * n23 * n44 ) * detInv;
		te[ 10 ] = ( n12 * n24 * n41 - n14 * n22 * n41 + n14 * n21 * n42 - n11 * n24 * n42 - n12 * n21 * n44 + n11 * n22 * n44 ) * detInv;
		te[ 11 ] = ( n13 * n22 * n41 - n12 * n23 * n41 - n13 * n21 * n42 + n11 * n23 * n42 + n12 * n21 * n43 - n11 * n22 * n43 ) * detInv;

		te[ 12 ] = t14 * detInv;
		te[ 13 ] = ( n13 * n24 * n31 - n14 * n23 * n31 + n14 * n21 * n33 - n11 * n24 * n33 - n13 * n21 * n34 + n11 * n23 * n34 ) * detInv;
		te[ 14 ] = ( n14 * n22 * n31 - n12 * n24 * n31 - n14 * n21 * n32 + n11 * n24 * n32 + n12 * n21 * n34 - n11 * n22 * n34 ) * detInv;
		te[ 15 ] = ( n12 * n23 * n31 - n13 * n22 * n31 + n13 * n21 * n32 - n11 * n23 * n32 - n12 * n21 * n33 + n11 * n22 * n33 ) * detInv;

		return this;

	}

	scale( v ) {

		const te = this.elements;
		const x = v.x, y = v.y, z = v.z;

		te[ 0 ] *= x; te[ 4 ] *= y; te[ 8 ] *= z;
		te[ 1 ] *= x; te[ 5 ] *= y; te[ 9 ] *= z;
		te[ 2 ] *= x; te[ 6 ] *= y; te[ 10 ] *= z;
		te[ 3 ] *= x; te[ 7 ] *= y; te[ 11 ] *= z;

		return this;

	}

	getMaxScaleOnAxis() {

		const te = this.elements;

		const scaleXSq = te[ 0 ] * te[ 0 ] + te[ 1 ] * te[ 1 ] + te[ 2 ] * te[ 2 ];
		const scaleYSq = te[ 4 ] * te[ 4 ] + te[ 5 ] * te[ 5 ] + te[ 6 ] * te[ 6 ];
		const scaleZSq = te[ 8 ] * te[ 8 ] + te[ 9 ] * te[ 9 ] + te[ 10 ] * te[ 10 ];

		return Math.sqrt( Math.max( scaleXSq, scaleYSq, scaleZSq ) );

	}

	makeTranslation( x, y, z ) {

		if ( x.isVector3 ) {

			this.set(

				1, 0, 0, x.x,
				0, 1, 0, x.y,
				0, 0, 1, x.z,
				0, 0, 0, 1

			);

		} else {

			this.set(

				1, 0, 0, x,
				0, 1, 0, y,
				0, 0, 1, z,
				0, 0, 0, 1

			);

		}

		return this;

	}

	makeRotationX( theta ) {

		const c = Math.cos( theta ), s = Math.sin( theta );

		this.set(

			1, 0, 0, 0,
			0, c, - s, 0,
			0, s, c, 0,
			0, 0, 0, 1

		);

		return this;

	}

	makeRotationY( theta ) {

		const c = Math.cos( theta ), s = Math.sin( theta );

		this.set(

			 c, 0, s, 0,
			 0, 1, 0, 0,
			- s, 0, c, 0,
			 0, 0, 0, 1

		);

		return this;

	}

	makeRotationZ( theta ) {

		const c = Math.cos( theta ), s = Math.sin( theta );

		this.set(

			c, - s, 0, 0,
			s, c, 0, 0,
			0, 0, 1, 0,
			0, 0, 0, 1

		);

		return this;

	}

	makeRotationAxis( axis, angle ) {

		// Based on http://www.gamedev.net/reference/articles/article1199.asp

		const c = Math.cos( angle );
		const s = Math.sin( angle );
		const t = 1 - c;
		const x = axis.x, y = axis.y, z = axis.z;
		const tx = t * x, ty = t * y;

		this.set(

			tx * x + c, tx * y - s * z, tx * z + s * y, 0,
			tx * y + s * z, ty * y + c, ty * z - s * x, 0,
			tx * z - s * y, ty * z + s * x, t * z * z + c, 0,
			0, 0, 0, 1

		);

		return this;

	}

	makeScale( x, y, z ) {

		this.set(

			x, 0, 0, 0,
			0, y, 0, 0,
			0, 0, z, 0,
			0, 0, 0, 1

		);

		return this;

	}

	makeShear( xy, xz, yx, yz, zx, zy ) {

		this.set(

			1, yx, zx, 0,
			xy, 1, zy, 0,
			xz, yz, 1, 0,
			0, 0, 0, 1

		);

		return this;

	}

	compose( position, quaternion, scale ) {

		const te = this.elements;

		const x = quaternion._x, y = quaternion._y, z = quaternion._z, w = quaternion._w;
		const x2 = x + x,	y2 = y + y, z2 = z + z;
		const xx = x * x2, xy = x * y2, xz = x * z2;
		const yy = y * y2, yz = y * z2, zz = z * z2;
		const wx = w * x2, wy = w * y2, wz = w * z2;

		const sx = scale.x, sy = scale.y, sz = scale.z;

		te[ 0 ] = ( 1 - ( yy + zz ) ) * sx;
		te[ 1 ] = ( xy + wz ) * sx;
		te[ 2 ] = ( xz - wy ) * sx;
		te[ 3 ] = 0;

		te[ 4 ] = ( xy - wz ) * sy;
		te[ 5 ] = ( 1 - ( xx + zz ) ) * sy;
		te[ 6 ] = ( yz + wx ) * sy;
		te[ 7 ] = 0;

		te[ 8 ] = ( xz + wy ) * sz;
		te[ 9 ] = ( yz - wx ) * sz;
		te[ 10 ] = ( 1 - ( xx + yy ) ) * sz;
		te[ 11 ] = 0;

		te[ 12 ] = position.x;
		te[ 13 ] = position.y;
		te[ 14 ] = position.z;
		te[ 15 ] = 1;

		return this;

	}

	decompose( position, quaternion, scale ) {

		const te = this.elements;

		let sx = _v1$5.set( te[ 0 ], te[ 1 ], te[ 2 ] ).length();
		const sy = _v1$5.set( te[ 4 ], te[ 5 ], te[ 6 ] ).length();
		const sz = _v1$5.set( te[ 8 ], te[ 9 ], te[ 10 ] ).length();

		// if determine is negative, we need to invert one scale
		const det = this.determinant();
		if ( det < 0 ) sx = - sx;

		position.x = te[ 12 ];
		position.y = te[ 13 ];
		position.z = te[ 14 ];

		// scale the rotation part
		_m1$4.copy( this );

		const invSX = 1 / sx;
		const invSY = 1 / sy;
		const invSZ = 1 / sz;

		_m1$4.elements[ 0 ] *= invSX;
		_m1$4.elements[ 1 ] *= invSX;
		_m1$4.elements[ 2 ] *= invSX;

		_m1$4.elements[ 4 ] *= invSY;
		_m1$4.elements[ 5 ] *= invSY;
		_m1$4.elements[ 6 ] *= invSY;

		_m1$4.elements[ 8 ] *= invSZ;
		_m1$4.elements[ 9 ] *= invSZ;
		_m1$4.elements[ 10 ] *= invSZ;

		quaternion.setFromRotationMatrix( _m1$4 );

		scale.x = sx;
		scale.y = sy;
		scale.z = sz;

		return this;

	}

	makePerspective( left, right, top, bottom, near, far, coordinateSystem = WebGLCoordinateSystem ) {

		const te = this.elements;
		const x = 2 * near / ( right - left );
		const y = 2 * near / ( top - bottom );

		const a = ( right + left ) / ( right - left );
		const b = ( top + bottom ) / ( top - bottom );

		let c, d;

		if ( coordinateSystem === WebGLCoordinateSystem ) {

			c = - ( far + near ) / ( far - near );
			d = ( - 2 * far * near ) / ( far - near );

		} else if ( coordinateSystem === WebGPUCoordinateSystem ) {

			c = - far / ( far - near );
			d = ( - far * near ) / ( far - near );

		} else {

			throw new Error( 'THREE.Matrix4.makePerspective(): Invalid coordinate system: ' + coordinateSystem );

		}

		te[ 0 ] = x;	te[ 4 ] = 0;	te[ 8 ] = a; 	te[ 12 ] = 0;
		te[ 1 ] = 0;	te[ 5 ] = y;	te[ 9 ] = b; 	te[ 13 ] = 0;
		te[ 2 ] = 0;	te[ 6 ] = 0;	te[ 10 ] = c; 	te[ 14 ] = d;
		te[ 3 ] = 0;	te[ 7 ] = 0;	te[ 11 ] = - 1;	te[ 15 ] = 0;

		return this;

	}

	makeOrthographic( left, right, top, bottom, near, far, coordinateSystem = WebGLCoordinateSystem ) {

		const te = this.elements;
		const w = 1.0 / ( right - left );
		const h = 1.0 / ( top - bottom );
		const p = 1.0 / ( far - near );

		const x = ( right + left ) * w;
		const y = ( top + bottom ) * h;

		let z, zInv;

		if ( coordinateSystem === WebGLCoordinateSystem ) {

			z = ( far + near ) * p;
			zInv = - 2 * p;

		} else if ( coordinateSystem === WebGPUCoordinateSystem ) {

			z = near * p;
			zInv = - 1 * p;

		} else {

			throw new Error( 'THREE.Matrix4.makeOrthographic(): Invalid coordinate system: ' + coordinateSystem );

		}

		te[ 0 ] = 2 * w;	te[ 4 ] = 0;		te[ 8 ] = 0; 		te[ 12 ] = - x;
		te[ 1 ] = 0; 		te[ 5 ] = 2 * h;	te[ 9 ] = 0; 		te[ 13 ] = - y;
		te[ 2 ] = 0; 		te[ 6 ] = 0;		te[ 10 ] = zInv;	te[ 14 ] = - z;
		te[ 3 ] = 0; 		te[ 7 ] = 0;		te[ 11 ] = 0;		te[ 15 ] = 1;

		return this;

	}

	equals( matrix ) {

		const te = this.elements;
		const me = matrix.elements;

		for ( let i = 0; i < 16; i ++ ) {

			if ( te[ i ] !== me[ i ] ) return false;

		}

		return true;

	}

	fromArray( array, offset = 0 ) {

		for ( let i = 0; i < 16; i ++ ) {

			this.elements[ i ] = array[ i + offset ];

		}

		return this;

	}

	toArray( array = [], offset = 0 ) {

		const te = this.elements;

		array[ offset ] = te[ 0 ];
		array[ offset + 1 ] = te[ 1 ];
		array[ offset + 2 ] = te[ 2 ];
		array[ offset + 3 ] = te[ 3 ];

		array[ offset + 4 ] = te[ 4 ];
		array[ offset + 5 ] = te[ 5 ];
		array[ offset + 6 ] = te[ 6 ];
		array[ offset + 7 ] = te[ 7 ];

		array[ offset + 8 ] = te[ 8 ];
		array[ offset + 9 ] = te[ 9 ];
		array[ offset + 10 ] = te[ 10 ];
		array[ offset + 11 ] = te[ 11 ];

		array[ offset + 12 ] = te[ 12 ];
		array[ offset + 13 ] = te[ 13 ];
		array[ offset + 14 ] = te[ 14 ];
		array[ offset + 15 ] = te[ 15 ];

		return array;

	}

}

const _v1$5 = /*@__PURE__*/ new Vector3();
const _m1$4 = /*@__PURE__*/ new Matrix4();
const _zero = /*@__PURE__*/ new Vector3( 0, 0, 0 );
const _one = /*@__PURE__*/ new Vector3( 1, 1, 1 );
const _x = /*@__PURE__*/ new Vector3();
const _y = /*@__PURE__*/ new Vector3();
const _z = /*@__PURE__*/ new Vector3();

const _matrix$2 = /*@__PURE__*/ new Matrix4();
const _quaternion$3 = /*@__PURE__*/ new Quaternion();

class Euler {

	constructor( x = 0, y = 0, z = 0, order = Euler.DEFAULT_ORDER ) {

		this.isEuler = true;

		this._x = x;
		this._y = y;
		this._z = z;
		this._order = order;

	}

	get x() {

		return this._x;

	}

	set x( value ) {

		this._x = value;
		this._onChangeCallback();

	}

	get y() {

		return this._y;

	}

	set y( value ) {

		this._y = value;
		this._onChangeCallback();

	}

	get z() {

		return this._z;

	}

	set z( value ) {

		this._z = value;
		this._onChangeCallback();

	}

	get order() {

		return this._order;

	}

	set order( value ) {

		this._order = value;
		this._onChangeCallback();

	}

	set( x, y, z, order = this._order ) {

		this._x = x;
		this._y = y;
		this._z = z;
		this._order = order;

		this._onChangeCallback();

		return this;

	}

	clone() {

		return new this.constructor( this._x, this._y, this._z, this._order );

	}

	copy( euler ) {

		this._x = euler._x;
		this._y = euler._y;
		this._z = euler._z;
		this._order = euler._order;

		this._onChangeCallback();

		return this;

	}

	setFromRotationMatrix( m, order = this._order, update = true ) {

		// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

		const te = m.elements;
		const m11 = te[ 0 ], m12 = te[ 4 ], m13 = te[ 8 ];
		const m21 = te[ 1 ], m22 = te[ 5 ], m23 = te[ 9 ];
		const m31 = te[ 2 ], m32 = te[ 6 ], m33 = te[ 10 ];

		switch ( order ) {

			case 'XYZ':

				this._y = Math.asin( clamp( m13, - 1, 1 ) );

				if ( Math.abs( m13 ) < 0.9999999 ) {

					this._x = Math.atan2( - m23, m33 );
					this._z = Math.atan2( - m12, m11 );

				} else {

					this._x = Math.atan2( m32, m22 );
					this._z = 0;

				}

				break;

			case 'YXZ':

				this._x = Math.asin( - clamp( m23, - 1, 1 ) );

				if ( Math.abs( m23 ) < 0.9999999 ) {

					this._y = Math.atan2( m13, m33 );
					this._z = Math.atan2( m21, m22 );

				} else {

					this._y = Math.atan2( - m31, m11 );
					this._z = 0;

				}

				break;

			case 'ZXY':

				this._x = Math.asin( clamp( m32, - 1, 1 ) );

				if ( Math.abs( m32 ) < 0.9999999 ) {

					this._y = Math.atan2( - m31, m33 );
					this._z = Math.atan2( - m12, m22 );

				} else {

					this._y = 0;
					this._z = Math.atan2( m21, m11 );

				}

				break;

			case 'ZYX':

				this._y = Math.asin( - clamp( m31, - 1, 1 ) );

				if ( Math.abs( m31 ) < 0.9999999 ) {

					this._x = Math.atan2( m32, m33 );
					this._z = Math.atan2( m21, m11 );

				} else {

					this._x = 0;
					this._z = Math.atan2( - m12, m22 );

				}

				break;

			case 'YZX':

				this._z = Math.asin( clamp( m21, - 1, 1 ) );

				if ( Math.abs( m21 ) < 0.9999999 ) {

					this._x = Math.atan2( - m23, m22 );
					this._y = Math.atan2( - m31, m11 );

				} else {

					this._x = 0;
					this._y = Math.atan2( m13, m33 );

				}

				break;

			case 'XZY':

				this._z = Math.asin( - clamp( m12, - 1, 1 ) );

				if ( Math.abs( m12 ) < 0.9999999 ) {

					this._x = Math.atan2( m32, m22 );
					this._y = Math.atan2( m13, m11 );

				} else {

					this._x = Math.atan2( - m23, m33 );
					this._y = 0;

				}

				break;

			default:

				console.warn( 'THREE.Euler: .setFromRotationMatrix() encountered an unknown order: ' + order );

		}

		this._order = order;

		if ( update === true ) this._onChangeCallback();

		return this;

	}

	setFromQuaternion( q, order, update ) {

		_matrix$2.makeRotationFromQuaternion( q );

		return this.setFromRotationMatrix( _matrix$2, order, update );

	}

	setFromVector3( v, order = this._order ) {

		return this.set( v.x, v.y, v.z, order );

	}

	reorder( newOrder ) {

		// WARNING: this discards revolution information -bhouston

		_quaternion$3.setFromEuler( this );

		return this.setFromQuaternion( _quaternion$3, newOrder );

	}

	equals( euler ) {

		return ( euler._x === this._x ) && ( euler._y === this._y ) && ( euler._z === this._z ) && ( euler._order === this._order );

	}

	fromArray( array ) {

		this._x = array[ 0 ];
		this._y = array[ 1 ];
		this._z = array[ 2 ];
		if ( array[ 3 ] !== undefined ) this._order = array[ 3 ];

		this._onChangeCallback();

		return this;

	}

	toArray( array = [], offset = 0 ) {

		array[ offset ] = this._x;
		array[ offset + 1 ] = this._y;
		array[ offset + 2 ] = this._z;
		array[ offset + 3 ] = this._order;

		return array;

	}

	_onChange( callback ) {

		this._onChangeCallback = callback;

		return this;

	}

	_onChangeCallback() {}

	*[ Symbol.iterator ]() {

		yield this._x;
		yield this._y;
		yield this._z;
		yield this._order;

	}

}

Euler.DEFAULT_ORDER = 'XYZ';

class Layers {

	constructor() {

		this.mask = 1 | 0;

	}

	set( channel ) {

		this.mask = ( 1 << channel | 0 ) >>> 0;

	}

	enable( channel ) {

		this.mask |= 1 << channel | 0;

	}

	enableAll() {

		this.mask = 0xffffffff | 0;

	}

	toggle( channel ) {

		this.mask ^= 1 << channel | 0;

	}

	disable( channel ) {

		this.mask &= ~ ( 1 << channel | 0 );

	}

	disableAll() {

		this.mask = 0;

	}

	test( layers ) {

		return ( this.mask & layers.mask ) !== 0;

	}

	isEnabled( channel ) {

		return ( this.mask & ( 1 << channel | 0 ) ) !== 0;

	}

}

let _object3DId = 0;

const _v1$4 = /*@__PURE__*/ new Vector3();
const _q1 = /*@__PURE__*/ new Quaternion();
const _m1$3 = /*@__PURE__*/ new Matrix4();
const _target = /*@__PURE__*/ new Vector3();

const _position$3 = /*@__PURE__*/ new Vector3();
const _scale$2 = /*@__PURE__*/ new Vector3();
const _quaternion$2 = /*@__PURE__*/ new Quaternion();

const _xAxis = /*@__PURE__*/ new Vector3( 1, 0, 0 );
const _yAxis = /*@__PURE__*/ new Vector3( 0, 1, 0 );
const _zAxis = /*@__PURE__*/ new Vector3( 0, 0, 1 );

const _addedEvent = { type: 'added' };
const _removedEvent = { type: 'removed' };

const _childaddedEvent = { type: 'childadded', child: null };
const _childremovedEvent = { type: 'childremoved', child: null };

class Object3D extends EventDispatcher {

	constructor() {

		super();

		this.isObject3D = true;

		Object.defineProperty( this, 'id', { value: _object3DId ++ } );

		this.uuid = generateUUID();

		this.name = '';
		this.type = 'Object3D';

		this.parent = null;
		this.children = [];

		this.up = Object3D.DEFAULT_UP.clone();

		const position = new Vector3();
		const rotation = new Euler();
		const quaternion = new Quaternion();
		const scale = new Vector3( 1, 1, 1 );

		function onRotationChange() {

			quaternion.setFromEuler( rotation, false );

		}

		function onQuaternionChange() {

			rotation.setFromQuaternion( quaternion, undefined, false );

		}

		rotation._onChange( onRotationChange );
		quaternion._onChange( onQuaternionChange );

		Object.defineProperties( this, {
			position: {
				configurable: true,
				enumerable: true,
				value: position
			},
			rotation: {
				configurable: true,
				enumerable: true,
				value: rotation
			},
			quaternion: {
				configurable: true,
				enumerable: true,
				value: quaternion
			},
			scale: {
				configurable: true,
				enumerable: true,
				value: scale
			},
			modelViewMatrix: {
				value: new Matrix4()
			},
			normalMatrix: {
				value: new Matrix3()
			}
		} );

		this.matrix = new Matrix4();
		this.matrixWorld = new Matrix4();

		this.matrixAutoUpdate = Object3D.DEFAULT_MATRIX_AUTO_UPDATE;

		this.matrixWorldAutoUpdate = Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE; // checked by the renderer
		this.matrixWorldNeedsUpdate = false;

		this.layers = new Layers();
		this.visible = true;

		this.castShadow = false;
		this.receiveShadow = false;

		this.frustumCulled = true;
		this.renderOrder = 0;

		this.animations = [];

		this.userData = {};

	}

	onBeforeShadow( /* renderer, object, camera, shadowCamera, geometry, depthMaterial, group */ ) {}

	onAfterShadow( /* renderer, object, camera, shadowCamera, geometry, depthMaterial, group */ ) {}

	onBeforeRender( /* renderer, scene, camera, geometry, material, group */ ) {}

	onAfterRender( /* renderer, scene, camera, geometry, material, group */ ) {}

	applyMatrix4( matrix ) {

		if ( this.matrixAutoUpdate ) this.updateMatrix();

		this.matrix.premultiply( matrix );

		this.matrix.decompose( this.position, this.quaternion, this.scale );

	}

	applyQuaternion( q ) {

		this.quaternion.premultiply( q );

		return this;

	}

	setRotationFromAxisAngle( axis, angle ) {

		// assumes axis is normalized

		this.quaternion.setFromAxisAngle( axis, angle );

	}

	setRotationFromEuler( euler ) {

		this.quaternion.setFromEuler( euler, true );

	}

	setRotationFromMatrix( m ) {

		// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

		this.quaternion.setFromRotationMatrix( m );

	}

	setRotationFromQuaternion( q ) {

		// assumes q is normalized

		this.quaternion.copy( q );

	}

	rotateOnAxis( axis, angle ) {

		// rotate object on axis in object space
		// axis is assumed to be normalized

		_q1.setFromAxisAngle( axis, angle );

		this.quaternion.multiply( _q1 );

		return this;

	}

	rotateOnWorldAxis( axis, angle ) {

		// rotate object on axis in world space
		// axis is assumed to be normalized
		// method assumes no rotated parent

		_q1.setFromAxisAngle( axis, angle );

		this.quaternion.premultiply( _q1 );

		return this;

	}

	rotateX( angle ) {

		return this.rotateOnAxis( _xAxis, angle );

	}

	rotateY( angle ) {

		return this.rotateOnAxis( _yAxis, angle );

	}

	rotateZ( angle ) {

		return this.rotateOnAxis( _zAxis, angle );

	}

	translateOnAxis( axis, distance ) {

		// translate object by distance along axis in object space
		// axis is assumed to be normalized

		_v1$4.copy( axis ).applyQuaternion( this.quaternion );

		this.position.add( _v1$4.multiplyScalar( distance ) );

		return this;

	}

	translateX( distance ) {

		return this.translateOnAxis( _xAxis, distance );

	}

	translateY( distance ) {

		return this.translateOnAxis( _yAxis, distance );

	}

	translateZ( distance ) {

		return this.translateOnAxis( _zAxis, distance );

	}

	localToWorld( vector ) {

		this.updateWorldMatrix( true, false );

		return vector.applyMatrix4( this.matrixWorld );

	}

	worldToLocal( vector ) {

		this.updateWorldMatrix( true, false );

		return vector.applyMatrix4( _m1$3.copy( this.matrixWorld ).invert() );

	}

	lookAt( x, y, z ) {

		// This method does not support objects having non-uniformly-scaled parent(s)

		if ( x.isVector3 ) {

			_target.copy( x );

		} else {

			_target.set( x, y, z );

		}

		const parent = this.parent;

		this.updateWorldMatrix( true, false );

		_position$3.setFromMatrixPosition( this.matrixWorld );

		if ( this.isCamera || this.isLight ) {

			_m1$3.lookAt( _position$3, _target, this.up );

		} else {

			_m1$3.lookAt( _target, _position$3, this.up );

		}

		this.quaternion.setFromRotationMatrix( _m1$3 );

		if ( parent ) {

			_m1$3.extractRotation( parent.matrixWorld );
			_q1.setFromRotationMatrix( _m1$3 );
			this.quaternion.premultiply( _q1.invert() );

		}

	}

	add( object ) {

		if ( arguments.length > 1 ) {

			for ( let i = 0; i < arguments.length; i ++ ) {

				this.add( arguments[ i ] );

			}

			return this;

		}

		if ( object === this ) {

			console.error( 'THREE.Object3D.add: object can\'t be added as a child of itself.', object );
			return this;

		}

		if ( object && object.isObject3D ) {

			object.removeFromParent();
			object.parent = this;
			this.children.push( object );

			object.dispatchEvent( _addedEvent );

			_childaddedEvent.child = object;
			this.dispatchEvent( _childaddedEvent );
			_childaddedEvent.child = null;

		} else {

			console.error( 'THREE.Object3D.add: object not an instance of THREE.Object3D.', object );

		}

		return this;

	}

	remove( object ) {

		if ( arguments.length > 1 ) {

			for ( let i = 0; i < arguments.length; i ++ ) {

				this.remove( arguments[ i ] );

			}

			return this;

		}

		const index = this.children.indexOf( object );

		if ( index !== - 1 ) {

			object.parent = null;
			this.children.splice( index, 1 );

			object.dispatchEvent( _removedEvent );

			_childremovedEvent.child = object;
			this.dispatchEvent( _childremovedEvent );
			_childremovedEvent.child = null;

		}

		return this;

	}

	removeFromParent() {

		const parent = this.parent;

		if ( parent !== null ) {

			parent.remove( this );

		}

		return this;

	}

	clear() {

		return this.remove( ... this.children );

	}

	attach( object ) {

		// adds object as a child of this, while maintaining the object's world transform

		// Note: This method does not support scene graphs having non-uniformly-scaled nodes(s)

		this.updateWorldMatrix( true, false );

		_m1$3.copy( this.matrixWorld ).invert();

		if ( object.parent !== null ) {

			object.parent.updateWorldMatrix( true, false );

			_m1$3.multiply( object.parent.matrixWorld );

		}

		object.applyMatrix4( _m1$3 );

		object.removeFromParent();
		object.parent = this;
		this.children.push( object );

		object.updateWorldMatrix( false, true );

		object.dispatchEvent( _addedEvent );

		_childaddedEvent.child = object;
		this.dispatchEvent( _childaddedEvent );
		_childaddedEvent.child = null;

		return this;

	}

	getObjectById( id ) {

		return this.getObjectByProperty( 'id', id );

	}

	getObjectByName( name ) {

		return this.getObjectByProperty( 'name', name );

	}

	getObjectByProperty( name, value ) {

		if ( this[ name ] === value ) return this;

		for ( let i = 0, l = this.children.length; i < l; i ++ ) {

			const child = this.children[ i ];
			const object = child.getObjectByProperty( name, value );

			if ( object !== undefined ) {

				return object;

			}

		}

		return undefined;

	}

	getObjectsByProperty( name, value, result = [] ) {

		if ( this[ name ] === value ) result.push( this );

		const children = this.children;

		for ( let i = 0, l = children.length; i < l; i ++ ) {

			children[ i ].getObjectsByProperty( name, value, result );

		}

		return result;

	}

	getWorldPosition( target ) {

		this.updateWorldMatrix( true, false );

		return target.setFromMatrixPosition( this.matrixWorld );

	}

	getWorldQuaternion( target ) {

		this.updateWorldMatrix( true, false );

		this.matrixWorld.decompose( _position$3, target, _scale$2 );

		return target;

	}

	getWorldScale( target ) {

		this.updateWorldMatrix( true, false );

		this.matrixWorld.decompose( _position$3, _quaternion$2, target );

		return target;

	}

	getWorldDirection( target ) {

		this.updateWorldMatrix( true, false );

		const e = this.matrixWorld.elements;

		return target.set( e[ 8 ], e[ 9 ], e[ 10 ] ).normalize();

	}

	raycast( /* raycaster, intersects */ ) {}

	traverse( callback ) {

		callback( this );

		const children = this.children;

		for ( let i = 0, l = children.length; i < l; i ++ ) {

			children[ i ].traverse( callback );

		}

	}

	traverseVisible( callback ) {

		if ( this.visible === false ) return;

		callback( this );

		const children = this.children;

		for ( let i = 0, l = children.length; i < l; i ++ ) {

			children[ i ].traverseVisible( callback );

		}

	}

	traverseAncestors( callback ) {

		const parent = this.parent;

		if ( parent !== null ) {

			callback( parent );

			parent.traverseAncestors( callback );

		}

	}

	updateMatrix() {

		this.matrix.compose( this.position, this.quaternion, this.scale );

		this.matrixWorldNeedsUpdate = true;

	}

	updateMatrixWorld( force ) {

		if ( this.matrixAutoUpdate ) this.updateMatrix();

		if ( this.matrixWorldNeedsUpdate || force ) {

			if ( this.parent === null ) {

				this.matrixWorld.copy( this.matrix );

			} else {

				this.matrixWorld.multiplyMatrices( this.parent.matrixWorld, this.matrix );

			}

			this.matrixWorldNeedsUpdate = false;

			force = true;

		}

		// update children

		const children = this.children;

		for ( let i = 0, l = children.length; i < l; i ++ ) {

			const child = children[ i ];

			if ( child.matrixWorldAutoUpdate === true || force === true ) {

				child.updateMatrixWorld( force );

			}

		}

	}

	updateWorldMatrix( updateParents, updateChildren ) {

		const parent = this.parent;

		if ( updateParents === true && parent !== null && parent.matrixWorldAutoUpdate === true ) {

			parent.updateWorldMatrix( true, false );

		}

		if ( this.matrixAutoUpdate ) this.updateMatrix();

		if ( this.parent === null ) {

			this.matrixWorld.copy( this.matrix );

		} else {

			this.matrixWorld.multiplyMatrices( this.parent.matrixWorld, this.matrix );

		}

		// update children

		if ( updateChildren === true ) {

			const children = this.children;

			for ( let i = 0, l = children.length; i < l; i ++ ) {

				const child = children[ i ];

				if ( child.matrixWorldAutoUpdate === true ) {

					child.updateWorldMatrix( false, true );

				}

			}

		}

	}

	toJSON( meta ) {

		// meta is a string when called from JSON.stringify
		const isRootObject = ( meta === undefined || typeof meta === 'string' );

		const output = {};

		// meta is a hash used to collect geometries, materials.
		// not providing it implies that this is the root object
		// being serialized.
		if ( isRootObject ) {

			// initialize meta obj
			meta = {
				geometries: {},
				materials: {},
				textures: {},
				images: {},
				shapes: {},
				skeletons: {},
				animations: {},
				nodes: {}
			};

			output.metadata = {
				version: 4.6,
				type: 'Object',
				generator: 'Object3D.toJSON'
			};

		}

		// standard Object3D serialization

		const object = {};

		object.uuid = this.uuid;
		object.type = this.type;

		if ( this.name !== '' ) object.name = this.name;
		if ( this.castShadow === true ) object.castShadow = true;
		if ( this.receiveShadow === true ) object.receiveShadow = true;
		if ( this.visible === false ) object.visible = false;
		if ( this.frustumCulled === false ) object.frustumCulled = false;
		if ( this.renderOrder !== 0 ) object.renderOrder = this.renderOrder;
		if ( Object.keys( this.userData ).length > 0 ) object.userData = this.userData;

		object.layers = this.layers.mask;
		object.matrix = this.matrix.toArray();
		object.up = this.up.toArray();

		if ( this.matrixAutoUpdate === false ) object.matrixAutoUpdate = false;

		// object specific properties

		if ( this.isInstancedMesh ) {

			object.type = 'InstancedMesh';
			object.count = this.count;
			object.instanceMatrix = this.instanceMatrix.toJSON();
			if ( this.instanceColor !== null ) object.instanceColor = this.instanceColor.toJSON();

		}

		if ( this.isBatchedMesh ) {

			object.type = 'BatchedMesh';
			object.perObjectFrustumCulled = this.perObjectFrustumCulled;
			object.sortObjects = this.sortObjects;

			object.drawRanges = this._drawRanges;
			object.reservedRanges = this._reservedRanges;

			object.visibility = this._visibility;
			object.active = this._active;
			object.bounds = this._bounds.map( bound => ( {
				boxInitialized: bound.boxInitialized,
				boxMin: bound.box.min.toArray(),
				boxMax: bound.box.max.toArray(),

				sphereInitialized: bound.sphereInitialized,
				sphereRadius: bound.sphere.radius,
				sphereCenter: bound.sphere.center.toArray()
			} ) );

			object.maxGeometryCount = this._maxGeometryCount;
			object.maxVertexCount = this._maxVertexCount;
			object.maxIndexCount = this._maxIndexCount;

			object.geometryInitialized = this._geometryInitialized;
			object.geometryCount = this._geometryCount;

			object.matricesTexture = this._matricesTexture.toJSON( meta );

			if ( this._colorsTexture !== null ) object.colorsTexture = this._colorsTexture.toJSON( meta );

			if ( this.boundingSphere !== null ) {

				object.boundingSphere = {
					center: object.boundingSphere.center.toArray(),
					radius: object.boundingSphere.radius
				};

			}

			if ( this.boundingBox !== null ) {

				object.boundingBox = {
					min: object.boundingBox.min.toArray(),
					max: object.boundingBox.max.toArray()
				};

			}

		}

		//

		function serialize( library, element ) {

			if ( library[ element.uuid ] === undefined ) {

				library[ element.uuid ] = element.toJSON( meta );

			}

			return element.uuid;

		}

		if ( this.isScene ) {

			if ( this.background ) {

				if ( this.background.isColor ) {

					object.background = this.background.toJSON();

				} else if ( this.background.isTexture ) {

					object.background = this.background.toJSON( meta ).uuid;

				}

			}

			if ( this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true ) {

				object.environment = this.environment.toJSON( meta ).uuid;

			}

		} else if ( this.isMesh || this.isLine || this.isPoints ) {

			object.geometry = serialize( meta.geometries, this.geometry );

			const parameters = this.geometry.parameters;

			if ( parameters !== undefined && parameters.shapes !== undefined ) {

				const shapes = parameters.shapes;

				if ( Array.isArray( shapes ) ) {

					for ( let i = 0, l = shapes.length; i < l; i ++ ) {

						const shape = shapes[ i ];

						serialize( meta.shapes, shape );

					}

				} else {

					serialize( meta.shapes, shapes );

				}

			}

		}

		if ( this.isSkinnedMesh ) {

			object.bindMode = this.bindMode;
			object.bindMatrix = this.bindMatrix.toArray();

			if ( this.skeleton !== undefined ) {

				serialize( meta.skeletons, this.skeleton );

				object.skeleton = this.skeleton.uuid;

			}

		}

		if ( this.material !== undefined ) {

			if ( Array.isArray( this.material ) ) {

				const uuids = [];

				for ( let i = 0, l = this.material.length; i < l; i ++ ) {

					uuids.push( serialize( meta.materials, this.material[ i ] ) );

				}

				object.material = uuids;

			} else {

				object.material = serialize( meta.materials, this.material );

			}

		}

		//

		if ( this.children.length > 0 ) {

			object.children = [];

			for ( let i = 0; i < this.children.length; i ++ ) {

				object.children.push( this.children[ i ].toJSON( meta ).object );

			}

		}

		//

		if ( this.animations.length > 0 ) {

			object.animations = [];

			for ( let i = 0; i < this.animations.length; i ++ ) {

				const animation = this.animations[ i ];

				object.animations.push( serialize( meta.animations, animation ) );

			}

		}

		if ( isRootObject ) {

			const geometries = extractFromCache( meta.geometries );
			const materials = extractFromCache( meta.materials );
			const textures = extractFromCache( meta.textures );
			const images = extractFromCache( meta.images );
			const shapes = extractFromCache( meta.shapes );
			const skeletons = extractFromCache( meta.skeletons );
			const animations = extractFromCache( meta.animations );
			const nodes = extractFromCache( meta.nodes );

			if ( geometries.length > 0 ) output.geometries = geometries;
			if ( materials.length > 0 ) output.materials = materials;
			if ( textures.length > 0 ) output.textures = textures;
			if ( images.length > 0 ) output.images = images;
			if ( shapes.length > 0 ) output.shapes = shapes;
			if ( skeletons.length > 0 ) output.skeletons = skeletons;
			if ( animations.length > 0 ) output.animations = animations;
			if ( nodes.length > 0 ) output.nodes = nodes;

		}

		output.object = object;

		return output;

		// extract data from the cache hash
		// remove metadata on each item
		// and return as array
		function extractFromCache( cache ) {

			const values = [];
			for ( const key in cache ) {

				const data = cache[ key ];
				delete data.metadata;
				values.push( data );

			}

			return values;

		}

	}

	clone( recursive ) {

		return new this.constructor().copy( this, recursive );

	}

	copy( source, recursive = true ) {

		this.name = source.name;

		this.up.copy( source.up );

		this.position.copy( source.position );
		this.rotation.order = source.rotation.order;
		this.quaternion.copy( source.quaternion );
		this.scale.copy( source.scale );

		this.matrix.copy( source.matrix );
		this.matrixWorld.copy( source.matrixWorld );

		this.matrixAutoUpdate = source.matrixAutoUpdate;

		this.matrixWorldAutoUpdate = source.matrixWorldAutoUpdate;
		this.matrixWorldNeedsUpdate = source.matrixWorldNeedsUpdate;

		this.layers.mask = source.layers.mask;
		this.visible = source.visible;

		this.castShadow = source.castShadow;
		this.receiveShadow = source.receiveShadow;

		this.frustumCulled = source.frustumCulled;
		this.renderOrder = source.renderOrder;

		this.animations = source.animations.slice();

		this.userData = JSON.parse( JSON.stringify( source.userData ) );

		if ( recursive === true ) {

			for ( let i = 0; i < source.children.length; i ++ ) {

				const child = source.children[ i ];
				this.add( child.clone() );

			}

		}

		return this;

	}

}

Object3D.DEFAULT_UP = /*@__PURE__*/ new Vector3( 0, 1, 0 );
Object3D.DEFAULT_MATRIX_AUTO_UPDATE = true;
Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;

const _v0$1 = /*@__PURE__*/ new Vector3();
const _v1$3 = /*@__PURE__*/ new Vector3();
const _v2$2 = /*@__PURE__*/ new Vector3();
const _v3$2 = /*@__PURE__*/ new Vector3();

const _vab = /*@__PURE__*/ new Vector3();
const _vac = /*@__PURE__*/ new Vector3();
const _vbc = /*@__PURE__*/ new Vector3();
const _vap = /*@__PURE__*/ new Vector3();
const _vbp = /*@__PURE__*/ new Vector3();
const _vcp = /*@__PURE__*/ new Vector3();

class Triangle {

	constructor( a = new Vector3(), b = new Vector3(), c = new Vector3() ) {

		this.a = a;
		this.b = b;
		this.c = c;

	}

	static getNormal( a, b, c, target ) {

		target.subVectors( c, b );
		_v0$1.subVectors( a, b );
		target.cross( _v0$1 );

		const targetLengthSq = target.lengthSq();
		if ( targetLengthSq > 0 ) {

			return target.multiplyScalar( 1 / Math.sqrt( targetLengthSq ) );

		}

		return target.set( 0, 0, 0 );

	}

	// static/instance method to calculate barycentric coordinates
	// based on: http://www.blackpawn.com/texts/pointinpoly/default.html
	static getBarycoord( point, a, b, c, target ) {

		_v0$1.subVectors( c, a );
		_v1$3.subVectors( b, a );
		_v2$2.subVectors( point, a );

		const dot00 = _v0$1.dot( _v0$1 );
		const dot01 = _v0$1.dot( _v1$3 );
		const dot02 = _v0$1.dot( _v2$2 );
		const dot11 = _v1$3.dot( _v1$3 );
		const dot12 = _v1$3.dot( _v2$2 );

		const denom = ( dot00 * dot11 - dot01 * dot01 );

		// collinear or singular triangle
		if ( denom === 0 ) {

			target.set( 0, 0, 0 );
			return null;

		}

		const invDenom = 1 / denom;
		const u = ( dot11 * dot02 - dot01 * dot12 ) * invDenom;
		const v = ( dot00 * dot12 - dot01 * dot02 ) * invDenom;

		// barycentric coordinates must always sum to 1
		return target.set( 1 - u - v, v, u );

	}

	static containsPoint( point, a, b, c ) {

		// if the triangle is degenerate then we can't contain a point
		if ( this.getBarycoord( point, a, b, c, _v3$2 ) === null ) {

			return false;

		}

		return ( _v3$2.x >= 0 ) && ( _v3$2.y >= 0 ) && ( ( _v3$2.x + _v3$2.y ) <= 1 );

	}

	static getInterpolation( point, p1, p2, p3, v1, v2, v3, target ) {

		if ( this.getBarycoord( point, p1, p2, p3, _v3$2 ) === null ) {

			target.x = 0;
			target.y = 0;
			if ( 'z' in target ) target.z = 0;
			if ( 'w' in target ) target.w = 0;
			return null;

		}

		target.setScalar( 0 );
		target.addScaledVector( v1, _v3$2.x );
		target.addScaledVector( v2, _v3$2.y );
		target.addScaledVector( v3, _v3$2.z );

		return target;

	}

	static isFrontFacing( a, b, c, direction ) {

		_v0$1.subVectors( c, b );
		_v1$3.subVectors( a, b );

		// strictly front facing
		return ( _v0$1.cross( _v1$3 ).dot( direction ) < 0 ) ? true : false;

	}

	set( a, b, c ) {

		this.a.copy( a );
		this.b.copy( b );
		this.c.copy( c );

		return this;

	}

	setFromPointsAndIndices( points, i0, i1, i2 ) {

		this.a.copy( points[ i0 ] );
		this.b.copy( points[ i1 ] );
		this.c.copy( points[ i2 ] );

		return this;

	}

	setFromAttributeAndIndices( attribute, i0, i1, i2 ) {

		this.a.fromBufferAttribute( attribute, i0 );
		this.b.fromBufferAttribute( attribute, i1 );
		this.c.fromBufferAttribute( attribute, i2 );

		return this;

	}

	clone() {

		return new this.constructor().copy( this );

	}

	copy( triangle ) {

		this.a.copy( triangle.a );
		this.b.copy( triangle.b );
		this.c.copy( triangle.c );

		return this;

	}

	getArea() {

		_v0$1.subVectors( this.c, this.b );
		_v1$3.subVectors( this.a, this.b );

		return _v0$1.cross( _v1$3 ).length() * 0.5;

	}

	getMidpoint( target ) {

		return target.addVectors( this.a, this.b ).add( this.c ).multiplyScalar( 1 / 3 );

	}

	getNormal( target ) {

		return Triangle.getNormal( this.a, this.b, this.c, target );

	}

	getPlane( target ) {

		return target.setFromCoplanarPoints( this.a, this.b, this.c );

	}

	getBarycoord( point, target ) {

		return Triangle.getBarycoord( point, this.a, this.b, this.c, target );

	}

	getInterpolation( point, v1, v2, v3, target ) {

		return Triangle.getInterpolation( point, this.a, this.b, this.c, v1, v2, v3, target );

	}

	containsPoint( point ) {

		return Triangle.containsPoint( point, this.a, this.b, this.c );

	}

	isFrontFacing( direction ) {

		return Triangle.isFrontFacing( this.a, this.b, this.c, direction );

	}

	intersectsBox( box ) {

		return box.intersectsTriangle( this );

	}

	closestPointToPoint( p, target ) {

		const a = this.a, b = this.b, c = this.c;
		let v, w;

		// algorithm thanks to Real-Time Collision Detection by Christer Ericson,
		// published by Morgan Kaufmann Publishers, (c) 2005 Elsevier Inc.,
		// under the accompanying license; see chapter 5.1.5 for detailed explanation.
		// basically, we're distinguishing which of the voronoi regions of the triangle
		// the point lies in with the minimum amount of redundant computation.

		_vab.subVectors( b, a );
		_vac.subVectors( c, a );
		_vap.subVectors( p, a );
		const d1 = _vab.dot( _vap );
		const d2 = _vac.dot( _vap );
		if ( d1 <= 0 && d2 <= 0 ) {

			// vertex region of A; barycentric coords (1, 0, 0)
			return target.copy( a );

		}

		_vbp.subVectors( p, b );
		const d3 = _vab.dot( _vbp );
		const d4 = _vac.dot( _vbp );
		if ( d3 >= 0 && d4 <= d3 ) {

			// vertex region of B; barycentric coords (0, 1, 0)
			return target.copy( b );

		}

		const vc = d1 * d4 - d3 * d2;
		if ( vc <= 0 && d1 >= 0 && d3 <= 0 ) {

			v = d1 / ( d1 - d3 );
			// edge region of AB; barycentric coords (1-v, v, 0)
			return target.copy( a ).addScaledVector( _vab, v );

		}

		_vcp.subVectors( p, c );
		const d5 = _vab.dot( _vcp );
		const d6 = _vac.dot( _vcp );
		if ( d6 >= 0 && d5 <= d6 ) {

			// vertex region of C; barycentric coords (0, 0, 1)
			return target.copy( c );

		}

		const vb = d5 * d2 - d1 * d6;
		if ( vb <= 0 && d2 >= 0 && d6 <= 0 ) {

			w = d2 / ( d2 - d6 );
			// edge region of AC; barycentric coords (1-w, 0, w)
			return target.copy( a ).addScaledVector( _vac, w );

		}

		const va = d3 * d6 - d5 * d4;
		if ( va <= 0 && ( d4 - d3 ) >= 0 && ( d5 - d6 ) >= 0 ) {

			_vbc.subVectors( c, b );
			w = ( d4 - d3 ) / ( ( d4 - d3 ) + ( d5 - d6 ) );
			// edge region of BC; barycentric coords (0, 1-w, w)
			return target.copy( b ).addScaledVector( _vbc, w ); // edge region of BC

		}

		// face region
		const denom = 1 / ( va + vb + vc );
		// u = va * denom
		v = vb * denom;
		w = vc * denom;

		return target.copy( a ).addScaledVector( _vab, v ).addScaledVector( _vac, w );

	}

	equals( triangle ) {

		return triangle.a.equals( this.a ) && triangle.b.equals( this.b ) && triangle.c.equals( this.c );

	}

}

const _colorKeywords = { 'aliceblue': 0xF0F8FF, 'antiquewhite': 0xFAEBD7, 'aqua': 0x00FFFF, 'aquamarine': 0x7FFFD4, 'azure': 0xF0FFFF,
	'beige': 0xF5F5DC, 'bisque': 0xFFE4C4, 'black': 0x000000, 'blanchedalmond': 0xFFEBCD, 'blue': 0x0000FF, 'blueviolet': 0x8A2BE2,
	'brown': 0xA52A2A, 'burlywood': 0xDEB887, 'cadetblue': 0x5F9EA0, 'chartreuse': 0x7FFF00, 'chocolate': 0xD2691E, 'coral': 0xFF7F50,
	'cornflowerblue': 0x6495ED, 'cornsilk': 0xFFF8DC, 'crimson': 0xDC143C, 'cyan': 0x00FFFF, 'darkblue': 0x00008B, 'darkcyan': 0x008B8B,
	'darkgoldenrod': 0xB8860B, 'darkgray': 0xA9A9A9, 'darkgreen': 0x006400, 'darkgrey': 0xA9A9A9, 'darkkhaki': 0xBDB76B, 'darkmagenta': 0x8B008B,
	'darkolivegreen': 0x556B2F, 'darkorange': 0xFF8C00, 'darkorchid': 0x9932CC, 'darkred': 0x8B0000, 'darksalmon': 0xE9967A, 'darkseagreen': 0x8FBC8F,
	'darkslateblue': 0x483D8B, 'darkslategray': 0x2F4F4F, 'darkslategrey': 0x2F4F4F, 'darkturquoise': 0x00CED1, 'darkviolet': 0x9400D3,
	'deeppink': 0xFF1493, 'deepskyblue': 0x00BFFF, 'dimgray': 0x696969, 'dimgrey': 0x696969, 'dodgerblue': 0x1E90FF, 'firebrick': 0xB22222,
	'floralwhite': 0xFFFAF0, 'forestgreen': 0x228B22, 'fuchsia': 0xFF00FF, 'gainsboro': 0xDCDCDC, 'ghostwhite': 0xF8F8FF, 'gold': 0xFFD700,
	'goldenrod': 0xDAA520, 'gray': 0x808080, 'green': 0x008000, 'greenyellow': 0xADFF2F, 'grey': 0x808080, 'honeydew': 0xF0FFF0, 'hotpink': 0xFF69B4,
	'indianred': 0xCD5C5C, 'indigo': 0x4B0082, 'ivory': 0xFFFFF0, 'khaki': 0xF0E68C, 'lavender': 0xE6E6FA, 'lavenderblush': 0xFFF0F5, 'lawngreen': 0x7CFC00,
	'lemonchiffon': 0xFFFACD, 'lightblue': 0xADD8E6, 'lightcoral': 0xF08080, 'lightcyan': 0xE0FFFF, 'lightgoldenrodyellow': 0xFAFAD2, 'lightgray': 0xD3D3D3,
	'lightgreen': 0x90EE90, 'lightgrey': 0xD3D3D3, 'lightpink': 0xFFB6C1, 'lightsalmon': 0xFFA07A, 'lightseagreen': 0x20B2AA, 'lightskyblue': 0x87CEFA,
	'lightslategray': 0x778899, 'lightslategrey': 0x778899, 'lightsteelblue': 0xB0C4DE, 'lightyellow': 0xFFFFE0, 'lime': 0x00FF00, 'limegreen': 0x32CD32,
	'linen': 0xFAF0E6, 'magenta': 0xFF00FF, 'maroon': 0x800000, 'mediumaquamarine': 0x66CDAA, 'mediumblue': 0x0000CD, 'mediumorchid': 0xBA55D3,
	'mediumpurple': 0x9370DB, 'mediumseagreen': 0x3CB371, 'mediumslateblue': 0x7B68EE, 'mediumspringgreen': 0x00FA9A, 'mediumturquoise': 0x48D1CC,
	'mediumvioletred': 0xC71585, 'midnightblue': 0x191970, 'mintcream': 0xF5FFFA, 'mistyrose': 0xFFE4E1, 'moccasin': 0xFFE4B5, 'navajowhite': 0xFFDEAD,
	'navy': 0x000080, 'oldlace': 0xFDF5E6, 'olive': 0x808000, 'olivedrab': 0x6B8E23, 'orange': 0xFFA500, 'orangered': 0xFF4500, 'orchid': 0xDA70D6,
	'palegoldenrod': 0xEEE8AA, 'palegreen': 0x98FB98, 'paleturquoise': 0xAFEEEE, 'palevioletred': 0xDB7093, 'papayawhip': 0xFFEFD5, 'peachpuff': 0xFFDAB9,
	'peru': 0xCD853F, 'pink': 0xFFC0CB, 'plum': 0xDDA0DD, 'powderblue': 0xB0E0E6, 'purple': 0x800080, 'rebeccapurple': 0x663399, 'red': 0xFF0000, 'rosybrown': 0xBC8F8F,
	'royalblue': 0x4169E1, 'saddlebrown': 0x8B4513, 'salmon': 0xFA8072, 'sandybrown': 0xF4A460, 'seagreen': 0x2E8B57, 'seashell': 0xFFF5EE,
	'sienna': 0xA0522D, 'silver': 0xC0C0C0, 'skyblue': 0x87CEEB, 'slateblue': 0x6A5ACD, 'slategray': 0x708090, 'slategrey': 0x708090, 'snow': 0xFFFAFA,
	'springgreen': 0x00FF7F, 'steelblue': 0x4682B4, 'tan': 0xD2B48C, 'teal': 0x008080, 'thistle': 0xD8BFD8, 'tomato': 0xFF6347, 'turquoise': 0x40E0D0,
	'violet': 0xEE82EE, 'wheat': 0xF5DEB3, 'white': 0xFFFFFF, 'whitesmoke': 0xF5F5F5, 'yellow': 0xFFFF00, 'yellowgreen': 0x9ACD32 };

const _hslA = { h: 0, s: 0, l: 0 };
const _hslB = { h: 0, s: 0, l: 0 };

function hue2rgb( p, q, t ) {

	if ( t < 0 ) t += 1;
	if ( t > 1 ) t -= 1;
	if ( t < 1 / 6 ) return p + ( q - p ) * 6 * t;
	if ( t < 1 / 2 ) return q;
	if ( t < 2 / 3 ) return p + ( q - p ) * 6 * ( 2 / 3 - t );
	return p;

}

class Color {

	constructor( r, g, b ) {

		this.isColor = true;

		this.r = 1;
		this.g = 1;
		this.b = 1;

		return this.set( r, g, b );

	}

	set( r, g, b ) {

		if ( g === undefined && b === undefined ) {

			// r is THREE.Color, hex or string

			const value = r;

			if ( value && value.isColor ) {

				this.copy( value );

			} else if ( typeof value === 'number' ) {

				this.setHex( value );

			} else if ( typeof value === 'string' ) {

				this.setStyle( value );

			}

		} else {

			this.setRGB( r, g, b );

		}

		return this;

	}

	setScalar( scalar ) {

		this.r = scalar;
		this.g = scalar;
		this.b = scalar;

		return this;

	}

	setHex( hex, colorSpace = SRGBColorSpace ) {

		hex = Math.floor( hex );

		this.r = ( hex >> 16 & 255 ) / 255;
		this.g = ( hex >> 8 & 255 ) / 255;
		this.b = ( hex & 255 ) / 255;

		ColorManagement.toWorkingColorSpace( this, colorSpace );

		return this;

	}

	setRGB( r, g, b, colorSpace = ColorManagement.workingColorSpace ) {

		this.r = r;
		this.g = g;
		this.b = b;

		ColorManagement.toWorkingColorSpace( this, colorSpace );

		return this;

	}

	setHSL( h, s, l, colorSpace = ColorManagement.workingColorSpace ) {

		// h,s,l ranges are in 0.0 - 1.0
		h = euclideanModulo( h, 1 );
		s = clamp( s, 0, 1 );
		l = clamp( l, 0, 1 );

		if ( s === 0 ) {

			this.r = this.g = this.b = l;

		} else {

			const p = l <= 0.5 ? l * ( 1 + s ) : l + s - ( l * s );
			const q = ( 2 * l ) - p;

			this.r = hue2rgb( q, p, h + 1 / 3 );
			this.g = hue2rgb( q, p, h );
			this.b = hue2rgb( q, p, h - 1 / 3 );

		}

		ColorManagement.toWorkingColorSpace( this, colorSpace );

		return this;

	}

	setStyle( style, colorSpace = SRGBColorSpace ) {

		function handleAlpha( string ) {

			if ( string === undefined ) return;

			if ( parseFloat( string ) < 1 ) {

				console.warn( 'THREE.Color: Alpha component of ' + style + ' will be ignored.' );

			}

		}


		let m;

		if ( m = /^(\w+)\(([^\)]*)\)/.exec( style ) ) {

			// rgb / hsl

			let color;
			const name = m[ 1 ];
			const components = m[ 2 ];

			switch ( name ) {

				case 'rgb':
				case 'rgba':

					if ( color = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec( components ) ) {

						// rgb(255,0,0) rgba(255,0,0,0.5)

						handleAlpha( color[ 4 ] );

						return this.setRGB(
							Math.min( 255, parseInt( color[ 1 ], 10 ) ) / 255,
							Math.min( 255, parseInt( color[ 2 ], 10 ) ) / 255,
							Math.min( 255, parseInt( color[ 3 ], 10 ) ) / 255,
							colorSpace
						);

					}

					if ( color = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec( components ) ) {

						// rgb(100%,0%,0%) rgba(100%,0%,0%,0.5)

						handleAlpha( color[ 4 ] );

						return this.setRGB(
							Math.min( 100, parseInt( color[ 1 ], 10 ) ) / 100,
							Math.min( 100, parseInt( color[ 2 ], 10 ) ) / 100,
							Math.min( 100, parseInt( color[ 3 ], 10 ) ) / 100,
							colorSpace
						);

					}

					break;

				case 'hsl':
				case 'hsla':

					if ( color = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec( components ) ) {

						// hsl(120,50%,50%) hsla(120,50%,50%,0.5)

						handleAlpha( color[ 4 ] );

						return this.setHSL(
							parseFloat( color[ 1 ] ) / 360,
							parseFloat( color[ 2 ] ) / 100,
							parseFloat( color[ 3 ] ) / 100,
							colorSpace
						);

					}

					break;

				default:

					console.warn( 'THREE.Color: Unknown color model ' + style );

			}

		} else if ( m = /^\#([A-Fa-f\d]+)$/.exec( style ) ) {

			// hex color

			const hex = m[ 1 ];
			const size = hex.length;

			if ( size === 3 ) {

				// #ff0
				return this.setRGB(
					parseInt( hex.charAt( 0 ), 16 ) / 15,
					parseInt( hex.charAt( 1 ), 16 ) / 15,
					parseInt( hex.charAt( 2 ), 16 ) / 15,
					colorSpace
				);

			} else if ( size === 6 ) {

				// #ff0000
				return this.setHex( parseInt( hex, 16 ), colorSpace );

			} else {

				console.warn( 'THREE.Color: Invalid hex color ' + style );

			}

		} else if ( style && style.length > 0 ) {

			return this.setColorName( style, colorSpace );

		}

		return this;

	}

	setColorName( style, colorSpace = SRGBColorSpace ) {

		// color keywords
		const hex = _colorKeywords[ style.toLowerCase() ];

		if ( hex !== undefined ) {

			// red
			this.setHex( hex, colorSpace );

		} else {

			// unknown color
			console.warn( 'THREE.Color: Unknown color ' + style );

		}

		return this;

	}

	clone() {

		return new this.constructor( this.r, this.g, this.b );

	}

	copy( color ) {

		this.r = color.r;
		this.g = color.g;
		this.b = color.b;

		return this;

	}

	copySRGBToLinear( color ) {

		this.r = SRGBToLinear( color.r );
		this.g = SRGBToLinear( color.g );
		this.b = SRGBToLinear( color.b );

		return this;

	}

	copyLinearToSRGB( color ) {

		this.r = LinearToSRGB( color.r );
		this.g = LinearToSRGB( color.g );
		this.b = LinearToSRGB( color.b );

		return this;

	}

	convertSRGBToLinear() {

		this.copySRGBToLinear( this );

		return this;

	}

	convertLinearToSRGB() {

		this.copyLinearToSRGB( this );

		return this;

	}

	getHex( colorSpace = SRGBColorSpace ) {

		ColorManagement.fromWorkingColorSpace( _color.copy( this ), colorSpace );

		return Math.round( clamp( _color.r * 255, 0, 255 ) ) * 65536 + Math.round( clamp( _color.g * 255, 0, 255 ) ) * 256 + Math.round( clamp( _color.b * 255, 0, 255 ) );

	}

	getHexString( colorSpace = SRGBColorSpace ) {

		return ( '000000' + this.getHex( colorSpace ).toString( 16 ) ).slice( - 6 );

	}

	getHSL( target, colorSpace = ColorManagement.workingColorSpace ) {

		// h,s,l ranges are in 0.0 - 1.0

		ColorManagement.fromWorkingColorSpace( _color.copy( this ), colorSpace );

		const r = _color.r, g = _color.g, b = _color.b;

		const max = Math.max( r, g, b );
		const min = Math.min( r, g, b );

		let hue, saturation;
		const lightness = ( min + max ) / 2.0;

		if ( min === max ) {

			hue = 0;
			saturation = 0;

		} else {

			const delta = max - min;

			saturation = lightness <= 0.5 ? delta / ( max + min ) : delta / ( 2 - max - min );

			switch ( max ) {

				case r: hue = ( g - b ) / delta + ( g < b ? 6 : 0 ); break;
				case g: hue = ( b - r ) / delta + 2; break;
				case b: hue = ( r - g ) / delta + 4; break;

			}

			hue /= 6;

		}

		target.h = hue;
		target.s = saturation;
		target.l = lightness;

		return target;

	}

	getRGB( target, colorSpace = ColorManagement.workingColorSpace ) {

		ColorManagement.fromWorkingColorSpace( _color.copy( this ), colorSpace );

		target.r = _color.r;
		target.g = _color.g;
		target.b = _color.b;

		return target;

	}

	getStyle( colorSpace = SRGBColorSpace ) {

		ColorManagement.fromWorkingColorSpace( _color.copy( this ), colorSpace );

		const r = _color.r, g = _color.g, b = _color.b;

		if ( colorSpace !== SRGBColorSpace ) {

			// Requires CSS Color Module Level 4 (https://www.w3.org/TR/css-color-4/).
			return `color(${ colorSpace } ${ r.toFixed( 3 ) } ${ g.toFixed( 3 ) } ${ b.toFixed( 3 ) })`;

		}

		return `rgb(${ Math.round( r * 255 ) },${ Math.round( g * 255 ) },${ Math.round( b * 255 ) })`;

	}

	offsetHSL( h, s, l ) {

		this.getHSL( _hslA );

		return this.setHSL( _hslA.h + h, _hslA.s + s, _hslA.l + l );

	}

	add( color ) {

		this.r += color.r;
		this.g += color.g;
		this.b += color.b;

		return this;

	}

	addColors( color1, color2 ) {

		this.r = color1.r + color2.r;
		this.g = color1.g + color2.g;
		this.b = color1.b + color2.b;

		return this;

	}

	addScalar( s ) {

		this.r += s;
		this.g += s;
		this.b += s;

		return this;

	}

	sub( color ) {

		this.r = Math.max( 0, this.r - color.r );
		this.g = Math.max( 0, this.g - color.g );
		this.b = Math.max( 0, this.b - color.b );

		return this;

	}

	multiply( color ) {

		this.r *= color.r;
		this.g *= color.g;
		this.b *= color.b;

		return this;

	}

	multiplyScalar( s ) {

		this.r *= s;
		this.g *= s;
		this.b *= s;

		return this;

	}

	lerp( color, alpha ) {

		this.r += ( color.r - this.r ) * alpha;
		this.g += ( color.g - this.g ) * alpha;
		this.b += ( color.b - this.b ) * alpha;

		return this;

	}

	lerpColors( color1, color2, alpha ) {

		this.r = color1.r + ( color2.r - color1.r ) * alpha;
		this.g = color1.g + ( color2.g - color1.g ) * alpha;
		this.b = color1.b + ( color2.b - color1.b ) * alpha;

		return this;

	}

	lerpHSL( color, alpha ) {

		this.getHSL( _hslA );
		color.getHSL( _hslB );

		const h = lerp( _hslA.h, _hslB.h, alpha );
		const s = lerp( _hslA.s, _hslB.s, alpha );
		const l = lerp( _hslA.l, _hslB.l, alpha );

		this.setHSL( h, s, l );

		return this;

	}

	setFromVector3( v ) {

		this.r = v.x;
		this.g = v.y;
		this.b = v.z;

		return this;

	}

	applyMatrix3( m ) {

		const r = this.r, g = this.g, b = this.b;
		const e = m.elements;

		this.r = e[ 0 ] * r + e[ 3 ] * g + e[ 6 ] * b;
		this.g = e[ 1 ] * r + e[ 4 ] * g + e[ 7 ] * b;
		this.b = e[ 2 ] * r + e[ 5 ] * g + e[ 8 ] * b;

		return this;

	}

	equals( c ) {

		return ( c.r === this.r ) && ( c.g === this.g ) && ( c.b === this.b );

	}

	fromArray( array, offset = 0 ) {

		this.r = array[ offset ];
		this.g = array[ offset + 1 ];
		this.b = array[ offset + 2 ];

		return this;

	}

	toArray( array = [], offset = 0 ) {

		array[ offset ] = this.r;
		array[ offset + 1 ] = this.g;
		array[ offset + 2 ] = this.b;

		return array;

	}

	fromBufferAttribute( attribute, index ) {

		this.r = attribute.getX( index );
		this.g = attribute.getY( index );
		this.b = attribute.getZ( index );

		return this;

	}

	toJSON() {

		return this.getHex();

	}

	*[ Symbol.iterator ]() {

		yield this.r;
		yield this.g;
		yield this.b;

	}

}

const _color = /*@__PURE__*/ new Color();

Color.NAMES = _colorKeywords;

let _materialId = 0;

class Material extends EventDispatcher {

	constructor() {

		super();

		this.isMaterial = true;

		Object.defineProperty( this, 'id', { value: _materialId ++ } );

		this.uuid = generateUUID();

		this.name = '';
		this.type = 'Material';

		this.blending = NormalBlending;
		this.side = FrontSide;
		this.vertexColors = false;

		this.opacity = 1;
		this.transparent = false;
		this.alphaHash = false;

		this.blendSrc = SrcAlphaFactor;
		this.blendDst = OneMinusSrcAlphaFactor;
		this.blendEquation = AddEquation;
		this.blendSrcAlpha = null;
		this.blendDstAlpha = null;
		this.blendEquationAlpha = null;
		this.blendColor = new Color( 0, 0, 0 );
		this.blendAlpha = 0;

		this.depthFunc = LessEqualDepth;
		this.depthTest = true;
		this.depthWrite = true;

		this.stencilWriteMask = 0xff;
		this.stencilFunc = AlwaysStencilFunc;
		this.stencilRef = 0;
		this.stencilFuncMask = 0xff;
		this.stencilFail = KeepStencilOp;
		this.stencilZFail = KeepStencilOp;
		this.stencilZPass = KeepStencilOp;
		this.stencilWrite = false;

		this.clippingPlanes = null;
		this.clipIntersection = false;
		this.clipShadows = false;

		this.shadowSide = null;

		this.colorWrite = true;

		this.precision = null; // override the renderer's default precision for this material

		this.polygonOffset = false;
		this.polygonOffsetFactor = 0;
		this.polygonOffsetUnits = 0;

		this.dithering = false;

		this.alphaToCoverage = false;
		this.premultipliedAlpha = false;
		this.forceSinglePass = false;

		this.visible = true;

		this.toneMapped = true;

		this.userData = {};

		this.version = 0;

		this._alphaTest = 0;

	}

	get alphaTest() {

		return this._alphaTest;

	}

	set alphaTest( value ) {

		if ( this._alphaTest > 0 !== value > 0 ) {

			this.version ++;

		}

		this._alphaTest = value;

	}

	onBuild( /* shaderobject, renderer */ ) {}

	onBeforeRender( /* renderer, scene, camera, geometry, object, group */ ) {}

	onBeforeCompile( /* shaderobject, renderer */ ) {}

	customProgramCacheKey() {

		return this.onBeforeCompile.toString();

	}

	setValues( values ) {

		if ( values === undefined ) return;

		for ( const key in values ) {

			const newValue = values[ key ];

			if ( newValue === undefined ) {

				console.warn( `THREE.Material: parameter '${ key }' has value of undefined.` );
				continue;

			}

			const currentValue = this[ key ];

			if ( currentValue === undefined ) {

				console.warn( `THREE.Material: '${ key }' is not a property of THREE.${ this.type }.` );
				continue;

			}

			if ( currentValue && currentValue.isColor ) {

				currentValue.set( newValue );

			} else if ( ( currentValue && currentValue.isVector3 ) && ( newValue && newValue.isVector3 ) ) {

				currentValue.copy( newValue );

			} else {

				this[ key ] = newValue;

			}

		}

	}

	toJSON( meta ) {

		const isRootObject = ( meta === undefined || typeof meta === 'string' );

		if ( isRootObject ) {

			meta = {
				textures: {},
				images: {}
			};

		}

		const data = {
			metadata: {
				version: 4.6,
				type: 'Material',
				generator: 'Material.toJSON'
			}
		};

		// standard Material serialization
		data.uuid = this.uuid;
		data.type = this.type;

		if ( this.name !== '' ) data.name = this.name;

		if ( this.color && this.color.isColor ) data.color = this.color.getHex();

		if ( this.roughness !== undefined ) data.roughness = this.roughness;
		if ( this.metalness !== undefined ) data.metalness = this.metalness;

		if ( this.sheen !== undefined ) data.sheen = this.sheen;
		if ( this.sheenColor && this.sheenColor.isColor ) data.sheenColor = this.sheenColor.getHex();
		if ( this.sheenRoughness !== undefined ) data.sheenRoughness = this.sheenRoughness;
		if ( this.emissive && this.emissive.isColor ) data.emissive = this.emissive.getHex();
		if ( this.emissiveIntensity !== undefined && this.emissiveIntensity !== 1 ) data.emissiveIntensity = this.emissiveIntensity;

		if ( this.specular && this.specular.isColor ) data.specular = this.specular.getHex();
		if ( this.specularIntensity !== undefined ) data.specularIntensity = this.specularIntensity;
		if ( this.specularColor && this.specularColor.isColor ) data.specularColor = this.specularColor.getHex();
		if ( this.shininess !== undefined ) data.shininess = this.shininess;
		if ( this.clearcoat !== undefined ) data.clearcoat = this.clearcoat;
		if ( this.clearcoatRoughness !== undefined ) data.clearcoatRoughness = this.clearcoatRoughness;

		if ( this.clearcoatMap && this.clearcoatMap.isTexture ) {

			data.clearcoatMap = this.clearcoatMap.toJSON( meta ).uuid;

		}

		if ( this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture ) {

			data.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON( meta ).uuid;

		}

		if ( this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture ) {

			data.clearcoatNormalMap = this.clearcoatNormalMap.toJSON( meta ).uuid;
			data.clearcoatNormalScale = this.clearcoatNormalScale.toArray();

		}

		if ( this.dispersion !== undefined ) data.dispersion = this.dispersion;

		if ( this.iridescence !== undefined ) data.iridescence = this.iridescence;
		if ( this.iridescenceIOR !== undefined ) data.iridescenceIOR = this.iridescenceIOR;
		if ( this.iridescenceThicknessRange !== undefined ) data.iridescenceThicknessRange = this.iridescenceThicknessRange;

		if ( this.iridescenceMap && this.iridescenceMap.isTexture ) {

			data.iridescenceMap = this.iridescenceMap.toJSON( meta ).uuid;

		}

		if ( this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture ) {

			data.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON( meta ).uuid;

		}

		if ( this.anisotropy !== undefined ) data.anisotropy = this.anisotropy;
		if ( this.anisotropyRotation !== undefined ) data.anisotropyRotation = this.anisotropyRotation;

		if ( this.anisotropyMap && this.anisotropyMap.isTexture ) {

			data.anisotropyMap = this.anisotropyMap.toJSON( meta ).uuid;

		}

		if ( this.map && this.map.isTexture ) data.map = this.map.toJSON( meta ).uuid;
		if ( this.matcap && this.matcap.isTexture ) data.matcap = this.matcap.toJSON( meta ).uuid;
		if ( this.alphaMap && this.alphaMap.isTexture ) data.alphaMap = this.alphaMap.toJSON( meta ).uuid;

		if ( this.lightMap && this.lightMap.isTexture ) {

			data.lightMap = this.lightMap.toJSON( meta ).uuid;
			data.lightMapIntensity = this.lightMapIntensity;

		}

		if ( this.aoMap && this.aoMap.isTexture ) {

			data.aoMap = this.aoMap.toJSON( meta ).uuid;
			data.aoMapIntensity = this.aoMapIntensity;

		}

		if ( this.bumpMap && this.bumpMap.isTexture ) {

			data.bumpMap = this.bumpMap.toJSON( meta ).uuid;
			data.bumpScale = this.bumpScale;

		}

		if ( this.normalMap && this.normalMap.isTexture ) {

			data.normalMap = this.normalMap.toJSON( meta ).uuid;
			data.normalMapType = this.normalMapType;
			data.normalScale = this.normalScale.toArray();

		}

		if ( this.displacementMap && this.displacementMap.isTexture ) {

			data.displacementMap = this.displacementMap.toJSON( meta ).uuid;
			data.displacementScale = this.displacementScale;
			data.displacementBias = this.displacementBias;

		}

		if ( this.roughnessMap && this.roughnessMap.isTexture ) data.roughnessMap = this.roughnessMap.toJSON( meta ).uuid;
		if ( this.metalnessMap && this.metalnessMap.isTexture ) data.metalnessMap = this.metalnessMap.toJSON( meta ).uuid;

		if ( this.emissiveMap && this.emissiveMap.isTexture ) data.emissiveMap = this.emissiveMap.toJSON( meta ).uuid;
		if ( this.specularMap && this.specularMap.isTexture ) data.specularMap = this.specularMap.toJSON( meta ).uuid;
		if ( this.specularIntensityMap && this.specularIntensityMap.isTexture ) data.specularIntensityMap = this.specularIntensityMap.toJSON( meta ).uuid;
		if ( this.specularColorMap && this.specularColorMap.isTexture ) data.specularColorMap = this.specularColorMap.toJSON( meta ).uuid;

		if ( this.envMap && this.envMap.isTexture ) {

			data.envMap = this.envMap.toJSON( meta ).uuid;

			if ( this.combine !== undefined ) data.combine = this.combine;

		}

		if ( this.envMapRotation !== undefined ) data.envMapRotation = this.envMapRotation.toArray();
		if ( this.envMapIntensity !== undefined ) data.envMapIntensity = this.envMapIntensity;
		if ( this.reflectivity !== undefined ) data.reflectivity = this.reflectivity;
		if ( this.refractionRatio !== undefined ) data.refractionRatio = this.refractionRatio;

		if ( this.gradientMap && this.gradientMap.isTexture ) {

			data.gradientMap = this.gradientMap.toJSON( meta ).uuid;

		}

		if ( this.transmission !== undefined ) data.transmission = this.transmission;
		if ( this.transmissionMap && this.transmissionMap.isTexture ) data.transmissionMap = this.transmissionMap.toJSON( meta ).uuid;
		if ( this.thickness !== undefined ) data.thickness = this.thickness;
		if ( this.thicknessMap && this.thicknessMap.isTexture ) data.thicknessMap = this.thicknessMap.toJSON( meta ).uuid;
		if ( this.attenuationDistance !== undefined && this.attenuationDistance !== Infinity ) data.attenuationDistance = this.attenuationDistance;
		if ( this.attenuationColor !== undefined ) data.attenuationColor = this.attenuationColor.getHex();

		if ( this.size !== undefined ) data.size = this.size;
		if ( this.shadowSide !== null ) data.shadowSide = this.shadowSide;
		if ( this.sizeAttenuation !== undefined ) data.sizeAttenuation = this.sizeAttenuation;

		if ( this.blending !== NormalBlending ) data.blending = this.blending;
		if ( this.side !== FrontSide ) data.side = this.side;
		if ( this.vertexColors === true ) data.vertexColors = true;

		if ( this.opacity < 1 ) data.opacity = this.opacity;
		if ( this.transparent === true ) data.transparent = true;

		if ( this.blendSrc !== SrcAlphaFactor ) data.blendSrc = this.blendSrc;
		if ( this.blendDst !== OneMinusSrcAlphaFactor ) data.blendDst = this.blendDst;
		if ( this.blendEquation !== AddEquation ) data.blendEquation = this.blendEquation;
		if ( this.blendSrcAlpha !== null ) data.blendSrcAlpha = this.blendSrcAlpha;
		if ( this.blendDstAlpha !== null ) data.blendDstAlpha = this.blendDstAlpha;
		if ( this.blendEquationAlpha !== null ) data.blendEquationAlpha = this.blendEquationAlpha;
		if ( this.blendColor && this.blendColor.isColor ) data.blendColor = this.blendColor.getHex();
		if ( this.blendAlpha !== 0 ) data.blendAlpha = this.blendAlpha;

		if ( this.depthFunc !== LessEqualDepth ) data.depthFunc = this.depthFunc;
		if ( this.depthTest === false ) data.depthTest = this.depthTest;
		if ( this.depthWrite === false ) data.depthWrite = this.depthWrite;
		if ( this.colorWrite === false ) data.colorWrite = this.colorWrite;

		if ( this.stencilWriteMask !== 0xff ) data.stencilWriteMask = this.stencilWriteMask;
		if ( this.stencilFunc !== AlwaysStencilFunc ) data.stencilFunc = this.stencilFunc;
		if ( this.stencilRef !== 0 ) data.stencilRef = this.stencilRef;
		if ( this.stencilFuncMask !== 0xff ) data.stencilFuncMask = this.stencilFuncMask;
		if ( this.stencilFail !== KeepStencilOp ) data.stencilFail = this.stencilFail;
		if ( this.stencilZFail !== KeepStencilOp ) data.stencilZFail = this.stencilZFail;
		if ( this.stencilZPass !== KeepStencilOp ) data.stencilZPass = this.stencilZPass;
		if ( this.stencilWrite === true ) data.stencilWrite = this.stencilWrite;

		// rotation (SpriteMaterial)
		if ( this.rotation !== undefined && this.rotation !== 0 ) data.rotation = this.rotation;

		if ( this.polygonOffset === true ) data.polygonOffset = true;
		if ( this.polygonOffsetFactor !== 0 ) data.polygonOffsetFactor = this.polygonOffsetFactor;
		if ( this.polygonOffsetUnits !== 0 ) data.polygonOffsetUnits = this.polygonOffsetUnits;

		if ( this.linewidth !== undefined && this.linewidth !== 1 ) data.linewidth = this.linewidth;
		if ( this.dashSize !== undefined ) data.dashSize = this.dashSize;
		if ( this.gapSize !== undefined ) data.gapSize = this.gapSize;
		if ( this.scale !== undefined ) data.scale = this.scale;

		if ( this.dithering === true ) data.dithering = true;

		if ( this.alphaTest > 0 ) data.alphaTest = this.alphaTest;
		if ( this.alphaHash === true ) data.alphaHash = true;
		if ( this.alphaToCoverage === true ) data.alphaToCoverage = true;
		if ( this.premultipliedAlpha === true ) data.premultipliedAlpha = true;
		if ( this.forceSinglePass === true ) data.forceSinglePass = true;

		if ( this.wireframe === true ) data.wireframe = true;
		if ( this.wireframeLinewidth > 1 ) data.wireframeLinewidth = this.wireframeLinewidth;
		if ( this.wireframeLinecap !== 'round' ) data.wireframeLinecap = this.wireframeLinecap;
		if ( this.wireframeLinejoin !== 'round' ) data.wireframeLinejoin = this.wireframeLinejoin;

		if ( this.flatShading === true ) data.flatShading = true;

		if ( this.visible === false ) data.visible = false;

		if ( this.toneMapped === false ) data.toneMapped = false;

		if ( this.fog === false ) data.fog = false;

		if ( Object.keys( this.userData ).length > 0 ) data.userData = this.userData;

		// TODO: Copied from Object3D.toJSON

		function extractFromCache( cache ) {

			const values = [];

			for ( const key in cache ) {

				const data = cache[ key ];
				delete data.metadata;
				values.push( data );

			}

			return values;

		}

		if ( isRootObject ) {

			const textures = extractFromCache( meta.textures );
			const images = extractFromCache( meta.images );

			if ( textures.length > 0 ) data.textures = textures;
			if ( images.length > 0 ) data.images = images;

		}

		return data;

	}

	clone() {

		return new this.constructor().copy( this );

	}

	copy( source ) {

		this.name = source.name;

		this.blending = source.blending;
		this.side = source.side;
		this.vertexColors = source.vertexColors;

		this.opacity = source.opacity;
		this.transparent = source.transparent;

		this.blendSrc = source.blendSrc;
		this.blendDst = source.blendDst;
		this.blendEquation = source.blendEquation;
		this.blendSrcAlpha = source.blendSrcAlpha;
		this.blendDstAlpha = source.blendDstAlpha;
		this.blendEquationAlpha = source.blendEquationAlpha;
		this.blendColor.copy( source.blendColor );
		this.blendAlpha = source.blendAlpha;

		this.depthFunc = source.depthFunc;
		this.depthTest = source.depthTest;
		this.depthWrite = source.depthWrite;

		this.stencilWriteMask = source.stencilWriteMask;
		this.stencilFunc = source.stencilFunc;
		this.stencilRef = source.stencilRef;
		this.stencilFuncMask = source.stencilFuncMask;
		this.stencilFail = source.stencilFail;
		this.stencilZFail = source.stencilZFail;
		this.stencilZPass = source.stencilZPass;
		this.stencilWrite = source.stencilWrite;

		const srcPlanes = source.clippingPlanes;
		let dstPlanes = null;

		if ( srcPlanes !== null ) {

			const n = srcPlanes.length;
			dstPlanes = new Array( n );

			for ( let i = 0; i !== n; ++ i ) {

				dstPlanes[ i ] = srcPlanes[ i ].clone();

			}

		}

		this.clippingPlanes = dstPlanes;
		this.clipIntersection = source.clipIntersection;
		this.clipShadows = source.clipShadows;

		this.shadowSide = source.shadowSide;

		this.colorWrite = source.colorWrite;

		this.precision = source.precision;

		this.polygonOffset = source.polygonOffset;
		this.polygonOffsetFactor = source.polygonOffsetFactor;
		this.polygonOffsetUnits = source.polygonOffsetUnits;

		this.dithering = source.dithering;

		this.alphaTest = source.alphaTest;
		this.alphaHash = source.alphaHash;
		this.alphaToCoverage = source.alphaToCoverage;
		this.premultipliedAlpha = source.premultipliedAlpha;
		this.forceSinglePass = source.forceSinglePass;

		this.visible = source.visible;

		this.toneMapped = source.toneMapped;

		this.userData = JSON.parse( JSON.stringify( source.userData ) );

		return this;

	}

	dispose() {

		this.dispatchEvent( { type: 'dispose' } );

	}

	set needsUpdate( value ) {

		if ( value === true ) this.version ++;

	}

}

class MeshBasicMaterial extends Material {

	constructor( parameters ) {

		super();

		this.isMeshBasicMaterial = true;

		this.type = 'MeshBasicMaterial';

		this.color = new Color( 0xffffff ); // emissive

		this.map = null;

		this.lightMap = null;
		this.lightMapIntensity = 1.0;

		this.aoMap = null;
		this.aoMapIntensity = 1.0;

		this.specularMap = null;

		this.alphaMap = null;

		this.envMap = null;
		this.envMapRotation = new Euler();
		this.combine = MultiplyOperation;
		this.reflectivity = 1;
		this.refractionRatio = 0.98;

		this.wireframe = false;
		this.wireframeLinewidth = 1;
		this.wireframeLinecap = 'round';
		this.wireframeLinejoin = 'round';

		this.fog = true;

		this.setValues( parameters );

	}

	copy( source ) {

		super.copy( source );

		this.color.copy( source.color );

		this.map = source.map;

		this.lightMap = source.lightMap;
		this.lightMapIntensity = source.lightMapIntensity;

		this.aoMap = source.aoMap;
		this.aoMapIntensity = source.aoMapIntensity;

		this.specularMap = source.specularMap;

		this.alphaMap = source.alphaMap;

		this.envMap = source.envMap;
		this.envMapRotation.copy( source.envMapRotation );
		this.combine = source.combine;
		this.reflectivity = source.reflectivity;
		this.refractionRatio = source.refractionRatio;

		this.wireframe = source.wireframe;
		this.wireframeLinewidth = source.wireframeLinewidth;
		this.wireframeLinecap = source.wireframeLinecap;
		this.wireframeLinejoin = source.wireframeLinejoin;

		this.fog = source.fog;

		return this;

	}

}

// Fast Half Float Conversions, http://www.fox-toolkit.org/ftp/fasthalffloatconversion.pdf

const _tables = /*@__PURE__*/ _generateTables();

function _generateTables() {

	// float32 to float16 helpers

	const buffer = new ArrayBuffer( 4 );
	const floatView = new Float32Array( buffer );
	const uint32View = new Uint32Array( buffer );

	const baseTable = new Uint32Array( 512 );
	const shiftTable = new Uint32Array( 512 );

	for ( let i = 0; i < 256; ++ i ) {

		const e = i - 127;

		// very small number (0, -0)

		if ( e < - 27 ) {

			baseTable[ i ] = 0x0000;
			baseTable[ i | 0x100 ] = 0x8000;
			shiftTable[ i ] = 24;
			shiftTable[ i | 0x100 ] = 24;

			// small number (denorm)

		} else if ( e < - 14 ) {

			baseTable[ i ] = 0x0400 >> ( - e - 14 );
			baseTable[ i | 0x100 ] = ( 0x0400 >> ( - e - 14 ) ) | 0x8000;
			shiftTable[ i ] = - e - 1;
			shiftTable[ i | 0x100 ] = - e - 1;

			// normal number

		} else if ( e <= 15 ) {

			baseTable[ i ] = ( e + 15 ) << 10;
			baseTable[ i | 0x100 ] = ( ( e + 15 ) << 10 ) | 0x8000;
			shiftTable[ i ] = 13;
			shiftTable[ i | 0x100 ] = 13;

			// large number (Infinity, -Infinity)

		} else if ( e < 128 ) {

			baseTable[ i ] = 0x7c00;
			baseTable[ i | 0x100 ] = 0xfc00;
			shiftTable[ i ] = 24;
			shiftTable[ i | 0x100 ] = 24;

			// stay (NaN, Infinity, -Infinity)

		} else {

			baseTable[ i ] = 0x7c00;
			baseTable[ i | 0x100 ] = 0xfc00;
			shiftTable[ i ] = 13;
			shiftTable[ i | 0x100 ] = 13;

		}

	}

	// float16 to float32 helpers

	const mantissaTable = new Uint32Array( 2048 );
	const exponentTable = new Uint32Array( 64 );
	const offsetTable = new Uint32Array( 64 );

	for ( let i = 1; i < 1024; ++ i ) {

		let m = i << 13; // zero pad mantissa bits
		let e = 0; // zero exponent

		// normalized
		while ( ( m & 0x00800000 ) === 0 ) {

			m <<= 1;
			e -= 0x00800000; // decrement exponent

		}

		m &= ~ 0x00800000; // clear leading 1 bit
		e += 0x38800000; // adjust bias

		mantissaTable[ i ] = m | e;

	}

	for ( let i = 1024; i < 2048; ++ i ) {

		mantissaTable[ i ] = 0x38000000 + ( ( i - 1024 ) << 13 );

	}

	for ( let i = 1; i < 31; ++ i ) {

		exponentTable[ i ] = i << 23;

	}

	exponentTable[ 31 ] = 0x47800000;
	exponentTable[ 32 ] = 0x80000000;

	for ( let i = 33; i < 63; ++ i ) {

		exponentTable[ i ] = 0x80000000 + ( ( i - 32 ) << 23 );

	}

	exponentTable[ 63 ] = 0xc7800000;

	for ( let i = 1; i < 64; ++ i ) {

		if ( i !== 32 ) {

			offsetTable[ i ] = 1024;

		}

	}

	return {
		floatView: floatView,
		uint32View: uint32View,
		baseTable: baseTable,
		shiftTable: shiftTable,
		mantissaTable: mantissaTable,
		exponentTable: exponentTable,
		offsetTable: offsetTable
	};

}

// float32 to float16

function toHalfFloat( val ) {

	if ( Math.abs( val ) > 65504 ) console.warn( 'THREE.DataUtils.toHalfFloat(): Value out of range.' );

	val = clamp( val, - 65504, 65504 );

	_tables.floatView[ 0 ] = val;
	const f = _tables.uint32View[ 0 ];
	const e = ( f >> 23 ) & 0x1ff;
	return _tables.baseTable[ e ] + ( ( f & 0x007fffff ) >> _tables.shiftTable[ e ] );

}

// float16 to float32

function fromHalfFloat( val ) {

	const m = val >> 10;
	_tables.uint32View[ 0 ] = _tables.mantissaTable[ _tables.offsetTable[ m ] + ( val & 0x3ff ) ] + _tables.exponentTable[ m ];
	return _tables.floatView[ 0 ];

}

const DataUtils = {
	toHalfFloat: toHalfFloat,
	fromHalfFloat: fromHalfFloat,
};

const _vector$9 = /*@__PURE__*/ new Vector3();
const _vector2$1 = /*@__PURE__*/ new Vector2();

class BufferAttribute {

	constructor( array, itemSize, normalized = false ) {

		if ( Array.isArray( array ) ) {

			throw new TypeError( 'THREE.BufferAttribute: array should be a Typed Array.' );

		}

		this.isBufferAttribute = true;

		this.name = '';

		this.array = array;
		this.itemSize = itemSize;
		this.count = array !== undefined ? array.length / itemSize : 0;
		this.normalized = normalized;

		this.usage = StaticDrawUsage;
		this._updateRange = { offset: 0, count: - 1 };
		this.updateRanges = [];
		this.gpuType = FloatType;

		this.version = 0;

	}

	onUploadCallback() {}

	set needsUpdate( value ) {

		if ( value === true ) this.version ++;

	}

	get updateRange() {

		warnOnce( 'THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead.' ); // @deprecated, r159
		return this._updateRange;

	}

	setUsage( value ) {

		this.usage = value;

		return this;

	}

	addUpdateRange( start, count ) {

		this.updateRanges.push( { start, count } );

	}

	clearUpdateRanges() {

		this.updateRanges.length = 0;

	}

	copy( source ) {

		this.name = source.name;
		this.array = new source.array.constructor( source.array );
		this.itemSize = source.itemSize;
		this.count = source.count;
		this.normalized = source.normalized;

		this.usage = source.usage;
		this.gpuType = source.gpuType;

		return this;

	}

	copyAt( index1, attribute, index2 ) {

		index1 *= this.itemSize;
		index2 *= attribute.itemSize;

		for ( let i = 0, l = this.itemSize; i < l; i ++ ) {

			this.array[ index1 + i ] = attribute.array[ index2 + i ];

		}

		return this;

	}

	copyArray( array ) {

		this.array.set( array );

		return this;

	}

	applyMatrix3( m ) {

		if ( this.itemSize === 2 ) {

			for ( let i = 0, l = this.count; i < l; i ++ ) {

				_vector2$1.fromBufferAttribute( this, i );
				_vector2$1.applyMatrix3( m );

				this.setXY( i, _vector2$1.x, _vector2$1.y );

			}

		} else if ( this.itemSize === 3 ) {

			for ( let i = 0, l = this.count; i < l; i ++ ) {

				_vector$9.fromBufferAttribute( this, i );
				_vector$9.applyMatrix3( m );

				this.setXYZ( i, _vector$9.x, _vector$9.y, _vector$9.z );

			}

		}

		return this;

	}

	applyMatrix4( m ) {

		for ( let i = 0, l = this.count; i < l; i ++ ) {

			_vector$9.fromBufferAttribute( this, i );

			_vector$9.applyMatrix4( m );

			this.setXYZ( i, _vector$9.x, _vector$9.y, _vector$9.z );

		}

		return this;

	}

	applyNormalMatrix( m ) {

		for ( let i = 0, l = this.count; i < l; i ++ ) {

			_vector$9.fromBufferAttribute( this, i );

			_vector$9.applyNormalMatrix( m );

			this.setXYZ( i, _vector$9.x, _vector$9.y, _vector$9.z );

		}

		return this;

	}

	transformDirection( m ) {

		for ( let i = 0, l = this.count; i < l; i ++ ) {

			_vector$9.fromBufferAttribute( this, i );

			_vector$9.transformDirection( m );

			this.setXYZ( i, _vector$9.x, _vector$9.y, _vector$9.z );

		}

		return this;

	}

	set( value, offset = 0 ) {

		// Matching BufferAttribute constructor, do not normalize the array.
		this.array.set( value, offset );

		return this;

	}

	getComponent( index, component ) {

		let value = this.array[ index * this.itemSize + component ];

		if ( this.normalized ) value = denormalize( value, this.array );

		return value;

	}

	setComponent( index, component, value ) {

		if ( this.normalized ) value = normalize( value, this.array );

		this.array[ index * this.itemSize + component ] = value;

		return this;

	}

	getX( index ) {

		let x = this.array[ index * this.itemSize ];

		if ( this.normalized ) x = denormalize( x, this.array );

		return x;

	}

	setX( index, x ) {

		if ( this.normalized ) x = normalize( x, this.array );

		this.array[ index * this.itemSize ] = x;

		return this;

	}

	getY( index ) {

		let y = this.array[ index * this.itemSize + 1 ];

		if ( this.normalized ) y = denormalize( y, this.array );

		return y;

	}

	setY( index, y ) {

		if ( this.normalized ) y = normalize( y, this.array );

		this.array[ index * this.itemSize + 1 ] = y;

		return this;

	}

	getZ( index ) {

		let z = this.array[ index * this.itemSize + 2 ];

		if ( this.normalized ) z = denormalize( z, this.array );

		return z;

	}

	setZ( index, z ) {

		if ( this.normalized ) z = normalize( z, this.array );

		this.array[ index * this.itemSize + 2 ] = z;

		return this;

	}

	getW( index ) {

		let w = this.array[ index * this.itemSize + 3 ];

		if ( this.normalized ) w = denormalize( w, this.array );

		return w;

	}

	setW( index, w ) {

		if ( this.normalized ) w = normalize( w, this.array );

		this.array[ index * this.itemSize + 3 ] = w;

		return this;

	}

	setXY( index, x, y ) {

		index *= this.itemSize;

		if ( this.normalized ) {

			x = normalize( x, this.array );
			y = normalize( y, this.array );

		}

		this.array[ index + 0 ] = x;
		this.array[ index + 1 ] = y;

		return this;

	}

	setXYZ( index, x, y, z ) {

		index *= this.itemSize;

		if ( this.normalized ) {

			x = normalize( x, this.array );
			y = normalize( y, this.array );
			z = normalize( z, this.array );

		}

		this.array[ index + 0 ] = x;
		this.array[ index + 1 ] = y;
		this.array[ index + 2 ] = z;

		return this;

	}

	setXYZW( index, x, y, z, w ) {

		index *= this.itemSize;

		if ( this.normalized ) {

			x = normalize( x, this.array );
			y = normalize( y, this.array );
			z = normalize( z, this.array );
			w = normalize( w, this.array );

		}

		this.array[ index + 0 ] = x;
		this.array[ index + 1 ] = y;
		this.array[ index + 2 ] = z;
		this.array[ index + 3 ] = w;

		return this;

	}

	onUpload( callback ) {

		this.onUploadCallback = callback;

		return this;

	}

	clone() {

		return new this.constructor( this.array, this.itemSize ).copy( this );

	}

	toJSON() {

		const data = {
			itemSize: this.itemSize,
			type: this.array.constructor.name,
			array: Array.from( this.array ),
			normalized: this.normalized
		};

		if ( this.name !== '' ) data.name = this.name;
		if ( this.usage !== StaticDrawUsage ) data.usage = this.usage;

		return data;

	}

}

//

class Int8BufferAttribute extends BufferAttribute {

	constructor( array, itemSize, normalized ) {

		super( new Int8Array( array ), itemSize, normalized );

	}

}

class Uint8BufferAttribute extends BufferAttribute {

	constructor( array, itemSize, normalized ) {

		super( new Uint8Array( array ), itemSize, normalized );

	}

}

class Uint8ClampedBufferAttribute extends BufferAttribute {

	constructor( array, itemSize, normalized ) {

		super( new Uint8ClampedArray( array ), itemSize, normalized );

	}

}

class Int16BufferAttribute extends BufferAttribute {

	constructor( array, itemSize, normalized ) {

		super( new Int16Array( array ), itemSize, normalized );

	}

}

class Uint16BufferAttribute extends BufferAttribute {

	constructor( array, itemSize, normalized ) {

		super( new Uint16Array( array ), itemSize, normalized );

	}

}

class Int32BufferAttribute extends BufferAttribute {

	constructor( array, itemSize, normalized ) {

		super( new Int32Array( array ), itemSize, normalized );

	}

}

class Uint32BufferAttribute extends BufferAttribute {

	constructor( array, itemSize, normalized ) {

		super( new Uint32Array( array ), itemSize, normalized );

	}

}

class Float16BufferAttribute extends BufferAttribute {

	constructor( array, itemSize, normalized ) {

		super( new Uint16Array( array ), itemSize, normalized );

		this.isFloat16BufferAttribute = true;

	}

	getX( index ) {

		let x = fromHalfFloat( this.array[ index * this.itemSize ] );

		if ( this.normalized ) x = denormalize( x, this.array );

		return x;

	}

	setX( index, x ) {

		if ( this.normalized ) x = normalize( x, this.array );

		this.array[ index * this.itemSize ] = toHalfFloat( x );

		return this;

	}

	getY( index ) {

		let y = fromHalfFloat( this.array[ index * this.itemSize + 1 ] );

		if ( this.normalized ) y = denormalize( y, this.array );

		return y;

	}

	setY( index, y ) {

		if ( this.normalized ) y = normalize( y, this.array );

		this.array[ index * this.itemSize + 1 ] = toHalfFloat( y );

		return this;

	}

	getZ( index ) {

		let z = fromHalfFloat( this.array[ index * this.itemSize + 2 ] );

		if ( this.normalized ) z = denormalize( z, this.array );

		return z;

	}

	setZ( index, z ) {

		if ( this.normalized ) z = normalize( z, this.array );

		this.array[ index * this.itemSize + 2 ] = toHalfFloat( z );

		return this;

	}

	getW( index ) {

		let w = fromHalfFloat( this.array[ index * this.itemSize + 3 ] );

		if ( this.normalized ) w = denormalize( w, this.array );

		return w;

	}

	setW( index, w ) {

		if ( this.normalized ) w = normalize( w, this.array );

		this.array[ index * this.itemSize + 3 ] = toHalfFloat( w );

		return this;

	}

	setXY( index, x, y ) {

		index *= this.itemSize;

		if ( this.normalized ) {

			x = normalize( x, this.array );
			y = normalize( y, this.array );

		}

		this.array[ index + 0 ] = toHalfFloat( x );
		this.array[ index + 1 ] = toHalfFloat( y );

		return this;

	}

	setXYZ( index, x, y, z ) {

		index *= this.itemSize;

		if ( this.normalized ) {

			x = normalize( x, this.array );
			y = normalize( y, this.array );
			z = normalize( z, this.array );

		}

		this.array[ index + 0 ] = toHalfFloat( x );
		this.array[ index + 1 ] = toHalfFloat( y );
		this.array[ index + 2 ] = toHalfFloat( z );

		return this;

	}

	setXYZW( index, x, y, z, w ) {

		index *= this.itemSize;

		if ( this.normalized ) {

			x = normalize( x, this.array );
			y = normalize( y, this.array );
			z = normalize( z, this.array );
			w = normalize( w, this.array );

		}

		this.array[ index + 0 ] = toHalfFloat( x );
		this.array[ index + 1 ] = toHalfFloat( y );
		this.array[ index + 2 ] = toHalfFloat( z );
		this.array[ index + 3 ] = toHalfFloat( w );

		return this;

	}

}


class Float32BufferAttribute extends BufferAttribute {

	constructor( array, itemSize, normalized ) {

		super( new Float32Array( array ), itemSize, normalized );

	}

}

let _id$2 = 0;

const _m1$2 = /*@__PURE__*/ new Matrix4();
const _obj = /*@__PURE__*/ new Object3D();
const _offset = /*@__PURE__*/ new Vector3();
const _box$2 = /*@__PURE__*/ new Box3();
const _boxMorphTargets = /*@__PURE__*/ new Box3();
const _vector$8 = /*@__PURE__*/ new Vector3();

class BufferGeometry extends EventDispatcher {

	constructor() {

		super();

		this.isBufferGeometry = true;

		Object.defineProperty( this, 'id', { value: _id$2 ++ } );

		this.uuid = generateUUID();

		this.name = '';
		this.type = 'BufferGeometry';

		this.index = null;
		this.attributes = {};

		this.morphAttributes = {};
		this.morphTargetsRelative = false;

		this.groups = [];

		this.boundingBox = null;
		this.boundingSphere = null;

		this.drawRange = { start: 0, count: Infinity };

		this.userData = {};

	}

	getIndex() {

		return this.index;

	}

	setIndex( index ) {

		if ( Array.isArray( index ) ) {

			this.index = new ( arrayNeedsUint32( index ) ? Uint32BufferAttribute : Uint16BufferAttribute )( index, 1 );

		} else {

			this.index = index;

		}

		return this;

	}

	getAttribute( name ) {

		return this.attributes[ name ];

	}

	setAttribute( name, attribute ) {

		this.attributes[ name ] = attribute;

		return this;

	}

	deleteAttribute( name ) {

		delete this.attributes[ name ];

		return this;

	}

	hasAttribute( name ) {

		return this.attributes[ name ] !== undefined;

	}

	addGroup( start, count, materialIndex = 0 ) {

		this.groups.push( {

			start: start,
			count: count,
			materialIndex: materialIndex

		} );

	}

	clearGroups() {

		this.groups = [];

	}

	setDrawRange( start, count ) {

		this.drawRange.start = start;
		this.drawRange.count = count;

	}

	applyMatrix4( matrix ) {

		const position = this.attributes.position;

		if ( position !== undefined ) {

			position.applyMatrix4( matrix );

			position.needsUpdate = true;

		}

		const normal = this.attributes.normal;

		if ( normal !== undefined ) {

			const normalMatrix = new Matrix3().getNormalMatrix( matrix );

			normal.applyNormalMatrix( normalMatrix );

			normal.needsUpdate = true;

		}

		const tangent = this.attributes.tangent;

		if ( tangent !== undefined ) {

			tangent.transformDirection( matrix );

			tangent.needsUpdate = true;

		}

		if ( this.boundingBox !== null ) {

			this.computeBoundingBox();

		}

		if ( this.boundingSphere !== null ) {

			this.computeBoundingSphere();

		}

		return this;

	}

	applyQuaternion( q ) {

		_m1$2.makeRotationFromQuaternion( q );

		this.applyMatrix4( _m1$2 );

		return this;

	}

	rotateX( angle ) {

		// rotate geometry around world x-axis

		_m1$2.makeRotationX( angle );

		this.applyMatrix4( _m1$2 );

		return this;

	}

	rotateY( angle ) {

		// rotate geometry around world y-axis

		_m1$2.makeRotationY( angle );

		this.applyMatrix4( _m1$2 );

		return this;

	}

	rotateZ( angle ) {

		// rotate geometry around world z-axis

		_m1$2.makeRotationZ( angle );

		this.applyMatrix4( _m1$2 );

		return this;

	}

	translate( x, y, z ) {

		// translate geometry

		_m1$2.makeTranslation( x, y, z );

		this.applyMatrix4( _m1$2 );

		return this;

	}

	scale( x, y, z ) {

		// scale geometry

		_m1$2.makeScale( x, y, z );

		this.applyMatrix4( _m1$2 );

		return this;

	}

	lookAt( vector ) {

		_obj.lookAt( vector );

		_obj.updateMatrix();

		this.applyMatrix4( _obj.matrix );

		return this;

	}

	center() {

		this.computeBoundingBox();

		this.boundingBox.getCenter( _offset ).negate();

		this.translate( _offset.x, _offset.y, _offset.z );

		return this;

	}

	setFromPoints( points ) {

		const position = [];

		for ( let i = 0, l = points.length; i < l; i ++ ) {

			const point = points[ i ];
			position.push( point.x, point.y, point.z || 0 );

		}

		this.setAttribute( 'position', new Float32BufferAttribute( position, 3 ) );

		return this;

	}

	computeBoundingBox() {

		if ( this.boundingBox === null ) {

			this.boundingBox = new Box3();

		}

		const position = this.attributes.position;
		const morphAttributesPosition = this.morphAttributes.position;

		if ( position && position.isGLBufferAttribute ) {

			console.error( 'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.', this );

			this.boundingBox.set(
				new Vector3( - Infinity, - Infinity, - Infinity ),
				new Vector3( + Infinity, + Infinity, + Infinity )
			);

			return;

		}

		if ( position !== undefined ) {

			this.boundingBox.setFromBufferAttribute( position );

			// process morph attributes if present

			if ( morphAttributesPosition ) {

				for ( let i = 0, il = morphAttributesPosition.length; i < il; i ++ ) {

					const morphAttribute = morphAttributesPosition[ i ];
					_box$2.setFromBufferAttribute( morphAttribute );

					if ( this.morphTargetsRelative ) {

						_vector$8.addVectors( this.boundingBox.min, _box$2.min );
						this.boundingBox.expandByPoint( _vector$8 );

						_vector$8.addVectors( this.boundingBox.max, _box$2.max );
						this.boundingBox.expandByPoint( _vector$8 );

					} else {

						this.boundingBox.expandByPoint( _box$2.min );
						this.boundingBox.expandByPoint( _box$2.max );

					}

				}

			}

		} else {

			this.boundingBox.makeEmpty();

		}

		if ( isNaN( this.boundingBox.min.x ) || isNaN( this.boundingBox.min.y ) || isNaN( this.boundingBox.min.z ) ) {

			console.error( 'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this );

		}

	}

	computeBoundingSphere() {

		if ( this.boundingSphere === null ) {

			this.boundingSphere = new Sphere();

		}

		const position = this.attributes.position;
		const morphAttributesPosition = this.morphAttributes.position;

		if ( position && position.isGLBufferAttribute ) {

			console.error( 'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.', this );

			this.boundingSphere.set( new Vector3(), Infinity );

			return;

		}

		if ( position ) {

			// first, find the center of the bounding sphere

			const center = this.boundingSphere.center;

			_box$2.setFromBufferAttribute( position );

			// process morph attributes if present

			if ( morphAttributesPosition ) {

				for ( let i = 0, il = morphAttributesPosition.length; i < il; i ++ ) {

					const morphAttribute = morphAttributesPosition[ i ];
					_boxMorphTargets.setFromBufferAttribute( morphAttribute );

					if ( this.morphTargetsRelative ) {

						_vector$8.addVectors( _box$2.min, _boxMorphTargets.min );
						_box$2.expandByPoint( _vector$8 );

						_vector$8.addVectors( _box$2.max, _boxMorphTargets.max );
						_box$2.expandByPoint( _vector$8 );

					} else {

						_box$2.expandByPoint( _boxMorphTargets.min );
						_box$2.expandByPoint( _boxMorphTargets.max );

					}

				}

			}

			_box$2.getCenter( center );

			// second, try to find a boundingSphere with a radius smaller than the
			// boundingSphere of the boundingBox: sqrt(3) smaller in the best case

			let maxRadiusSq = 0;

			for ( let i = 0, il = position.count; i < il; i ++ ) {

				_vector$8.fromBufferAttribute( position, i );

				maxRadiusSq = Math.max( maxRadiusSq, center.distanceToSquared( _vector$8 ) );

			}

			// process morph attributes if present

			if ( morphAttributesPosition ) {

				for ( let i = 0, il = morphAttributesPosition.length; i < il; i ++ ) {

					const morphAttribute = morphAttributesPosition[ i ];
					const morphTargetsRelative = this.morphTargetsRelative;

					for ( let j = 0, jl = morphAttribute.count; j < jl; j ++ ) {

						_vector$8.fromBufferAttribute( morphAttribute, j );

						if ( morphTargetsRelative ) {

							_offset.fromBufferAttribute( position, j );
							_vector$8.add( _offset );

						}

						maxRadiusSq = Math.max( maxRadiusSq, center.distanceToSquared( _vector$8 ) );

					}

				}

			}

			this.boundingSphere.radius = Math.sqrt( maxRadiusSq );

			if ( isNaN( this.boundingSphere.radius ) ) {

				console.error( 'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this );

			}

		}

	}

	computeTangents() {

		const index = this.index;
		const attributes = this.attributes;

		// based on http://www.terathon.com/code/tangent.html
		// (per vertex tangents)

		if ( index === null ||
			 attributes.position === undefined ||
			 attributes.normal === undefined ||
			 attributes.uv === undefined ) {

			console.error( 'THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)' );
			return;

		}

		const positionAttribute = attributes.position;
		const normalAttribute = attributes.normal;
		const uvAttribute = attributes.uv;

		if ( this.hasAttribute( 'tangent' ) === false ) {

			this.setAttribute( 'tangent', new BufferAttribute( new Float32Array( 4 * positionAttribute.count ), 4 ) );

		}

		const tangentAttribute = this.getAttribute( 'tangent' );

		const tan1 = [], tan2 = [];

		for ( let i = 0; i < positionAttribute.count; i ++ ) {

			tan1[ i ] = new Vector3();
			tan2[ i ] = new Vector3();

		}

		const vA = new Vector3(),
			vB = new Vector3(),
			vC = new Vector3(),

			uvA = new Vector2(),
			uvB = new Vector2(),
			uvC = new Vector2(),

			sdir = new Vector3(),
			tdir = new Vector3();

		function handleTriangle( a, b, c ) {

			vA.fromBufferAttribute( positionAttribute, a );
			vB.fromBufferAttribute( positionAttribute, b );
			vC.fromBufferAttribute( positionAttribute, c );

			uvA.fromBufferAttribute( uvAttribute, a );
			uvB.fromBufferAttribute( uvAttribute, b );
			uvC.fromBufferAttribute( uvAttribute, c );

			vB.sub( vA );
			vC.sub( vA );

			uvB.sub( uvA );
			uvC.sub( uvA );

			const r = 1.0 / ( uvB.x * uvC.y - uvC.x * uvB.y );

			// silently ignore degenerate uv triangles having coincident or colinear vertices

			if ( ! isFinite( r ) ) return;

			sdir.copy( vB ).multiplyScalar( uvC.y ).addScaledVector( vC, - uvB.y ).multiplyScalar( r );
			tdir.copy( vC ).multiplyScalar( uvB.x ).addScaledVector( vB, - uvC.x ).multiplyScalar( r );

			tan1[ a ].add( sdir );
			tan1[ b ].add( sdir );
			tan1[ c ].add( sdir );

			tan2[ a ].add( tdir );
			tan2[ b ].add( tdir );
			tan2[ c ].add( tdir );

		}

		let groups = this.groups;

		if ( groups.length === 0 ) {

			groups = [ {
				start: 0,
				count: index.count
			} ];

		}

		for ( let i = 0, il = groups.length; i < il; ++ i ) {

			const group = groups[ i ];

			const start = group.start;
			const count = group.count;

			for ( let j = start, jl = start + count; j < jl; j += 3 ) {

				handleTriangle(
					index.getX( j + 0 ),
					index.getX( j + 1 ),
					index.getX( j + 2 )
				);

			}

		}

		const tmp = new Vector3(), tmp2 = new Vector3();
		const n = new Vector3(), n2 = new Vector3();

		function handleVertex( v ) {

			n.fromBufferAttribute( normalAttribute, v );
			n2.copy( n );

			const t = tan1[ v ];

			// Gram-Schmidt orthogonalize

			tmp.copy( t );
			tmp.sub( n.multiplyScalar( n.dot( t ) ) ).normalize();

			// Calculate handedness

			tmp2.crossVectors( n2, t );
			const test = tmp2.dot( tan2[ v ] );
			const w = ( test < 0.0 ) ? - 1.0 : 1.0;

			tangentAttribute.setXYZW( v, tmp.x, tmp.y, tmp.z, w );

		}

		for ( let i = 0, il = groups.length; i < il; ++ i ) {

			const group = groups[ i ];

			const start = group.start;
			const count = group.count;

			for ( let j = start, jl = start + count; j < jl; j += 3 ) {

				handleVertex( index.getX( j + 0 ) );
				handleVertex( index.getX( j + 1 ) );
				handleVertex( index.getX( j + 2 ) );

			}

		}

	}

	computeVertexNormals() {

		const index = this.index;
		const positionAttribute = this.getAttribute( 'position' );

		if ( positionAttribute !== undefined ) {

			let normalAttribute = this.getAttribute( 'normal' );

			if ( normalAttribute === undefined ) {

				normalAttribute = new BufferAttribute( new Float32Array( positionAttribute.count * 3 ), 3 );
				this.setAttribute( 'normal', normalAttribute );

			} else {

				// reset existing normals to zero

				for ( let i = 0, il = normalAttribute.count; i < il; i ++ ) {

					normalAttribute.setXYZ( i, 0, 0, 0 );

				}

			}

			const pA = new Vector3(), pB = new Vector3(), pC = new Vector3();
			const nA = new Vector3(), nB = new Vector3(), nC = new Vector3();
			const cb = new Vector3(), ab = new Vector3();

			// indexed elements

			if ( index ) {

				for ( let i = 0, il = index.count; i < il; i += 3 ) {

					const vA = index.getX( i + 0 );
					const vB = index.getX( i + 1 );
					const vC = index.getX( i + 2 );

					pA.fromBufferAttribute( positionAttribute, vA );
					pB.fromBufferAttribute( positionAttribute, vB );
					pC.fromBufferAttribute( positionAttribute, vC );

					cb.subVectors( pC, pB );
					ab.subVectors( pA, pB );
					cb.cross( ab );

					nA.fromBufferAttribute( normalAttribute, vA );
					nB.fromBufferAttribute( normalAttribute, vB );
					nC.fromBufferAttribute( normalAttribute, vC );

					nA.add( cb );
					nB.add( cb );
					nC.add( cb );

					normalAttribute.setXYZ( vA, nA.x, nA.y, nA.z );
					normalAttribute.setXYZ( vB, nB.x, nB.y, nB.z );
					normalAttribute.setXYZ( vC, nC.x, nC.y, nC.z );

				}

			} else {

				// non-indexed elements (unconnected triangle soup)

				for ( let i = 0, il = positionAttribute.count; i < il; i += 3 ) {

					pA.fromBufferAttribute( positionAttribute, i + 0 );
					pB.fromBufferAttribute( positionAttribute, i + 1 );
					pC.fromBufferAttribute( positionAttribute, i + 2 );

					cb.subVectors( pC, pB );
					ab.subVectors( pA, pB );
					cb.cross( ab );

					normalAttribute.setXYZ( i + 0, cb.x, cb.y, cb.z );
					normalAttribute.setXYZ( i + 1, cb.x, cb.y, cb.z );
					normalAttribute.setXYZ( i + 2, cb.x, cb.y, cb.z );

				}

			}

			this.normalizeNormals();

			normalAttribute.needsUpdate = true;

		}

	}

	normalizeNormals() {

		const normals = this.attributes.normal;

		for ( let i = 0, il = normals.count; i < il; i ++ ) {

			_vector$8.fromBufferAttribute( normals, i );

			_vector$8.normalize();

			normals.setXYZ( i, _vector$8.x, _vector$8.y, _vector$8.z );

		}

	}

	toNonIndexed() {

		function convertBufferAttribute( attribute, indices ) {

			const array = attribute.array;
			const itemSize = attribute.itemSize;
			const normalized = attribute.normalized;

			const array2 = new array.constructor( indices.length * itemSize );

			let index = 0, index2 = 0;

			for ( let i = 0, l = indices.length; i < l; i ++ ) {

				if ( attribute.isInterleavedBufferAttribute ) {

					index = indices[ i ] * attribute.data.stride + attribute.offset;

				} else {

					index = indices[ i ] * itemSize;

				}

				for ( let j = 0; j < itemSize; j ++ ) {

					array2[ index2 ++ ] = array[ index ++ ];

				}

			}

			return new BufferAttribute( array2, itemSize, normalized );

		}

		//

		if ( this.index === null ) {

			console.warn( 'THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.' );
			return this;

		}

		const geometry2 = new BufferGeometry();

		const indices = this.index.array;
		const attributes = this.attributes;

		// attributes

		for ( const name in attributes ) {

			const attribute = attributes[ name ];

			const newAttribute = convertBufferAttribute( attribute, indices );

			geometry2.setAttribute( name, newAttribute );

		}

		// morph attributes

		const morphAttributes = this.morphAttributes;

		for ( const name in morphAttributes ) {

			const morphArray = [];
			const morphAttribute = morphAttributes[ name ]; // morphAttribute: array of Float32BufferAttributes

			for ( let i = 0, il = morphAttribute.length; i < il; i ++ ) {

				const attribute = morphAttribute[ i ];

				const newAttribute = convertBufferAttribute( attribute, indices );

				morphArray.push( newAttribute );

			}

			geometry2.morphAttributes[ name ] = morphArray;

		}

		geometry2.morphTargetsRelative = this.morphTargetsRelative;

		// groups

		const groups = this.groups;

		for ( let i = 0, l = groups.length; i < l; i ++ ) {

			const group = groups[ i ];
			geometry2.addGroup( group.start, group.count, group.materialIndex );

		}

		return geometry2;

	}

	toJSON() {

		const data = {
			metadata: {
				version: 4.6,
				type: 'BufferGeometry',
				generator: 'BufferGeometry.toJSON'
			}
		};

		// standard BufferGeometry serialization

		data.uuid = this.uuid;
		data.type = this.type;
		if ( this.name !== '' ) data.name = this.name;
		if ( Object.keys( this.userData ).length > 0 ) data.userData = this.userData;

		if ( this.parameters !== undefined ) {

			const parameters = this.parameters;

			for ( const key in parameters ) {

				if ( parameters[ key ] !== undefined ) data[ key ] = parameters[ key ];

			}

			return data;

		}

		// for simplicity the code assumes attributes are not shared across geometries, see #15811

		data.data = { attributes: {} };

		const index = this.index;

		if ( index !== null ) {

			data.data.index = {
				type: index.array.constructor.name,
				array: Array.prototype.slice.call( index.array )
			};

		}

		const attributes = this.attributes;

		for ( const key in attributes ) {

			const attribute = attributes[ key ];

			data.data.attributes[ key ] = attribute.toJSON( data.data );

		}

		const morphAttributes = {};
		let hasMorphAttributes = false;

		for ( const key in this.morphAttributes ) {

			const attributeArray = this.morphAttributes[ key ];

			const array = [];

			for ( let i = 0, il = attributeArray.length; i < il; i ++ ) {

				const attribute = attributeArray[ i ];

				array.push( attribute.toJSON( data.data ) );

			}

			if ( array.length > 0 ) {

				morphAttributes[ key ] = array;

				hasMorphAttributes = true;

			}

		}

		if ( hasMorphAttributes ) {

			data.data.morphAttributes = morphAttributes;
			data.data.morphTargetsRelative = this.morphTargetsRelative;

		}

		const groups = this.groups;

		if ( groups.length > 0 ) {

			data.data.groups = JSON.parse( JSON.stringify( groups ) );

		}

		const boundingSphere = this.boundingSphere;

		if ( boundingSphere !== null ) {

			data.data.boundingSphere = {
				center: boundingSphere.center.toArray(),
				radius: boundingSphere.radius
			};

		}

		return data;

	}

	clone() {

		return new this.constructor().copy( this );

	}

	copy( source ) {

		// reset

		this.index = null;
		this.attributes = {};
		this.morphAttributes = {};
		this.groups = [];
		this.boundingBox = null;
		this.boundingSphere = null;

		// used for storing cloned, shared data

		const data = {};

		// name

		this.name = source.name;

		// index

		const index = source.index;

		if ( index !== null ) {

			this.setIndex( index.clone( data ) );

		}

		// attributes

		const attributes = source.attributes;

		for ( const name in attributes ) {

			const attribute = attributes[ name ];
			this.setAttribute( name, attribute.clone( data ) );

		}

		// morph attributes

		const morphAttributes = source.morphAttributes;

		for ( const name in morphAttributes ) {

			const array = [];
			const morphAttribute = morphAttributes[ name ]; // morphAttribute: array of Float32BufferAttributes

			for ( let i = 0, l = morphAttribute.length; i < l; i ++ ) {

				array.push( morphAttribute[ i ].clone( data ) );

			}

			this.morphAttributes[ name ] = array;

		}

		this.morphTargetsRelative = source.morphTargetsRelative;

		// groups

		const groups = source.groups;

		for ( let i = 0, l = groups.length; i < l; i ++ ) {

			const group = groups[ i ];
			this.addGroup( group.start, group.count, group.materialIndex );

		}

		// bounding box

		const boundingBox = source.boundingBox;

		if ( boundingBox !== null ) {

			this.boundingBox = boundingBox.clone();

		}

		// bounding sphere

		const boundingSphere = source.boundingSphere;

		if ( boundingSphere !== null ) {

			this.boundingSphere = boundingSphere.clone();

		}

		// draw range

		this.drawRange.start = source.drawRange.start;
		this.drawRange.count = source.drawRange.count;

		// user data

		this.userData = source.userData;

		return this;

	}

	dispose() {

		this.dispatchEvent( { type: 'dispose' } );

	}

}

const _inverseMatrix$3 = /*@__PURE__*/ new Matrix4();
const _ray$3 = /*@__PURE__*/ new Ray();
const _sphere$6 = /*@__PURE__*/ new Sphere();
const _sphereHitAt = /*@__PURE__*/ new Vector3();

const _vA$1 = /*@__PURE__*/ new Vector3();
const _vB$1 = /*@__PURE__*/ new Vector3();
const _vC$1 = /*@__PURE__*/ new Vector3();

const _tempA = /*@__PURE__*/ new Vector3();
const _morphA = /*@__PURE__*/ new Vector3();

const _uvA$1 = /*@__PURE__*/ new Vector2();
const _uvB$1 = /*@__PURE__*/ new Vector2();
const _uvC$1 = /*@__PURE__*/ new Vector2();

const _normalA = /*@__PURE__*/ new Vector3();
const _normalB = /*@__PURE__*/ new Vector3();
const _normalC = /*@__PURE__*/ new Vector3();

const _intersectionPoint = /*@__PURE__*/ new Vector3();
const _intersectionPointWorld = /*@__PURE__*/ new Vector3();

class Mesh extends Object3D {

	constructor( geometry = new BufferGeometry(), material = new MeshBasicMaterial() ) {

		super();

		this.isMesh = true;

		this.type = 'Mesh';

		this.geometry = geometry;
		this.material = material;

		this.updateMorphTargets();

	}

	copy( source, recursive ) {

		super.copy( source, recursive );

		if ( source.morphTargetInfluences !== undefined ) {

			this.morphTargetInfluences = source.morphTargetInfluences.slice();

		}

		if ( source.morphTargetDictionary !== undefined ) {

			this.morphTargetDictionary = Object.assign( {}, source.morphTargetDictionary );

		}

		this.material = Array.isArray( source.material ) ? source.material.slice() : source.material;
		this.geometry = source.geometry;

		return this;

	}

	updateMorphTargets() {

		const geometry = this.geometry;

		const morphAttributes = geometry.morphAttributes;
		const keys = Object.keys( morphAttributes );

		if ( keys.length > 0 ) {

			const morphAttribute = morphAttributes[ keys[ 0 ] ];

			if ( morphAttribute !== undefined ) {

				this.morphTargetInfluences = [];
				this.morphTargetDictionary = {};

				for ( let m = 0, ml = morphAttribute.length; m < ml; m ++ ) {

					const name = morphAttribute[ m ].name || String( m );

					this.morphTargetInfluences.push( 0 );
					this.morphTargetDictionary[ name ] = m;

				}

			}

		}

	}

	getVertexPosition( index, target ) {

		const geometry = this.geometry;
		const position = geometry.attributes.position;
		const morphPosition = geometry.morphAttributes.position;
		const morphTargetsRelative = geometry.morphTargetsRelative;

		target.fromBufferAttribute( position, index );

		const morphInfluences = this.morphTargetInfluences;

		if ( morphPosition && morphInfluences ) {

			_morphA.set( 0, 0, 0 );

			for ( let i = 0, il = morphPosition.length; i < il; i ++ ) {

				const influence = morphInfluences[ i ];
				const morphAttribute = morphPosition[ i ];

				if ( influence === 0 ) continue;

				_tempA.fromBufferAttribute( morphAttribute, index );

				if ( morphTargetsRelative ) {

					_morphA.addScaledVector( _tempA, influence );

				} else {

					_morphA.addScaledVector( _tempA.sub( target ), influence );

				}

			}

			target.add( _morphA );

		}

		return target;

	}

	raycast( raycaster, intersects ) {

		const geometry = this.geometry;
		const material = this.material;
		const matrixWorld = this.matrixWorld;

		if ( material === undefined ) return;

		// test with bounding sphere in world space

		if ( geometry.boundingSphere === null ) geometry.computeBoundingSphere();

		_sphere$6.copy( geometry.boundingSphere );
		_sphere$6.applyMatrix4( matrixWorld );

		// check distance from ray origin to bounding sphere

		_ray$3.copy( raycaster.ray ).recast( raycaster.near );

		if ( _sphere$6.containsPoint( _ray$3.origin ) === false ) {

			if ( _ray$3.intersectSphere( _sphere$6, _sphereHitAt ) === null ) return;

			if ( _ray$3.origin.distanceToSquared( _sphereHitAt ) > ( raycaster.far - raycaster.near ) ** 2 ) return;

		}

		// convert ray to local space of mesh

		_inverseMatrix$3.copy( matrixWorld ).invert();
		_ray$3.copy( raycaster.ray ).applyMatrix4( _inverseMatrix$3 );

		// test with bounding box in local space

		if ( geometry.boundingBox !== null ) {

			if ( _ray$3.intersectsBox( geometry.boundingBox ) === false ) return;

		}

		// test for intersections with geometry

		this._computeIntersections( raycaster, intersects, _ray$3 );

	}

	_computeIntersections( raycaster, intersects, rayLocalSpace ) {

		let intersection;

		const geometry = this.geometry;
		const material = this.material;

		const index = geometry.index;
		const position = geometry.attributes.position;
		const uv = geometry.attributes.uv;
		const uv1 = geometry.attributes.uv1;
		const normal = geometry.attributes.normal;
		const groups = geometry.groups;
		const drawRange = geometry.drawRange;

		if ( index !== null ) {

			// indexed buffer geometry

			if ( Array.isArray( material ) ) {

				for ( let i = 0, il = groups.length; i < il; i ++ ) {

					const group = groups[ i ];
					const groupMaterial = material[ group.materialIndex ];

					const start = Math.max( group.start, drawRange.start );
					const end = Math.min( index.count, Math.min( ( group.start + group.count ), ( drawRange.start + drawRange.count ) ) );

					for ( let j = start, jl = end; j < jl; j += 3 ) {

						const a = index.getX( j );
						const b = index.getX( j + 1 );
						const c = index.getX( j + 2 );

						intersection = checkGeometryIntersection( this, groupMaterial, raycaster, rayLocalSpace, uv, uv1, normal, a, b, c );

						if ( intersection ) {

							intersection.faceIndex = Math.floor( j / 3 ); // triangle number in indexed buffer semantics
							intersection.face.materialIndex = group.materialIndex;
							intersects.push( intersection );

						}

					}

				}

			} else {

				const start = Math.max( 0, drawRange.start );
				const end = Math.min( index.count, ( drawRange.start + drawRange.count ) );

				for ( let i = start, il = end; i < il; i += 3 ) {

					const a = index.getX( i );
					const b = index.getX( i + 1 );
					const c = index.getX( i + 2 );

					intersection = checkGeometryIntersection( this, material, raycaster, rayLocalSpace, uv, uv1, normal, a, b, c );

					if ( intersection ) {

						intersection.faceIndex = Math.floor( i / 3 ); // triangle number in indexed buffer semantics
						intersects.push( intersection );

					}

				}

			}

		} else if ( position !== undefined ) {

			// non-indexed buffer geometry

			if ( Array.isArray( material ) ) {

				for ( let i = 0, il = groups.length; i < il; i ++ ) {

					const group = groups[ i ];
					const groupMaterial = material[ group.materialIndex ];

					const start = Math.max( group.start, drawRange.start );
					const end = Math.min( position.count, Math.min( ( group.start + group.count ), ( drawRange.start + drawRange.count ) ) );

					for ( let j = start, jl = end; j < jl; j += 3 ) {

						const a = j;
						const b = j + 1;
						const c = j + 2;

						intersection = checkGeometryIntersection( this, groupMaterial, raycaster, rayLocalSpace, uv, uv1, normal, a, b, c );

						if ( intersection ) {

							intersection.faceIndex = Math.floor( j / 3 ); // triangle number in non-indexed buffer semantics
							intersection.face.materialIndex = group.materialIndex;
							intersects.push( intersection );

						}

					}

				}

			} else {

				const start = Math.max( 0, drawRange.start );
				const end = Math.min( position.count, ( drawRange.start + drawRange.count ) );

				for ( let i = start, il = end; i < il; i += 3 ) {

					const a = i;
					const b = i + 1;
					const c = i + 2;

					intersection = checkGeometryIntersection( this, material, raycaster, rayLocalSpace, uv, uv1, normal, a, b, c );

					if ( intersection ) {

						intersection.faceIndex = Math.floor( i / 3 ); // triangle number in non-indexed buffer semantics
						intersects.push( intersection );

					}

				}

			}

		}

	}

}

function checkIntersection$1( object, material, raycaster, ray, pA, pB, pC, point ) {

	let intersect;

	if ( material.side === BackSide ) {

		intersect = ray.intersectTriangle( pC, pB, pA, true, point );

	} else {

		intersect = ray.intersectTriangle( pA, pB, pC, ( material.side === FrontSide ), point );

	}

	if ( intersect === null ) return null;

	_intersectionPointWorld.copy( point );
	_intersectionPointWorld.applyMatrix4( object.matrixWorld );

	const distance = raycaster.ray.origin.distanceTo( _intersectionPointWorld );

	if ( distance < raycaster.near || distance > raycaster.far ) return null;

	return {
		distance: distance,
		point: _intersectionPointWorld.clone(),
		object: object
	};

}

function checkGeometryIntersection( object, material, raycaster, ray, uv, uv1, normal, a, b, c ) {

	object.getVertexPosition( a, _vA$1 );
	object.getVertexPosition( b, _vB$1 );
	object.getVertexPosition( c, _vC$1 );

	const intersection = checkIntersection$1( object, material, raycaster, ray, _vA$1, _vB$1, _vC$1, _intersectionPoint );

	if ( intersection ) {

		if ( uv ) {

			_uvA$1.fromBufferAttribute( uv, a );
			_uvB$1.fromBufferAttribute( uv, b );
			_uvC$1.fromBufferAttribute( uv, c );

			intersection.uv = Triangle.getInterpolation( _intersectionPoint, _vA$1, _vB$1, _vC$1, _uvA$1, _uvB$1, _uvC$1, new Vector2() );

		}

		if ( uv1 ) {

			_uvA$1.fromBufferAttribute( uv1, a );
			_uvB$1.fromBufferAttribute( uv1, b );
			_uvC$1.fromBufferAttribute( uv1, c );

			intersection.uv1 = Triangle.getInterpolation( _intersectionPoint, _vA$1, _vB$1, _vC$1, _uvA$1, _uvB$1, _uvC$1, new Vector2() );

		}

		if ( normal ) {

			_normalA.fromBufferAttribute( normal, a );
			_normalB.fromBufferAttribute( normal, b );
			_normalC.fromBufferAttribute( normal, c );

			intersection.normal = Triangle.getInterpolation( _intersectionPoint, _vA$1, _vB$1, _vC$1, _normalA, _normalB, _normalC, new Vector3() );

			if ( intersection.normal.dot( ray.direction ) > 0 ) {

				intersection.normal.multiplyScalar( - 1 );

			}

		}

		const face = {
			a: a,
			b: b,
			c: c,
			normal: new Vector3(),
			materialIndex: 0
		};

		Triangle.getNormal( _vA$1, _vB$1, _vC$1, face.normal );

		intersection.face = face;

	}

	return intersection;

}

class BoxGeometry extends BufferGeometry {

	constructor( width = 1, height = 1, depth = 1, widthSegments = 1, heightSegments = 1, depthSegments = 1 ) {

		super();

		this.type = 'BoxGeometry';

		this.parameters = {
			width: width,
			height: height,
			depth: depth,
			widthSegments: widthSegments,
			heightSegments: heightSegments,
			depthSegments: depthSegments
		};

		const scope = this;

		// segments

		widthSegments = Math.floor( widthSegments );
		heightSegments = Math.floor( heightSegments );
		depthSegments = Math.floor( depthSegments );

		// buffers

		const indices = [];
		const vertices = [];
		const normals = [];
		const uvs = [];

		// helper variables

		let numberOfVertices = 0;
		let groupStart = 0;

		// build each side of the box geometry

		buildPlane( 'z', 'y', 'x', - 1, - 1, depth, height, width, depthSegments, heightSegments, 0 ); // px
		buildPlane( 'z', 'y', 'x', 1, - 1, depth, height, - width, depthSegments, heightSegments, 1 ); // nx
		buildPlane( 'x', 'z', 'y', 1, 1, width, depth, height, widthSegments, depthSegments, 2 ); // py
		buildPlane( 'x', 'z', 'y', 1, - 1, width, depth, - height, widthSegments, depthSegments, 3 ); // ny
		buildPlane( 'x', 'y', 'z', 1, - 1, width, height, depth, widthSegments, heightSegments, 4 ); // pz
		buildPlane( 'x', 'y', 'z', - 1, - 1, width, height, - depth, widthSegments, heightSegments, 5 ); // nz

		// build geometry

		this.setIndex( indices );
		this.setAttribute( 'position', new Float32BufferAttribute( vertices, 3 ) );
		this.setAttribute( 'normal', new Float32BufferAttribute( normals, 3 ) );
		this.setAttribute( 'uv', new Float32BufferAttribute( uvs, 2 ) );

		function buildPlane( u, v, w, udir, vdir, width, height, depth, gridX, gridY, materialIndex ) {

			const segmentWidth = width / gridX;
			const segmentHeight = height / gridY;

			const widthHalf = width / 2;
			const heightHalf = height / 2;
			const depthHalf = depth / 2;

			const gridX1 = gridX + 1;
			const gridY1 = gridY + 1;

			let vertexCounter = 0;
			let groupCount = 0;

			const vector = new Vector3();

			// generate vertices, normals and uvs

			for ( let iy = 0; iy < gridY1; iy ++ ) {

				const y = iy * segmentHeight - heightHalf;

				for ( let ix = 0; ix < gridX1; ix ++ ) {

					const x = ix * segmentWidth - widthHalf;

					// set values to correct vector component

					vector[ u ] = x * udir;
					vector[ v ] = y * vdir;
					vector[ w ] = depthHalf;

					// now apply vector to vertex buffer

					vertices.push( vector.x, vector.y, vector.z );

					// set values to correct vector component

					vector[ u ] = 0;
					vector[ v ] = 0;
					vector[ w ] = depth > 0 ? 1 : - 1;

					// now apply vector to normal buffer

					normals.push( vector.x, vector.y, vector.z );

					// uvs

					uvs.push( ix / gridX );
					uvs.push( 1 - ( iy / gridY ) );

					// counters

					vertexCounter += 1;

				}

			}

			// indices

			// 1. you need three indices to draw a single face
			// 2. a single segment consists of two faces
			// 3. so we need to generate six (2*3) indices per segment

			for ( let iy = 0; iy < gridY; iy ++ ) {

				for ( let ix = 0; ix < gridX; ix ++ ) {

					const a = numberOfVertices + ix + gridX1 * iy;
					const b = numberOfVertices + ix + gridX1 * ( iy + 1 );
					const c = numberOfVertices + ( ix + 1 ) + gridX1 * ( iy + 1 );
					const d = numberOfVertices + ( ix + 1 ) + gridX1 * iy;

					// faces

					indices.push( a, b, d );
					indices.push( b, c, d );

					// increase counter

					groupCount += 6;

				}

			}

			// add a group to the geometry. this will ensure multi material support

			scope.addGroup( groupStart, groupCount, materialIndex );

			// calculate new start value for groups

			groupStart += groupCount;

			// update total number of vertices

			numberOfVertices += vertexCounter;

		}

	}

	copy( source ) {

		super.copy( source );

		this.parameters = Object.assign( {}, source.parameters );

		return this;

	}

	static fromJSON( data ) {

		return new BoxGeometry( data.width, data.height, data.depth, data.widthSegments, data.heightSegments, data.depthSegments );

	}

}

/**
 * Uniform Utilities
 */

function cloneUniforms( src ) {

	const dst = {};

	for ( const u in src ) {

		dst[ u ] = {};

		for ( const p in src[ u ] ) {

			const property = src[ u ][ p ];

			if ( property && ( property.isColor ||
				property.isMatrix3 || property.isMatrix4 ||
				property.isVector2 || property.isVector3 || property.isVector4 ||
				property.isTexture || property.isQuaternion ) ) {

				if ( property.isRenderTargetTexture ) {

					console.warn( 'UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().' );
					dst[ u ][ p ] = null;

				} else {

					dst[ u ][ p ] = property.clone();

				}

			} else if ( Array.isArray( property ) ) {

				dst[ u ][ p ] = property.slice();

			} else {

				dst[ u ][ p ] = property;

			}

		}

	}

	return dst;

}

function mergeUniforms( uniforms ) {

	const merged = {};

	for ( let u = 0; u < uniforms.length; u ++ ) {

		const tmp = cloneUniforms( uniforms[ u ] );

		for ( const p in tmp ) {

			merged[ p ] = tmp[ p ];

		}

	}

	return merged;

}

function cloneUniformsGroups( src ) {

	const dst = [];

	for ( let u = 0; u < src.length; u ++ ) {

		dst.push( src[ u ].clone() );

	}

	return dst;

}

function getUnlitUniformColorSpace( renderer ) {

	const currentRenderTarget = renderer.getRenderTarget();

	if ( currentRenderTarget === null ) {

		// https://github.com/mrdoob/three.js/pull/23937#issuecomment-1111067398
		return renderer.outputColorSpace;

	}

	// https://github.com/mrdoob/three.js/issues/27868
	if ( currentRenderTarget.isXRRenderTarget === true ) {

		return currentRenderTarget.texture.colorSpace;

	}

	return ColorManagement.workingColorSpace;

}

// Legacy

const UniformsUtils = { clone: cloneUniforms, merge: mergeUniforms };

var default_vertex = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";

var default_fragment = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";

class ShaderMaterial extends Material {

	constructor( parameters ) {

		super();

		this.isShaderMaterial = true;

		this.type = 'ShaderMaterial';

		this.defines = {};
		this.uniforms = {};
		this.uniformsGroups = [];

		this.vertexShader = default_vertex;
		this.fragmentShader = default_fragment;

		this.linewidth = 1;

		this.wireframe = false;
		this.wireframeLinewidth = 1;

		this.fog = false; // set to use scene fog
		this.lights = false; // set to use scene lights
		this.clipping = false; // set to use user-defined clipping planes

		this.forceSinglePass = true;

		this.extensions = {
			clipCullDistance: false, // set to use vertex shader clipping
			multiDraw: false // set to use vertex shader multi_draw / enable gl_DrawID
		};

		// When rendered geometry doesn't include these attributes but the material does,
		// use these default values in WebGL. This avoids errors when buffer data is missing.
		this.defaultAttributeValues = {
			'color': [ 1, 1, 1 ],
			'uv': [ 0, 0 ],
			'uv1': [ 0, 0 ]
		};

		this.index0AttributeName = undefined;
		this.uniformsNeedUpdate = false;

		this.glslVersion = null;

		if ( parameters !== undefined ) {

			this.setValues( parameters );

		}

	}

	copy( source ) {

		super.copy( source );

		this.fragmentShader = source.fragmentShader;
		this.vertexShader = source.vertexShader;

		this.uniforms = cloneUniforms( source.uniforms );
		this.uniformsGroups = cloneUniformsGroups( source.uniformsGroups );

		this.defines = Object.assign( {}, source.defines );

		this.wireframe = source.wireframe;
		this.wireframeLinewidth = source.wireframeLinewidth;

		this.fog = source.fog;
		this.lights = source.lights;
		this.clipping = source.clipping;

		this.extensions = Object.assign( {}, source.extensions );

		this.glslVersion = source.glslVersion;

		return this;

	}

	toJSON( meta ) {

		const data = super.toJSON( meta );

		data.glslVersion = this.glslVersion;
		data.uniforms = {};

		for ( const name in this.uniforms ) {

			const uniform = this.uniforms[ name ];
			const value = uniform.value;

			if ( value && value.isTexture ) {

				data.uniforms[ name ] = {
					type: 't',
					value: value.toJSON( meta ).uuid
				};

			} else if ( value && value.isColor ) {

				data.uniforms[ name ] = {
					type: 'c',
					value: value.getHex()
				};

			} else if ( value && value.isVector2 ) {

				data.uniforms[ name ] = {
					type: 'v2',
					value: value.toArray()
				};

			} else if ( value && value.isVector3 ) {

				data.uniforms[ name ] = {
					type: 'v3',
					value: value.toArray()
				};

			} else if ( value && value.isVector4 ) {

				data.uniforms[ name ] = {
					type: 'v4',
					value: value.toArray()
				};

			} else if ( value && value.isMatrix3 ) {

				data.uniforms[ name ] = {
					type: 'm3',
					value: value.toArray()
				};

			} else if ( value && value.isMatrix4 ) {

				data.uniforms[ name ] = {
					type: 'm4',
					value: value.toArray()
				};

			} else {

				data.uniforms[ name ] = {
					value: value
				};

				// note: the array variants v2v, v3v, v4v, m4v and tv are not supported so far

			}

		}

		if ( Object.keys( this.defines ).length > 0 ) data.defines = this.defines;

		data.vertexShader = this.vertexShader;
		data.fragmentShader = this.fragmentShader;

		data.lights = this.lights;
		data.clipping = this.clipping;

		const extensions = {};

		for ( const key in this.extensions ) {

			if ( this.extensions[ key ] === true ) extensions[ key ] = true;

		}

		if ( Object.keys( extensions ).length > 0 ) data.extensions = extensions;

		return data;

	}

}

class Camera extends Object3D {

	constructor() {

		super();

		this.isCamera = true;

		this.type = 'Camera';

		this.matrixWorldInverse = new Matrix4();

		this.projectionMatrix = new Matrix4();
		this.projectionMatrixInverse = new Matrix4();

		this.coordinateSystem = WebGLCoordinateSystem;

	}

	copy( source, recursive ) {

		super.copy( source, recursive );

		this.matrixWorldInverse.copy( source.matrixWorldInverse );

		this.projectionMatrix.copy( source.projectionMatrix );
		this.projectionMatrixInverse.copy( source.projectionMatrixInverse );

		this.coordinateSystem = source.coordinateSystem;

		return this;

	}

	getWorldDirection( target ) {

		return super.getWorldDirection( target ).negate();

	}

	updateMatrixWorld( force ) {

		super.updateMatrixWorld( force );

		this.matrixWorldInverse.copy( this.matrixWorld ).invert();

	}

	updateWorldMatrix( updateParents, updateChildren ) {

		super.updateWorldMatrix( updateParents, updateChildren );

		this.matrixWorldInverse.copy( this.matrixWorld ).invert();

	}

	clone() {

		return new this.constructor().copy( this );

	}

}

const _v3$1 = /*@__PURE__*/ new Vector3();
const _minTarget = /*@__PURE__*/ new Vector2();
const _maxTarget = /*@__PURE__*/ new Vector2();


class PerspectiveCamera extends Camera {

	constructor( fov = 50, aspect = 1, near = 0.1, far = 2000 ) {

		super();

		this.isPerspectiveCamera = true;

		this.type = 'PerspectiveCamera';

		this.fov = fov;
		this.zoom = 1;

		this.near = near;
		this.far = far;
		this.focus = 10;

		this.aspect = aspect;
		this.view = null;

		this.filmGauge = 35;	// width of the film (default in millimeters)
		this.filmOffset = 0;	// horizontal film offset (same unit as gauge)

		this.updateProjectionMatrix();

	}

	copy( source, recursive ) {

		super.copy( source, recursive );

		this.fov = source.fov;
		this.zoom = source.zoom;

		this.near = source.near;
		this.far = source.far;
		this.focus = source.focus;

		this.aspect = source.aspect;
		this.view = source.view === null ? null : Object.assign( {}, source.view );

		this.filmGauge = source.filmGauge;
		this.filmOffset = source.filmOffset;

		return this;

	}

	/**
	 * Sets the FOV by focal length in respect to the current .filmGauge.
	 *
	 * The default film gauge is 35, so that the focal length can be specified for
	 * a 35mm (full frame) camera.
	 *
	 * Values for focal length and film gauge must have the same unit.
	 */
	setFocalLength( focalLength ) {

		/** see {@link http://www.bobatkins.com/photography/technical/field_of_view.html} */
		const vExtentSlope = 0.5 * this.getFilmHeight() / focalLength;

		this.fov = RAD2DEG * 2 * Math.atan( vExtentSlope );
		this.updateProjectionMatrix();

	}

	/**
	 * Calculates the focal length from the current .fov and .filmGauge.
	 */
	getFocalLength() {

		const vExtentSlope = Math.tan( DEG2RAD * 0.5 * this.fov );

		return 0.5 * this.getFilmHeight() / vExtentSlope;

	}

	getEffectiveFOV() {

		return RAD2DEG * 2 * Math.atan(
			Math.tan( DEG2RAD * 0.5 * this.fov ) / this.zoom );

	}

	getFilmWidth() {

		// film not completely covered in portrait format (aspect < 1)
		return this.filmGauge * Math.min( this.aspect, 1 );

	}

	getFilmHeight() {

		// film not completely covered in landscape format (aspect > 1)
		return this.filmGauge / Math.max( this.aspect, 1 );

	}

	/**
	 * Computes the 2D bounds of the camera's viewable rectangle at a given distance along the viewing direction.
	 * Sets minTarget and maxTarget to the coordinates of the lower-left and upper-right corners of the view rectangle.
	 */
	getViewBounds( distance, minTarget, maxTarget ) {

		_v3$1.set( - 1, - 1, 0.5 ).applyMatrix4( this.projectionMatrixInverse );

		minTarget.set( _v3$1.x, _v3$1.y ).multiplyScalar( - distance / _v3$1.z );

		_v3$1.set( 1, 1, 0.5 ).applyMatrix4( this.projectionMatrixInverse );

		maxTarget.set( _v3$1.x, _v3$1.y ).multiplyScalar( - distance / _v3$1.z );

	}

	/**
	 * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
	 * Copies the result into the target Vector2, where x is width and y is height.
	 */
	getViewSize( distance, target ) {

		this.getViewBounds( distance, _minTarget, _maxTarget );

		return target.subVectors( _maxTarget, _minTarget );

	}

	/**
	 * Sets an offset in a larger frustum. This is useful for multi-window or
	 * multi-monitor/multi-machine setups.
	 *
	 * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
	 * the monitors are in grid like this
	 *
	 *   +---+---+---+
	 *   | A | B | C |
	 *   +---+---+---+
	 *   | D | E | F |
	 *   +---+---+---+
	 *
	 * then for each monitor you would call it like this
	 *
	 *   const w = 1920;
	 *   const h = 1080;
	 *   const fullWidth = w * 3;
	 *   const fullHeight = h * 2;
	 *
	 *   --A--
	 *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
	 *   --B--
	 *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
	 *   --C--
	 *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
	 *   --D--
	 *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
	 *   --E--
	 *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
	 *   --F--
	 *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
	 *
	 *   Note there is no reason monitors have to be the same size or in a grid.
	 */
	setViewOffset( fullWidth, fullHeight, x, y, width, height ) {

		this.aspect = fullWidth / fullHeight;

		if ( this.view === null ) {

			this.view = {
				enabled: true,
				fullWidth: 1,
				fullHeight: 1,
				offsetX: 0,
				offsetY: 0,
				width: 1,
				height: 1
			};

		}

		this.view.enabled = true;
		this.view.fullWidth = fullWidth;
		this.view.fullHeight = fullHeight;
		this.view.offsetX = x;
		this.view.offsetY = y;
		this.view.width = width;
		this.view.height = height;

		this.updateProjectionMatrix();

	}

	clearViewOffset() {

		if ( this.view !== null ) {

			this.view.enabled = false;

		}

		this.updateProjectionMatrix();

	}

	updateProjectionMatrix() {

		const near = this.near;
		let top = near * Math.tan( DEG2RAD * 0.5 * this.fov ) / this.zoom;
		let height = 2 * top;
		let width = this.aspect * height;
		let left = - 0.5 * width;
		const view = this.view;

		if ( this.view !== null && this.view.enabled ) {

			const fullWidth = view.fullWidth,
				fullHeight = view.fullHeight;

			left += view.offsetX * width / fullWidth;
			top -= view.offsetY * height / fullHeight;
			width *= view.width / fullWidth;
			height *= view.height / fullHeight;

		}

		const skew = this.filmOffset;
		if ( skew !== 0 ) left += near * skew / this.getFilmWidth();

		this.projectionMatrix.makePerspective( left, left + width, top, top - height, near, this.far, this.coordinateSystem );

		this.projectionMatrixInverse.copy( this.projectionMatrix ).invert();

	}

	toJSON( meta ) {

		const data = super.toJSON( meta );

		data.object.fov = this.fov;
		data.object.zoom = this.zoom;

		data.object.near = this.near;
		data.object.far = this.far;
		data.object.focus = this.focus;

		data.object.aspect = this.aspect;

		if ( this.view !== null ) data.object.view = Object.assign( {}, this.view );

		data.object.filmGauge = this.filmGauge;
		data.object.filmOffset = this.filmOffset;

		return data;

	}

}

const fov = - 90; // negative fov is not an error
const aspect = 1;

class CubeCamera extends Object3D {

	constructor( near, far, renderTarget ) {

		super();

		this.type = 'CubeCamera';

		this.renderTarget = renderTarget;
		this.coordinateSystem = null;
		this.activeMipmapLevel = 0;

		const cameraPX = new PerspectiveCamera( fov, aspect, near, far );
		cameraPX.layers = this.layers;
		this.add( cameraPX );

		const cameraNX = new PerspectiveCamera( fov, aspect, near, far );
		cameraNX.layers = this.layers;
		this.add( cameraNX );

		const cameraPY = new PerspectiveCamera( fov, aspect, near, far );
		cameraPY.layers = this.layers;
		this.add( cameraPY );

		const cameraNY = new PerspectiveCamera( fov, aspect, near, far );
		cameraNY.layers = this.layers;
		this.add( cameraNY );

		const cameraPZ = new PerspectiveCamera( fov, aspect, near, far );
		cameraPZ.layers = this.layers;
		this.add( cameraPZ );

		const cameraNZ = new PerspectiveCamera( fov, aspect, near, far );
		cameraNZ.layers = this.layers;
		this.add( cameraNZ );

	}

	updateCoordinateSystem() {

		const coordinateSystem = this.coordinateSystem;

		const cameras = this.children.concat();

		const [ cameraPX, cameraNX, cameraPY, cameraNY, cameraPZ, cameraNZ ] = cameras;

		for ( const camera of cameras ) this.remove( camera );

		if ( coordinateSystem === WebGLCoordinateSystem ) {

			cameraPX.up.set( 0, 1, 0 );
			cameraPX.lookAt( 1, 0, 0 );

			cameraNX.up.set( 0, 1, 0 );
			cameraNX.lookAt( - 1, 0, 0 );

			cameraPY.up.set( 0, 0, - 1 );
			cameraPY.lookAt( 0, 1, 0 );

			cameraNY.up.set( 0, 0, 1 );
			cameraNY.lookAt( 0, - 1, 0 );

			cameraPZ.up.set( 0, 1, 0 );
			cameraPZ.lookAt( 0, 0, 1 );

			cameraNZ.up.set( 0, 1, 0 );
			cameraNZ.lookAt( 0, 0, - 1 );

		} else if ( coordinateSystem === WebGPUCoordinateSystem ) {

			cameraPX.up.set( 0, - 1, 0 );
			cameraPX.lookAt( - 1, 0, 0 );

			cameraNX.up.set( 0, - 1, 0 );
			cameraNX.lookAt( 1, 0, 0 );

			cameraPY.up.set( 0, 0, 1 );
			cameraPY.lookAt( 0, 1, 0 );

			cameraNY.up.set( 0, 0, - 1 );
			cameraNY.lookAt( 0, - 1, 0 );

			cameraPZ.up.set( 0, - 1, 0 );
			cameraPZ.lookAt( 0, 0, 1 );

			cameraNZ.up.set( 0, - 1, 0 );
			cameraNZ.lookAt( 0, 0, - 1 );

		} else {

			throw new Error( 'THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: ' + coordinateSystem );

		}

		for ( const camera of cameras ) {

			this.add( camera );

			camera.updateMatrixWorld();

		}

	}

	update( renderer, scene ) {

		if ( this.parent === null ) this.updateMatrixWorld();

		const { renderTarget, activeMipmapLevel } = this;

		if ( this.coordinateSystem !== renderer.coordinateSystem ) {

			this.coordinateSystem = renderer.coordinateSystem;

			this.updateCoordinateSystem();

		}

		const [ cameraPX, cameraNX, cameraPY, cameraNY, cameraPZ, cameraNZ ] = this.children;

		const currentRenderTarget = renderer.getRenderTarget();
		const currentActiveCubeFace = renderer.getActiveCubeFace();
		const currentActiveMipmapLevel = renderer.getActiveMipmapLevel();

		const currentXrEnabled = renderer.xr.enabled;

		renderer.xr.enabled = false;

		const generateMipmaps = renderTarget.texture.generateMipmaps;

		renderTarget.texture.generateMipmaps = false;

		renderer.setRenderTarget( renderTarget, 0, activeMipmapLevel );
		renderer.render( scene, cameraPX );

		renderer.setRenderTarget( renderTarget, 1, activeMipmapLevel );
		renderer.render( scene, cameraNX );

		renderer.setRenderTarget( renderTarget, 2, activeMipmapLevel );
		renderer.render( scene, cameraPY );

		renderer.setRenderTarget( renderTarget, 3, activeMipmapLevel );
		renderer.render( scene, cameraNY );

		renderer.setRenderTarget( renderTarget, 4, activeMipmapLevel );
		renderer.render( scene, cameraPZ );

		// mipmaps are generated during the last call of render()
		// at this point, all sides of the cube render target are defined

		renderTarget.texture.generateMipmaps = generateMipmaps;

		renderer.setRenderTarget( renderTarget, 5, activeMipmapLevel );
		renderer.render( scene, cameraNZ );

		renderer.setRenderTarget( currentRenderTarget, currentActiveCubeFace, currentActiveMipmapLevel );

		renderer.xr.enabled = currentXrEnabled;

		renderTarget.texture.needsPMREMUpdate = true;

	}

}

class CubeTexture extends Texture {

	constructor( images, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy, colorSpace ) {

		images = images !== undefined ? images : [];
		mapping = mapping !== undefined ? mapping : CubeReflectionMapping;

		super( images, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy, colorSpace );

		this.isCubeTexture = true;

		this.flipY = false;

	}

	get images() {

		return this.image;

	}

	set images( value ) {

		this.image = value;

	}

}

class WebGLCubeRenderTarget extends WebGLRenderTarget {

	constructor( size = 1, options = {} ) {

		super( size, size, options );

		this.isWebGLCubeRenderTarget = true;

		const image = { width: size, height: size, depth: 1 };
		const images = [ image, image, image, image, image, image ];

		this.texture = new CubeTexture( images, options.mapping, options.wrapS, options.wrapT, options.magFilter, options.minFilter, options.format, options.type, options.anisotropy, options.colorSpace );

		// By convention -- likely based on the RenderMan spec from the 1990's -- cube maps are specified by WebGL (and three.js)
		// in a coordinate system in which positive-x is to the right when looking up the positive-z axis -- in other words,
		// in a left-handed coordinate system. By continuing this convention, preexisting cube maps continued to render correctly.

		// three.js uses a right-handed coordinate system. So environment maps used in three.js appear to have px and nx swapped
		// and the flag isRenderTargetTexture controls this conversion. The flip is not required when using WebGLCubeRenderTarget.texture
		// as a cube texture (this is detected when isRenderTargetTexture is set to true for cube textures).

		this.texture.isRenderTargetTexture = true;

		this.texture.generateMipmaps = options.generateMipmaps !== undefined ? options.generateMipmaps : false;
		this.texture.minFilter = options.minFilter !== undefined ? options.minFilter : LinearFilter;

	}

	fromEquirectangularTexture( renderer, texture ) {

		this.texture.type = texture.type;
		this.texture.colorSpace = texture.colorSpace;

		this.texture.generateMipmaps = texture.generateMipmaps;
		this.texture.minFilter = texture.minFilter;
		this.texture.magFilter = texture.magFilter;

		const shader = {

			uniforms: {
				tEquirect: { value: null },
			},

			vertexShader: /* glsl */`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,

			fragmentShader: /* glsl */`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
		};

		const geometry = new BoxGeometry( 5, 5, 5 );

		const material = new ShaderMaterial( {

			name: 'CubemapFromEquirect',

			uniforms: cloneUniforms( shader.uniforms ),
			vertexShader: shader.vertexShader,
			fragmentShader: shader.fragmentShader,
			side: BackSide,
			blending: NoBlending

		} );

		material.uniforms.tEquirect.value = texture;

		const mesh = new Mesh( geometry, material );

		const currentMinFilter = texture.minFilter;

		// Avoid blurred poles
		if ( texture.minFilter === LinearMipmapLinearFilter ) texture.minFilter = LinearFilter;

		const camera = new CubeCamera( 1, 10, this );
		camera.update( renderer, mesh );

		texture.minFilter = currentMinFilter;

		mesh.geometry.dispose();
		mesh.material.dispose();

		return this;

	}

	clear( renderer, color, depth, stencil ) {

		const currentRenderTarget = renderer.getRenderTarget();

		for ( let i = 0; i < 6; i ++ ) {

			renderer.setRenderTarget( this, i );

			renderer.clear( color, depth, stencil );

		}

		renderer.setRenderTarget( currentRenderTarget );

	}

}

const _vector1 = /*@__PURE__*/ new Vector3();
const _vector2 = /*@__PURE__*/ new Vector3();
const _normalMatrix = /*@__PURE__*/ new Matrix3();

class Plane {

	constructor( normal = new Vector3( 1, 0, 0 ), constant = 0 ) {

		this.isPlane = true;

		// normal is assumed to be normalized

		this.normal = normal;
		this.constant = constant;

	}

	set( normal, constant ) {

		this.normal.copy( normal );
		this.constant = constant;

		return this;

	}

	setComponents( x, y, z, w ) {

		this.normal.set( x, y, z );
		this.constant = w;

		return this;

	}

	setFromNormalAndCoplanarPoint( normal, point ) {

		this.normal.copy( normal );
		this.constant = - point.dot( this.normal );

		return this;

	}

	setFromCoplanarPoints( a, b, c ) {

		const normal = _vector1.subVectors( c, b ).cross( _vector2.subVectors( a, b ) ).normalize();

		// Q: should an error be thrown if normal is zero (e.g. degenerate plane)?

		this.setFromNormalAndCoplanarPoint( normal, a );

		return this;

	}

	copy( plane ) {

		this.normal.copy( plane.normal );
		this.constant = plane.constant;

		return this;

	}

	normalize() {

		// Note: will lead to a divide by zero if the plane is invalid.

		const inverseNormalLength = 1.0 / this.normal.length();
		this.normal.multiplyScalar( inverseNormalLength );
		this.constant *= inverseNormalLength;

		return this;

	}

	negate() {

		this.constant *= - 1;
		this.normal.negate();

		return this;

	}

	distanceToPoint( point ) {

		return this.normal.dot( point ) + this.constant;

	}

	distanceToSphere( sphere ) {

		return this.distanceToPoint( sphere.center ) - sphere.radius;

	}

	projectPoint( point, target ) {

		return target.copy( point ).addScaledVector( this.normal, - this.distanceToPoint( point ) );

	}

	intersectLine( line, target ) {

		const direction = line.delta( _vector1 );

		const denominator = this.normal.dot( direction );

		if ( denominator === 0 ) {

			// line is coplanar, return origin
			if ( this.distanceToPoint( line.start ) === 0 ) {

				return target.copy( line.start );

			}

			// Unsure if this is the correct method to handle this case.
			return null;

		}

		const t = - ( line.start.dot( this.normal ) + this.constant ) / denominator;

		if ( t < 0 || t > 1 ) {

			return null;

		}

		return target.copy( line.start ).addScaledVector( direction, t );

	}

	intersectsLine( line ) {

		// Note: this tests if a line intersects the plane, not whether it (or its end-points) are coplanar with it.

		const startSign = this.distanceToPoint( line.start );
		const endSign = this.distanceToPoint( line.end );

		return ( startSign < 0 && endSign > 0 ) || ( endSign < 0 && startSign > 0 );

	}

	intersectsBox( box ) {

		return box.intersectsPlane( this );

	}

	intersectsSphere( sphere ) {

		return sphere.intersectsPlane( this );

	}

	coplanarPoint( target ) {

		return target.copy( this.normal ).multiplyScalar( - this.constant );

	}

	applyMatrix4( matrix, optionalNormalMatrix ) {

		const normalMatrix = optionalNormalMatrix || _normalMatrix.getNormalMatrix( matrix );

		const referencePoint = this.coplanarPoint( _vector1 ).applyMatrix4( matrix );

		const normal = this.normal.applyMatrix3( normalMatrix ).normalize();

		this.constant = - referencePoint.dot( normal );

		return this;

	}

	translate( offset ) {

		this.constant -= offset.dot( this.normal );

		return this;

	}

	equals( plane ) {

		return plane.normal.equals( this.normal ) && ( plane.constant === this.constant );

	}

	clone() {

		return new this.constructor().copy( this );

	}

}

const _sphere$5 = /*@__PURE__*/ new Sphere();
const _vector$7 = /*@__PURE__*/ new Vector3();

class Frustum {

	constructor( p0 = new Plane(), p1 = new Plane(), p2 = new Plane(), p3 = new Plane(), p4 = new Plane(), p5 = new Plane() ) {

		this.planes = [ p0, p1, p2, p3, p4, p5 ];

	}

	set( p0, p1, p2, p3, p4, p5 ) {

		const planes = this.planes;

		planes[ 0 ].copy( p0 );
		planes[ 1 ].copy( p1 );
		planes[ 2 ].copy( p2 );
		planes[ 3 ].copy( p3 );
		planes[ 4 ].copy( p4 );
		planes[ 5 ].copy( p5 );

		return this;

	}

	copy( frustum ) {

		const planes = this.planes;

		for ( let i = 0; i < 6; i ++ ) {

			planes[ i ].copy( frustum.planes[ i ] );

		}

		return this;

	}

	setFromProjectionMatrix( m, coordinateSystem = WebGLCoordinateSystem ) {

		const planes = this.planes;
		const me = m.elements;
		const me0 = me[ 0 ], me1 = me[ 1 ], me2 = me[ 2 ], me3 = me[ 3 ];
		const me4 = me[ 4 ], me5 = me[ 5 ], me6 = me[ 6 ], me7 = me[ 7 ];
		const me8 = me[ 8 ], me9 = me[ 9 ], me10 = me[ 10 ], me11 = me[ 11 ];
		const me12 = me[ 12 ], me13 = me[ 13 ], me14 = me[ 14 ], me15 = me[ 15 ];

		planes[ 0 ].setComponents( me3 - me0, me7 - me4, me11 - me8, me15 - me12 ).normalize();
		planes[ 1 ].setComponents( me3 + me0, me7 + me4, me11 + me8, me15 + me12 ).normalize();
		planes[ 2 ].setComponents( me3 + me1, me7 + me5, me11 + me9, me15 + me13 ).normalize();
		planes[ 3 ].setComponents( me3 - me1, me7 - me5, me11 - me9, me15 - me13 ).normalize();
		planes[ 4 ].setComponents( me3 - me2, me7 - me6, me11 - me10, me15 - me14 ).normalize();

		if ( coordinateSystem === WebGLCoordinateSystem ) {

			planes[ 5 ].setComponents( me3 + me2, me7 + me6, me11 + me10, me15 + me14 ).normalize();

		} else if ( coordinateSystem === WebGPUCoordinateSystem ) {

			planes[ 5 ].setComponents( me2, me6, me10, me14 ).normalize();

		} else {

			throw new Error( 'THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: ' + coordinateSystem );

		}

		return this;

	}

	intersectsObject( object ) {

		if ( object.boundingSphere !== undefined ) {

			if ( object.boundingSphere === null ) object.computeBoundingSphere();

			_sphere$5.copy( object.boundingSphere ).applyMatrix4( object.matrixWorld );

		} else {

			const geometry = object.geometry;

			if ( geometry.boundingSphere === null ) geometry.computeBoundingSphere();

			_sphere$5.copy( geometry.boundingSphere ).applyMatrix4( object.matrixWorld );

		}

		return this.intersectsSphere( _sphere$5 );

	}

	intersectsSprite( sprite ) {

		_sphere$5.center.set( 0, 0, 0 );
		_sphere$5.radius = 0.7071067811865476;
		_sphere$5.applyMatrix4( sprite.matrixWorld );

		return this.intersectsSphere( _sphere$5 );

	}

	intersectsSphere( sphere ) {

		const planes = this.planes;
		const center = sphere.center;
		const negRadius = - sphere.radius;

		for ( let i = 0; i < 6; i ++ ) {

			const distance = planes[ i ].distanceToPoint( center );

			if ( distance < negRadius ) {

				return false;

			}

		}

		return true;

	}

	intersectsBox( box ) {

		const planes = this.planes;

		for ( let i = 0; i < 6; i ++ ) {

			const plane = planes[ i ];

			// corner at max distance

			_vector$7.x = plane.normal.x > 0 ? box.max.x : box.min.x;
			_vector$7.y = plane.normal.y > 0 ? box.max.y : box.min.y;
			_vector$7.z = plane.normal.z > 0 ? box.max.z : box.min.z;

			if ( plane.distanceToPoint( _vector$7 ) < 0 ) {

				return false;

			}

		}

		return true;

	}

	containsPoint( point ) {

		const planes = this.planes;

		for ( let i = 0; i < 6; i ++ ) {

			if ( planes[ i ].distanceToPoint( point ) < 0 ) {

				return false;

			}

		}

		return true;

	}

	clone() {

		return new this.constructor().copy( this );

	}

}

function WebGLAnimation() {

	let context = null;
	let isAnimating = false;
	let animationLoop = null;
	let requestId = null;

	function onAnimationFrame( time, frame ) {

		animationLoop( time, frame );

		requestId = context.requestAnimationFrame( onAnimationFrame );

	}

	return {

		start: function () {

			if ( isAnimating === true ) return;
			if ( animationLoop === null ) return;

			requestId = context.requestAnimationFrame( onAnimationFrame );

			isAnimating = true;

		},

		stop: function () {

			context.cancelAnimationFrame( requestId );

			isAnimating = false;

		},

		setAnimationLoop: function ( callback ) {

			animationLoop = callback;

		},

		setContext: function ( value ) {

			context = value;

		}

	};

}

function WebGLAttributes( gl ) {

	const buffers = new WeakMap();

	function createBuffer( attribute, bufferType ) {

		const array = attribute.array;
		const usage = attribute.usage;
		const size = array.byteLength;

		const buffer = gl.createBuffer();

		gl.bindBuffer( bufferType, buffer );
		gl.bufferData( bufferType, array, usage );

		attribute.onUploadCallback();

		let type;

		if ( array instanceof Float32Array ) {

			type = gl.FLOAT;

		} else if ( array instanceof Uint16Array ) {

			if ( attribute.isFloat16BufferAttribute ) {

				type = gl.HALF_FLOAT;

			} else {

				type = gl.UNSIGNED_SHORT;

			}

		} else if ( array instanceof Int16Array ) {

			type = gl.SHORT;

		} else if ( array instanceof Uint32Array ) {

			type = gl.UNSIGNED_INT;

		} else if ( array instanceof Int32Array ) {

			type = gl.INT;

		} else if ( array instanceof Int8Array ) {

			type = gl.BYTE;

		} else if ( array instanceof Uint8Array ) {

			type = gl.UNSIGNED_BYTE;

		} else if ( array instanceof Uint8ClampedArray ) {

			type = gl.UNSIGNED_BYTE;

		} else {

			throw new Error( 'THREE.WebGLAttributes: Unsupported buffer data format: ' + array );

		}

		return {
			buffer: buffer,
			type: type,
			bytesPerElement: array.BYTES_PER_ELEMENT,
			version: attribute.version,
			size: size
		};

	}

	function updateBuffer( buffer, attribute, bufferType ) {

		const array = attribute.array;
		const updateRange = attribute._updateRange; // @deprecated, r159
		const updateRanges = attribute.updateRanges;

		gl.bindBuffer( bufferType, buffer );

		if ( updateRange.count === - 1 && updateRanges.length === 0 ) {

			// Not using update ranges
			gl.bufferSubData( bufferType, 0, array );

		}

		if ( updateRanges.length !== 0 ) {

			for ( let i = 0, l = updateRanges.length; i < l; i ++ ) {

				const range = updateRanges[ i ];

				gl.bufferSubData( bufferType, range.start * array.BYTES_PER_ELEMENT,
					array, range.start, range.count );

			}

			attribute.clearUpdateRanges();

		}

		// @deprecated, r159
		if ( updateRange.count !== - 1 ) {

			gl.bufferSubData( bufferType, updateRange.offset * array.BYTES_PER_ELEMENT,
				array, updateRange.offset, updateRange.count );

			updateRange.count = - 1; // reset range

		}

		attribute.onUploadCallback();

	}

	//

	function get( attribute ) {

		if ( attribute.isInterleavedBufferAttribute ) attribute = attribute.data;

		return buffers.get( attribute );

	}

	function remove( attribute ) {

		if ( attribute.isInterleavedBufferAttribute ) attribute = attribute.data;

		const data = buffers.get( attribute );

		if ( data ) {

			gl.deleteBuffer( data.buffer );

			buffers.delete( attribute );

		}

	}

	function update( attribute, bufferType ) {

		if ( attribute.isGLBufferAttribute ) {

			const cached = buffers.get( attribute );

			if ( ! cached || cached.version < attribute.version ) {

				buffers.set( attribute, {
					buffer: attribute.buffer,
					type: attribute.type,
					bytesPerElement: attribute.elementSize,
					version: attribute.version
				} );

			}

			return;

		}

		if ( attribute.isInterleavedBufferAttribute ) attribute = attribute.data;

		const data = buffers.get( attribute );

		if ( data === undefined ) {

			buffers.set( attribute, createBuffer( attribute, bufferType ) );

		} else if ( data.version < attribute.version ) {

			if ( data.size !== attribute.array.byteLength ) {

				throw new Error( 'THREE.WebGLAttributes: The size of the buffer attribute\'s array buffer does not match the original size. Resizing buffer attributes is not supported.' );

			}

			updateBuffer( data.buffer, attribute, bufferType );

			data.version = attribute.version;

		}

	}

	return {

		get: get,
		remove: remove,
		update: update

	};

}

class PlaneGeometry extends BufferGeometry {

	constructor( width = 1, height = 1, widthSegments = 1, heightSegments = 1 ) {

		super();

		this.type = 'PlaneGeometry';

		this.parameters = {
			width: width,
			height: height,
			widthSegments: widthSegments,
			heightSegments: heightSegments
		};

		const width_half = width / 2;
		const height_half = height / 2;

		const gridX = Math.floor( widthSegments );
		const gridY = Math.floor( heightSegments );

		const gridX1 = gridX + 1;
		const gridY1 = gridY + 1;

		const segment_width = width / gridX;
		const segment_height = height / gridY;

		//

		const indices = [];
		const vertices = [];
		const normals = [];
		const uvs = [];

		for ( let iy = 0; iy < gridY1; iy ++ ) {

			const y = iy * segment_height - height_half;

			for ( let ix = 0; ix < gridX1; ix ++ ) {

				const x = ix * segment_width - width_half;

				vertices.push( x, - y, 0 );

				normals.push( 0, 0, 1 );

				uvs.push( ix / gridX );
				uvs.push( 1 - ( iy / gridY ) );

			}

		}

		for ( let iy = 0; iy < gridY; iy ++ ) {

			for ( let ix = 0; ix < gridX; ix ++ ) {

				const a = ix + gridX1 * iy;
				const b = ix + gridX1 * ( iy + 1 );
				const c = ( ix + 1 ) + gridX1 * ( iy + 1 );
				const d = ( ix + 1 ) + gridX1 * iy;

				indices.push( a, b, d );
				indices.push( b, c, d );

			}

		}

		this.setIndex( indices );
		this.setAttribute( 'position', new Float32BufferAttribute( vertices, 3 ) );
		this.setAttribute( 'normal', new Float32BufferAttribute( normals, 3 ) );
		this.setAttribute( 'uv', new Float32BufferAttribute( uvs, 2 ) );

	}

	copy( source ) {

		super.copy( source );

		this.parameters = Object.assign( {}, source.parameters );

		return this;

	}

	static fromJSON( data ) {

		return new PlaneGeometry( data.width, data.height, data.widthSegments, data.heightSegments );

	}

}

var alphahash_fragment = "#ifdef USE_ALPHAHASH\n\tif ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;\n#endif";

var alphahash_pars_fragment = "#ifdef USE_ALPHAHASH\n\tconst float ALPHA_HASH_SCALE = 0.05;\n\tfloat hash2D( vec2 value ) {\n\t\treturn fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );\n\t}\n\tfloat hash3D( vec3 value ) {\n\t\treturn hash2D( vec2( hash2D( value.xy ), value.z ) );\n\t}\n\tfloat getAlphaHashThreshold( vec3 position ) {\n\t\tfloat maxDeriv = max(\n\t\t\tlength( dFdx( position.xyz ) ),\n\t\t\tlength( dFdy( position.xyz ) )\n\t\t);\n\t\tfloat pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );\n\t\tvec2 pixScales = vec2(\n\t\t\texp2( floor( log2( pixScale ) ) ),\n\t\t\texp2( ceil( log2( pixScale ) ) )\n\t\t);\n\t\tvec2 alpha = vec2(\n\t\t\thash3D( floor( pixScales.x * position.xyz ) ),\n\t\t\thash3D( floor( pixScales.y * position.xyz ) )\n\t\t);\n\t\tfloat lerpFactor = fract( log2( pixScale ) );\n\t\tfloat x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;\n\t\tfloat a = min( lerpFactor, 1.0 - lerpFactor );\n\t\tvec3 cases = vec3(\n\t\t\tx * x / ( 2.0 * a * ( 1.0 - a ) ),\n\t\t\t( x - 0.5 * a ) / ( 1.0 - a ),\n\t\t\t1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )\n\t\t);\n\t\tfloat threshold = ( x < ( 1.0 - a ) )\n\t\t\t? ( ( x < a ) ? cases.x : cases.y )\n\t\t\t: cases.z;\n\t\treturn clamp( threshold , 1.0e-6, 1.0 );\n\t}\n#endif";

var alphamap_fragment = "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;\n#endif";

var alphamap_pars_fragment = "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif";

var alphatest_fragment = "#ifdef USE_ALPHATEST\n\t#ifdef ALPHA_TO_COVERAGE\n\tdiffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );\n\tif ( diffuseColor.a == 0.0 ) discard;\n\t#else\n\tif ( diffuseColor.a < alphaTest ) discard;\n\t#endif\n#endif";

var alphatest_pars_fragment = "#ifdef USE_ALPHATEST\n\tuniform float alphaTest;\n#endif";

var aomap_fragment = "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_CLEARCOAT ) \n\t\tclearcoatSpecularIndirect *= ambientOcclusion;\n\t#endif\n\t#if defined( USE_SHEEN ) \n\t\tsheenSpecularIndirect *= ambientOcclusion;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometryNormal, geometryViewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n\t#endif\n#endif";

var aomap_pars_fragment = "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif";

var batching_pars_vertex = "#ifdef USE_BATCHING\n\tattribute float batchId;\n\tuniform highp sampler2D batchingTexture;\n\tmat4 getBatchingMatrix( const in float i ) {\n\t\tint size = textureSize( batchingTexture, 0 ).x;\n\t\tint j = int( i ) * 4;\n\t\tint x = j % size;\n\t\tint y = j / size;\n\t\tvec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );\n\t\tvec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );\n\t\tvec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );\n\t\tvec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );\n\t\treturn mat4( v1, v2, v3, v4 );\n\t}\n#endif\n#ifdef USE_BATCHING_COLOR\n\tuniform sampler2D batchingColorTexture;\n\tvec3 getBatchingColor( const in float i ) {\n\t\tint size = textureSize( batchingColorTexture, 0 ).x;\n\t\tint j = int( i );\n\t\tint x = j % size;\n\t\tint y = j / size;\n\t\treturn texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;\n\t}\n#endif";

var batching_vertex = "#ifdef USE_BATCHING\n\tmat4 batchingMatrix = getBatchingMatrix( batchId );\n#endif";

var begin_vertex = "vec3 transformed = vec3( position );\n#ifdef USE_ALPHAHASH\n\tvPosition = vec3( position );\n#endif";

var beginnormal_vertex = "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif";

var bsdfs = "float G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, 1.0, dotVH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n} // validated";

var iridescence_fragment = "#ifdef USE_IRIDESCENCE\n\tconst mat3 XYZ_TO_REC709 = mat3(\n\t\t 3.2404542, -0.9692660,  0.0556434,\n\t\t-1.5371385,  1.8760108, -0.2040259,\n\t\t-0.4985314,  0.0415560,  1.0572252\n\t);\n\tvec3 Fresnel0ToIor( vec3 fresnel0 ) {\n\t\tvec3 sqrtF0 = sqrt( fresnel0 );\n\t\treturn ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n\t}\n\tvec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n\t\treturn pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n\t}\n\tfloat IorToFresnel0( float transmittedIor, float incidentIor ) {\n\t\treturn pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n\t}\n\tvec3 evalSensitivity( float OPD, vec3 shift ) {\n\t\tfloat phase = 2.0 * PI * OPD * 1.0e-9;\n\t\tvec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n\t\tvec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n\t\tvec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n\t\tvec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n\t\txyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n\t\txyz /= 1.0685e-7;\n\t\tvec3 rgb = XYZ_TO_REC709 * xyz;\n\t\treturn rgb;\n\t}\n\tvec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n\t\tvec3 I;\n\t\tfloat iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n\t\tfloat sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n\t\tfloat cosTheta2Sq = 1.0 - sinTheta2Sq;\n\t\tif ( cosTheta2Sq < 0.0 ) {\n\t\t\treturn vec3( 1.0 );\n\t\t}\n\t\tfloat cosTheta2 = sqrt( cosTheta2Sq );\n\t\tfloat R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n\t\tfloat R12 = F_Schlick( R0, 1.0, cosTheta1 );\n\t\tfloat T121 = 1.0 - R12;\n\t\tfloat phi12 = 0.0;\n\t\tif ( iridescenceIOR < outsideIOR ) phi12 = PI;\n\t\tfloat phi21 = PI - phi12;\n\t\tvec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );\t\tvec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n\t\tvec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n\t\tvec3 phi23 = vec3( 0.0 );\n\t\tif ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n\t\tif ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n\t\tif ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n\t\tfloat OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n\t\tvec3 phi = vec3( phi21 ) + phi23;\n\t\tvec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n\t\tvec3 r123 = sqrt( R123 );\n\t\tvec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n\t\tvec3 C0 = R12 + Rs;\n\t\tI = C0;\n\t\tvec3 Cm = Rs - T121;\n\t\tfor ( int m = 1; m <= 2; ++ m ) {\n\t\t\tCm *= r123;\n\t\t\tvec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n\t\t\tI += Cm * Sm;\n\t\t}\n\t\treturn max( I, vec3( 0.0 ) );\n\t}\n#endif";

var bumpmap_pars_fragment = "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vBumpMapUv );\n\t\tvec2 dSTdy = dFdy( vBumpMapUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\t\tvec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );\n\t\tvec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif";

var clipping_planes_fragment = "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#ifdef ALPHA_TO_COVERAGE\n\t\tfloat distanceToPlane, distanceGradient;\n\t\tfloat clipOpacity = 1.0;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tdistanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n\t\t\tdistanceGradient = fwidth( distanceToPlane ) / 2.0;\n\t\t\tclipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n\t\t\tif ( clipOpacity == 0.0 ) discard;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\t\tfloat unionClipOpacity = 1.0;\n\t\t\t#pragma unroll_loop_start\n\t\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\t\tplane = clippingPlanes[ i ];\n\t\t\t\tdistanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n\t\t\t\tdistanceGradient = fwidth( distanceToPlane ) / 2.0;\n\t\t\t\tunionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n\t\t\t}\n\t\t\t#pragma unroll_loop_end\n\t\t\tclipOpacity *= 1.0 - unionClipOpacity;\n\t\t#endif\n\t\tdiffuseColor.a *= clipOpacity;\n\t\tif ( diffuseColor.a == 0.0 ) discard;\n\t#else\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\t\tbool clipped = true;\n\t\t\t#pragma unroll_loop_start\n\t\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\t\tplane = clippingPlanes[ i ];\n\t\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t\t}\n\t\t\t#pragma unroll_loop_end\n\t\t\tif ( clipped ) discard;\n\t\t#endif\n\t#endif\n#endif";

var clipping_planes_pars_fragment = "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif";

var clipping_planes_pars_vertex = "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif";

var clipping_planes_vertex = "#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif";

var color_fragment = "#if defined( USE_COLOR_ALPHA )\n\tdiffuseColor *= vColor;\n#elif defined( USE_COLOR )\n\tdiffuseColor.rgb *= vColor;\n#endif";

var color_pars_fragment = "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR )\n\tvarying vec3 vColor;\n#endif";

var color_pars_vertex = "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n\tvarying vec3 vColor;\n#endif";

var color_vertex = "#if defined( USE_COLOR_ALPHA )\n\tvColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif\n#ifdef USE_BATCHING_COLOR\n\tvec3 batchingColor = getBatchingColor( batchId );\n\tvColor.xyz *= batchingColor.xyz;\n#endif";

var common = "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\n#ifdef USE_ALPHAHASH\n\tvarying vec3 vPosition;\n#endif\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat luminance( const in vec3 rgb ) {\n\tconst vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );\n\treturn dot( weights, rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n} // validated";

var cube_uv_reflection_fragment = "#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\thighp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tuv.x += filterInt * 3.0 * cubeUV_minTileSize;\n\t\tuv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n\t\tuv.x *= CUBEUV_TEXEL_WIDTH;\n\t\tuv.y *= CUBEUV_TEXEL_HEIGHT;\n\t\t#ifdef texture2DGradEXT\n\t\t\treturn texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n\t\t#else\n\t\t\treturn texture2D( envMap, uv ).rgb;\n\t\t#endif\n\t}\n\t#define cubeUV_r0 1.0\n\t#define cubeUV_m0 - 2.0\n\t#define cubeUV_r1 0.8\n\t#define cubeUV_m1 - 1.0\n\t#define cubeUV_r4 0.4\n\t#define cubeUV_m4 2.0\n\t#define cubeUV_r5 0.305\n\t#define cubeUV_m5 3.0\n\t#define cubeUV_r6 0.21\n\t#define cubeUV_m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= cubeUV_r1 ) {\n\t\t\tmip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n\t\t} else if ( roughness >= cubeUV_r4 ) {\n\t\t\tmip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n\t\t} else if ( roughness >= cubeUV_r5 ) {\n\t\t\tmip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n\t\t} else if ( roughness >= cubeUV_r6 ) {\n\t\t\tmip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif";

var defaultnormal_vertex = "vec3 transformedNormal = objectNormal;\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = objectTangent;\n#endif\n#ifdef USE_BATCHING\n\tmat3 bm = mat3( batchingMatrix );\n\ttransformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );\n\ttransformedNormal = bm * transformedNormal;\n\t#ifdef USE_TANGENT\n\t\ttransformedTangent = bm * transformedTangent;\n\t#endif\n#endif\n#ifdef USE_INSTANCING\n\tmat3 im = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );\n\ttransformedNormal = im * transformedNormal;\n\t#ifdef USE_TANGENT\n\t\ttransformedTangent = im * transformedTangent;\n\t#endif\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\ttransformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif";

var displacementmap_pars_vertex = "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif";

var displacementmap_vertex = "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );\n#endif";

var emissivemap_fragment = "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif";

var emissivemap_pars_fragment = "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif";

var colorspace_fragment = "gl_FragColor = linearToOutputTexel( gl_FragColor );";

var colorspace_pars_fragment = "\nconst mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(\n\tvec3( 0.8224621, 0.177538, 0.0 ),\n\tvec3( 0.0331941, 0.9668058, 0.0 ),\n\tvec3( 0.0170827, 0.0723974, 0.9105199 )\n);\nconst mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(\n\tvec3( 1.2249401, - 0.2249404, 0.0 ),\n\tvec3( - 0.0420569, 1.0420571, 0.0 ),\n\tvec3( - 0.0196376, - 0.0786361, 1.0982735 )\n);\nvec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {\n\treturn vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );\n}\nvec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {\n\treturn vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );\n}\nvec4 LinearTransferOETF( in vec4 value ) {\n\treturn value;\n}\nvec4 sRGBTransferOETF( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn sRGBTransferOETF( value );\n}";

var envmap_fragment = "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif";

var envmap_common_pars_fragment = "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform mat3 envMapRotation;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif";

var envmap_pars_fragment = "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif";

var envmap_pars_vertex = "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif";

var envmap_vertex = "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif";

var fog_vertex = "#ifdef USE_FOG\n\tvFogDepth = - mvPosition.z;\n#endif";

var fog_pars_vertex = "#ifdef USE_FOG\n\tvarying float vFogDepth;\n#endif";

var fog_fragment = "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif";

var fog_pars_fragment = "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float vFogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif";

var gradientmap_pars_fragment = "#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn vec3( texture2D( gradientMap, coord ).r );\n\t#else\n\t\tvec2 fw = fwidth( coord ) * 0.5;\n\t\treturn mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n\t#endif\n}";

var lightmap_pars_fragment = "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif";

var lights_lambert_fragment = "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;";

var lights_lambert_pars_fragment = "varying vec3 vViewPosition;\nstruct LambertMaterial {\n\tvec3 diffuseColor;\n\tfloat specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Lambert\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Lambert";

var lights_pars_begin = "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\n#if defined( USE_LIGHT_PROBES )\n\tuniform vec3 lightProbe[ 9 ];\n#endif\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\treturn irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif ( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n\treturn smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {\n\t\tlight.color = directionalLight.color;\n\t\tlight.direction = directionalLight.direction;\n\t\tlight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {\n\t\tvec3 lVector = pointLight.position - geometryPosition;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tlight.color = pointLight.color;\n\t\tlight.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {\n\t\tvec3 lVector = spotLight.position - geometryPosition;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat angleCos = dot( light.direction, spotLight.direction );\n\t\tfloat spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\tif ( spotAttenuation > 0.0 ) {\n\t\t\tfloat lightDistance = length( lVector );\n\t\t\tlight.color = spotLight.color * spotAttenuation;\n\t\t\tlight.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t\t} else {\n\t\t\tlight.color = vec3( 0.0 );\n\t\t\tlight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n\t\tfloat dotNL = dot( normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\treturn irradiance;\n\t}\n#endif";

var envmap_physical_pars_fragment = "#ifdef USE_ENVMAP\n\tvec3 getIBLIrradiance( const in vec3 normal ) {\n\t\t#ifdef ENVMAP_TYPE_CUBE_UV\n\t\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );\n\t\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n\tvec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n\t\t#ifdef ENVMAP_TYPE_CUBE_UV\n\t\t\tvec3 reflectVec = reflect( - viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );\n\t\t\treturn envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n\t#ifdef USE_ANISOTROPY\n\t\tvec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {\n\t\t\t#ifdef ENVMAP_TYPE_CUBE_UV\n\t\t\t\tvec3 bentNormal = cross( bitangent, viewDir );\n\t\t\t\tbentNormal = normalize( cross( bentNormal, bitangent ) );\n\t\t\t\tbentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );\n\t\t\t\treturn getIBLRadiance( viewDir, bentNormal, roughness );\n\t\t\t#else\n\t\t\t\treturn vec3( 0.0 );\n\t\t\t#endif\n\t\t}\n\t#endif\n#endif";

var lights_toon_fragment = "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;";

var lights_toon_pars_fragment = "varying vec3 vViewPosition;\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon";

var lights_phong_fragment = "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;";

var lights_phong_pars_fragment = "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong";

var lights_physical_fragment = "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n\tmaterial.ior = ior;\n\t#ifdef USE_SPECULAR\n\t\tfloat specularIntensityFactor = specularIntensity;\n\t\tvec3 specularColorFactor = specularColor;\n\t\t#ifdef USE_SPECULAR_COLORMAP\n\t\t\tspecularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;\n\t\t#endif\n\t\t#ifdef USE_SPECULAR_INTENSITYMAP\n\t\t\tspecularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;\n\t\t#endif\n\t\tmaterial.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n\t#else\n\t\tfloat specularIntensityFactor = 1.0;\n\t\tvec3 specularColorFactor = vec3( 1.0 );\n\t\tmaterial.specularF90 = 1.0;\n\t#endif\n\tmaterial.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\tmaterial.clearcoatF0 = vec3( 0.04 );\n\tmaterial.clearcoatF90 = 1.0;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_DISPERSION\n\tmaterial.dispersion = dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n\tmaterial.iridescence = iridescence;\n\tmaterial.iridescenceIOR = iridescenceIOR;\n\t#ifdef USE_IRIDESCENCEMAP\n\t\tmaterial.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;\n\t#endif\n\t#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\t\tmaterial.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;\n\t#else\n\t\tmaterial.iridescenceThickness = iridescenceThicknessMaximum;\n\t#endif\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheenColor;\n\t#ifdef USE_SHEEN_COLORMAP\n\t\tmaterial.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;\n\t#endif\n\tmaterial.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n\t#ifdef USE_SHEEN_ROUGHNESSMAP\n\t\tmaterial.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;\n\t#endif\n#endif\n#ifdef USE_ANISOTROPY\n\t#ifdef USE_ANISOTROPYMAP\n\t\tmat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );\n\t\tvec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;\n\t\tvec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;\n\t#else\n\t\tvec2 anisotropyV = anisotropyVector;\n\t#endif\n\tmaterial.anisotropy = length( anisotropyV );\n\tif( material.anisotropy == 0.0 ) {\n\t\tanisotropyV = vec2( 1.0, 0.0 );\n\t} else {\n\t\tanisotropyV /= material.anisotropy;\n\t\tmaterial.anisotropy = saturate( material.anisotropy );\n\t}\n\tmaterial.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );\n\tmaterial.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;\n\tmaterial.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;\n#endif";

var lights_physical_pars_fragment = "struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat roughness;\n\tvec3 specularColor;\n\tfloat specularF90;\n\tfloat dispersion;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat clearcoat;\n\t\tfloat clearcoatRoughness;\n\t\tvec3 clearcoatF0;\n\t\tfloat clearcoatF90;\n\t#endif\n\t#ifdef USE_IRIDESCENCE\n\t\tfloat iridescence;\n\t\tfloat iridescenceIOR;\n\t\tfloat iridescenceThickness;\n\t\tvec3 iridescenceFresnel;\n\t\tvec3 iridescenceF0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tvec3 sheenColor;\n\t\tfloat sheenRoughness;\n\t#endif\n\t#ifdef IOR\n\t\tfloat ior;\n\t#endif\n\t#ifdef USE_TRANSMISSION\n\t\tfloat transmission;\n\t\tfloat transmissionAlpha;\n\t\tfloat thickness;\n\t\tfloat attenuationDistance;\n\t\tvec3 attenuationColor;\n\t#endif\n\t#ifdef USE_ANISOTROPY\n\t\tfloat anisotropy;\n\t\tfloat alphaT;\n\t\tvec3 anisotropyT;\n\t\tvec3 anisotropyB;\n\t#endif\n};\nvec3 clearcoatSpecularDirect = vec3( 0.0 );\nvec3 clearcoatSpecularIndirect = vec3( 0.0 );\nvec3 sheenSpecularDirect = vec3( 0.0 );\nvec3 sheenSpecularIndirect = vec3(0.0 );\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\n#ifdef USE_ANISOTROPY\n\tfloat V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {\n\t\tfloat gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );\n\t\tfloat gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );\n\t\tfloat v = 0.5 / ( gv + gl );\n\t\treturn saturate(v);\n\t}\n\tfloat D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {\n\t\tfloat a2 = alphaT * alphaB;\n\t\thighp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );\n\t\thighp float v2 = dot( v, v );\n\t\tfloat w2 = a2 / v2;\n\t\treturn RECIPROCAL_PI * a2 * pow2 ( w2 );\n\t}\n#endif\n#ifdef USE_CLEARCOAT\n\tvec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {\n\t\tvec3 f0 = material.clearcoatF0;\n\t\tfloat f90 = material.clearcoatF90;\n\t\tfloat roughness = material.clearcoatRoughness;\n\t\tfloat alpha = pow2( roughness );\n\t\tvec3 halfDir = normalize( lightDir + viewDir );\n\t\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\t\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\t\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\t\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\t\tvec3 F = F_Schlick( f0, f90, dotVH );\n\t\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\t\tfloat D = D_GGX( alpha, dotNH );\n\t\treturn F * ( V * D );\n\t}\n#endif\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n\tvec3 f0 = material.specularColor;\n\tfloat f90 = material.specularF90;\n\tfloat roughness = material.roughness;\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( f0, f90, dotVH );\n\t#ifdef USE_IRIDESCENCE\n\t\tF = mix( F, material.iridescenceFresnel, material.iridescence );\n\t#endif\n\t#ifdef USE_ANISOTROPY\n\t\tfloat dotTL = dot( material.anisotropyT, lightDir );\n\t\tfloat dotTV = dot( material.anisotropyT, viewDir );\n\t\tfloat dotTH = dot( material.anisotropyT, halfDir );\n\t\tfloat dotBL = dot( material.anisotropyB, lightDir );\n\t\tfloat dotBV = dot( material.anisotropyB, viewDir );\n\t\tfloat dotBH = dot( material.anisotropyB, halfDir );\n\t\tfloat V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );\n\t\tfloat D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );\n\t#else\n\t\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\t\tfloat D = D_GGX( alpha, dotNH );\n\t#endif\n\treturn F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n\tfloat alpha = pow2( roughness );\n\tfloat invAlpha = 1.0 / alpha;\n\tfloat cos2h = dotNH * dotNH;\n\tfloat sin2h = max( 1.0 - cos2h, 0.0078125 );\n\treturn ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n\treturn saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat D = D_Charlie( sheenRoughness, dotNH );\n\tfloat V = V_Neubelt( dotNV, dotNL );\n\treturn sheenColor * ( D * V );\n}\n#endif\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat r2 = roughness * roughness;\n\tfloat a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n\tfloat b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n\tfloat DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n\treturn saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n\treturn fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\treturn specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\t#ifdef USE_IRIDESCENCE\n\t\tvec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n\t#else\n\t\tvec3 Fr = specularColor;\n\t#endif\n\tvec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n\tfloat Ess = fab.x + fab.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometryNormal;\n\t\tvec3 viewDir = geometryViewDir;\n\t\tvec3 position = geometryPosition;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.roughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = dotNLcc * directLight.color;\n\t\tclearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );\n\t#endif\n\treflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n\t#endif\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\t#ifdef USE_IRIDESCENCE\n\t\tcomputeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );\n\t#else\n\t\tcomputeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n\t#endif\n\tvec3 totalScattering = singleScattering + multiScattering;\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );\n\treflectedLight.indirectSpecular += radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}";

var lights_fragment_begin = "\nvec3 geometryPosition = - vViewPosition;\nvec3 geometryNormal = normal;\nvec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\nvec3 geometryClearcoatNormal = vec3( 0.0 );\n#ifdef USE_CLEARCOAT\n\tgeometryClearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n\tfloat dotNVi = saturate( dot( normal, geometryViewDir ) );\n\tif ( material.iridescenceThickness == 0.0 ) {\n\t\tmaterial.iridescence = 0.0;\n\t} else {\n\t\tmaterial.iridescence = saturate( material.iridescence );\n\t}\n\tif ( material.iridescence > 0.0 ) {\n\t\tmaterial.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n\t\tmaterial.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n\t}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointLightInfo( pointLight, geometryPosition, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tvec4 spotColor;\n\tvec3 spotLightCoord;\n\tbool inSpotLightMap;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotLightInfo( spotLight, geometryPosition, directLight );\n\t\t#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n\t\t#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n\t\t#else\n\t\t#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#endif\n\t\t#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n\t\t\tspotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n\t\t\tinSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n\t\t\tspotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n\t\t\tdirectLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n\t\t#endif\n\t\t#undef SPOT_LIGHT_MAP_INDEX\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalLightInfo( directionalLight, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#if defined( USE_LIGHT_PROBES )\n\t\tirradiance += getLightProbeIrradiance( lightProbe, geometryNormal );\n\t#endif\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif";

var lights_fragment_maps = "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n\t\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getIBLIrradiance( geometryNormal );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\t#ifdef USE_ANISOTROPY\n\t\tradiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );\n\t#else\n\t\tradiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );\n\t#endif\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );\n\t#endif\n#endif";

var lights_fragment_end = "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif";

var logdepthbuf_fragment = "#if defined( USE_LOGDEPTHBUF )\n\tgl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif";

var logdepthbuf_pars_fragment = "#if defined( USE_LOGDEPTHBUF )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif";

var logdepthbuf_pars_vertex = "#ifdef USE_LOGDEPTHBUF\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif";

var logdepthbuf_vertex = "#ifdef USE_LOGDEPTHBUF\n\tvFragDepth = 1.0 + gl_Position.w;\n\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n#endif";

var map_fragment = "#ifdef USE_MAP\n\tvec4 sampledDiffuseColor = texture2D( map, vMapUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\tsampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );\n\t\n\t#endif\n\tdiffuseColor *= sampledDiffuseColor;\n#endif";

var map_pars_fragment = "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif";

var map_particle_fragment = "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\t#if defined( USE_POINTS_UV )\n\t\tvec2 uv = vUv;\n\t#else\n\t\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\t#endif\n#endif\n#ifdef USE_MAP\n\tdiffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif";

var map_particle_pars_fragment = "#if defined( USE_POINTS_UV )\n\tvarying vec2 vUv;\n#else\n\t#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\t\tuniform mat3 uvTransform;\n\t#endif\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif";

var metalnessmap_fragment = "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif";

var metalnessmap_pars_fragment = "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif";

var morphinstance_vertex = "#ifdef USE_INSTANCING_MORPH\n\tfloat morphTargetInfluences[ MORPHTARGETS_COUNT ];\n\tfloat morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\tmorphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;\n\t}\n#endif";

var morphcolor_vertex = "#if defined( USE_MORPHCOLORS )\n\tvColor *= morphTargetBaseInfluence;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t#if defined( USE_COLOR_ALPHA )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n\t\t#elif defined( USE_COLOR )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n\t\t#endif\n\t}\n#endif";

var morphnormal_vertex = "#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\tif ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n\t}\n#endif";

var morphtarget_pars_vertex = "#ifdef USE_MORPHTARGETS\n\t#ifndef USE_INSTANCING_MORPH\n\t\tuniform float morphTargetBaseInfluence;\n\t\tuniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n\t#endif\n\tuniform sampler2DArray morphTargetsTexture;\n\tuniform ivec2 morphTargetsTextureSize;\n\tvec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n\t\tint texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n\t\tint y = texelIndex / morphTargetsTextureSize.x;\n\t\tint x = texelIndex - y * morphTargetsTextureSize.x;\n\t\tivec3 morphUV = ivec3( x, y, morphTargetIndex );\n\t\treturn texelFetch( morphTargetsTexture, morphUV, 0 );\n\t}\n#endif";

var morphtarget_vertex = "#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\tif ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n\t}\n#endif";

var normal_fragment_begin = "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n\tvec3 fdx = dFdx( vViewPosition );\n\tvec3 fdy = dFdy( vViewPosition );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal *= faceDirection;\n\t#endif\n#endif\n#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )\n\t#ifdef USE_TANGENT\n\t\tmat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n\t#else\n\t\tmat3 tbn = getTangentFrame( - vViewPosition, normal,\n\t\t#if defined( USE_NORMALMAP )\n\t\t\tvNormalMapUv\n\t\t#elif defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tvClearcoatNormalMapUv\n\t\t#else\n\t\t\tvUv\n\t\t#endif\n\t\t);\n\t#endif\n\t#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n\t\ttbn[0] *= faceDirection;\n\t\ttbn[1] *= faceDirection;\n\t#endif\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\t#ifdef USE_TANGENT\n\t\tmat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n\t#else\n\t\tmat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );\n\t#endif\n\t#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n\t\ttbn2[0] *= faceDirection;\n\t\ttbn2[1] *= faceDirection;\n\t#endif\n#endif\nvec3 nonPerturbedNormal = normal;";

var normal_fragment_maps = "#ifdef USE_NORMALMAP_OBJECTSPACE\n\tnormal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( USE_NORMALMAP_TANGENTSPACE )\n\tvec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\tnormal = normalize( tbn * mapN );\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif";

var normal_pars_fragment = "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif";

var normal_pars_vertex = "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif";

var normal_vertex = "#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif";

var normalmap_pars_fragment = "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef USE_NORMALMAP_OBJECTSPACE\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )\n\tmat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( uv.st );\n\t\tvec2 st1 = dFdy( uv.st );\n\t\tvec3 N = surf_norm;\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );\n\t\treturn mat3( T * scale, B * scale, N );\n\t}\n#endif";

var clearcoat_normal_fragment_begin = "#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal = nonPerturbedNormal;\n#endif";

var clearcoat_normal_fragment_maps = "#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\tclearcoatNormal = normalize( tbn2 * clearcoatMapN );\n#endif";

var clearcoat_pars_fragment = "#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif";

var iridescence_pars_fragment = "#ifdef USE_IRIDESCENCEMAP\n\tuniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tuniform sampler2D iridescenceThicknessMap;\n#endif";

var opaque_fragment = "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );";

var packing = "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec2 packDepthToRG( in highp float v ) {\n\treturn packDepthToRGBA( v ).yx;\n}\nfloat unpackRGToDepth( const in highp vec2 v ) {\n\treturn unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {\n\treturn depth * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * depth - far );\n}";

var premultiplied_alpha_fragment = "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif";

var project_vertex = "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_BATCHING\n\tmvPosition = batchingMatrix * mvPosition;\n#endif\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;";

var dithering_fragment = "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif";

var dithering_pars_fragment = "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif";

var roughnessmap_fragment = "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );\n\troughnessFactor *= texelRoughness.g;\n#endif";

var roughnessmap_pars_fragment = "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif";

var shadowmap_pars_fragment = "#if NUM_SPOT_LIGHT_COORDS > 0\n\tvarying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n\tuniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n\t\tbool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tfloat shadow = 1.0;\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\t\n\t\tfloat lightToPositionLength = length( lightToPosition );\n\t\tif ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {\n\t\t\tfloat dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\t\tdp += shadowBias;\n\t\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\t\tshadow = (\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t\t) * ( 1.0 / 9.0 );\n\t\t\t#else\n\t\t\t\tshadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n#endif";

var shadowmap_pars_vertex = "#if NUM_SPOT_LIGHT_COORDS > 0\n\tuniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n\tvarying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif";

var shadowmap_vertex = "#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\tvec4 shadowWorldPosition;\n#endif\n#if defined( USE_SHADOWMAP )\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if NUM_SPOT_LIGHT_COORDS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition;\n\t\t#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t\tshadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n\t\t#endif\n\t\tvSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n#endif";

var shadowmask_pars_fragment = "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}";

var skinbase_vertex = "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif";

var skinning_pars_vertex = "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\tuniform highp sampler2D boneTexture;\n\tmat4 getBoneMatrix( const in float i ) {\n\t\tint size = textureSize( boneTexture, 0 ).x;\n\t\tint j = int( i ) * 4;\n\t\tint x = j % size;\n\t\tint y = j / size;\n\t\tvec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );\n\t\tvec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );\n\t\tvec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );\n\t\tvec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );\n\t\treturn mat4( v1, v2, v3, v4 );\n\t}\n#endif";

var skinning_vertex = "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif";

var skinnormal_vertex = "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif";

var specularmap_fragment = "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif";

var specularmap_pars_fragment = "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif";

var tonemapping_fragment = "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif";

var tonemapping_pars_fragment = "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn saturate( toneMappingExposure * color );\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nconst mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(\n\tvec3( 1.6605, - 0.1246, - 0.0182 ),\n\tvec3( - 0.5876, 1.1329, - 0.1006 ),\n\tvec3( - 0.0728, - 0.0083, 1.1187 )\n);\nconst mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(\n\tvec3( 0.6274, 0.0691, 0.0164 ),\n\tvec3( 0.3293, 0.9195, 0.0880 ),\n\tvec3( 0.0433, 0.0113, 0.8956 )\n);\nvec3 agxDefaultContrastApprox( vec3 x ) {\n\tvec3 x2 = x * x;\n\tvec3 x4 = x2 * x2;\n\treturn + 15.5 * x4 * x2\n\t\t- 40.14 * x4 * x\n\t\t+ 31.96 * x4\n\t\t- 6.868 * x2 * x\n\t\t+ 0.4298 * x2\n\t\t+ 0.1191 * x\n\t\t- 0.00232;\n}\nvec3 AgXToneMapping( vec3 color ) {\n\tconst mat3 AgXInsetMatrix = mat3(\n\t\tvec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),\n\t\tvec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),\n\t\tvec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )\n\t);\n\tconst mat3 AgXOutsetMatrix = mat3(\n\t\tvec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),\n\t\tvec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),\n\t\tvec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )\n\t);\n\tconst float AgxMinEv = - 12.47393;\tconst float AgxMaxEv = 4.026069;\n\tcolor *= toneMappingExposure;\n\tcolor = LINEAR_SRGB_TO_LINEAR_REC2020 * color;\n\tcolor = AgXInsetMatrix * color;\n\tcolor = max( color, 1e-10 );\tcolor = log2( color );\n\tcolor = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );\n\tcolor = clamp( color, 0.0, 1.0 );\n\tcolor = agxDefaultContrastApprox( color );\n\tcolor = AgXOutsetMatrix * color;\n\tcolor = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );\n\tcolor = LINEAR_REC2020_TO_LINEAR_SRGB * color;\n\tcolor = clamp( color, 0.0, 1.0 );\n\treturn color;\n}\nvec3 NeutralToneMapping( vec3 color ) {\n\tconst float StartCompression = 0.8 - 0.04;\n\tconst float Desaturation = 0.15;\n\tcolor *= toneMappingExposure;\n\tfloat x = min( color.r, min( color.g, color.b ) );\n\tfloat offset = x < 0.08 ? x - 6.25 * x * x : 0.04;\n\tcolor -= offset;\n\tfloat peak = max( color.r, max( color.g, color.b ) );\n\tif ( peak < StartCompression ) return color;\n\tfloat d = 1. - StartCompression;\n\tfloat newPeak = 1. - d * d / ( peak + d - StartCompression );\n\tcolor *= newPeak / peak;\n\tfloat g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );\n\treturn mix( color, vec3( newPeak ), g );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }";

var transmission_fragment = "#ifdef USE_TRANSMISSION\n\tmaterial.transmission = transmission;\n\tmaterial.transmissionAlpha = 1.0;\n\tmaterial.thickness = thickness;\n\tmaterial.attenuationDistance = attenuationDistance;\n\tmaterial.attenuationColor = attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tmaterial.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tmaterial.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;\n\t#endif\n\tvec3 pos = vWorldPosition;\n\tvec3 v = normalize( cameraPosition - pos );\n\tvec3 n = inverseTransformDirection( normal, viewMatrix );\n\tvec4 transmitted = getIBLVolumeRefraction(\n\t\tn, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,\n\t\tpos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,\n\t\tmaterial.attenuationColor, material.attenuationDistance );\n\tmaterial.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );\n\ttotalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );\n#endif";

var transmission_pars_fragment = "#ifdef USE_TRANSMISSION\n\tuniform float transmission;\n\tuniform float thickness;\n\tuniform float attenuationDistance;\n\tuniform vec3 attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tuniform sampler2D transmissionMap;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tuniform sampler2D thicknessMap;\n\t#endif\n\tuniform vec2 transmissionSamplerSize;\n\tuniform sampler2D transmissionSamplerMap;\n\tuniform mat4 modelMatrix;\n\tuniform mat4 projectionMatrix;\n\tvarying vec3 vWorldPosition;\n\tfloat w0( float a ) {\n\t\treturn ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );\n\t}\n\tfloat w1( float a ) {\n\t\treturn ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );\n\t}\n\tfloat w2( float a ){\n\t\treturn ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );\n\t}\n\tfloat w3( float a ) {\n\t\treturn ( 1.0 / 6.0 ) * ( a * a * a );\n\t}\n\tfloat g0( float a ) {\n\t\treturn w0( a ) + w1( a );\n\t}\n\tfloat g1( float a ) {\n\t\treturn w2( a ) + w3( a );\n\t}\n\tfloat h0( float a ) {\n\t\treturn - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );\n\t}\n\tfloat h1( float a ) {\n\t\treturn 1.0 + w3( a ) / ( w2( a ) + w3( a ) );\n\t}\n\tvec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {\n\t\tuv = uv * texelSize.zw + 0.5;\n\t\tvec2 iuv = floor( uv );\n\t\tvec2 fuv = fract( uv );\n\t\tfloat g0x = g0( fuv.x );\n\t\tfloat g1x = g1( fuv.x );\n\t\tfloat h0x = h0( fuv.x );\n\t\tfloat h1x = h1( fuv.x );\n\t\tfloat h0y = h0( fuv.y );\n\t\tfloat h1y = h1( fuv.y );\n\t\tvec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n\t\treturn g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +\n\t\t\tg1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );\n\t}\n\tvec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {\n\t\tvec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );\n\t\tvec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );\n\t\tvec2 fLodSizeInv = 1.0 / fLodSize;\n\t\tvec2 cLodSizeInv = 1.0 / cLodSize;\n\t\tvec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );\n\t\tvec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );\n\t\treturn mix( fSample, cSample, fract( lod ) );\n\t}\n\tvec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n\t\tvec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n\t\tvec3 modelScale;\n\t\tmodelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n\t\tmodelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n\t\tmodelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n\t\treturn normalize( refractionVector ) * thickness * modelScale;\n\t}\n\tfloat applyIorToRoughness( const in float roughness, const in float ior ) {\n\t\treturn roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n\t}\n\tvec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n\t\tfloat lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n\t\treturn textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );\n\t}\n\tvec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tif ( isinf( attenuationDistance ) ) {\n\t\t\treturn vec3( 1.0 );\n\t\t} else {\n\t\t\tvec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n\t\t\tvec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );\t\t\treturn transmittance;\n\t\t}\n\t}\n\tvec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n\t\tconst in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n\t\tconst in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,\n\t\tconst in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tvec4 transmittedLight;\n\t\tvec3 transmittance;\n\t\t#ifdef USE_DISPERSION\n\t\t\tfloat halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;\n\t\t\tvec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );\n\t\t\tfor ( int i = 0; i < 3; i ++ ) {\n\t\t\t\tvec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );\n\t\t\t\tvec3 refractedRayExit = position + transmissionRay;\n\t\t\n\t\t\t\tvec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n\t\t\t\tvec2 refractionCoords = ndcPos.xy / ndcPos.w;\n\t\t\t\trefractionCoords += 1.0;\n\t\t\t\trefractionCoords /= 2.0;\n\t\t\n\t\t\t\tvec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );\n\t\t\t\ttransmittedLight[ i ] = transmissionSample[ i ];\n\t\t\t\ttransmittedLight.a += transmissionSample.a;\n\t\t\t\ttransmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];\n\t\t\t}\n\t\t\ttransmittedLight.a /= 3.0;\n\t\t\n\t\t#else\n\t\t\n\t\t\tvec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n\t\t\tvec3 refractedRayExit = position + transmissionRay;\n\t\t\tvec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n\t\t\tvec2 refractionCoords = ndcPos.xy / ndcPos.w;\n\t\t\trefractionCoords += 1.0;\n\t\t\trefractionCoords /= 2.0;\n\t\t\ttransmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n\t\t\ttransmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );\n\t\t\n\t\t#endif\n\t\tvec3 attenuatedColor = transmittance * transmittedLight.rgb;\n\t\tvec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n\t\tfloat transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;\n\t\treturn vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );\n\t}\n#endif";

var uv_pars_fragment = "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n\tvarying vec2 vUv;\n#endif\n#ifdef USE_MAP\n\tvarying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n\tvarying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n\tvarying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n\tvarying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n\tvarying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n\tvarying vec2 vNormalMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n\tvarying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n\tvarying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n\tvarying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n\tvarying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n\tvarying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tvarying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tvarying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\tvarying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tvarying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\tvarying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\tvarying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n\tvarying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\tvarying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\tvarying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\tuniform mat3 transmissionMapTransform;\n\tvarying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n\tuniform mat3 thicknessMapTransform;\n\tvarying vec2 vThicknessMapUv;\n#endif";

var uv_pars_vertex = "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n\tvarying vec2 vUv;\n#endif\n#ifdef USE_MAP\n\tuniform mat3 mapTransform;\n\tvarying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform mat3 alphaMapTransform;\n\tvarying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n\tuniform mat3 lightMapTransform;\n\tvarying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n\tuniform mat3 aoMapTransform;\n\tvarying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n\tuniform mat3 bumpMapTransform;\n\tvarying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n\tuniform mat3 normalMapTransform;\n\tvarying vec2 vNormalMapUv;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n\tuniform mat3 displacementMapTransform;\n\tvarying vec2 vDisplacementMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n\tuniform mat3 emissiveMapTransform;\n\tvarying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n\tuniform mat3 metalnessMapTransform;\n\tvarying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n\tuniform mat3 roughnessMapTransform;\n\tvarying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n\tuniform mat3 anisotropyMapTransform;\n\tvarying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n\tuniform mat3 clearcoatMapTransform;\n\tvarying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform mat3 clearcoatNormalMapTransform;\n\tvarying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform mat3 clearcoatRoughnessMapTransform;\n\tvarying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\tuniform mat3 sheenColorMapTransform;\n\tvarying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\tuniform mat3 sheenRoughnessMapTransform;\n\tvarying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\tuniform mat3 iridescenceMapTransform;\n\tvarying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tuniform mat3 iridescenceThicknessMapTransform;\n\tvarying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n\tuniform mat3 specularMapTransform;\n\tvarying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\tuniform mat3 specularColorMapTransform;\n\tvarying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\tuniform mat3 specularIntensityMapTransform;\n\tvarying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\tuniform mat3 transmissionMapTransform;\n\tvarying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n\tuniform mat3 thicknessMapTransform;\n\tvarying vec2 vThicknessMapUv;\n#endif";

var uv_vertex = "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n\tvUv = vec3( uv, 1 ).xy;\n#endif\n#ifdef USE_MAP\n\tvMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ALPHAMAP\n\tvAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_LIGHTMAP\n\tvLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_AOMAP\n\tvAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_BUMPMAP\n\tvBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_NORMALMAP\n\tvNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n\tvDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_EMISSIVEMAP\n\tvEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_METALNESSMAP\n\tvMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ROUGHNESSMAP\n\tvRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ANISOTROPYMAP\n\tvAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOATMAP\n\tvClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tvClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tvClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\tvIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tvIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\tvSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\tvSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULARMAP\n\tvSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\tvSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\tvSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\tvTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_THICKNESSMAP\n\tvThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;\n#endif";

var worldpos_vertex = "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_BATCHING\n\t\tworldPosition = batchingMatrix * worldPosition;\n\t#endif\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif";

const vertex$h = "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}";

const fragment$h = "uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\ttexColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );\n\t#endif\n\ttexColor.rgb *= backgroundIntensity;\n\tgl_FragColor = texColor;\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}";

const vertex$g = "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}";

const fragment$g = "#ifdef ENVMAP_TYPE_CUBE\n\tuniform samplerCube envMap;\n#elif defined( ENVMAP_TYPE_CUBE_UV )\n\tuniform sampler2D envMap;\n#endif\nuniform float flipEnvMap;\nuniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nuniform mat3 backgroundRotation;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );\n\t#else\n\t\tvec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t#endif\n\ttexColor.rgb *= backgroundIntensity;\n\tgl_FragColor = texColor;\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}";

const vertex$f = "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}";

const fragment$f = "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n\tvec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n\tgl_FragColor = texColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}";

const vertex$e = "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <batching_vertex>\n\t#include <skinbase_vertex>\n\t#include <morphinstance_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}";

const fragment$e = "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <clipping_planes_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}";

const vertex$d = "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <batching_vertex>\n\t#include <skinbase_vertex>\n\t#include <morphinstance_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}";

const fragment$d = "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <clipping_planes_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}";

const vertex$c = "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}";

const fragment$c = "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}";

const vertex$b = "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}";

const fragment$b = "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}";

const vertex$a = "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinbase_vertex>\n\t\t#include <skinnormal_vertex>\n\t\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}";

const fragment$a = "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n\t\treflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}";

const vertex$9 = "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}";

const fragment$9 = "#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_lambert_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedë®6÷¦òµë(š+myÖE7’&WGW&ã°  •ö–çFW'6V7Eö–çDöå&’æÇ”ÖG&—ƒB‚ö&¦V7BæÖG&—…v÷&ÆB“²òòÖ÷fR&6²Fòv÷&ÆB76Rf÷"F—7Fæ6R6Æ7VÆF–öà  –6öç7BF—7Fæ6RÒ&–67FW"ç&’æ÷&–v–âæF—7Fæ6UFò‚ö–çFW'6V7Eö–çDöå&’“°  ––b‚F—7Fæ6RÂ&–67FW"ææV"ÇÂF—7Fæ6Râ&–67FW"æf"’&WGW&ã°  —&WGW&â°  –F—7Fæ6S¢F—7Fæ6RÀ ’òòv†BFòvRvçCò–çFW'6V7F–öâö–çBöâF†R&’÷"öâF†R6VvÖVçCóð ’òòö–çC¢&–67FW"ç&’æB‚F—7Fæ6R’À —ö–çC¢ö–çFW'6V7Eö–çDöå6VvÖVçBæ6ÆöæR‚’æÇ”ÖG&—ƒB‚ö&¦V7BæÖG&—…v÷&ÆB’À ––æFWƒ¢À –f6S¢çVÆÂÀ –f6T–æFWƒ¢çVÆÂÀ –ö&¦V7C¢ö&¦V7@  —Ó° §Ð ¦6öç7B÷7F'BÒò¤õõU$Uõò¢òæWrfV7F÷#2‚“°¦6öç7BöVæBÒò¤õõU$Uõò¢òæWrfV7F÷#2‚“° ¦6Æ72Æ–æU6VvÖVçG2W‡FVæG2Æ–æR°  –6öç7G'V7F÷"‚vVöÖWG'’ÂÖFW&–Â’°  —7WW"‚vVöÖWG'’ÂÖFW&–Â“°  —F†—2æ—4Æ–æU6VvÖVçG2ÒG'VS°  —F†—2çG—RÒtÆ–æU6VvÖVçG2s°  —Ð  –6ö×WFTÆ–æTF—7Fæ6W2‚’°  –6öç7BvVöÖWG'’ÒF†—2ævVöÖWG'“°  ’òòvR77VÖRæöâÖ–æFW†VBvVöÖWG'  ––b‚vVöÖWG'’æ–æFW‚ÓÓÒçVÆÂ’°  –6öç7B÷6—F–öäGG&–'WFRÒvVöÖWG'’æGG&–'WFW2ç÷6—F–öã° –6öç7BÆ–æTF—7Fæ6W2ÒµÓ°  –f÷"‚ÆWB’ÒÂÂÒ÷6—F–öäGG&–'WFRæ6÷VçC²’ÂÃ²’³Ò"’°  •÷7F'Bæg&öÔ'VffW$GG&–'WFR‚÷6—F–öäGG&–'WFRÂ’“° •öVæBæg&öÔ'VffW$GG&–'WFR‚÷6—F–öäGG&–'WFRÂ’²“°  –Æ–æTF—7Fæ6W5²’ÒÒ‚’ÓÓÒ’ò¢Æ–æTF—7Fæ6W5²’ÒÓ° –Æ–æTF—7Fæ6W5²’²ÒÒÆ–æTF—7Fæ6W5²’Ò²÷7F'BæF—7Fæ6UFò‚öVæB“°  —Ð  –vVöÖWG'’ç6WDGG&–'WFR‚vÆ–æTF—7Fæ6RrÂæWrfÆöC3$'VffW$GG&–'WFR‚Æ–æTF—7Fæ6W2Â’“°  —ÒVÇ6R°  –6öç6öÆRçv&â‚uD…$TRäÆ–æU6VvÖVçG2æ6ö×WFTÆ–æTF—7Fæ6W2‚“¢6ö×WFF–öâöæÇ’÷76–&ÆRv—F‚æöâÖ–æFW†VB'VffW$vVöÖWG'’âr“°  —Ð  —&WGW&âF†—3°  —Ð §Ð ¦6Æ72Æ–æTÆö÷W‡FVæG2Æ–æR°  –6öç7G'V7F÷"‚vVöÖWG'’ÂÖFW&–Â’°  —7WW"‚vVöÖWG'’ÂÖFW&–Â“°  —F†—2æ—4Æ–æTÆö÷ÒG'VS°  —F†—2çG—RÒtÆ–æTÆö÷s°  —Ð §Ð ¦6Æ72ö–çG4ÖFW&–ÂW‡FVæG2ÖFW&–Â°  –6öç7G'V7F÷"‚&ÖWFW'2’°  —7WW"‚“°  —F†—2æ—5ö–çG4ÖFW&–ÂÒG'VS°  —F†—2çG—RÒuö–çG4ÖFW&–Âs°  —F†—2æ6öÆ÷"ÒæWr6öÆ÷"‚†fffffb“°  —F†—2æÖÒçVÆÃ°  —F†—2æÇ†ÖÒçVÆÃ°  —F†—2ç6—¦RÒ° —F†—2ç6—¦TGFVçVF–öâÒG'VS°  —F†—2æförÒG'VS°  —F†—2ç6WEfÇVW2‚&ÖWFW'2“°  —Ð  –6÷’‚6÷W&6R’°  —7WW"æ6÷’‚6÷W&6R“°  —F†—2æ6öÆ÷"æ6÷’‚6÷W&6Ræ6öÆ÷"“°  —F†—2æÖÒ6÷W&6RæÖ°  —F†—2æÇ†ÖÒ6÷W&6RæÇ†Ö°  —F†—2ç6—¦RÒ6÷W&6Rç6—¦S° —F†—2ç6—¦TGFVçVF–öâÒ6÷W&6Rç6—¦TGFVçVF–öã°  —F†—2æförÒ6÷W&6Ræfös°  —&WGW&âF†—3°  —Ð §Ð ¦6öç7Bö–çfW'6TÖG&—‚Òò¤õõU$Uõò¢òæWrÖG&—ƒB‚“°¦6öç7B÷&’Òò¤õõU$Uõò¢òæWr&’‚“°¦6öç7B÷7†W&RÒò¤õõU$Uõò¢òæWr7†W&R‚“°¦6öç7B÷÷6—F–öâC"Òò¤õõU$Uõò¢òæWrfV7F÷#2‚“° ¦6Æ72ö–çG2W‡FVæG2ö&¦V7C4B°  –6öç7G'V7F÷"‚vVöÖWG'’ÒæWr'VffW$vVöÖWG'’‚’ÂÖFW&–ÂÒæWrö–çG4ÖFW&–Â‚’’°  —7WW"‚“°  —F†—2æ—5ö–çG2ÒG'VS°  —F†—2çG—RÒuö–çG2s°  —F†—2ævVöÖWG'’ÒvVöÖWG'“° —F†—2æÖFW&–ÂÒÖFW&–Ã°  —F†—2çWFFTÖ÷'…F&vWG2‚“°  —Ð  –6÷’‚6÷W&6RÂ&V7W'6—fR’°  —7WW"æ6÷’‚6÷W&6RÂ&V7W'6—fR“°  —F†—2æÖFW&–ÂÒ'&’æ—4'&’‚6÷W&6RæÖFW&–Â’ò6÷W&6RæÖFW&–Âç6Æ–6R‚’¢6÷W&6RæÖFW&–Ã° —F†—2ævVöÖWG'’Ò6÷W&6RævVöÖWG'“°  —&WGW&âF†—3°  —Ð  —&–67B‚&–67FW"Â–çFW'6V7G2’°  –6öç7BvVöÖWG'’ÒF†—2ævVöÖWG'“° –6öç7BÖG&—…v÷&ÆBÒF†—2æÖG&—…v÷&ÆC° –6öç7BF‡&W6†öÆBÒ&–67FW"ç&×2åö–çG2çF‡&W6†öÆC° –6öç7BG&u&ævRÒvVöÖWG'’æG&u&ævS°  ’òò6†V6¶–ær&÷VæF–æu7†W&RF—7Fæ6RFò&  ––b‚vVöÖWG'’æ&÷VæF–æu7†W&RÓÓÒçVÆÂ’vVöÖWG'’æ6ö×WFT&÷VæF–æu7†W&R‚“°  •÷7†W&Ræ6÷’‚vVöÖWG'’æ&÷VæF–æu7†W&R“° •÷7†W&RæÇ”ÖG&—ƒB‚ÖG&—…v÷&ÆB“° •÷7†W&Rç&F—W2³ÒF‡&W6†öÆC°  ––b‚&–67FW"ç&’æ–çFW'6V7G57†W&R‚÷7†W&R’ÓÓÒfÇ6R’&WGW&ã°  ’òð  •ö–çfW'6TÖG&—‚æ6÷’‚ÖG&—…v÷&ÆB’æ–çfW'B‚“° •÷&’æ6÷’‚&–67FW"ç&’’æÇ”ÖG&—ƒB‚ö–çfW'6TÖG&—‚“°  –6öç7BÆö6ÅF‡&W6†öÆBÒF‡&W6†öÆBò‚‚F†—2ç66ÆRç‚²F†—2ç66ÆRç’²F†—2ç66ÆRç¢’ò2“° –6öç7BÆö6ÅF‡&W6†öÆE7ÒÆö6ÅF‡&W6†öÆB¢Æö6ÅF‡&W6†öÆC°  –6öç7B–æFW‚ÒvVöÖWG'’æ–æFWƒ° –6öç7BGG&–'WFW2ÒvVöÖWG'’æGG&–'WFW3° –6öç7B÷6—F–öäGG&–'WFRÒGG&–'WFW2ç÷6—F–öã°  ––b‚–æFW‚ÓÒçVÆÂ’°  –6öç7B7F'BÒÖF‚æÖ‚‚ÂG&u&ævRç7F'B“° –6öç7BVæBÒÖF‚æÖ–â‚–æFW‚æ6÷VçBÂ‚G&u&ævRç7F'B²G&u&ævRæ6÷VçB’“°  –f÷"‚ÆWB’Ò7F'BÂ–ÂÒVæC²’Â–Ã²’²²’°  –6öç7BÒ–æFW‚ævWE‚‚’“°  •÷÷6—F–öâC"æg&öÔ'VffW$GG&–'WFR‚÷6—F–öäGG&–'WFRÂ“°  —FW7Eö–çB‚÷÷6—F–öâC"ÂÂÆö6ÅF‡&W6†öÆE7ÂÖG&—…v÷&ÆBÂ&–67FW"Â–çFW'6V7G2ÂF†—2“°  —Ð  —ÒVÇ6R°  –6öç7B7F'BÒÖF‚æÖ‚‚ÂG&u&ævRç7F'B“° –6öç7BVæBÒÖF‚æÖ–â‚÷6—F–öäGG&–'WFRæ6÷VçBÂ‚G&u&ævRç7F'B²G&u&ævRæ6÷VçB’“°  –f÷"‚ÆWB’Ò7F'BÂÂÒVæC²’ÂÃ²’²²’°  •÷÷6—F–öâC"æg&öÔ'VffW$GG&–'WFR‚÷6—F–öäGG&–'WFRÂ’“°  —FW7Eö–çB‚÷÷6—F–öâC"Â’ÂÆö6ÅF‡&W6†öÆE7ÂÖG&—…v÷&ÆBÂ&–67FW"Â–çFW'6V7G2ÂF†—2“°  —Ð  —Ð  —Ð  —WFFTÖ÷'…F&vWG2‚’°  –6öç7BvVöÖWG'’ÒF†—2ævVöÖWG'“°  –6öç7BÖ÷'„GG&–'WFW2ÒvVöÖWG'’æÖ÷'„GG&–'WFW3° –6öç7B¶W—2Òö&¦V7Bæ¶W—2‚Ö÷'„GG&–'WFW2“°  ––b‚¶W—2æÆVæwF‚â’°  –6öç7BÖ÷'„GG&–'WFRÒÖ÷'„GG&–'WFW5²¶W—5²ÒÓ°  ––b‚Ö÷'„GG&–'WFRÓÒVæFVf–æVB’°  —F†—2æÖ÷'…F&vWD–æfÇVVæ6W2ÒµÓ° —F†—2æÖ÷'…F&vWDF–7F–öæ'’Ò·Ó°  –f÷"‚ÆWBÒÒÂÖÂÒÖ÷'„GG&–'WFRæÆVæwFƒ²ÒÂÖÃ²Ò²²’°  –6öç7BæÖRÒÖ÷'„GG&–'WFU²ÒÒææÖRÇÂ7G&–ær‚Ò“°  —F†—2æÖ÷'…F&vWD–æfÇVVæ6W2çW6‚‚“° —F†—2æÖ÷'…F&vWDF–7F–öæ'•²æÖRÒÒÓ°  —Ð  —Ð  —Ð  —Ð §Ð ¦gVæ7F–öâFW7Eö–çB‚ö–çBÂ–æFW‚ÂÆö6ÅF‡&W6†öÆE7ÂÖG&—…v÷&ÆBÂ&–67FW"Â–çFW'6V7G2Âö&¦V7B’°  –6öç7B&•ö–çDF—7Fæ6U7Ò÷&’æF—7Fæ6U7Fõö–çB‚ö–çB“°  ––b‚&•ö–çDF—7Fæ6U7ÂÆö6ÅF‡&W6†öÆE7’°  –6öç7B–çFW'6V7Eö–çBÒæWrfV7F÷#2‚“°  •÷&’æ6Æ÷6W7Eö–çEFõö–çB‚ö–çBÂ–çFW'6V7Eö–çB“° ––çFW'6V7Eö–çBæÇ”ÖG&—ƒB‚ÖG&—…v÷&ÆB“°  –6öç7BF—7Fæ6RÒ&–67FW"ç&’æ÷&–v–âæF—7Fæ6UFò‚–çFW'6V7Eö–çB“°  ––b‚F—7Fæ6RÂ&–67FW"ææV"ÇÂF—7Fæ6Râ&–67FW"æf"’&WGW&ã°  ––çFW'6V7G2çW6‚‚°  –F—7Fæ6S¢F—7Fæ6RÀ –F—7Fæ6UFõ&“¢ÖF‚ç7'B‚&•ö–çDF—7Fæ6U7’À —ö–çC¢–çFW'6V7Eö–çBÀ ––æFWƒ¢–æFW‚À –f6S¢çVÆÂÀ –ö&¦V7C¢ö&¦V7@  —Ò“°  —Ð §Ð ¦6Æ72f–FVõFW‡GW&RW‡FVæG2FW‡GW&R°  –6öç7G'V7F÷"‚f–FVòÂÖ–ærÂw&2Âw&BÂÖtf–ÇFW"ÂÖ–äf–ÇFW"Âf÷&ÖBÂG—RÂæ—6÷G&÷’’°  —7WW"‚f–FVòÂÖ–ærÂw&2Âw&BÂÖtf–ÇFW"ÂÖ–äf–ÇFW"Âf÷&ÖBÂG—RÂæ—6÷G&÷’“°  —F†—2æ—5f–FVõFW‡GW&RÒG'VS°  —F†—2æÖ–äf–ÇFW"ÒÖ–äf–ÇFW"ÓÒVæFVf–æVBòÖ–äf–ÇFW"¢Æ–æV$f–ÇFW#° —F†—2æÖtf–ÇFW"ÒÖtf–ÇFW"ÓÒVæFVf–æVBòÖtf–ÇFW"¢Æ–æV$f–ÇFW#°  —F†—2ævVæW&FTÖ—Ö2ÒfÇ6S°  –6öç7B66÷RÒF†—3°  –gVæ7F–öâWFFUf–FVò‚’°  —66÷RææVVG5WFFRÒG'VS° —f–FVòç&WVW7Ef–FVôg&ÖT6ÆÆ&6²‚WFFUf–FVò“°  —Ð  ––b‚w&WVW7Ef–FVôg&ÖT6ÆÆ&6²r–âf–FVò’°  —f–FVòç&WVW7Ef–FVôg&ÖT6ÆÆ&6²‚WFFUf–FVò“°  —Ð  —Ð  –6ÆöæR‚’°  —&WGW&âæWrF†—2æ6öç7G'V7F÷"‚F†—2æ–ÖvR’æ6÷’‚F†—2“°  —Ð  —WFFR‚’°  –6öç7Bf–FVòÒF†—2æ–ÖvS° –6öç7B†5f–FVôg&ÖT6ÆÆ&6²Òw&WVW7Ef–FVôg&ÖT6ÆÆ&6²r–âf–FVó°  ––b‚†5f–FVôg&ÖT6ÆÆ&6²ÓÓÒfÇ6Rbbf–FVòç&VG•7FFRãÒf–FVòä„dUô5U%$TåEôDD’°  —F†—2ææVVG5WFFRÒG'VS°  —Ð  —Ð §Ð ¦6Æ72g&ÖV'VffW%FW‡GW&RW‡FVæG2FW‡GW&R°  –6öç7G'V7F÷"‚v–GF‚Â†V–v‡B’°  —7WW"‚²v–GF‚Â†V–v‡BÒ“°  —F†—2æ—4g&ÖV'VffW%FW‡GW&RÒG'VS°  —F†—2æÖtf–ÇFW"ÒæV&W7Df–ÇFW#° —F†—2æÖ–äf–ÇFW"ÒæV&W7Df–ÇFW#°  —F†—2ævVæW&FTÖ—Ö2ÒfÇ6S°  —F†—2ææVVG5WFFRÒG'VS°  —Ð §Ð ¦6Æ726ö×&W76VEFW‡GW&RW‡FVæG2FW‡GW&R°  –6öç7G'V7F÷"‚Ö—Ö2Âv–GF‚Â†V–v‡BÂf÷&ÖBÂG—RÂÖ–ærÂw&2Âw&BÂÖtf–ÇFW"ÂÖ–äf–ÇFW"Âæ—6÷G&÷’Â6öÆ÷%76R’°  —7WW"‚çVÆÂÂÖ–ærÂw&2Âw&BÂÖtf–ÇFW"ÂÖ–äf–ÇFW"Âf÷&ÖBÂG—RÂæ—6÷G&÷’Â6öÆ÷%76R“°  —F†—2æ—46ö×&W76VEFW‡GW&RÒG'VS°  —F†—2æ–ÖvRÒ²v–GFƒ¢v–GF‚Â†V–v‡C¢†V–v‡BÓ° —F†—2æÖ—Ö2ÒÖ—Ö3°  ’òòæòfÆ—–ærf÷"7V&RFW‡GW&W0 ’òò†Ç6òfÆ—–ærFöW6âwBv÷&²f÷"6ö×&W76VBFW‡GW&W2  —F†—2æfÆ—’ÒfÇ6S°  ’òò6âwBvVæW&FRÖ—Ö2f÷"6ö×&W76VBFW‡GW&W0 ’òòÖ—2×W7B&RVÖ&VFFVB–âDE2f–ÆW0  —F†—2ævVæW&FTÖ—Ö2ÒfÇ6S°  —Ð §Ð ¦6Æ726ö×&W76VD'&•FW‡GW&RW‡FVæG26ö×&W76VEFW‡GW&R°  –6öç7G'V7F÷"‚Ö—Ö2Âv–GF‚Â†V–v‡BÂFWF‚Âf÷&ÖBÂG—R’°  —7WW"‚Ö—Ö2Âv–GF‚Â†V–v‡BÂf÷&ÖBÂG—R“°  —F†—2æ—46ö×&W76VD'&•FW‡GW&RÒG'VS° —F†—2æ–ÖvRæFWF‚ÒFWFƒ° —F†—2çw&"Ò6Æ×FôVFvUw&–æs°  —F†—2æÆ–W%WFFW2ÒæWr6WB‚“°  —Ð  –FDÆ–W%WFFW2‚Æ–W$–æFW‚’°  —F†—2æÆ–W%WFFW2æFB‚Æ–W$–æFW‚“°  —Ð  –6ÆV$Æ–W%WFFW2‚’°  —F†—2æÆ–W%WFFW2æ6ÆV"‚“°  —Ð §Ð ¦6Æ726ö×&W76VD7V&UFW‡GW&RW‡FVæG26ö×&W76VEFW‡GW&R°  –6öç7G'V7F÷"‚–ÖvW2Âf÷&ÖBÂG—R’°  —7WW"‚VæFVf–æVBÂ–ÖvW5²Òçv–GF‚Â–ÖvW5²Òæ†V–v‡BÂf÷&ÖBÂG—RÂ7V&U&VfÆV7F–öäÖ–ær“°  —F†—2æ—46ö×&W76VD7V&UFW‡GW&RÒG'VS° —F†—2æ—47V&UFW‡GW&RÒG'VS°  —F†—2æ–ÖvRÒ–ÖvW3°  —Ð §Ð ¦6Æ726çf5FW‡GW&RW‡FVæG2FW‡GW&R°  –6öç7G'V7F÷"‚6çf2ÂÖ–ærÂw&2Âw&BÂÖtf–ÇFW"ÂÖ–äf–ÇFW"Âf÷&ÖBÂG—RÂæ—6÷G&÷’’°  —7WW"‚6çf2ÂÖ–ærÂw&2Âw&BÂÖtf–ÇFW"ÂÖ–äf–ÇFW"Âf÷&ÖBÂG—RÂæ—6÷G&÷’“°  —F†—2æ—46çf5FW‡GW&RÒG'VS°  —F†—2ææVVG5WFFRÒG'VS°  —Ð §Ð ¢ò¢ ¢¢W‡FVç6–&ÆR7W'fRö&¦V7Bà¢ ¢¢6öÖR6öÖÖöâöb7W'fRÖWF†öG3 ¢¢ævWEö–çB‚BÂ÷F–öæÅF&vWB’ÂævWEFævVçB‚BÂ÷F–öæÅF&vWB¢¢ævWEö–çDB‚RÂ÷F–öæÅF&vWB’ÂævWEFævVçDB‚RÂ÷F–öæÅF&vWB¢¢ævWEö–çG2‚’ÂævWE76VEö–çG2‚¢¢ævWDÆVæwF‚‚¢¢çWFFT&4ÆVæwF‡2‚¢ ¢¢F†—2föÆÆ÷v–ær7W'fW2–æ†W&—Bg&öÒD…$TRä7W'fS ¢ ¢¢ÒÒ$B7W'fW2ÒÐ¢¢D…$TRä&47W'fP¢¢D…$TRä7V&–4&W¦–W$7W'fP¢¢D…$TRäVÆÆ—6T7W'fP¢¢D…$TRäÆ–æT7W'fP¢¢D…$TRåVG&F–4&W¦–W$7W'fP¢¢D…$TRå7Æ–æT7W'fP¢ ¢¢ÒÒ4B7W'fW2ÒÐ¢¢D…$TRä6F×VÆÅ&öÔ7W'fS0¢¢D…$TRä7V&–4&W¦–W$7W'fS0¢¢D…$TRäÆ–æT7W'fS0¢¢D…$TRåVG&F–4&W¦–W$7W'fS0¢ ¢¢6W&–W2öb7W'fW26â&R&W&W6VçFVB2D…$TRä7W'fUF‚à¢ ¢¢¢ð ¦6Æ727W'fR°  –6öç7G'V7F÷"‚’°  —F†—2çG—RÒt7W'fRs°  —F†—2æ&4ÆVæwF„F—f—6–öç2Ò#°  —Ð  ’òòf—'GVÂ&6R6Æ72ÖWF†öBFò÷fW'w&—FRæB–×ÆVÖVçB–â7V&6Æ76W0 ’òð’ÒB³ââÐ  –vWEö–çB‚ò¢BÂ÷F–öæÅF&vWB¢ò’°  –6öç6öÆRçv&â‚uD…$TRä7W'fS¢ævWEö–çB‚’æ÷B–×ÆVÖVçFVBâr“° —&WGW&âçVÆÃ°  —Ð  ’òòvWBö–çBB&VÆF—fR÷6—F–öâ–â7W'fR66÷&F–ærFò&2ÆVæwF€ ’òòÒR³ââÐ  –vWEö–çDB‚RÂ÷F–öæÅF&vWB’°  –6öç7BBÒF†—2ævWEWFõFÖ–ær‚R“° —&WGW&âF†—2ævWEö–çB‚BÂ÷F–öæÅF&vWB“°  —Ð  ’òòvWB6WVVæ6Röbö–çG2W6–ærvWEö–çB‚B  –vWEö–çG2‚F—f—6–öç2ÒR’°  –6öç7Bö–çG2ÒµÓ°  –f÷"‚ÆWBBÒ²BÃÒF—f—6–öç3²B²²’°  —ö–çG2çW6‚‚F†—2ævWEö–çB‚BòF—f—6–öç2’“°  —Ð  —&WGW&âö–çG3°  —Ð  ’òòvWB6WVVæ6Röbö–çG2W6–ærvWEö–çDB‚R  –vWE76VEö–çG2‚F—f—6–öç2ÒR’°  –6öç7Bö–çG2ÒµÓ°  –f÷"‚ÆWBBÒ²BÃÒF—f—6–öç3²B²²’°  —ö–çG2çW6‚‚F†—2ævWEö–çDB‚BòF—f—6–öç2’“°  —Ð  —&WGW&âö–çG3°  —Ð  ’òòvWBF÷FÂ7W'fR&2ÆVæwF€  –vWDÆVæwF‚‚’°  –6öç7BÆVæwF‡2ÒF†—2ævWDÆVæwF‡2‚“° —&WGW&âÆVæwF‡5²ÆVæwF‡2æÆVæwF‚ÒÓ°  —Ð  ’òòvWBÆ—7Böb7V×VÆF—fR6VvÖVçBÆVæwF‡0  –vWDÆVæwF‡2‚F—f—6–öç2ÒF†—2æ&4ÆVæwF„F—f—6–öç2’°  ––b‚F†—2æ66†T&4ÆVæwF‡2b` ’‚F†—2æ66†T&4ÆVæwF‡2æÆVæwF‚ÓÓÒF—f—6–öç2²’b` ’F†—2ææVVG5WFFR’°  —&WGW&âF†—2æ66†T&4ÆVæwF‡3°  —Ð  —F†—2ææVVG5WFFRÒfÇ6S°  –6öç7B66†RÒµÓ° –ÆWB7W'&VçBÂÆ7BÒF†—2ævWEö–çB‚“° –ÆWB7VÒÒ°  –66†RçW6‚‚“°  –f÷"‚ÆWBÒ²ÃÒF—f—6–öç3²²²’°  –7W'&VçBÒF†—2ævWEö–çB‚òF—f—6–öç2“° —7VÒ³Ò7W'&VçBæF—7Fæ6UFò‚Æ7B“° –66†RçW6‚‚7VÒ“° –Æ7BÒ7W'&VçC°  —Ð  —F†—2æ66†T&4ÆVæwF‡2Ò66†S°  —&WGW&â66†S²òò²7V×3¢66†RÂ7VÓ¢7VÒÓ²7VÒ—2–âF†RÆ7BVÆVÖVçBà  —Ð  —WFFT&4ÆVæwF‡2‚’°  —F†—2ææVVG5WFFRÒG'VS° —F†—2ævWDÆVæwF‡2‚“°  —Ð  ’òòv—fVâR‚ââ’ÂvWBBFòf–æBâF†—2v—fW2–÷Rö–çG2v†–6‚&RWV–F—7Fç@  –vWEWFõFÖ–ær‚RÂF—7Fæ6R’°  –6öç7B&4ÆVæwF‡2ÒF†—2ævWDÆVæwF‡2‚“°  –ÆWB’Ò° –6öç7B–ÂÒ&4ÆVæwF‡2æÆVæwFƒ°  –ÆWBF&vWD&4ÆVæwFƒ²òòF†RF&vWFVBRF—7Fæ6RfÇVRFòvW@  ––b‚F—7Fæ6R’°  —F&vWD&4ÆVæwF‚ÒF—7Fæ6S°  —ÒVÇ6R°  —F&vWD&4ÆVæwF‚ÒR¢&4ÆVæwF‡5²–ÂÒÓ°  —Ð  ’òò&–æ'’6V&6‚f÷"F†R–æFW‚v—F‚Æ&vW7BfÇVR6ÖÆÆW"F†âF&vWBRF—7Fæ6P  –ÆWBÆ÷rÒÂ†–v‚Ò–ÂÒÂ6ö×&—6öã°  —v†–ÆR‚Æ÷rÃÒ†–v‚’°  –’ÒÖF‚æfÆö÷"‚Æ÷r²‚†–v‚ÒÆ÷r’ò"“²òòÆW72Æ–¶VÇ’Fò÷fW&fÆ÷rÂF†÷Vv‚&ö&&Ç’æ÷B—77VR†W&RÂ¥2FöW6âwB&VÆÇ’†fR–çFVvW'2ÂÆÂçVÖ&W'2&RfÆöG0  –6ö×&—6öâÒ&4ÆVæwF‡5²’ÒÒF&vWD&4ÆVæwFƒ°  ––b‚6ö×&—6öâÂ’°  –Æ÷rÒ’²°  —ÒVÇ6R–b‚6ö×&—6öââ’°  –†–v‚Ò’Ò°  —ÒVÇ6R°  –†–v‚Ò“° –'&V³°  ’òòDôäP  —Ð  —Ð  –’Ò†–vƒ°  ––b‚&4ÆVæwF‡5²’ÒÓÓÒF&vWD&4ÆVæwF‚’°  —&WGW&â’ò‚–ÂÒ“°  —Ð  ’òòvR6÷VÆBvWBf–æW"w&–âBÆVæwF‡2Â÷"W6R6–×ÆR–çFW'öÆF–öâ&WGvVVâGvòö–çG0  –6öç7BÆVæwF„&Vf÷&RÒ&4ÆVæwF‡5²’Ó° –6öç7BÆVæwF„gFW"Ò&4ÆVæwF‡5²’²Ó°  –6öç7B6VvÖVçDÆVæwF‚ÒÆVæwF„gFW"ÒÆVæwF„&Vf÷&S°  ’òòFWFW&Ö–æRv†W&RvR&R&WGvVVâF†Rv&Vf÷&RræBvgFW"rö–çG0  –6öç7B6VvÖVçDg&7F–öâÒ‚F&vWD&4ÆVæwF‚ÒÆVæwF„&Vf÷&R’ò6VvÖVçDÆVæwFƒ°  ’òòFBF†Bg&7F–öæÂÖ÷VçBFò@  –6öç7BBÒ‚’²6VvÖVçDg&7F–öâ’ò‚–ÂÒ“°  —&WGW&âC°  —Ð  ’òò&WGW&ç2Væ—BfV7F÷"FævVçBB@ ’òò–â66Rç’7V"7W'fRFöW2æ÷B–×ÆVÖVçB—G2FævVçBFW&—fF–öâÀ ’òò"ö–çG26ÖÆÂFVÇF'Bv–ÆÂ&RW6VBFòf–æB—G2w&F–Vç@ ’òòv†–6‚6VV×2Fòv—fR&V6öæ&ÆR&÷†–ÖF–öà  –vWEFævVçB‚BÂ÷F–öæÅF&vWB’°  –6öç7BFVÇFÒã° –ÆWBCÒBÒFVÇF° –ÆWBC"ÒB²FVÇF°  ’òò6–ær–â66RöbFævW   ––b‚CÂ’CÒ° ––b‚C"â’C"Ò°  –6öç7BCÒF†—2ævWEö–çB‚C“° –6öç7BC"ÒF†—2ævWEö–çB‚C"“°  –6öç7BFævVçBÒ÷F–öæÅF&vWBÇÂ‚‚Cæ—5fV7F÷#"’òæWrfV7F÷#"‚’¢æWrfV7F÷#2‚’“°  —FævVçBæ6÷’‚C"’ç7V"‚C’ææ÷&ÖÆ—¦R‚“°  —&WGW&âFævVçC°  —Ð  –vWEFævVçDB‚RÂ÷F–öæÅF&vWB’°  –6öç7BBÒF†—2ævWEWFõFÖ–ær‚R“° —&WGW&âF†—2ævWEFævVçB‚BÂ÷F–öæÅF&vWB“°  —Ð  –6ö×WFTg&VæWDg&ÖW2‚6VvÖVçG2Â6Æ÷6VB’°  ’òò6VR‡GG¢ò÷wwræ72æ–æF–ææVGR÷V"÷FV6‡&W÷'G2õE#C#RçF`  –6öç7Bæ÷&ÖÂÒæWrfV7F÷#2‚“°  –6öç7BFævVçG2ÒµÓ° –6öç7Bæ÷&ÖÇ2ÒµÓ° –6öç7B&–æ÷&ÖÇ2ÒµÓ°  –6öç7BfV2ÒæWrfV7F÷#2‚“° –6öç7BÖBÒæWrÖG&—ƒB‚“°  ’òò6ö×WFRF†RFævVçBfV7F÷'2f÷"V6‚6VvÖVçBöâF†R7W'fP  –f÷"‚ÆWB’Ò²’ÃÒ6VvÖVçG3²’²²’°  –6öç7BRÒ’ò6VvÖVçG3°  —FævVçG5²’ÒÒF†—2ævWEFævVçDB‚RÂæWrfV7F÷#2‚’“°  —Ð  ’òò6VÆV7Bâ–æ—F–Âæ÷&ÖÂfV7F÷"W'VæF–7VÆ"FòF†Rf—'7BFævVçBfV7F÷"À ’òòæB–âF†RF—&V7F–öâöbF†RÖ–æ–×VÒFævVçB‡—¢6ö×öæVç@  –æ÷&ÖÇ5²ÒÒæWrfV7F÷#2‚“° –&–æ÷&ÖÇ5²ÒÒæWrfV7F÷#2‚“° –ÆWBÖ–âÒçVÖ&W"äÔ…õdÅTS° –6öç7BG‚ÒÖF‚æ'2‚FævVçG5²Òç‚“° –6öç7BG’ÒÖF‚æ'2‚FævVçG5²Òç’“° –6öç7BG¢ÒÖF‚æ'2‚FævVçG5²Òç¢“°  ––b‚G‚ÃÒÖ–â’°  –Ö–âÒGƒ° –æ÷&ÖÂç6WB‚ÂÂ“°  —Ð  ––b‚G’ÃÒÖ–â’°  –Ö–âÒG“° –æ÷&ÖÂç6WB‚ÂÂ“°  —Ð  ––b‚G¢ÃÒÖ–â’°  –æ÷&ÖÂç6WB‚ÂÂ“°  —Ð  —fV2æ7&÷75fV7F÷'2‚FævVçG5²ÒÂæ÷&ÖÂ’ææ÷&ÖÆ—¦R‚“°  –æ÷&ÖÇ5²Òæ7&÷75fV7F÷'2‚FævVçG5²ÒÂfV2“° –&–æ÷&ÖÇ5²Òæ7&÷75fV7F÷'2‚FævVçG5²ÒÂæ÷&ÖÇ5²Ò“°   ’òò6ö×WFRF†R6Æ÷vÇ’×f'––æræ÷&ÖÂæB&–æ÷&ÖÂfV7F÷'2f÷"V6‚6VvÖVçBöâF†R7W'fP  –f÷"‚ÆWB’Ò²’ÃÒ6VvÖVçG3²’²²’°  –æ÷&ÖÇ5²’ÒÒæ÷&ÖÇ5²’ÒÒæ6ÆöæR‚“°  –&–æ÷&ÖÇ5²’ÒÒ&–æ÷&ÖÇ5²’ÒÒæ6ÆöæR‚“°  —fV2æ7&÷75fV7F÷'2‚FævVçG5²’ÒÒÂFævVçG5²’Ò“°  ––b‚fV2æÆVæwF‚‚’âçVÖ&W"äU4”Äôâ’°  —fV2ææ÷&ÖÆ—¦R‚“°  –6öç7BF†WFÒÖF‚æ6÷2‚6Æ×‚FævVçG5²’ÒÒæF÷B‚FævVçG5²’Ò’ÂÒÂ’“²òò6Æ×f÷"fÆöF–ærBW'&÷'0  –æ÷&ÖÇ5²’ÒæÇ”ÖG&—ƒB‚ÖBæÖ¶U&÷FF–öä†—2‚fV2ÂF†WF’“°  —Ð  –&–æ÷&ÖÇ5²’Òæ7&÷75fV7F÷'2‚FævVçG5²’ÒÂæ÷&ÖÇ5²’Ò“°  —Ð  ’òò–bF†R7W'fR—26Æ÷6VBÂ÷7G&ö6W72F†RfV7F÷'26òF†Rf—'7BæBÆ7Bæ÷&ÖÂfV7F÷'2&RF†R6ÖP  ––b‚6Æ÷6VBÓÓÒG'VR’°  –ÆWBF†WFÒÖF‚æ6÷2‚6Æ×‚æ÷&ÖÇ5²ÒæF÷B‚æ÷&ÖÇ5²6VvÖVçG2Ò’ÂÒÂ’“° —F†WFóÒ6VvÖVçG3°  ––b‚FævVçG5²ÒæF÷B‚fV2æ7&÷75fV7F÷'2‚æ÷&ÖÇ5²ÒÂæ÷&ÖÇ5²6VvÖVçG2Ò’’â’°  —F†WFÒÒF†WF°  —Ð  –f÷"‚ÆWB’Ò²’ÃÒ6VvÖVçG3²’²²’°  ’òòGv—7BÆ—GFÆRââà –æ÷&ÖÇ5²’ÒæÇ”ÖG&—ƒB‚ÖBæÖ¶U&÷FF–öä†—2‚FævVçG5²’ÒÂF†WF¢’’“° –&–æ÷&ÖÇ5²’Òæ7&÷75fV7F÷'2‚FævVçG5²’ÒÂæ÷&ÖÇ5²’Ò“°  —Ð  —Ð  —&WGW&â° —FævVçG3¢FævVçG2À –æ÷&ÖÇ3¢æ÷&ÖÇ2À –&–æ÷&ÖÇ3¢&–æ÷&ÖÇ0 —Ó°  —Ð  –6ÆöæR‚’°  —&WGW&âæWrF†—2æ6öç7G'V7F÷"‚’æ6÷’‚F†—2“°  —Ð  –6÷’‚6÷W&6R’°  —F†—2æ&4ÆVæwF„F—f—6–öç2Ò6÷W&6Ræ&4ÆVæwF„F—f—6–öç3°  —&WGW&âF†—3°  —Ð  —Fô¥4ôâ‚’°  –6öç7BFFÒ° –ÖWFFF¢° —fW'6–öã¢BãbÀ —G—S¢t7W'fRrÀ –vVæW&F÷#¢t7W'fRçFô¥4ôâp —Ð —Ó°  –FFæ&4ÆVæwF„F—f—6–öç2ÒF†—2æ&4ÆVæwF„F—f—6–öç3° –FFçG—RÒF†—2çG—S°  —&WGW&âFF°  —Ð  –g&öÔ¥4ôâ‚§6öâ’°  —F†—2æ&4ÆVæwF„F—f—6–öç2Ò§6öâæ&4ÆVæwF„F—f—6–öç3°  —&WGW&âF†—3°  —Ð §Ð ¦6Æ72VÆÆ—6T7W'fRW‡FVæG27W'fR°  –6öç7G'V7F÷"‚‚ÒÂ’ÒÂ…&F—W2ÒÂ•&F—W2ÒÂ7F'DævÆRÒÂVæDævÆRÒÖF‚å’¢"Â6Æö6·v—6RÒfÇ6RÂ&÷FF–öâÒ’°  —7WW"‚“°  —F†—2æ—4VÆÆ—6T7W'fRÒG'VS°  —F†—2çG—RÒtVÆÆ—6T7W'fRs°  —F†—2æ‚Òƒ° —F†—2æ’Ò“°  —F†—2ç…&F—W2Ò…&F—W3° —F†—2ç•&F—W2Ò•&F—W3°  —F†—2æ7F'DævÆRÒ7F'DævÆS° —F†—2æVæDævÆRÒVæDævÆS°  —F†—2æ6Æö6·v—6RÒ6Æö6·v—6S°  —F†—2æ&÷FF–öâÒ&÷FF–öã°  —Ð  –vWEö–çB‚BÂ÷F–öæÅF&vWBÒæWrfV7F÷#"‚’’°  –6öç7Bö–çBÒ÷F–öæÅF&vWC°  –6öç7BGvõ’ÒÖF‚å’¢#° –ÆWBFVÇFævÆRÒF†—2æVæDævÆRÒF†—2æ7F'DævÆS° –6öç7B6ÖUö–çG2ÒÖF‚æ'2‚FVÇFævÆR’ÂçVÖ&W"äU4”Äôã°  ’òòVç7W&W2F†BFVÇFævÆR—2ââ" —v†–ÆR‚FVÇFævÆRÂ’FVÇFævÆR³ÒGvõ“° —v†–ÆR‚FVÇFævÆRâGvõ’’FVÇFævÆRÓÒGvõ“°  ––b‚FVÇFævÆRÂçVÖ&W"äU4”Äôâ’°  ––b‚6ÖUö–çG2’°  –FVÇFævÆRÒ°  —ÒVÇ6R°  –FVÇFævÆRÒGvõ“°  —Ð  —Ð  ––b‚F†—2æ6Æö6·v—6RÓÓÒG'VRbb6ÖUö–çG2’°  ––b‚FVÇFævÆRÓÓÒGvõ’’°  –FVÇFævÆRÒÒGvõ“°  —ÒVÇ6R°  –FVÇFævÆRÒFVÇFævÆRÒGvõ“°  —Ð  —Ð  –6öç7BævÆRÒF†—2æ7F'DævÆR²B¢FVÇFævÆS° –ÆWB‚ÒF†—2æ‚²F†—2ç…&F—W2¢ÖF‚æ6÷2‚ævÆR“° –ÆWB’ÒF†—2æ’²F†—2ç•&F—W2¢ÖF‚ç6–â‚ævÆR“°  ––b‚F†—2æ&÷FF–öâÓÒ’°  –6öç7B6÷2ÒÖF‚æ6÷2‚F†—2æ&÷FF–öâ“° –6öç7B6–âÒÖF‚ç6–â‚F†—2æ&÷FF–öâ“°  –6öç7BG‚Ò‚ÒF†—2æƒ° –6öç7BG’Ò’ÒF†—2æ“°  ’òò&÷FFRF†Rö–çB&÷WBF†R6VçFW"öbF†RVÆÆ—6Rà —‚ÒG‚¢6÷2ÒG’¢6–â²F†—2æƒ° —’ÒG‚¢6–â²G’¢6÷2²F†—2æ“°  —Ð  —&WGW&âö–çBç6WB‚‚Â’“°  —Ð  –6÷’‚6÷W&6R’°  —7WW"æ6÷’‚6÷W&6R“°  —F†—2æ‚Ò6÷W&6Ræƒ° —F†—2æ’Ò6÷W&6Ræ“°  —F†—2ç…&F—W2Ò6÷W&6Rç…&F—W3° —F†—2ç•&F—W2Ò6÷W&6Rç•&F—W3°  —F†—2æ7F'DævÆRÒ6÷W&6Ræ7F'DævÆS° —F†—2æVæDævÆRÒ6÷W&6RæVæDævÆS°  —F†—2æ6Æö6·v—6RÒ6÷W&6Ræ6Æö6·v—6S°  —F†—2æ&÷FF–öâÒ6÷W&6Ræ&÷FF–öã°  —&WGW&âF†—3°  —Ð  —Fô¥4ôâ‚’°  –6öç7BFFÒ7WW"çFô¥4ôâ‚“°  –FFæ‚ÒF†—2æƒ° –FFæ’ÒF†—2æ“°  –FFç…&F—W2ÒF†—2ç…&F—W3° –FFç•&F—W2ÒF†—2ç•&F—W3°  –FFæ7F'DævÆRÒF†—2æ7F'DævÆS° –FFæVæDævÆRÒF†—2æVæDævÆS°  –FFæ6Æö6·v—6RÒF†—2æ6Æö6·v—6S°  –FFæ&÷FF–öâÒF†—2æ&÷FF–öã°  —&WGW&âFF°  —Ð  –g&öÔ¥4ôâ‚§6öâ’°  —7WW"æg&öÔ¥4ôâ‚§6öâ“°  —F†—2æ‚Ò§6öâæƒ° —F†—2æ’Ò§6öâæ“°  —F†—2ç…&F—W2Ò§6öâç…&F—W3° —F†—2ç•&F—W2Ò§6öâç•&F—W3°  —F†—2æ7F'DævÆRÒ§6öâæ7F'DævÆS° —F†—2æVæDævÆRÒ§6öâæVæDævÆS°  —F†—2æ6Æö6·v—6RÒ§6öâæ6Æö6·v—6S°  —F†—2æ&÷FF–öâÒ§6öâæ&÷FF–öã°  —&WGW&âF†—3°  —Ð §Ð ¦6Æ72&47W'fRW‡FVæG2VÆÆ—6T7W'fR°  –6öç7G'V7F÷"‚‚Â’Â&F—W2Â7F'DævÆRÂVæDævÆRÂ6Æö6·v—6R’°  —7WW"‚‚Â’Â&F—W2Â&F—W2Â7F'DævÆRÂVæDævÆRÂ6Æö6·v—6R“°  —F†—2æ—4&47W'fRÒG'VS°  —F†—2çG—RÒt&47W'fRs°  —Ð §Ð ¢ò¢ ¢¢6VçG&—WFÂ6F×VÆÅ&öÒ7W'fRÒv†–6‚—2W6VgVÂf÷"fö–F–æp¢¢7W72æB6VÆbÖ–çFW'6V7F–öç2–âæöâ×Væ–f÷&Ò6F×VÆÂ&öÒ7W'fW2à¢¢‡GG¢ò÷wwræ6V×—V·6VÂæ6öÒ÷&W6V&6‚ö6F×VÆÇ&öÕ÷&Òö6F×VÆÇ&öÒçF`¢ ¢¢7W'fRçG—R66WG26VçG&—WFÂ†FVfVÇB’Â6†÷&FÂæB6F×VÆÇ&öÐ¢¢7W'fRçFVç6–öâ—2W6VBf÷"6F×VÆÇ&öÒv†–6‚FVfVÇG2FòãP¢¢ð  ¢ò ¤&6VBöââ÷F–Ö—¦VB2²²6öÇWF–öâ–à¢Ò‡GG¢ò÷7F6¶÷fW&fÆ÷ræ6öÒ÷VW7F–öç2ó“Cƒ“s3bö6F×VÆÂ×&öÒÖ7W'fR×v—F‚ÖæòÖ7W72ÖæBÖæò×6VÆbÖ–çFW'6V7F–öç2ð¢Ò‡GG¢òö–FVöæRæ6öÒôæôV%dÐ ¥F†—27V&–5öÇ’6Æ726÷VÆB&RW6VBf÷"&WW6–ær6öÖRf&–&ÆW2æB6Æ7VÆF–öç2À¦'WBf÷"F‡&VRæ§27W'fRW6RÂ—B6÷VÆB&R÷76–&ÆR–æÆ–æVBæBfÆGFVâ–çFò6–ævÆRgVæ7F–öâ6ÆÀ§v†–6‚6â&RÆ6VB–â7W'fUWF–Ç2à¢¢ð ¦gVæ7F–öâ7V&–5öÇ’‚’°  –ÆWB3ÒÂ3ÒÂ3"ÒÂ32Ò°  ’ò  ’¢6ö×WFR6öVff–6–VçG2f÷"7V&–2öÇ–æöÖ–À ’¢‡2’Ò3²3§2²3"§5ã"²32§5ã0 ’¢7V6‚F†@ ’¢ƒ’ÒƒÂƒ’Òƒ ’¢æ@ ’¢rƒ’ÒCÂrƒ’ÒCà ’¢ð –gVæ7F–öâ–æ—B‚ƒÂƒÂCÂC’°  –3Òƒ° –3ÒC° –3"ÒÒ2¢ƒ²2¢ƒÒ"¢CÒC° –32Ò"¢ƒÒ"¢ƒ²C²C°  —Ð  —&WGW&â°  ––æ—D6F×VÆÅ&öÓ¢gVæ7F–öâ‚ƒÂƒÂƒ"Âƒ2ÂFVç6–öâ’°  ––æ—B‚ƒÂƒ"ÂFVç6–öâ¢‚ƒ"Òƒ’ÂFVç6–öâ¢‚ƒ2Òƒ’“°  —ÒÀ  ––æ—DæöçVæ–f÷&Ô6F×VÆÅ&öÓ¢gVæ7F–öâ‚ƒÂƒÂƒ"Âƒ2ÂGCÂGCÂGC"’°  ’òò6ö×WFRFævVçG2v†Vâ&ÖWFW&—¦VB–â·CÇC%Ð –ÆWBCÒ‚ƒÒƒ’òGCÒ‚ƒ"Òƒ’ò‚GC²GC’²‚ƒ"Òƒ’òGC° –ÆWBC"Ò‚ƒ"Òƒ’òGCÒ‚ƒ2Òƒ’ò‚GC²GC"’²‚ƒ2Òƒ"’òGC#°  ’òò&W66ÆRFævVçG2f÷"&ÖWG&—¦F–öâ–â³ÃÐ —C£ÒGC° —C"£ÒGC°  ––æ—B‚ƒÂƒ"ÂCÂC"“°  —ÒÀ  –6Æ3¢gVæ7F–öâ‚B’°  –6öç7BC"ÒB¢C° –6öç7BC2ÒC"¢C° —&WGW&â3²3¢B²3"¢C"²32¢C3°  —Ð  —Ó° §Ð ¢òð ¦6öç7BF×Òò¤õõU$Uõò¢òæWrfV7F÷#2‚“°¦6öç7B‚Òò¤õõU$Uõò¢òæWr7V&–5öÇ’‚“°¦6öç7B’Òò¤õõU$Uõò¢òæWr7V&–5öÇ’‚“°¦6öç7B¢Òò¤õõU$Uõò¢òæWr7V&–5öÇ’‚“° ¦6Æ726F×VÆÅ&öÔ7W'fS2W‡FVæG27W'fR°  –6öç7G'V7F÷"‚ö–çG2ÒµÒÂ6Æ÷6VBÒfÇ6RÂ7W'fUG—RÒv6VçG&—WFÂrÂFVç6–öâÒãR’°  —7WW"‚“°  —F†—2æ—46F×VÆÅ&öÔ7W'fS2ÒG'VS°  —F†—2çG—RÒt6F×VÆÅ&öÔ7W'fS2s°  —F†—2çö–çG2Òö–çG3° —F†—2æ6Æ÷6VBÒ6Æ÷6VC° —F†—2æ7W'fUG—RÒ7W'fUG—S° —F†—2çFVç6–öâÒFVç6–öã°  —Ð  –vWEö–çB‚BÂ÷F–öæÅF&vWBÒæWrfV7F÷#2‚’’°  –6öç7Bö–çBÒ÷F–öæÅF&vWC°  –6öç7Bö–çG2ÒF†—2çö–çG3° –6öç7BÂÒö–çG2æÆVæwFƒ°  –6öç7BÒ‚ÂÒ‚F†—2æ6Æ÷6VBò¢’’¢C° –ÆWB–çEö–çBÒÖF‚æfÆö÷"‚“° –ÆWBvV–v‡BÒÒ–çEö–çC°  ––b‚F†—2æ6Æ÷6VB’°  ––çEö–çB³Ò–çEö–çBâò¢‚ÖF‚æfÆö÷"‚ÖF‚æ'2‚–çEö–çB’òÂ’²’¢Ã°  —ÒVÇ6R–b‚vV–v‡BÓÓÒbb–çEö–çBÓÓÒÂÒ’°  ––çEö–çBÒÂÒ#° —vV–v‡BÒ°  —Ð  –ÆWBÂ3²òòBö–çG2‡b"FVf–æVB&VÆ÷r  ––b‚F†—2æ6Æ÷6VBÇÂ–çEö–çBâ’°  —Òö–çG5²‚–çEö–çBÒ’RÂÓ°  —ÒVÇ6R°  ’òòW‡G&öÆFRf—'7Bö–ç@ —F×ç7V%fV7F÷'2‚ö–çG5²ÒÂö–çG5²Ò’æFB‚ö–çG5²Ò“° —ÒF×°  —Ð  –6öç7BÒö–çG5²–çEö–çBRÂÓ° –6öç7B"Òö–çG5²‚–çEö–çB²’RÂÓ°  ––b‚F†—2æ6Æ÷6VBÇÂ–çEö–çB²"ÂÂ’°  —2Òö–çG5²‚–çEö–çB²"’RÂÓ°  —ÒVÇ6R°  ’òòW‡G&öÆFRÆ7Bö–ç@ —F×ç7V%fV7F÷'2‚ö–çG5²ÂÒÒÂö–çG5²ÂÒ"Ò’æFB‚ö–çG5²ÂÒÒ“° —2ÒF×°  —Ð  ––b‚F†—2æ7W'fUG—RÓÓÒv6VçG&—WFÂrÇÂF†—2æ7W'fUG—RÓÓÒv6†÷&FÂr’°  ’òò–æ—B6VçG&—WFÂò6†÷&FÂ6F×VÆÂÕ&öÐ –6öç7B÷rÒF†—2æ7W'fUG—RÓÓÒv6†÷&FÂròãR¢ã#S° –ÆWBGCÒÖF‚ç÷r‚æF—7Fæ6UFõ7V&VB‚’Â÷r“° –ÆWBGCÒÖF‚ç÷r‚æF—7Fæ6UFõ7V&VB‚"’Â÷r“° –ÆWBGC"ÒÖF‚ç÷r‚"æF—7Fæ6UFõ7V&VB‚2’Â÷r“°  ’òò6fWG’6†V6²f÷"&WVFVBö–çG0 ––b‚GCÂRÓB’GCÒã° ––b‚GCÂRÓB’GCÒGC° ––b‚GC"ÂRÓB’GC"ÒGC°  —‚æ–æ—DæöçVæ–f÷&Ô6F×VÆÅ&öÒ‚ç‚Âç‚Â"ç‚Â2ç‚ÂGCÂGCÂGC"“° —’æ–æ—DæöçVæ–f÷&Ô6F×VÆÅ&öÒ‚ç’Âç’Â"ç’Â2ç’ÂGCÂGCÂGC"“° —¢æ–æ—DæöçVæ–f÷&Ô6F×VÆÅ&öÒ‚ç¢Âç¢Â"ç¢Â2ç¢ÂGCÂGCÂGC"“°  —ÒVÇ6R–b‚F†—2æ7W'fUG—RÓÓÒv6F×VÆÇ&öÒr’°  —‚æ–æ—D6F×VÆÅ&öÒ‚ç‚Âç‚Â"ç‚Â2ç‚ÂF†—2çFVç6–öâ“° —’æ–æ—D6F×VÆÅ&öÒ‚ç’Âç’Â"ç’Â2ç’ÂF†—2çFVç6–öâ“° —¢æ–æ—D6F×VÆÅ&öÒ‚ç¢Âç¢Â"ç¢Â2ç¢ÂF†—2çFVç6–öâ“°  —Ð  —ö–çBç6WB€ —‚æ6Æ2‚vV–v‡B’À —’æ6Æ2‚vV–v‡B’À —¢æ6Æ2‚vV–v‡B ’“°  —&WGW&âö–çC°  —Ð  –6÷’‚6÷W&6R’°  —7WW"æ6÷’‚6÷W&6R“°  —F†—2çö–çG2ÒµÓ°  –f÷"‚ÆWB’ÒÂÂÒ6÷W&6Rçö–çG2æÆVæwFƒ²’ÂÃ²’²²’°  –6öç7Bö–çBÒ6÷W&6Rçö–çG5²’Ó°  —F†—2çö–çG2çW6‚‚ö–çBæ6ÆöæR‚’“°  —Ð  —F†—2æ6Æ÷6VBÒ6÷W&6Ræ6Æ÷6VC° —F†—2æ7W'fUG—RÒ6÷W&6Ræ7W'fUG—S° —F†—2çFVç6–öâÒ6÷W&6RçFVç6–öã°  —&WGW&âF†—3°  —Ð  —Fô¥4ôâ‚’°  –6öç7BFFÒ7WW"çFô¥4ôâ‚“°  –FFçö–çG2ÒµÓ°  –f÷"‚ÆWB’ÒÂÂÒF†—2çö–çG2æÆVæwFƒ²’ÂÃ²’²²’°  –6öç7Bö–çBÒF†—2çö–çG5²’Ó° –FFçö–çG2çW6‚‚ö–çBçFô'&’‚’“°  —Ð  –FFæ6Æ÷6VBÒF†—2æ6Æ÷6VC° –FFæ7W'fUG—RÒF†—2æ7W'fUG—S° –FFçFVç6–öâÒF†—2çFVç6–öã°  —&WGW&âFF°  —Ð  –g&öÔ¥4ôâ‚§6öâ’°  —7WW"æg&öÔ¥4ôâ‚§6öâ“°  —F†—2çö–çG2ÒµÓ°  –f÷"‚ÆWB’ÒÂÂÒ§6öâçö–çG2æÆVæwFƒ²’ÂÃ²’²²’°  –6öç7Bö–çBÒ§6öâçö–çG5²’Ó° —F†—2çö–çG2çW6‚‚æWrfV7F÷#2‚’æg&öÔ'&’‚ö–çB’“°  —Ð  —F†—2æ6Æ÷6VBÒ§6öâæ6Æ÷6VC° —F†—2æ7W'fUG—RÒ§6öâæ7W'fUG—S° —F†—2çFVç6–öâÒ§6öâçFVç6–öã°  —&WGW&âF†—3°  —Ð §Ð ¢ò¢ ¢¢&W¦–W"7W'fW2f÷&×VÆ2ö'F–æVBg&öÐ¢¢‡GG3¢òöVâçv–¶—VF–æ÷&r÷v–¶’ô"T32T—¦–W%ö7W'fP¢¢ð ¦gVæ7F–öâ6F×VÆÅ&öÒ‚BÂÂÂ"Â2’°  –6öç7BcÒ‚"Ò’¢ãS° –6öç7BcÒ‚2Ò’¢ãS° –6öç7BC"ÒB¢C° –6öç7BC2ÒB¢C#° —&WGW&â‚"¢Ò"¢"²c²c’¢C2²‚Ò2¢²2¢"Ò"¢cÒc’¢C"²c¢B²° §Ð ¢òð ¦gVæ7F–öâVG&F–4&W¦–W%‚BÂ’°  –6öç7B²ÒÒC° —&WGW&â²¢²¢° §Ð ¦gVæ7F–öâVG&F–4&W¦–W%‚BÂ’°  —&WGW&â"¢‚ÒB’¢B¢° §Ð ¦gVæ7F–öâVG&F–4&W¦–W%"‚BÂ’°  —&WGW&âB¢B¢° §Ð ¦gVæ7F–öâVG&F–4&W¦–W"‚BÂÂÂ"’°  —&WGW&âVG&F–4&W¦–W%‚BÂ’²VG&F–4&W¦–W%‚BÂ’° •VG&F–4&W¦–W%"‚BÂ"“° §Ð ¢òð ¦gVæ7F–öâ7V&–4&W¦–W%‚BÂ’°  –6öç7B²ÒÒC° —&WGW&â²¢²¢²¢° §Ð ¦gVæ7F–öâ7V&–4&W¦–W%‚BÂ’°  –6öç7B²ÒÒC° —&WGW&â2¢²¢²¢B¢° §Ð ¦gVæ7F–öâ7V&–4&W¦–W%"‚BÂ’°  —&WGW&â2¢‚ÒB’¢B¢B¢° §Ð ¦gVæ7F–öâ7V&–4&W¦–W%2‚BÂ’°  —&WGW&âB¢B¢B¢° §Ð ¦gVæ7F–öâ7V&–4&W¦–W"‚BÂÂÂ"Â2’°  —&WGW&â7V&–4&W¦–W%‚BÂ’²7V&–4&W¦–W%‚BÂ’²7V&–4&W¦–W%"‚BÂ"’° ”7V&–4&W¦–W%2‚BÂ2“° §Ð ¦6Æ727V&–4&W¦–W$7W'fRW‡FVæG27W'fR°  –6öç7G'V7F÷"‚cÒæWrfV7F÷#"‚’ÂcÒæWrfV7F÷#"‚’Âc"ÒæWrfV7F÷#"‚’Âc2ÒæWrfV7F÷#"‚’’°  —7WW"‚“°  —F†—2æ—47V&–4&W¦–W$7W'fRÒG'VS°  —F†—2çG—RÒt7V&–4&W¦–W$7W'fRs°  —F†—2çcÒc° —F†—2çcÒc° —F†—2çc"Òc#° —F†—2çc2Òc3°  —Ð  –vWEö–çB‚BÂ÷F–öæÅF&vWBÒæWrfV7F÷#"‚’’°  –6öç7Bö–çBÒ÷F–öæÅF&vWC°  –6öç7BcÒF†—2çcÂcÒF†—2çcÂc"ÒF†—2çc"Âc2ÒF†—2çc3°  —ö–çBç6WB€ ”7V&–4&W¦–W"‚BÂcç‚Âcç‚Âc"ç‚Âc2ç‚’À ”7V&–4&W¦–W"‚BÂcç’Âcç’Âc"ç’Âc2ç’ ’“°  —&WGW&âö–çC°  —Ð  –6÷’‚6÷W&6R’°  —7WW"æ6÷’‚6÷W&6R“°  —F†—2çcæ6÷’‚6÷W&6Rçc“° —F†—2çcæ6÷’‚6÷W&6Rçc“° —F†—2çc"æ6÷’‚6÷W&6Rçc"“° —F†—2çc2æ6÷’‚6÷W&6Rçc2“°  —&WGW&âF†—3°  —Ð  —Fô¥4ôâ‚’°  –6öç7BFFÒ7WW"çFô¥4ôâ‚“°  –FFçcÒF†—2çcçFô'&’‚“° –FFçcÒF†—2çcçFô'&’‚“° –FFçc"ÒF†—2çc"çFô'&’‚“° –FFçc2ÒF†—2çc2çFô'&’‚“°  —&WGW&âFF°  —Ð  –g&öÔ¥4ôâ‚§6öâ’°  —7WW"æg&öÔ¥4ôâ‚§6öâ“°  —F†—2çcæg&öÔ'&’‚§6öâçc“° —F†—2çcæg&öÔ'&’‚§6öâçc“° —F†—2çc"æg&öÔ'&’‚§6öâçc"“° —F†—2çc2æg&öÔ'&’‚§6öâçc2“°  —&WGW&âF†—3°  —Ð §Ð ¦6Æ727V&–4&W¦–W$7W'fS2W‡FVæG27W'fR°  –6öç7G'V7F÷"‚cÒæWrfV7F÷#2‚’ÂcÒæWrfV7F÷#2‚’Âc"ÒæWrfV7F÷#2‚’Âc2ÒæWrfV7F÷#2‚’’°  —7WW"‚“°  —F†—2æ—47V&–4&W¦–W$7W'fS2ÒG'VS°  —F†—2çG—RÒt7V&–4&W¦–W$7W'fS2s°  —F†—2çcÒc° —F†—2çcÒc° —F†—2çc"Òc#° —F†—2çc2Òc3°  —Ð  –vWEö–çB‚BÂ÷F–öæÅF&vWBÒæWrfV7F÷#2‚’’°  –6öç7Bö–çBÒ÷F–öæÅF&vWC°  –6öç7BcÒF†—2çcÂcÒF†—2çcÂc"ÒF†—2çc"Âc2ÒF†—2çc3°  —ö–çBç6WB€ ”7V&–4&W¦–W"‚BÂcç‚Âcç‚Âc"ç‚Âc2ç‚’À ”7V&–4&W¦–W"‚BÂcç’Âcç’Âc"ç’Âc2ç’’À ”7V&–4&W¦–W"‚BÂcç¢Âcç¢Âc"ç¢Âc2ç¢ ’“°  —&WGW&âö–çC°  —Ð  –6÷’‚6÷W&6R’°  —7WW"æ6÷’‚6÷W&6R“°  —F†—2çcæ6÷’‚6÷W&6Rçc“° —F†—2çcæ6÷’‚6÷W&6Rçc“° —F†—2çc"æ6÷’‚6÷W&6Rçc"“° —F†—2çc2æ6÷’‚6÷W&6Rçc2“°  —&WGW&âF†—3°  —Ð  —Fô¥4ôâ‚’°  –6öç7BFFÒ7WW"çFô¥4ôâ‚“°  –FFçcÒF†—2çcçFô'&’‚“° –FFçcÒF†—2çcçFô'&’‚“° –FFçc"ÒF†—2çc"çFô'&’‚“° –FFçc2ÒF†—2çc2çFô'&’‚“°  —&WGW&âFF°  —Ð  –g&öÔ¥4ôâ‚§6öâ’°  —7WW"æg&öÔ¥4ôâ‚§6öâ“°  —F†—2çcæg&öÔ'&’‚§6öâçc“° —F†—2çcæg&öÔ'&’‚§6öâçc“° —F†—2çc"æg&öÔ'&’‚§6öâçc"“° —F†—2çc2æg&öÔ'&’‚§6öâçc2“°  —&WGW&âF†—3°  —Ð §Ð ¦6Æ72Æ–æT7W'fRW‡FVæG27W'fR°  –6öç7G'V7F÷"‚cÒæWrfV7F÷#"‚’Âc"ÒæWrfV7F÷#"‚’’°  —7WW"‚“°  —F†—2æ—4Æ–æT7W'fRÒG'VS°  —F†—2çG—RÒtÆ–æT7W'fRs°  —F†—2çcÒc° —F†—2çc"Òc#°  —Ð  –vWEö–çB‚BÂ÷F–öæÅF&vWBÒæWrfV7F÷#"‚’’°  –6öç7Bö–çBÒ÷F–öæÅF&vWC°  ––b‚BÓÓÒ’°  —ö–çBæ6÷’‚F†—2çc"“°  —ÒVÇ6R°  —ö–çBæ6÷’‚F†—2çc"’ç7V"‚F†—2çc“° —ö–çBæ×VÇF—Ç•66Æ"‚B’æFB‚F†—2çc“°  —Ð  —&WGW&âö–çC°  —Ð  ’òòÆ–æR7W'fR—2Æ–æV"Â6òvR6â÷fW'w&—FRFVfVÇBvWEö–çD@ –vWEö–çDB‚RÂ÷F–öæÅF&vWB’°  —&WGW&âF†—2ævWEö–çB‚RÂ÷F–öæÅF&vWB“°  —Ð  –vWEFævVçB‚BÂ÷F–öæÅF&vWBÒæWrfV7F÷#"‚’’°  —&WGW&â÷F–öæÅF&vWBç7V%fV7F÷'2‚F†—2çc"ÂF†—2çc’ææ÷&ÖÆ—¦R‚“°  —Ð  –vWEFævVçDB‚RÂ÷F–öæÅF&vWB’°  —&WGW&âF†—2ævWEFævVçB‚RÂ÷F–öæÅF&vWB“°  —Ð  –6÷’‚6÷W&6R’°  —7WW"æ6÷’‚6÷W&6R“°  —F†—2çcæ6÷’‚6÷W&6Rçc“° —F†—2çc"æ6÷’‚6÷W&6Rçc"“°  —&WGW&âF†—3°  —Ð  —Fô¥4ôâ‚’°  –6öç7BFFÒ7WW"çFô¥4ôâ‚“°  –FFçcÒF†—2çcçFô'&’‚“° –FFçc"ÒF†—2çc"çFô'&’‚“°  —&WGW&âFF°  —Ð  –g&öÔ¥4ôâ‚§6öâ’°  —7WW"æg&öÔ¥4ôâ‚§6öâ“°  —F†—2çcæg&öÔ'&’‚§6öâçc“° —F†—2çc"æg&öÔ'&’‚§6öâçc"“°  —&WGW&âF†—3°  —Ð §Ð ¦6Æ72Æ–æT7W'fS2W‡FVæG27W'fR°  –6öç7G'V7F÷"‚cÒæWrfV7F÷#2‚’Âc"ÒæWrfV7F÷#2‚’’°  —7WW"‚“°  —F†—2æ—4Æ–æT7W'fS2ÒG'VS°  —F†—2çG—RÒtÆ–æT7W'fS2s°  —F†—2çcÒc° —F†—2çc"Òc#°  —Ð  –vWEö–çB‚BÂ÷F–öæÅF&vWBÒæWrfV7F÷#2‚’’°  –6öç7Bö–çBÒ÷F–öæÅF&vWC°  ––b‚BÓÓÒ’°  —ö–çBæ6÷’‚F†—2çc"“°  —ÒVÇ6R°  —ö–çBæ6÷’‚F†—2çc"’ç7V"‚F†—2çc“° —ö–çBæ×VÇF—Ç•66Æ"‚B’æFB‚F†—2çc“°  —Ð  —&WGW&âö–çC°  —Ð  ’òòÆ–æR7W'fR—2Æ–æV"Â6òvR6â÷fW'w&—FRFVfVÇBvWEö–çD@ –vWEö–çDB‚RÂ÷F–öæÅF&vWB’°  —&WGW&âF†—2ævWEö–çB‚RÂ÷F–öæÅF&vWB“°  —Ð  –vWEFævVçB‚BÂ÷F–öæÅF&vWBÒæWrfV7F÷#2‚’’°  —&WGW&â÷F–öæÅF&vWBç7V%fV7F÷'2‚F†—2çc"ÂF†—2çc’ææ÷&ÖÆ—¦R‚“°  —Ð  –vWEFævVçDB‚RÂ÷F–öæÅF&vWB’°  —&WGW&âF†—2ævWEFævVçB‚RÂ÷F–öæÅF&vWB“°  —Ð  –6÷’‚6÷W&6R’°  —7WW"æ6÷’‚6÷W&6R“°  —F†—2çcæ6÷’‚6÷W&6Rçc“° —F†—2çc"æ6÷’‚6÷W&6Rçc"“°  —&WGW&âF†—3°  —Ð  —Fô¥4ôâ‚’°  –6öç7BFFÒ7WW"çFô¥4ôâ‚“°  –FFçcÒF†—2çcçFô'&’‚“° –FFçc"ÒF†—2çc"çFô'&’‚“°  —&WGW&âFF°  —Ð  –g&öÔ¥4ôâ‚§6öâ’°  —7WW"æg&öÔ¥4ôâ‚§6öâ“°  —F†—2çcæg&öÔ'&’‚§6öâçc“° —F†—2çc"æg&öÔ'&’‚§6öâçc"“°  —&WGW&âF†—3°  —Ð §Ð ¦6Æ72VG&F–4&W¦–W$7W'fRW‡FVæG27W'fR°  –6öç7G'V7F÷"‚cÒæWrfV7F÷#"‚’ÂcÒæWrfV7F÷#"‚’Âc"ÒæWrfV7F÷#"‚’’°  —7WW"‚“°  —F†—2æ—5VG&F–4&W¦–W$7W'fRÒG'VS°  —F†—2çG—RÒuVG&F–4&W¦–W$7W'fRs°  —F†—2çcÒc° —F†—2çcÒc° —F†—2çc"Òc#°  —Ð  –vWEö–çB‚BÂ÷F–öæÅF&vWBÒæWrfV7F÷#"‚’’°  –6öç7Bö–çBÒ÷F–öæÅF&vWC°  –6öç7BcÒF†—2çcÂcÒF†—2çcÂc"ÒF†—2çc#°  —ö–çBç6WB€ •VG&F–4&W¦–W"‚BÂcç‚Âcç‚Âc"ç‚’À •VG&F–4&W¦–W"‚BÂcç’Âcç’Âc"ç’ ’“°  —&WGW&âö–çC°  —Ð  –6÷’‚6÷W&6R’°  —7WW"æ6÷’‚6÷W&6R“°  —F†—2çcæ6÷’‚6÷W&6Rçc“° —F†—2çcæ6÷’‚6÷W&6Rçc“° —F†—2çc"æ6÷’‚6÷W&6Rçc"“°  —&WGW&âF†—3°  —Ð  —Fô¥4ôâ‚’°  –6öç7BFFÒ7WW"çFô¥4ôâ‚“°  –FFçcÒF†—2çcçFô'&’‚“° –FFçcÒF†—2çcçFô'&’‚“° –FFçc"ÒF†—2çc"çFô'&’‚“°  —&WGW&âFF°  —Ð  –g&öÔ¥4ôâ‚§6öâ’°  —7WW"æg&öÔ¥4ôâ‚§6öâ“°  —F†—2çcæg&öÔ'&’‚§6öâçc“° —F†—2çcæg&öÔ'&’‚§6öâçc“° —F†—2çc"æg&öÔ'&’‚§6öâçc"“°  —&WGW&âF†—3°  —Ð §Ð ¦6Æ72VG&F–4&W¦–W$7W'fS2W‡FVæG27W'fR°  –6öç7G'V7F÷"‚cÒæWrfV7F÷#2‚’ÂcÒæWrfV7F÷#2‚’Âc"ÒæWrfV7F÷#2‚’’°  —7WW"‚“°  —F†—2æ—5VG&F–4&W¦–W$7W'fS2ÒG'VS°  —F†—2çG—RÒuVG&F–4&W¦–W$7W'fS2s°  —F†—2çcÒc° —F†—2çcÒc° —F†—2çc"Òc#°  —Ð  –vWEö–çB‚BÂ÷F–öæÅF&vWBÒæWrfV7F÷#2‚’’°  –6öç7Bö–çBÒ÷F–öæÅF&vWC°  –6öç7BcÒF†—2çcÂcÒF†—2çcÂc"ÒF†—2çc#°  —ö–çBç6WB€ •VG&F–4&W¦–W"‚BÂcç‚Âcç‚Âc"ç‚’À •VG&F–4&W¦–W"‚BÂcç’Âcç’Âc"ç’’À •VG&F–4&W¦–W"‚BÂcç¢Âcç¢Âc"ç¢ ’“°  —&WGW&âö–çC°  —Ð  –6÷’‚6÷W&6R’°  —7WW"æ6÷’‚6÷W&6R“°  —F†—2çcæ6÷’‚6÷W&6Rçc“° —F†—2çcæ6÷’‚6÷W&6Rçc“° —F†—2çc"æ6÷’‚6÷W&6Rçc"“°  —&WGW&âF†—3°  —Ð  —Fô¥4ôâ‚’°  –6öç7BFFÒ7WW"çFô¥4ôâ‚“°  –FFçcÒF†—2çcçFô'&’‚“° –FFçcÒF†—2çcçFô'&’‚“° –FFçc"ÒF†—2çc"çFô'&’‚“°  —&WGW&âFF°  —Ð  –g&öÔ¥4ôâ‚§6öâ’°  —7WW"æg&öÔ¥4ôâ‚§6öâ“°  —F†—2çcæg&öÔ'&’‚§6öâçc“° —F†—2çcæg&öÔ'&’‚§6öâçc“° —F†—2çc"æg&öÔ'&’‚§6öâçc"“°  —&WGW&âF†—3°  —Ð §Ð ¦6Æ727Æ–æT7W'fRW‡FVæG27W'fR°  –6öç7G'V7F÷"‚ö–çG2ÒµÒ’°  —7WW"‚“°  —F†—2æ—57Æ–æT7W'fRÒG'VS°  —F†—2çG—RÒu7Æ–æT7W'fRs°  —F†—2çö–çG2Òö–çG3°  —Ð  –vWEö–çB‚BÂ÷F–öæÅF&vWBÒæWrfV7F÷#"‚’’°  –6öç7Bö–çBÒ÷F–öæÅF&vWC°  –6öç7Bö–çG2ÒF†—2çö–çG3° –6öç7BÒ‚ö–çG2æÆVæwF‚Ò’¢C°  –6öç7B–çEö–çBÒÖF‚æfÆö÷"‚“° –6öç7BvV–v‡BÒÒ–çEö–çC°  –6öç7BÒö–çG5²–çEö–çBÓÓÒò–çEö–çB¢–çEö–çBÒÓ° –6öç7BÒö–çG5²–çEö–çBÓ° –6öç7B"Òö–çG5²–çEö–çBâö–çG2æÆVæwF‚Ò"òö–çG2æÆVæwF‚Ò¢–çEö–çB²Ó° –6öç7B2Òö–çG5²–çEö–çBâö–çG2æÆVæwF‚Ò2òö–çG2æÆVæwF‚Ò¢–çEö–çB²"Ó°  —ö–çBç6WB€ ”6F×VÆÅ&öÒ‚vV–v‡BÂç‚Âç‚Â"ç‚Â2ç‚’À ”6F×VÆÅ&öÒ‚vV–v‡BÂç’Âç’Â"ç’Â2ç’ ’“°  —&WGW&âö–çC°  —Ð  –6÷’‚6÷W&6R’°  —7WW"æ6÷’‚6÷W&6R“°  —F†—2çö–çG2ÒµÓ°  –f÷"‚ÆWB’ÒÂÂÒ6÷W&6Rçö–çG2æÆVæwFƒ²’ÂÃ²’²²’°  –6öç7Bö–çBÒ6÷W&6Rçö–çG5²’Ó°  —F†—2çö–çG2çW6‚‚ö–çBæ6ÆöæR‚’“°  —Ð  —&WGW&âF†—3°  —Ð  —Fô¥4ôâ‚’°  –6öç7BFFÒ7WW"çFô¥4ôâ‚“°  –FFçö–çG2ÒµÓ°  –f÷"‚ÆWB’ÒÂÂÒF†—2çö–çG2æÆVæwFƒ²’ÂÃ²’²²’°  –6öç7Bö–çBÒF†—2çö–çG5²’Ó° –FFçö–çG2çW6‚‚ö–çBçFô'&’‚’“°  —Ð  —&WGW&âFF°  —Ð  –g&öÔ¥4ôâ‚§6öâ’°  —7WW"æg&öÔ¥4ôâ‚§6öâ“°  —F†—2çö–çG2ÒµÓ°  –f÷"‚ÆWB’ÒÂÂÒ§6öâçö–çG2æÆVæwFƒ²’ÂÃ²’²²’°  –6öç7Bö–çBÒ§6öâçö–çG5²’Ó° —F†—2çö–çG2çW6‚‚æWrfV7F÷#"‚’æg&öÔ'&’‚ö–çB’“°  —Ð  —&WGW&âF†—3°  —Ð §Ð §f"7W'fW2Òò¢5õõU$Uõò¢ôö&¦V7Bæg&VW¦R‡° •õ÷&÷Fõõó¢çVÆÂÀ ”&47W'fS¢&47W'fRÀ ”6F×VÆÅ&öÔ7W'fS3¢6F×VÆÅ&öÔ7W'fS2À ”7V&–4&W¦–W$7W'fS¢7V&–4&W¦–W$7W'fRÀ ”7V&–4&W¦–W$7W'fS3¢7V&–4&W¦–W$7W'fS2À ”VÆÆ—6T7W'fS¢VÆÆ—6T7W'fRÀ ”Æ–æT7W'fS¢Æ–æT7W'fRÀ ”Æ–æT7W'fS3¢Æ–æT7W'fS2À •VG&F–4&W¦–W$7W'fS¢VG&F–4&W¦–W$7W'fRÀ •VG&F–4&W¦–W$7W'fS3¢VG&F–4&W¦–W$7W'fS2À •7Æ–æT7W'fS¢7Æ–æT7W'fP§Ò“° ¢ò¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢ ¢ ”7W'fVBF‚Ò7W'fRF‚—26–×Ç’'&’öb6öææV7FV@¢¢7W'fW2Â'WB&WF–ç2F†R’öb7W'fP¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢¢ð ¦6Æ727W'fUF‚W‡FVæG27W'fR°  –6öç7G'V7F÷"‚’°  —7WW"‚“°  —F†—2çG—RÒt7W'fUF‚s°  —F†—2æ7W'fW2ÒµÓ° —F†—2æWFô6Æ÷6RÒfÇ6S²òòWFöÖF–6ÆÇ’6Æ÷6W2F†RF€  —Ð  –FB‚7W'fR’°  —F†—2æ7W'fW2çW6‚‚7W'fR“°  —Ð  –6Æ÷6UF‚‚’°  ’òòFBÆ–æR7W'fR–b7F'BæBVæBöbÆ–æW2&Ræ÷B6öææV7FV@ –6öç7B7F'Eö–çBÒF†—2æ7W'fW5²ÒævWEö–çB‚“° –6öç7BVæEö–çBÒF†—2æ7W'fW5²F†—2æ7W'fW2æÆVæwF‚ÒÒævWEö–çB‚“°  ––b‚7F'Eö–çBæWVÇ2‚VæEö–çB’’°  –6öç7BÆ–æUG—RÒ‚7F'Eö–çBæ—5fV7F÷#"ÓÓÒG'VR’òtÆ–æT7W'fRr¢tÆ–æT7W'fS2s° —F†—2æ7W'fW2çW6‚‚æWr7W'fW5²Æ–æUG—RÒ‚VæEö–çBÂ7F'Eö–çB’“°  —Ð  —&WGW&âF†—3°  —Ð  ’òòFòvWB67W&FRö–çBv—F‚&VfW&Væ6RFð ’òòVçF—&RF‚F—7Fæ6RBF–ÖRBÀ ’òòföÆÆ÷v–ær†2Fò&RFöæS   ’òòâÆVæwF‚öbV6‚7V"F‚†fRFò&R¶æ÷và ’òò"âÆö6FRæB–FVçF–g’G—Röb7W'fP ’òò2âvWBBf÷"F†R7W'fP ’òòBâ&WGW&â7W'fRævWEö–çDB‡Br  –vWEö–çB‚BÂ÷F–öæÅF&vWB’°  –6öç7BBÒB¢F†—2ævWDÆVæwF‚‚“° –6öç7B7W'fTÆVæwF‡2ÒF†—2ævWD7W'fTÆVæwF‡2‚“° –ÆWB’Ò°  ’òòFòF†–æ²&÷WB&÷VæF&–W2ö–çG2à  —v†–ÆR‚’Â7W'fTÆVæwF‡2æÆVæwF‚’°  ––b‚7W'fTÆVæwF‡5²’ÒãÒB’°  –6öç7BF–fbÒ7W'fTÆVæwF‡5²’ÒÒC° –6öç7B7W'fRÒF†—2æ7W'fW5²’Ó°  –6öç7B6VvÖVçDÆVæwF‚Ò7W'fRævWDÆVæwF‚‚“° –6öç7BRÒ6VvÖVçDÆVæwF‚ÓÓÒò¢ÒF–fbò6VvÖVçDÆVæwFƒ°  —&WGW&â7W'fRævWEö–çDB‚RÂ÷F–öæÅF&vWB“°  —Ð  –’²³°  —Ð  —&WGW&âçVÆÃ°  ’òòÆö÷v†W&R7VÒÒÂ7VÒâBÂ7VÒ³Æ@  —Ð  ’òòvR6ææ÷BW6RF†RFVfVÇBD…$TRä7W'fRvWEö–çB‚’v—F‚vWDÆVæwF‚‚’&V6W6R–à ’òòD…$TRä7W'fRÂvWDÆVæwF‚‚’FWVæG2öâvWEö–çB‚’'WB–âD…$TRä7W'fUF€ ’òòvWEö–çB‚’FWVæG2öâvWDÆVæwF€  –vWDÆVæwF‚‚’°  –6öç7BÆVç2ÒF†—2ævWD7W'fTÆVæwF‡2‚“° —&WGW&âÆVç5²ÆVç2æÆVæwF‚ÒÓ°  —Ð  ’òò66†TÆVæwF‡2×W7B&R&V6Æ7VÆFVBà —WFFT&4ÆVæwF‡2‚’°  —F†—2ææVVG5WFFRÒG'VS° —F†—2æ66†TÆVæwF‡2ÒçVÆÃ° —F†—2ævWD7W'fTÆVæwF‡2‚“°  —Ð  ’òò6ö×WFRÆVæwF‡2æB66†RF†VÐ ’òòvR6ææ÷B÷fW'w&—FRvWDÆVæwF‡2‚’&V6W6RWFõBÖ–ærW6W2—Bà  –vWD7W'fTÆVæwF‡2‚’°  ’òòvRW6R66†RfÇVW2–b7W'fW2æB66†R'&’&R6ÖRÆVæwF€  ––b‚F†—2æ66†TÆVæwF‡2bbF†—2æ66†TÆVæwF‡2æÆVæwF‚ÓÓÒF†—2æ7W'fW2æÆVæwF‚’°  —&WGW&âF†—2æ66†TÆVæwF‡3°  —Ð  ’òòvWBÆVæwF‚öb7V"Ö7W'fP ’òòW6‚7V×2–çFò66†VB'&  –6öç7BÆVæwF‡2ÒµÓ° –ÆWB7V×2Ò°  –f÷"‚ÆWB’ÒÂÂÒF†—2æ7W'fW2æÆVæwFƒ²’ÂÃ²’²²’°  —7V×2³ÒF†—2æ7W'fW5²’ÒævWDÆVæwF‚‚“° –ÆVæwF‡2çW6‚‚7V×2“°  —Ð  —F†—2æ66†TÆVæwF‡2ÒÆVæwF‡3°  —&WGW&âÆVæwF‡3°  —Ð  –vWE76VEö–çG2‚F—f—6–öç2ÒC’°  –6öç7Bö–çG2ÒµÓ°  –f÷"‚ÆWB’Ò²’ÃÒF—f—6–öç3²’²²’°  —ö–çG2çW6‚‚F†—2ævWEö–çB‚’òF—f—6–öç2’“°  —Ð  ––b‚F†—2æWFô6Æ÷6R’°  —ö–çG2çW6‚‚ö–çG5²Ò“°  —Ð  —&WGW&âö–çG3°  —Ð  –vWEö–çG2‚F—f—6–öç2Ò"’°  –6öç7Bö–çG2ÒµÓ° –ÆWBÆ7C°  –f÷"‚ÆWB’ÒÂ7W'fW2ÒF†—2æ7W'fW3²’Â7W'fW2æÆVæwFƒ²’²²’°  –6öç7B7W'fRÒ7W'fW5²’Ó° –6öç7B&W6öÇWF–öâÒ7W'fRæ—4VÆÆ—6T7W'fRòF—f—6–öç2¢  “¢‚7W'fRæ—4Æ–æT7W'fRÇÂ7W'fRæ—4Æ–æT7W'fS2’ò “¢7W'fRæ—57Æ–æT7W'fRòF—f—6–öç2¢7W'fRçö–çG2æÆVæwF€ “¢F—f—6–öç3°  –6öç7BG2Ò7W'fRævWEö–çG2‚&W6öÇWF–öâ“°  –f÷"‚ÆWB¢Ò²¢ÂG2æÆVæwFƒ²¢²²’°  –6öç7Bö–çBÒG5²¢Ó°  ––b‚Æ7BbbÆ7BæWVÇ2‚ö–çB’’6öçF–çVS²òòVç7W&W2æò6öç6V7WF—fRö–çG2&RGWÆ–6FW0  —ö–çG2çW6‚‚ö–çB“° –Æ7BÒö–çC°  —Ð  —Ð  ––b‚F†—2æWFô6Æ÷6Rbbö–çG2æÆVæwF‚âbbö–çG5²ö–çG2æÆVæwF‚ÒÒæWVÇ2‚ö–çG5²Ò’’°  —ö–çG2çW6‚‚ö–çG5²Ò“°  —Ð  —&WGW&âö–çG3°  —Ð  –6÷’‚6÷W&6R’°  —7WW"æ6÷’‚6÷W&6R“°  —F†—2æ7W'fW2ÒµÓ°  –f÷"‚ÆWB’ÒÂÂÒ6÷W&6Ræ7W'fW2æÆVæwFƒ²’ÂÃ²’²²’°  –6öç7B7W'fRÒ6÷W&6Ræ7W'fW5²’Ó°  —F†—2æ7W'fW2çW6‚‚7W'fRæ6ÆöæR‚’“°  —Ð  —F†—2æWFô6Æ÷6RÒ6÷W&6RæWFô6Æ÷6S°  —&WGW&âF†—3°  —Ð  —Fô¥4ôâ‚’°  –6öç7BFFÒ7WW"çFô¥4ôâ‚“°  –FFæWFô6Æ÷6RÒF†—2æWFô6Æ÷6S° –FFæ7W'fW2ÒµÓ°  –f÷"‚ÆWB’ÒÂÂÒF†—2æ7W'fW2æÆVæwFƒ²’ÂÃ²’²²’°  –6öç7B7W'fRÒF†—2æ7W'fW5²’Ó° –FFæ7W'fW2çW6‚‚7W'fRçFô¥4ôâ‚’“°  —Ð  —&WGW&âFF°  —Ð  –g&öÔ¥4ôâ‚§6öâ’°  —7WW"æg&öÔ¥4ôâ‚§6öâ“°  —F†—2æWFô6Æ÷6RÒ§6öâæWFô6Æ÷6S° —F†—2æ7W'fW2ÒµÓ°  –f÷"‚ÆWB’ÒÂÂÒ§6öâæ7W'fW2æÆVæwFƒ²’ÂÃ²’²²’°  –6öç7B7W'fRÒ§6öâæ7W'fW5²’Ó° —F†—2æ7W'fW2çW6‚‚æWr7W'fW5²7W'fRçG—RÒ‚’æg&öÔ¥4ôâ‚7W'fR’“°  —Ð  —&WGW&âF†—3°  —Ð §Ð ¦6Æ72F‚W‡FVæG27W'fUF‚°  –6öç7G'V7F÷"‚ö–çG2’°  —7WW"‚“°  —F†—2çG—RÒuF‚s°  —F†—2æ7W'&VçEö–çBÒæWrfV7F÷#"‚“°  ––b‚ö–çG2’°  —F†—2ç6WDg&öÕö–çG2‚ö–çG2“°  —Ð  —Ð  —6WDg&öÕö–çG2‚ö–çG2’°  —F†—2æÖ÷fUFò‚ö–çG5²Òç‚Âö–çG5²Òç’“°  –f÷"‚ÆWB’ÒÂÂÒö–çG2æÆVæwFƒ²’ÂÃ²’²²’°  —F†—2æÆ–æUFò‚ö–çG5²’Òç‚Âö–çG5²’Òç’“°  —Ð  —&WGW&âF†—3°  —Ð  –Ö÷fUFò‚‚Â’’°  —F†—2æ7W'&VçEö–çBç6WB‚‚Â’“²òòDôDò6öç6–FW"&VfW&Væ6–ærfV7F÷'2–ç7FVBöb6÷––æsð  —&WGW&âF†—3°  —Ð  –Æ–æUFò‚‚Â’’°  –6öç7B7W'fRÒæWrÆ–æT7W'fR‚F†—2æ7W'&VçEö–çBæ6ÆöæR‚’ÂæWrfV7F÷#"‚‚Â’’“° —F†—2æ7W'fW2çW6‚‚7W'fR“°  —F†—2æ7W'&VçEö–çBç6WB‚‚Â’“°  —&WGW&âF†—3°  —Ð  —VG&F–47W'fUFò‚5‚Â5’Â‚Â’’°  –6öç7B7W'fRÒæWrVG&F–4&W¦–W$7W'fR€ —F†—2æ7W'&VçEö–çBæ6ÆöæR‚’À –æWrfV7F÷#"‚5‚Â5’’À –æWrfV7F÷#"‚‚Â’ ’“°  —F†—2æ7W'fW2çW6‚‚7W'fR“°  —F†—2æ7W'&VçEö–çBç6WB‚‚Â’“°  —&WGW&âF†—3°  —Ð  –&W¦–W$7W'fUFò‚5‚Â5’Â5'‚Â5'’Â‚Â’’°  –6öç7B7W'fRÒæWr7V&–4&W¦–W$7W'fR€ —F†—2æ7W'&VçEö–çBæ6ÆöæR‚’À –æWrfV7F÷#"‚5‚Â5’’À –æWrfV7F÷#"‚5'‚Â5'’’À –æWrfV7F÷#"‚‚Â’ ’“°  —F†—2æ7W'fW2çW6‚‚7W'fR“°  —F†—2æ7W'&VçEö–çBç6WB‚‚Â’“°  —&WGW&âF†—3°  —Ð  —7Æ–æUF‡'R‚G2ò¤'&’öbfV7F÷"¢ò’°  –6öç7BçG2Ò²F†—2æ7W'&VçEö–çBæ6ÆöæR‚’Òæ6öæ6B‚G2“°  –6öç7B7W'fRÒæWr7Æ–æT7W'fR‚çG2“° —F†—2æ7W'fW2çW6‚‚7W'fR“°  —F†—2æ7W'&VçEö–çBæ6÷’‚G5²G2æÆVæwF‚ÒÒ“°  —&WGW&âF†—3°  —Ð  –&2‚‚Â’Â&F—W2Â7F'DævÆRÂVæDævÆRÂ6Æö6·v—6R’°  –6öç7BƒÒF†—2æ7W'&VçEö–çBçƒ° –6öç7B“ÒF†—2æ7W'&VçEö–çBç“°  —F†—2æ'6&2‚‚²ƒÂ’²“Â&F—W2À –7F'DævÆRÂVæDævÆRÂ6Æö6·v—6R“°  —&WGW&âF†—3°  —Ð  –'6&2‚‚Â’Â&F—W2Â7F'DævÆRÂVæDævÆRÂ6Æö6·v—6R’°  —F†—2æ'6VÆÆ—6R‚‚Â’Â&F—W2Â&F—W2Â7F'DævÆRÂVæDævÆRÂ6Æö6·v—6R“°  —&WGW&âF†—3°  —Ð  –VÆÆ—6R‚‚Â’Â…&F—W2Â•&F—W2Â7F'DævÆRÂVæDævÆRÂ6Æö6·v—6RÂ&÷FF–öâ’°  –6öç7BƒÒF†—2æ7W'&VçEö–çBçƒ° –6öç7B“ÒF†—2æ7W'&VçEö–çBç“°  —F†—2æ'6VÆÆ—6R‚‚²ƒÂ’²“Â…&F—W2Â•&F—W2Â7F'DævÆRÂVæDævÆRÂ6Æö6·v—6RÂ&÷FF–öâ“°  —&WGW&âF†—3°  —Ð  –'6VÆÆ—6R‚‚Â’Â…&F—W2Â•&F—W2Â7F'DævÆRÂVæDævÆRÂ6Æö6·v—6RÂ&÷FF–öâ’°  –6öç7B7W'fRÒæWrVÆÆ—6T7W'fR‚‚Â’Â…&F—W2Â•&F—W2Â7F'DævÆRÂVæDævÆRÂ6Æö6·v—6RÂ&÷FF–öâ“°  ––b‚F†—2æ7W'fW2æÆVæwF‚â’°  ’òò–b&Wf–÷W27W'fR—2&W6VçBÂGFV×BFò¦ö–à –6öç7Bf—'7Eö–çBÒ7W'fRævWEö–çB‚“°  ––b‚f—'7Eö–çBæWVÇ2‚F†—2æ7W'&VçEö–çB’’°  —F†—2æÆ–æUFò‚f—'7Eö–çBç‚Âf—'7Eö–çBç’“°  —Ð  —Ð  —F†—2æ7W'fW2çW6‚‚7W'fR“°  –6öç7BÆ7Eö–çBÒ7W'fRævWEö–çB‚“° —F†—2æ7W'&VçEö–çBæ6÷’‚Æ7Eö–çB“°  —&WGW&âF†—3°  —Ð  –6÷’‚6÷W&6R’°  —7WW"æ6÷’‚6÷W&6R“°  —F†—2æ7W'&VçEö–çBæ6÷’‚6÷W&6Ræ7W'&VçEö–çB“°  —&WGW&âF†—3°  —Ð  —Fô¥4ôâ‚’°  –6öç7BFFÒ7WW"çFô¥4ôâ‚“°  –FFæ7W'&VçEö–çBÒF†—2æ7W'&VçEö–çBçFô'&’‚“°  —&WGW&âFF°  —Ð  –g&öÔ¥4ôâ‚§6öâ’°  —7WW"æg&öÔ¥4ôâ‚§6öâ“°  —F†—2æ7W'&VçEö–çBæg&öÔ'&’‚§6öâæ7W'&VçEö–çB“°  —&WGW&âF†—3°  —Ð §Ð ¦6Æ72ÆF†TvVöÖWG'’W‡FVæG2'VffW$vVöÖWG'’°  –6öç7G'V7F÷"‚ö–çG2Ò²æWrfV7F÷#"‚ÂÒãR’ÂæWrfV7F÷#"‚ãRÂ’ÂæWrfV7F÷#"‚ÂãR’ÒÂ6VvÖVçG2Ò"Â†•7F'BÒÂ†”ÆVæwF‚ÒÖF‚å’¢"’°  —7WW"‚“°  —F†—2çG—RÒtÆF†TvVöÖWG'’s°  —F†—2ç&ÖWFW'2Ò° —ö–çG3¢ö–çG2À —6VvÖVçG3¢6VvÖVçG2À —†•7F'C¢†•7F'BÀ —†”ÆVæwFƒ¢†”ÆVæwF€ —Ó°  —6VvÖVçG2ÒÖF‚æfÆö÷"‚6VvÖVçG2“°  ’òò6Æ×†”ÆVæwF‚6ò—Bw2–â&ævRöb²Â%’Ð  —†”ÆVæwF‚Ò6Æ×‚†”ÆVæwF‚ÂÂÖF‚å’¢"“°  ’òò'VffW'0  –6öç7B–æF–6W2ÒµÓ° –6öç7BfW'F–6W2ÒµÓ° –6öç7BWg2ÒµÓ° –6öç7B–æ—Dæ÷&ÖÇ2ÒµÓ° –6öç7Bæ÷&ÖÇ2ÒµÓ°  ’òò†VÇW"f&–&ÆW0  –6öç7B–çfW'6U6VvÖVçG2Òãò6VvÖVçG3° –6öç7BfW'FW‚ÒæWrfV7F÷#2‚“° –6öç7BWbÒæWrfV7F÷#"‚“° –6öç7Bæ÷&ÖÂÒæWrfV7F÷#2‚“° –6öç7B7W$æ÷&ÖÂÒæWrfV7F÷#2‚“° –6öç7B&Wdæ÷&ÖÂÒæWrfV7F÷#2‚“° –ÆWBG‚Ò° –ÆWBG’Ò°  ’òò&RÖ6ö×WFRæ÷&ÖÇ2f÷"–æ—F–Â&ÖW&–F–â   –f÷"‚ÆWB¢Ò²¢ÃÒ‚ö–çG2æÆVæwF‚Ò“²¢²²’°  —7v—F6‚‚¢’°  –66R ’òò7V6–Â†æFÆ–ærf÷"7BfW'FW‚öâF€  –G‚Òö–çG5²¢²Òç‚Òö–çG5²¢Òçƒ° –G’Òö–çG5²¢²Òç’Òö–çG5²¢Òç“°  –æ÷&ÖÂç‚ÒG’¢ã° –æ÷&ÖÂç’ÒÒGƒ° –æ÷&ÖÂç¢ÒG’¢ã°  —&Wdæ÷&ÖÂæ6÷’‚æ÷&ÖÂ“°  –æ÷&ÖÂææ÷&ÖÆ—¦R‚“°  ––æ—Dæ÷&ÖÇ2çW6‚‚æ÷&ÖÂç‚Âæ÷&ÖÂç’Âæ÷&ÖÂç¢“°  –'&V³°  –66R‚ö–çG2æÆVæwF‚Ò“ ’òò7V6–Â†æFÆ–ærf÷"Æ7BfW'FW‚öâF€  ––æ—Dæ÷&ÖÇ2çW6‚‚&Wdæ÷&ÖÂç‚Â&Wdæ÷&ÖÂç’Â&Wdæ÷&ÖÂç¢“°  –'&V³°  –FVfVÇC ’òòFVfVÇB†æFÆ–ærf÷"ÆÂfW'F–6W2–â&WGvVVà  –G‚Òö–çG5²¢²Òç‚Òö–çG5²¢Òçƒ° –G’Òö–çG5²¢²Òç’Òö–çG5²¢Òç“°  –æ÷&ÖÂç‚ÒG’¢ã° –æ÷&ÖÂç’ÒÒGƒ° –æ÷&ÖÂç¢ÒG’¢ã°  –7W$æ÷&ÖÂæ6÷’‚æ÷&ÖÂ“°  –æ÷&ÖÂç‚³Ò&Wdæ÷&ÖÂçƒ° –æ÷&ÖÂç’³Ò&Wdæ÷&ÖÂç“° –æ÷&ÖÂç¢³Ò&Wdæ÷&ÖÂç£°  –æ÷&ÖÂææ÷&ÖÆ—¦R‚“°  ––æ—Dæ÷&ÖÇ2çW6‚‚æ÷&ÖÂç‚Âæ÷&ÖÂç’Âæ÷&ÖÂç¢“°  —&Wdæ÷&ÖÂæ6÷’‚7W$æ÷&ÖÂ“°  —Ð  —Ð  ’òòvVæW&FRfW'F–6W2ÂWg2æBæ÷&ÖÇ0  –f÷"‚ÆWB’Ò²’ÃÒ6VvÖVçG3²’²²’°  –6öç7B†’Ò†•7F'B²’¢–çfW'6U6VvÖVçG2¢†”ÆVæwFƒ°  –6öç7B6–âÒÖF‚ç6–â‚†’“° –6öç7B6÷2ÒÖF‚æ6÷2‚†’“°  –f÷"‚ÆWB¢Ò²¢ÃÒ‚ö–çG2æÆVæwF‚Ò“²¢²²’°  ’òòfW'FW€  —fW'FW‚ç‚Òö–çG5²¢Òç‚¢6–ã° —fW'FW‚ç’Òö–çG5²¢Òç“° —fW'FW‚ç¢Òö–çG5²¢Òç‚¢6÷3°  —fW'F–6W2çW6‚‚fW'FW‚ç‚ÂfW'FW‚ç’ÂfW'FW‚ç¢“°  ’òòW`  —Wbç‚Ò’ò6VvÖVçG3° —Wbç’Ò¢ò‚ö–çG2æÆVæwF‚Ò“°  —Wg2çW6‚‚Wbç‚ÂWbç’“°  ’òòæ÷&ÖÀ  –6öç7B‚Ò–æ—Dæ÷&ÖÇ5²2¢¢²Ò¢6–ã° –6öç7B’Ò–æ—Dæ÷&ÖÇ5²2¢¢²Ó° –6öç7B¢Ò–æ—Dæ÷&ÖÇ5²2¢¢²Ò¢6÷3°  –æ÷&ÖÇ2çW6‚‚‚Â’Â¢“°  —Ð  —Ð  ’òò–æF–6W0  –f÷"‚ÆWB’Ò²’Â6VvÖVçG3²’²²’°  –f÷"‚ÆWB¢Ò²¢Â‚ö–çG2æÆVæwF‚Ò“²¢²²’°  –6öç7B&6RÒ¢²’¢ö–çG2æÆVæwFƒ°  –6öç7BÒ&6S° –6öç7B"Ò&6R²ö–çG2æÆVæwFƒ° –6öç7B2Ò&6R²ö–çG2æÆVæwF‚²° –6öç7BBÒ&6R²°  ’òòf6W0  ––æF–6W2çW6‚‚Â"ÂB“° ––æF–6W2çW6‚‚2ÂBÂ"“°  —Ð  —Ð  ’òò'V–ÆBvVöÖWG'  —F†—2ç6WD–æFW‚‚–æF–6W2“° —F†—2ç6WDGG&–'WFR‚w÷6—F–öârÂæWrfÆöC3$'VffW$GG&–'WFR‚fW'F–6W2Â2’“° —F†—2ç6WDGG&–'WFR‚wWbrÂæWrfÆöC3$'VffW$GG&–'WFR‚Wg2Â"’“° —F†—2ç6WDGG&–'WFR‚væ÷&ÖÂrÂæWrfÆöC3$'VffW$GG&–'WFR‚æ÷&ÖÇ2Â2’“°  —Ð  –6÷’‚6÷W&6R’°  —7WW"æ6÷’‚6÷W&6R“°  —F†—2ç&ÖWFW'2Òö&¦V7Bæ76–vâ‚·ÒÂ6÷W&6Rç&ÖWFW'2“°  —&WGW&âF†—3°  —Ð  —7FF–2g&öÔ¥4ôâ‚FF’°  —&WGW&âæWrÆF†TvVöÖWG'’‚FFçö–çG2ÂFFç6VvÖVçG2ÂFFç†•7F'BÂFFç†”ÆVæwF‚“°  —Ð §Ð ¦6Æ7267VÆTvVöÖWG'’W‡FVæG2ÆF†TvVöÖWG'’°  –6öç7G'V7F÷"‚&F—W2ÒÂÆVæwF‚ÒÂ66VvÖVçG2ÒBÂ&F–Å6VvÖVçG2Ò‚’°  –6öç7BF‚ÒæWrF‚‚“° —F‚æ'6&2‚ÂÒÆVæwF‚ò"Â&F—W2ÂÖF‚å’¢ãRÂ“° —F‚æ'6&2‚ÂÆVæwF‚ò"Â&F—W2ÂÂÖF‚å’¢ãR“°  —7WW"‚F‚ævWEö–çG2‚66VvÖVçG2’Â&F–Å6VvÖVçG2“°  —F†—2çG—RÒt67VÆTvVöÖWG'’s°  —F†—2ç&ÖWFW'2Ò° —&F—W3¢&F—W2À –ÆVæwFƒ¢ÆVæwF‚À –66VvÖVçG3¢66VvÖVçG2À —&F–Å6VvÖVçG3¢&F–Å6VvÖVçG2À —Ó°  —Ð  —7FF–2g&öÔ¥4ôâ‚FF’°  —&WGW&âæWr67VÆTvVöÖWG'’‚FFç&F—W2ÂFFæÆVæwF‚ÂFFæ66VvÖVçG2ÂFFç&F–Å6VvÖVçG2“°  —Ð §Ð ¦6Æ726—&6ÆTvVöÖWG'’W‡FVæG2'VffW$vVöÖWG'’°  –6öç7G'V7F÷"‚&F—W2ÒÂ6VvÖVçG2Ò3"ÂF†WF7F'BÒÂF†WFÆVæwF‚ÒÖF‚å’¢"’°  —7WW"‚“°  —F†—2çG—RÒt6—&6ÆTvVöÖWG'’s°  —F†—2ç&ÖWFW'2Ò° —&F—W3¢&F—W2À —6VvÖVçG3¢6VvÖVçG2À —F†WF7F'C¢F†WF7F'BÀ —F†WFÆVæwFƒ¢F†WFÆVæwF€ —Ó°  —6VvÖVçG2ÒÖF‚æÖ‚‚2Â6VvÖVçG2“°  ’òò'VffW'0  –6öç7B–æF–6W2ÒµÓ° –6öç7BfW'F–6W2ÒµÓ° –6öç7Bæ÷&ÖÇ2ÒµÓ° –6öç7BWg2ÒµÓ°  ’òò†VÇW"f&–&ÆW0  –6öç7BfW'FW‚ÒæWrfV7F÷#2‚“° –6öç7BWbÒæWrfV7F÷#"‚“°  ’òò6VçFW"ö–ç@  —fW'F–6W2çW6‚‚ÂÂ“° –æ÷&ÖÇ2çW6‚‚ÂÂ“° —Wg2çW6‚‚ãRÂãR“°  –f÷"‚ÆWB2ÒÂ’Ò3²2ÃÒ6VvÖVçG3²2²²Â’³Ò2’°  –6öç7B6VvÖVçBÒF†WF7F'B²2ò6VvÖVçG2¢F†WFÆVæwFƒ°  ’òòfW'FW€  —fW'FW‚ç‚Ò&F—W2¢ÖF‚æ6÷2‚6VvÖVçB“° —fW'FW‚ç’Ò&F—W2¢ÖF‚ç6–â‚6VvÖVçB“°  —fW'F–6W2çW6‚‚fW'FW‚ç‚ÂfW'FW‚ç’ÂfW'FW‚ç¢“°  ’òòæ÷&ÖÀ  –æ÷&ÖÇ2çW6‚‚ÂÂ“°  ’òòWg0  —Wbç‚Ò‚fW'F–6W5²’Òò&F—W2²’ò#° —Wbç’Ò‚fW'F–6W5²’²Òò&F—W2²’ò#°  —Wg2çW6‚‚Wbç‚ÂWbç’“°  —Ð  ’òò–æF–6W0  –f÷"‚ÆWB’Ò²’ÃÒ6VvÖVçG3²’²²’°  ––æF–6W2çW6‚‚’Â’²Â“°  —Ð  ’òò'V–ÆBvVöÖWG'  —F†—2ç6WD–æFW‚‚–æF–6W2“° —F†—2ç6WDGG&–'WFR‚w÷6—F–öârÂæWrfÆöC3$'VffW$GG&–'WFR‚fW'F–6W2Â2’“° —F†—2ç6WDGG&–'WFR‚væ÷&ÖÂrÂæWrfÆöC3$'VffW$GG&–'WFR‚æ÷&ÖÇ2Â2’“° —F†—2ç6WDGG&–'WFR‚wWbrÂæWrfÆöC3$'VffW$GG&–'WFR‚Wg2Â"’“°  —Ð  –6÷’‚6÷W&6R’°  —7WW"æ6÷’‚6÷W&6R“°  —F†—2ç&ÖWFW'2Òö&¦V7Bæ76–vâ‚·ÒÂ6÷W&6Rç&ÖWFW'2“°  —&WGW&âF†—3°  —Ð  —7FF–2g&öÔ¥4ôâ‚FF’°  —&WGW&âæWr6—&6ÆTvVöÖWG'’‚FFç&F—W2ÂFFç6VvÖVçG2ÂFFçF†WF7F'BÂFFçF†WFÆVæwF‚“°  —Ð §Ð ¦6Æ727–Æ–æFW$vVöÖWG'’W‡FVæG2'VffW$vVöÖWG'’°  –6öç7G'V7F÷"‚&F—W5F÷ÒÂ&F—W4&÷GFöÒÒÂ†V–v‡BÒÂ&F–Å6VvÖVçG2Ò3"Â†V–v‡E6VvÖVçG2ÒÂ÷VäVæFVBÒfÇ6RÂF†WF7F'BÒÂF†WFÆVæwF‚ÒÖF‚å’¢"’°  —7WW"‚“°  —F†—2çG—RÒt7–Æ–æFW$vVöÖWG'’s°  —F†—2ç&ÖWFW'2Ò° —&F—W5F÷¢&F—W5F÷À —&F—W4&÷GFöÓ¢&F—W4&÷GFöÒÀ –†V–v‡C¢†V–v‡BÀ —&F–Å6VvÖVçG3¢&F–Å6VvÖVçG2À –†V–v‡E6VvÖVçG3¢†V–v‡E6VvÖVçG2À –÷VäVæFVC¢÷VäVæFVBÀ —F†WF7F'C¢F†WF7F'BÀ —F†WFÆVæwFƒ¢F†WFÆVæwF€ —Ó°  –6öç7B66÷RÒF†—3°  —&F–Å6VvÖVçG2ÒÖF‚æfÆö÷"‚&F–Å6VvÖVçG2“° –†V–v‡E6VvÖVçG2ÒÖF‚æfÆö÷"‚†V–v‡E6VvÖVçG2“°  ’òò'VffW'0  –6öç7B–æF–6W2ÒµÓ° –6öç7BfW'F–6W2ÒµÓ° –6öç7Bæ÷&ÖÇ2ÒµÓ° –6öç7BWg2ÒµÓ°  ’òò†VÇW"f&–&ÆW0  –ÆWB–æFW‚Ò° –6öç7B–æFW„'&’ÒµÓ° –6öç7B†Æd†V–v‡BÒ†V–v‡Bò#° –ÆWBw&÷W7F'BÒ°  ’òòvVæW&FRvVöÖWG'  –vVæW&FUF÷'6ò‚“°  ––b‚÷VäVæFVBÓÓÒfÇ6R’°  ––b‚&F—W5F÷â’vVæW&FT6‚G'VR“° ––b‚&F—W4&÷GFöÒâ’vVæW&FT6‚fÇ6R“°  —Ð  ’òò'V–ÆBvVöÖWG'  —F†—2ç6WD–æFW‚‚–æF–6W2“° —F†—2ç6WDGG&–'WFR‚w÷6—F–öârÂæWrfÆöC3$'VffW$GG&–'WFR‚fW'F–6W2Â2’“° —F†—2ç6WDGG&–'WFR‚væ÷&ÖÂrÂæWrfÆöC3$'VffW$GG&–'WFR‚æ÷&ÖÇ2Â2’“° —F†—2ç6WDGG&–'WFR‚wWbrÂæWrfÆöC3$'VffW$GG&–'WFR‚Wg2Â"’“°  –gVæ7F–öâvVæW&FUF÷'6ò‚’°  –6öç7Bæ÷&ÖÂÒæWrfV7F÷#2‚“° –6öç7BfW'FW‚ÒæWrfV7F÷#2‚“°  –ÆWBw&÷W6÷VçBÒ°  ’òòF†—2v–ÆÂ&RW6VBFò6Æ7VÆFRF†Ræ÷&ÖÀ –6öç7B6Æ÷RÒ‚&F—W4&÷GFöÒÒ&F—W5F÷’ò†V–v‡C°  ’òòvVæW&FRfW'F–6W2Âæ÷&ÖÇ2æBWg0  –f÷"‚ÆWB’Ò²’ÃÒ†V–v‡E6VvÖVçG3²’²²’°  –6öç7B–æFW…&÷rÒµÓ°  –6öç7BbÒ’ò†V–v‡E6VvÖVçG3°  ’òò6Æ7VÆFRF†R&F—W2öbF†R7W'&VçB&÷p  –6öç7B&F—W2Òb¢‚&F—W4&÷GFöÒÒ&F—W5F÷’²&F—W5F÷°  –f÷"‚ÆWB‚Ò²‚ÃÒ&F–Å6VvÖVçG3²‚²²’°  –6öç7BRÒ‚ò&F–Å6VvÖVçG3°  –6öç7BF†WFÒR¢F†WFÆVæwF‚²F†WF7F'C°  –6öç7B6–åF†WFÒÖF‚ç6–â‚F†WF“° –6öç7B6÷5F†WFÒÖF‚æ6÷2‚F†WF“°  ’òòfW'FW€  —fW'FW‚ç‚Ò&F—W2¢6–åF†WF° —fW'FW‚ç’ÒÒb¢†V–v‡B²†Æd†V–v‡C° —fW'FW‚ç¢Ò&F—W2¢6÷5F†WF° —fW'F–6W2çW6‚‚fW'FW‚ç‚ÂfW'FW‚ç’ÂfW'FW‚ç¢“°  ’òòæ÷&ÖÀ  –æ÷&ÖÂç6WB‚6–åF†WFÂ6Æ÷RÂ6÷5F†WF’ææ÷&ÖÆ—¦R‚“° –æ÷&ÖÇ2çW6‚‚æ÷&ÖÂç‚Âæ÷&ÖÂç’Âæ÷&ÖÂç¢“°  ’òòW`  —Wg2çW6‚‚RÂÒb“°  ’òò6fR–æFW‚öbfW'FW‚–â&W7V7F—fR&÷p  ––æFW…&÷rçW6‚‚–æFW‚²²“°  —Ð  ’òòæ÷r6fRfW'F–6W2öbF†R&÷r–â÷W"–æFW‚'&  ––æFW„'&’çW6‚‚–æFW…&÷r“°  —Ð  ’òòvVæW&FR–æF–6W0  –f÷"‚ÆWB‚Ò²‚Â&F–Å6VvÖVçG3²‚²²’°  –f÷"‚ÆWB’Ò²’Â†V–v‡E6VvÖVçG3²’²²’°  ’òòvRW6RF†R–æFW‚'&’Fò66W72F†R6÷'&V7B–æF–6W0  –6öç7BÒ–æFW„'&•²’Õ²‚Ó° –6öç7B"Ò–æFW„'&•²’²Õ²‚Ó° –6öç7B2Ò–æFW„'&•²’²Õ²‚²Ó° –6öç7BBÒ–æFW„'&•²’Õ²‚²Ó°  ’òòf6W0  ––æF–6W2çW6‚‚Â"ÂB“° ––æF–6W2çW6‚‚"Â2ÂB“°  ’òòWFFRw&÷W6÷VçFW   –w&÷W6÷VçB³Òc°  —Ð  —Ð  ’òòFBw&÷WFòF†RvVöÖWG'’âF†—2v–ÆÂVç7W&R×VÇF’ÖFW&–Â7W÷'@  —66÷RæFDw&÷W‚w&÷W7F'BÂw&÷W6÷VçBÂ“°  ’òò6Æ7VÆFRæWr7F'BfÇVRf÷"w&÷W0  –w&÷W7F'B³Òw&÷W6÷VçC°  —Ð  –gVæ7F–öâvVæW&FT6‚F÷’°  ’òò6fRF†R–æFW‚öbF†Rf—'7B6VçFW"fW'FW€ –6öç7B6VçFW$–æFW…7F'BÒ–æFWƒ°  –6öç7BWbÒæWrfV7F÷#"‚“° –6öç7BfW'FW‚ÒæWrfV7F÷#2‚“°  –ÆWBw&÷W6÷VçBÒ°  –6öç7B&F—W2Ò‚F÷ÓÓÒG'VR’ò&F—W5F÷¢&F—W4&÷GFöÓ° –6öç7B6–vâÒ‚F÷ÓÓÒG'VR’ò¢Ò°  ’òòf—'7BvRvVæW&FRF†R6VçFW"fW'FW‚FFöbF†R6à ’òò&V6W6RF†RvVöÖWG'’æVVG2öæR6WBöbWg2W"f6RÀ ’òòvR×W7BvVæW&FR6VçFW"fW'FW‚W"f6R÷6VvÖVç@  –f÷"‚ÆWB‚Ò²‚ÃÒ&F–Å6VvÖVçG3²‚²²’°  ’òòfW'FW€  —fW'F–6W2çW6‚‚Â†Æd†V–v‡B¢6–vâÂ“°  ’òòæ÷&ÖÀ  –æ÷&ÖÇ2çW6‚‚Â6–vâÂ“°  ’òòW`  —Wg2çW6‚‚ãRÂãR“°  ’òò–æ7&V6R–æFW€  ––æFW‚²³°  —Ð  ’òò6fRF†R–æFW‚öbF†RÆ7B6VçFW"fW'FW€ –6öç7B6VçFW$–æFW„VæBÒ–æFWƒ°  ’òòæ÷rvRvVæW&FRF†R7W'&÷VæF–ærfW'F–6W2Âæ÷&ÖÇ2æBWg0  –f÷"‚ÆWB‚Ò²‚ÃÒ&F–Å6VvÖVçG3²‚²²’°  –6öç7BRÒ‚ò&F–Å6VvÖVçG3° –6öç7BF†WFÒR¢F†WFÆVæwF‚²F†WF7F'C°  –6öç7B6÷5F†WFÒÖF‚æ6÷2‚F†WF“° –6öç7B6–åF†WFÒÖF‚ç6–â‚F†WF“°  ’òòfW'FW€  —fW'FW‚ç‚Ò&F—W2¢6–åF†WF° —fW'FW‚ç’Ò†Æd†V–v‡B¢6–vã° —fW'FW‚ç¢Ò&F—W2¢6÷5F†WF° —fW'F–6W2çW6‚‚fW'FW‚ç‚ÂfW'FW‚ç’ÂfW'FW‚ç¢“°  ’òòæ÷&ÖÀ  –æ÷&ÖÇ2çW6‚‚Â6–vâÂ“°  ’òòW`  —Wbç‚Ò‚6÷5F†WF¢ãR’²ãS° —Wbç’Ò‚6–åF†WF¢ãR¢6–vâ’²ãS° —Wg2çW6‚‚Wbç‚ÂWbç’“°  ’òò–æ7&V6R–æFW€  ––æFW‚²³°  —Ð  ’òòvVæW&FR–æF–6W0  –f÷"‚ÆWB‚Ò²‚Â&F–Å6VvÖVçG3²‚²²’°  –6öç7B2Ò6VçFW$–æFW…7F'B²ƒ° –6öç7B’Ò6VçFW$–æFW„VæB²ƒ°  ––b‚F÷ÓÓÒG'VR’°  ’òòf6RF÷   ––æF–6W2çW6‚‚’Â’²Â2“°  —ÒVÇ6R°  ’òòf6R&÷GFöÐ  ––æF–6W2çW6‚‚’²Â’Â2“°  —Ð  –w&÷W6÷VçB³Ò3°  —Ð  ’òòFBw&÷WFòF†RvVöÖWG'’âF†—2v–ÆÂVç7W&R×VÇF’ÖFW&–Â7W÷'@  —66÷RæFDw&÷W‚w&÷W7F'BÂw&÷W6÷VçBÂF÷ÓÓÒG'VRò¢"“°  ’òò6Æ7VÆFRæWr7F'BfÇVRf÷"w&÷W0  –w&÷W7F'B³Òw&÷W6÷VçC°  —Ð  —Ð  –6÷’‚6÷W&6R’°  —7WW"æ6÷’‚6÷W&6R“°  —F†—2ç&ÖWFW'2Òö&¦V7Bæ76–vâ‚·ÒÂ6÷W&6Rç&ÖWFW'2“°  —&WGW&âF†—3°  —Ð  —7FF–2g&öÔ¥4ôâ‚FF’°  —&WGW&âæWr7–Æ–æFW$vVöÖWG'’‚FFç&F—W5F÷ÂFFç&F—W4&÷GFöÒÂFFæ†V–v‡BÂFFç&F–Å6VvÖVçG2ÂFFæ†V–v‡E6VvÖVçG2ÂFFæ÷VäVæFVBÂFFçF†WF7F'BÂFFçF†WFÆVæwF‚“°  —Ð §Ð ¦6Æ726öæTvVöÖWG'’W‡FVæG27–Æ–æFW$vVöÖWG'’°  –6öç7G'V7F÷"‚&F—W2ÒÂ†V–v‡BÒÂ&F–Å6VvÖVçG2Ò3"Â†V–v‡E6VvÖVçG2ÒÂ÷VäVæFVBÒfÇ6RÂF†WF7F'BÒÂF†WFÆVæwF‚ÒÖF‚å’¢"’°  —7WW"‚Â&F—W2Â†V–v‡BÂ&F–Å6VvÖVçG2Â†V–v‡E6VvÖVçG2Â÷VäVæFVBÂF†WF7F'BÂF†WFÆVæwF‚“°  —F†—2çG—RÒt6öæTvVöÖWG'’s°  —F†—2ç&ÖWFW'2Ò° —&F—W3¢&F—W2À –†V–v‡C¢†V–v‡BÀ —&F–Å6VvÖVçG3¢&F–Å6VvÖVçG2À –†V–v‡E6VvÖVçG3¢†V–v‡E6VvÖVçG2À –÷VäVæFVC¢÷VäVæFVBÀ —F†WF7F'C¢F†WF7F'BÀ —F†WFÆVæwFƒ¢F†WFÆVæwF€ —Ó°  —Ð  —7FF–2g&öÔ¥4ôâ‚FF’°  —&WGW&âæWr6öæTvVöÖWG'’‚FFç&F—W2ÂFFæ†V–v‡BÂFFç&F–Å6VvÖVçG2ÂFFæ†V–v‡E6VvÖVçG2ÂFFæ÷VäVæFVBÂFFçF†WF7F'BÂFFçF†WFÆVæwF‚“°  —Ð §Ð ¦6Æ72öÇ–†VG&öävVöÖWG'’W‡FVæG2'VffW$vVöÖWG'’°  –6öç7G'V7F÷"‚fW'F–6W2ÒµÒÂ–æF–6W2ÒµÒÂ&F—W2ÒÂFWF–ÂÒ’°  —7WW"‚“°  —F†—2çG—RÒuöÇ–†VG&öävVöÖWG'’s°  —F†—2ç&ÖWFW'2Ò° —fW'F–6W3¢fW'F–6W2À ––æF–6W3¢–æF–6W2À —&F—W3¢&F—W2À –FWF–Ã¢FWF–À —Ó°  ’òòFVfVÇB'VffW"FF  –6öç7BfW'FW„'VffW"ÒµÓ° –6öç7BWd'VffW"ÒµÓ°  ’òòF†R7V&F—f—6–öâ7&VFW2F†RfW'FW‚'VffW"FF  —7V&F—f–FR‚FWF–Â“°  ’òòÆÂfW'F–6W26†÷VÆBÆ–Röâ6öæ6WGVÂ7†W&Rv—F‚v—fVâ&F—W0  –Ç•&F—W2‚&F—W2“°  ’òòf–æÆÇ’Â7&VFRF†RWbFF  –vVæW&FUUg2‚“°  ’òò'V–ÆBæöâÖ–æFW†VBvVöÖWG'  —F†—2ç6WDGG&–'WFR‚w÷6—F–öârÂæWrfÆöC3$'VffW$GG&–'WFR‚fW'FW„'VffW"Â2’“° —F†—2ç6WDGG&–'WFR‚væ÷&ÖÂrÂæWrfÆöC3$'VffW$GG&–'WFR‚fW'FW„'VffW"ç6Æ–6R‚’Â2’“° —F†—2ç6WDGG&–'WFR‚wWbrÂæWrfÆöC3$'VffW$GG&–'WFR‚Wd'VffW"Â"’“°  ––b‚FWF–ÂÓÓÒ’°  —F†—2æ6ö×WFUfW'FW„æ÷&ÖÇ2‚“²òòfÆBæ÷&ÖÇ0  —ÒVÇ6R°  —F†—2ææ÷&ÖÆ—¦Tæ÷&ÖÇ2‚“²òò6Öö÷F‚æ÷&ÖÇ0  —Ð  ’òò†VÇW"gVæ7F–öç0  –gVæ7F–öâ7V&F—f–FR‚FWF–Â’°  –6öç7BÒæWrfV7F÷#2‚“° –6öç7B"ÒæWrfV7F÷#2‚“° –6öç7B2ÒæWrfV7F÷#2‚“°  ’òò—FW&FR÷fW"ÆÂf6W2æBÇ’7V&F—f—6–öâv—F‚F†Rv—fVâFWF–ÂfÇVP  –f÷"‚ÆWB’Ò²’Â–æF–6W2æÆVæwFƒ²’³Ò2’°  ’òòvWBF†RfW'F–6W2öbF†Rf6P  –vWEfW'FW„'”–æFW‚‚–æF–6W5²’²ÒÂ“° –vWEfW'FW„'”–æFW‚‚–æF–6W5²’²ÒÂ"“° –vWEfW'FW„'”–æFW‚‚–æF–6W5²’²"ÒÂ2“°  ’òòW&f÷&Ò7V&F—f—6–öà  —7V&F—f–FTf6R‚Â"Â2ÂFWF–Â“°  —Ð  —Ð  –gVæ7F–öâ7V&F—f–FTf6R‚Â"Â2ÂFWF–Â’°  –6öç7B6öÇ2ÒFWF–Â²°  ’òòvRW6RF†—2×VÇF–F–ÖVç6–öæÂ'&’2FF7G'V7GW&Rf÷"7&VF–ærF†R7V&F—f—6–öà  –6öç7BbÒµÓ°  ’òò6öç7G'V7BÆÂöbF†RfW'F–6W2f÷"F†—27V&F—f—6–öà  –f÷"‚ÆWB’Ò²’ÃÒ6öÇ3²’²²’°  —e²’ÒÒµÓ°  –6öç7B¢Òæ6ÆöæR‚’æÆW'‚2Â’ò6öÇ2“° –6öç7B&¢Ò"æ6ÆöæR‚’æÆW'‚2Â’ò6öÇ2“°  –6öç7B&÷w2Ò6öÇ2Ò“°  –f÷"‚ÆWB¢Ò²¢ÃÒ&÷w3²¢²²’°  ––b‚¢ÓÓÒbb’ÓÓÒ6öÇ2’°  —e²’Õ²¢ÒÒ£°  —ÒVÇ6R°  —e²’Õ²¢ÒÒ¢æ6ÆöæR‚’æÆW'‚&¢Â¢ò&÷w2“°  —Ð  —Ð  —Ð  ’òò6öç7G'V7BÆÂöbF†Rf6W0  –f÷"‚ÆWB’Ò²’Â6öÇ3²’²²’°  –f÷"‚ÆWB¢Ò²¢Â"¢‚6öÇ2Ò’’Ò²¢²²’°  –6öç7B²ÒÖF‚æfÆö÷"‚¢ò"“°  ––b‚¢R"ÓÓÒ’°  —W6…fW'FW‚‚e²’Õ²²²Ò“° —W6…fW'FW‚‚e²’²Õ²²Ò“° —W6…fW'FW‚‚e²’Õ²²Ò“°  —ÒVÇ6R°  —W6…fW'FW‚‚e²’Õ²²²Ò“° —W6…fW'FW‚‚e²’²Õ²²²Ò“° —W6…fW'FW‚‚e²’²Õ²²Ò“°  —Ð  —Ð  —Ð  —Ð  –gVæ7F–öâÇ•&F—W2‚&F—W2’°  –6öç7BfW'FW‚ÒæWrfV7F÷#2‚“°  ’òò—FW&FR÷fW"F†RVçF—&R'VffW"æBÇ’F†R&F—W2FòV6‚fW'FW€  –f÷"‚ÆWB’Ò²’ÂfW'FW„'VffW"æÆVæwFƒ²’³Ò2’°  —fW'FW‚ç‚ÒfW'FW„'VffW%²’²Ó° —fW'FW‚ç’ÒfW'FW„'VffW%²’²Ó° —fW'FW‚ç¢ÒfW'FW„'VffW%²’²"Ó°  —fW'FW‚ææ÷&ÖÆ—¦R‚’æ×VÇF—Ç•66Æ"‚&F—W2“°  —fW'FW„'VffW%²’²ÒÒfW'FW‚çƒ° —fW'FW„'VffW%²’²ÒÒfW'FW‚ç“° —fW'FW„'VffW%²’²"ÒÒfW'FW‚ç£°  —Ð  —Ð  –gVæ7F–öâvVæW&FUUg2‚’°  –6öç7BfW'FW‚ÒæWrfV7F÷#2‚“°  –f÷"‚ÆWB’Ò²’ÂfW'FW„'VffW"æÆVæwFƒ²’³Ò2’°  —fW'FW‚ç‚ÒfW'FW„'VffW%²’²Ó° —fW'FW‚ç’ÒfW'FW„'VffW%²’²Ó° —fW'FW‚ç¢ÒfW'FW„'VffW%²’²"Ó°  –6öç7BRÒ¦–×WF‚‚fW'FW‚’ò"òÖF‚å’²ãS° –6öç7BbÒ–æ6Æ–æF–öâ‚fW'FW‚’òÖF‚å’²ãS° —Wd'VffW"çW6‚‚RÂÒb“°  —Ð  –6÷'&V7EUg2‚“°  –6÷'&V7E6VÒ‚“°  —Ð  –gVæ7F–öâ6÷'&V7E6VÒ‚’°  ’òò†æFÆR66Rv†Vâf6R7G&FFÆW2F†R6VÒÂ6VR33#c  –f÷"‚ÆWB’Ò²’ÂWd'VffW"æÆVæwFƒ²’³Òb’°  ’òòWbFFöb6–ævÆRf6P  –6öç7BƒÒWd'VffW%²’²Ó° –6öç7BƒÒWd'VffW%²’²"Ó° –6öç7Bƒ"ÒWd'VffW%²’²BÓ°  –6öç7BÖ‚ÒÖF‚æÖ‚‚ƒÂƒÂƒ"“° –6öç7BÖ–âÒÖF‚æÖ–â‚ƒÂƒÂƒ"“°  ’òòã’—26öÖWv†B&&—G&'  ––b‚Ö‚âã’bbÖ–âÂã’°  ––b‚ƒÂã"’Wd'VffW%²’²Ò³Ò° ––b‚ƒÂã"’Wd'VffW%²’²"Ò³Ò° ––b‚ƒ"Âã"’Wd'VffW%²’²BÒ³Ò°  —Ð  —Ð  —Ð  –gVæ7F–öâW6…fW'FW‚‚fW'FW‚’°  —fW'FW„'VffW"çW6‚‚fW'FW‚ç‚ÂfW'FW‚ç’ÂfW'FW‚ç¢“°  —Ð  –gVæ7F–öâvWEfW'FW„'”–æFW‚‚–æFW‚ÂfW'FW‚’°  –6öç7B7G&–FRÒ–æFW‚¢3°  —fW'FW‚ç‚ÒfW'F–6W5²7G&–FR²Ó° —fW'FW‚ç’ÒfW'F–6W5²7G&–FR²Ó° —fW'FW‚ç¢ÒfW'F–6W5²7G&–FR²"Ó°  —Ð  –gVæ7F–öâ6÷'&V7EUg2‚’°  –6öç7BÒæWrfV7F÷#2‚“° –6öç7B"ÒæWrfV7F÷#2‚“° –6öç7B2ÒæWrfV7F÷#2‚“°  –6öç7B6VçG&ö–BÒæWrfV7F÷#2‚“°  –6öç7BWdÒæWrfV7F÷#"‚“° –6öç7BWd"ÒæWrfV7F÷#"‚“° –6öç7BWd2ÒæWrfV7F÷#"‚“°  –f÷"‚ÆWB’ÒÂ¢Ò²’ÂfW'FW„'VffW"æÆVæwFƒ²’³Ò’Â¢³Òb’°  –ç6WB‚fW'FW„'VffW%²’²ÒÂfW'FW„'VffW%²’²ÒÂfW'FW„'VffW%²’²"Ò“° –"ç6WB‚fW'FW„'VffW%²’²2ÒÂfW'FW„'VffW%²’²BÒÂfW'FW„'VffW%²’²RÒ“° –2ç6WB‚fW'FW„'VffW%²’²bÒÂfW'FW„'VffW%²’²rÒÂfW'FW„'VffW%²’²‚Ò“°  —Wdç6WB‚Wd'VffW%²¢²ÒÂWd'VffW%²¢²Ò“° —Wd"ç6WB‚Wd'VffW%²¢²"ÒÂWd'VffW%²¢²2Ò“° —Wd2ç6WB‚Wd'VffW%²¢²BÒÂWd'VffW%²¢²RÒ“°  –6VçG&ö–Bæ6÷’‚’æFB‚"’æFB‚2’æF—f–FU66Æ"‚2“°  –6öç7B¦’Ò¦–×WF‚‚6VçG&ö–B“°  –6÷'&V7EUb‚WdÂ¢²ÂÂ¦’“° –6÷'&V7EUb‚Wd"Â¢²"Â"Â¦’“° –6÷'&V7EUb‚Wd2Â¢²BÂ2Â¦’“°  —Ð  —Ð  –gVæ7F–öâ6÷'&V7EUb‚WbÂ7G&–FRÂfV7F÷"Â¦–×WF‚’°  ––b‚‚¦–×WF‚Â’bb‚Wbç‚ÓÓÒ’’°  —Wd'VffW%²7G&–FRÒÒWbç‚Ò°  —Ð  ––b‚‚fV7F÷"ç‚ÓÓÒ’bb‚fV7F÷"ç¢ÓÓÒ’’°  —Wd'VffW%²7G&–FRÒÒ¦–×WF‚ò"òÖF‚å’²ãS°  —Ð  —Ð  ’òòævÆR&÷VæBF†R’†—2Â6÷VçFW"Ö6Æö6·v—6Rv†VâÆöö¶–ærg&öÒ&÷fRà  –gVæ7F–öâ¦–×WF‚‚fV7F÷"’°  —&WGW&âÖF‚æFã"‚fV7F÷"ç¢ÂÒfV7F÷"ç‚“°  —Ð   ’òòævÆR&÷fRF†R…¢ÆæRà  –gVæ7F–öâ–æ6Æ–æF–öâ‚fV7F÷"’°  —&WGW&âÖF‚æFã"‚ÒfV7F÷"ç’ÂÖF‚ç7'B‚‚fV7F÷"ç‚¢fV7F÷"ç‚’²‚fV7F÷"ç¢¢fV7F÷"ç¢’’“°  —Ð  —Ð  –6÷’‚6÷W&6R’°  —7WW"æ6÷’‚6÷W&6R“°  —F†—2ç&ÖWFW'2Òö&¦V7Bæ76–vâ‚·ÒÂ6÷W&6Rç&ÖWFW'2“°  —&WGW&âF†—3°  —Ð  —7FF–2g&öÔ¥4ôâ‚FF’°  —&WGW&âæWröÇ–†VG&öävVöÖWG'’‚FFçfW'F–6W2ÂFFæ–æF–6W2ÂFFç&F—W2ÂFFæFWF–Ç2“°  —Ð §Ð ¦6Æ72FöFV6†VG&öävVöÖWG'’W‡FVæG2öÇ–†VG&öävVöÖWG'’°  –6öç7G'V7F÷"‚&F—W2ÒÂFWF–ÂÒ’°  –6öç7BBÒ‚²ÖF‚ç7'B‚R’’ò#° –6öç7B"ÒòC°  –6öç7BfW'F–6W2Ò°  ’òòŒ+Â+Â+ ’ÒÂÒÂÒÀ’ÒÂÒÂÀ ’ÒÂÂÒÂÒÂÂÀ “ÂÒÂÒÂÂÒÂÀ “ÂÂÒÂÂÂÀ  ’òòƒÂ+üøbÂ+øb “ÂÒ"ÂÒBÂÂÒ"ÂBÀ “Â"ÂÒBÂÂ"ÂBÀ  ’òòŒ+üøbÂ+øbÂ ’Ò"ÂÒBÂÂÒ"ÂBÂÀ —"ÂÒBÂÂ"ÂBÂÀ  ’òòŒ+øbÂÂ+üøb ’ÒBÂÂÒ"ÂBÂÂÒ"À ’ÒBÂÂ"ÂBÂÂ  •Ó°  –6öç7B–æF–6W2Ò° “2ÂÂrÂ “2ÂrÂRÂ “2ÂRÂ2À “rÂ’ÂrÂ “rÂrÂbÂ “rÂbÂRÀ “rÂBÂ‚Â “rÂ‚ÂÂ “rÂÂbÀ “‚ÂÂbÂ “‚ÂbÂ"Â “‚Â"ÂÀ “Â"ÂÂ “ÂÂ‚Â “Â‚ÂbÀ “bÂÂ"Â “bÂ"Â2Â “bÂ2ÂRÀ “"ÂbÂ‚Â “"Â‚Â2Â “"Â2Â2À “‚ÂÂ’Â “‚Â’ÂÂ “‚ÂÂ2À “BÂBÂ"Â “BÂ"ÂÂ “BÂÂ‚À “Â’ÂRÂ “ÂRÂ’Â “Â’ÂrÀ “’ÂRÂBÂ “’ÂBÂBÂ “’ÂBÂrÀ “Â"ÂBÂ “ÂBÂRÂ “ÂRÂ •Ó°  —7WW"‚fW'F–6W2Â–æF–6W2Â&F—W2ÂFWF–Â“°  —F†—2çG—RÒtFöFV6†VG&öävVöÖWG'’s°  —F†—2ç&ÖWFW'2Ò° —&F—W3¢&F—W2À –FWF–Ã¢FWF–À —Ó°  —Ð  —7FF–2g&öÔ¥4ôâ‚FF’°  —&WGW&âæWrFöFV6†VG&öävVöÖWG'’‚FFç&F—W2ÂFFæFWF–Â“°  —Ð §Ð ¦6öç7B÷cÒò¤õõU$Uõò¢òæWrfV7F÷#2‚“°¦6öç7B÷cCÒò¤õõU$Uõò¢òæWrfV7F÷#2‚“°¦6öç7Böæ÷&ÖÂÒò¤õõU$Uõò¢òæWrfV7F÷#2‚“°¦6öç7B÷G&–ævÆRÒò¤õõU$Uõò¢òæWrG&–ævÆR‚“° ¦6Æ72VFvW4vVöÖWG'’W‡FVæG2'VffW$vVöÖWG'’°  –6öç7G'V7F÷"‚vVöÖWG'’ÒçVÆÂÂF‡&W6†öÆDævÆRÒ’°  —7WW"‚“°  —F†—2çG—RÒtVFvW4vVöÖWG'’s°  —F†—2ç&ÖWFW'2Ò° –vVöÖWG'“¢vVöÖWG'’À —F‡&W6†öÆDævÆS¢F‡&W6†öÆDævÆP —Ó°  ––b‚vVöÖWG'’ÓÒçVÆÂ’°  –6öç7B&V6—6–öåö–çG2ÒC° –6öç7B&V6—6–öâÒÖF‚ç÷r‚Â&V6—6–öåö–çG2“° –6öç7BF‡&W6†öÆDF÷BÒÖF‚æ6÷2‚DTs%$B¢F‡&W6†öÆDævÆR“°  –6öç7B–æFW„GG"ÒvVöÖWG'’ævWD–æFW‚‚“° –6öç7B÷6—F–öäGG"ÒvVöÖWG'’ævWDGG&–'WFR‚w÷6—F–öâr“° –6öç7B–æFW„6÷VçBÒ–æFW„GG"ò–æFW„GG"æ6÷VçB¢÷6—F–öäGG"æ6÷VçC°  –6öç7B–æFW„'"Ò²ÂÂÓ° –6öç7BfW'D¶W—2Ò²vrÂv"rÂv2rÓ° –6öç7B†6†W2ÒæWr'&’‚2“°  –6öç7BVFvTFFÒ·Ó° –6öç7BfW'F–6W2ÒµÓ° –f÷"‚ÆWB’Ò²’Â–æFW„6÷VçC²’³Ò2’°  ––b‚–æFW„GG"’°  ––æFW„'%²ÒÒ–æFW„GG"ævWE‚‚’“° ––æFW„'%²ÒÒ–æFW„GG"ævWE‚‚’²“° ––æFW„'%²"ÒÒ–æFW„GG"ævWE‚‚’²"“°  —ÒVÇ6R°  ––æFW„'%²ÒÒ“° ––æFW„'%²ÒÒ’²° ––æFW„'%²"ÒÒ’²#°  —Ð  –6öç7B²Â"Â2ÒÒ÷G&–ævÆS° –æg&öÔ'VffW$GG&–'WFR‚÷6—F–öäGG"Â–æFW„'%²Ò“° –"æg&öÔ'VffW$GG&–'WFR‚÷6—F–öäGG"Â–æFW„'%²Ò“° –2æg&öÔ'VffW$GG&–'WFR‚÷6—F–öäGG"Â–æFW„'%²"Ò“° •÷G&–ævÆRævWDæ÷&ÖÂ‚öæ÷&ÖÂ“°  ’òò7&VFR†6†W2f÷"F†RVFvRg&öÒF†RfW'F–6W0 –†6†W5²ÒÒG²ÖF‚ç&÷VæB‚ç‚¢&V6—6–öâ’ÒÂG²ÖF‚ç&÷VæB‚ç’¢&V6—6–öâ’ÒÂG²ÖF‚ç&÷VæB‚ç¢¢&V6—6–öâ’Ö° –†6†W5²ÒÒG²ÖF‚ç&÷VæB‚"ç‚¢&V6—6–öâ’ÒÂG²ÖF‚ç&÷VæB‚"ç’¢&V6—6–öâ’ÒÂG²ÖF‚ç&÷VæB‚"ç¢¢&V6—6–öâ’Ö° –†6†W5²"ÒÒG²ÖF‚ç&÷VæB‚2ç‚¢&V6—6–öâ’ÒÂG²ÖF‚ç&÷VæB‚2ç’¢&V6—6–öâ’ÒÂG²ÖF‚ç&÷VæB‚2ç¢¢&V6—6–öâ’Ö°  ’òò6¶—FVvVæW&FRG&–ævÆW0 ––b‚†6†W5²ÒÓÓÒ†6†W5²ÒÇÂ†6†W5²ÒÓÓÒ†6†W5²"ÒÇÂ†6†W5²"ÒÓÓÒ†6†W5²Ò’°  –6öçF–çVS°  —Ð  ’òò—FW&FR÷fW"WfW'’VFvP –f÷"‚ÆWB¢Ò²¢Â3²¢²²’°  ’òòvWBF†Rf—'7BæBæW‡BfW'FW‚Ö¶–ærWF†RVFvP –6öç7B¤æW‡BÒ‚¢²’R3° –6öç7BfV4†6ƒÒ†6†W5²¢Ó° –6öç7BfV4†6ƒÒ†6†W5²¤æW‡BÓ° –6öç7BcÒ÷G&–ævÆU²fW'D¶W—5²¢ÒÓ° –6öç7BcÒ÷G&–ævÆU²fW'D¶W—5²¤æW‡BÒÓ°  –6öç7B†6‚ÒG²fV4†6ƒÕòG²fV4†6ƒÖ° –6öç7B&WfW'6T†6‚ÒG²fV4†6ƒÕòG²fV4†6ƒÖ°  ––b‚&WfW'6T†6‚–âVFvTFFbbVFvTFF²&WfW'6T†6‚Ò’°  ’òò–bvRf÷VæB6–&Æ–ærVFvRFB—B–çFòF†RfW'FW‚'&’–` ’òò—BÖVWG2F†RævÆRF‡&W6†öÆBæBFVÆWFRF†RVFvRg&öÒF†RÖà ––b‚öæ÷&ÖÂæF÷B‚VFvTFF²&WfW'6T†6‚Òææ÷&ÖÂ’ÃÒF‡&W6†öÆDF÷B’°  —fW'F–6W2çW6‚‚cç‚Âcç’Âcç¢“° —fW'F–6W2çW6‚‚cç‚Âcç’Âcç¢“°  —Ð  –VFvTFF²&WfW'6T†6‚ÒÒçVÆÃ°  —ÒVÇ6R–b‚‚†6‚–âVFvTFF’’°  ’òò–bvRwfRÇ&VG’v÷BâVFvR†W&RF†Vâ6¶—FF–æræWröæP –VFvTFF²†6‚ÒÒ°  ––æFWƒ¢–æFW„'%²¢ÒÀ ––æFWƒ¢–æFW„'%²¤æW‡BÒÀ –æ÷&ÖÃ¢öæ÷&ÖÂæ6ÆöæR‚’À  —Ó°  —Ð  —Ð  —Ð  ’òò—FW&FR÷fW"ÆÂ&VÖ–æ–ærÂVæÖF6†VBVFvW2æBFBF†VÒFòF†RfW'FW‚'& –f÷"‚6öç7B¶W’–âVFvTFF’°  ––b‚VFvTFF²¶W’Ò’°  –6öç7B²–æFWƒÂ–æFWƒÒÒVFvTFF²¶W’Ó° •÷cæg&öÔ'VffW$GG&–'WFR‚÷6—F–öäGG"Â–æFWƒ“° •÷cCæg&öÔ'VffW$GG&–'WFR‚÷6—F–öäGG"Â–æFWƒ“°  —fW'F–6W2çW6‚‚÷cç‚Â÷cç’Â÷cç¢“° —fW'F–6W2çW6‚‚÷cCç‚Â÷cCç’Â÷cCç¢“°  —Ð  —Ð  —F†—2ç6WDGG&–'WFR‚w÷6—F–öârÂæWrfÆöC3$'VffW$GG&–'WFR‚fW'F–6W2Â2’“°  —Ð  —Ð  –6÷’‚6÷W&6R’°  —7WW"æ6÷’‚6÷W&6R“°  —F†—2ç&ÖWFW'2Òö&¦V7Bæ76–vâ‚·ÒÂ6÷W&6Rç&ÖWFW'2“°  —&WGW&âF†—3°  —Ð §Ð ¦6Æ726†RW‡FVæG2F‚°  –6öç7G'V7F÷"‚ö–çG2’°  —7WW"‚ö–çG2“°  —F†—2çWV–BÒvVæW&FUUT”B‚“°  —F†—2çG—RÒu6†Rs°  —F†—2æ†öÆW2ÒµÓ°  —Ð  –vWEö–çG4†öÆW2‚F—f—6–öç2’°  –6öç7B†öÆW5G2ÒµÓ°  –f÷"‚ÆWB’ÒÂÂÒF†—2æ†öÆW2æÆVæwFƒ²’ÂÃ²’²²’°  –†öÆW5G5²’ÒÒF†—2æ†öÆW5²’ÒævWEö–çG2‚F—f—6–öç2“°  —Ð  —&WGW&â†öÆW5G3°  —Ð  ’òòvWBö–çG2öb6†RæB†öÆW2†¶W—ö–çG2&6VBöâ6VvÖVçG2&ÖWFW"  –W‡G&7Eö–çG2‚F—f—6–öç2’°  —&WGW&â°  —6†S¢F†—2ævWEö–çG2‚F—f—6–öç2’À –†öÆW3¢F†—2ævWEö–çG4†öÆW2‚F—f—6–öç2  —Ó°  —Ð  –6÷’‚6÷W&6R’°  —7WW"æ6÷’‚6÷W&6R“°  —F†—2æ†öÆW2ÒµÓ°  –f÷"‚ÆWB’ÒÂÂÒ6÷W&6Ræ†öÆW2æÆVæwFƒ²’ÂÃ²’²²’°  –6öç7B†öÆRÒ6÷W&6Ræ†öÆW5²’Ó°  —F†—2æ†öÆW2çW6‚‚†öÆRæ6ÆöæR‚’“°  —Ð  —&WGW&âF†—3°  —Ð  —Fô¥4ôâ‚’°  –6öç7BFFÒ7WW"çFô¥4ôâ‚“°  –FFçWV–BÒF†—2çWV–C° –FFæ†öÆW2ÒµÓ°  –f÷"‚ÆWB’ÒÂÂÒF†—2æ†öÆW2æÆVæwFƒ²’ÂÃ²’²²’°  –6öç7B†öÆRÒF†—2æ†öÆW5²’Ó° –FFæ†öÆW2çW6‚‚†öÆRçFô¥4ôâ‚’“°  —Ð  —&WGW&âFF°  —Ð  –g&öÔ¥4ôâ‚§6öâ’°  —7WW"æg&öÔ¥4ôâ‚§6öâ“°  —F†—2çWV–BÒ§6öâçWV–C° —F†—2æ†öÆW2ÒµÓ°  –f÷"‚ÆWB’ÒÂÂÒ§6öâæ†öÆW2æÆVæwFƒ²’ÂÃ²’²²’°  –6öç7B†öÆRÒ§6öâæ†öÆW5²’Ó° —F†—2æ†öÆW2çW6‚‚æWrF‚‚’æg&öÔ¥4ôâ‚†öÆR’“°  —Ð  —&WGW&âF†—3°  —Ð §Ð ¢ò¢ ¢¢÷'Bg&öÒ‡GG3¢òöv—F‡V"æ6öÒöÖ&÷‚öV&7WB‡c"ã"ãB¢¢ð ¦6öç7BV&7WBÒ°  —G&–æwVÆFS¢gVæ7F–öâ‚FFÂ†öÆT–æF–6W2ÂF–ÒÒ"’°  –6öç7B†4†öÆW2Ò†öÆT–æF–6W2bb†öÆT–æF–6W2æÆVæwFƒ° –6öç7B÷WFW$ÆVâÒ†4†öÆW2ò†öÆT–æF–6W5²Ò¢F–Ò¢FFæÆVæwFƒ° –ÆWB÷WFW$æöFRÒÆ–æ¶VDÆ—7B‚FFÂÂ÷WFW$ÆVâÂF–ÒÂG'VR“° –6öç7BG&–ævÆW2ÒµÓ°  ––b‚÷WFW$æöFRÇÂ÷WFW$æöFRææW‡BÓÓÒ÷WFW$æöFRç&Wb’&WGW&âG&–ævÆW3°  –ÆWBÖ–å‚ÂÖ–å’ÂÖ…‚ÂÖ…’Â‚Â’Â–çe6—¦S°  ––b‚†4†öÆW2’÷WFW$æöFRÒVÆ–Ö–æFT†öÆW2‚FFÂ†öÆT–æF–6W2Â÷WFW$æöFRÂF–Ò“°  ’òò–bF†R6†R—2æ÷BFöò6–×ÆRÂvRvÆÂW6R¢Ö÷&FW"7W'fR†6‚ÆFW#²6Æ7VÆFRöÇ–vöâ&&÷€ ––b‚FFæÆVæwF‚âƒ¢F–Ò’°  –Ö–å‚ÒÖ…‚ÒFF²Ó° –Ö–å’ÒÖ…’ÒFF²Ó°  –f÷"‚ÆWB’ÒF–Ó²’Â÷WFW$ÆVã²’³ÒF–Ò’°  —‚ÒFF²’Ó° —’ÒFF²’²Ó° ––b‚‚ÂÖ–å‚’Ö–å‚Òƒ° ––b‚’ÂÖ–å’’Ö–å’Ò“° ––b‚‚âÖ…‚’Ö…‚Òƒ° ––b‚’âÖ…’’Ö…’Ò“°  —Ð  ’òòÖ–å‚ÂÖ–å’æB–çe6—¦R&RÆFW"W6VBFòG&ç6f÷&Ò6ö÷&G2–çFò–çFVvW'2f÷"¢Ö÷&FW"6Æ7VÆF–öà ––çe6—¦RÒÖF‚æÖ‚‚Ö…‚ÒÖ–å‚ÂÖ…’ÒÖ–å’“° ––çe6—¦RÒ–çe6—¦RÓÒò3#scrò–çe6—¦R¢°  —Ð  –V&7WDÆ–æ¶VB‚÷WFW$æöFRÂG&–ævÆW2ÂF–ÒÂÖ–å‚ÂÖ–å’Â–çe6—¦RÂ“°  —&WGW&âG&–ævÆW3°  —Ð §Ó° ¢òò7&VFR6—&7VÆ"F÷V&Ç’Æ–æ¶VBÆ—7Bg&öÒöÇ–vöâö–çG2–âF†R7V6–f–VBv–æF–ær÷&FW ¦gVæ7F–öâÆ–æ¶VDÆ—7B‚FFÂ7F'BÂVæBÂF–ÒÂ6Æö6·v—6R’°  –ÆWB’ÂÆ7C°  ––b‚6Æö6·v—6RÓÓÒ‚6–væVD&V‚FFÂ7F'BÂVæBÂF–Ò’â’’°  –f÷"‚’Ò7F'C²’ÂVæC²’³ÒF–Ò’Æ7BÒ–ç6W'DæöFR‚’ÂFF²’ÒÂFF²’²ÒÂÆ7B“°  —ÒVÇ6R°  –f÷"‚’ÒVæBÒF–Ó²’ãÒ7F'C²’ÓÒF–Ò’Æ7BÒ–ç6W'DæöFR‚’ÂFF²’ÒÂFF²’²ÒÂÆ7B“°  —Ð  ––b‚Æ7BbbWVÇ2‚Æ7BÂÆ7BææW‡B’’°  —&VÖ÷fTæöFR‚Æ7B“° –Æ7BÒÆ7BææW‡C°  —Ð  —&WGW&âÆ7C° §Ð ¢òòVÆ–Ö–æFR6öÆ–æV"÷"GWÆ–6FRö–çG0¦gVæ7F–öâf–ÇFW%ö–çG2‚7F'BÂVæB’°  ––b‚7F'B’&WGW&â7F'C° ––b‚VæB’VæBÒ7F'C°  –ÆWBÒ7F'BÀ –v–ã° –Fò°  –v–âÒfÇ6S°  ––b‚ç7FV–æW"bb‚WVÇ2‚ÂææW‡B’ÇÂ&V‚ç&WbÂÂææW‡B’ÓÓÒ’’°  —&VÖ÷fTæöFR‚“° —ÒVæBÒç&Wc° ––b‚ÓÓÒææW‡B’'&V³° –v–âÒG'VS°  —ÒVÇ6R°  —ÒææW‡C°  —Ð  —Òv†–ÆR‚v–âÇÂÓÒVæB“°  —&WGW&âVæC° §Ð ¢òòÖ–âV"6Æ–6–ærÆö÷v†–6‚G&–æwVÆFW2öÇ–vöâ†v—fVâ2Æ–æ¶VBÆ—7B¦gVæ7F–öâV&7WDÆ–æ¶VB‚V"ÂG&–ævÆW2ÂF–ÒÂÖ–å‚ÂÖ–å’Â–çe6—¦RÂ72’°  ––b‚V"’&WGW&ã°  ’òò–çFW&Æ–æ²öÇ–vöâæöFW2–â¢Ö÷&FW  ––b‚72bb–çe6—¦R’–æFW„7W'fR‚V"ÂÖ–å‚ÂÖ–å’Â–çe6—¦R“°  –ÆWB7F÷ÒV"À —&WbÂæW‡C°  ’òò—FW&FRF‡&÷Vv‚V'2Â6Æ–6–ærF†VÒöæR'’öæP —v†–ÆR‚V"ç&WbÓÒV"ææW‡B’°  —&WbÒV"ç&Wc° –æW‡BÒV"ææW‡C°  ––b‚–çe6—¦Rò—4V$†6†VB‚V"ÂÖ–å‚ÂÖ–å’Â–çe6—¦R’¢—4V"‚V"’’°  ’òò7WBöfbF†RG&–ævÆP —G&–ævÆW2çW6‚‚&Wbæ’òF–ÒÂ“° —G&–ævÆW2çW6‚‚V"æ’òF–ÒÂ“° —G&–ævÆW2çW6‚‚æW‡Bæ’òF–ÒÂ“°  —&VÖ÷fTæöFR‚V"“°  ’òò6¶—–ærF†RæW‡BfW'FW‚ÆVG2FòÆW726Æ—fW"G&–ævÆW0 –V"ÒæW‡BææW‡C° —7F÷ÒæW‡BææW‡C°  –6öçF–çVS°  —Ð  –V"ÒæW‡C°  ’òò–bvRÆö÷VBF‡&÷Vv‚F†Rv†öÆR&VÖ–æ–æröÇ–vöâæB6âwBf–æBç’Ö÷&RV'0 ––b‚V"ÓÓÒ7F÷’°  ’òòG'’f–ÇFW&–ærö–çG2æB6Æ–6–ærv–à ––b‚72’°  –V&7WDÆ–æ¶VB‚f–ÇFW%ö–çG2‚V"’ÂG&–ævÆW2ÂF–ÒÂÖ–å‚ÂÖ–å’Â–çe6—¦RÂ“°  ’òò–bF†—2F–FâwBv÷&²ÂG'’7W&–ærÆÂ6ÖÆÂ6VÆbÖ–çFW'6V7F–öç2Æö6ÆÇ  —ÒVÇ6R–b‚72ÓÓÒ’°  –V"Ò7W&TÆö6Ä–çFW'6V7F–öç2‚f–ÇFW%ö–çG2‚V"’ÂG&–ævÆW2ÂF–Ò“° –V&7WDÆ–æ¶VB‚V"ÂG&–ævÆW2ÂF–ÒÂÖ–å‚ÂÖ–å’Â–çe6—¦RÂ"“°  ’òò2Æ7B&W6÷'BÂG'’7Æ—GF–ærF†R&VÖ–æ–æröÇ–vöâ–çFòGvð  —ÒVÇ6R–b‚72ÓÓÒ"’°  —7Æ—DV&7WB‚V"ÂG&–ævÆW2ÂF–ÒÂÖ–å‚ÂÖ–å’Â–çe6—¦R“°  —Ð  –'&V³°  —Ð  —Ð §Ð ¢òò6†V6²v†WF†W"öÇ–vöâæöFRf÷&×2fÆ–BV"v—F‚F¦6VçBæöFW0¦gVæ7F–öâ—4V"‚V"’°  –6öç7BÒV"ç&WbÀ –"ÒV"À –2ÒV"ææW‡C°  ––b‚&V‚Â"Â2’ãÒ’&WGW&âfÇ6S²òò&VfÆW‚Â6âwB&RâV   ’òòæ÷rÖ¶R7W&RvRFöâwB†fR÷F†W"ö–çG2–ç6–FRF†R÷FVçF–ÂV  –6öç7B‚Òç‚Â'‚Ò"ç‚Â7‚Ò2ç‚Â’Òç’Â'’Ò"ç’Â7’Ò2ç“°  ’òòG&–ævÆR&&÷ƒ²Ö–âbÖ‚&R6Æ7VÆFVBÆ–¶RF†—2f÷"7VV@ –6öç7BƒÒ‚Â'‚ò‚‚Â7‚ò‚¢7‚’¢‚'‚Â7‚ò'‚¢7‚’À —“Ò’Â'’ò‚’Â7’ò’¢7’’¢‚'’Â7’ò'’¢7’’À —ƒÒ‚â'‚ò‚‚â7‚ò‚¢7‚’¢‚'‚â7‚ò'‚¢7‚’À —“Ò’â'’ò‚’â7’ò’¢7’’¢‚'’â7’ò'’¢7’“°  –ÆWBÒ2ææW‡C° —v†–ÆR‚ÓÒ’°  ––b‚ç‚ãÒƒbbç‚ÃÒƒbbç’ãÒ“bbç’ÃÒ“b` —ö–çD–åG&–ævÆR‚‚Â’Â'‚Â'’Â7‚Â7’Âç‚Âç’’b` –&V‚ç&WbÂÂææW‡B’ãÒ’&WGW&âfÇ6S° —ÒææW‡C°  —Ð  —&WGW&âG'VS° §Ð ¦gVæ7F–öâ—4V$†6†VB‚V"ÂÖ–å‚ÂÖ–å’Â–çe6—¦R’°  –6öç7BÒV"ç&WbÀ –"ÒV"À –2ÒV"ææW‡C°  ––b‚&V‚Â"Â2’ãÒ’&WGW&âfÇ6S²òò&VfÆW‚Â6âwB&RâV   –6öç7B‚Òç‚Â'‚Ò"ç‚Â7‚Ò2ç‚Â’Òç’Â'’Ò"ç’Â7’Ò2ç“°  ’òòG&–ævÆR&&÷ƒ²Ö–âbÖ‚&R6Æ7VÆFVBÆ–¶RF†—2f÷"7VV@ –6öç7BƒÒ‚Â'‚ò‚‚Â7‚ò‚¢7‚’¢‚'‚Â7‚ò'‚¢7‚’À —“Ò’Â'’ò‚’Â7’ò’¢7’’¢‚'’Â7’ò'’¢7’’À —ƒÒ‚â'‚ò‚‚â7‚ò‚¢7‚’¢‚'‚â7‚ò'‚¢7‚’À —“Ò’â'’ò‚’â7’ò’¢7’’¢‚'’â7’ò'’¢7’“°  ’òò¢Ö÷&FW"&ævRf÷"F†R7W'&VçBG&–ævÆR&&÷ƒ° –6öç7BÖ–å¢Ò¤÷&FW"‚ƒÂ“ÂÖ–å‚ÂÖ–å’Â–çe6—¦R’À –Ö…¢Ò¤÷&FW"‚ƒÂ“ÂÖ–å‚ÂÖ–å’Â–çe6—¦R“°  –ÆWBÒV"ç&We¢À –âÒV"ææW‡E£°  ’òòÆöö²f÷"ö–çG2–ç6–FRF†RG&–ævÆR–â&÷F‚F—&V7F–öç0 —v†–ÆR‚bbç¢ãÒÖ–å¢bbâbbâç¢ÃÒÖ…¢’°  ––b‚ç‚ãÒƒbbç‚ÃÒƒbbç’ãÒ“bbç’ÃÒ“bbÓÒbbÓÒ2b` —ö–çD–åG&–ævÆR‚‚Â’Â'‚Â'’Â7‚Â7’Âç‚Âç’’bb&V‚ç&WbÂÂææW‡B’ãÒ’&WGW&âfÇ6S° —Òç&We£°  ––b‚âç‚ãÒƒbbâç‚ÃÒƒbbâç’ãÒ“bbâç’ÃÒ“bbâÓÒbbâÓÒ2b` —ö–çD–åG&–ævÆR‚‚Â’Â'‚Â'’Â7‚Â7’Ââç‚Ââç’’bb&V‚âç&WbÂâÂâææW‡B’ãÒ’&WGW&âfÇ6S° –âÒâææW‡E£°  —Ð  ’òòÆöö²f÷"&VÖ–æ–ærö–çG2–âFV7&V6–ær¢Ö÷&FW  —v†–ÆR‚bbç¢ãÒÖ–å¢’°  ––b‚ç‚ãÒƒbbç‚ÃÒƒbbç’ãÒ“bbç’ÃÒ“bbÓÒbbÓÒ2b` —ö–çD–åG&–ævÆR‚‚Â’Â'‚Â'’Â7‚Â7’Âç‚Âç’’bb&V‚ç&WbÂÂææW‡B’ãÒ’&WGW&âfÇ6S° —Òç&We£°  —Ð  ’òòÆöö²f÷"&VÖ–æ–ærö–çG2–â–æ7&V6–ær¢Ö÷&FW  —v†–ÆR‚âbbâç¢ÃÒÖ…¢’°  ––b‚âç‚ãÒƒbbâç‚ÃÒƒbbâç’ãÒ“bbâç’ÃÒ“bbâÓÒbbâÓÒ2b` —ö–çD–åG&–ævÆR‚‚Â’Â'‚Â'’Â7‚Â7’Ââç‚Ââç’’bb&V‚âç&WbÂâÂâææW‡B’ãÒ’&WGW&âfÇ6S° –âÒâææW‡E£°  —Ð  —&WGW&âG'VS° §Ð ¢òòvòF‡&÷Vv‚ÆÂöÇ–vöâæöFW2æB7W&R6ÖÆÂÆö6Â6VÆbÖ–çFW'6V7F–öç0¦gVæ7F–öâ7W&TÆö6Ä–çFW'6V7F–öç2‚7F'BÂG&–ævÆW2ÂF–Ò’°  –ÆWBÒ7F'C° –Fò°  –6öç7BÒç&WbÀ –"ÒææW‡BææW‡C°  ––b‚WVÇ2‚Â"’bb–çFW'6V7G2‚ÂÂææW‡BÂ"’bbÆö6ÆÇ”–ç6–FR‚Â"’bbÆö6ÆÇ”–ç6–FR‚"Â’’°  —G&–ævÆW2çW6‚‚æ’òF–ÒÂ“° —G&–ævÆW2çW6‚‚æ’òF–ÒÂ“° —G&–ævÆW2çW6‚‚"æ’òF–ÒÂ“°  ’òò&VÖ÷fRGvòæöFW2–çföÇfV@ —&VÖ÷fTæöFR‚“° —&VÖ÷fTæöFR‚ææW‡B“°  —Ò7F'BÒ#°  —Ð  —ÒææW‡C°  —Òv†–ÆR‚ÓÒ7F'B“°  —&WGW&âf–ÇFW%ö–çG2‚“° §Ð ¢òòG'’7Æ—GF–æröÇ–vöâ–çFòGvòæBG&–æwVÆFRF†VÒ–æFWVæFVçFÇ¦gVæ7F–öâ7Æ—DV&7WB‚7F'BÂG&–ævÆW2ÂF–ÒÂÖ–å‚ÂÖ–å’Â–çe6—¦R’°  ’òòÆöö²f÷"fÆ–BF–vöæÂF†BF—f–FW2F†RöÇ–vöâ–çFòGvð –ÆWBÒ7F'C° –Fò°  –ÆWB"ÒææW‡BææW‡C° —v†–ÆR‚"ÓÒç&Wb’°  ––b‚æ’ÓÒ"æ’bb—5fÆ–DF–vöæÂ‚Â"’’°  ’òò7Æ—BF†RöÇ–vöâ–âGvò'’F†RF–vöæÀ –ÆWB2Ò7Æ—EöÇ–vöâ‚Â"“°  ’òòf–ÇFW"6öÆ–æV"ö–çG2&÷VæBF†R7WG0 –Òf–ÇFW%ö–çG2‚ÂææW‡B“° –2Òf–ÇFW%ö–çG2‚2Â2ææW‡B“°  ’òò'VâV&7WBöâV6‚†Æ` –V&7WDÆ–æ¶VB‚ÂG&–ævÆW2ÂF–ÒÂÖ–å‚ÂÖ–å’Â–çe6—¦RÂ“° –V&7WDÆ–æ¶VB‚2ÂG&–ævÆW2ÂF–ÒÂÖ–å‚ÂÖ–å’Â–çe6—¦RÂ“° —&WGW&ã°  —Ð  –"Ò"ææW‡C°  —Ð  –ÒææW‡C°  —Òv†–ÆR‚ÓÒ7F'B“° §Ð ¢òòÆ–æ²WfW'’†öÆR–çFòF†R÷WFW"Æö÷Â&öGV6–ær6–ævÆR×&–æröÇ–vöâv—F†÷WB†öÆW0¦gVæ7F–öâVÆ–Ö–æFT†öÆW2‚FFÂ†öÆT–æF–6W2Â÷WFW$æöFRÂF–Ò’°  –6öç7BVWVRÒµÓ° –ÆWB’ÂÆVâÂ7F'BÂVæBÂÆ—7C°  –f÷"‚’ÒÂÆVâÒ†öÆT–æF–6W2æÆVæwFƒ²’ÂÆVã²’²²’°  —7F'BÒ†öÆT–æF–6W5²’Ò¢F–Ó° –VæBÒ’ÂÆVâÒò†öÆT–æF–6W5²’²Ò¢F–Ò¢FFæÆVæwFƒ° –Æ—7BÒÆ–æ¶VDÆ—7B‚FFÂ7F'BÂVæBÂF–ÒÂfÇ6R“° ––b‚Æ—7BÓÓÒÆ—7BææW‡B’Æ—7Bç7FV–æW"ÒG'VS° —VWVRçW6‚‚vWDÆVgFÖ÷7B‚Æ—7B’“°  —Ð  —VWVRç6÷'B‚6ö×&U‚“°  ’òò&ö6W72†öÆW2g&öÒÆVgBFò&–v‡@ –f÷"‚’Ò²’ÂVWVRæÆVæwFƒ²’²²’°  –÷WFW$æöFRÒVÆ–Ö–æFT†öÆR‚VWVU²’ÒÂ÷WFW$æöFR“°  —Ð  —&WGW&â÷WFW$æöFS° §Ð ¦gVæ7F–öâ6ö×&U‚‚Â"’°  —&WGW&âç‚Ò"çƒ° §Ð ¢òòf–æB'&–FvR&WGvVVâfW'F–6W2F†B6öææV7G2†öÆRv—F‚â÷WFW"&–æræBÆ–æ²—@¦gVæ7F–öâVÆ–Ö–æFT†öÆR‚†öÆRÂ÷WFW$æöFR’°  –6öç7B'&–FvRÒf–æD†öÆT'&–FvR‚†öÆRÂ÷WFW$æöFR“° ––b‚'&–FvR’°  —&WGW&â÷WFW$æöFS°  —Ð  –6öç7B'&–FvU&WfW'6RÒ7Æ—EöÇ–vöâ‚'&–FvRÂ†öÆR“°  ’òòf–ÇFW"6öÆÆ–æV"ö–çG2&÷VæBF†R7WG0 –f–ÇFW%ö–çG2‚'&–FvU&WfW'6RÂ'&–FvU&WfW'6RææW‡B“° —&WGW&âf–ÇFW%ö–çG2‚'&–FvRÂ'&–FvRææW‡B“° §Ð ¢òòFf–BV&W&Ç’w2Æv÷&—F†Òf÷"f–æF–ær'&–FvR&WGvVVâ†öÆRæB÷WFW"öÇ–vöà¦gVæ7F–öâf–æD†öÆT'&–FvR‚†öÆRÂ÷WFW$æöFR’°  –ÆWBÒ÷WFW$æöFRÀ —‚ÒÒ–æf–æ—G’À –Ó°  –6öç7B‡‚Ò†öÆRç‚Â‡’Ò†öÆRç“°  ’òòf–æB6VvÖVçB–çFW'6V7FVB'’&’g&öÒF†R†öÆRw2ÆVgFÖ÷7Bö–çBFòF†RÆVgC° ’òò6VvÖVçBw2VæGö–çBv—F‚ÆW76W"‚v–ÆÂ&R÷FVçF–Â6öææV7F–öâö–ç@ –Fò°  ––b‚‡’ÃÒç’bb‡’ãÒææW‡Bç’bbææW‡Bç’ÓÒç’’°  –6öç7B‚Òç‚²‚‡’Òç’’¢‚ææW‡Bç‚Òç‚’ò‚ææW‡Bç’Òç’“° ––b‚‚ÃÒ‡‚bb‚â‚’°  —‚Òƒ° –ÒÒç‚ÂææW‡Bç‚ò¢ææW‡C° ––b‚‚ÓÓÒ‡‚’&WGW&âÓ²òò†öÆRF÷V6†W2÷WFW"6VvÖVçC²–6²ÆVgFÖ÷7BVæGö–ç@  —Ð  —Ð  —ÒææW‡C°  —Òv†–ÆR‚ÓÒ÷WFW$æöFR“°  ––b‚Ò’&WGW&âçVÆÃ°  ’òòÆöö²f÷"ö–çG2–ç6–FRF†RG&–ævÆRöb†öÆRö–çBÂ6VvÖVçB–çFW'6V7F–öâæBVæGö–çC° ’òò–bF†W&R&Ræòö–çG2f÷VæBÂvR†fRfÆ–B6öææV7F–öã° ’òò÷F†W'v—6R6†ö÷6RF†Rö–çBöbF†RÖ–æ–×VÒævÆRv—F‚F†R&’26öææV7F–öâö–ç@  –6öç7B7F÷ÒÒÀ –×‚ÒÒç‚À –×’ÒÒç“° –ÆWBFäÖ–âÒ–æf–æ—G’ÂFã°  —ÒÓ°  –Fò°  ––b‚‡‚ãÒç‚bbç‚ãÒ×‚bb‡‚ÓÒç‚b` —ö–çD–åG&–ævÆR‚‡’Â×’ò‡‚¢‚Â‡’Â×‚Â×’Â‡’Â×’ò‚¢‡‚Â‡’Âç‚Âç’’’°  —FâÒÖF‚æ'2‚‡’Òç’’ò‚‡‚Òç‚“²òòFævVçF–À  ––b‚Æö6ÆÇ”–ç6–FR‚Â†öÆR’bb‚FâÂFäÖ–âÇÂ‚FâÓÓÒFäÖ–âbb‚ç‚âÒç‚ÇÂ‚ç‚ÓÓÒÒç‚bb6V7F÷$6öçF–ç56V7F÷"‚ÒÂ’’’’’’°  –ÒÒ° —FäÖ–âÒFã°  —Ð  —Ð  —ÒææW‡C°  —Òv†–ÆR‚ÓÒ7F÷“°  —&WGW&âÓ° §Ð ¢òòv†WF†W"6V7F÷"–âfW'FW‚Ò6öçF–ç26V7F÷"–âfW'FW‚–âF†R6ÖR6ö÷&F–æFW0¦gVæ7F–öâ6V7F÷$6öçF–ç56V7F÷"‚ÒÂ’°  —&WGW&â&V‚Òç&WbÂÒÂç&Wb’Âbb&V‚ææW‡BÂÒÂÒææW‡B’Â° §Ð ¢òò–çFW&Æ–æ²öÇ–vöâæöFW2–â¢Ö÷&FW ¦gVæ7F–öâ–æFW„7W'fR‚7F'BÂÖ–å‚ÂÖ–å’Â–çe6—¦R’°  –ÆWBÒ7F'C° –Fò°  ––b‚ç¢ÓÓÒ’ç¢Ò¤÷&FW"‚ç‚Âç’ÂÖ–å‚ÂÖ–å’Â–çe6—¦R“° —ç&We¢Òç&Wc° —ææW‡E¢ÒææW‡C° —ÒææW‡C°  —Òv†–ÆR‚ÓÒ7F'B“°  —ç&We¢ææW‡E¢ÒçVÆÃ° —ç&We¢ÒçVÆÃ°  —6÷'DÆ–æ¶VB‚“° §Ð ¢òò6–ÖöâFF†Òw2Æ–æ¶VBÆ—7BÖW&vR6÷'BÆv÷&—F†Ð¢òò‡GG¢ò÷wwræ6†–&²æw&VVæVæBæ÷&rçV²÷ç6wFF†ÒöÆv÷&—F†×2öÆ—7G6÷'Bæ‡FÖÀ¦gVæ7F–öâ6÷'DÆ–æ¶VB‚Æ—7B’°  –ÆWB’ÂÂÂRÂF–ÂÂçVÔÖW&vW2Â6—¦RÂ6—¦RÀ ––å6—¦RÒ°  –Fò°  —ÒÆ—7C° –Æ—7BÒçVÆÃ° —F–ÂÒçVÆÃ° –çVÔÖW&vW2Ò°  —v†–ÆR‚’°  –çVÔÖW&vW2²³° —Ò° —6—¦RÒ° –f÷"‚’Ò²’Â–å6—¦S²’²²’°  —6—¦R²³° —ÒææW‡E£° ––b‚’'&V³°  —Ð  —6—¦RÒ–å6—¦S°  —v†–ÆR‚6—¦RâÇÂ‚6—¦Râbb’’°  ––b‚6—¦RÓÒbb‚6—¦RÓÓÒÇÂÇÂç¢ÃÒç¢’’°  –RÒ° —ÒææW‡E£° —6—¦RÒÓ°  —ÒVÇ6R°  –RÒ° —ÒææW‡E£° —6—¦RÒÓ°  —Ð  ––b‚F–Â’F–ÂææW‡E¢ÒS° –VÇ6RÆ—7BÒS°  –Rç&We¢ÒF–Ã° —F–ÂÒS°  —Ð  —Ò°  —Ð  —F–ÂææW‡E¢ÒçVÆÃ° ––å6—¦R£Ò#°  —Òv†–ÆR‚çVÔÖW&vW2â“°  —&WGW&âÆ—7C° §Ð ¢òò¢Ö÷&FW"öbö–çBv—fVâ6ö÷&G2æB–çfW'6RöbF†RÆöævW"6–FRöbFF&&÷€¦gVæ7F–öâ¤÷&FW"‚‚Â’ÂÖ–å‚ÂÖ–å’Â–çe6—¦R’°  ’òò6ö÷&G2&RG&ç6f÷&ÖVB–çFòæöâÖæVvF—fRRÖ&—B–çFVvW"&ævP —‚Ò‚‚ÒÖ–å‚’¢–çe6—¦RÂ° —’Ò‚’ÒÖ–å’’¢–çe6—¦RÂ°  —‚Ò‚‚Â‚‚ÃÂ‚’’bƒdcdc° —‚Ò‚‚Â‚‚ÃÂB’’bƒcccc° —‚Ò‚‚Â‚‚ÃÂ"’’bƒ33333333° —‚Ò‚‚Â‚‚ÃÂ’’bƒSSSSSSSS°  —’Ò‚’Â‚’ÃÂ‚’’bƒdcdc° —’Ò‚’Â‚’ÃÂB’’bƒcccc° —’Ò‚’Â‚’ÃÂ"’’bƒ33333333° —’Ò‚’Â‚’ÃÂ’’bƒSSSSSSSS°  —&WGW&â‚Â‚’ÃÂ“° §Ð ¢òòf–æBF†RÆVgFÖ÷7BæöFRöböÇ–vöâ&–æp¦gVæ7F–öâvWDÆVgFÖ÷7B‚7F'B’°  –ÆWBÒ7F'BÀ –ÆVgFÖ÷7BÒ7F'C° –Fò°  ––b‚ç‚ÂÆVgFÖ÷7Bç‚ÇÂ‚ç‚ÓÓÒÆVgFÖ÷7Bç‚bbç’ÂÆVgFÖ÷7Bç’’’ÆVgFÖ÷7BÒ° —ÒææW‡C°  —Òv†–ÆR‚ÓÒ7F'B“°  —&WGW&âÆVgFÖ÷7C° §Ð ¢òò6†V6²–bö–çBÆ–W2v—F†–â6öçfW‚G&–ævÆP¦gVæ7F–öâö–çD–åG&–ævÆR‚‚Â’Â'‚Â'’Â7‚Â7’Â‚Â’’°  —&WGW&â‚7‚Ò‚’¢‚’Ò’’ãÒ‚‚Ò‚’¢‚7’Ò’’b`¢‚‚Ò‚’¢‚'’Ò’’ãÒ‚'‚Ò‚’¢‚’Ò’’b`¢‚'‚Ò‚’¢‚7’Ò’’ãÒ‚7‚Ò‚’¢‚'’Ò’“° §Ð ¢òò6†V6²–bF–vöæÂ&WGvVVâGvòöÇ–vöâæöFW2—2fÆ–B†Æ–W2–âöÇ–vöâ–çFW&–÷"¦gVæ7F–öâ—5fÆ–DF–vöæÂ‚Â"’°  —&WGW&âææW‡Bæ’ÓÒ"æ’bbç&Wbæ’ÓÒ"æ’bb–çFW'6V7G5öÇ–vöâ‚Â"’bbòòFöæW2wB–çFW'6V7B÷F†W"VFvW0¢‚Æö6ÆÇ”–ç6–FR‚Â"’bbÆö6ÆÇ”–ç6–FR‚"Â’bbÖ–FFÆT–ç6–FR‚Â"’bbòòÆö6ÆÇ’f—6–&ÆP¢‚&V‚ç&WbÂÂ"ç&Wb’ÇÂ&V‚Â"ç&WbÂ"’’ÇÂòòFöW2æ÷B7&VFR÷÷6—FRÖf6–ær6V7F÷'0¢WVÇ2‚Â"’bb&V‚ç&WbÂÂææW‡B’âbb&V‚"ç&WbÂ"Â"ææW‡B’â“²òò7V6–Â¦W&òÖÆVæwF‚66P §Ð ¢òò6–væVB&VöbG&–ævÆP¦gVæ7F–öâ&V‚ÂÂ"’°  —&WGW&â‚ç’Òç’’¢‚"ç‚Òç‚’Ò‚ç‚Òç‚’¢‚"ç’Òç’“° §Ð ¢òò6†V6²–bGvòö–çG2&RWVÀ¦gVæ7F–öâWVÇ2‚Â"’°  —&WGW&âç‚ÓÓÒ"ç‚bbç’ÓÓÒ"ç“° §Ð ¢òò6†V6²–bGvò6VvÖVçG2–çFW'6V7@¦gVæ7F–öâ–çFW'6V7G2‚ÂÂ"Â"’°  –6öç7BóÒ6–vâ‚&V‚ÂÂ"’“° –6öç7Bó"Ò6–vâ‚&V‚ÂÂ"’“° –6öç7Bó2Ò6–vâ‚&V‚"Â"Â’“° –6öç7BóBÒ6–vâ‚&V‚"Â"Â’“°  ––b‚óÓÒó"bbó2ÓÒóB’&WGW&âG'VS²òòvVæW&Â66P  ––b‚óÓÓÒbböå6VvÖVçB‚Â"Â’’&WGW&âG'VS²òòÂæB"&R6öÆÆ–æV"æB"Æ–W2öâ ––b‚ó"ÓÓÒbböå6VvÖVçB‚Â"Â’’&WGW&âG'VS²òòÂæB"&R6öÆÆ–æV"æB"Æ–W2öâ ––b‚ó2ÓÓÒbböå6VvÖVçB‚"ÂÂ"’’&WGW&âG'VS²òò"Â"æB&R6öÆÆ–æV"æBÆ–W2öâ'  ––b‚óBÓÓÒbböå6VvÖVçB‚"ÂÂ"’’&WGW&âG'VS²òò"Â"æB&R6öÆÆ–æV"æBÆ–W2öâ'   —&WGW&âfÇ6S° §Ð ¢òòf÷"6öÆÆ–æV"ö–çG2ÂÂ"Â6†V6²–bö–çBÆ–W2öâ6VvÖVçB ¦gVæ7F–öâöå6VvÖVçB‚ÂÂ"’°  —&WGW&âç‚ÃÒÖF‚æÖ‚‚ç‚Â"ç‚’bbç‚ãÒÖF‚æÖ–â‚ç‚Â"ç‚’bbç’ÃÒÖF‚æÖ‚‚ç’Â"ç’’bbç’ãÒÖF‚æÖ–â‚ç’Â"ç’“° §Ð ¦gVæ7F–öâ6–vâ‚çVÒ’°  —&WGW&âçVÒâò¢çVÒÂòÒ¢° §Ð ¢òò6†V6²–böÇ–vöâF–vöæÂ–çFW'6V7G2ç’öÇ–vöâ6VvÖVçG0¦gVæ7F–öâ–çFW'6V7G5öÇ–vöâ‚Â"’°  –ÆWBÒ° –Fò°  ––b‚æ’ÓÒæ’bbææW‡Bæ’ÓÒæ’bbæ’ÓÒ"æ’bbææW‡Bæ’ÓÒ"æ’b` ––çFW'6V7G2‚ÂææW‡BÂÂ"’’&WGW&âG'VS° —ÒææW‡C°  —Òv†–ÆR‚ÓÒ“°  —&WGW&âfÇ6S° §Ð ¢òò6†V6²–böÇ–vöâF–vöæÂ—2Æö6ÆÇ’–ç6–FRF†RöÇ–vöà¦gVæ7F–öâÆö6ÆÇ”–ç6–FR‚Â"’°  —&WGW&â&V‚ç&WbÂÂææW‡B’Âð –&V‚Â"ÂææW‡B’ãÒbb&V‚Âç&WbÂ"’ãÒ  –&V‚Â"Âç&Wb’ÂÇÂ&V‚ÂææW‡BÂ"’Â° §Ð ¢òò6†V6²–bF†RÖ–FFÆRö–çBöböÇ–vöâF–vöæÂ—2–ç6–FRF†RöÇ–vöà¦gVæ7F–öâÖ–FFÆT–ç6–FR‚Â"’°  –ÆWBÒÀ ––ç6–FRÒfÇ6S° –6öç7B‚Ò‚ç‚²"ç‚’ò"À —’Ò‚ç’²"ç’’ò#° –Fò°  ––b‚‚‚ç’â’’ÓÒ‚ææW‡Bç’â’’’bbææW‡Bç’ÓÒç’b` ’‚‚Â‚ææW‡Bç‚Òç‚’¢‚’Òç’’ò‚ææW‡Bç’Òç’’²ç‚’ ––ç6–FRÒ–ç6–FS° —ÒææW‡C°  —Òv†–ÆR‚ÓÒ“°  —&WGW&â–ç6–FS° §Ð ¢òòÆ–æ²GvòöÇ–vöâfW'F–6W2v—F‚'&–FvS²–bF†RfW'F–6W2&VÆöærFòF†R6ÖR&–ærÂ—B7Æ—G2öÇ–vöâ–çFòGvó°¢òò–böæR&VÆöæw2FòF†R÷WFW"&–æræBæ÷F†W"Fò†öÆRÂ—BÖW&vW2—B–çFò6–ævÆR&–æp¦gVæ7F–öâ7Æ—EöÇ–vöâ‚Â"’°  –6öç7B"ÒæWræöFR‚æ’Âç‚Âç’’À –#"ÒæWræöFR‚"æ’Â"ç‚Â"ç’’À –âÒææW‡BÀ –'Ò"ç&Wc°  –ææW‡BÒ#° –"ç&WbÒ°  –"ææW‡BÒã° –âç&WbÒ#°  –#"ææW‡BÒ#° –"ç&WbÒ##°  –'ææW‡BÒ##° –#"ç&WbÒ'°  —&WGW&â##° §Ð ¢òò7&VFRæöFRæB÷F–öæÆÇ’Æ–æ²—Bv—F‚&Wf–÷W2öæR†–â6—&7VÆ"F÷V&Ç’Æ–æ¶VBÆ—7B¦gVæ7F–öâ–ç6W'DæöFR‚’Â‚Â’ÂÆ7B’°  –6öç7BÒæWræöFR‚’Â‚Â’“°  ––b‚Æ7B’°  —ç&WbÒ° —ææW‡BÒ°  —ÒVÇ6R°  —ææW‡BÒÆ7BææW‡C° —ç&WbÒÆ7C° –Æ7BææW‡Bç&WbÒ° –Æ7BææW‡BÒ°  —Ð  —&WGW&â° §Ð ¦gVæ7F–öâ&VÖ÷fTæöFR‚’°  —ææW‡Bç&WbÒç&Wc° —ç&WbææW‡BÒææW‡C°  ––b‚ç&We¢’ç&We¢ææW‡E¢ÒææW‡E£° ––b‚ææW‡E¢’ææW‡E¢ç&We¢Òç&We£° §Ð ¦gVæ7F–öâæöFR‚’Â‚Â’’°  ’òòfW'FW‚–æFW‚–â6ö÷&F–æFW2'& —F†—2æ’Ò“°  ’òòfW'FW‚6ö÷&F–æFW0 —F†—2ç‚Òƒ° —F†—2ç’Ò“°  ’òò&Wf–÷W2æBæW‡BfW'FW‚æöFW2–âöÇ–vöâ&–æp —F†—2ç&WbÒçVÆÃ° —F†—2ææW‡BÒçVÆÃ°  ’òò¢Ö÷&FW"7W'fRfÇVP —F†—2ç¢Ò°  ’òò&Wf–÷W2æBæW‡BæöFW2–â¢Ö÷&FW  —F†—2ç&We¢ÒçVÆÃ° —F†—2ææW‡E¢ÒçVÆÃ°  ’òò–æF–6FW2v†WF†W"F†—2—27FV–æW"ö–ç@ —F†—2ç7FV–æW"ÒfÇ6S° §Ð ¦gVæ7F–öâ6–væVD&V‚FFÂ7F'BÂVæBÂF–Ò’°  –ÆWB7VÒÒ° –f÷"‚ÆWB’Ò7F'BÂ¢ÒVæBÒF–Ó²’ÂVæC²’³ÒF–Ò’°  —7VÒ³Ò‚FF²¢ÒÒFF²’Ò’¢‚FF²’²Ò²FF²¢²Ò“° –¢Ò“°  —Ð  —&WGW&â7VÓ° §Ð ¦6Æ726†UWF–Ç2°  ’òò6Æ7VÆFR&VöbF†R6öçF÷W"öÇ–vöà  —7FF–2&V‚6öçF÷W"’°  –6öç7BâÒ6öçF÷W"æÆVæwFƒ° –ÆWBÒã°  –f÷"‚ÆWBÒâÒÂÒ²Âã²Ò²²’°  –³Ò6öçF÷W%²Òç‚¢6öçF÷W%²Òç’Ò6öçF÷W%²Òç‚¢6öçF÷W%²Òç“°  —Ð  —&WGW&â¢ãS°  —Ð  —7FF–2—46Æö6µv—6R‚G2’°  —&WGW&â6†UWF–Ç2æ&V‚G2’Â°  —Ð  —7FF–2G&–æwVÆFU6†R‚6öçF÷W"Â†öÆW2’°  –6öç7BfW'F–6W2ÒµÓ²òòfÆB'&’öbfW'F–6W2Æ–¶R²ƒÇ“ÂƒÇ“Âƒ"Ç“"ÂâââÐ –6öç7B†öÆT–æF–6W2ÒµÓ²òò'&’öb†öÆR–æF–6W0 –6öç7Bf6W2ÒµÓ²òòf–æÂ'&’öbfW'FW‚–æF–6W2Æ–¶R²²Æ"ÆBÒÂ²"Æ2ÆBÒÐ  —&VÖ÷fTGWVæEG2‚6öçF÷W"“° –FD6öçF÷W"‚fW'F–6W2Â6öçF÷W"“°  ’òð  –ÆWB†öÆT–æFW‚Ò6öçF÷W"æÆVæwFƒ°  –†öÆW2æf÷$V6‚‚&VÖ÷fTGWVæEG2“°  –f÷"‚ÆWB’Ò²’Â†öÆW2æÆVæwFƒ²’²²’°  –†öÆT–æF–6W2çW6‚‚†öÆT–æFW‚“° –†öÆT–æFW‚³Ò†öÆW5²’ÒæÆVæwFƒ° –FD6öçF÷W"‚fW'F–6W2Â†öÆW5²’Ò“°  —Ð  ’òð  –6öç7BG&–ævÆW2ÒV&7WBçG&–æwVÆFR‚fW'F–6W2Â†öÆT–æF–6W2“°  ’òð  –f÷"‚ÆWB’Ò²’ÂG&–ævÆW2æÆVæwFƒ²’³Ò2’°  –f6W2çW6‚‚G&–ævÆW2ç6Æ–6R‚’Â’²2’“°  —Ð  —&WGW&âf6W3°  —Ð §Ð ¦gVæ7F–öâ&VÖ÷fTGWVæEG2‚ö–çG2’°  –6öç7BÂÒö–çG2æÆVæwFƒ°  ––b‚Ââ"bbö–çG5²ÂÒÒæWVÇ2‚ö–çG5²Ò’’°  —ö–çG2ç÷‚“°  —Ð §Ð ¦gVæ7F–öâFD6öçF÷W"‚fW'F–6W2Â6öçF÷W"’°  –f÷"‚ÆWB’Ò²’Â6öçF÷W"æÆVæwFƒ²’²²’°  —fW'F–6W2çW6‚‚6öçF÷W%²’Òç‚“° —fW'F–6W2çW6‚‚6öçF÷W%²’Òç’“°  —Ð §Ð ¢ò¢ ¢¢7&VFW2W‡G'VFVBvVöÖWG'’g&öÒF‚6†Rà¢ ¢¢&ÖWFW'2Ò°¢ ¢¢7W'fU6VvÖVçG3¢Æ–çCâÂòòçVÖ&W"öbö–çG2öâF†R7W'fW0¢¢7FW3¢Æ–çCâÂòòçVÖ&W"öbö–çG2f÷"¢×6–FRW‡G'W6–öç2òW6VBf÷"7V&F—f–F–ær6VvÖVçG2öbW‡G'VFR7Æ–æRFöð¢¢FWFƒ¢ÆfÆöCâÂòòFWF‚FòW‡G'VFRF†R6†P¢ ¢¢&WfVÄVæ&ÆVC¢Æ&ööÃâÂòòGW&âöâ&WfVÀ¢¢&WfVÅF†–6¶æW73¢ÆfÆöCâÂòò†÷rFVW–çFòF†R÷&–v–æÂ6†R&WfVÂvöW0¢¢&WfVÅ6—¦S¢ÆfÆöCâÂòò†÷rf"g&öÒ6†R÷WFÆ–æR†–æ6ÇVF–ær&WfVÄöfg6WB’—2&WfVÀ¢¢&WfVÄöfg6WC¢ÆfÆöCâÂòò†÷rf"g&öÒ6†R÷WFÆ–æRFöW2&WfVÂ7F'@¢¢&WfVÅ6VvÖVçG3¢Æ–çCâÂòòçVÖ&W"öb&WfVÂÆ–W'0¢ ¢¢W‡G'VFUFƒ¢ÅD…$TRä7W'fSâòò7W'fRFòW‡G'VFR6†RÆöæp¢ ¢¢UdvVæW&F÷#¢Äö&¦V7Câòòö&¦V7BF†B&÷f–FW2UbvVæW&F÷"gVæ7F–öç0¢ ¢¢Ð¢¢ð  ¦6Æ72W‡G'VFTvVöÖWG'’W‡FVæG2'VffW$vVöÖWG'’°  –6öç7G'V7F÷"‚6†W2ÒæWr6†R‚²æWrfV7F÷#"‚ãRÂãR’ÂæWrfV7F÷#"‚ÒãRÂãR’ÂæWrfV7F÷#"‚ÒãRÂÒãR’ÂæWrfV7F÷#"‚ãRÂÒãR’Ò’Â÷F–öç2Ò·Ò’°  —7WW"‚“°  —F†—2çG—RÒtW‡G'VFTvVöÖWG'’s°  —F†—2ç&ÖWFW'2Ò° —6†W3¢6†W2À –÷F–öç3¢÷F–öç0 —Ó°  —6†W2Ò'&’æ—4'&’‚6†W2’ò6†W2¢²6†W2Ó°  –6öç7B66÷RÒF†—3°  –6öç7BfW'F–6W4'&’ÒµÓ° –6öç7BWd'&’ÒµÓ°  –f÷"‚ÆWB’ÒÂÂÒ6†W2æÆVæwFƒ²’ÂÃ²’²²’°  –6öç7B6†RÒ6†W5²’Ó° –FE6†R‚6†R“°  —Ð  ’òò'V–ÆBvVöÖWG'  —F†—2ç6WDGG&–'WFR‚w÷6—F–öârÂæWrfÆöC3$'VffW$GG&–'WFR‚fW'F–6W4'&’Â2’“° —F†—2ç6WDGG&–'WFR‚wWbrÂæWrfÆöC3$'VffW$GG&–'WFR‚Wd'&’Â"’“°  —F†—2æ6ö×WFUfW'FW„æ÷&ÖÇ2‚“°  ’òògVæ7F–öç0  –gVæ7F–öâFE6†R‚6†R’°  –6öç7BÆ6V†öÆFW"ÒµÓ°  ’òò÷F–öç0  –6öç7B7W'fU6VvÖVçG2Ò÷F–öç2æ7W'fU6VvÖVçG2ÓÒVæFVf–æVBò÷F–öç2æ7W'fU6VvÖVçG2¢#° –6öç7B7FW2Ò÷F–öç2ç7FW2ÓÒVæFVf–æVBò÷F–öç2ç7FW2¢° –6öç7BFWF‚Ò÷F–öç2æFWF‚ÓÒVæFVf–æVBò÷F–öç2æFWF‚¢°  –ÆWB&WfVÄVæ&ÆVBÒ÷F–öç2æ&WfVÄVæ&ÆVBÓÒVæFVf–æVBò÷F–öç2æ&WfVÄVæ&ÆVB¢G'VS° –ÆWB&WfVÅF†–6¶æW72Ò÷F–öç2æ&WfVÅF†–6¶æW72ÓÒVæFVf–æVBò÷F–öç2æ&WfVÅF†–6¶æW72¢ã#° –ÆWB&WfVÅ6—¦RÒ÷F–öç2æ&WfVÅ6—¦RÓÒVæFVf–æVBò÷F–öç2æ&WfVÅ6—¦R¢&WfVÅF†–6¶æW72Òã° –ÆWB&WfVÄöfg6WBÒ÷F–öç2æ&WfVÄöfg6WBÓÒVæFVf–æVBò÷F–öç2æ&WfVÄöfg6WB¢° –ÆWB&WfVÅ6VvÖVçG2Ò÷F–öç2æ&WfVÅ6VvÖVçG2ÓÒVæFVf–æVBò÷F–öç2æ&WfVÅ6VvÖVçG2¢3°  –6öç7BW‡G'VFUF‚Ò÷F–öç2æW‡G'VFUFƒ°  –6öç7BWfvVâÒ÷F–öç2åUdvVæW&F÷"ÓÒVæFVf–æVBò÷F–öç2åUdvVæW&F÷"¢v÷&ÆEUdvVæW&F÷#°  ’òð  –ÆWBW‡G'VFUG2ÂW‡G'VFT'•F‚ÒfÇ6S° –ÆWB7Æ–æUGV&RÂ&–æ÷&ÖÂÂæ÷&ÖÂÂ÷6—F–öã#°  ––b‚W‡G'VFUF‚’°  –W‡G'VFUG2ÒW‡G'VFUF‚ævWE76VEö–çG2‚7FW2“°  –W‡G'VFT'•F‚ÒG'VS° –&WfVÄVæ&ÆVBÒfÇ6S²òò&WfVÇ2æ÷B7W÷'FVBf÷"F‚W‡G'W6–öà  ’òò4UEUDä"f&–&ÆW0  ’òòDôDóÒ†fRæ—46Æ÷6VB–â7Æ–æSð  —7Æ–æUGV&RÒW‡G'VFUF‚æ6ö×WFTg&VæWDg&ÖW2‚7FW2ÂfÇ6R“°  ’òò6öç6öÆRæÆör‡7Æ–æUGV&RÂw7Æ–æUGV&RrÂ7Æ–æUGV&Rææ÷&ÖÇ2æÆVæwF‚Âw7FW2rÂ7FW2ÂvW‡G'VFUG2rÂW‡G'VFUG2æÆVæwF‚“°  –&–æ÷&ÖÂÒæWrfV7F÷#2‚“° –æ÷&ÖÂÒæWrfV7F÷#2‚“° —÷6—F–öã"ÒæWrfV7F÷#2‚“°  —Ð  ’òò6fVwV&G2–b&WfVÇ2&Ræ÷BVæ&ÆV@  ––b‚&WfVÄVæ&ÆVB’°  –&WfVÅ6VvÖVçG2Ò° –&WfVÅF†–6¶æW72Ò° –&WfVÅ6—¦RÒ° –&WfVÄöfg6WBÒ°  —Ð  ’òòf&–&ÆW2–æ—F–Æ—¦F–öà  –6öç7B6†Uö–çG2Ò6†RæW‡G&7Eö–çG2‚7W'fU6VvÖVçG2“°  –ÆWBfW'F–6W2Ò6†Uö–çG2ç6†S° –6öç7B†öÆW2Ò6†Uö–çG2æ†öÆW3°  –6öç7B&WfW'6RÒ6†UWF–Ç2æ—46Æö6µv—6R‚fW'F–6W2“°  ––b‚&WfW'6R’°  —fW'F–6W2ÒfW'F–6W2ç&WfW'6R‚“°  ’òòÖ–&RvR6†÷VÆBÇ6ò6†V6²–b†öÆW2&R–âF†R÷÷6—FRF—&V7F–öâÂ§W7BFò&R6fRââà  –f÷"‚ÆWB‚ÒÂ†ÂÒ†öÆW2æÆVæwFƒ²‚Â†Ã²‚²²’°  –6öç7B†öÆRÒ†öÆW5²‚Ó°  ––b‚6†UWF–Ç2æ—46Æö6µv—6R‚†öÆR’’°  –†öÆW5²‚ÒÒ†öÆRç&WfW'6R‚“°  —Ð  —Ð  —Ð   –6öç7Bf6W2Ò6†UWF–Ç2çG&–æwVÆFU6†R‚fW'F–6W2Â†öÆW2“°  ’ò¢fW'F–6W2¢ð  –6öç7B6öçF÷W"ÒfW'F–6W3²òòfW'F–6W2†2ÆÂö–çG2'WB6öçF÷W"†2öæÇ’ö–çG2öb6—&7VÖfW&Væ6P  –f÷"‚ÆWB‚ÒÂ†ÂÒ†öÆW2æÆVæwFƒ²‚Â†Ã²‚²²’°  –6öç7B†öÆRÒ†öÆW5²‚Ó°  —fW'F–6W2ÒfW'F–6W2æ6öæ6B‚†öÆR“°  —Ð   –gVæ7F–öâ66ÆUC"‚BÂfV2Â6—¦R’°  ––b‚fV2’6öç6öÆRæW'&÷"‚uD…$TRäW‡G'VFTvVöÖWG'“¢fV2FöW2æ÷BW†—7Br“°  —&WGW&âBæ6ÆöæR‚’æFE66ÆVEfV7F÷"‚fV2Â6—¦R“°  —Ð  –6öç7BfÆVâÒfW'F–6W2æÆVæwF‚ÂfÆVâÒf6W2æÆVæwFƒ°   ’òòf–æBF—&V7F–öç2f÷"ö–çBÖ÷fVÖVç@   –gVæ7F–öâvWD&WfVÅfV2‚–åBÂ–å&WbÂ–äæW‡B’°  ’òò6ö×WFW2f÷"–åBF†R6÷'&W7öæF–ærö–çB–åBröâæWr6öçF÷W  ’òò6†–gFVB'’Væ—B†ÆVæwF‚öbæ÷&ÖÆ—¦VBfV7F÷"’FòF†RÆVg@ ’òò–bvRvÆ²Æöær6öçF÷W"6Æö6·v—6RÂF†—2æWr6öçF÷W"—2÷WG6–FRF†RöÆBöæP ’òð ’òò–åBr—2F†R–çFW'6V7F–öâöbF†RGvòÆ–æW2&ÆÆVÂFòF†RGvð ’òòF¦6VçBVFvW2öb–åBBF—7Fæ6RöbVæ—BöâF†RÆVgB6–FRà  –ÆWBe÷G&ç5÷‚Âe÷G&ç5÷’Â6‡&–æµö'“²òò&W7VÇF–ærG&ç6ÆF–öâfV7F÷"f÷"–å@  ’òòvööB&VF–ærf÷"vVöÖWG'’Æv÷&—F†×2††W&S¢Æ–æRÖÆ–æR–çFW'6V7F–öâ ’òò‡GG¢òövVöÖÆv÷&—F†×2æ6öÒöRÕö–çFW'6V7BÓæ‡FÖÀ  –6öç7Be÷&We÷‚Ò–åBç‚Ò–å&Wbç‚À —e÷&We÷’Ò–åBç’Ò–å&Wbç“° –6öç7BeöæW‡E÷‚Ò–äæW‡Bç‚Ò–åBç‚À —eöæW‡E÷’Ò–äæW‡Bç’Ò–åBç“°  –6öç7Be÷&WeöÆVç7Ò‚e÷&We÷‚¢e÷&We÷‚²e÷&We÷’¢e÷&We÷’“°  ’òò6†V6²f÷"6öÆÆ–æV"VFvW0 –6öç7B6öÆÆ–æV#Ò‚e÷&We÷‚¢eöæW‡E÷’Òe÷&We÷’¢eöæW‡E÷‚“°  ––b‚ÖF‚æ'2‚6öÆÆ–æV#’âçVÖ&W"äU4”Äôâ’°  ’òòæ÷B6öÆÆ–æV   ’òòÆVæwF‚öbfV7F÷'2f÷"æ÷&ÖÆ—¦–æp  –6öç7Be÷&WeöÆVâÒÖF‚ç7'B‚e÷&WeöÆVç7“° –6öç7BeöæW‡EöÆVâÒÖF‚ç7'B‚eöæW‡E÷‚¢eöæW‡E÷‚²eöæW‡E÷’¢eöæW‡E÷’“°  ’òò6†–gBF¦6VçBö–çG2'’Væ—BfV7F÷'2FòF†RÆVg@  –6öç7BE&We6†–gE÷‚Ò‚–å&Wbç‚Òe÷&We÷’òe÷&WeöÆVâ“° –6öç7BE&We6†–gE÷’Ò‚–å&Wbç’²e÷&We÷‚òe÷&WeöÆVâ“°  –6öç7BDæW‡E6†–gE÷‚Ò‚–äæW‡Bç‚ÒeöæW‡E÷’òeöæW‡EöÆVâ“° –6öç7BDæW‡E6†–gE÷’Ò‚–äæW‡Bç’²eöæW‡E÷‚òeöæW‡EöÆVâ“°  ’òò66Æ–ærf7F÷"f÷"e÷&WbFò–çFW'6V7F–öâö–ç@  –6öç7B6bÒ‚‚DæW‡E6†–gE÷‚ÒE&We6†–gE÷‚’¢eöæW‡E÷’Ð ’‚DæW‡E6†–gE÷’ÒE&We6†–gE÷’’¢eöæW‡E÷‚’ð ’‚e÷&We÷‚¢eöæW‡E÷’Òe÷&We÷’¢eöæW‡E÷‚“°  ’òòfV7F÷"g&öÒ–åBFò–çFW'6V7F–öâö–ç@  —e÷G&ç5÷‚Ò‚E&We6†–gE÷‚²e÷&We÷‚¢6bÒ–åBç‚“° —e÷G&ç5÷’Ò‚E&We6†–gE÷’²e÷&We÷’¢6bÒ–åBç’“°  ’òòFöâwBæ÷&ÖÆ—¦RÂ÷F†W'v—6R6†'6÷&æW'2&V6öÖRVvÇ ’òò'WB&WfVçB7&§’7–¶W0 –6öç7Be÷G&ç5öÆVç7Ò‚e÷G&ç5÷‚¢e÷G&ç5÷‚²e÷G&ç5÷’¢e÷G&ç5÷’“° ––b‚e÷G&ç5öÆVç7ÃÒ"’°  —&WGW&âæWrfV7F÷#"‚e÷G&ç5÷‚Âe÷G&ç5÷’“°  —ÒVÇ6R°  —6‡&–æµö'’ÒÖF‚ç7'B‚e÷G&ç5öÆVç7ò"“°  —Ð  —ÒVÇ6R°  ’òò†æFÆR7V6–Â66Röb6öÆÆ–æV"VFvW0  –ÆWBF—&V7F–öåöWÒfÇ6S²òò77VÖW3¢÷÷6—FP  ––b‚e÷&We÷‚âçVÖ&W"äU4”Äôâ’°  ––b‚eöæW‡E÷‚âçVÖ&W"äU4”Äôâ’°  –F—&V7F–öåöWÒG'VS°  —Ð  —ÒVÇ6R°  ––b‚e÷&We÷‚ÂÒçVÖ&W"äU4”Äôâ’°  ––b‚eöæW‡E÷‚ÂÒçVÖ&W"äU4”Äôâ’°  –F—&V7F–öåöWÒG'VS°  —Ð  —ÒVÇ6R°  ––b‚ÖF‚ç6–vâ‚e÷&We÷’’ÓÓÒÖF‚ç6–vâ‚eöæW‡E÷’’’°  –F—&V7F–öåöWÒG'VS°  —Ð  —Ð  —Ð  ––b‚F—&V7F–öåöW’°  ’òò6öç6öÆRæÆör‚%v&æ–æs¢Æ–æW2&R7G&–v‡B6WVVæ6R"“° —e÷G&ç5÷‚ÒÒe÷&We÷“° —e÷G&ç5÷’Òe÷&We÷ƒ° —6‡&–æµö'’ÒÖF‚ç7'B‚e÷&WeöÆVç7“°  —ÒVÇ6R°  ’òò6öç6öÆRæÆör‚%v&æ–æs¢Æ–æW2&R7G&–v‡B7–¶R"“° —e÷G&ç5÷‚Òe÷&We÷ƒ° —e÷G&ç5÷’Òe÷&We÷“° —6‡&–æµö'’ÒÖF‚ç7'B‚e÷&WeöÆVç7ò"“°  —Ð  —Ð  —&WGW&âæWrfV7F÷#"‚e÷G&ç5÷‚ò6‡&–æµö'’Âe÷G&ç5÷’ò6‡&–æµö'’“°  —Ð   –6öç7B6öçF÷W$Ö÷fVÖVçG2ÒµÓ°  –f÷"‚ÆWB’ÒÂ–ÂÒ6öçF÷W"æÆVæwF‚Â¢Ò–ÂÒÂ²Ò’²²’Â–Ã²’²²Â¢²²Â²²²’°  ––b‚¢ÓÓÒ–Â’¢Ò° ––b‚²ÓÓÒ–Â’²Ò°  ’òò†¢’ÒÒÒ†’’ÒÒÒ†² ’òò6öç6öÆRæÆör‚v’Æ¢Æ²rÂ’Â¢Â²  –6öçF÷W$Ö÷fVÖVçG5²’ÒÒvWD&WfVÅfV2‚6öçF÷W%²’ÒÂ6öçF÷W%²¢ÒÂ6öçF÷W%²²Ò“°  —Ð  –6öç7B†öÆW4Ö÷fVÖVçG2ÒµÓ° –ÆWBöæT†öÆTÖ÷fVÖVçG2ÂfW'F–6W4Ö÷fVÖVçG2Ò6öçF÷W$Ö÷fVÖVçG2æ6öæ6B‚“°  –f÷"‚ÆWB‚ÒÂ†ÂÒ†öÆW2æÆVæwFƒ²‚Â†Ã²‚²²’°  –6öç7B†öÆRÒ†öÆW5²‚Ó°  –öæT†öÆTÖ÷fVÖVçG2ÒµÓ°  –f÷"‚ÆWB’ÒÂ–ÂÒ†öÆRæÆVæwF‚Â¢Ò–ÂÒÂ²Ò’²²’Â–Ã²’²²Â¢²²Â²²²’°  ––b‚¢ÓÓÒ–Â’¢Ò° ––b‚²ÓÓÒ–Â’²Ò°  ’òò†¢’ÒÒÒ†’’ÒÒÒ†² –öæT†öÆTÖ÷fVÖVçG5²’ÒÒvWD&WfVÅfV2‚†öÆU²’ÒÂ†öÆU²¢ÒÂ†öÆU²²Ò“°  —Ð  –†öÆW4Ö÷fVÖVçG2çW6‚‚öæT†öÆTÖ÷fVÖVçG2“° —fW'F–6W4Ö÷fVÖVçG2ÒfW'F–6W4Ö÷fVÖVçG2æ6öæ6B‚öæT†öÆTÖ÷fVÖVçG2“°  —Ð   ’òòÆö÷&WfVÅ6VvÖVçG2Âf÷"F†Rg&öçBÂf÷"F†R&6°  –f÷"‚ÆWB"Ò²"Â&WfVÅ6VvÖVçG3²"²²’°  ’òöf÷"‚"Ò&WfVÅ6VvÖVçG3²"â²"ÒÒ’°  –6öç7BBÒ"ò&WfVÅ6VvÖVçG3° –6öç7B¢Ò&WfVÅF†–6¶æW72¢ÖF‚æ6÷2‚B¢ÖF‚å’ò"“° –6öç7B'2Ò&WfVÅ6—¦R¢ÖF‚ç6–â‚B¢ÖF‚å’ò"’²&WfVÄöfg6WC°  ’òò6öçG&7B6†P  –f÷"‚ÆWB’ÒÂ–ÂÒ6öçF÷W"æÆVæwFƒ²’Â–Ã²’²²’°  –6öç7BfW'BÒ66ÆUC"‚6öçF÷W%²’ÒÂ6öçF÷W$Ö÷fVÖVçG5²’ÒÂ'2“°  —b‚fW'Bç‚ÂfW'Bç’ÂÒ¢“°  —Ð  ’òòW‡æB†öÆW0  –f÷"‚ÆWB‚ÒÂ†ÂÒ†öÆW2æÆVæwFƒ²‚Â†Ã²‚²²’°  –6öç7B†öÆRÒ†öÆW5²‚Ó° –öæT†öÆTÖ÷fVÖVçG2Ò†öÆW4Ö÷fVÖVçG5²‚Ó°  –f÷"‚ÆWB’ÒÂ–ÂÒ†öÆRæÆVæwFƒ²’Â–Ã²’²²’°  –6öç7BfW'BÒ66ÆUC"‚†öÆU²’ÒÂöæT†öÆTÖ÷fVÖVçG5²’ÒÂ'2“°  —b‚fW'Bç‚ÂfW'Bç’ÂÒ¢“°  —Ð  —Ð  —Ð  –6öç7B'2Ò&WfVÅ6—¦R²&WfVÄöfg6WC°  ’òò&6²f6–ærfW'F–6W0  –f÷"‚ÆWB’Ò²’ÂfÆVã²’²²’°  –6öç7BfW'BÒ&WfVÄVæ&ÆVBò66ÆUC"‚fW'F–6W5²’ÒÂfW'F–6W4Ö÷fVÖVçG5²’ÒÂ'2’¢fW'F–6W5²’Ó°  ––b‚W‡G'VFT'•F‚’°  —b‚fW'Bç‚ÂfW'Bç’Â“°  —ÒVÇ6R°  ’òòb‚fW'Bç‚ÂfW'Bç’²W‡G'VFUG5²Òç’ÂW‡G'VFUG5²Òç‚“°  –æ÷&ÖÂæ6÷’‚7Æ–æUGV&Rææ÷&ÖÇ5²Ò’æ×VÇF—Ç•66Æ"‚fW'Bç‚“° –&–æ÷&ÖÂæ6÷’‚7Æ–æUGV&Ræ&–æ÷&ÖÇ5²Ò’æ×VÇF—Ç•66Æ"‚fW'Bç’“°  —÷6—F–öã"æ6÷’‚W‡G'VFUG5²Ò’æFB‚æ÷&ÖÂ’æFB‚&–æ÷&ÖÂ“°  —b‚÷6—F–öã"ç‚Â÷6—F–öã"ç’Â÷6—F–öã"ç¢“°  —Ð  —Ð  ’òòFB7FWVBfW'F–6W2ââà ’òò–æ6ÇVF–ærg&öçBf6–ærfW'F–6W0  –f÷"‚ÆWB2Ò²2ÃÒ7FW3²2²²’°  –f÷"‚ÆWB’Ò²’ÂfÆVã²’²²’°  –6öç7BfW'BÒ&WfVÄVæ&ÆVBò66ÆUC"‚fW'F–6W5²’ÒÂfW'F–6W4Ö÷fVÖVçG5²’ÒÂ'2’¢fW'F–6W5²’Ó°  ––b‚W‡G'VFT'•F‚’°  —b‚fW'Bç‚ÂfW'Bç’ÂFWF‚ò7FW2¢2“°  —ÒVÇ6R°  ’òòb‚fW'Bç‚ÂfW'Bç’²W‡G'VFUG5²2ÒÒç’ÂW‡G'VFUG5²2ÒÒç‚“°  –æ÷&ÖÂæ6÷’‚7Æ–æUGV&Rææ÷&ÖÇ5²2Ò’æ×VÇF—Ç•66Æ"‚fW'Bç‚“° –&–æ÷&ÖÂæ6÷’‚7Æ–æUGV&Ræ&–æ÷&ÖÇ5²2Ò’æ×VÇF—Ç•66Æ"‚fW'Bç’“°  —÷6—F–öã"æ6÷’‚W‡G'VFUG5²2Ò’æFB‚æ÷&ÖÂ’æFB‚&–æ÷&ÖÂ“°  —b‚÷6—F–öã"ç‚Â÷6—F–öã"ç’Â÷6—F–öã"ç¢“°  —Ð  —Ð  —Ð   ’òòFB&WfVÂ6VvÖVçG2ÆæW0  ’òöf÷"‚"Ò²"ÃÒ&WfVÅ6VvÖVçG3²"²²’° –f÷"‚ÆWB"Ò&WfVÅ6VvÖVçG2Ò²"ãÒ²"ÒÒ’°  –6öç7BBÒ"ò&WfVÅ6VvÖVçG3° –6öç7B¢Ò&WfVÅF†–6¶æW72¢ÖF‚æ6÷2‚B¢ÖF‚å’ò"“° –6öç7B'2Ò&WfVÅ6—¦R¢ÖF‚ç6–â‚B¢ÖF‚å’ò"’²&WfVÄöfg6WC°  ’òò6öçG&7B6†P  –f÷"‚ÆWB’ÒÂ–ÂÒ6öçF÷W"æÆVæwFƒ²’Â–Ã²’²²’°  –6öç7BfW'BÒ66ÆUC"‚6öçF÷W%²’ÒÂ6öçF÷W$Ö÷fVÖVçG5²’ÒÂ'2“° —b‚fW'Bç‚ÂfW'Bç’ÂFWF‚²¢“°  —Ð  ’òòW‡æB†öÆW0  –f÷"‚ÆWB‚ÒÂ†ÂÒ†öÆW2æÆVæwFƒ²‚Â†Ã²‚²²’°  –6öç7B†öÆRÒ†öÆW5²‚Ó° –öæT†öÆTÖ÷fVÖVçG2Ò†öÆW4Ö÷fVÖVçG5²‚Ó°  –f÷"‚ÆWB’ÒÂ–ÂÒ†öÆRæÆVæwFƒ²’Â–Ã²’²²’°  –6öç7BfW'BÒ66ÆUC"‚†öÆU²’ÒÂöæT†öÆTÖ÷fVÖVçG5²’ÒÂ'2“°  ––b‚W‡G'VFT'•F‚’°  —b‚fW'Bç‚ÂfW'Bç’ÂFWF‚²¢“°  —ÒVÇ6R°  —b‚fW'Bç‚ÂfW'Bç’²W‡G'VFUG5²7FW2ÒÒç’ÂW‡G'VFUG5²7FW2ÒÒç‚²¢“°  —Ð  —Ð  —Ð  —Ð  ’ò¢f6W2¢ð  ’òòF÷æB&÷GFöÒf6W0  –'V–ÆDÆ–Df6W2‚“°  ’òò6–FW2f6W0  –'V–ÆE6–FTf6W2‚“°   ’òòòòò–çFW&æÂgVæ7F–öç0  –gVæ7F–öâ'V–ÆDÆ–Df6W2‚’°  –6öç7B7F'BÒfW'F–6W4'&’æÆVæwF‚ò3°  ––b‚&WfVÄVæ&ÆVB’°  –ÆWBÆ–W"Ò²òò7FW2² –ÆWBöfg6WBÒfÆVâ¢Æ–W#°  ’òò&÷GFöÒf6W0  –f÷"‚ÆWB’Ò²’ÂfÆVã²’²²’°  –6öç7Bf6RÒf6W5²’Ó° –c2‚f6U²"Ò²öfg6WBÂf6U²Ò²öfg6WBÂf6U²Ò²öfg6WB“°  —Ð  –Æ–W"Ò7FW2²&WfVÅ6VvÖVçG2¢#° –öfg6WBÒfÆVâ¢Æ–W#°  ’òòF÷f6W0  –f÷"‚ÆWB’Ò²’ÂfÆVã²’²²’°  –6öç7Bf6RÒf6W5²’Ó° –c2‚f6U²Ò²öfg6WBÂf6U²Ò²öfg6WBÂf6U²"Ò²öfg6WB“°  —Ð  —ÒVÇ6R°  ’òò&÷GFöÒf6W0  –f÷"‚ÆWB’Ò²’ÂfÆVã²’²²’°  –6öç7Bf6RÒf6W5²’Ó° –c2‚f6U²"ÒÂf6U²ÒÂf6U²Ò“°  —Ð  ’òòF÷f6W0  –f÷"‚ÆWB’Ò²’ÂfÆVã²’²²’°  –6öç7Bf6RÒf6W5²’Ó° –c2‚f6U²Ò²fÆVâ¢7FW2Âf6U²Ò²fÆVâ¢7FW2Âf6U²"Ò²fÆVâ¢7FW2“°  —Ð  —Ð  —66÷RæFDw&÷W‚7F'BÂfW'F–6W4'&’æÆVæwF‚ò2Ò7F'BÂ“°  —Ð  ’òò7&VFRf6W2f÷"F†R¢×6–FW2öbF†R6†P  –gVæ7F–öâ'V–ÆE6–FTf6W2‚’°  –6öç7B7F'BÒfW'F–6W4'&’æÆVæwF‚ò3° –ÆWBÆ–W&öfg6WBÒ° —6–FWvÆÇ2‚6öçF÷W"ÂÆ–W&öfg6WB“° –Æ–W&öfg6WB³Ò6öçF÷W"æÆVæwFƒ°  –f÷"‚ÆWB‚ÒÂ†ÂÒ†öÆW2æÆVæwFƒ²‚Â†Ã²‚²²’°  –6öç7B†öÆRÒ†öÆW5²‚Ó° —6–FWvÆÇ2‚†öÆRÂÆ–W&öfg6WB“°  ’òòÂG'VP –Æ–W&öfg6WB³Ò†öÆRæÆVæwFƒ°  —Ð   —66÷RæFDw&÷W‚7F'BÂfW'F–6W4'&’æÆVæwF‚ò2Ò7F'BÂ“°   —Ð  –gVæ7F–öâ6–FWvÆÇ2‚6öçF÷W"ÂÆ–W&öfg6WB’°  –ÆWB’Ò6öçF÷W"æÆVæwFƒ°  —v†–ÆR‚ÒÒ’ãÒ’°  –6öç7B¢Ò“° –ÆWB²Ò’Ò° ––b‚²Â’²Ò6öçF÷W"æÆVæwF‚Ò°  ’òö6öç6öÆRæÆör‚v"rÂ’Æ¢Â’ÓÂ²ÇfW'F–6W2æÆVæwF‚“°  –f÷"‚ÆWB2ÒÂ6ÂÒ‚7FW2²&WfVÅ6VvÖVçG2¢"“²2Â6Ã²2²²’°  –6öç7B6ÆVãÒfÆVâ¢3° –6öç7B6ÆVã"ÒfÆVâ¢‚2²“°  –6öç7BÒÆ–W&öfg6WB²¢²6ÆVãÀ –"ÒÆ–W&öfg6WB²²²6ÆVãÀ –2ÒÆ–W&öfg6WB²²²6ÆVã"À –BÒÆ–W&öfg6WB²¢²6ÆVã#°  –cB‚Â"Â2ÂB“°  —Ð  —Ð  —Ð  –gVæ7F–öâb‚‚Â’Â¢’°  —Æ6V†öÆFW"çW6‚‚‚“° —Æ6V†öÆFW"çW6‚‚’“° —Æ6V†öÆFW"çW6‚‚¢“°  —Ð   –gVæ7F–öâc2‚Â"Â2’°  –FEfW'FW‚‚“° –FEfW'FW‚‚"“° –FEfW'FW‚‚2“°  –6öç7BæW‡D–æFW‚ÒfW'F–6W4'&’æÆVæwF‚ò3° –6öç7BWg2ÒWfvVâævVæW&FUF÷Ub‚66÷RÂfW'F–6W4'&’ÂæW‡D–æFW‚Ò2ÂæW‡D–æFW‚Ò"ÂæW‡D–æFW‚Ò“°  –FEUb‚Wg5²Ò“° –FEUb‚Wg5²Ò“° –FEUb‚Wg5²"Ò“°  —Ð  –gVæ7F–öâcB‚Â"Â2ÂB’°  –FEfW'FW‚‚“° –FEfW'FW‚‚"“° –FEfW'FW‚‚B“°  –FEfW'FW‚‚"“° –FEfW'FW‚‚2“° –FEfW'FW‚‚B“°   –6öç7BæW‡D–æFW‚ÒfW'F–6W4'&’æÆVæwF‚ò3° –6öç7BWg2ÒWfvVâævVæW&FU6–FUvÆÅUb‚66÷RÂfW'F–6W4'&’ÂæW‡D–æFW‚ÒbÂæW‡D–æFW‚Ò2ÂæW‡D–æFW‚Ò"ÂæW‡D–æFW‚Ò“°  –FEUb‚Wg5²Ò“° –FEUb‚Wg5²Ò“° –FEUb‚Wg5²2Ò“°  –FEUb‚Wg5²Ò“° –FEUb‚Wg5²"Ò“° –FEUb‚Wg5²2Ò“°  —Ð  –gVæ7F–öâFEfW'FW‚‚–æFW‚’°  —fW'F–6W4'&’çW6‚‚Æ6V†öÆFW%²–æFW‚¢2²Ò“° —fW'F–6W4'&’çW6‚‚Æ6V†öÆFW%²–æFW‚¢2²Ò“° —fW'F–6W4'&’çW6‚‚Æ6V†öÆFW%²–æFW‚¢2²"Ò“°  —Ð   –gVæ7F–öâFEUb‚fV7F÷#"’°  —Wd'&’çW6‚‚fV7F÷#"ç‚“° —Wd'&’çW6‚‚fV7F÷#"ç’“°  —Ð  —Ð  —Ð  –6÷’‚6÷W&6R’°  —7WW"æ6÷’‚6÷W&6R“°  —F†—2ç&ÖWFW'2Òö&¦V7Bæ76–vâ‚·ÒÂ6÷W&6Rç&ÖWFW'2“°  —&WGW&âF†—3°  —Ð  —Fô¥4ôâ‚’°  –6öç7BFFÒ7WW"çFô¥4ôâ‚“°  –6öç7B6†W2ÒF†—2ç&ÖWFW'2ç6†W3° –6öç7B÷F–öç2ÒF†—2ç&ÖWFW'2æ÷F–öç3°  —&WGW&âFô¥4ôâC‚6†W2Â÷F–öç2ÂFF“°  —Ð  —7FF–2g&öÔ¥4ôâ‚FFÂ6†W2’°  –6öç7BvVöÖWG'•6†W2ÒµÓ°  –f÷"‚ÆWB¢ÒÂ¦ÂÒFFç6†W2æÆVæwFƒ²¢Â¦Ã²¢²²’°  –6öç7B6†RÒ6†W5²FFç6†W5²¢ÒÓ°  –vVöÖWG'•6†W2çW6‚‚6†R“°  —Ð  –6öç7BW‡G'VFUF‚ÒFFæ÷F–öç2æW‡G'VFUFƒ°  ––b‚W‡G'VFUF‚ÓÒVæFVf–æVB’°  –FFæ÷F–öç2æW‡G'VFUF‚ÒæWr7W'fW5²W‡G'VFUF‚çG—RÒ‚’æg&öÔ¥4ôâ‚W‡G'VFUF‚“°  —Ð  —&WGW&âæWrW‡G'VFTvVöÖWG'’‚vVöÖWG'•6†W2ÂFFæ÷F–öç2“°  —Ð §Ð ¦6öç7Bv÷&ÆEUdvVæW&F÷"Ò°  –vVæW&FUF÷Uc¢gVæ7F–öâ‚vVöÖWG'’ÂfW'F–6W2Â–æFW„Â–æFW„"Â–æFW„2’°  –6öç7B÷‚ÒfW'F–6W5²–æFW„¢2Ó° –6öç7B÷’ÒfW'F–6W5²–æFW„¢2²Ó° –6öç7B%÷‚ÒfW'F–6W5²–æFW„"¢2Ó° –6öç7B%÷’ÒfW'F–6W5²–æFW„"¢2²Ó° –6öç7B5÷‚ÒfW'F–6W5²–æFW„2¢2Ó° –6öç7B5÷’ÒfW'F–6W5²–æFW„2¢2²Ó°  —&WGW&â° –æWrfV7F÷#"‚÷‚Â÷’’À –æWrfV7F÷#"‚%÷‚Â%÷’’À –æWrfV7F÷#"‚5÷‚Â5÷’ •Ó°  —ÒÀ  –vVæW&FU6–FUvÆÅUc¢gVæ7F–öâ‚vVöÖWG'’ÂfW'F–6W2Â–æFW„Â–æFW„"Â–æFW„2Â–æFW„B’°  –6öç7B÷‚ÒfW'F–6W5²–æFW„¢2Ó° –6öç7B÷’ÒfW'F–6W5²–æFW„¢2²Ó° –6öç7B÷¢ÒfW'F–6W5²–æFW„¢2²"Ó° –6öç7B%÷‚ÒfW'F–6W5²–æFW„"¢2Ó° –6öç7B%÷’ÒfW'F–6W5²–æFW„"¢2²Ó° –6öç7B%÷¢ÒfW'F–6W5²–æFW„"¢2²"Ó° –6öç7B5÷‚ÒfW'F–6W5²–æFW„2¢2Ó° –6öç7B5÷’ÒfW'F–6W5²–æFW„2¢2²Ó° –6öç7B5÷¢ÒfW'F–6W5²–æFW„2¢2²"Ó° –6öç7BE÷‚ÒfW'F–6W5²–æFW„B¢2Ó° –6öç7BE÷’ÒfW'F–6W5²–æFW„B¢2²Ó° –6öç7BE÷¢ÒfW'F–6W5²–æFW„B¢2²"Ó°  ––b‚ÖF‚æ'2‚÷’Ò%÷’’ÂÖF‚æ'2‚÷‚Ò%÷‚’’°  —&WGW&â° –æWrfV7F÷#"‚÷‚ÂÒ÷¢’À –æWrfV7F÷#"‚%÷‚ÂÒ%÷¢’À –æWrfV7F÷#"‚5÷‚ÂÒ5÷¢’À –æWrfV7F÷#"‚E÷‚ÂÒE÷¢ •Ó°  —ÒVÇ6R°  —&WGW&â° –æWrfV7F÷#"‚÷’ÂÒ÷¢’À –æWrfV7F÷#"‚%÷’ÂÒ%÷¢’À –æWrfV7F÷#"‚5÷’ÂÒ5÷¢’À –æWrfV7F÷#"‚E÷’ÂÒE÷¢ •Ó°  —Ð  —Ð §Ó° ¦gVæ7F–öâFô¥4ôâC‚6†W2Â÷F–öç2ÂFF’°  –FFç6†W2ÒµÓ°  ––b‚'&’æ—4'&’‚6†W2’’°  –f÷"‚ÆWB’ÒÂÂÒ6†W2æÆVæwFƒ²’ÂÃ²’²²’°  –6öç7B6†RÒ6†W5²’Ó°  –FFç6†W2çW6‚‚6†RçWV–B“°  —Ð  —ÒVÇ6R°  –FFç6†W2çW6‚‚6†W2çWV–B“°  —Ð  –FFæ÷F–öç2Òö&¦V7Bæ76–vâ‚·ÒÂ÷F–öç2“°  ––b‚÷F–öç2æW‡G'VFUF‚ÓÒVæFVf–æVB’FFæ÷F–öç2æW‡G'VFUF‚Ò÷F–öç2æW‡G'VFUF‚çFô¥4ôâ‚“°  —&WGW&âFF° §Ð ¦6Æ72–6÷6†VG&öävVöÖWG'’W‡FVæG2öÇ–†VG&öävVöÖWG'’°  –6öç7G'V7F÷"‚&F—W2ÒÂFWF–ÂÒ’°  –6öç7BBÒ‚²ÖF‚ç7'B‚R’’ò#°  –6öç7BfW'F–6W2Ò° ’ÒÂBÂÂ “ÂBÂÂ ’ÒÂÒBÂÂ “ÂÒBÂÀ “ÂÒÂBÂ “ÂÂBÀ“ÂÒÂÒBÂ “ÂÂÒBÀ —BÂÂÒÂ —BÂÂÂ ’ÒBÂÂÒÂ ’ÒBÂÂ •Ó°  –6öç7B–æF–6W2Ò° “ÂÂRÂ “ÂRÂÂ “ÂÂrÂ “ÂrÂÂ “ÂÂÀ “ÂRÂ’Â “RÂÂBÀ“ÂÂ"À“ÂrÂbÀ“rÂÂ‚À “2Â’ÂBÂ “2ÂBÂ"À“2Â"ÂbÀ“2ÂbÂ‚À“2Â‚Â’À “BÂ’ÂRÂ “"ÂBÂÀ“bÂ"ÂÀ“‚ÂbÂrÀ“’Â‚Â •Ó°  —7WW"‚fW'F–6W2Â–æF–6W2Â&F—W2ÂFWF–Â“°  —F†—2çG—RÒt–6÷6†VG&öävVöÖWG'’s°  —F†—2ç&ÖWFW'2Ò° —&F—W3¢&F—W2À –FWF–Ã¢FWF–À —Ó°  —Ð  —7FF–2g&öÔ¥4ôâ‚FF’°  —&WGW&âæWr–6÷6†VG&öävVöÖWG'’‚FFç&F—W2ÂFFæFWF–Â“°  —Ð §Ð ¦6Æ72ö7F†VG&öävVöÖWG'’W‡FVæG2öÇ–†VG&öävVöÖWG'’°  –6öç7G'V7F÷"‚&F—W2ÒÂFWF–ÂÒ’°  –6öç7BfW'F–6W2Ò° “ÂÂÂ ’ÒÂÂÀ“ÂÂÀ “ÂÒÂÂ “ÂÂÀ“ÂÂÒ •Ó°  –6öç7B–æF–6W2Ò° “Â"ÂBÀ“ÂBÂ2À“Â2ÂRÀ “ÂRÂ"À“Â"ÂRÀ“ÂRÂ2À “Â2ÂBÀ“ÂBÂ  •Ó°  —7WW"‚fW'F–6W2Â–æF–6W2Â&F—W2ÂFWF–Â“°  —F†—2çG—RÒtö7F†VG&öävVöÖWG'’s°  —F†—2ç&ÖWFW'2Ò° —&F—W3¢&F—W2À –FWF–Ã¢FWF–À —Ó°  —Ð  —7FF–2g&öÔ¥4ôâ‚FF’°  —&WGW&âæWrö7F†VG&öävVöÖWG'’‚FFç&F—W2ÂFFæFWF–Â“°  —Ð §Ð ¦6Æ72&–ætvVöÖWG'’W‡FVæG2'VffW$vVöÖWG'’°  –6öç7G'V7F÷"‚–ææW%&F—W2ÒãRÂ÷WFW%&F—W2ÒÂF†WF6VvÖVçG2Ò3"Â†•6VvÖVçG2ÒÂF†WF7F'BÒÂF†WFÆVæwF‚ÒÖF‚å’¢"’°  —7WW"‚“°  —F†—2çG—RÒu&–ætvVöÖWG'’s°  —F†—2ç&ÖWFW'2Ò° ––ææW%&F—W3¢–ææW%&F—W2À –÷WFW%&F—W3¢÷WFW%&F—W2À —F†WF6VvÖVçG3¢F†WF6VvÖVçG2À —†•6VvÖVçG3¢†•6VvÖVçG2À —F†WF7F'C¢F†WF7F'BÀ —F†WFÆVæwFƒ¢F†WFÆVæwF€ —Ó°  —F†WF6VvÖVçG2ÒÖF‚æÖ‚‚2ÂF†WF6VvÖVçG2“° —†•6VvÖVçG2ÒÖF‚æÖ‚‚Â†•6VvÖVçG2“°  ’òò'VffW'0  –6öç7B–æF–6W2ÒµÓ° –6öç7BfW'F–6W2ÒµÓ° –6öç7Bæ÷&ÖÇ2ÒµÓ° –6öç7BWg2ÒµÓ°  ’òò6öÖR†VÇW"f&–&ÆW0  –ÆWB&F—W2Ò–ææW%&F—W3° –6öç7B&F—W57FWÒ‚‚÷WFW%&F—W2Ò–ææW%&F—W2’ò†•6VvÖVçG2“° –6öç7BfW'FW‚ÒæWrfV7F÷#2‚“° –6öç7BWbÒæWrfV7F÷#"‚“°  ’òòvVæW&FRfW'F–6W2Âæ÷&ÖÇ2æBWg0  –f÷"‚ÆWB¢Ò²¢ÃÒ†•6VvÖVçG3²¢²²’°  –f÷"‚ÆWB’Ò²’ÃÒF†WF6VvÖVçG3²’²²’°  ’òòfÇVW2&RvVæW&FRg&öÒF†R–ç6–FRöbF†R&–ærFòF†R÷WG6–FP  –6öç7B6VvÖVçBÒF†WF7F'B²’òF†WF6VvÖVçG2¢F†WFÆVæwFƒ°  ’òòfW'FW€  —fW'FW‚ç‚Ò&F—W2¢ÖF‚æ6÷2‚6VvÖVçB“° —fW'FW‚ç’Ò&F—W2¢ÖF‚ç6–â‚6VvÖVçB“°  —fW'F–6W2çW6‚‚fW'FW‚ç‚ÂfW'FW‚ç’ÂfW'FW‚ç¢“°  ’òòæ÷&ÖÀ  –æ÷&ÖÇ2çW6‚‚ÂÂ“°  ’òòW`  —Wbç‚Ò‚fW'FW‚ç‚ò÷WFW%&F—W2²’ò#° —Wbç’Ò‚fW'FW‚ç’ò÷WFW%&F—W2²’ò#°  —Wg2çW6‚‚Wbç‚ÂWbç’“°  —Ð  ’òò–æ7&V6RF†R&F—W2f÷"æW‡B&÷röbfW'F–6W0  —&F—W2³Ò&F—W57FW°  —Ð  ’òò–æF–6W0  –f÷"‚ÆWB¢Ò²¢Â†•6VvÖVçG3²¢²²’°  –6öç7BF†WF6VvÖVçDÆWfVÂÒ¢¢‚F†WF6VvÖVçG2²“°  –f÷"‚ÆWB’Ò²’ÂF†WF6VvÖVçG3²’²²’°  –6öç7B6VvÖVçBÒ’²F†WF6VvÖVçDÆWfVÃ°  –6öç7BÒ6VvÖVçC° –6öç7B"Ò6VvÖVçB²F†WF6VvÖVçG2²° –6öç7B2Ò6VvÖVçB²F†WF6VvÖVçG2²#° –6öç7BBÒ6VvÖVçB²°  ’òòf6W0  ––æF–6W2çW6‚‚Â"ÂB“° ––æF–6W2çW6‚‚"Â2ÂB“°  —Ð  —Ð  ’òò'V–ÆBvVöÖWG'  —F†—2ç6WD–æFW‚‚–æF–6W2“° —F†—2ç6WDGG&–'WFR‚w÷6—F–öârÂæWrfÆöC3$'VffW$GG&–'WFR‚fW'F–6W2Â2’“° —F†—2ç6WDGG&–'WFR‚væ÷&ÖÂrÂæWrfÆöC3$'VffW$GG&–'WFR‚æ÷&ÖÇ2Â2’“° —F†—2ç6WDGG&–'WFR‚wWbrÂæWrfÆöC3$'VffW$GG&–'WFR‚Wg2Â"’“°  —Ð  –6÷’‚6÷W&6R’°  —7WW"æ6÷’‚6÷W&6R“°  —F†—2ç&ÖWFW'2Òö&¦V7Bæ76–vâ‚·ÒÂ6÷W&6Rç&ÖWFW'2“°  —&WGW&âF†—3°  —Ð  —7FF–2g&öÔ¥4ôâ‚FF’°  —&WGW&âæWr&–ætvVöÖWG'’‚FFæ–ææW%&F—W2ÂFFæ÷WFW%&F—W2ÂFFçF†WF6VvÖVçG2ÂFFç†•6VvÖVçG2ÂFFçF†WF7F'BÂFFçF†WFÆVæwF‚“°  —Ð §Ð ¦6Æ726†TvVöÖWG'’W‡FVæG2'VffW$vVöÖWG'’°  –6öç7G'V7F÷"‚6†W2ÒæWr6†R‚²æWrfV7F÷#"‚ÂãR’ÂæWrfV7F÷#"‚ÒãRÂÒãR’ÂæWrfV7F÷#"‚ãRÂÒãR’Ò’Â7W'fU6VvÖVçG2Ò"’°  —7WW"‚“°  —F†—2çG—RÒu6†TvVöÖWG'’s°  —F†—2ç&ÖWFW'2Ò° —6†W3¢6†W2À –7W'fU6VvÖVçG3¢7W'fU6VvÖVçG0 —Ó°  ’òò'VffW'0  –6öç7B–æF–6W2ÒµÓ° –6öç7BfW'F–6W2ÒµÓ° –6öç7Bæ÷&ÖÇ2ÒµÓ° –6öç7BWg2ÒµÓ°  ’òò†VÇW"f&–&ÆW0  –ÆWBw&÷W7F'BÒ° –ÆWBw&÷W6÷VçBÒ°  ’òòÆÆ÷r6–ævÆRæB'&’fÇVW2f÷"'6†W2"&ÖWFW   ––b‚'&’æ—4'&’‚6†W2’ÓÓÒfÇ6R’°  –FE6†R‚6†W2“°  —ÒVÇ6R°  –f÷"‚ÆWB’Ò²’Â6†W2æÆVæwFƒ²’²²’°  –FE6†R‚6†W5²’Ò“°  —F†—2æFDw&÷W‚w&÷W7F'BÂw&÷W6÷VçBÂ’“²òòVæ&ÆW2×VÇF”ÖFW&–Â7W÷'@  –w&÷W7F'B³Òw&÷W6÷VçC° –w&÷W6÷VçBÒ°  —Ð  —Ð  ’òò'V–ÆBvVöÖWG'  —F†—2ç6WD–æFW‚‚–æF–6W2“° —F†—2ç6WDGG&–'WFR‚w÷6—F–öârÂæWrfÆöC3$'VffW$GG&–'WFR‚fW'F–6W2Â2’“° —F†—2ç6WDGG&–'WFR‚væ÷&ÖÂrÂæWrfÆöC3$'VffW$GG&–'WFR‚æ÷&ÖÇ2Â2’“° —F†—2ç6WDGG&–'WFR‚wWbrÂæWrfÆöC3$'VffW$GG&–'WFR‚Wg2Â"’“°   ’òò†VÇW"gVæ7F–öç0  –gVæ7F–öâFE6†R‚6†R’°  –6öç7B–æFW„öfg6WBÒfW'F–6W2æÆVæwF‚ò3° –6öç7Bö–çG2Ò6†RæW‡G&7Eö–çG2‚7W'fU6VvÖVçG2“°  –ÆWB6†UfW'F–6W2Òö–çG2ç6†S° –6öç7B6†T†öÆW2Òö–çG2æ†öÆW3°  ’òò6†V6²F—&V7F–öâöbfW'F–6W0  ––b‚6†UWF–Ç2æ—46Æö6µv—6R‚6†UfW'F–6W2’ÓÓÒfÇ6R’°  —6†UfW'F–6W2Ò6†UfW'F–6W2ç&WfW'6R‚“°  —Ð  –f÷"‚ÆWB’ÒÂÂÒ6†T†öÆW2æÆVæwFƒ²’ÂÃ²’²²’°  –6öç7B6†T†öÆRÒ6†T†öÆW5²’Ó°  ––b‚6†UWF–Ç2æ—46Æö6µv—6R‚6†T†öÆR’ÓÓÒG'VR’°  —6†T†öÆW5²’ÒÒ6†T†öÆRç&WfW'6R‚“°  —Ð  —Ð  –6öç7Bf6W2Ò6†UWF–Ç2çG&–æwVÆFU6†R‚6†UfW'F–6W2Â6†T†öÆW2“°  ’òò¦ö–âfW'F–6W2öb–ææW"æB÷WFW"F‡2Fò6–ævÆR'&  –f÷"‚ÆWB’ÒÂÂÒ6†T†öÆW2æÆVæwFƒ²’ÂÃ²’²²’°  –6öç7B6†T†öÆRÒ6†T†öÆW5²’Ó° —6†UfW'F–6W2Ò6†UfW'F–6W2æ6öæ6B‚6†T†öÆR“°  —Ð  ’òòfW'F–6W2Âæ÷&ÖÇ2ÂWg0  –f÷"‚ÆWB’ÒÂÂÒ6†UfW'F–6W2æÆVæwFƒ²’ÂÃ²’²²’°  –6öç7BfW'FW‚Ò6†UfW'F–6W5²’Ó°  —fW'F–6W2çW6‚‚fW'FW‚ç‚ÂfW'FW‚ç’Â“° –æ÷&ÖÇ2çW6‚‚ÂÂ“° —Wg2çW6‚‚fW'FW‚ç‚ÂfW'FW‚ç’“²òòv÷&ÆBWg0  —Ð  ’òò–æF–6W0  –f÷"‚ÆWB’ÒÂÂÒf6W2æÆVæwFƒ²’ÂÃ²’²²’°  –6öç7Bf6RÒf6W5²’Ó°  –6öç7BÒf6U²Ò²–æFW„öfg6WC° –6öç7B"Òf6U²Ò²–æFW„öfg6WC° –6öç7B2Òf6U²"Ò²–æFW„öfg6WC°  ––æF–6W2çW6‚‚Â"Â2“° –w&÷W6÷VçB³Ò3°  —Ð  —Ð  —Ð  –6÷’‚6÷W&6R’°  —7WW"æ6÷’‚6÷W&6R“°  —F†—2ç&ÖWFW'2Òö&¦V7Bæ76–vâ‚·ÒÂ6÷W&6Rç&ÖWFW'2“°  —&WGW&âF†—3°  —Ð  —Fô¥4ôâ‚’°  –6öç7BFFÒ7WW"çFô¥4ôâ‚“°  –6öç7B6†W2ÒF†—2ç&ÖWFW'2ç6†W3°  —&WGW&âFô¥4ôâ‚6†W2ÂFF“°  —Ð  —7FF–2g&öÔ¥4ôâ‚FFÂ6†W2’°  –6öç7BvVöÖWG'•6†W2ÒµÓ°  –f÷"‚ÆWB¢ÒÂ¦ÂÒFFç6†W2æÆVæwFƒ²¢Â¦Ã²¢²²’°  –6öç7B6†RÒ6†W5²FFç6†W5²¢ÒÓ°  –vVöÖWG'•6†W2çW6‚‚6†R“°  —Ð  —&WGW&âæWr6†TvVöÖWG'’‚vVöÖWG'•6†W2ÂFFæ7W'fU6VvÖVçG2“°  —Ð §Ð ¦gVæ7F–öâFô¥4ôâ‚6†W2ÂFF’°  –FFç6†W2ÒµÓ°  ––b‚'&’æ—4'&’‚6†W2’’°  –f÷"‚ÆWB’ÒÂÂÒ6†W2æÆVæwFƒ²’ÂÃ²’²²’°  –6öç7B6†RÒ6†W5²’Ó°  –FFç6†W2çW6‚‚6†RçWV–B“°  —Ð  —ÒVÇ6R°  –FFç6†W2çW6‚‚6†W2çWV–B“°  —Ð  —&WGW&âFF° §Ð ¦6Æ727†W&TvVöÖWG'’W‡FVæG2'VffW$vVöÖWG'’°  –6öç7G'V7F÷"‚&F—W2ÒÂv–GF…6VvÖVçG2Ò3"Â†V–v‡E6VvÖVçG2ÒbÂ†•7F'BÒÂ†”ÆVæwF‚ÒÖF‚å’¢"ÂF†WF7F'BÒÂF†WFÆVæwF‚ÒÖF‚å’’°  —7WW"‚“°  —F†—2çG—RÒu7†W&TvVöÖWG'’s°  —F†—2ç&ÖWFW'2Ò° —&F—W3¢&F—W2À —v–GF…6VvÖVçG3¢v–GF…6VvÖVçG2À –†V–v‡E6VvÖVçG3¢†V–v‡E6VvÖVçG2À —†•7F'C¢†•7F'BÀ —†”ÆVæwFƒ¢†”ÆVæwF‚À —F†WF7F'C¢F†WF7F'BÀ —F†WFÆVæwFƒ¢F†WFÆVæwF€ —Ó°  —v–GF…6VvÖVçG2ÒÖF‚æÖ‚‚2ÂÖF‚æfÆö÷"‚v–GF…6VvÖVçG2’“° –†V–v‡E6VvÖVçG2ÒÖF‚æÖ‚‚"ÂÖF‚æfÆö÷"‚†V–v‡E6VvÖVçG2’“°  –6öç7BF†WFVæBÒÖF‚æÖ–â‚F†WF7F'B²F†WFÆVæwF‚ÂÖF‚å’“°  –ÆWB–æFW‚Ò° –6öç7Bw&–BÒµÓ°  –6öç7BfW'FW‚ÒæWrfV7F÷#2‚“° –6öç7Bæ÷&ÖÂÒæWrfV7F÷#2‚“°  ’òò'VffW'0  –6öç7B–æF–6W2ÒµÓ° –6öç7BfW'F–6W2ÒµÓ° –6öç7Bæ÷&ÖÇ2ÒµÓ° –6öç7BWg2ÒµÓ°  ’òòvVæW&FRfW'F–6W2Âæ÷&ÖÇ2æBWg0  –f÷"‚ÆWB—’Ò²—’ÃÒ†V–v‡E6VvÖVçG3²—’²²’°  –6öç7BfW'F–6W5&÷rÒµÓ°  –6öç7BbÒ—’ò†V–v‡E6VvÖVçG3°  ’òò7V6–Â66Rf÷"F†RöÆW0  –ÆWBTöfg6WBÒ°  ––b‚—’ÓÓÒbbF†WF7F'BÓÓÒ’°  —Töfg6WBÒãRòv–GF…6VvÖVçG3°  —ÒVÇ6R–b‚—’ÓÓÒ†V–v‡E6VvÖVçG2bbF†WFVæBÓÓÒÖF‚å’’°  —Töfg6WBÒÒãRòv–GF…6VvÖVçG3°  —Ð  –f÷"‚ÆWB—‚Ò²—‚ÃÒv–GF…6VvÖVçG3²—‚²²’°  –6öç7BRÒ—‚òv–GF…6VvÖVçG3°  ’òòfW'FW€  —fW'FW‚ç‚ÒÒ&F—W2¢ÖF‚æ6÷2‚†•7F'B²R¢†”ÆVæwF‚’¢ÖF‚ç6–â‚F†WF7F'B²b¢F†WFÆVæwF‚“° —fW'FW‚ç’Ò&F—W2¢ÖF‚æ6÷2‚F†WF7F'B²b¢F†WFÆVæwF‚“° —fW'FW‚ç¢Ò&F—W2¢ÖF‚ç6–â‚†•7F'B²R¢†”ÆVæwF‚’¢ÖF‚ç6–â‚F†WF7F'B²b¢F†WFÆVæwF‚“°  —fW'F–6W2çW6‚‚fW'FW‚ç‚ÂfW'FW‚ç’ÂfW'FW‚ç¢“°  ’òòæ÷&ÖÀ  –æ÷&ÖÂæ6÷’‚fW'FW‚’ææ÷&ÖÆ—¦R‚“° –æ÷&ÖÇ2çW6‚‚æ÷&ÖÂç‚Âæ÷&ÖÂç’Âæ÷&ÖÂç¢“°  ’òòW`  —Wg2çW6‚‚R²Töfg6WBÂÒb“°  —fW'F–6W5&÷rçW6‚‚–æFW‚²²“°  —Ð  –w&–BçW6‚‚fW'F–6W5&÷r“°  —Ð  ’òò–æF–6W0  –f÷"‚ÆWB—’Ò²—’Â†V–v‡E6VvÖVçG3²—’²²’°  –f÷"‚ÆWB—‚Ò²—‚Âv–GF…6VvÖVçG3²—‚²²’°  –6öç7BÒw&–E²—’Õ²—‚²Ó° –6öç7B"Òw&–E²—’Õ²—‚Ó° –6öç7B2Òw&–E²—’²Õ²—‚Ó° –6öç7BBÒw&–E²—’²Õ²—‚²Ó°  ––b‚—’ÓÒÇÂF†WF7F'Bâ’–æF–6W2çW6‚‚Â"ÂB“° ––b‚—’ÓÒ†V–v‡E6VvÖVçG2ÒÇÂF†WFVæBÂÖF‚å’’–æF–6W2çW6‚‚"Â2ÂB“°  —Ð  —Ð  ’òò'V–ÆBvVöÖWG'  —F†—2ç6WD–æFW‚‚–æF–6W2“° —F†—2ç6WDGG&–'WFR‚w÷6—F–öârÂæWrfÆöC3$'VffW$GG&–'WFR‚fW'F–6W2Â2’“° —F†—2ç6WDGG&–'WFR‚væ÷&ÖÂrÂæWrfÆöC3$'VffW$GG&–'WFR‚æ÷&ÖÇ2Â2’“° —F†—2ç6WDGG&–'WFR‚wWbrÂæWrfÆöC3$'VffW$GG&–'WFR‚Wg2Â"’“°  —Ð  –6÷’‚6÷W&6R’°  —7WW"æ6÷’‚6÷W&6R“°  —F†—2ç&ÖWFW'2Òö&¦V7Bæ76–vâ‚·ÒÂ6÷W&6Rç&ÖWFW'2“°  —&WGW&âF†—3°  —Ð  —7FF–2g&öÔ¥4ôâ‚FF’°  —&WGW&âæWr7†W&TvVöÖWG'’‚FFç&F—W2ÂFFçv–GF…6VvÖVçG2ÂFFæ†V–v‡E6VvÖVçG2ÂFFç†•7F'BÂFFç†”ÆVæwF‚ÂFFçF†WF7F'BÂFFçF†WFÆVæwF‚“°  —Ð §Ð ¦6Æ72FWG&†VG&öävVöÖWG'’W‡FVæG2öÇ–†VG&öävVöÖWG'’°  –6öç7G'V7F÷"‚&F—W2ÒÂFWF–ÂÒ’°  –6öç7BfW'F–6W2Ò° “ÂÂÂ ’ÒÂÒÂÂ ’ÒÂÂÒÂ “ÂÒÂÒ •Ó°  –6öç7B–æF–6W2Ò° “"ÂÂÂ “Â2Â"À“Â2ÂÀ“"Â2Â •Ó°  —7WW"‚fW'F–6W2Â–æF–6W2Â&F—W2ÂFWF–Â“°  —F†—2çG—RÒuFWG&†VG&öävVöÖWG'’s°  —F†—2ç&ÖWFW'2Ò° —&F—W3¢&F—W2À –FWF–Ã¢FWF–À —Ó°  —Ð  —7FF–2g&öÔ¥4ôâ‚FF’°  —&WGW&âæWrFWG&†VG&öävVöÖWG'’‚FFç&F—W2ÂFFæFWF–Â“°  —Ð §Ð ¦6Æ72F÷'W4vVöÖWG'’W‡FVæG2'VffW$vVöÖWG'’°  –6öç7G'V7F÷"‚&F—W2ÒÂGV&RÒãBÂ&F–Å6VvÖVçG2Ò"ÂGV'VÆ%6VvÖVçG2ÒC‚Â&2ÒÖF‚å’¢"’°  —7WW"‚“°  —F†—2çG—RÒuF÷'W4vVöÖWG'’s°  —F†—2ç&ÖWFW'2Ò° —&F—W3¢&F—W2À —GV&S¢GV&RÀ —&F–Å6VvÖVçG3¢&F–Å6VvÖVçG2À —GV'VÆ%6VvÖVçG3¢GV'VÆ%6VvÖVçG2À –&3¢&0 —Ó°  —&F–Å6VvÖVçG2ÒÖF‚æfÆö÷"‚&F–Å6VvÖVçG2“° —GV'VÆ%6VvÖVçG2ÒÖF‚æfÆö÷"‚GV'VÆ%6VvÖVçG2“°  ’òò'VffW'0  –6öç7B–æF–6W2ÒµÓ° –6öç7BfW'F–6W2ÒµÓ° –6öç7Bæ÷&ÖÇ2ÒµÓ° –6öç7BWg2ÒµÓ°  ’òò†VÇW"f&–&ÆW0  –6öç7B6VçFW"ÒæWrfV7F÷#2‚“° –6öç7BfW'FW‚ÒæWrfV7F÷#2‚“° –6öç7Bæ÷&ÖÂÒæWrfV7F÷#2‚“°  ’òòvVæW&FRfW'F–6W2Âæ÷&ÖÇ2æBWg0  –f÷"‚ÆWB¢Ò²¢ÃÒ&F–Å6VvÖVçG3²¢²²’°  –f÷"‚ÆWB’Ò²’ÃÒGV'VÆ%6VvÖVçG3²’²²’°  –6öç7BRÒ’òGV'VÆ%6VvÖVçG2¢&3° –6öç7BbÒ¢ò&F–Å6VvÖVçG2¢ÖF‚å’¢#°  ’òòfW'FW€  —fW'FW‚ç‚Ò‚&F—W2²GV&R¢ÖF‚æ6÷2‚b’’¢ÖF‚æ6÷2‚R“° —fW'FW‚ç’Ò‚&F—W2²GV&R¢ÖF‚æ6÷2‚b’’¢ÖF‚ç6–â‚R“° —fW'FW‚ç¢ÒGV&R¢ÖF‚ç6–â‚b“°  —fW'F–6W2çW6‚‚fW'FW‚ç‚ÂfW'FW‚ç’ÂfW'FW‚ç¢“°  ’òòæ÷&ÖÀ  –6VçFW"ç‚Ò&F—W2¢ÖF‚æ6÷2‚R“° –6VçFW"ç’Ò&F—W2¢ÖF‚ç6–â‚R“° –æ÷&ÖÂç7V%fV7F÷'2‚fW'FW‚Â6VçFW"’ææ÷&ÖÆ—¦R‚“°  –æ÷&ÖÇ2çW6‚‚æ÷&ÖÂç‚Âæ÷&ÖÂç’Âæ÷&ÖÂç¢“°  ’òòW`  —Wg2çW6‚‚’òGV'VÆ%6VvÖVçG2“° —Wg2çW6‚‚¢ò&F–Å6VvÖVçG2“°  —Ð  —Ð  ’òòvVæW&FR–æF–6W0  –f÷"‚ÆWB¢Ò²¢ÃÒ&F–Å6VvÖVçG3²¢²²’°  –f÷"‚ÆWB’Ò²’ÃÒGV'VÆ%6VvÖVçG3²’²²’°  ’òò–æF–6W0  –6öç7BÒ‚GV'VÆ%6VvÖVçG2²’¢¢²’Ò° –6öç7B"Ò‚GV'VÆ%6VvÖVçG2²’¢‚¢Ò’²’Ò° –6öç7B2Ò‚GV'VÆ%6VvÖVçG2²’¢‚¢Ò’²“° –6öç7BBÒ‚GV'VÆ%6VvÖVçG2²’¢¢²“°  ’òòf6W0  ––æF–6W2çW6‚‚Â"ÂB“° ––æF–6W2çW6‚‚"Â2ÂB“°  —Ð  —Ð  ’òò'V–ÆBvVöÖWG'  —F†—2ç6WD–æFW‚‚–æF–6W2“° —F†—2ç6WDGG&–'WFR‚w÷6—F–öârÂæWrfÆöC3$'VffW$GG&–'WFR‚fW'F–6W2Â2’“° —F†—2ç6WDGG&–'WFR‚væ÷&ÖÂrÂæWrfÆöC3$'VffW$GG&–'WFR‚æ÷&ÖÇ2Â2’“° —F†—2ç6WDGG&–'WFR‚wWbrÂæWrfÆöC3$'VffW$GG&–'WFR‚Wg2Â"’“°  —Ð  –6÷’‚6÷W&6R’°  —7WW"æ6÷’‚6÷W&6R“°  —F†—2ç&ÖWFW'2Òö&¦V7Bæ76–vâ‚·ÒÂ6÷W&6Rç&ÖWFW'2“°  —&WGW&âF†—3°  —Ð  —7FF–2g&öÔ¥4ôâ‚FF’°  —&WGW&âæWrF÷'W4vVöÖWG'’‚FFç&F—W2ÂFFçGV&RÂFFç&F–Å6VvÖVçG2ÂFFçGV'VÆ%6VvÖVçG2ÂFFæ&2“°  —Ð §Ð ¦6Æ72F÷'W4¶æ÷DvVöÖWG'’W‡FVæG2'VffW$vVöÖWG'’°  –6öç7G'V7F÷"‚&F—W2ÒÂGV&RÒãBÂGV'VÆ%6VvÖVçG2ÒcBÂ&F–Å6VvÖVçG2Ò‚ÂÒ"ÂÒ2’°  —7WW"‚“°  —F†—2çG—RÒuF÷'W4¶æ÷DvVöÖWG'’s°  —F†—2ç&ÖWFW'2Ò° —&F—W3¢&F—W2À —GV&S¢GV&RÀ —GV'VÆ%6VvÖVçG3¢GV'VÆ%6VvÖVçG2À —&F–Å6VvÖVçG3¢&F–Å6VvÖVçG2À —¢À —¢ —Ó°  —GV'VÆ%6VvÖVçG2ÒÖF‚æfÆö÷"‚GV'VÆ%6VvÖVçG2“° —&F–Å6VvÖVçG2ÒÖF‚æfÆö÷"‚&F–Å6VvÖVçG2“°  ’òò'VffW'0  –6öç7B–æF–6W2ÒµÓ° –6öç7BfW'F–6W2ÒµÓ° –6öç7Bæ÷&ÖÇ2ÒµÓ° –6öç7BWg2ÒµÓ°  ’òò†VÇW"f&–&ÆW0  –6öç7BfW'FW‚ÒæWrfV7F÷#2‚“° –6öç7Bæ÷&ÖÂÒæWrfV7F÷#2‚“°  –6öç7BÒæWrfV7F÷#2‚“° –6öç7B"ÒæWrfV7F÷#2‚“°  –6öç7B"ÒæWrfV7F÷#2‚“° –6öç7BBÒæWrfV7F÷#2‚“° –6öç7BâÒæWrfV7F÷#2‚“°  ’òòvVæW&FRfW'F–6W2Âæ÷&ÖÇ2æBWg0  –f÷"‚ÆWB’Ò²’ÃÒGV'VÆ%6VvÖVçG3²²²’’°  ’òòF†R&F–â'R"—2W6VBFò6Æ7VÆFRF†R÷6—F–öâöâF†RF÷'W27W'fRöbF†R7W'&VçBGV'VÆ"6VvÖVç@  –6öç7BRÒ’òGV'VÆ%6VvÖVçG2¢¢ÖF‚å’¢#°  ’òòæ÷rvR6Æ7VÆFRGvòö–çG2â—2÷W"7W'&VçB÷6—F–öâöâF†R7W'fRÂ"—2Æ—GFÆRf'F†W"†VBà ’òòF†W6Rö–çG2&RW6VBFò7&VFR7V6–Â&6ö÷&F–æFR76R"Âv†–6‚—2æV6W76'’Fò6Æ7VÆFRF†R6÷'&V7BfW'FW‚÷6—F–öç0  –6Æ7VÆFU÷6—F–öäöä7W'fR‚RÂÂÂ&F—W2Â“° –6Æ7VÆFU÷6—F–öäöä7W'fR‚R²ãÂÂÂ&F—W2Â"“°  ’òò6Æ7VÆFR÷'F†öæ÷&ÖÂ&6—0  •Bç7V%fV7F÷'2‚"Â“° ”âæFEfV7F÷'2‚"Â“° ”"æ7&÷75fV7F÷'2‚BÂâ“° ”âæ7&÷75fV7F÷'2‚"ÂB“°  ’òòæ÷&ÖÆ—¦R"ÂââB6â&R–væ÷&VBÂvRFöâwBW6R—@  ”"ææ÷&ÖÆ—¦R‚“° ”âææ÷&ÖÆ—¦R‚“°  –f÷"‚ÆWB¢Ò²¢ÃÒ&F–Å6VvÖVçG3²²²¢’°  ’òòæ÷r6Æ7VÆFRF†RfW'F–6W2âF†W’&Ræ÷F†–ærÖ÷&RF†ââW‡G'W6–öâöbF†RF÷'W27W'fRà ’òò&V6W6RvRW‡G'VFR6†R–âF†R‡’×ÆæRÂF†W&R—2æòæVVBFò6Æ7VÆFR¢×fÇVRà  –6öç7BbÒ¢ò&F–Å6VvÖVçG2¢ÖF‚å’¢#° –6öç7B7‚ÒÒGV&R¢ÖF‚æ6÷2‚b“° –6öç7B7’ÒGV&R¢ÖF‚ç6–â‚b“°  ’òòæ÷r6Æ7VÆFRF†Rf–æÂfW'FW‚÷6—F–öâà ’òòf—'7BvR÷&–VçBF†RW‡G'W6–öâv—F‚÷W"&6—2fV7F÷'2ÂF†VâvRFB—BFòF†R7W'&VçB÷6—F–öâöâF†R7W'fP  —fW'FW‚ç‚Òç‚²‚7‚¢âç‚²7’¢"ç‚“° —fW'FW‚ç’Òç’²‚7‚¢âç’²7’¢"ç’“° —fW'FW‚ç¢Òç¢²‚7‚¢âç¢²7’¢"ç¢“°  —fW'F–6W2çW6‚‚fW'FW‚ç‚ÂfW'FW‚ç’ÂfW'FW‚ç¢“°  ’òòæ÷&ÖÂ…—2Çv—2F†R6VçFW"ö÷&–v–âöbF†RW‡G'W6–öâÂF‡W2vR6âW6R—BFò6Æ7VÆFRF†Ræ÷&ÖÂ  –æ÷&ÖÂç7V%fV7F÷'2‚fW'FW‚Â’ææ÷&ÖÆ—¦R‚“°  –æ÷&ÖÇ2çW6‚‚æ÷&ÖÂç‚Âæ÷&ÖÂç’Âæ÷&ÖÂç¢“°  ’òòW`  —Wg2çW6‚‚’òGV'VÆ%6VvÖVçG2“° —Wg2çW6‚‚¢ò&F–Å6VvÖVçG2“°  —Ð  —Ð  ’òòvVæW&FR–æF–6W0  –f÷"‚ÆWB¢Ò²¢ÃÒGV'VÆ%6VvÖVçG3²¢²²’°  –f÷"‚ÆWB’Ò²’ÃÒ&F–Å6VvÖVçG3²’²²’°  ’òò–æF–6W0  –6öç7BÒ‚&F–Å6VvÖVçG2²’¢‚¢Ò’²‚’Ò“° –6öç7B"Ò‚&F–Å6VvÖVçG2²’¢¢²‚’Ò“° –6öç7B2Ò‚&F–Å6VvÖVçG2²’¢¢²“° –6öç7BBÒ‚&F–Å6VvÖVçG2²’¢‚¢Ò’²“°  ’òòf6W0  ––æF–6W2çW6‚‚Â"ÂB“° ––æF–6W2çW6‚‚"Â2ÂB“°  —Ð  —Ð  ’òò'V–ÆBvVöÖWG'  —F†—2ç6WD–æFW‚‚–æF–6W2“° —F†—2ç6WDGG&–'WFR‚w÷6—F–öârÂæWrfÆöC3$'VffW$GG&–'WFR‚fW'F–6W2Â2’“° —F†—2ç6WDGG&–'WFR‚væ÷&ÖÂrÂæWrfÆöC3$'VffW$GG&–'WFR‚æ÷&ÖÇ2Â2’“° —F†—2ç6WDGG&–'WFR‚wWbrÂæWrfÆöC3$'VffW$GG&–'WFR‚Wg2Â"’“°  ’òòF†—2gVæ7F–öâ6Æ7VÆFW2F†R7W'&VçB÷6—F–öâöâF†RF÷'W27W'fP  –gVæ7F–öâ6Æ7VÆFU÷6—F–öäöä7W'fR‚RÂÂÂ&F—W2Â÷6—F–öâ’°  –6öç7B7RÒÖF‚æ6÷2‚R“° –6öç7B7RÒÖF‚ç6–â‚R“° –6öç7BT÷fW%Òò¢S° –6öç7B72ÒÖF‚æ6÷2‚T÷fW%“°  —÷6—F–öâç‚Ò&F—W2¢‚"²72’¢ãR¢7S° —÷6—F–öâç’Ò&F—W2¢‚"²72’¢7R¢ãS° —÷6—F–öâç¢Ò&F—W2¢ÖF‚ç6–â‚T÷fW%’¢ãS°  —Ð  —Ð  –6÷’‚6÷W&6R’°  —7WW"æ6÷’‚6÷W&6R“°  —F†—2ç&ÖWFW'2Òö&¦V7Bæ76–vâ‚·ÒÂ6÷W&6Rç&ÖWFW'2“°  —&WGW&âF†—3°  —Ð  —7FF–2g&öÔ¥4ôâ‚FF’°  —&WGW&âæWrF÷'W4¶æ÷DvVöÖWG'’‚FFç&F—W2ÂFFçGV&RÂFFçGV'VÆ%6VvÖVçG2ÂFFç&F–Å6VvÖVçG2ÂFFçÂFFç“°  —Ð §Ð ¦6Æ72GV&TvVöÖWG'’W‡FVæG2'VffW$vVöÖWG'’°  –6öç7G'V7F÷"‚F‚ÒæWrVG&F–4&W¦–W$7W'fS2‚æWrfV7F÷#2‚ÒÂÒÂ’ÂæWrfV7F÷#2‚ÒÂÂ’ÂæWrfV7F÷#2‚ÂÂ’’ÂGV'VÆ%6VvÖVçG2ÒcBÂ&F—W2ÒÂ&F–Å6VvÖVçG2Ò‚Â6Æ÷6VBÒfÇ6R’°  —7WW"‚“°  —F†—2çG—RÒuGV&TvVöÖWG'’s°  —F†—2ç&ÖWFW'2Ò° —Fƒ¢F‚À —GV'VÆ%6VvÖVçG3¢GV'VÆ%6VvÖVçG2À —&F—W3¢&F—W2À —&F–Å6VvÖVçG3¢&F–Å6VvÖVçG2À –6Æ÷6VC¢6Æ÷6V@ —Ó°  –6öç7Bg&ÖW2ÒF‚æ6ö×WFTg&VæWDg&ÖW2‚GV'VÆ%6VvÖVçG2Â6Æ÷6VB“°  ’òòW‡÷6R–çFW&æÇ0  —F†—2çFævVçG2Òg&ÖW2çFævVçG3° —F†—2ææ÷&ÖÇ2Òg&ÖW2ææ÷&ÖÇ3° —F†—2æ&–æ÷&ÖÇ2Òg&ÖW2æ&–æ÷&ÖÇ3°  ’òò†VÇW"f&–&ÆW0  –6öç7BfW'FW‚ÒæWrfV7F÷#2‚“° –6öç7Bæ÷&ÖÂÒæWrfV7F÷#2‚“° –6öç7BWbÒæWrfV7F÷#"‚“° –ÆWBÒæWrfV7F÷#2‚“°  ’òò'VffW   –6öç7BfW'F–6W2ÒµÓ° –6öç7Bæ÷&ÖÇ2ÒµÓ° –6öç7BWg2ÒµÓ° –6öç7B–æF–6W2ÒµÓ°  ’òò7&VFR'VffW"FF  –vVæW&FT'VffW$FF‚“°  ’òò'V–ÆBvVöÖWG'  —F†—2ç6WD–æFW‚‚–æF–6W2“° —F†—2ç6WDGG&–'WFR‚w÷6—F–öârÂæWrfÆöC3$'VffW$GG&–'WFR‚fW'F–6W2Â2’“° —F†—2ç6WDGG&–'WFR‚væ÷&ÖÂrÂæWrfÆöC3$'VffW$GG&–'WFR‚æ÷&ÖÇ2Â2’“° —F†—2ç6WDGG&–'WFR‚wWbrÂæWrfÆöC3$'VffW$GG&–'WFR‚Wg2Â"’“°  ’òògVæ7F–öç0  –gVæ7F–öâvVæW&FT'VffW$FF‚’°  –f÷"‚ÆWB’Ò²’ÂGV'VÆ%6VvÖVçG3²’²²’°  –vVæW&FU6VvÖVçB‚’“°  —Ð  ’òò–bF†RvVöÖWG'’—2æ÷B6Æ÷6VBÂvVæW&FRF†RÆ7B&÷röbfW'F–6W2æBæ÷&ÖÇ0 ’òòBF†R&VwVÆ"÷6—F–öâöâF†Rv—fVâF€ ’òð ’òò–bF†RvVöÖWG'’—26Æ÷6VBÂGWÆ–6FRF†Rf—'7B&÷röbfW'F–6W2æBæ÷&ÖÇ2‡Wg2v–ÆÂF–ffW"  –vVæW&FU6VvÖVçB‚‚6Æ÷6VBÓÓÒfÇ6R’òGV'VÆ%6VvÖVçG2¢“°  ’òòWg2&RvVæW&FVB–â6W&FRgVæ7F–öâà ’òòF†—2Ö¶W2—BV7’6ö×WFR6÷'&V7BfÇVW2f÷"6Æ÷6VBvVöÖWG&–W0  –vVæW&FUUg2‚“°  ’òòf–æÆÇ’7&VFRf6W0  –vVæW&FT–æF–6W2‚“°  —Ð  –gVæ7F–öâvVæW&FU6VvÖVçB‚’’°  ’òòvRW6RvWEö–çDBFò6×ÆRWfVæÇ’F—7G&–'WFVBö–çG2g&öÒF†Rv—fVâF€  •ÒF‚ævWEö–çDB‚’òGV'VÆ%6VvÖVçG2Â“°  ’òò&WG&–WfR6÷'&W7öæF–æræ÷&ÖÂæB&–æ÷&ÖÀ  –6öç7BâÒg&ÖW2ææ÷&ÖÇ5²’Ó° –6öç7B"Òg&ÖW2æ&–æ÷&ÖÇ5²’Ó°  ’òòvVæW&FRæ÷&ÖÇ2æBfW'F–6W2f÷"F†R7W'&VçB6VvÖVç@  –f÷"‚ÆWB¢Ò²¢ÃÒ&F–Å6VvÖVçG3²¢²²’°  –6öç7BbÒ¢ò&F–Å6VvÖVçG2¢ÖF‚å’¢#°  –6öç7B6–âÒÖF‚ç6–â‚b“° –6öç7B6÷2ÒÒÖF‚æ6÷2‚b“°  ’òòæ÷&ÖÀ  –æ÷&ÖÂç‚Ò‚6÷2¢âç‚²6–â¢"ç‚“° –æ÷&ÖÂç’Ò‚6÷2¢âç’²6–â¢"ç’“° –æ÷&ÖÂç¢Ò‚6÷2¢âç¢²6–â¢"ç¢“° –æ÷&ÖÂææ÷&ÖÆ—¦R‚“°  –æ÷&ÖÇ2çW6‚‚æ÷&ÖÂç‚Âæ÷&ÖÂç’Âæ÷&ÖÂç¢“°  ’òòfW'FW€  —fW'FW‚ç‚Òç‚²&F—W2¢æ÷&ÖÂçƒ° —fW'FW‚ç’Òç’²&F—W2¢æ÷&ÖÂç“° —fW'FW‚ç¢Òç¢²&F—W2¢æ÷&ÖÂç£°  —fW'F–6W2çW6‚‚fW'FW‚ç‚ÂfW'FW‚ç’ÂfW'FW‚ç¢“°  —Ð  —Ð  –gVæ7F–öâvVæW&FT–æF–6W2‚’°  –f÷"‚ÆWB¢Ò²¢ÃÒGV'VÆ%6VvÖVçG3²¢²²’°  –f÷"‚ÆWB’Ò²’ÃÒ&F–Å6VvÖVçG3²’²²’°  –6öç7BÒ‚&F–Å6VvÖVçG2²’¢‚¢Ò’²‚’Ò“° –6öç7B"Ò‚&F–Å6VvÖVçG2²’¢¢²‚’Ò“° –6öç7B2Ò‚&F–Å6VvÖVçG2²’¢¢²“° –6öç7BBÒ‚&F–Å6VvÖVçG2²’¢‚¢Ò’²“°  ’òòf6W0  ––æF–6W2çW6‚‚Â"ÂB“° ––æF–6W2çW6‚‚"Â2ÂB“°  —Ð  —Ð  —Ð  –gVæ7F–öâvVæW&FUUg2‚’°  –f÷"‚ÆWB’Ò²’ÃÒGV'VÆ%6VvÖVçG3²’²²’°  –f÷"‚ÆWB¢Ò²¢ÃÒ&F–Å6VvÖVçG3²¢²²’°  —Wbç‚Ò’òGV'VÆ%6VvÖVçG3° —Wbç’Ò¢ò&F–Å6VvÖVçG3°  —Wg2çW6‚‚Wbç‚ÂWbç’“°  —Ð  —Ð  —Ð  —Ð  –6÷’‚6÷W&6R’°  —7WW"æ6÷’‚6÷W&6R“°  —F†—2ç&ÖWFW'2Òö&¦V7Bæ76–vâ‚·ÒÂ6÷W&6Rç&ÖWFW'2“°  —&WGW&âF†—3°  —Ð  —Fô¥4ôâ‚’°  –6öç7BFFÒ7WW"çFô¥4ôâ‚“°  –FFçF‚ÒF†—2ç&ÖWFW'2çF‚çFô¥4ôâ‚“°  —&WGW&âFF°  —Ð  —7FF–2g&öÔ¥4ôâ‚FF’°  ’òòF†—2öæÇ’v÷&·2f÷"'V–ÇBÖ–â7W'fW2†Rærâ6F×VÆÅ&öÔ7W'fS2’à ’òòW6W"FVf–æVB7W'fW2÷"–ç7Fæ6W2öb7W'fUF‚v–ÆÂæ÷B&RFW6W&–Æ—¦VBà —&WGW&âæWrGV&TvVöÖWG'’€ –æWr7W'fW5²FFçF‚çG—RÒ‚’æg&öÔ¥4ôâ‚FFçF‚’À –FFçGV'VÆ%6VvÖVçG2À –FFç&F—W2À –FFç&F–Å6VvÖVçG2À –FFæ6Æ÷6V@ ’“°  —Ð §Ð ¦6Æ72v—&Vg&ÖTvVöÖWG'’W‡FVæG2'VffW$vVöÖWG'’°  –6öç7G'V7F÷"‚vVöÖWG'’ÒçVÆÂ’°  —7WW"‚“°  —F†—2çG—RÒuv—&Vg&ÖTvVöÖWG'’s°  —F†—2ç&ÖWFW'2Ò° –vVöÖWG'“¢vVöÖWG' —Ó°  ––b‚vVöÖWG'’ÓÒçVÆÂ’°  ’òò'VffW   –6öç7BfW'F–6W2ÒµÓ° –6öç7BVFvW2ÒæWr6WB‚“°  ’òò†VÇW"f&–&ÆW0  –6öç7B7F'BÒæWrfV7F÷#2‚“° –6öç7BVæBÒæWrfV7F÷#2‚“°  ––b‚vVöÖWG'’æ–æFW‚ÓÒçVÆÂ’°  ’òò–æFW†VB'VffW$vVöÖWG'  –6öç7B÷6—F–öâÒvVöÖWG'’æGG&–'WFW2ç÷6—F–öã° –6öç7B–æF–6W2ÒvVöÖWG'’æ–æFWƒ° –ÆWBw&÷W2ÒvVöÖWG'’æw&÷W3°  ––b‚w&÷W2æÆVæwF‚ÓÓÒ’°  –w&÷W2Ò²²7F'C¢Â6÷VçC¢–æF–6W2æ6÷VçBÂÖFW&–Ä–æFWƒ¢ÒÓ°  —Ð  ’òò7&VFRFF7G'V7GW&RF†B6öçF–ç2ÆÂVFvW2v—F†÷WBGWÆ–6FW0  –f÷"‚ÆWBòÒÂöÂÒw&÷W2æÆVæwFƒ²òÂöÃ²²²ò’°  –6öç7Bw&÷WÒw&÷W5²òÓ°  –6öç7Bw&÷W7F'BÒw&÷Wç7F'C° –6öç7Bw&÷W6÷VçBÒw&÷Wæ6÷VçC°  –f÷"‚ÆWB’Òw&÷W7F'BÂÂÒ‚w&÷W7F'B²w&÷W6÷VçB“²’ÂÃ²’³Ò2’°  –f÷"‚ÆWB¢Ò²¢Â3²¢²²’°  –6öç7B–æFWƒÒ–æF–6W2ævWE‚‚’²¢“° –6öç7B–æFWƒ"Ò–æF–6W2ævWE‚‚’²‚¢²’R2“°  —7F'Bæg&öÔ'VffW$GG&–'WFR‚÷6—F–öâÂ–æFWƒ“° –VæBæg&öÔ'VffW$GG&–'WFR‚÷6—F–öâÂ–æFWƒ"“°  ––b‚—5Væ—VTVFvR‚7F'BÂVæBÂVFvW2’ÓÓÒG'VR’°  —fW'F–6W2çW6‚‚7F'Bç‚Â7F'Bç’Â7F'Bç¢“° —fW'F–6W2çW6‚‚VæBç‚ÂVæBç’ÂVæBç¢“°  —Ð  —Ð  —Ð  —Ð  —ÒVÇ6R°  ’òòæöâÖ–æFW†VB'VffW$vVöÖWG'  –6öç7B÷6—F–öâÒvVöÖWG'’æGG&–'WFW2ç÷6—F–öã°  –f÷"‚ÆWB’ÒÂÂÒ‚÷6—F–öâæ6÷VçBò2“²’ÂÃ²’²²’°  –f÷"‚ÆWB¢Ò²¢Â3²¢²²’°  ’òòF‡&VRVFvW2W"G&–ævÆRÂâVFvR—2&W&W6VçFVB2†–æFWƒÂ–æFWƒ" ’òòRærâF†Rf—'7BG&–ævÆR†2F†RföÆÆ÷v–ærVFvW3¢ƒÃ’ÂƒÃ"’Âƒ"Ã  –6öç7B–æFWƒÒ2¢’²£° –6öç7B–æFWƒ"Ò2¢’²‚‚¢²’R2“°  —7F'Bæg&öÔ'VffW$GG&–'WFR‚÷6—F–öâÂ–æFWƒ“° –VæBæg&öÔ'VffW$GG&–'WFR‚÷6—F–öâÂ–æFWƒ"“°  ––b‚—5Væ—VTVFvR‚7F'BÂVæBÂVFvW2’ÓÓÒG'VR’°  —fW'F–6W2çW6‚‚7F'Bç‚Â7F'Bç’Â7F'Bç¢“° —fW'F–6W2çW6‚‚VæBç‚ÂVæBç’ÂVæBç¢“°  —Ð  —Ð  —Ð  —Ð  ’òò'V–ÆBvVöÖWG'  —F†—2ç6WDGG&–'WFR‚w÷6—F–öârÂæWrfÆöC3$'VffW$GG&–'WFR‚fW'F–6W2Â2’“°  —Ð  —Ð  –6÷’‚6÷W&6R’°  —7WW"æ6÷’‚6÷W&6R“°  —F†—2ç&ÖWFW'2Òö&¦V7Bæ76–vâ‚·ÒÂ6÷W&6Rç&ÖWFW'2“°  —&WGW&âF†—3°  —Ð §Ð ¦gVæ7F–öâ—5Væ—VTVFvR‚7F'BÂVæBÂVFvW2’°  –6öç7B†6ƒÒG·7F'Bç‡ÒÂG·7F'Bç—ÒÂG·7F'Bç§ÒÒG¶VæBç‡ÒÂG¶VæBç—ÒÂG¶VæBç§Ö° –6öç7B†6ƒ"ÒG¶VæBç‡ÒÂG¶VæBç—ÒÂG¶VæBç§ÒÒG·7F'Bç‡ÒÂG·7F'Bç—ÒÂG·7F'Bç§Ö²òò6ö–æ6–FVçBVFvP  ––b‚VFvW2æ†2‚†6ƒ’ÓÓÒG'VRÇÂVFvW2æ†2‚†6ƒ"’ÓÓÒG'VR’°  —&WGW&âfÇ6S°  —ÒVÇ6R°  –VFvW2æFB‚†6ƒ“° –VFvW2æFB‚†6ƒ"“° —&WGW&âG'VS°  —Ð §Ð §f"vVöÖWG&–W2Òò¢5õõU$Uõò¢ôö&¦V7Bæg&VW¦R‡° •õ÷&÷Fõõó¢çVÆÂÀ ”&÷„vVöÖWG'“¢&÷„vVöÖWG'’À ”67VÆTvVöÖWG'“¢67VÆTvVöÖWG'’À ”6—&6ÆTvVöÖWG'“¢6—&6ÆTvVöÖWG'’À ”6öæTvVöÖWG'“¢6öæTvVöÖWG'’À ”7–Æ–æFW$vVöÖWG'“¢7–Æ–æFW$vVöÖWG'’À ”FöFV6†VG&öävVöÖWG'“¢FöFV6†VG&öävVöÖWG'’À ”VFvW4vVöÖWG'“¢VFvW4vVöÖWG'’À ”W‡G'VFTvVöÖWG'“¢W‡G'VFTvVöÖWG'’À ”–6÷6†VG&öävVöÖWG'“¢–6÷6†VG&öävVöÖWG'’À ”ÆF†TvVöÖWG'“¢ÆF†TvVöÖWG'’À ”ö7F†VG&öävVöÖWG'“¢ö7F†VG&öävVöÖWG'’À •ÆæTvVöÖWG'“¢ÆæTvVöÖWG'’À •öÇ–†VG&öävVöÖWG'“¢öÇ–†VG&öävVöÖWG'’À •&–ætvVöÖWG'“¢&–ætvVöÖWG'’À •6†TvVöÖWG'“¢6†TvVöÖWG'’À •7†W&TvVöÖWG'“¢7†W&TvVöÖWG'’À •FWG&†VG&öävVöÖWG'“¢FWG&†VG&öävVöÖWG'’À •F÷'W4vVöÖWG'“¢F÷'W4vVöÖWG'’À •F÷'W4¶æ÷DvVöÖWG'“¢F÷'W4¶æ÷DvVöÖWG'’À •GV&TvVöÖWG'“¢GV&TvVöÖWG'’À •v—&Vg&ÖTvVöÖWG'“¢v—&Vg&ÖTvVöÖWG'§Ò“° ¦6Æ726†F÷tÖFW&–ÂW‡FVæG2ÖFW&–Â°  –6öç7G'V7F÷"‚&ÖWFW'2’°  —7WW"‚“°  —F†—2æ—56†F÷tÖFW&–ÂÒG'VS°  —F†—2çG—RÒu6†F÷tÖFW&–Âs°  —F†—2æ6öÆ÷"ÒæWr6öÆ÷"‚ƒ“° —F†—2çG&ç7&VçBÒG'VS°  —F†—2æförÒG'VS°  —F†—2ç6WEfÇVW2‚&ÖWFW'2“°  —Ð  –6÷’‚6÷W&6R’°  —7WW"æ6÷’‚6÷W&6R“°  —F†—2æ6öÆ÷"æ6÷’‚6÷W&6Ræ6öÆ÷"“°  —F†—2æförÒ6÷W&6Ræfös°  —&WGW&âF†—3°  —Ð §Ð ¦6Æ72&u6†FW$ÖFW&–ÂW‡FVæG26†FW$ÖFW&–Â°  –6öç7G'V7F÷"‚&ÖWFW'2’°  —7WW"‚&ÖWFW'2“°  —F†—2æ—5&u6†FW$ÖFW&–ÂÒG'VS°  —F†—2çG—RÒu&u6†FW$ÖFW&–Âs°  —Ð §Ð ¦6Æ72ÖW6…7FæF&DÖFW&–ÂW‡FVæG2ÖFW&–Â°  –6öç7G'V7F÷"‚&ÖWFW'2’°  —7WW"‚“°  —F†—2æ—4ÖW6…7FæF&DÖFW&–ÂÒG'VS°  —F†—2æFVf–æW2Ò²u5DäD$Bs¢rrÓ°  —F†—2çG—RÒtÖW6…7FæF&DÖFW&–Âs°  —F†—2æ6öÆ÷"ÒæWr6öÆ÷"‚†fffffb“²òòF–fgW6P —F†—2ç&÷Vv†æW72Òã° —F†—2æÖWFÆæW72Òã°  —F†—2æÖÒçVÆÃ°  —F†—2æÆ–v‡DÖÒçVÆÃ° —F†—2æÆ–v‡DÖ–çFVç6—G’Òã°  —F†—2æôÖÒçVÆÃ° —F†—2æôÖ–çFVç6—G’Òã°  —F†—2æVÖ—76—fRÒæWr6öÆ÷"‚ƒ“° —F†—2æVÖ—76—fT–çFVç6—G’Òã° —F†—2æVÖ—76—fTÖÒçVÆÃ°  —F†—2æ'V×ÖÒçVÆÃ° —F†—2æ'V×66ÆRÒ°  —F†—2ææ÷&ÖÄÖÒçVÆÃ° —F†—2ææ÷&ÖÄÖG—RÒFævVçE76Tæ÷&ÖÄÖ° —F†—2ææ÷&ÖÅ66ÆRÒæWrfV7F÷#"‚Â“°  —F†—2æF—7Æ6VÖVçDÖÒçVÆÃ° —F†—2æF—7Æ6VÖVçE66ÆRÒ° —F†—2æF—7Æ6VÖVçD&–2Ò°  —F†—2ç&÷Vv†æW74ÖÒçVÆÃ°  —F†—2æÖWFÆæW74ÖÒçVÆÃ°  —F†—2æÇ†ÖÒçVÆÃ°  —F†—2æVçdÖÒçVÆÃ° —F†—2æVçdÖ&÷FF–öâÒæWrWVÆW"‚“° —F†—2æVçdÖ–çFVç6—G’Òã°  —F†—2çv—&Vg&ÖRÒfÇ6S° —F†—2çv—&Vg&ÖTÆ–æWv–GF‚Ò° —F†—2çv—&Vg&ÖTÆ–æV6Òw&÷VæBs° —F†—2çv—&Vg&ÖTÆ–æV¦ö–âÒw&÷VæBs°  —F†—2æfÆE6†F–ærÒfÇ6S°  —F†—2æförÒG'VS°  —F†—2ç6WEfÇVW2‚&ÖWFW'2“°  —Ð  –6÷’‚6÷W&6R’°  —7WW"æ6÷’‚6÷W&6R“°  —F†—2æFVf–æW2Ò²u5DäD$Bs¢rrÓ°  —F†—2æ6öÆ÷"æ6÷’‚6÷W&6Ræ6öÆ÷"“° —F†—2ç&÷Vv†æW72Ò6÷W&6Rç&÷Vv†æW73° —F†—2æÖWFÆæW72Ò6÷W&6RæÖWFÆæW73°  —F†—2æÖÒ6÷W&6RæÖ°  —F†—2æÆ–v‡DÖÒ6÷W&6RæÆ–v‡DÖ° —F†—2æÆ–v‡DÖ–çFVç6—G’Ò6÷W&6RæÆ–v‡DÖ–çFVç6—G“°  —F†—2æôÖÒ6÷W&6RæôÖ° —F†—2æôÖ–çFVç6—G’Ò6÷W&6RæôÖ–çFVç6—G“°  —F†—2æVÖ—76—fRæ6÷’‚6÷W&6RæVÖ—76—fR“° —F†—2æVÖ—76—fTÖÒ6÷W&6RæVÖ—76—fTÖ° —F†—2æVÖ—76—fT–çFVç6—G’Ò6÷W&6RæVÖ—76—fT–çFVç6—G“°  —F†—2æ'V×ÖÒ6÷W&6Ræ'V×Ö° —F†—2æ'V×66ÆRÒ6÷W&6Ræ'V×66ÆS°  —F†—2ææ÷&ÖÄÖÒ6÷W&6Rææ÷&ÖÄÖ° —F†—2ææ÷&ÖÄÖG—RÒ6÷W&6Rææ÷&ÖÄÖG—S° —F†—2ææ÷&ÖÅ66ÆRæ6÷’‚6÷W&6Rææ÷&ÖÅ66ÆR“°  —F†—2æF—7Æ6VÖVçDÖÒ6÷W&6RæF—7Æ6VÖVçDÖ° —F†—2æF—7Æ6VÖVçE66ÆRÒ6÷W&6RæF—7Æ6VÖVçE66ÆS° —F†—2æF—7Æ6VÖVçD&–2Ò6÷W&6RæF—7Æ6VÖVçD&–3°  —F†—2ç&÷Vv†æW74ÖÒ6÷W&6Rç&÷Vv†æW74Ö°  —F†—2æÖWFÆæW74ÖÒ6÷W&6RæÖWFÆæW74Ö°  —F†—2æÇ†ÖÒ6÷W&6RæÇ†Ö°  —F†—2æVçdÖÒ6÷W&6RæVçdÖ° —F†—2æVçdÖ&÷FF–öâæ6÷’‚6÷W&6RæVçdÖ&÷FF–öâ“° —F†—2æVçdÖ–çFVç6—G’Ò6÷W&6RæVçdÖ–çFVç6—G“°  —F†—2çv—&Vg&ÖRÒ6÷W&6Rçv—&Vg&ÖS° —F†—2çv—&Vg&ÖTÆ–æWv–GF‚Ò6÷W&6Rçv—&Vg&ÖTÆ–æWv–GFƒ° —F†—2çv—&Vg&ÖTÆ–æV6Ò6÷W&6Rçv—&Vg&ÖTÆ–æV6° —F†—2çv—&Vg&ÖTÆ–æV¦ö–âÒ6÷W&6Rçv—&Vg&ÖTÆ–æV¦ö–ã°  —F†—2æfÆE6†F–ærÒ6÷W&6RæfÆE6†F–æs°  —F†—2æförÒ6÷W&6Ræfös°  —&WGW&âF†—3°  —Ð §Ð ¦6Æ72ÖW6…‡—6–6ÄÖFW&–ÂW‡FVæG2ÖW6…7FæF&DÖFW&–Â°  –6öç7G'V7F÷"‚&ÖWFW'2’°  —7WW"‚“°  —F†—2æ—4ÖW6…‡—6–6ÄÖFW&–ÂÒG'VS°  —F†—2æFVf–æW2Ò°  ’u5DäD$Bs¢rrÀ ’u…•4”4Âs¢rp  —Ó°  —F†—2çG—RÒtÖW6…‡—6–6ÄÖFW&–Âs°  —F†—2ææ—6÷G&÷•&÷FF–öâÒ° —F†—2ææ—6÷G&÷”ÖÒçVÆÃ°  —F†—2æ6ÆV&6öDÖÒçVÆÃ° —F†—2æ6ÆV&6öE&÷Vv†æW72Òã° —F†—2æ6ÆV&6öE&÷Vv†æW74ÖÒçVÆÃ° —F†—2æ6ÆV&6öDæ÷&ÖÅ66ÆRÒæWrfV7F÷#"‚Â“° —F†—2æ6ÆV&6öDæ÷&ÖÄÖÒçVÆÃ°  —F†—2æ–÷"ÒãS°  ”ö&¦V7BæFVf–æU&÷W'G’‚F†—2Âw&VfÆV7F—f—G’rÂ° –vWC¢gVæ7F–öâ‚’°  —&WGW&â‚6Æ×‚"ãR¢‚F†—2æ–÷"Ò’ò‚F†—2æ–÷"²’ÂÂ’“°  —ÒÀ —6WC¢gVæ7F–öâ‚&VfÆV7F—f—G’’°  —F†—2æ–÷"Ò‚²ãB¢&VfÆV7F—f—G’’ò‚ÒãB¢&VfÆV7F—f—G’“°  —Ð —Ò“°  —F†—2æ—&–FW66Væ6TÖÒçVÆÃ° —F†—2æ—&–FW66Væ6T”õ"Òã3° —F†—2æ—&–FW66Væ6UF†–6¶æW75&ævRÒ²ÂCÓ° —F†—2æ—&–FW66Væ6UF†–6¶æW74ÖÒçVÆÃ°  —F†—2ç6†VVä6öÆ÷"ÒæWr6öÆ÷"‚ƒ“° —F†—2ç6†VVä6öÆ÷$ÖÒçVÆÃ° —F†—2ç6†VVå&÷Vv†æW72Òã° —F†—2ç6†VVå&÷Vv†æW74ÖÒçVÆÃ°  —F†—2çG&ç6Ö—76–öäÖÒçVÆÃ°  —F†—2çF†–6¶æW72Ò° —F†—2çF†–6¶æW74ÖÒçVÆÃ° —F†—2æGFVçVF–öäF—7Fæ6RÒ–æf–æ—G“° —F†—2æGFVçVF–öä6öÆ÷"ÒæWr6öÆ÷"‚ÂÂ“°  —F†—2ç7V7VÆ$–çFVç6—G’Òã° —F†—2ç7V7VÆ$–çFVç6—G”ÖÒçVÆÃ° —F†—2ç7V7VÆ$6öÆ÷"ÒæWr6öÆ÷"‚ÂÂ“° —F†—2ç7V7VÆ$6öÆ÷$ÖÒçVÆÃ°  —F†—2åöæ—6÷G&÷’Ò° —F†—2åö6ÆV&6öBÒ° —F†—2åöF—7W'6–öâÒ° —F†—2åö—&–FW66Væ6RÒ° —F†—2å÷6†VVâÒã° —F†—2å÷G&ç6Ö—76–öâÒ°  —F†—2ç6WEfÇVW2‚&ÖWFW'2“°  —Ð  –vWBæ—6÷G&÷’‚’°  —&WGW&âF†—2åöæ—6÷G&÷“°  —Ð  —6WBæ—6÷G&÷’‚fÇVR’°  ––b‚F†—2åöæ—6÷G&÷’âÓÒfÇVRâ’°  —F†—2çfW'6–öâ²³°  —Ð  —F†—2åöæ—6÷G&÷’ÒfÇVS°  —Ð  –vWB6ÆV&6öB‚’°  —&WGW&âF†—2åö6ÆV&6öC°  —Ð  —6WB6ÆV&6öB‚fÇVR’°  ––b‚F†—2åö6ÆV&6öBâÓÒfÇVRâ’°  —F†—2çfW'6–öâ²³°  —Ð  —F†—2åö6ÆV&6öBÒfÇVS°  —Ð  –vWB—&–FW66Væ6R‚’°  —&WGW&âF†—2åö—&–FW66Væ6S°  —Ð  —6WB—&–FW66Væ6R‚fÇVR’°  ––b‚F†—2åö—&–FW66Væ6RâÓÒfÇVRâ’°  —F†—2çfW'6–öâ²³°  —Ð  —F†—2åö—&–FW66Væ6RÒfÇVS°  —Ð  –vWBF—7W'6–öâ‚’°  —&WGW&âF†—2åöF—7W'6–öã°  —Ð  —6WBF—7W'6–öâ‚fÇVR’°  ––b‚F†—2åöF—7W'6–öââÓÒfÇVRâ’°  —F†—2çfW'6–öâ²³°  —Ð  —F†—2åöF—7W'6–öâÒfÇVS°  —Ð  –vWB6†VVâ‚’°  —&WGW&âF†—2å÷6†VVã°  —Ð  —6WB6†VVâ‚fÇVR’°  ––b‚F†—2å÷6†VVââÓÒfÇVRâ’°  —F†—2çfW'6–öâ²³°  —Ð  —F†—2å÷6†VVâÒfÇVS°  —Ð  –vWBG&ç6Ö—76–öâ‚’°  —&WGW&âF†—2å÷G&ç6Ö—76–öã°  —Ð  —6WBG&ç6Ö—76–öâ‚fÇVR’°  ––b‚F†—2å÷G&ç6Ö—76–öââÓÒfÇVRâ’°  —F†—2çfW'6–öâ²³°  —Ð  —F†—2å÷G&ç6Ö—76–öâÒfÇVS°  —Ð  –6÷’‚6÷W&6R’°  —7WW"æ6÷’‚6÷W&6R“°  —F†—2æFVf–æW2Ò°  ’u5DäD$Bs¢rrÀ ’u…•4”4Âs¢rp  —Ó°  —F†—2ææ—6÷G&÷’Ò6÷W&6Rææ—6÷G&÷“° —F†—2ææ—6÷G&÷•&÷FF–öâÒ6÷W&6Rææ—6÷G&÷•&÷FF–öã° —F†—2ææ—6÷G&÷”ÖÒ6÷W&6Rææ—6÷G&÷”Ö°  —F†—2æ6ÆV&6öBÒ6÷W&6Ræ6ÆV&6öC° —F†—2æ6ÆV&6öDÖÒ6÷W&6Ræ6ÆV&6öDÖ° —F†—2æ6ÆV&6öE&÷Vv†æW72Ò6÷W&6Ræ6ÆV&6öE&÷Vv†æW73° —F†—2æ6ÆV&6öE&÷Vv†æW74ÖÒ6÷W&6Ræ6ÆV&6öE&÷Vv†æW74Ö° —F†—2æ6ÆV&6öDæ÷&ÖÄÖÒ6÷W&6Ræ6ÆV&6öDæ÷&ÖÄÖ° —F†—2æ6ÆV&6öDæ÷&ÖÅ66ÆRæ6÷’‚6÷W&6Ræ6ÆV&6öDæ÷&ÖÅ66ÆR“°  —F†—2æF—7W'6–öâÒ6÷W&6RæF—7W'6–öã° —F†—2æ–÷"Ò6÷W&6Ræ–÷#°  —F†—2æ—&–FW66Væ6RÒ6÷W&6Ræ—&–FW66Væ6S° —F†—2æ—&–FW66Væ6TÖÒ6÷W&6Ræ—&–FW66Væ6TÖ° —F†—2æ—&–FW66Væ6T”õ"Ò6÷W&6Ræ—&–FW66Væ6T”õ#° —F†—2æ—&–FW66Væ6UF†–6¶æW75&ævRÒ²ââç6÷W&6Ræ—&–FW66Væ6UF†–6¶æW75&ævRÓ° —F†—2æ—&–FW66Væ6UF†–6¶æW74ÖÒ6÷W&6Ræ—&–FW66Væ6UF†–6¶æW74Ö°  —F†—2ç6†VVâÒ6÷W&6Rç6†VVã° —F†—2ç6†VVä6öÆ÷"æ6÷’‚6÷W&6Rç6†VVä6öÆ÷"“° —F†—2ç6†VVä6öÆ÷$ÖÒ6÷W&6Rç6†VVä6öÆ÷$Ö° —F†—2ç6†VVå&÷Vv†æW72Ò6÷W&6Rç6†VVå&÷Vv†æW73° —F†—2ç6†VVå&÷Vv†æW74ÖÒ6÷W&6Rç6†VVå&÷Vv†æW74Ö°  —F†—2çG&ç6Ö—76–öâÒ6÷W&6RçG&ç6Ö—76–öã° —F†—2çG&ç6Ö—76–öäÖÒ6÷W&6RçG&ç6Ö—76–öäÖ°  —F†—2çF†–6¶æW72Ò6÷W&6RçF†–6¶æW73° —F†—2çF†–6¶æW74ÖÒ6÷W&6RçF†–6¶æW74Ö° —F†—2æGFVçVF–öäF—7Fæ6RÒ6÷W&6RæGFVçVF–öäF—7Fæ6S° —F†—2æGFVçVF–öä6öÆ÷"æ6÷’‚6÷W&6RæGFVçVF–öä6öÆ÷"“°  —F†—2ç7V7VÆ$–çFVç6—G’Ò6÷W&6Rç7V7VÆ$–çFVç6—G“° —F†—2ç7V7VÆ$–çFVç6—G”ÖÒ6÷W&6Rç7V7VÆ$–çFVç6—G”Ö° —F†—2ç7V7VÆ$6öÆ÷"æ6÷’‚6÷W&6Rç7V7VÆ$6öÆ÷"“° —F†—2ç7V7VÆ$6öÆ÷$ÖÒ6÷W&6Rç7V7VÆ$6öÆ÷$Ö°  —&WGW&âF†—3°  —Ð §Ð ¦6Æ72ÖW6…†öætÖFW&–ÂW‡FVæG2ÖFW&–Â°  –6öç7G'V7F÷"‚&ÖWFW'2’°  —7WW"‚“°  —F†—2æ—4ÖW6…†öætÖFW&–ÂÒG'VS°  —F†—2çG—RÒtÖW6…†öætÖFW&–Âs°  —F†—2æ6öÆ÷"ÒæWr6öÆ÷"‚†fffffb“²òòF–fgW6P —F†—2ç7V7VÆ"ÒæWr6öÆ÷"‚ƒ“° —F†—2ç6†–æ–æW72Ò3°  —F†—2æÖÒçVÆÃ°  —F†—2æÆ–v‡DÖÒçVÆÃ° —F†—2æÆ–v‡DÖ–çFVç6—G’Òã°  —F†—2æôÖÒçVÆÃ° —F†—2æôÖ–çFVç6—G’Òã°  —F†—2æVÖ—76—fRÒæWr6öÆ÷"‚ƒ“° —F†—2æVÖ—76—fT–çFVç6—G’Òã° —F†—2æVÖ—76—fTÖÒçVÆÃ°  —F†—2æ'V×ÖÒçVÆÃ° —F†—2æ'V×66ÆRÒ°  —F†—2ææ÷&ÖÄÖÒçVÆÃ° —F†—2ææ÷&ÖÄÖG—RÒFævVçE76Tæ÷&ÖÄÖ° —F†—2ææ÷&ÖÅ66ÆRÒæWrfV7F÷#"‚Â“°  —F†—2æF—7Æ6VÖVçDÖÒçVÆÃ° —F†—2æF—7Æ6VÖVçE66ÆRÒ° —F†—2æF—7Æ6VÖVçD&–2Ò°  —F†—2ç7V7VÆ$ÖÒçVÆÃ°  —F†—2æÇ†ÖÒçVÆÃ°  —F†—2æVçdÖÒçVÆÃ° —F†—2æVçdÖ&÷FF–öâÒæWrWVÆW"‚“° —F†—2æ6öÖ&–æRÒ×VÇF—Ç”÷W&F–öã° —F†—2ç&VfÆV7F—f—G’Ò° —F†—2ç&Vg&7F–öå&F–òÒã“ƒ°  —F†—2çv—&Vg&ÖRÒfÇ6S° —F†—2çv—&Vg&ÖTÆ–æWv–GF‚Ò° —F†—2çv—&Vg&ÖTÆ–æV6Òw&÷VæBs° —F†—2çv—&Vg&ÖTÆ–æV¦ö–âÒw&÷VæBs°  —F†—2æfÆE6†F–ærÒfÇ6S°  —F†—2æförÒG'VS°  —F†—2ç6WEfÇVW2‚&ÖWFW'2“°  —Ð  –6÷’‚6÷W&6R’°  —7WW"æ6÷’‚6÷W&6R“°  —F†—2æ6öÆ÷"æ6÷’‚6÷W&6Ræ6öÆ÷"“° —F†—2ç7V7VÆ"æ6÷’‚6÷W&6Rç7V7VÆ"“° —F†—2ç6†–æ–æW72Ò6÷W&6Rç6†–æ–æW73°  —F†—2æÖÒ6÷W&6RæÖ°  —F†—2æÆ–v‡DÖÒ6÷W&6RæÆ–v‡DÖ° —F†—2æÆ–v‡DÖ–çFVç6—G’Ò6÷W&6RæÆ–v‡DÖ–çFVç6—G“°  —F†—2æôÖÒ6÷W&6RæôÖ° —F†—2æôÖ–çFVç6—G’Ò6÷W&6RæôÖ–çFVç6—G“°  —F†—2æVÖ—76—fRæ6÷’‚6÷W&6RæVÖ—76—fR“° —F†—2æVÖ—76—fTÖÒ6÷W&6RæVÖ—76—fTÖ° —F†—2æVÖ—76—fT–çFVç6—G’Ò6÷W&6RæVÖ—76—fT–çFVç6—G“°  —F†—2æ'V×ÖÒ6÷W&6Ræ'V×Ö° —F†—2æ'V×66ÆRÒ6÷W&6Ræ'V×66ÆS°  —F†—2ææ÷&ÖÄÖÒ6÷W&6Rææ÷&ÖÄÖ° —F†—2ææ÷&ÖÄÖG—RÒ6÷W&6Rææ÷&ÖÄÖG—S° —F†—2ææ÷&ÖÅ66ÆRæ6÷’‚6÷W&6Rææ÷&ÖÅ66ÆR“°  —F†—2æF—7Æ6VÖVçDÖÒ6÷W&6RæF—7Æ6VÖVçDÖ° —F†—2æF—7Æ6VÖVçE66ÆRÒ6÷W&6RæF—7Æ6VÖVçE66ÆS° —F†—2æF—7Æ6VÖVçD&–2Ò6÷W&6RæF—7Æ6VÖVçD&–3°  —F†—2ç7V7VÆ$ÖÒ6÷W&6Rç7V7VÆ$Ö°  —F†—2æÇ†ÖÒ6÷W&6RæÇ†Ö°  —F†—2æVçdÖÒ6÷W&6RæVçdÖ° —F†—2æVçdÖ&÷FF–öâæ6÷’‚6÷W&6RæVçdÖ&÷FF–öâ“° —F†—2æ6öÖ&–æRÒ6÷W&6Ræ6öÖ&–æS° —F†—2ç&VfÆV7F—f—G’Ò6÷W&6Rç&VfÆV7F—f—G“° —F†—2ç&Vg&7F–öå&F–òÒ6÷W&6Rç&Vg&7F–öå&F–ó°  —F†—2çv—&Vg&ÖRÒ6÷W&6Rçv—&Vg&ÖS° —F†—2çv—&Vg&ÖTÆ–æWv–GF‚Ò6÷W&6Rçv—&Vg&ÖTÆ–æWv–GFƒ° —F†—2çv—&Vg&ÖTÆ–æV6Ò6÷W&6Rçv—&Vg&ÖTÆ–æV6° —F†—2çv—&Vg&ÖTÆ–æV¦ö–âÒ6÷W&6Rçv—&Vg&ÖTÆ–æV¦ö–ã°  —F†—2æfÆE6†F–ærÒ6÷W&6RæfÆE6†F–æs°  —F†—2æförÒ6÷W&6Ræfös°  —&WGW&âF†—3°  —Ð §Ð ¦6Æ72ÖW6…FööäÖFW&–ÂW‡FVæG2ÖFW&–Â°  –6öç7G'V7F÷"‚&ÖWFW'2’°  —7WW"‚“°  —F†—2æ—4ÖW6…FööäÖFW&–ÂÒG'VS°  —F†—2æFVf–æW2Ò²uDôôâs¢rrÓ°  —F†—2çG—RÒtÖW6…FööäÖFW&–Âs°  —F†—2æ6öÆ÷"ÒæWr6öÆ÷"‚†fffffb“°  —F†—2æÖÒçVÆÃ° —F†—2æw&F–VçDÖÒçVÆÃ°  —F†—2æÆ–v‡DÖÒçVÆÃ° —F†—2æÆ–v‡DÖ–çFVç6—G’Òã°  —F†—2æôÖÒçVÆÃ° —F†—2æôÖ–çFVç6—G’Òã°  —F†—2æVÖ—76—fRÒæWr6öÆ÷"‚ƒ“° —F†—2æVÖ—76—fT–çFVç6—G’Òã° —F†—2æVÖ—76—fTÖÒçVÆÃ°  —F†—2æ'V×ÖÒçVÆÃ° —F†—2æ'V×66ÆRÒ°  —F†—2ææ÷&ÖÄÖÒçVÆÃ° —F†—2ææ÷&ÖÄÖG—RÒFævVçE76Tæ÷&ÖÄÖ° —F†—2ææ÷&ÖÅ66ÆRÒæWrfV7F÷#"‚Â“°  —F†—2æF—7Æ6VÖVçDÖÒçVÆÃ° —F†—2æF—7Æ6VÖVçE66ÆRÒ° —F†—2æF—7Æ6VÖVçD&–2Ò°  —F†—2æÇ†ÖÒçVÆÃ°  —F†—2çv—&Vg&ÖRÒfÇ6S° —F†—2çv—&Vg&ÖTÆ–æWv–GF‚Ò° —F†—2çv—&Vg&ÖTÆ–æV6Òw&÷VæBs° —F†—2çv—&Vg&ÖTÆ–æV¦ö–âÒw&÷VæBs°  —F†—2æförÒG'VS°  —F†—2ç6WEfÇVW2‚&ÖWFW'2“°  —Ð  –6÷’‚6÷W&6R’°  —7WW"æ6÷’‚6÷W&6R“°  —F†—2æ6öÆ÷"æ6÷’‚6÷W&6Ræ6öÆ÷"“°  —F†—2æÖÒ6÷W&6RæÖ° —F†—2æw&F–VçDÖÒ6÷W&6Ræw&F–VçDÖ°  —F†—2æÆ–v‡DÖÒ6÷W&6RæÆ–v‡DÖ° —F†—2æÆ–v‡DÖ–çFVç6—G’Ò6÷W&6RæÆ–v‡DÖ–çFVç6—G“°  —F†—2æôÖÒ6÷W&6RæôÖ° —F†—2æôÖ–çFVç6—G’Ò6÷W&6RæôÖ–çFVç6—G“°  —F†—2æVÖ—76—fRæ6÷’‚6÷W&6RæVÖ—76—fR“° —F†—2æVÖ—76—fTÖÒ6÷W&6RæVÖ—76—fTÖ° —F†—2æVÖ—76—fT–çFVç6—G’Ò6÷W&6RæVÖ—76—fT–çFVç6—G“°  —F†—2æ'V×ÖÒ6÷W&6Ræ'V×Ö° —F†—2æ'V×66ÆRÒ6÷W&6Ræ'V×66ÆS°  —F†—2ææ÷&ÖÄÖÒ6÷W&6Rææ÷&ÖÄÖ° —F†—2ææ÷&ÖÄÖG—RÒ6÷W&6Rææ÷&ÖÄÖG—S° —F†—2ææ÷&ÖÅ66ÆRæ6÷’‚6÷W&6Rææ÷&ÖÅ66ÆR“°  —F†—2æF—7Æ6VÖVçDÖÒ6÷W&6RæF—7Æ6VÖVçDÖ° —F†—2æF—7Æ6VÖVçE66ÆRÒ6÷W&6RæF—7Æ6VÖVçE66ÆS° —F†—2æF—7Æ6VÖVçD&–2Ò6÷W&6RæF—7Æ6VÖVçD&–3°  —F†—2æÇ†ÖÒ6÷W&6RæÇ†Ö°  —F†—2çv—&Vg&ÖRÒ6÷W&6Rçv—&Vg&ÖS° —F†—2çv—&Vg&ÖTÆ–æWv–GF‚Ò6÷W&6Rçv—&Vg&ÖTÆ–æWv–GFƒ° —F†—2çv—&Vg&ÖTÆ–æV6Ò6÷W&6Rçv—&Vg&ÖTÆ–æV6° —F†—2çv—&Vg&ÖTÆ–æV¦ö–âÒ6÷W&6Rçv—&Vg&ÖTÆ–æV¦ö–ã°  —F†—2æförÒ6÷W&6Ræfös°  —&WGW&âF†—3°  —Ð §Ð ¦6Æ72ÖW6„æ÷&ÖÄÖFW&–ÂW‡FVæG2ÖFW&–Â°  –6öç7G'V7F÷"‚&ÖWFW'2’°  —7WW"‚“°  —F†—2æ—4ÖW6„æ÷&ÖÄÖFW&–ÂÒG'VS°  —F†—2çG—RÒtÖW6„æ÷&ÖÄÖFW&–Âs°  —F†—2æ'V×ÖÒçVÆÃ° —F†—2æ'V×66ÆRÒ°  —F†—2ææ÷&ÖÄÖÒçVÆÃ° —F†—2ææ÷&ÖÄÖG—RÒFævVçE76Tæ÷&ÖÄÖ° —F†—2ææ÷&ÖÅ66ÆRÒæWrfV7F÷#"‚Â“°  —F†—2æF—7Æ6VÖVçDÖÒçVÆÃ° —F†—2æF—7Æ6VÖVçE66ÆRÒ° —F†—2æF—7Æ6VÖVçD&–2Ò°  —F†—2çv—&Vg&ÖRÒfÇ6S° —F†—2çv—&Vg&ÖTÆ–æWv–GF‚Ò°  —F†—2æfÆE6†F–ærÒfÇ6S°  —F†—2ç6WEfÇVW2‚&ÖWFW'2“°  —Ð  –6÷’‚6÷W&6R’°  —7WW"æ6÷’‚6÷W&6R“°  —F†—2æ'V×ÖÒ6÷W&6Ræ'V×Ö° —F†—2æ'V×66ÆRÒ6÷W&6Ræ'V×66ÆS°  —F†—2ææ÷&ÖÄÖÒ6÷W&6Rææ÷&ÖÄÖ° —F†—2ææ÷&ÖÄÖG—RÒ6÷W&6Rææ÷&ÖÄÖG—S° —F†—2ææ÷&ÖÅ66ÆRæ6÷’‚6÷W&6Rææ÷&ÖÅ66ÆR“°  —F†—2æF—7Æ6VÖVçDÖÒ6÷W&6RæF—7Æ6VÖVçDÖ° —F†—2æF—7Æ6VÖVçE66ÆRÒ6÷W&6RæF—7Æ6VÖVçE66ÆS° —F†—2æF—7Æ6VÖVçD&–2Ò6÷W&6RæF—7Æ6VÖVçD&–3°  —F†—2çv—&Vg&ÖRÒ6÷W&6Rçv—&Vg&ÖS° —F†—2çv—&Vg&ÖTÆ–æWv–GF‚Ò6÷W&6Rçv—&Vg&ÖTÆ–æWv–GFƒ°  —F†—2æfÆE6†F–ærÒ6÷W&6RæfÆE6†F–æs°  —&WGW&âF†—3°  —Ð §Ð ¦6Æ72ÖW6„ÆÖ&W'DÖFW&–ÂW‡FVæG2ÖFW&–Â°  –6öç7G'V7F÷"‚&ÖWFW'2’°  —7WW"‚“°  —F†—2æ—4ÖW6„ÆÖ&W'DÖFW&–ÂÒG'VS°  —F†—2çG—RÒtÖW6„ÆÖ&W'DÖFW&–Âs°  —F†—2æ6öÆ÷"ÒæWr6öÆ÷"‚†fffffb“²òòF–fgW6P  —F†—2æÖÒçVÆÃ°  —F†—2æÆ–v‡DÖÒçVÆÃ° —F†—2æÆ–v‡DÖ–çFVç6—G’Òã°  —F†—2æôÖÒçVÆÃ° —F†—2æôÖ–çFVç6—G’Òã°  —F†—2æVÖ—76—fRÒæWr6öÆ÷"‚ƒ“° —F†—2æVÖ—76—fT–çFVç6—G’Òã° —F†—2æVÖ—76—fTÖÒçVÆÃ°  —F†—2æ'V×ÖÒçVÆÃ° —F†—2æ'V×66ÆRÒ°  —F†—2ææ÷&ÖÄÖÒçVÆÃ° —F†—2ææ÷&ÖÄÖG—RÒFævVçE76Tæ÷&ÖÄÖ° —F†—2ææ÷&ÖÅ66ÆRÒæWrfV7F÷#"‚Â“°  —F†—2æF—7Æ6VÖVçDÖÒçVÆÃ° —F†—2æF—7Æ6VÖVçE66ÆRÒ° —F†—2æF—7Æ6VÖVçD&–2Ò°  —F†—2ç7V7VÆ$ÖÒçVÆÃ°  —F†—2æÇ†ÖÒçVÆÃ°  —F†—2æVçdÖÒçVÆÃ° —F†—2æVçdÖ&÷FF–öâÒæWrWVÆW"‚“° —F†—2æ6öÖ&–æRÒ×VÇF—Ç”÷W&F–öã° —F†—2ç&VfÆV7F—f—G’Ò° —F†—2ç&Vg&7F–öå&F–òÒã“ƒ°  —F†—2çv—&Vg&ÖRÒfÇ6S° —F†—2çv—&Vg&ÖTÆ–æWv–GF‚Ò° —F†—2çv—&Vg&ÖTÆ–æV6Òw&÷VæBs° —F†—2çv—&Vg&ÖTÆ–æV¦ö–âÒw&÷VæBs°  —F†—2æfÆE6†F–ærÒfÇ6S°  —F†—2æförÒG'VS°  —F†—2ç6WEfÇVW2‚&ÖWFW'2“°  —Ð  –6÷’‚6÷W&6R’°  —7WW"æ6÷’‚6÷W&6R“°  —F†—2æ6öÆ÷"æ6÷’‚6÷W&6Ræ6öÆ÷"“°  —F†—2æÖÒ6÷W&6RæÖ°  —F†—2æÆ–v‡DÖÒ6÷W&6RæÆ–v‡DÖ° —F†—2æÆ–v‡DÖ–çFVç6—G’Ò6÷W&6RæÆ–v‡DÖ–çFVç6—G“°  —F†—2æôÖÒ6÷W&6RæôÖ° —F†—2æôÖ–çFVç6—G’Ò6÷W&6RæôÖ–çFVç6—G“°  —F†—2æVÖ—76—fRæ6÷’‚6÷W&6RæVÖ—76—fR“° —F†—2æVÖ—76—fTÖÒ6÷W&6RæVÖ—76—fTÖ° —F†—2æVÖ—76—fT–çFVç6—G’Ò6÷W&6RæVÖ—76—fT–çFVç6—G“°  —F†—2æ'V×ÖÒ6÷W&6Ræ'V×Ö° —F†—2æ'V×66ÆRÒ6÷W&6Ræ'V×66ÆS°  —F†—2ææ÷&ÖÄÖÒ6÷W&6Rææ÷&ÖÄÖ° —F†—2ææ÷&ÖÄÖG—RÒ6÷W&6Rææ÷&ÖÄÖG—S° —F†—2ææ÷&ÖÅ66ÆRæ6÷’‚6÷W&6Rææ÷&ÖÅ66ÆR“°  —F†—2æF—7Æ6VÖVçDÖÒ6÷W&6RæF—7Æ6VÖVçDÖ° —F†—2æF—7Æ6VÖVçE66ÆRÒ6÷W&6RæF—7Æ6VÖVçE66ÆS° —F†—2æF—7Æ6VÖVçD&–2Ò6÷W&6RæF—7Æ6VÖVçD&–3°  —F†—2ç7V7VÆ$ÖÒ6÷W&6Rç7V7VÆ$Ö°  —F†—2æÇ†ÖÒ6÷W&6RæÇ†Ö°  —F†—2æVçdÖÒ6÷W&6RæVçdÖ° —F†—2æVçdÖ&÷FF–öâæ6÷’‚6÷W&6RæVçdÖ&÷FF–öâ“° —F†—2æ6öÖ&–æRÒ6÷W&6Ræ6öÖ&–æS° —F†—2ç&VfÆV7F—f—G’Ò6÷W&6Rç&VfÆV7F—f—G“° —F†—2ç&Vg&7F–öå&F–òÒ6÷W&6Rç&Vg&7F–öå&F–ó°  —F†—2çv—&Vg&ÖRÒ6÷W&6Rçv—&Vg&ÖS° —F†—2çv—&Vg&ÖTÆ–æWv–GF‚Ò6÷W&6Rçv—&Vg&ÖTÆ–æWv–GFƒ° —F†—2çv—&Vg&ÖTÆ–æV6Ò6÷W&6Rçv—&Vg&ÖTÆ–æV6° —F†—2çv—&Vg&ÖTÆ–æV¦ö–âÒ6÷W&6Rçv—&Vg&ÖTÆ–æV¦ö–ã°  —F†—2æfÆE6†F–ærÒ6÷W&6RæfÆE6†F–æs°  —F†—2æförÒ6÷W&6Ræfös°  —&WGW&âF†—3°  —Ð §Ð ¦6Æ72ÖW6„ÖF6ÖFW&–ÂW‡FVæG2ÖFW&–Â°  –6öç7G'V7F÷"‚&ÖWFW'2’°  —7WW"‚“°  —F†—2æ—4ÖW6„ÖF6ÖFW&–ÂÒG'VS°  —F†—2æFVf–æW2Ò²tÔD4s¢rrÓ°  —F†—2çG—RÒtÖW6„ÖF6ÖFW&–Âs°  —F†—2æ6öÆ÷"ÒæWr6öÆ÷"‚†fffffb“²òòF–fgW6P  —F†—2æÖF6ÒçVÆÃ°  —F†—2æÖÒçVÆÃ°  —F†—2æ'V×ÖÒçVÆÃ° —F†—2æ'V×66ÆRÒ°  —F†—2ææ÷&ÖÄÖÒçVÆÃ° —F†—2ææ÷&ÖÄÖG—RÒFævVçE76Tæ÷&ÖÄÖ° —F†—2ææ÷&ÖÅ66ÆRÒæWrfV7F÷#"‚Â“°  —F†—2æF—7Æ6VÖVçDÖÒçVÆÃ° —F†—2æF—7Æ6VÖVçE66ÆRÒ° —F†—2æF—7Æ6VÖVçD&–2Ò°  —F†—2æÇ†ÖÒçVÆÃ°  —F†—2æfÆE6†F–ærÒfÇ6S°  —F†—2æförÒG'VS°  —F†—2ç6WEfÇVW2‚&ÖWFW'2“°  —Ð   –6÷’‚6÷W&6R’°  —7WW"æ6÷’‚6÷W&6R“°  —F†—2æFVf–æW2Ò²tÔD4s¢rrÓ°  —F†—2æ6öÆ÷"æ6÷’‚6÷W&6Ræ6öÆ÷"“°  —F†—2æÖF6Ò6÷W&6RæÖF6°  —F†—2æÖÒ6÷W&6RæÖ°  —F†—2æ'V×ÖÒ6÷W&6Ræ'V×Ö° —F†—2æ'V×66ÆRÒ6÷W&6Ræ'V×66ÆS°  —F†—2ææ÷&ÖÄÖÒ6÷W&6Rææ÷&ÖÄÖ° —F†—2ææ÷&ÖÄÖG—RÒ6÷W&6Rææ÷&ÖÄÖG—S° —F†—2ææ÷&ÖÅ66ÆRæ6÷’‚6÷W&6Rææ÷&ÖÅ66ÆR“°  —F†—2æF—7Æ6VÖVçDÖÒ6÷W&6RæF—7Æ6VÖVçDÖ° —F†—2æF—7Æ6VÖVçE66ÆRÒ6÷W&6RæF—7Æ6VÖVçE66ÆS° —F†—2æF—7Æ6VÖVçD&–2Ò6÷W&6RæF—7Æ6VÖVçD&–3°  —F†—2æÇ†ÖÒ6÷W&6RæÇ†Ö°  —F†—2æfÆE6†F–ærÒ6÷W&6RæfÆE6†F–æs°  —F†—2æförÒ6÷W&6Ræfös°  —&WGW&âF†—3°  —Ð §Ð ¦6Æ72Æ–æTF6†VDÖFW&–ÂW‡FVæG2Æ–æT&6–4ÖFW&–Â°  –6öç7G'V7F÷"‚&ÖWFW'2’°  —7WW"‚“°  —F†—2æ—4Æ–æTF6†VDÖFW&–ÂÒG'VS°  —F†—2çG—RÒtÆ–æTF6†VDÖFW&–Âs°  —F†—2ç66ÆRÒ° —F†—2æF6…6—¦RÒ3° —F†—2æv6—¦RÒ°  —F†—2ç6WEfÇVW2‚&ÖWFW'2“°  —Ð  –6÷’‚6÷W&6R’°  —7WW"æ6÷’‚6÷W&6R“°  —F†—2ç66ÆRÒ6÷W&6Rç66ÆS° —F†—2æF6…6—¦RÒ6÷W&6RæF6…6—¦S° —F†—2æv6—¦RÒ6÷W&6Ræv6—¦S°  —&WGW&âF†—3°  —Ð §Ð ¢òò6öçfW'G2â'&’Fò7V6–f–2G—P¦gVæ7F–öâ6öçfW'D'&’‚'&’ÂG—RÂf÷&6T6ÆöæR’°  ––b‚'&’ÇÂòòÆWBwVæFVf–æVBræBvçVÆÂr70 ’f÷&6T6ÆöæRbb'&’æ6öç7G'V7F÷"ÓÓÒG—R’&WGW&â'&“°  ––b‚G—VöbG—Rä%•DU5õU%ôTÄTÔTåBÓÓÒvçVÖ&W"r’°  —&WGW&âæWrG—R‚'&’“²òò7&VFRG—VB'&  —Ð  —&WGW&â'&’ç&÷F÷G—Rç6Æ–6Ræ6ÆÂ‚'&’“²òò7&VFR'& §Ð ¦gVæ7F–öâ—5G—VD'&’‚ö&¦V7B’°  —&WGW&â'&”'VffW"æ—5f–Wr‚ö&¦V7B’b` ’‚ö&¦V7B–ç7Fæ6VöbFFf–Wr“° §Ð ¢òò&WGW&ç2â'&’'’v†–6‚F–ÖW2æBfÇVW26â&R6÷'FV@¦gVæ7F–öâvWD¶W–g&ÖT÷&FW"‚F–ÖW2’°  –gVæ7F–öâ6ö×&UF–ÖR‚’Â¢’°  —&WGW&âF–ÖW5²’ÒÒF–ÖW5²¢Ó°  —Ð  –6öç7BâÒF–ÖW2æÆVæwFƒ° –6öç7B&W7VÇBÒæWr'&’‚â“° –f÷"‚ÆWB’Ò²’ÓÒã²²²’’&W7VÇE²’ÒÒ“°  —&W7VÇBç6÷'B‚6ö×&UF–ÖR“°  —&WGW&â&W7VÇC° §Ð ¢òòW6W2F†R'&’&Wf–÷W6Ç’&WGW&æVB'’vvWD¶W–g&ÖT÷&FW"rFò6÷'BFF¦gVæ7F–öâ6÷'FVD'&’‚fÇVW2Â7G&–FRÂ÷&FW"’°  –6öç7BåfÇVW2ÒfÇVW2æÆVæwFƒ° –6öç7B&W7VÇBÒæWrfÇVW2æ6öç7G'V7F÷"‚åfÇVW2“°  –f÷"‚ÆWB’ÒÂG7Döfg6WBÒ²G7Döfg6WBÓÒåfÇVW3²²²’’°  –6öç7B7&4öfg6WBÒ÷&FW%²’Ò¢7G&–FS°  –f÷"‚ÆWB¢Ò²¢ÓÒ7G&–FS²²²¢’°  —&W7VÇE²G7Döfg6WB²²ÒÒfÇVW5²7&4öfg6WB²¢Ó°  —Ð  —Ð  —&WGW&â&W7VÇC° §Ð ¢òògVæ7F–öâf÷"'6–ærõ2¶W–g&ÖRf÷&ÖG0¦gVæ7F–öâfÆGFVä¥4ôâ‚§6öä¶W—2ÂF–ÖW2ÂfÇVW2ÂfÇVU&÷W'G”æÖR’°  –ÆWB’ÒÂ¶W’Ò§6öä¶W—5²Ó°  —v†–ÆR‚¶W’ÓÒVæFVf–æVBbb¶W•²fÇVU&÷W'G”æÖRÒÓÓÒVæFVf–æVB’°  –¶W’Ò§6öä¶W—5²’²²Ó°  —Ð  ––b‚¶W’ÓÓÒVæFVf–æVB’&WGW&ã²òòæòFF  –ÆWBfÇVRÒ¶W•²fÇVU&÷W'G”æÖRÓ° ––b‚fÇVRÓÓÒVæFVf–æVB’&WGW&ã²òòæòFF  ––b‚'&’æ—4'&’‚fÇVR’’°  –Fò°  —fÇVRÒ¶W•²fÇVU&÷W'G”æÖRÓ°  ––b‚fÇVRÓÒVæFVf–æVB’°  —F–ÖW2çW6‚‚¶W’çF–ÖR“° —fÇVW2çW6‚æÇ’‚fÇVW2ÂfÇVR“²òòW6‚ÆÂVÆVÖVçG0  —Ð  –¶W’Ò§6öä¶W—5²’²²Ó°  —Òv†–ÆR‚¶W’ÓÒVæFVf–æVB“°  —ÒVÇ6R–b‚fÇVRçFô'&’ÓÒVæFVf–æVB’°  ’òòââæ77VÖRD…$TRäÖF‚Ö—6€  –Fò°  —fÇVRÒ¶W•²fÇVU&÷W'G”æÖRÓ°  ––b‚fÇVRÓÒVæFVf–æVB’°  —F–ÖW2çW6‚‚¶W’çF–ÖR“° —fÇVRçFô'&’‚fÇVW2ÂfÇVW2æÆVæwF‚“°  —Ð  –¶W’Ò§6öä¶W—5²’²²Ó°  —Òv†–ÆR‚¶W’ÓÒVæFVf–æVB“°  —ÒVÇ6R°  ’òò÷F†W'v—6RW6‚2Ö—0  –Fò°  —fÇVRÒ¶W•²fÇVU&÷W'G”æÖRÓ°  ––b‚fÇVRÓÒVæFVf–æVB’°  —F–ÖW2çW6‚‚¶W’çF–ÖR“° —fÇVW2çW6‚‚fÇVR“°  —Ð  –¶W’Ò§6öä¶W—5²’²²Ó°  —Òv†–ÆR‚¶W’ÓÒVæFVf–æVB“°  —Ð §Ð ¦gVæ7F–öâ7V&6Æ—‚6÷W&6T6Æ—ÂæÖRÂ7F'Dg&ÖRÂVæDg&ÖRÂg2Ò3’°  –6öç7B6Æ—Ò6÷W&6T6Æ—æ6ÆöæR‚“°  –6Æ—ææÖRÒæÖS°  –6öç7BG&6·2ÒµÓ°  –f÷"‚ÆWB’Ò²’Â6Æ—çG&6·2æÆVæwFƒ²²²’’°  –6öç7BG&6²Ò6Æ—çG&6·5²’Ó° –6öç7BfÇVU6—¦RÒG&6²ævWEfÇVU6—¦R‚“°  –6öç7BF–ÖW2ÒµÓ° –6öç7BfÇVW2ÒµÓ°  –f÷"‚ÆWB¢Ò²¢ÂG&6²çF–ÖW2æÆVæwFƒ²²²¢’°  –6öç7Bg&ÖRÒG&6²çF–ÖW5²¢Ò¢g3°  ––b‚g&ÖRÂ7F'Dg&ÖRÇÂg&ÖRãÒVæDg&ÖR’6öçF–çVS°  —F–ÖW2çW6‚‚G&6²çF–ÖW5²¢Ò“°  –f÷"‚ÆWB²Ò²²ÂfÇVU6—¦S²²²²’°  —fÇVW2çW6‚‚G&6²çfÇVW5²¢¢fÇVU6—¦R²²Ò“°  —Ð  —Ð  ––b‚F–ÖW2æÆVæwF‚ÓÓÒ’6öçF–çVS°  —G&6²çF–ÖW2Ò6öçfW'D'&’‚F–ÖW2ÂG&6²çF–ÖW2æ6öç7G'V7F÷"“° —G&6²çfÇVW2Ò6öçfW'D'&’‚fÇVW2ÂG&6²çfÇVW2æ6öç7G'V7F÷"“°  —G&6·2çW6‚‚G&6²“°  —Ð  –6Æ—çG&6·2ÒG&6·3°  ’òòf–æBÖ–æ–×VÒçF–ÖW2fÇVR7&÷72ÆÂG&6·2–âF†RG&–ÖÖVB6Æ—   –ÆWBÖ–å7F'EF–ÖRÒ–æf–æ—G“°  –f÷"‚ÆWB’Ò²’Â6Æ—çG&6·2æÆVæwFƒ²²²’’°  ––b‚Ö–å7F'EF–ÖRâ6Æ—çG&6·5²’ÒçF–ÖW5²Ò’°  –Ö–å7F'EF–ÖRÒ6Æ—çG&6·5²’ÒçF–ÖW5²Ó°  —Ð  —Ð  ’òò6†–gBÆÂG&6·27V6‚F†B6Æ—&Vv–ç2BCÓ   –f÷"‚ÆWB’Ò²’Â6Æ—çG&6·2æÆVæwFƒ²²²’’°  –6Æ—çG&6·5²’Òç6†–gB‚Ò¢Ö–å7F'EF–ÖR“°  —Ð  –6Æ—ç&W6WDGW&F–öâ‚“°  —&WGW&â6Æ—° §Ð ¦gVæ7F–öâÖ¶T6Æ—FF—F—fR‚F&vWD6Æ—Â&VfW&Væ6Tg&ÖRÒÂ&VfW&Væ6T6Æ—ÒF&vWD6Æ—Âg2Ò3’°  ––b‚g2ÃÒ’g2Ò3°  –6öç7BçVÕG&6·2Ò&VfW&Væ6T6Æ—çG&6·2æÆVæwFƒ° –6öç7B&VfW&Væ6UF–ÖRÒ&VfW&Væ6Tg&ÖRòg3°  ’òòÖ¶RV6‚G&6²w2fÇVW2&VÆF—fRFòF†RfÇVW2BF†R&VfW&Væ6Rg&ÖP –f÷"‚ÆWB’Ò²’ÂçVÕG&6·3²²²’’°  –6öç7B&VfW&Væ6UG&6²Ò&VfW&Væ6T6Æ—çG&6·5²’Ó° –6öç7B&VfW&Væ6UG&6µG—RÒ&VfW&Væ6UG&6²åfÇVUG—TæÖS°  ’òò6¶—F†—2G&6²–b—Bw2æöâÖçVÖW&–0 ––b‚&VfW&Væ6UG&6µG—RÓÓÒv&ööÂrÇÂ&VfW&Væ6UG&6µG—RÓÓÒw7G&–ærr’6öçF–çVS°  ’òòf–æBF†RG&6²–âF†RF&vWB6Æ—v†÷6RæÖRæBG—RÖF6†W2F†R&VfW&Væ6RG&6° –6öç7BF&vWEG&6²ÒF&vWD6Æ—çG&6·2æf–æB‚gVæ7F–öâ‚G&6²’°  —&WGW&âG&6²ææÖRÓÓÒ&VfW&Væ6UG&6²ææÖP ’bbG&6²åfÇVUG—TæÖRÓÓÒ&VfW&Væ6UG&6µG—S°  —Ò“°  ––b‚F&vWEG&6²ÓÓÒVæFVf–æVB’6öçF–çVS°  –ÆWB&VfW&Væ6Töfg6WBÒ° –6öç7B&VfW&Væ6UfÇVU6—¦RÒ&VfW&Væ6UG&6²ævWEfÇVU6—¦R‚“°  ––b‚&VfW&Væ6UG&6²æ7&VFT–çFW'öÆçBæ—4–çFW'öÆçDf7F÷'”ÖWF†öDtÅDd7V&–57Æ–æR’°  —&VfW&Væ6Töfg6WBÒ&VfW&Væ6UfÇVU6—¦Rò3°  —Ð  –ÆWBF&vWDöfg6WBÒ° –6öç7BF&vWEfÇVU6—¦RÒF&vWEG&6²ævWEfÇVU6—¦R‚“°  ––b‚F&vWEG&6²æ7&VFT–çFW'öÆçBæ—4–çFW'öÆçDf7F÷'”ÖWF†öDtÅDd7V&–57Æ–æR’°  —F&vWDöfg6WBÒF&vWEfÇVU6—¦Rò3°  —Ð  –6öç7BÆ7D–æFW‚Ò&VfW&Væ6UG&6²çF–ÖW2æÆVæwF‚Ò° –ÆWB&VfW&Væ6UfÇVS°  ’òòf–æBF†RfÇVRFò7V'G&7B÷WBöbF†RG&6° ––b‚&VfW&Væ6UF–ÖRÃÒ&VfW&Væ6UG&6²çF–ÖW5²Ò’°  ’òò&VfW&Væ6Rg&ÖR—2V&Æ–W"F†âF†Rf—'7B¶W–g&ÖRÂ6ò§W7BW6RF†Rf—'7B¶W–g&ÖP –6öç7B7F'D–æFW‚Ò&VfW&Væ6Töfg6WC° –6öç7BVæD–æFW‚Ò&VfW&Væ6UfÇVU6—¦RÒ&VfW&Væ6Töfg6WC° —&VfW&Væ6UfÇVRÒ&VfW&Væ6UG&6²çfÇVW2ç6Æ–6R‚7F'D–æFW‚ÂVæD–æFW‚“°  —ÒVÇ6R–b‚&VfW&Væ6UF–ÖRãÒ&VfW&Væ6UG&6²çF–ÖW5²Æ7D–æFW‚Ò’°  ’òò&VfW&Væ6Rg&ÖR—2gFW"F†RÆ7B¶W–g&ÖRÂ6ò§W7BW6RF†RÆ7B¶W–g&ÖP –6öç7B7F'D–æFW‚ÒÆ7D–æFW‚¢&VfW&Væ6UfÇVU6—¦R²&VfW&Væ6Töfg6WC° –6öç7BVæD–æFW‚Ò7F'D–æFW‚²&VfW&Væ6UfÇVU6—¦RÒ&VfW&Væ6Töfg6WC° —&VfW&Væ6UfÇVRÒ&VfW&Væ6UG&6²çfÇVW2ç6Æ–6R‚7F'D–æFW‚ÂVæD–æFW‚“°  —ÒVÇ6R°  ’òò–çFW'öÆFRFòF†R&VfW&Væ6RfÇVP –6öç7B–çFW'öÆçBÒ&VfW&Væ6UG&6²æ7&VFT–çFW'öÆçB‚“° –6öç7B7F'D–æFW‚Ò&VfW&Væ6Töfg6WC° –6öç7BVæD–æFW‚Ò&VfW&Væ6UfÇVU6—¦RÒ&VfW&Væ6Töfg6WC° ––çFW'öÆçBæWfÇVFR‚&VfW&Væ6UF–ÖR“° —&VfW&Væ6UfÇVRÒ–çFW'öÆçBç&W7VÇD'VffW"ç6Æ–6R‚7F'D–æFW‚ÂVæD–æFW‚“°  —Ð  ’òò6öæ§VvFRF†RVFW&æ–öà ––b‚&VfW&Væ6UG&6µG—RÓÓÒwVFW&æ–öâr’°  –6öç7B&VfW&Væ6UVBÒæWrVFW&æ–öâ‚’æg&öÔ'&’‚&VfW&Væ6UfÇVR’ææ÷&ÖÆ—¦R‚’æ6öæ§VvFR‚“° —&VfW&Væ6UVBçFô'&’‚&VfW&Væ6UfÇVR“°  —Ð  ’òò7V'G&7BF†R&VfW&Væ6RfÇVRg&öÒÆÂöbF†RG&6²fÇVW0  –6öç7BçVÕF–ÖW2ÒF&vWEG&6²çF–ÖW2æÆVæwFƒ° –f÷"‚ÆWB¢Ò²¢ÂçVÕF–ÖW3²²²¢’°  –6öç7BfÇVU7F'BÒ¢¢F&vWEfÇVU6—¦R²F&vWDöfg6WC°  ––b‚&VfW&Væ6UG&6µG—RÓÓÒwVFW&æ–öâr’°  ’òò×VÇF—Ç’F†R6öæ§VvFRf÷"VFW&æ–öâG&6²G—W0 •VFW&æ–öâæ×VÇF—Ç•VFW&æ–öç4fÆB€ —F&vWEG&6²çfÇVW2À —fÇVU7F'BÀ —&VfW&Væ6UfÇVRÀ “À —F&vWEG&6²çfÇVW2À —fÇVU7F'@ ’“°  —ÒVÇ6R°  –6öç7BfÇVTVæBÒF&vWEfÇVU6—¦RÒF&vWDöfg6WB¢#°  ’òò7V'G&7BV6‚fÇVRf÷"ÆÂ÷F†W"çVÖW&–2G&6²G—W0 –f÷"‚ÆWB²Ò²²ÂfÇVTVæC²²²²’°  —F&vWEG&6²çfÇVW5²fÇVU7F'B²²ÒÓÒ&VfW&Væ6UfÇVU²²Ó°  —Ð  —Ð  —Ð  —Ð  —F&vWD6Æ—æ&ÆVæDÖöFRÒFF—F—fTæ–ÖF–öä&ÆVæDÖöFS°  —&WGW&âF&vWD6Æ—° §Ð ¦6öç7Bæ–ÖF–öåWF–Ç2Ò° –6öçfW'D'&“¢6öçfW'D'&’À –—5G—VD'&“¢—5G—VD'&’À –vWD¶W–g&ÖT÷&FW#¢vWD¶W–g&ÖT÷&FW"À —6÷'FVD'&“¢6÷'FVD'&’À –fÆGFVä¥4ôã¢fÆGFVä¥4ôâÀ —7V&6Æ—¢7V&6Æ—À –Ö¶T6Æ—FF—F—fS¢Ö¶T6Æ—FF—F—fP§Ó° ¢ò¢ ¢¢'7G&7B&6R6Æ72öb–çFW'öÆçG2÷fW"&ÖWG&–26×ÆW2à¢ ¢¢F†R&ÖWFW"FöÖ–â—2öæRF–ÖVç6–öæÂÂG—–6ÆÇ’F†RF–ÖR÷"F€¢¢Æöær7W'fRFVf–æVB'’F†RFFà¢ ¢¢F†R6×ÆRfÇVW26â†fRç’F–ÖVç6–öæÆ—G’æBFW&—fVB6Æ76W2Ö¢¢Ç’7V6–Â–çFW'&WFF–öç2FòF†RFFà¢ ¢¢F†—26Æ72&÷f–FW2F†R–çFW'fÂ6VV²–âFV×ÆFRÖWF†öBÂFVfW'&–æp¢¢F†R7GVÂ–çFW'öÆF–öâFòFW&—fVB6Æ76W2à¢ ¢¢F–ÖR6ö×ÆW†—G’—2òƒ’f÷"Æ–æV"66W727&÷76–ærBÖ÷7BGvòö–çG0¢¢æBò†Æörâ’f÷"&æFöÒ66W72Âv†W&Râ—2F†RçVÖ&W"öb÷6—F–öç2à¢ ¢¢&VfW&Væ6W3 ¢ ¢¢ –‡GG¢ò÷wwræööFW6–vâæ6öÒ÷FV×ÆFRÖÖWF†öB×GFW&âæ‡FÖÀ¢ ¢¢ð ¦6Æ72–çFW'öÆçB°  –6öç7G'V7F÷"‚&ÖWFW%÷6—F–öç2Â6×ÆUfÇVW2Â6×ÆU6—¦RÂ&W7VÇD'VffW"’°  —F†—2ç&ÖWFW%÷6—F–öç2Ò&ÖWFW%÷6—F–öç3° —F†—2åö66†VD–æFW‚Ò°  —F†—2ç&W7VÇD'VffW"Ò&W7VÇD'VffW"ÓÒVæFVf–æVBð —&W7VÇD'VffW"¢æWr6×ÆUfÇVW2æ6öç7G'V7F÷"‚6×ÆU6—¦R“° —F†—2ç6×ÆUfÇVW2Ò6×ÆUfÇVW3° —F†—2çfÇVU6—¦RÒ6×ÆU6—¦S°  —F†—2ç6WGF–æw2ÒçVÆÃ° —F†—2äFVfVÇE6WGF–æw5òÒ·Ó°  —Ð  –WfÇVFR‚B’°  –6öç7BÒF†—2ç&ÖWFW%÷6—F–öç3° –ÆWB“ÒF†—2åö66†VD–æFW‚À —CÒ²“ÒÀ —CÒ²“ÒÓ°  —fÆ–FFUö–çFW'fÃ¢°  —6VV³¢°  –ÆWB&–v‡C°  –Æ–æV%÷66ã¢°  ’òòÒ6VR‡GG¢òö§7W&bæ6öÒö6ö×&—6öâ×Fò×VæFVf–æVBó0 ’òòÒ6Æ÷vW"6öFS  ’òòÐ ’òòÒ ––b‚BãÒCÇÂCÓÓÒVæFVf–æVB’° –f÷'v&E÷66ã¢–b‚‚BÂC’’°  –f÷"‚ÆWBv—fUWBÒ“²#²²’°  ––b‚CÓÓÒVæFVf–æVB’°  ––b‚BÂC’'&V²f÷'v&E÷66ã°  ’òògFW"Væ@  –“ÒæÆVæwFƒ° —F†—2åö66†VD–æFW‚Ò“° —&WGW&âF†—2æ6÷•6×ÆUfÇVUò‚“Ò“°  —Ð  ––b‚“ÓÓÒv—fUWB’'&V³²òòF†—2Æö÷   —CÒC° —CÒ²²²“Ó°  ––b‚BÂC’°  ’òòvR†fR'&—fVBBF†R6÷Vv‡B–çFW'fÀ –'&V²6VV³°  —Ð  —Ð  ’òò&W&R&–æ'’6V&6‚öâF†R&–v‡B6–FRöbF†R–æFW€ —&–v‡BÒæÆVæwFƒ° –'&V²Æ–æV%÷66ã°  —Ð  ’òòÒ6Æ÷vW"6öFS  ’òòÐ––b‚BÂCÇÂCÓÓÒVæFVf–æVB’° ––b‚‚BãÒC’’°  ’òòÆö÷–æsð  –6öç7BCvÆö&ÂÒ²Ó°  ––b‚BÂCvÆö&Â’°  –“Ò#²òò²ÂW6–ærF†R66âf÷"F†RFWF–Ç0 —CÒCvÆö&Ã°  —Ð  ’òòÆ–æV"&WfW'6R66à  –f÷"‚ÆWBv—fUWBÒ“Ò#²²’°  ––b‚CÓÓÒVæFVf–æVB’°  ’òò&Vf÷&R7F'@  —F†—2åö66†VD–æFW‚Ò° —&WGW&âF†—2æ6÷•6×ÆUfÇVUò‚“°  —Ð  ––b‚“ÓÓÒv—fUWB’'&V³²òòF†—2Æö÷   —CÒC° —CÒ²ÒÒ“ÒÓ°  ––b‚BãÒC’°  ’òòvR†fR'&—fVBBF†R6÷Vv‡B–çFW'fÀ –'&V²6VV³°  —Ð  —Ð  ’òò&W&R&–æ'’6V&6‚öâF†RÆVgB6–FRöbF†R–æFW€ —&–v‡BÒ“° –“Ò° –'&V²Æ–æV%÷66ã°  —Ð  ’òòF†R–çFW'fÂ—2fÆ–@  –'&V²fÆ–FFUö–çFW'fÃ°  —ÒòòÆ–æV"66à  ’òò&–æ'’6V&6€  —v†–ÆR‚“Â&–v‡B’°  –6öç7BÖ–BÒ‚“²&–v‡B’ããâ°  ––b‚BÂ²Ö–BÒ’°  —&–v‡BÒÖ–C°  —ÒVÇ6R°  –“ÒÖ–B²°  —Ð  —Ð  —CÒ²“Ó° —CÒ²“ÒÓ°  ’òò6†V6²&÷VæF'’66W2Âv–à  ––b‚CÓÓÒVæFVf–æVB’°  —F†—2åö66†VD–æFW‚Ò° —&WGW&âF†—2æ6÷•6×ÆUfÇVUò‚“°  —Ð  ––b‚CÓÓÒVæFVf–æVB’°  –“ÒæÆVæwFƒ° —F†—2åö66†VD–æFW‚Ò“° —&WGW&âF†—2æ6÷•6×ÆUfÇVUò‚“Ò“°  —Ð  —Òòò6VV°  —F†—2åö66†VD–æFW‚Ò“°  —F†—2æ–çFW'fÄ6†ævVEò‚“ÂCÂC“°  —ÒòòfÆ–FFUö–çFW'fÀ  —&WGW&âF†—2æ–çFW'öÆFUò‚“ÂCÂBÂC“°  —Ð  –vWE6WGF–æw5ò‚’°  —&WGW&âF†—2ç6WGF–æw2ÇÂF†—2äFVfVÇE6WGF–æw5ó°  —Ð  –6÷•6×ÆUfÇVUò‚–æFW‚’°  ’òò6÷–W26×ÆRfÇVRFòF†R&W7VÇB'VffW   –6öç7B&W7VÇBÒF†—2ç&W7VÇD'VffW"À —fÇVW2ÒF†—2ç6×ÆUfÇVW2À —7G&–FRÒF†—2çfÇVU6—¦RÀ –öfg6WBÒ–æFW‚¢7G&–FS°  –f÷"‚ÆWB’Ò²’ÓÒ7G&–FS²²²’’°  —&W7VÇE²’ÒÒfÇVW5²öfg6WB²’Ó°  —Ð  —&WGW&â&W7VÇC°  —Ð  ’òòFV×ÆFRÖWF†öG2f÷"FW&—fVB6Æ76W3   ––çFW'öÆFUò‚ò¢“ÂCÂBÂC¢ò’°  —F‡&÷ræWrW'&÷"‚v6ÆÂFò'7G&7BÖWF†öBr“° ’òò–×ÆVÖVçFF–öç26†ÆÂ&WGW&âF†—2ç&W7VÇD'VffW   —Ð  ––çFW'fÄ6†ævVEò‚ò¢“ÂCÂC¢ò’°  ’òòV×G  —Ð §Ð ¢ò¢ ¢¢f7BæB6–×ÆR7V&–27Æ–æR–çFW'öÆçBà¢ ¢¢—Bv2FW&—fVBg&öÒ†W&Ö—F–â6öç7G'V7F–öâ6WGF–ærF†Rf—'7BFW&—fF—fP¢¢BV6‚6×ÆR÷6—F–öâFòF†RÆ–æV"6Æ÷R&WGvVVâæV–v†&÷&–ær÷6—F–öç0¢¢÷fW"F†V—"&ÖWFW"–çFW'fÂà¢¢ð ¦6Æ727V&–4–çFW'öÆçBW‡FVæG2–çFW'öÆçB°  –6öç7G'V7F÷"‚&ÖWFW%÷6—F–öç2Â6×ÆUfÇVW2Â6×ÆU6—¦RÂ&W7VÇD'VffW"’°  —7WW"‚&ÖWFW%÷6—F–öç2Â6×ÆUfÇVW2Â6×ÆU6—¦RÂ&W7VÇD'VffW"“°  —F†—2å÷vV–v‡E&WbÒÒ° —F†—2åööfg6WE&WbÒÒ° —F†—2å÷vV–v‡DæW‡BÒÒ° —F†—2åööfg6WDæW‡BÒÒ°  —F†—2äFVfVÇE6WGF–æw5òÒ°  –VæF–æu7F'C¢¦W&ô7W'fGW&TVæF–ærÀ –VæF–ætVæC¢¦W&ô7W'fGW&TVæF–æp  —Ó°  —Ð  ––çFW'fÄ6†ævVEò‚“ÂCÂC’°  –6öç7BÒF†—2ç&ÖWFW%÷6—F–öç3° –ÆWB•&WbÒ“Ò"À –”æW‡BÒ“²À  —E&WbÒ²•&WbÒÀ —DæW‡BÒ²”æW‡BÓ°  ––b‚E&WbÓÓÒVæFVf–æVB’°  —7v—F6‚‚F†—2ævWE6WGF–æw5ò‚’æVæF–æu7F'B’°  –66R¦W&õ6Æ÷TVæF–æs   ’òòbr‡C’Ò  –•&WbÒ“° —E&WbÒ"¢CÒC°  –'&V³°  –66Rw&&÷VæDVæF–æs   ’òòW6RF†R÷F†W"VæBöbF†R7W'fP –•&WbÒæÆVæwF‚Ò#° —E&WbÒC²²•&WbÒÒ²•&Wb²Ó°  –'&V³°  –FVfVÇC¢òò¦W&ô7W'fGW&TVæF–æp  ’òòbrr‡C’Òæ²æâæGW&Â7Æ–æP –•&WbÒ“° —E&WbÒC°  —Ð  —Ð  ––b‚DæW‡BÓÓÒVæFVf–æVB’°  —7v—F6‚‚F†—2ævWE6WGF–æw5ò‚’æVæF–ætVæB’°  –66R¦W&õ6Æ÷TVæF–æs   ’òòbr‡Dâ’Ò  –”æW‡BÒ“° —DæW‡BÒ"¢CÒC°  –'&V³°  –66Rw&&÷VæDVæF–æs   ’òòW6RF†R÷F†W"VæBöbF†R7W'fP –”æW‡BÒ° —DæW‡BÒC²²ÒÒ²Ó°  –'&V³°  –FVfVÇC¢òò¦W&ô7W'fGW&TVæF–æp  ’òòbrr‡Dâ’ÒÂæ²æâæGW&Â7Æ–æP –”æW‡BÒ“Ò° —DæW‡BÒC°  —Ð  —Ð  –6öç7B†ÆdGBÒ‚CÒC’¢ãRÀ —7G&–FRÒF†—2çfÇVU6—¦S°  —F†—2å÷vV–v‡E&WbÒ†ÆdGBò‚CÒE&Wb“° —F†—2å÷vV–v‡DæW‡BÒ†ÆdGBò‚DæW‡BÒC“° —F†—2åööfg6WE&WbÒ•&Wb¢7G&–FS° —F†—2åööfg6WDæW‡BÒ”æW‡B¢7G&–FS°  —Ð  ––çFW'öÆFUò‚“ÂCÂBÂC’°  –6öç7B&W7VÇBÒF†—2ç&W7VÇD'VffW"À —fÇVW2ÒF†—2ç6×ÆUfÇVW2À —7G&–FRÒF†—2çfÇVU6—¦RÀ  –óÒ“¢7G&–FRÀ–óÒóÒ7G&–FRÀ –õÒF†—2åööfg6WE&WbÂ –ôâÒF†—2åööfg6WDæW‡BÀ —uÒF†—2å÷vV–v‡E&WbÀ—tâÒF†—2å÷vV–v‡DæW‡BÀ  —Ò‚BÒC’ò‚CÒC’À —Ò¢À —Ò¢°  ’òòWfÇVFRöÇ–æöÖ–Ç0  –6öç7B5ÒÒu¢²"¢u¢Òu¢° –6öç7B3Ò‚²u’¢²‚ÒãRÒ"¢u’¢²‚ÒãR²u’¢²° –6öç7B3Ò‚ÒÒtâ’¢²‚ãR²tâ’¢²ãR¢° –6öç7B4âÒtâ¢Òtâ¢°  ’òò6öÖ&–æRFFÆ–æV&Ç  –f÷"‚ÆWB’Ò²’ÓÒ7G&–FS²²²’’°  —&W7VÇE²’ÒÐ —5¢fÇVW5²õ²’Ò° —3¢fÇVW5²ó²’Ò° —3¢fÇVW5²ó²’Ò° —4â¢fÇVW5²ôâ²’Ó°  —Ð  —&WGW&â&W7VÇC°  —Ð §Ð ¦6Æ72Æ–æV$–çFW'öÆçBW‡FVæG2–çFW'öÆçB°  –6öç7G'V7F÷"‚&ÖWFW%÷6—F–öç2Â6×ÆUfÇVW2Â6×ÆU6—¦RÂ&W7VÇD'VffW"’°  —7WW"‚&ÖWFW%÷6—F–öç2Â6×ÆUfÇVW2Â6×ÆU6—¦RÂ&W7VÇD'VffW"“°  —Ð  ––çFW'öÆFUò‚“ÂCÂBÂC’°  –6öç7B&W7VÇBÒF†—2ç&W7VÇD'VffW"À —fÇVW2ÒF†—2ç6×ÆUfÇVW2À —7G&–FRÒF†—2çfÇVU6—¦RÀ  –öfg6WCÒ“¢7G&–FRÀ –öfg6WCÒöfg6WCÒ7G&–FRÀ  —vV–v‡CÒ‚BÒC’ò‚CÒC’À —vV–v‡CÒÒvV–v‡C°  –f÷"‚ÆWB’Ò²’ÓÒ7G&–FS²²²’’°  —&W7VÇE²’ÒÐ —fÇVW5²öfg6WC²’Ò¢vV–v‡C° —fÇVW5²öfg6WC²’Ò¢vV–v‡C°  —Ð  —&WGW&â&W7VÇC°  —Ð §Ð ¢ò¢ ¢ ¢¢–çFW'öÆçBF†BWfÇVFW2FòF†R6×ÆRfÇVRBF†R÷6—F–öâ&V6VF–æp¢¢F†R&ÖWFW"à¢¢ð ¦6Æ72F—67&WFT–çFW'öÆçBW‡FVæG2–çFW'öÆçB°  –6öç7G'V7F÷"‚&ÖWFW%÷6—F–öç2Â6×ÆUfÇVW2Â6×ÆU6—¦RÂ&W7VÇD'VffW"’°  —7WW"‚&ÖWFW%÷6—F–öç2Â6×ÆUfÇVW2Â6×ÆU6—¦RÂ&W7VÇD'VffW"“°  —Ð  ––çFW'öÆFUò‚“ò¢ÂCÂBÂC¢ò’°  —&WGW&âF†—2æ6÷•6×ÆUfÇVUò‚“Ò“°  —Ð §Ð ¦6Æ72¶W–g&ÖUG&6²°  –6öç7G'V7F÷"‚æÖRÂF–ÖW2ÂfÇVW2Â–çFW'öÆF–öâ’°  ––b‚æÖRÓÓÒVæFVf–æVB’F‡&÷ræWrW'&÷"‚uD…$TRä¶W–g&ÖUG&6³¢G&6²æÖR—2VæFVf–æVBr“° ––b‚F–ÖW2ÓÓÒVæFVf–æVBÇÂF–ÖW2æÆVæwF‚ÓÓÒ’F‡&÷ræWrW'&÷"‚uD…$TRä¶W–g&ÖUG&6³¢æò¶W–g&ÖW2–âG&6²æÖVBr²æÖR“°  —F†—2ææÖRÒæÖS°  —F†—2çF–ÖW2Ò6öçfW'D'&’‚F–ÖW2ÂF†—2åF–ÖT'VffW%G—R“° —F†—2çfÇVW2Ò6öçfW'D'&’‚fÇVW2ÂF†—2åfÇVT'VffW%G—R“°  —F†—2ç6WD–çFW'öÆF–öâ‚–çFW'öÆF–öâÇÂF†—2äFVfVÇD–çFW'öÆF–öâ“°  —Ð  ’òò6W&–Æ—¦F–öâ†–â7FF–26öçFW‡BÂ&V6W6Röb6öç7G'V7F÷"–çfö6F–öà ’òòæBWFöÖF–2–çfö6F–öâöbçFô¥4ôâ“   —7FF–2Fô¥4ôâ‚G&6²’°  –6öç7BG&6µG—RÒG&6²æ6öç7G'V7F÷#°  –ÆWB§6öã°  ’òòFW&—fVB6Æ76W26âFVf–æR7FF–2Fô¥4ôâÖWF†ö@ ––b‚G&6µG—RçFô¥4ôâÓÒF†—2çFô¥4ôâ’°  –§6öâÒG&6µG—RçFô¥4ôâ‚G&6²“°  —ÒVÇ6R°  ’òò'’FVfVÇBÂvR77VÖRF†RFF6â&R6W&–Æ—¦VB2Ö—0 –§6öâÒ°  ’væÖRs¢G&6²ææÖRÀ ’wF–ÖW2s¢6öçfW'D'&’‚G&6²çF–ÖW2Â'&’’À ’wfÇVW2s¢6öçfW'D'&’‚G&6²çfÇVW2Â'&’  —Ó°  –6öç7B–çFW'öÆF–öâÒG&6²ævWD–çFW'öÆF–öâ‚“°  ––b‚–çFW'öÆF–öâÓÒG&6²äFVfVÇD–çFW'öÆF–öâ’°  –§6öâæ–çFW'öÆF–öâÒ–çFW'öÆF–öã°  —Ð  —Ð  –§6öâçG—RÒG&6²åfÇVUG—TæÖS²òòÖæFF÷'  —&WGW&â§6öã°  —Ð  ”–çFW'öÆçDf7F÷'”ÖWF†öDF—67&WFR‚&W7VÇB’°  —&WGW&âæWrF—67&WFT–çFW'öÆçB‚F†—2çF–ÖW2ÂF†—2çfÇVW2ÂF†—2ævWEfÇVU6—¦R‚’Â&W7VÇB“°  —Ð  ”–çFW'öÆçDf7F÷'”ÖWF†öDÆ–æV"‚&W7VÇB’°  —&WGW&âæWrÆ–æV$–çFW'öÆçB‚F†—2çF–ÖW2ÂF†—2çfÇVW2ÂF†—2ævWEfÇVU6—¦R‚’Â&W7VÇB“°  —Ð  ”–çFW'öÆçDf7F÷'”ÖWF†öE6Öö÷F‚‚&W7VÇB’°  —&WGW&âæWr7V&–4–çFW'öÆçB‚F†—2çF–ÖW2ÂF†—2çfÇVW2ÂF†—2ævWEfÇVU6—¦R‚’Â&W7VÇB“°  —Ð  —6WD–çFW'öÆF–öâ‚–çFW'öÆF–öâ’°  –ÆWBf7F÷'”ÖWF†öC°  —7v—F6‚‚–çFW'öÆF–öâ’°  –66R–çFW'öÆFTF—67&WFS   –f7F÷'”ÖWF†öBÒF†—2ä–çFW'öÆçDf7F÷'”ÖWF†öDF—67&WFS°  –'&V³°  –66R–çFW'öÆFTÆ–æV#   –f7F÷'”ÖWF†öBÒF†—2ä–çFW'öÆçDf7F÷'”ÖWF†öDÆ–æV#°  –'&V³°  –66R–çFW'öÆFU6Öö÷Fƒ   –f7F÷'”ÖWF†öBÒF†—2ä–çFW'öÆçDf7F÷'”ÖWF†öE6Öö÷Fƒ°  –'&V³°  —Ð  ––b‚f7F÷'”ÖWF†öBÓÓÒVæFVf–æVB’°  –6öç7BÖW76vRÒwVç7W÷'FVB–çFW'öÆF–öâf÷"r° —F†—2åfÇVUG—TæÖR²r¶W–g&ÖRG&6²æÖVBr²F†—2ææÖS°  ––b‚F†—2æ7&VFT–çFW'öÆçBÓÓÒVæFVf–æVB’°  ’òòfÆÂ&6²FòFVfVÇBÂVæÆW72F†RFVfVÇB—G6VÆb—2ÖW76VBW  ––b‚–çFW'öÆF–öâÓÒF†—2äFVfVÇD–çFW'öÆF–öâ’°  —F†—2ç6WD–çFW'öÆF–öâ‚F†—2äFVfVÇD–çFW'öÆF–öâ“°  —ÒVÇ6R°  —F‡&÷ræWrW'&÷"‚ÖW76vR“²òòfFÂÂ–âF†—266P  —Ð  —Ð  –6öç6öÆRçv&â‚uD…$TRä¶W–g&ÖUG&6³¢rÂÖW76vR“° —&WGW&âF†—3°  —Ð  —F†—2æ7&VFT–çFW'öÆçBÒf7F÷'”ÖWF†öC°  —&WGW&âF†—3°  —Ð  –vWD–çFW'öÆF–öâ‚’°  —7v—F6‚‚F†—2æ7&VFT–çFW'öÆçB’°  –66RF†—2ä–çFW'öÆçDf7F÷'”ÖWF†öDF—67&WFS   —&WGW&â–çFW'öÆFTF—67&WFS°  –66RF†—2ä–çFW'öÆçDf7F÷'”ÖWF†öDÆ–æV#   —&WGW&â–çFW'öÆFTÆ–æV#°  –66RF†—2ä–çFW'öÆçDf7F÷'”ÖWF†öE6Öö÷Fƒ   —&WGW&â–çFW'öÆFU6Öö÷Fƒ°  —Ð  —Ð  –vWEfÇVU6—¦R‚’°  —&WGW&âF†—2çfÇVW2æÆVæwF‚òF†—2çF–ÖW2æÆVæwFƒ°  —Ð  ’òòÖ÷fRÆÂ¶W–g&ÖW2V—F†W"f÷'v&G2÷"&6·v&G2–âF–ÖP —6†–gB‚F–ÖTöfg6WB’°  ––b‚F–ÖTöfg6WBÓÒã’°  –6öç7BF–ÖW2ÒF†—2çF–ÖW3°  –f÷"‚ÆWB’ÒÂâÒF–ÖW2æÆVæwFƒ²’ÓÒã²²²’’°  —F–ÖW5²’Ò³ÒF–ÖTöfg6WC°  —Ð  —Ð  —&WGW&âF†—3°  —Ð  ’òò66ÆRÆÂ¶W–g&ÖRF–ÖW2'’f7F÷"‡W6VgVÂf÷"g&ÖRÂÓâ6V6öæG26öçfW'6–öç2 —66ÆR‚F–ÖU66ÆR’°  ––b‚F–ÖU66ÆRÓÒã’°  –6öç7BF–ÖW2ÒF†—2çF–ÖW3°  –f÷"‚ÆWB’ÒÂâÒF–ÖW2æÆVæwFƒ²’ÓÒã²²²’’°  —F–ÖW5²’Ò£ÒF–ÖU66ÆS°  —Ð  —Ð  —&WGW&âF†—3°  —Ð  ’òò&VÖ÷fW2¶W–g&ÖW2&Vf÷&RæBgFW"æ–ÖF–öâv—F†÷WB6†æv–ærç’fÇVW2v—F†–âF†R&ævR·7F'EF–ÖRÂVæEF–ÖUÒà ’òò”Õõ%DåC¢vRFòæ÷B6†–gB&÷VæB¶W—2FòF†R7F'BöbF†RG&6²F–ÖRÂ&V6W6Rf÷"–çFW'öÆFVB¶W—2F†—2v–ÆÂ6†ævRF†V—"fÇVW0 —G&–Ò‚7F'EF–ÖRÂVæEF–ÖR’°  –6öç7BF–ÖW2ÒF†—2çF–ÖW2À –ä¶W—2ÒF–ÖW2æÆVæwFƒ°  –ÆWBg&öÒÒÀ —FòÒä¶W—2Ò°  —v†–ÆR‚g&öÒÓÒä¶W—2bbF–ÖW5²g&öÒÒÂ7F'EF–ÖR’°  ’²²g&öÓ°  —Ð  —v†–ÆR‚FòÓÒÒbbF–ÖW5²FòÒâVæEF–ÖR’°  ’ÒÒFó°  —Ð  ’²²Fó²òò–æ6ÇW6—fRÓâW†6ÇW6—fR&÷Væ@  ––b‚g&öÒÓÒÇÂFòÓÒä¶W—2’°  ’òòV×G’G&6·2&Rf÷&&–FFVâÂ6ò¶VWBÆV7BöæR¶W–g&ÖP ––b‚g&öÒãÒFò’°  —FòÒÖF‚æÖ‚‚FòÂ“° –g&öÒÒFòÒ°  —Ð  –6öç7B7G&–FRÒF†—2ævWEfÇVU6—¦R‚“° —F†—2çF–ÖW2ÒF–ÖW2ç6Æ–6R‚g&öÒÂFò“° —F†—2çfÇVW2ÒF†—2çfÇVW2ç6Æ–6R‚g&öÒ¢7G&–FRÂFò¢7G&–FR“°  —Ð  —&WGW&âF†—3°  —Ð  ’òòVç7W&RvRFòæ÷BvWBv&&vT–äv&&vT÷WB6—GVF–öâÂÖ¶R7W&RG&6·2&RBÆV7BÖ–æ–ÖÆÇ’f–&ÆP —fÆ–FFR‚’°  –ÆWBfÆ–BÒG'VS°  –6öç7BfÇVU6—¦RÒF†—2ævWEfÇVU6—¦R‚“° ––b‚fÇVU6—¦RÒÖF‚æfÆö÷"‚fÇVU6—¦R’ÓÒ’°  –6öç6öÆRæW'&÷"‚uD…$TRä¶W–g&ÖUG&6³¢–çfÆ–BfÇVR6—¦R–âG&6²ârÂF†—2“° —fÆ–BÒfÇ6S°  —Ð  –6öç7BF–ÖW2ÒF†—2çF–ÖW2À —fÇVW2ÒF†—2çfÇVW2À  –ä¶W—2ÒF–ÖW2æÆVæwFƒ°  ––b‚ä¶W—2ÓÓÒ’°  –6öç6öÆRæW'&÷"‚uD…$TRä¶W–g&ÖUG&6³¢G&6²—2V×G’ârÂF†—2“° —fÆ–BÒfÇ6S°  —Ð  –ÆWB&WeF–ÖRÒçVÆÃ°  –f÷"‚ÆWB’Ò²’ÓÒä¶W—3²’²²’°  –6öç7B7W'%F–ÖRÒF–ÖW5²’Ó°  ––b‚G—Vöb7W'%F–ÖRÓÓÒvçVÖ&W"rbb—4æâ‚7W'%F–ÖR’’°  –6öç6öÆRæW'&÷"‚uD…$TRä¶W–g&ÖUG&6³¢F–ÖR—2æ÷BfÆ–BçVÖ&W"ârÂF†—2Â’Â7W'%F–ÖR“° —fÆ–BÒfÇ6S° –'&V³°  —Ð  ––b‚&WeF–ÖRÓÒçVÆÂbb&WeF–ÖRâ7W'%F–ÖR’°  –6öç6öÆRæW'&÷"‚uD…$TRä¶W–g&ÖUG&6³¢÷WBöb÷&FW"¶W—2ârÂF†—2Â’Â7W'%F–ÖRÂ&WeF–ÖR“° —fÆ–BÒfÇ6S° –'&V³°  —Ð  —&WeF–ÖRÒ7W'%F–ÖS°  —Ð  ––b‚fÇVW2ÓÒVæFVf–æVB’°  ––b‚—5G—VD'&’‚fÇVW2’’°  –f÷"‚ÆWB’ÒÂâÒfÇVW2æÆVæwFƒ²’ÓÒã²²²’’°  –6öç7BfÇVRÒfÇVW5²’Ó°  ––b‚—4æâ‚fÇVR’’°  –6öç6öÆRæW'&÷"‚uD…$TRä¶W–g&ÖUG&6³¢fÇVR—2æ÷BfÆ–BçVÖ&W"ârÂF†—2Â’ÂfÇVR“° —fÆ–BÒfÇ6S° –'&V³°  —Ð  —Ð  —Ð  —Ð  —&WGW&âfÆ–C°  —Ð  ’òò&VÖ÷fW2WV—fÆVçB6WVVçF–Â¶W—226öÖÖöâ–âÖ÷'‚F&vWB6WVVæ6W0 ’òòƒÃÃÃÃÃÃÃÃÃÃÃÃÃ’ÒÓâƒÃÃÃÃÃ –÷F–Ö—¦R‚’°  ’òòF–ÖW2÷"fÇVW2Ö’&R6†&VBv—F‚÷F†W"G&6·2Â6ò÷fW'w&—F–ær—2Vç6fP –6öç7BF–ÖW2ÒF†—2çF–ÖW2ç6Æ–6R‚’À —fÇVW2ÒF†—2çfÇVW2ç6Æ–6R‚’À —7G&–FRÒF†—2ævWEfÇVU6—¦R‚’À  —6Öö÷F„–çFW'öÆF–öâÒF†—2ævWD–çFW'öÆF–öâ‚’ÓÓÒ–çFW'öÆFU6Öö÷F‚À  –Æ7D–æFW‚ÒF–ÖW2æÆVæwF‚Ò°  –ÆWBw&—FT–æFW‚Ò°  –f÷"‚ÆWB’Ò²’ÂÆ7D–æFWƒ²²²’’°  –ÆWB¶VWÒfÇ6S°  –6öç7BF–ÖRÒF–ÖW5²’Ó° –6öç7BF–ÖTæW‡BÒF–ÖW5²’²Ó°  ’òò&VÖ÷fRF¦6VçB¶W–g&ÖW266†VGVÆVBBF†R6ÖRF–ÖP  ––b‚F–ÖRÓÒF–ÖTæW‡Bbb‚’ÓÒÇÂF–ÖRÓÒF–ÖW5²Ò’’°  ––b‚6Öö÷F„–çFW'öÆF–öâ’°  ’òò&VÖ÷fRVææV6W76'’¶W–g&ÖW26ÖR2F†V—"æV–v†&÷'0  –6öç7Böfg6WBÒ’¢7G&–FRÀ –öfg6WEÒöfg6WBÒ7G&–FRÀ –öfg6WDâÒöfg6WB²7G&–FS°  –f÷"‚ÆWB¢Ò²¢ÓÒ7G&–FS²²²¢’°  –6öç7BfÇVRÒfÇVW5²öfg6WB²¢Ó°  ––b‚fÇVRÓÒfÇVW5²öfg6WE²¢ÒÇÀ —fÇVRÓÒfÇVW5²öfg6WDâ²¢Ò’°  –¶VWÒG'VS° –'&V³°  —Ð  —Ð  —ÒVÇ6R°  –¶VWÒG'VS°  —Ð  —Ð  ’òò–â×Æ6R6ö×7F–öà  ––b‚¶VW’°  ––b‚’ÓÒw&—FT–æFW‚’°  —F–ÖW5²w&—FT–æFW‚ÒÒF–ÖW5²’Ó°  –6öç7B&VDöfg6WBÒ’¢7G&–FRÀ —w&—FTöfg6WBÒw&—FT–æFW‚¢7G&–FS°  –f÷"‚ÆWB¢Ò²¢ÓÒ7G&–FS²²²¢’°  —fÇVW5²w&—FTöfg6WB²¢ÒÒfÇVW5²&VDöfg6WB²¢Ó°  —Ð  —Ð  ’²²w&—FT–æFWƒ°  —Ð  —Ð  ’òòfÇW6‚Æ7B¶W–g&ÖR†6ö×7F–öâÆöö·2†VB  ––b‚Æ7D–æFW‚â’°  —F–ÖW5²w&—FT–æFW‚ÒÒF–ÖW5²Æ7D–æFW‚Ó°  –f÷"‚ÆWB&VDöfg6WBÒÆ7D–æFW‚¢7G&–FRÂw&—FTöfg6WBÒw&—FT–æFW‚¢7G&–FRÂ¢Ò²¢ÓÒ7G&–FS²²²¢’°  —fÇVW5²w&—FTöfg6WB²¢ÒÒfÇVW5²&VDöfg6WB²¢Ó°  —Ð  ’²²w&—FT–æFWƒ°  —Ð  ––b‚w&—FT–æFW‚ÓÒF–ÖW2æÆVæwF‚’°  —F†—2çF–ÖW2ÒF–ÖW2ç6Æ–6R‚Âw&—FT–æFW‚“° —F†—2çfÇVW2ÒfÇVW2ç6Æ–6R‚Âw&—FT–æFW‚¢7G&–FR“°  —ÒVÇ6R°  —F†—2çF–ÖW2ÒF–ÖW3° —F†—2çfÇVW2ÒfÇVW3°  —Ð  —&WGW&âF†—3°  —Ð  –6ÆöæR‚’°  –6öç7BF–ÖW2ÒF†—2çF–ÖW2ç6Æ–6R‚“° –6öç7BfÇVW2ÒF†—2çfÇVW2ç6Æ–6R‚“°  –6öç7BG—VD¶W–g&ÖUG&6²ÒF†—2æ6öç7G'V7F÷#° –6öç7BG&6²ÒæWrG—VD¶W–g&ÖUG&6²‚F†—2ææÖRÂF–ÖW2ÂfÇVW2“°  ’òò–çFW'öÆçB&wVÖVçBFò6öç7G'V7F÷"—2æ÷B6fVBÂ6ò6÷’F†Rf7F÷'’ÖWF†öBF—&V7FÇ’à —G&6²æ7&VFT–çFW'öÆçBÒF†—2æ7&VFT–çFW'öÆçC°  —&WGW&âG&6³°  —Ð §Ð ¤¶W–g&ÖUG&6²ç&÷F÷G—RåF–ÖT'VffW%G—RÒfÆöC3$'&“°¤¶W–g&ÖUG&6²ç&÷F÷G—RåfÇVT'VffW%G—RÒfÆöC3$'&“°¤¶W–g&ÖUG&6²ç&÷F÷G—RäFVfVÇD–çFW'öÆF–öâÒ–çFW'öÆFTÆ–æV#° ¢ò¢ ¢¢G&6²öb&ööÆVâ¶W–g&ÖRfÇVW2à¢¢ð¦6Æ72&ööÆVä¶W–g&ÖUG&6²W‡FVæG2¶W–g&ÖUG&6²°  ’òòæò–çFW'öÆF–öâ&ÖWFW"&V6W6RöæÇ’–çFW'öÆFTF—67&WFR—2fÆ–Bà –6öç7G'V7F÷"‚æÖRÂF–ÖW2ÂfÇVW2’°  —7WW"‚æÖRÂF–ÖW2ÂfÇVW2“°  —Ð §Ð ¤&ööÆVä¶W–g&ÖUG&6²ç&÷F÷G—RåfÇVUG—TæÖRÒv&ööÂs°¤&ööÆVä¶W–g&ÖUG&6²ç&÷F÷G—RåfÇVT'VffW%G—RÒ'&“°¤&ööÆVä¶W–g&ÖUG&6²ç&÷F÷G—RäFVfVÇD–çFW'öÆF–öâÒ–çFW'öÆFTF—67&WFS°¤&ööÆVä¶W–g&ÖUG&6²ç&÷F÷G—Rä–çFW'öÆçDf7F÷'”ÖWF†öDÆ–æV"ÒVæFVf–æVC°¤&ööÆVä¶W–g&ÖUG&6²ç&÷F÷G—Rä–çFW'öÆçDf7F÷'”ÖWF†öE6Öö÷F‚ÒVæFVf–æVC° ¢ò¢ ¢¢G&6²öb¶W–g&ÖRfÇVW2F†B&W&W6VçB6öÆ÷"à¢¢ð¦6Æ726öÆ÷$¶W–g&ÖUG&6²W‡FVæG2¶W–g&ÖUG&6²·Ð ¤6öÆ÷$¶W–g&ÖUG&6²ç&÷F÷G—RåfÇVUG—TæÖRÒv6öÆ÷"s° ¢ò¢ ¢¢G&6²öbçVÖW&–2¶W–g&ÖRfÇVW2à¢¢ð¦6Æ72çVÖ&W$¶W–g&ÖUG&6²W‡FVæG2¶W–g&ÖUG&6²·Ð ¤çVÖ&W$¶W–g&ÖUG&6²ç&÷F÷G—RåfÇVUG—TæÖRÒvçVÖ&W"s° ¢ò¢ ¢¢7†W&–6ÂÆ–æV"Væ—BVFW&æ–öâ–çFW'öÆçBà¢¢ð ¦6Æ72VFW&æ–öäÆ–æV$–çFW'öÆçBW‡FVæG2–çFW'öÆçB°  –6öç7G'V7F÷"‚&ÖWFW%÷6—F–öç2Â6×ÆUfÇVW2Â6×ÆU6—¦RÂ&W7VÇD'VffW"’°  —7WW"‚&ÖWFW%÷6—F–öç2Â6×ÆUfÇVW2Â6×ÆU6—¦RÂ&W7VÇD'VffW"“°  —Ð  ––çFW'öÆFUò‚“ÂCÂBÂC’°  –6öç7B&W7VÇBÒF†—2ç&W7VÇD'VffW"À —fÇVW2ÒF†—2ç6×ÆUfÇVW2À —7G&–FRÒF†—2çfÇVU6—¦RÀ  –Ç†Ò‚BÒC’ò‚CÒC“°  –ÆWBöfg6WBÒ“¢7G&–FS°  –f÷"‚ÆWBVæBÒöfg6WB²7G&–FS²öfg6WBÓÒVæC²öfg6WB³ÒB’°  •VFW&æ–öâç6ÆW'fÆB‚&W7VÇBÂÂfÇVW2Âöfg6WBÒ7G&–FRÂfÇVW2Âöfg6WBÂÇ†“°  —Ð  —&WGW&â&W7VÇC°  —Ð §Ð ¢ò¢ ¢¢G&6²öbVFW&æ–öâ¶W–g&ÖRfÇVW2à¢¢ð¦6Æ72VFW&æ–öä¶W–g&ÖUG&6²W‡FVæG2¶W–g&ÖUG&6²°  ”–çFW'öÆçDf7F÷'”ÖWF†öDÆ–æV"‚&W7VÇB’°  —&WGW&âæWrVFW&æ–öäÆ–æV$–çFW'öÆçB‚F†—2çF–ÖW2ÂF†—2çfÇVW2ÂF†—2ævWEfÇVU6—¦R‚’Â&W7VÇB“°  —Ð §Ð ¥VFW&æ–öä¶W–g&ÖUG&6²ç&÷F÷G—RåfÇVUG—TæÖRÒwVFW&æ–öâs°¢òòfÇVT'VffW%G—R—2–æ†W&—FV@¢òòFVfVÇD–çFW'öÆF–öâ—2–æ†W&—FVC°¥VFW&æ–öä¶W–g&ÖUG&6²ç&÷F÷G—Rä–çFW'öÆçDf7F÷'”ÖWF†öE6Öö÷F‚ÒVæFVf–æVC° ¢ò¢ ¢¢G&6²F†B–çFW'öÆFW27G&–æw0¢¢ð¦6Æ727G&–æt¶W–g&ÖUG&6²W‡FVæG2¶W–g&ÖUG&6²°  ’òòæò–çFW'öÆF–öâ&ÖWFW"&V6W6RöæÇ’–çFW'öÆFTF—67&WFR—2fÆ–Bà –6öç7G'V7F÷"‚æÖRÂF–ÖW2ÂfÇVW2’°  —7WW"‚æÖRÂF–ÖW2ÂfÇVW2“°  —Ð §Ð ¥7G&–æt¶W–g&ÖUG&6²ç&÷F÷G—RåfÇVUG—TæÖRÒw7G&–ærs°¥7G&–æt¶W–g&ÖUG&6²ç&÷F÷G—RåfÇVT'VffW%G—RÒ'&“°¥7G&–æt¶W–g&ÖUG&6²ç&÷F÷G—RäFVfVÇD–çFW'öÆF–öâÒ–çFW'öÆFTF—67&WFS°¥7G&–æt¶W–g&ÖUG&6²ç&÷F÷G—Rä–çFW'öÆçDf7F÷'”ÖWF†öDÆ–æV"ÒVæFVf–æVC°¥7G&–æt¶W–g&ÖUG&6²ç&÷F÷G—Rä–çFW'öÆçDf7F÷'”ÖWF†öE6Öö÷F‚ÒVæFVf–æVC° ¢ò¢ ¢¢G&6²öbfV7F÷&VB¶W–g&ÖRfÇVW2à¢¢ð¦6Æ72fV7F÷$¶W–g&ÖUG&6²W‡FVæG2¶W–g&ÖUG&6²·Ð ¥fV7F÷$¶W–g&ÖUG&6²ç&÷F÷G—RåfÇVUG—TæÖRÒwfV7F÷"s° ¦6Æ72æ–ÖF–öä6Æ—°  –6öç7G'V7F÷"‚æÖRÒrrÂGW&F–öâÒÒÂG&6·2ÒµÒÂ&ÆVæDÖöFRÒæ÷&ÖÄæ–ÖF–öä&ÆVæDÖöFR’°  —F†—2ææÖRÒæÖS° —F†—2çG&6·2ÒG&6·3° —F†—2æGW&F–öâÒGW&F–öã° —F†—2æ&ÆVæDÖöFRÒ&ÆVæDÖöFS°  —F†—2çWV–BÒvVæW&FUUT”B‚“°  ’òòF†—2ÖVç2—B6†÷VÆBf–wW&R÷WB—G2GW&F–öâ'’66ææ–ærF†RG&6·0 ––b‚F†—2æGW&F–öâÂ’°  —F†—2ç&W6WDGW&F–öâ‚“°  —Ð  —Ð   —7FF–2'6R‚§6öâ’°  –6öç7BG&6·2ÒµÒÀ –§6öåG&6·2Ò§6öâçG&6·2À –g&ÖUF–ÖRÒãò‚§6öâæg2ÇÂã“°  –f÷"‚ÆWB’ÒÂâÒ§6öåG&6·2æÆVæwFƒ²’ÓÒã²²²’’°  —G&6·2çW6‚‚'6T¶W–g&ÖUG&6²‚§6öåG&6·5²’Ò’ç66ÆR‚g&ÖUF–ÖR’“°  —Ð  –6öç7B6Æ—ÒæWrF†—2‚§6öâææÖRÂ§6öâæGW&F–öâÂG&6·2Â§6öâæ&ÆVæDÖöFR“° –6Æ—çWV–BÒ§6öâçWV–C°  —&WGW&â6Æ—°  —Ð  —7FF–2Fô¥4ôâ‚6Æ—’°  –6öç7BG&6·2ÒµÒÀ –6Æ—G&6·2Ò6Æ—çG&6·3°  –6öç7B§6öâÒ°  ’væÖRs¢6Æ—ææÖRÀ ’vGW&F–öâs¢6Æ—æGW&F–öâÀ ’wG&6·2s¢G&6·2À ’wWV–Bs¢6Æ—çWV–BÀ ’v&ÆVæDÖöFRs¢6Æ—æ&ÆVæDÖöFP  —Ó°  –f÷"‚ÆWB’ÒÂâÒ6Æ—G&6·2æÆVæwFƒ²’ÓÒã²²²’’°  —G&6·2çW6‚‚¶W–g&ÖUG&6²çFô¥4ôâ‚6Æ—G&6·5²’Ò’“°  —Ð  —&WGW&â§6öã°  —Ð  —7FF–27&VFTg&öÔÖ÷'…F&vWE6WVVæ6R‚æÖRÂÖ÷'…F&vWE6WVVæ6RÂg2ÂæôÆö÷’°  –6öç7BçVÔÖ÷'…F&vWG2ÒÖ÷'…F&vWE6WVVæ6RæÆVæwFƒ° –6öç7BG&6·2ÒµÓ°  –f÷"‚ÆWB’Ò²’ÂçVÔÖ÷'…F&vWG3²’²²’°  –ÆWBF–ÖW2ÒµÓ° –ÆWBfÇVW2ÒµÓ°  —F–ÖW2çW6‚€ ’‚’²çVÔÖ÷'…F&vWG2Ò’RçVÔÖ÷'…F&vWG2À –’À ’‚’²’RçVÔÖ÷'…F&vWG2“°  —fÇVW2çW6‚‚ÂÂ“°  –6öç7B÷&FW"ÒvWD¶W–g&ÖT÷&FW"‚F–ÖW2“° —F–ÖW2Ò6÷'FVD'&’‚F–ÖW2ÂÂ÷&FW"“° —fÇVW2Ò6÷'FVD'&’‚fÇVW2ÂÂ÷&FW"“°  ’òò–bF†W&R—2¶W’BF†Rf—'7Bg&ÖRÂGWÆ–6FR—B2F†P ’òòÆ7Bg&ÖR2vVÆÂf÷"W&fV7BÆö÷à ––b‚æôÆö÷bbF–ÖW5²ÒÓÓÒ’°  —F–ÖW2çW6‚‚çVÔÖ÷'…F&vWG2“° —fÇVW2çW6‚‚fÇVW5²Ò“°  —Ð  —G&6·2çW6‚€ –æWrçVÖ&W$¶W–g&ÖUG&6²€ ’ræÖ÷'…F&vWD–æfÇVVæ6W5²r²Ö÷'…F&vWE6WVVæ6U²’ÒææÖR²uÒrÀ —F–ÖW2ÂfÇVW0 ’’ç66ÆR‚ãòg2’“°  —Ð  —&WGW&âæWrF†—2‚æÖRÂÒÂG&6·2“°  —Ð  —7FF–2f–æD'”æÖR‚ö&¦V7D÷$6Æ—'&’ÂæÖR’°  –ÆWB6Æ—'&’Òö&¦V7D÷$6Æ—'&“°  ––b‚'&’æ—4'&’‚ö&¦V7D÷$6Æ—'&’’’°  –6öç7BòÒö&¦V7D÷$6Æ—'&“° –6Æ—'&’ÒòævVöÖWG'’bbòævVöÖWG'’ææ–ÖF–öç2ÇÂòææ–ÖF–öç3°  —Ð  –f÷"‚ÆWB’Ò²’Â6Æ—'&’æÆVæwFƒ²’²²’°  ––b‚6Æ—'&•²’ÒææÖRÓÓÒæÖR’°  —&WGW&â6Æ—'&•²’Ó°  —Ð  —Ð  —&WGW&âçVÆÃ°  —Ð  —7FF–27&VFT6Æ—4g&öÔÖ÷'…F&vWE6WVVæ6W2‚Ö÷'…F&vWG2Âg2ÂæôÆö÷’°  –6öç7Bæ–ÖF–öåFôÖ÷'…F&vWG2Ò·Ó°  ’òòFW7FVBv—F‚‡GG3¢ò÷&VvWƒæ6öÒòöâG&–6²6WVVæ6W0 ’òò7V6‚fÆÖ–ævõöfÇ”ó2ÂfÆÖ–ævõ÷'Vãó2Â7&FVFƒS –6öç7BGFW&âÒõâ…µÇrÕÒ£ò’…µÆEÒ²’Bó°  ’òò6÷'BÖ÷'‚F&vWBæÖW2–çFòæ–ÖF–öâw&÷W2&6V@ ’òòGFW&ç2Æ–¶RvÆµóÂvÆµó"Â'VåóÂ'Våó  –f÷"‚ÆWB’ÒÂ–ÂÒÖ÷'…F&vWG2æÆVæwFƒ²’Â–Ã²’²²’°  –6öç7BÖ÷'…F&vWBÒÖ÷'…F&vWG5²’Ó° –6öç7B'G2ÒÖ÷'…F&vWBææÖRæÖF6‚‚GFW&â“°  ––b‚'G2bb'G2æÆVæwF‚â’°  –6öç7BæÖRÒ'G5²Ó°  –ÆWBæ–ÖF–öäÖ÷'…F&vWG2Òæ–ÖF–öåFôÖ÷'…F&vWG5²æÖRÓ°  ––b‚æ–ÖF–öäÖ÷'…F&vWG2’°  –æ–ÖF–öåFôÖ÷'…F&vWG5²æÖRÒÒæ–ÖF–öäÖ÷'…F&vWG2ÒµÓ°  —Ð  –æ–ÖF–öäÖ÷'…F&vWG2çW6‚‚Ö÷'…F&vWB“°  —Ð  —Ð  –6öç7B6Æ—2ÒµÓ°  –f÷"‚6öç7BæÖR–âæ–ÖF–öåFôÖ÷'…F&vWG2’°  –6Æ—2çW6‚‚F†—2ä7&VFTg&öÔÖ÷'…F&vWE6WVVæ6R‚æÖRÂæ–ÖF–öåFôÖ÷'…F&vWG5²æÖRÒÂg2ÂæôÆö÷’“°  —Ð  —&WGW&â6Æ—3°  —Ð  ’òò'6RF†Ræ–ÖF–öâæ†–W&&6‡’f÷&Ö@ —7FF–2'6Tæ–ÖF–öâ‚æ–ÖF–öâÂ&öæW2’°  ––b‚æ–ÖF–öâ’°  –6öç6öÆRæW'&÷"‚uD…$TRäæ–ÖF–öä6Æ—¢æòæ–ÖF–öâ–â¥4ôäÆöFW"FFâr“° —&WGW&âçVÆÃ°  —Ð  –6öç7BFDæöæV×G•G&6²ÒgVæ7F–öâ‚G&6µG—RÂG&6´æÖRÂæ–ÖF–öä¶W—2Â&÷W'G”æÖRÂFW7EG&6·2’°  ’òòöæÇ’&WGW&âG&6²–bF†W&R&R7GVÆÇ’¶W—2à ––b‚æ–ÖF–öä¶W—2æÆVæwF‚ÓÒ’°  –6öç7BF–ÖW2ÒµÓ° –6öç7BfÇVW2ÒµÓ°  –fÆGFVä¥4ôâ‚æ–ÖF–öä¶W—2ÂF–ÖW2ÂfÇVW2Â&÷W'G”æÖR“°  ’òòV×G’¶W—2&Rf–ÇFW&VB÷WBÂ6ò6†V6²v–à ––b‚F–ÖW2æÆVæwF‚ÓÒ’°  –FW7EG&6·2çW6‚‚æWrG&6µG—R‚G&6´æÖRÂF–ÖW2ÂfÇVW2’“°  —Ð  —Ð  —Ó°  –6öç7BG&6·2ÒµÓ°  –6öç7B6Æ—æÖRÒæ–ÖF–öâææÖRÇÂvFVfVÇBs° –6öç7Bg2Òæ–ÖF–öâæg2ÇÂ3° –6öç7B&ÆVæDÖöFRÒæ–ÖF–öâæ&ÆVæDÖöFS°  ’òòWFöÖF–2ÆVæwF‚FWFW&Ö–æF–öâ–âæ–ÖF–öä6Æ—à –ÆWBGW&F–öâÒæ–ÖF–öâæÆVæwF‚ÇÂÒ°  –6öç7B†–W&&6‡•G&6·2Òæ–ÖF–öâæ†–W&&6‡’ÇÂµÓ°  –f÷"‚ÆWB‚Ò²‚Â†–W&&6‡•G&6·2æÆVæwFƒ²‚²²’°  –6öç7Bæ–ÖF–öä¶W—2Ò†–W&&6‡•G&6·5²‚Òæ¶W—3°  ’òò6¶—V×G’G&6·0 ––b‚æ–ÖF–öä¶W—2ÇÂæ–ÖF–öä¶W—2æÆVæwF‚ÓÓÒ’6öçF–çVS°  ’òò&ö6W72Ö÷'‚F&vWG0 ––b‚æ–ÖF–öä¶W—5²ÒæÖ÷'…F&vWG2’°  ’òòf–wW&R÷WBÆÂÖ÷'‚F&vWG2W6VB–âF†—2G&6° –6öç7BÖ÷'…F&vWDæÖW2Ò·Ó°  –ÆWB³°  –f÷"‚²Ò²²Âæ–ÖF–öä¶W—2æÆVæwFƒ²²²²’°  ––b‚æ–ÖF–öä¶W—5²²ÒæÖ÷'…F&vWG2’°  –f÷"‚ÆWBÒÒ²ÒÂæ–ÖF–öä¶W—5²²ÒæÖ÷'…F&vWG2æÆVæwFƒ²Ò²²’°  –Ö÷'…F&vWDæÖW5²æ–ÖF–öä¶W—5²²ÒæÖ÷'…F&vWG5²ÒÒÒÒÒ°  —Ð  —Ð  —Ð  ’òò7&VFRG&6²f÷"V6‚Ö÷'‚F&vWBv—F‚ÆÂ¦W&ð ’òòÖ÷'…F&vWD–æfÇVVæ6W2W†6WBf÷"F†R¶W—2–âv†–6€ ’òòF†RÖ÷'…F&vWB—2æÖVBà –f÷"‚6öç7BÖ÷'…F&vWDæÖR–âÖ÷'…F&vWDæÖW2’°  –6öç7BF–ÖW2ÒµÓ° –6öç7BfÇVW2ÒµÓ°  –f÷"‚ÆWBÒÒ²ÒÓÒæ–ÖF–öä¶W—5²²ÒæÖ÷'…F&vWG2æÆVæwFƒ²²²Ò’°  –6öç7Bæ–ÖF–öä¶W’Òæ–ÖF–öä¶W—5²²Ó°  —F–ÖW2çW6‚‚æ–ÖF–öä¶W’çF–ÖR“° —fÇVW2çW6‚‚‚æ–ÖF–öä¶W’æÖ÷'…F&vWBÓÓÒÖ÷'…F&vWDæÖR’ò¢“°  —Ð  —G&6·2çW6‚‚æWrçVÖ&W$¶W–g&ÖUG&6²‚ræÖ÷'…F&vWD–æfÇVVæ6U²r²Ö÷'…F&vWDæÖR²uÒrÂF–ÖW2ÂfÇVW2’“°  —Ð  –GW&F–öâÒÖ÷'…F&vWDæÖW2æÆVæwF‚¢g3°  —ÒVÇ6R°  ’òòââæ77VÖR6¶VÆWFÂæ–ÖF–öà  –6öç7B&öæTæÖRÒræ&öæW5²r²&öæW5²‚ÒææÖR²uÒs°  –FDæöæV×G•G&6²€ •fV7F÷$¶W–g&ÖUG&6²Â&öæTæÖR²rç÷6—F–öârÀ –æ–ÖF–öä¶W—2Âw÷2rÂG&6·2“°  –FDæöæV×G•G&6²€ •VFW&æ–öä¶W–g&ÖUG&6²Â&öæTæÖR²rçVFW&æ–öârÀ –æ–ÖF–öä¶W—2Âw&÷BrÂG&6·2“°  –FDæöæV×G•G&6²€ •fV7F÷$¶W–g&ÖUG&6²Â&öæTæÖR²rç66ÆRrÀ –æ–ÖF–öä¶W—2Âw66ÂrÂG&6·2“°  —Ð  —Ð  ––b‚G&6·2æÆVæwF‚ÓÓÒ’°  —&WGW&âçVÆÃ°  —Ð  –6öç7B6Æ—ÒæWrF†—2‚6Æ—æÖRÂGW&F–öâÂG&6·2Â&ÆVæDÖöFR“°  —&WGW&â6Æ—°  —Ð  —&W6WDGW&F–öâ‚’°  –6öç7BG&6·2ÒF†—2çG&6·3° –ÆWBGW&F–öâÒ°  –f÷"‚ÆWB’ÒÂâÒG&6·2æÆVæwFƒ²’ÓÒã²²²’’°  –6öç7BG&6²ÒF†—2çG&6·5²’Ó°  –GW&F–öâÒÖF‚æÖ‚‚GW&F–öâÂG&6²çF–ÖW5²G&6²çF–ÖW2æÆVæwF‚ÒÒ“°  —Ð  —F†—2æGW&F–öâÒGW&F–öã°  —&WGW&âF†—3°  —Ð  —G&–Ò‚’°  –f÷"‚ÆWB’Ò²’ÂF†—2çG&6·2æÆVæwFƒ²’²²’°  —F†—2çG&6·5²’ÒçG&–Ò‚ÂF†—2æGW&F–öâ“°  —Ð  —&WGW&âF†—3°  —Ð  —fÆ–FFR‚’°  –ÆWBfÆ–BÒG'VS°  –f÷"‚ÆWB’Ò²’ÂF†—2çG&6·2æÆVæwFƒ²’²²’°  —fÆ–BÒfÆ–BbbF†—2çG&6·5²’ÒçfÆ–FFR‚“°  —Ð  —&WGW&âfÆ–C°  —Ð  –÷F–Ö—¦R‚’°  –f÷"‚ÆWB’Ò²’ÂF†—2çG&6·2æÆVæwFƒ²’²²’°  —F†—2çG&6·5²’Òæ÷F–Ö—¦R‚“°  —Ð  —&WGW&âF†—3°  —Ð  –6ÆöæR‚’°  –6öç7BG&6·2ÒµÓ°  –f÷"‚ÆWB’Ò²’ÂF†—2çG&6·2æÆVæwFƒ²’²²’°  —G&6·2çW6‚‚F†—2çG&6·5²’Òæ6ÆöæR‚’“°  —Ð  —&WGW&âæWrF†—2æ6öç7G'V7F÷"‚F†—2ææÖRÂF†—2æGW&F–öâÂG&6·2ÂF†—2æ&ÆVæDÖöFR“°  —Ð  —Fô¥4ôâ‚’°  —&WGW&âF†—2æ6öç7G'V7F÷"çFô¥4ôâ‚F†—2“°  —Ð §Ð ¦gVæ7F–öâvWEG&6µG—Tf÷%fÇVUG—TæÖR‚G—TæÖR’°  —7v—F6‚‚G—TæÖRçFôÆ÷vW$66R‚’’°  –66Rw66Æ"s  –66RvF÷V&ÆRs  –66RvfÆöBs  –66RvçVÖ&W"s  –66Rv–çFVvW"s   —&WGW&âçVÖ&W$¶W–g&ÖUG&6³°  –66RwfV7F÷"s  –66RwfV7F÷#"s  –66RwfV7F÷#2s  –66RwfV7F÷#Bs   —&WGW&âfV7F÷$¶W–g&ÖUG&6³°  –66Rv6öÆ÷"s   —&WGW&â6öÆ÷$¶W–g&ÖUG&6³°  –66RwVFW&æ–öâs   —&WGW&âVFW&æ–öä¶W–g&ÖUG&6³°  –66Rv&ööÂs  –66Rv&ööÆVâs   —&WGW&â&ööÆVä¶W–g&ÖUG&6³°  –66Rw7G&–ærs   —&WGW&â7G&–æt¶W–g&ÖUG&6³°  —Ð  —F‡&÷ræWrW'&÷"‚uD…$TRä¶W–g&ÖUG&6³¢Vç7W÷'FVBG—TæÖS¢r²G—TæÖR“° §Ð ¦gVæ7F–öâ'6T¶W–g&ÖUG&6²‚§6öâ’°  ––b‚§6öâçG—RÓÓÒVæFVf–æVB’°  —F‡&÷ræWrW'&÷"‚uD…$TRä¶W–g&ÖUG&6³¢G&6²G—RVæFVf–æVBÂ6âæ÷B'6Rr“°  —Ð  –6öç7BG&6µG—RÒvWEG&6µG—Tf÷%fÇVUG—TæÖR‚§6öâçG—R“°  ––b‚§6öâçF–ÖW2ÓÓÒVæFVf–æVB’°  –6öç7BF–ÖW2ÒµÒÂfÇVW2ÒµÓ°  –fÆGFVä¥4ôâ‚§6öâæ¶W—2ÂF–ÖW2ÂfÇVW2ÂwfÇVRr“°  –§6öâçF–ÖW2ÒF–ÖW3° –§6öâçfÇVW2ÒfÇVW3°  —Ð  ’òòFW&—fVB6Æ76W26âFVf–æR7FF–2'6RÖWF†ö@ ––b‚G&6µG—Rç'6RÓÒVæFVf–æVB’°  —&WGW&âG&6µG—Rç'6R‚§6öâ“°  —ÒVÇ6R°  ’òò'’FVfVÇBÂvR77VÖR6öç7G'V7F÷"6ö×F–&ÆRv—F‚F†R&6P —&WGW&âæWrG&6µG—R‚§6öâææÖRÂ§6öâçF–ÖW2Â§6öâçfÇVW2Â§6öâæ–çFW'öÆF–öâ“°  —Ð §Ð ¦6öç7B66†RÒ°  –Væ&ÆVC¢fÇ6RÀ  –f–ÆW3¢·ÒÀ  –FC¢gVæ7F–öâ‚¶W’Âf–ÆR’°  ––b‚F†—2æVæ&ÆVBÓÓÒfÇ6R’&WGW&ã°  ’òò6öç6öÆRæÆör‚uD…$TRä66†RrÂtFF–ær¶W“¢rÂ¶W’“°  —F†—2æf–ÆW5²¶W’ÒÒf–ÆS°  —ÒÀ  –vWC¢gVæ7F–öâ‚¶W’’°  ––b‚F†—2æVæ&ÆVBÓÓÒfÇ6R’&WGW&ã°  ’òò6öç6öÆRæÆör‚uD…$TRä66†RrÂt6†V6¶–ær¶W“¢rÂ¶W’“°  —&WGW&âF†—2æf–ÆW5²¶W’Ó°  —ÒÀ  —&VÖ÷fS¢gVæ7F–öâ‚¶W’’°  –FVÆWFRF†—2æf–ÆW5²¶W’Ó°  —ÒÀ  –6ÆV#¢gVæ7F–öâ‚’°  —F†—2æf–ÆW2Ò·Ó°  —Ð §Ó° ¦6Æ72ÆöF–ætÖævW"°  –6öç7G'V7F÷"‚öäÆöBÂöå&öw&W72ÂöäW'&÷"’°  –6öç7B66÷RÒF†—3°  –ÆWB—4ÆöF–ærÒfÇ6S° –ÆWB—FV×4ÆöFVBÒ° –ÆWB—FV×5F÷FÂÒ° –ÆWBW&ÄÖöF–f–W"ÒVæFVf–æVC° –6öç7B†æFÆW'2ÒµÓ°  ’òò&VfW"Fò3Scƒ’f÷"F†R&V6öâv‡’vRFöâwB6WBæöå7F'@ ’òò–âF†R6öç7G'V7F÷   —F†—2æöå7F'BÒVæFVf–æVC° —F†—2æöäÆöBÒöäÆöC° —F†—2æöå&öw&W72Òöå&öw&W73° —F†—2æöäW'&÷"ÒöäW'&÷#°  —F†—2æ—FVÕ7F'BÒgVæ7F–öâ‚W&Â’°  –—FV×5F÷FÂ²³°  ––b‚—4ÆöF–ærÓÓÒfÇ6R’°  ––b‚66÷Ræöå7F'BÓÒVæFVf–æVB’°  —66÷Ræöå7F'B‚W&ÂÂ—FV×4ÆöFVBÂ—FV×5F÷FÂ“°  —Ð  —Ð  –—4ÆöF–ærÒG'VS°  —Ó°  —F†—2æ—FVÔVæBÒgVæ7F–öâ‚W&Â’°  –—FV×4ÆöFVB²³°  ––b‚66÷Ræöå&öw&W72ÓÒVæFVf–æVB’°  —66÷Ræöå&öw&W72‚W&ÂÂ—FV×4ÆöFVBÂ—FV×5F÷FÂ“°  —Ð  ––b‚—FV×4ÆöFVBÓÓÒ—FV×5F÷FÂ’°  –—4ÆöF–ærÒfÇ6S°  ––b‚66÷RæöäÆöBÓÒVæFVf–æVB’°  —66÷RæöäÆöB‚“°  —Ð  —Ð  —Ó°  —F†—2æ—FVÔW'&÷"ÒgVæ7F–öâ‚W&Â’°  ––b‚66÷RæöäW'&÷"ÓÒVæFVf–æVB’°  —66÷RæöäW'&÷"‚W&Â“°  —Ð  —Ó°  —F†—2ç&W6öÇfUU$ÂÒgVæ7F–öâ‚W&Â’°  ––b‚W&ÄÖöF–f–W"’°  —&WGW&âW&ÄÖöF–f–W"‚W&Â“°  —Ð  —&WGW&âW&Ã°  —Ó°  —F†—2ç6WEU$ÄÖöF–f–W"ÒgVæ7F–öâ‚G&ç6f÷&Ò’°  —W&ÄÖöF–f–W"ÒG&ç6f÷&Ó°  —&WGW&âF†—3°  —Ó°  —F†—2æFD†æFÆW"ÒgVæ7F–öâ‚&VvW‚ÂÆöFW"’°  –†æFÆW'2çW6‚‚&VvW‚ÂÆöFW"“°  —&WGW&âF†—3°  —Ó°  —F†—2ç&VÖ÷fT†æFÆW"ÒgVæ7F–öâ‚&VvW‚’°  –6öç7B–æFW‚Ò†æFÆW'2æ–æFW„öb‚&VvW‚“°  ––b‚–æFW‚ÓÒÒ’°  –†æFÆW'2ç7Æ–6R‚–æFW‚Â"“°  —Ð  —&WGW&âF†—3°  —Ó°  —F†—2ævWD†æFÆW"ÒgVæ7F–öâ‚f–ÆR’°  –f÷"‚ÆWB’ÒÂÂÒ†æFÆW'2æÆVæwFƒ²’ÂÃ²’³Ò"’°  –6öç7B&VvW‚Ò†æFÆW'5²’Ó° –6öç7BÆöFW"Ò†æFÆW'5²’²Ó°  ––b‚&VvW‚ævÆö&Â’&VvW‚æÆ7D–æFW‚Ò²òò6VR3s“#   ––b‚&VvW‚çFW7B‚f–ÆR’’°  —&WGW&âÆöFW#°  —Ð  —Ð  —&WGW&âçVÆÃ°  —Ó°  —Ð §Ð ¦6öç7BFVfVÇDÆöF–ætÖævW"Òò¤õõU$Uõò¢òæWrÆöF–ætÖævW"‚“° ¦6Æ72ÆöFW"°  –6öç7G'V7F÷"‚ÖævW"’°  —F†—2æÖævW"Ò‚ÖævW"ÓÒVæFVf–æVB’òÖævW"¢FVfVÇDÆöF–ætÖævW#°  —F†—2æ7&÷74÷&–v–âÒvæöç–Ö÷W2s° —F†—2çv—F„7&VFVçF–Ç2ÒfÇ6S° —F†—2çF‚Òrs° —F†—2ç&W6÷W&6UF‚Òrs° —F†—2ç&WVW7D†VFW"Ò·Ó°  —Ð  –ÆöB‚ò¢W&ÂÂöäÆöBÂöå&öw&W72ÂöäW'&÷"¢ò’·Ð  –ÆöD7–æ2‚W&ÂÂöå&öw&W72’°  –6öç7B66÷RÒF†—3°  —&WGW&âæWr&öÖ—6R‚gVæ7F–öâ‚&W6öÇfRÂ&V¦V7B’°  —66÷RæÆöB‚W&ÂÂ&W6öÇfRÂöå&öw&W72Â&V¦V7B“°  —Ò“°  —Ð  —'6R‚ò¢FF¢ò’·Ð  —6WD7&÷74÷&–v–â‚7&÷74÷&–v–â’°  —F†—2æ7&÷74÷&–v–âÒ7&÷74÷&–v–ã° —&WGW&âF†—3°  —Ð  —6WEv—F„7&VFVçF–Ç2‚fÇVR’°  —F†—2çv—F„7&VFVçF–Ç2ÒfÇVS° —&WGW&âF†—3°  —Ð  —6WEF‚‚F‚’°  —F†—2çF‚ÒFƒ° —&WGW&âF†—3°  —Ð  —6WE&W6÷W&6UF‚‚&W6÷W&6UF‚’°  —F†—2ç&W6÷W&6UF‚Ò&W6÷W&6UFƒ° —&WGW&âF†—3°  —Ð  —6WE&WVW7D†VFW"‚&WVW7D†VFW"’°  —F†—2ç&WVW7D†VFW"Ò&WVW7D†VFW#° —&WGW&âF†—3°  —Ð §Ð ¤ÆöFW"äDTdTÅEôÔDU$”ÅôäÔRÒuõôDTdTÅBs° ¦6öç7BÆöF–ærÒ·Ó° ¦6Æ72‡GGW'&÷"W‡FVæG2W'&÷"°  –6öç7G'V7F÷"‚ÖW76vRÂ&W7öç6R’°  —7WW"‚ÖW76vR“° —F†—2ç&W7öç6RÒ&W7öç6S°  —Ð §Ð ¦6Æ72f–ÆTÆöFW"W‡FVæG2ÆöFW"°  –6öç7G'V7F÷"‚ÖævW"’°  —7WW"‚ÖævW"“°  —Ð  –ÆöB‚W&ÂÂöäÆöBÂöå&öw&W72ÂöäW'&÷"’°  ––b‚W&ÂÓÓÒVæFVf–æVB’W&ÂÒrs°  ––b‚F†—2çF‚ÓÒVæFVf–æVB’W&ÂÒF†—2çF‚²W&Ã°  —W&ÂÒF†—2æÖævW"ç&W6öÇfUU$Â‚W&Â“°  –6öç7B66†VBÒ66†RævWB‚W&Â“°  ––b‚66†VBÓÒVæFVf–æVB’°  —F†—2æÖævW"æ—FVÕ7F'B‚W&Â“°  —6WEF–ÖV÷WB‚‚’Óâ°  ––b‚öäÆöB’öäÆöB‚66†VB“°  —F†—2æÖævW"æ—FVÔVæB‚W&Â“°  —ÒÂ“°  —&WGW&â66†VC°  —Ð  ’òò6†V6²–b&WVW7B—2GWÆ–6FP  ––b‚ÆöF–æu²W&ÂÒÓÒVæFVf–æVB’°  –ÆöF–æu²W&ÂÒçW6‚‚°  –öäÆöC¢öäÆöBÀ –öå&öw&W73¢öå&öw&W72À –öäW'&÷#¢öäW'&÷   —Ò“°  —&WGW&ã°  —Ð  ’òò–æ—F–Æ—6R'&’f÷"GWÆ–6FR&WVW7G0 –ÆöF–æu²W&ÂÒÒµÓ°  –ÆöF–æu²W&ÂÒçW6‚‚° –öäÆöC¢öäÆöBÀ –öå&öw&W73¢öå&öw&W72À –öäW'&÷#¢öäW'&÷"À —Ò“°  ’òò7&VFR&WVW7@ –6öç7B&WÒæWr&WVW7B‚W&ÂÂ° –†VFW'3¢æWr†VFW'2‚F†—2ç&WVW7D†VFW"’À –7&VFVçF–Ç3¢F†—2çv—F„7&VFVçF–Ç2òv–æ6ÇVFRr¢w6ÖRÖ÷&–v–ârÀ ’òòâ&÷'B6öçG&öÆÆW"6÷VÆB&RFFVBv—F†–âgWGW&R  —Ò“°  ’òò&V6÷&B7FFW2‚fö–BFF&6R –6öç7BÖ–ÖUG—RÒF†—2æÖ–ÖUG—S° –6öç7B&W7öç6UG—RÒF†—2ç&W7öç6UG—S°  ’òò7F'BF†RfWF6€ –fWF6‚‚&W ’çF†Vâ‚&W7öç6RÓâ°  ––b‚&W7öç6Rç7FGW2ÓÓÒ#ÇÂ&W7öç6Rç7FGW2ÓÓÒ’°  ’òò6öÖR'&÷w6W'2&WGW&â…EE7FGW2v†VâW6–æræöâÖ‡GG&÷Fö6öÀ ’òòRærâvf–ÆS¢òòr÷"vFF¢òòrâ†æFÆR27V66W72à  ––b‚&W7öç6Rç7FGW2ÓÓÒ’°  –6öç6öÆRçv&â‚uD…$TRäf–ÆTÆöFW#¢…EE7FGW2&V6V—fVBâr“°  —Ð  ’òòv÷&¶&÷VæC¢6†V6¶–ær–b&W7öç6Ræ&öG’ÓÓÒVæFVf–æVBf÷"Æ—’'&÷w6W"3#3SC€  ––b‚G—Vöb&VF&ÆU7G&VÒÓÓÒwVæFVf–æVBrÇÂ&W7öç6Ræ&öG’ÓÓÒVæFVf–æVBÇÂ&W7öç6Ræ&öG’ævWE&VFW"ÓÓÒVæFVf–æVB’°  —&WGW&â&W7öç6S°  —Ð  –6öç7B6ÆÆ&6·2ÒÆöF–æu²W&ÂÓ° –6öç7B&VFW"Ò&W7öç6Ræ&öG’ævWE&VFW"‚“°  ’òòæv–ç‚æVVG2‚Ôf–ÆRÕ6—¦R6†V6° ’òò‡GG3¢ò÷6W'fW&fVÇBæ6öÒ÷VW7F–öç2óCƒ#ƒsR÷v‡’ÖFöW2Öæv–ç‚×&VÖ÷fRÖ6öçFVçBÖÆVæwF‚Ö†VFW"Öf÷"Ö6‡Væ¶VBÖ6öçFVç@ –6öç7B6öçFVçDÆVæwF‚Ò&W7öç6Ræ†VFW'2ævWB‚u‚Ôf–ÆRÕ6—¦Rr’ÇÂ&W7öç6Ræ†VFW'2ævWB‚t6öçFVçBÔÆVæwF‚r“° –6öç7BF÷FÂÒ6öçFVçDÆVæwF‚ò'6T–çB‚6öçFVçDÆVæwF‚’¢° –6öç7BÆVæwF„6ö×WF&ÆRÒF÷FÂÓÒ° –ÆWBÆöFVBÒ°  ’òòW&–öF–6ÆÇ’&VBFF–çFòF†RæWr7G&VÒG&6¶–ærv†–ÆRF÷væÆöB&öw&W70 –6öç7B7G&VÒÒæWr&VF&ÆU7G&VÒ‚° —7F'B‚6öçG&öÆÆW"’°  —&VDFF‚“°  –gVæ7F–öâ&VDFF‚’°  —&VFW"ç&VB‚’çF†Vâ‚‚²FöæRÂfÇVRÒ’Óâ°  ––b‚FöæR’°  –6öçG&öÆÆW"æ6Æ÷6R‚“°  —ÒVÇ6R°  –ÆöFVB³ÒfÇVRæ'—FTÆVæwFƒ°  –6öç7BWfVçBÒæWr&öw&W74WfVçB‚w&öw&W72rÂ²ÆVæwF„6ö×WF&ÆRÂÆöFVBÂF÷FÂÒ“° –f÷"‚ÆWB’ÒÂ–ÂÒ6ÆÆ&6·2æÆVæwFƒ²’Â–Ã²’²²’°  –6öç7B6ÆÆ&6²Ò6ÆÆ&6·5²’Ó° ––b‚6ÆÆ&6²æöå&öw&W72’6ÆÆ&6²æöå&öw&W72‚WfVçB“°  —Ð  –6öçG&öÆÆW"æVçVWVR‚fÇVR“° —&VDFF‚“°  —Ð  —ÒÂ‚R’Óâ°  –6öçG&öÆÆW"æW'&÷"‚R“°  —Ò“°  —Ð  —Ð  —Ò“°  —&WGW&âæWr&W7öç6R‚7G&VÒ“°  —ÒVÇ6R°  —F‡&÷ræWr‡GGW'&÷"‚fWF6‚f÷""G·&W7öç6RçW&ÇÒ"&W7öæFVBv—F‚G·&W7öç6Rç7FGW7Ó¢G·&W7öç6Rç7FGW5FW‡GÖÂ&W7öç6R“°  —Ð  —Ò ’çF†Vâ‚&W7öç6RÓâ°  —7v—F6‚‚&W7öç6UG—R’°  –66Rv'&–'VffW"s   —&WGW&â&W7öç6Ræ'&”'VffW"‚“°  –66Rv&Æö"s   —&WGW&â&W7öç6Ræ&Æö"‚“°  –66RvFö7VÖVçBs   —&WGW&â&W7öç6RçFW‡B‚ ’çF†Vâ‚FW‡BÓâ°  –6öç7B'6W"ÒæWrDôÕ'6W"‚“° —&WGW&â'6W"ç'6Tg&öÕ7G&–ær‚FW‡BÂÖ–ÖUG—R“°  —Ò“°  –66Rv§6öâs   —&WGW&â&W7öç6Ræ§6öâ‚“°  –FVfVÇC   ––b‚Ö–ÖUG—RÓÓÒVæFVf–æVB’°  —&WGW&â&W7öç6RçFW‡B‚“°  —ÒVÇ6R°  ’òò6æ–fbVæ6öF–æp –6öç7B&RÒö6†'6WCÒ#ò…µã²%Ç5Ò¢’#òö“° –6öç7BW†V2Ò&RæW†V2‚Ö–ÖUG—R“° –6öç7BÆ&VÂÒW†V2bbW†V5²ÒòW†V5²ÒçFôÆ÷vW$66R‚’¢VæFVf–æVC° –6öç7BFV6öFW"ÒæWrFW‡DFV6öFW"‚Æ&VÂ“° —&WGW&â&W7öç6Ræ'&”'VffW"‚’çF†Vâ‚"ÓâFV6öFW"æFV6öFR‚"’“°  —Ð  —Ð  —Ò ’çF†Vâ‚FFÓâ°  ’òòFBFò66†RöæÇ’öâ…EE7V66W72Â6òF†BvRFòæ÷B66†P ’òòW'&÷"&W7öç6R&öF–W22&÷W"&W7öç6W2Fò&WVW7G2à ”66†RæFB‚W&ÂÂFF“°  –6öç7B6ÆÆ&6·2ÒÆöF–æu²W&ÂÓ° –FVÆWFRÆöF–æu²W&ÂÓ°  –f÷"‚ÆWB’ÒÂ–ÂÒ6ÆÆ&6·2æÆVæwFƒ²’Â–Ã²’²²’°  –6öç7B6ÆÆ&6²Ò6ÆÆ&6·5²’Ó° ––b‚6ÆÆ&6²æöäÆöB’6ÆÆ&6²æöäÆöB‚FF“°  —Ð  —Ò ’æ6F6‚‚W'"Óâ°  ’òò&÷'BW'&÷'2æB÷F†W"W'&÷'2&R†æFÆVBF†R6ÖP  –6öç7B6ÆÆ&6·2ÒÆöF–æu²W&ÂÓ°  ––b‚6ÆÆ&6·2ÓÓÒVæFVf–æVB’°  ’òòv†VâöäÆöBv26ÆÆVBæBW&Âv2FVÆWFVB–âÆöF–æv  —F†—2æÖævW"æ—FVÔW'&÷"‚W&Â“° —F‡&÷rW'#°  —Ð  –FVÆWFRÆöF–æu²W&ÂÓ°  –f÷"‚ÆWB’ÒÂ–ÂÒ6ÆÆ&6·2æÆVæwFƒ²’Â–Ã²’²²’°  –6öç7B6ÆÆ&6²Ò6ÆÆ&6·5²’Ó° ––b‚6ÆÆ&6²æöäW'&÷"’6ÆÆ&6²æöäW'&÷"‚W'"“°  —Ð  —F†—2æÖævW"æ—FVÔW'&÷"‚W&Â“°  —Ò ’æf–æÆÇ’‚‚’Óâ°  —F†—2æÖævW"æ—FVÔVæB‚W&Â“°  —Ò“°  —F†—2æÖævW"æ—FVÕ7F'B‚W&Â“°  —Ð  —6WE&W7öç6UG—R‚fÇVR’°  —F†—2ç&W7öç6UG—RÒfÇVS° —&WGW&âF†—3°  —Ð  —6WDÖ–ÖUG—R‚fÇVR’°  —F†—2æÖ–ÖUG—RÒfÇVS° —&WGW&âF†—3°  —Ð §Ð ¦6Æ72æ–ÖF–öäÆöFW"W‡FVæG2ÆöFW"°  –6öç7G'V7F÷"‚ÖævW"’°  —7WW"‚ÖævW"“°  —Ð  –ÆöB‚W&ÂÂöäÆöBÂöå&öw&W72ÂöäW'&÷"’°  –6öç7B66÷RÒF†—3°  –6öç7BÆöFW"ÒæWrf–ÆTÆöFW"‚F†—2æÖævW"“° –ÆöFW"ç6WEF‚‚F†—2çF‚“° –ÆöFW"ç6WE&WVW7D†VFW"‚F†—2ç&WVW7D†VFW"“° –ÆöFW"ç6WEv—F„7&VFVçF–Ç2‚F†—2çv—F„7&VFVçF–Ç2“° –ÆöFW"æÆöB‚W&ÂÂgVæ7F–öâ‚FW‡B’°  —G'’°  –öäÆöB‚66÷Rç'6R‚¥4ôâç'6R‚FW‡B’’“°  —Ò6F6‚‚R’°  ––b‚öäW'&÷"’°  –öäW'&÷"‚R“°  —ÒVÇ6R°  –6öç6öÆRæW'&÷"‚R“°  —Ð  —66÷RæÖævW"æ—FVÔW'&÷"‚W&Â“°  —Ð  —ÒÂöå&öw&W72ÂöäW'&÷"“°  —Ð  —'6R‚§6öâ’°  –6öç7Bæ–ÖF–öç2ÒµÓ°  –f÷"‚ÆWB’Ò²’Â§6öâæÆVæwFƒ²’²²’°  –6öç7B6Æ—Òæ–ÖF–öä6Æ—ç'6R‚§6öå²’Ò“°  –æ–ÖF–öç2çW6‚‚6Æ—“°  —Ð  —&WGW&âæ–ÖF–öç3°  —Ð §Ð ¢ò¢ ¢¢'7G&7B&6R6Æ72Fò&Æö6²&6VBFW‡GW&W2ÆöFW"†FG2Âg"Ââââ¢ ¢¢7V"6Æ76W2†fRFò–×ÆVÖVçBF†R'6R‚’ÖWF†öBv†–6‚v–ÆÂ&RW6VB–âÆöB‚’à¢¢ð ¦6Æ726ö×&W76VEFW‡GW&TÆöFW"W‡FVæG2ÆöFW"°  –6öç7G'V7F÷"‚ÖævW"’°  —7WW"‚ÖævW"“°  —Ð  –ÆöB‚W&ÂÂöäÆöBÂöå&öw&W72ÂöäW'&÷"’°  –6öç7B66÷RÒF†—3°  –6öç7B–ÖvW2ÒµÓ°  –6öç7BFW‡GW&RÒæWr6ö×&W76VEFW‡GW&R‚“°  –6öç7BÆöFW"ÒæWrf–ÆTÆöFW"‚F†—2æÖævW"“° –ÆöFW"ç6WEF‚‚F†—2çF‚“° –ÆöFW"ç6WE&W7öç6UG—R‚v'&–'VffW"r“° –ÆöFW"ç6WE&WVW7D†VFW"‚F†—2ç&WVW7D†VFW"“° –ÆöFW"ç6WEv—F„7&VFVçF–Ç2‚66÷Rçv—F„7&VFVçF–Ç2“°  –ÆWBÆöFVBÒ°  –gVæ7F–öâÆöEFW‡GW&R‚’’°  –ÆöFW"æÆöB‚W&Å²’ÒÂgVæ7F–öâ‚'VffW"’°  –6öç7BFW„FF2Ò66÷Rç'6R‚'VffW"ÂG'VR“°  ––ÖvW5²’ÒÒ° —v–GFƒ¢FW„FF2çv–GF‚À –†V–v‡C¢FW„FF2æ†V–v‡BÀ –f÷&ÖC¢FW„FF2æf÷&ÖBÀ –Ö—Ö3¢FW„FF2æÖ—Ö0 —Ó°  –ÆöFVB³Ò°  ––b‚ÆöFVBÓÓÒb’°  ––b‚FW„FF2æÖ—Ö6÷VçBÓÓÒ’FW‡GW&RæÖ–äf–ÇFW"ÒÆ–æV$f–ÇFW#°  —FW‡GW&Ræ–ÖvRÒ–ÖvW3° —FW‡GW&Ræf÷&ÖBÒFW„FF2æf÷&ÖC° —FW‡GW&RææVVG5WFFRÒG'VS°  ––b‚öäÆöB’öäÆöB‚FW‡GW&R“°  —Ð  —ÒÂöå&öw&W72ÂöäW'&÷"“°  —Ð  ––b‚'&’æ—4'&’‚W&Â’’°  –f÷"‚ÆWB’ÒÂ–ÂÒW&ÂæÆVæwFƒ²’Â–Ã²²²’’°  –ÆöEFW‡GW&R‚’“°  —Ð  —ÒVÇ6R°  ’òò6ö×&W76VB7V&VÖFW‡GW&R7F÷&VB–â6–ævÆRDE2f–ÆP  –ÆöFW"æÆöB‚W&ÂÂgVæ7F–öâ‚'VffW"’°  –6öç7BFW„FF2Ò66÷Rç'6R‚'VffW"ÂG'VR“°  ––b‚FW„FF2æ—47V&VÖ’°  –6öç7Bf6W2ÒFW„FF2æÖ—Ö2æÆVæwF‚òFW„FF2æÖ—Ö6÷VçC°  –f÷"‚ÆWBbÒ²bÂf6W3²b²²’°  ––ÖvW5²bÒÒ²Ö—Ö3¢µÒÓ°  –f÷"‚ÆWB’Ò²’ÂFW„FF2æÖ—Ö6÷VçC²’²²’°  ––ÖvW5²bÒæÖ—Ö2çW6‚‚FW„FF2æÖ—Ö5²b¢FW„FF2æÖ—Ö6÷VçB²’Ò“° ––ÖvW5²bÒæf÷&ÖBÒFW„FF2æf÷&ÖC° ––ÖvW5²bÒçv–GF‚ÒFW„FF2çv–GFƒ° ––ÖvW5²bÒæ†V–v‡BÒFW„FF2æ†V–v‡C°  —Ð  —Ð  —FW‡GW&Ræ–ÖvRÒ–ÖvW3°  —ÒVÇ6R°  —FW‡GW&Ræ–ÖvRçv–GF‚ÒFW„FF2çv–GFƒ° —FW‡GW&Ræ–ÖvRæ†V–v‡BÒFW„FF2æ†V–v‡C° —FW‡GW&RæÖ—Ö2ÒFW„FF2æÖ—Ö3°  —Ð  ––b‚FW„FF2æÖ—Ö6÷VçBÓÓÒ’°  —FW‡GW&RæÖ–äf–ÇFW"ÒÆ–æV$f–ÇFW#°  —Ð  —FW‡GW&Ræf÷&ÖBÒFW„FF2æf÷&ÖC° —FW‡GW&RææVVG5WFFRÒG'VS°  ––b‚öäÆöB’öäÆöB‚FW‡GW&R“°  —ÒÂöå&öw&W72ÂöäW'&÷"“°  —Ð  —&WGW&âFW‡GW&S°  —Ð §Ð ¦6Æ72–ÖvTÆöFW"W‡FVæG2ÆöFW"°  –6öç7G'V7F÷"‚ÖævW"’°  —7WW"‚ÖævW"“°  —Ð  –ÆöB‚W&ÂÂöäÆöBÂöå&öw&W72ÂöäW'&÷"’°  ––b‚F†—2çF‚ÓÒVæFVf–æVB’W&ÂÒF†—2çF‚²W&Ã°  —W&ÂÒF†—2æÖævW"ç&W6öÇfUU$Â‚W&Â“°  –6öç7B66÷RÒF†—3°  –6öç7B66†VBÒ66†RævWB‚W&Â“°  ––b‚66†VBÓÒVæFVf–æVB’°  —66÷RæÖævW"æ—FVÕ7F'B‚W&Â“°  —6WEF–ÖV÷WB‚gVæ7F–öâ‚’°  ––b‚öäÆöB’öäÆöB‚66†VB“°  —66÷RæÖævW"æ—FVÔVæB‚W&Â“°  —ÒÂ“°  —&WGW&â66†VC°  —Ð  –6öç7B–ÖvRÒ7&VFTVÆVÖVçDå2‚v–Örr“°  –gVæ7F–öâöä–ÖvTÆöB‚’°  —&VÖ÷fTWfVçDÆ—7FVæW'2‚“°  ”66†RæFB‚W&ÂÂF†—2“°  ––b‚öäÆöB’öäÆöB‚F†—2“°  —66÷RæÖævW"æ—FVÔVæB‚W&Â“°  —Ð  –gVæ7F–öâöä–ÖvTW'&÷"‚WfVçB’°  —&VÖ÷fTWfVçDÆ—7FVæW'2‚“°  ––b‚öäW'&÷"’öäW'&÷"‚WfVçB“°  —66÷RæÖævW"æ—FVÔW'&÷"‚W&Â“° —66÷RæÖævW"æ—FVÔVæB‚W&Â“°  —Ð  –gVæ7F–öâ&VÖ÷fTWfVçDÆ—7FVæW'2‚’°  ––ÖvRç&VÖ÷fTWfVçDÆ—7FVæW"‚vÆöBrÂöä–ÖvTÆöBÂfÇ6R“° ––ÖvRç&VÖ÷fTWfVçDÆ—7FVæW"‚vW'&÷"rÂöä–ÖvTW'&÷"ÂfÇ6R“°  —Ð  ––ÖvRæFDWfVçDÆ—7FVæW"‚vÆöBrÂöä–ÖvTÆöBÂfÇ6R“° ––ÖvRæFDWfVçDÆ—7FVæW"‚vW'&÷"rÂöä–ÖvTW'&÷"ÂfÇ6R“°  ––b‚W&Âç6Æ–6R‚ÂR’ÓÒvFF¢r’°  ––b‚F†—2æ7&÷74÷&–v–âÓÒVæFVf–æVB’–ÖvRæ7&÷74÷&–v–âÒF†—2æ7&÷74÷&–v–ã°  —Ð  —66÷RæÖævW"æ—FVÕ7F'B‚W&Â“°  ––ÖvRç7&2ÒW&Ã°  —&WGW&â–ÖvS°  —Ð §Ð ¦6Æ727V&UFW‡GW&TÆöFW"W‡FVæG2ÆöFW"°  –6öç7G'V7F÷"‚ÖævW"’°  —7WW"‚ÖævW"“°  —Ð  –ÆöB‚W&Ç2ÂöäÆöBÂöå&öw&W72ÂöäW'&÷"’°  –6öç7BFW‡GW&RÒæWr7V&UFW‡GW&R‚“° —FW‡GW&Ræ6öÆ÷%76RÒ5$t$6öÆ÷%76S°  –6öç7BÆöFW"ÒæWr–ÖvTÆöFW"‚F†—2æÖævW"“° –ÆöFW"ç6WD7&÷74÷&–v–â‚F†—2æ7&÷74÷&–v–â“° –ÆöFW"ç6WEF‚‚F†—2çF‚“°  –ÆWBÆöFVBÒ°  –gVæ7F–öâÆöEFW‡GW&R‚’’°  –ÆöFW"æÆöB‚W&Ç5²’ÒÂgVæ7F–öâ‚–ÖvR’°  —FW‡GW&Ræ–ÖvW5²’ÒÒ–ÖvS°  –ÆöFVB²³°  ––b‚ÆöFVBÓÓÒb’°  —FW‡GW&RææVVG5WFFRÒG'VS°  ––b‚öäÆöB’öäÆöB‚FW‡GW&R“°  —Ð  —ÒÂVæFVf–æVBÂöäW'&÷"“°  —Ð  –f÷"‚ÆWB’Ò²’ÂW&Ç2æÆVæwFƒ²²²’’°  –ÆöEFW‡GW&R‚’“°  —Ð  —&WGW&âFW‡GW&S°  —Ð §Ð ¢ò¢ ¢¢'7G&7B&6R6Æ72FòÆöBvVæW&–2&–æ'’FW‡GW&W2f÷&ÖG2‡&v&RÂ†G"Ââââ¢ ¢¢7V"6Æ76W2†fRFò–×ÆVÖVçBF†R'6R‚’ÖWF†öBv†–6‚v–ÆÂ&RW6VB–âÆöB‚’à¢¢ð ¦6Æ72FFFW‡GW&TÆöFW"W‡FVæG2ÆöFW"°  –6öç7G'V7F÷"‚ÖævW"’°  —7WW"‚ÖævW"“°  —Ð  –ÆöB‚W&ÂÂöäÆöBÂöå&öw&W72ÂöäW'&÷"’°  –6öç7B66÷RÒF†—3°  –6öç7BFW‡GW&RÒæWrFFFW‡GW&R‚“°  –6öç7BÆöFW"ÒæWrf–ÆTÆöFW"‚F†—2æÖævW"“° –ÆöFW"ç6WE&W7öç6UG—R‚v'&–'VffW"r“° –ÆöFW"ç6WE&WVW7D†VFW"‚F†—2ç&WVW7D†VFW"“° –ÆöFW"ç6WEF‚‚F†—2çF‚“° –ÆöFW"ç6WEv—F„7&VFVçF–Ç2‚66÷Rçv—F„7&VFVçF–Ç2“° –ÆöFW"æÆöB‚W&ÂÂgVæ7F–öâ‚'VffW"’°  –ÆWBFW„FF°  —G'’°  —FW„FFÒ66÷Rç'6R‚'VffW"“°  —Ò6F6‚‚W'&÷"’°  ––b‚öäW'&÷"ÓÒVæFVf–æVB’°  –öäW'&÷"‚W'&÷"“°  —ÒVÇ6R°  –6öç6öÆRæW'&÷"‚W'&÷"“° —&WGW&ã°  —Ð  —Ð  ––b‚FW„FFæ–ÖvRÓÒVæFVf–æVB’°  —FW‡GW&Ræ–ÖvRÒFW„FFæ–ÖvS°  —ÒVÇ6R–b‚FW„FFæFFÓÒVæFVf–æVB’°  —FW‡GW&Ræ–ÖvRçv–GF‚ÒFW„FFçv–GFƒ° —FW‡GW&Ræ–ÖvRæ†V–v‡BÒFW„FFæ†V–v‡C° —FW‡GW&Ræ–ÖvRæFFÒFW„FFæFF°  —Ð  —FW‡GW&Rçw&2ÒFW„FFçw&2ÓÒVæFVf–æVBòFW„FFçw&2¢6Æ×FôVFvUw&–æs° —FW‡GW&Rçw&BÒFW„FFçw&BÓÒVæFVf–æVBòFW„FFçw&B¢6Æ×FôVFvUw&–æs°  —FW‡GW&RæÖtf–ÇFW"ÒFW„FFæÖtf–ÇFW"ÓÒVæFVf–æVBòFW„FFæÖtf–ÇFW"¢Æ–æV$f–ÇFW#° —FW‡GW&RæÖ–äf–ÇFW"ÒFW„FFæÖ–äf–ÇFW"ÓÒVæFVf–æVBòFW„FFæÖ–äf–ÇFW"¢Æ–æV$f–ÇFW#°  —FW‡GW&Rææ—6÷G&÷’ÒFW„FFææ—6÷G&÷’ÓÒVæFVf–æVBòFW„FFææ—6÷G&÷’¢°  ––b‚FW„FFæ6öÆ÷%76RÓÒVæFVf–æVB’°  —FW‡GW&Ræ6öÆ÷%76RÒFW„FFæ6öÆ÷%76S°  —Ð  ––b‚FW„FFæfÆ—’ÓÒVæFVf–æVB’°  —FW‡GW&RæfÆ—’ÒFW„FFæfÆ—“°  —Ð  ––b‚FW„FFæf÷&ÖBÓÒVæFVf–æVB’°  —FW‡GW&Ræf÷&ÖBÒFW„FFæf÷&ÖC°  —Ð  ––b‚FW„FFçG—RÓÒVæFVf–æVB’°  —FW‡GW&RçG—RÒFW„FFçG—S°  —Ð  ––b‚FW„FFæÖ—Ö2ÓÒVæFVf–æVB’°  —FW‡GW&RæÖ—Ö2ÒFW„FFæÖ—Ö3° —FW‡GW&RæÖ–äf–ÇFW"ÒÆ–æV$Ö—ÖÆ–æV$f–ÇFW#²òò&W7VÖ&Ç’ââà  —Ð  ––b‚FW„FFæÖ—Ö6÷VçBÓÓÒ’°  —FW‡GW&RæÖ–äf–ÇFW"ÒÆ–æV$f–ÇFW#°  —Ð  ––b‚FW„FFævVæW&FTÖ—Ö2ÓÒVæFVf–æVB’°  —FW‡GW&RævVæW&FTÖ—Ö2ÒFW„FFævVæW&FTÖ—Ö3°  —Ð  —FW‡GW&RææVVG5WFFRÒG'VS°  ––b‚öäÆöB’öäÆöB‚FW‡GW&RÂFW„FF“°  —ÒÂöå&öw&W72ÂöäW'&÷"“°   —&WGW&âFW‡GW&S°  —Ð §Ð ¦6Æ72FW‡GW&TÆöFW"W‡FVæG2ÆöFW"°  –6öç7G'V7F÷"‚ÖævW"’°  —7WW"‚ÖævW"“°  —Ð  –ÆöB‚W&ÂÂöäÆöBÂöå&öw&W72ÂöäW'&÷"’°  –6öç7BFW‡GW&RÒæWrFW‡GW&R‚“°  –6öç7BÆöFW"ÒæWr–ÖvTÆöFW"‚F†—2æÖævW"“° –ÆöFW"ç6WD7&÷74÷&–v–â‚F†—2æ7&÷74÷&–v–â“° –ÆöFW"ç6WEF‚‚F†—2çF‚“°  –ÆöFW"æÆöB‚W&ÂÂgVæ7F–öâ‚–ÖvR’°  —FW‡GW&Ræ–ÖvRÒ–ÖvS° —FW‡GW&RææVVG5WFFRÒG'VS°  ––b‚öäÆöBÓÒVæFVf–æVB’°  –öäÆöB‚FW‡GW&R“°  —Ð  —ÒÂöå&öw&W72ÂöäW'&÷"“°  —&WGW&âFW‡GW&S°  —Ð §Ð ¦6Æ72Æ–v‡BW‡FVæG2ö&¦V7C4B°  –6öç7G'V7F÷"‚6öÆ÷"Â–çFVç6—G’Ò’°  —7WW"‚“°  —F†—2æ—4Æ–v‡BÒG'VS°  —F†—2çG—RÒtÆ–v‡Bs°  —F†—2æ6öÆ÷"ÒæWr6öÆ÷"‚6öÆ÷"“° —F†—2æ–çFVç6—G’Ò–çFVç6—G“°  —Ð  –F—7÷6R‚’°  ’òòV×G’†W&R–â&6R6Æ73²6öÖR7V&6Æ76W2÷fW'&–FRà  —Ð  –6÷’‚6÷W&6RÂ&V7W'6—fR’°  —7WW"æ6÷’‚6÷W&6RÂ&V7W'6—fR“°  —F†—2æ6öÆ÷"æ6÷’‚6÷W&6Ræ6öÆ÷"“° —F†—2æ–çFVç6—G’Ò6÷W&6Ræ–çFVç6—G“°  —&WGW&âF†—3°  —Ð  —Fô¥4ôâ‚ÖWF’°  –6öç7BFFÒ7WW"çFô¥4ôâ‚ÖWF“°  –FFæö&¦V7Bæ6öÆ÷"ÒF†—2æ6öÆ÷"ævWD†W‚‚“° –FFæö&¦V7Bæ–çFVç6—G’ÒF†—2æ–çFVç6—G“°  ––b‚F†—2æw&÷VæD6öÆ÷"ÓÒVæFVf–æVB’FFæö&¦V7Bæw&÷VæD6öÆ÷"ÒF†—2æw&÷VæD6öÆ÷"ævWD†W‚‚“°  ––b‚F†—2æF—7Fæ6RÓÒVæFVf–æVB’FFæö&¦V7BæF—7Fæ6RÒF†—2æF—7Fæ6S° ––b‚F†—2æævÆRÓÒVæFVf–æVB’FFæö&¦V7BæævÆRÒF†—2æævÆS° ––b‚F†—2æFV6’ÓÒVæFVf–æVB’FFæö&¦V7BæFV6’ÒF†—2æFV6“° ––b‚F†—2çVçVÖ'&ÓÒVæFVf–æVB’FFæö&¦V7BçVçVÖ'&ÒF†—2çVçVÖ'&°  ––b‚F†—2ç6†F÷rÓÒVæFVf–æVB’FFæö&¦V7Bç6†F÷rÒF†—2ç6†F÷rçFô¥4ôâ‚“°  —&WGW&âFF°  —Ð §Ð ¦6Æ72†VÖ—7†W&TÆ–v‡BW‡FVæG2Æ–v‡B°  –6öç7G'V7F÷"‚6·”6öÆ÷"Âw&÷VæD6öÆ÷"Â–çFVç6—G’’°  —7WW"‚6·”6öÆ÷"Â–çFVç6—G’“°  —F†—2æ—4†VÖ—7†W&TÆ–v‡BÒG'VS°  —F†—2çG—RÒt†VÖ—7†W&TÆ–v‡Bs°  —F†—2ç÷6—F–öâæ6÷’‚ö&¦V7C4BäDTdTÅEõU“° —F†—2çWFFTÖG&—‚‚“°  —F†—2æw&÷VæD6öÆ÷"ÒæWr6öÆ÷"‚w&÷VæD6öÆ÷"“°  —Ð  –6÷’‚6÷W&6RÂ&V7W'6—fR’°  —7WW"æ6÷’‚6÷W&6RÂ&V7W'6—fR“°  —F†—2æw&÷VæD6öÆ÷"æ6÷’‚6÷W&6Ræw&÷VæD6öÆ÷"“°  —&WGW&âF†—3°  —Ð §Ð ¦6öç7B÷&ö¥67&VVäÖG&—‚CÒò¤õõU$Uõò¢òæWrÖG&—ƒB‚“°¦6öç7BöÆ–v‡E÷6—F–öåv÷&ÆBCÒò¤õõU$Uõò¢òæWrfV7F÷#2‚“°¦6öç7BöÆööµF&vWBCÒò¤õõU$Uõò¢òæWrfV7F÷#2‚“° ¦6Æ72Æ–v‡E6†F÷r°  –6öç7G'V7F÷"‚6ÖW&’°  —F†—2æ6ÖW&Ò6ÖW&°  —F†—2æ&–2Ò° —F†—2ææ÷&ÖÄ&–2Ò° —F†—2ç&F—W2Ò° —F†—2æ&ÇW%6×ÆW2Òƒ°  —F†—2æÖ6—¦RÒæWrfV7F÷#"‚S"ÂS"“°  —F†—2æÖÒçVÆÃ° —F†—2æÖ72ÒçVÆÃ° —F†—2æÖG&—‚ÒæWrÖG&—ƒB‚“°  —F†—2æWFõWFFRÒG'VS° —F†—2ææVVG5WFFRÒfÇ6S°  —F†—2åög'W7GVÒÒæWrg'W7GVÒ‚“° —F†—2åög&ÖTW‡FVçG2ÒæWrfV7F÷#"‚Â“°  —F†—2å÷f–Ww÷'D6÷VçBÒ°  —F†—2å÷f–Ww÷'G2Ò°  –æWrfV7F÷#B‚ÂÂÂ  •Ó°  —Ð  –vWEf–Ww÷'D6÷VçB‚’°  —&WGW&âF†—2å÷f–Ww÷'D6÷VçC°  —Ð  –vWDg'W7GVÒ‚’°  —&WGW&âF†—2åög'W7GVÓ°  —Ð  —WFFTÖG&–6W2‚Æ–v‡B’°  –6öç7B6†F÷t6ÖW&ÒF†—2æ6ÖW&° –6öç7B6†F÷tÖG&—‚ÒF†—2æÖG&—ƒ°  •öÆ–v‡E÷6—F–öåv÷&ÆBCç6WDg&öÔÖG&—…÷6—F–öâ‚Æ–v‡BæÖG&—…v÷&ÆB“° —6†F÷t6ÖW&ç÷6—F–öâæ6÷’‚öÆ–v‡E÷6—F–öåv÷&ÆBC“°  •öÆööµF&vWBCç6WDg&öÔÖG&—…÷6—F–öâ‚Æ–v‡BçF&vWBæÖG&—…v÷&ÆB“° —6†F÷t6ÖW&æÆöö´B‚öÆööµF&vWBC“° —6†F÷t6ÖW&çWFFTÖG&—…v÷&ÆB‚“°  •÷&ö¥67&VVäÖG&—‚Cæ×VÇF—Ç”ÖG&–6W2‚6†F÷t6ÖW&ç&ö¦V7F–öäÖG&—‚Â6†F÷t6ÖW&æÖG&—…v÷&ÆD–çfW'6R“° —F†—2åög'W7GVÒç6WDg&öÕ&ö¦V7F–öäÖG&—‚‚÷&ö¥67&VVäÖG&—‚C“°  —6†F÷tÖG&—‚ç6WB€ “ãRÂãÂãÂãRÀ “ãÂãRÂãÂãRÀ “ãÂãÂãRÂãRÀ “ãÂãÂãÂã  ’“°  —6†F÷tÖG&—‚æ×VÇF—Ç’‚÷&ö¥67&VVäÖG&—‚C“°  —Ð  –vWEf–Ww÷'B‚f–Ww÷'D–æFW‚’°  —&WGW&âF†—2å÷f–Ww÷'G5²f–Ww÷'D–æFW‚Ó°  —Ð  –vWDg&ÖTW‡FVçG2‚’°  —&WGW&âF†—2åög&ÖTW‡FVçG3°  —Ð  –F—7÷6R‚’°  ––b‚F†—2æÖ’°  —F†—2æÖæF—7÷6R‚“°  —Ð  ––b‚F†—2æÖ72’°  —F†—2æÖ72æF—7÷6R‚“°  —Ð  —Ð  –6÷’‚6÷W&6R’°  —F†—2æ6ÖW&Ò6÷W&6Ræ6ÖW&æ6ÆöæR‚“°  —F†—2æ&–2Ò6÷W&6Ræ&–3° —F†—2ç&F—W2Ò6÷W&6Rç&F—W3°  —F†—2æÖ6—¦Ræ6÷’‚6÷W&6RæÖ6—¦R“°  —&WGW&âF†—3°  —Ð  –6ÆöæR‚’°  —&WGW&âæWrF†—2æ6öç7G'V7F÷"‚’æ6÷’‚F†—2“°  —Ð  —Fô¥4ôâ‚’°  –6öç7Bö&¦V7BÒ·Ó°  ––b‚F†—2æ&–2ÓÒ’ö&¦V7Bæ&–2ÒF†—2æ&–3° ––b‚F†—2ææ÷&ÖÄ&–2ÓÒ’ö&¦V7Bææ÷&ÖÄ&–2ÒF†—2ææ÷&ÖÄ&–3° ––b‚F†—2ç&F—W2ÓÒ’ö&¦V7Bç&F—W2ÒF†—2ç&F—W3° ––b‚F†—2æÖ6—¦Rç‚ÓÒS"ÇÂF†—2æÖ6—¦Rç’ÓÒS"’ö&¦V7BæÖ6—¦RÒF†—2æÖ6—¦RçFô'&’‚“°  –ö&¦V7Bæ6ÖW&ÒF†—2æ6ÖW&çFô¥4ôâ‚fÇ6R’æö&¦V7C° –FVÆWFRö&¦V7Bæ6ÖW&æÖG&—ƒ°  —&WGW&âö&¦V7C°  —Ð §Ð ¦6Æ727÷DÆ–v‡E6†F÷rW‡FVæG2Æ–v‡E6†F÷r°  –6öç7G'V7F÷"‚’°  —7WW"‚æWrW'7V7F—fT6ÖW&‚SÂÂãRÂS’“°  —F†—2æ—57÷DÆ–v‡E6†F÷rÒG'VS°  —F†—2æfö7W2Ò°  —Ð  —WFFTÖG&–6W2‚Æ–v‡B’°  –6öç7B6ÖW&ÒF†—2æ6ÖW&°  –6öç7Bf÷bÒ$C$DTr¢"¢Æ–v‡BæævÆR¢F†—2æfö7W3° –6öç7B7V7BÒF†—2æÖ6—¦Rçv–GF‚òF†—2æÖ6—¦Ræ†V–v‡C° –6öç7Bf"ÒÆ–v‡BæF—7Fæ6RÇÂ6ÖW&æf#°  ––b‚f÷bÓÒ6ÖW&æf÷bÇÂ7V7BÓÒ6ÖW&æ7V7BÇÂf"ÓÒ6ÖW&æf"’°  –6ÖW&æf÷bÒf÷c° –6ÖW&æ7V7BÒ7V7C° –6ÖW&æf"Òf#° –6ÖW&çWFFU&ö¦V7F–öäÖG&—‚‚“°  —Ð  —7WW"çWFFTÖG&–6W2‚Æ–v‡B“°  —Ð  –6÷’‚6÷W&6R’°  —7WW"æ6÷’‚6÷W&6R“°  —F†—2æfö7W2Ò6÷W&6Ræfö7W3°  —&WGW&âF†—3°  —Ð §Ð ¦6Æ727÷DÆ–v‡BW‡FVæG2Æ–v‡B°  –6öç7G'V7F÷"‚6öÆ÷"Â–çFVç6—G’ÂF—7Fæ6RÒÂævÆRÒÖF‚å’ò2ÂVçVÖ'&ÒÂFV6’Ò"’°  —7WW"‚6öÆ÷"Â–çFVç6—G’“°  —F†—2æ—57÷DÆ–v‡BÒG'VS°  —F†—2çG—RÒu7÷DÆ–v‡Bs°  —F†—2ç÷6—F–öâæ6÷’‚ö&¦V7C4BäDTdTÅEõU“° —F†—2çWFFTÖG&—‚‚“°  —F†—2çF&vWBÒæWrö&¦V7C4B‚“°  —F†—2æF—7Fæ6RÒF—7Fæ6S° —F†—2æævÆRÒævÆS° —F†—2çVçVÖ'&ÒVçVÖ'&° —F†—2æFV6’ÒFV6“°  —F†—2æÖÒçVÆÃ°  —F†—2ç6†F÷rÒæWr7÷DÆ–v‡E6†F÷r‚“°  —Ð  –vWB÷vW"‚’°  ’òò6ö×WFRF†RÆ–v‡Bw2ÇVÖ–æ÷W2÷vW"†–âÇVÖVç2’g&öÒ—G2–çFVç6—G’†–â6æFVÆ ’òò'’6öçfVçF–öâf÷"7÷FÆ–v‡BÂÇVÖ–æ÷W2÷vW"†ÆÒ’Òø¢ÇVÖ–æ÷W2–çFVç6—G’†6B —&WGW&âF†—2æ–çFVç6—G’¢ÖF‚å“°  —Ð  —6WB÷vW"‚÷vW"’°  ’òò6WBF†RÆ–v‡Bw2–çFVç6—G’†–â6æFVÆ’g&öÒF†RFW6—&VBÇVÖ–æ÷W2÷vW"†–âÇVÖVç2 —F†—2æ–çFVç6—G’Ò÷vW"òÖF‚å“°  —Ð  –F—7÷6R‚’°  —F†—2ç6†F÷ræF—7÷6R‚“°  —Ð  –6÷’‚6÷W&6RÂ&V7W'6—fR’°  —7WW"æ6÷’‚6÷W&6RÂ&V7W'6—fR“°  —F†—2æF—7Fæ6RÒ6÷W&6RæF—7Fæ6S° —F†—2æævÆRÒ6÷W&6RæævÆS° —F†—2çVçVÖ'&Ò6÷W&6RçVçVÖ'&° —F†—2æFV6’Ò6÷W&6RæFV6“°  —F†—2çF&vWBÒ6÷W&6RçF&vWBæ6ÆöæR‚“°  —F†—2ç6†F÷rÒ6÷W&6Rç6†F÷ræ6ÆöæR‚“°  —&WGW&âF†—3°  —Ð §Ð ¦6öç7B÷&ö¥67&VVäÖG&—‚Òò¤õõU$Uõò¢òæWrÖG&—ƒB‚“°¦6öç7BöÆ–v‡E÷6—F–öåv÷&ÆBÒò¤õõU$Uõò¢òæWrfV7F÷#2‚“°¦6öç7BöÆööµF&vWBÒò¤õõU$Uõò¢òæWrfV7F÷#2‚“° ¦6Æ72ö–çDÆ–v‡E6†F÷rW‡FVæG2Æ–v‡E6†F÷r°  –6öç7G'V7F÷"‚’°  —7WW"‚æWrW'7V7F—fT6ÖW&‚“ÂÂãRÂS’“°  —F†—2æ—5ö–çDÆ–v‡E6†F÷rÒG'VS°  —F†—2åög&ÖTW‡FVçG2ÒæWrfV7F÷#"‚BÂ"“°  —F†—2å÷f–Ww÷'D6÷VçBÒc°  —F†—2å÷f–Ww÷'G2Ò° ’òòF†W6Rf–Ww÷'G2Ö7V&RÖÖöçFò$BFW‡GW&Rv—F‚F†P ’òòföÆÆ÷v–ær÷&–VçFF–öã  ’òð ’òò‡¥…  ’òò’ ’òð ’òò‚Ò÷6—F—fR‚F—&V7F–öà ’òò‚ÒæVvF—fR‚F—&V7F–öà ’òò’Ò÷6—F—fR’F—&V7F–öà ’òò’ÒæVvF—fR’F—&V7F–öà ’òò¢Ò÷6—F—fR¢F—&V7F–öà ’òò¢ÒæVvF—fR¢F—&V7F–öà  ’òò÷6—F—fR€ –æWrfV7F÷#B‚"ÂÂÂ’À ’òòæVvF—fR€ –æWrfV7F÷#B‚ÂÂÂ’À ’òò÷6—F—fR  –æWrfV7F÷#B‚2ÂÂÂ’À ’òòæVvF—fR  –æWrfV7F÷#B‚ÂÂÂ’À ’òò÷6—F—fR –æWrfV7F÷#B‚2ÂÂÂ’À ’òòæVvF—fR –æWrfV7F÷#B‚ÂÂÂ •Ó°  —F†—2åö7V&TF—&V7F–öç2Ò° –æWrfV7F÷#2‚ÂÂ’ÂæWrfV7F÷#2‚ÒÂÂ’ÂæWrfV7F÷#2‚ÂÂ’À –æWrfV7F÷#2‚ÂÂÒ’ÂæWrfV7F÷#2‚ÂÂ’ÂæWrfV7F÷#2‚ÂÒÂ •Ó°  —F†—2åö7V&UW2Ò° –æWrfV7F÷#2‚ÂÂ’ÂæWrfV7F÷#2‚ÂÂ’ÂæWrfV7F÷#2‚ÂÂ’À –æWrfV7F÷#2‚ÂÂ’ÂæWrfV7F÷#2‚ÂÂ’À–æWrfV7F÷#2‚ÂÂÒ •Ó°  —Ð  —WFFTÖG&–6W2‚Æ–v‡BÂf–Ww÷'D–æFW‚Ò’°  –6öç7B6ÖW&ÒF†—2æ6ÖW&° –6öç7B6†F÷tÖG&—‚ÒF†—2æÖG&—ƒ°  –6öç7Bf"ÒÆ–v‡BæF—7Fæ6RÇÂ6ÖW&æf#°  ––b‚f"ÓÒ6ÖW&æf"’°  –6ÖW&æf"Òf#° –6ÖW&çWFFU&ö¦V7F–öäÖG&—‚‚“°  —Ð  •öÆ–v‡E÷6—F–öåv÷&ÆBç6WDg&öÔÖG&—…÷6—F–öâ‚Æ–v‡BæÖG&—…v÷&ÆB“° –6ÖW&ç÷6—F–öâæ6÷’‚öÆ–v‡E÷6—F–öåv÷&ÆB“°  •öÆööµF&vWBæ6÷’‚6ÖW&ç÷6—F–öâ“° •öÆööµF&vWBæFB‚F†—2åö7V&TF—&V7F–öç5²f–Ww÷'D–æFW‚Ò“° –6ÖW&çWæ6÷’‚F†—2åö7V&UW5²f–Ww÷'D–æFW‚Ò“° –6ÖW&æÆöö´B‚öÆööµF&vWB“° –6ÖW&çWFFTÖG&—…v÷&ÆB‚“°  —6†F÷tÖG&—‚æÖ¶UG&ç6ÆF–öâ‚ÒöÆ–v‡E÷6—F–öåv÷&ÆBç‚ÂÒöÆ–v‡E÷6—F–öåv÷&ÆBç’ÂÒöÆ–v‡E÷6—F–öåv÷&ÆBç¢“°  •÷&ö¥67&VVäÖG&—‚æ×VÇF—Ç”ÖG&–6W2‚6ÖW&ç&ö¦V7F–öäÖG&—‚Â6ÖW&æÖG&—…v÷&ÆD–çfW'6R“° —F†—2åög'W7GVÒç6WDg&öÕ&ö¦V7F–öäÖG&—‚‚÷&ö¥67&VVäÖG&—‚“°  —Ð §Ð ¦6Æ72ö–çDÆ–v‡BW‡FVæG2Æ–v‡B°  –6öç7G'V7F÷"‚6öÆ÷"Â–çFVç6—G’ÂF—7Fæ6RÒÂFV6’Ò"’°  —7WW"‚6öÆ÷"Â–çFVç6—G’“°  —F†—2æ—5ö–çDÆ–v‡BÒG'VS°  —F†—2çG—RÒuö–çDÆ–v‡Bs°  —F†—2æF—7Fæ6RÒF—7Fæ6S° —F†—2æFV6’ÒFV6“°  —F†—2ç6†F÷rÒæWrö–çDÆ–v‡E6†F÷r‚“°  —Ð  –vWB÷vW"‚’°  ’òò6ö×WFRF†RÆ–v‡Bw2ÇVÖ–æ÷W2÷vW"†–âÇVÖVç2’g&öÒ—G2–çFVç6—G’†–â6æFVÆ ’òòf÷"â—6÷G&÷–2Æ–v‡B6÷W&6RÂÇVÖ–æ÷W2÷vW"†ÆÒ’ÒBøÇVÖ–æ÷W2–çFVç6—G’†6B —&WGW&âF†—2æ–çFVç6—G’¢B¢ÖF‚å“°  —Ð  —6WB÷vW"‚÷vW"’°  ’òò6WBF†RÆ–v‡Bw2–çFVç6—G’†–â6æFVÆ’g&öÒF†RFW6—&VBÇVÖ–æ÷W2÷vW"†–âÇVÖVç2 —F†—2æ–çFVç6—G’Ò÷vW"ò‚B¢ÖF‚å’“°  —Ð  –F—7÷6R‚’°  —F†—2ç6†F÷ræF—7÷6R‚“°  —Ð  –6÷’‚6÷W&6RÂ&V7W'6—fR’°  —7WW"æ6÷’‚6÷W&6RÂ&V7W'6—fR“°  —F†—2æF—7Fæ6RÒ6÷W&6RæF—7Fæ6S° —F†—2æFV6’Ò6÷W&6RæFV6“°  —F†—2ç6†F÷rÒ6÷W&6Rç6†F÷ræ6ÆöæR‚“°  —&WGW&âF†—3°  —Ð §Ð ¦6Æ72F—&V7F–öæÄÆ–v‡E6†F÷rW‡FVæG2Æ–v‡E6†F÷r°  –6öç7G'V7F÷"‚’°  —7WW"‚æWr÷'F†öw&†–46ÖW&‚ÒRÂRÂRÂÒRÂãRÂS’“°  —F†—2æ—4F—&V7F–öæÄÆ–v‡E6†F÷rÒG'VS°  —Ð §Ð ¦6Æ72F—&V7F–öæÄÆ–v‡BW‡FVæG2Æ–v‡B°  –6öç7G'V7F÷"‚6öÆ÷"Â–çFVç6—G’’°  —7WW"‚6öÆ÷"Â–çFVç6—G’“°  —F†—2æ—4F—&V7F–öæÄÆ–v‡BÒG'VS°  —F†—2çG—RÒtF—&V7F–öæÄÆ–v‡Bs°  —F†—2ç÷6—F–öâæ6÷’‚ö&¦V7C4BäDTdTÅEõU“° —F†—2çWFFTÖG&—‚‚“°  —F†—2çF&vWBÒæWrö&¦V7C4B‚“°  —F†—2ç6†F÷rÒæWrF—&V7F–öæÄÆ–v‡E6†F÷r‚“°  —Ð  –F—7÷6R‚’°  —F†—2ç6†F÷ræF—7÷6R‚“°  —Ð  –6÷’‚6÷W&6R’°  —7WW"æ6÷’‚6÷W&6R“°  —F†—2çF&vWBÒ6÷W&6RçF&vWBæ6ÆöæR‚“° —F†—2ç6†F÷rÒ6÷W&6Rç6†F÷ræ6ÆöæR‚“°  —&WGW&âF†—3°  —Ð §Ð ¦6Æ72Ö&–VçDÆ–v‡BW‡FVæG2Æ–v‡B°  –6öç7G'V7F÷"‚6öÆ÷"Â–çFVç6—G’’°  —7WW"‚6öÆ÷"Â–çFVç6—G’“°  —F†—2æ—4Ö&–VçDÆ–v‡BÒG'VS°  —F†—2çG—RÒtÖ&–VçDÆ–v‡Bs°  —Ð §Ð ¦6Æ72&V7D&VÆ–v‡BW‡FVæG2Æ–v‡B°  –6öç7G'V7F÷"‚6öÆ÷"Â–çFVç6—G’Âv–GF‚ÒÂ†V–v‡BÒ’°  —7WW"‚6öÆ÷"Â–çFVç6—G’“°  —F†—2æ—5&V7D&VÆ–v‡BÒG'VS°  —F†—2çG—RÒu&V7D&VÆ–v‡Bs°  —F†—2çv–GF‚Òv–GFƒ° —F†—2æ†V–v‡BÒ†V–v‡C°  —Ð  –vWB÷vW"‚’°  ’òò6ö×WFRF†RÆ–v‡Bw2ÇVÖ–æ÷W2÷vW"†–âÇVÖVç2’g&öÒ—G2–çFVç6—G’†–âæ—G2 —&WGW&âF†—2æ–çFVç6—G’¢F†—2çv–GF‚¢F†—2æ†V–v‡B¢ÖF‚å“°  —Ð  —6WB÷vW"‚÷vW"’°  ’òò6WBF†RÆ–v‡Bw2–çFVç6—G’†–âæ—G2’g&öÒF†RFW6—&VBÇVÖ–æ÷W2÷vW"†–âÇVÖVç2 —F†—2æ–çFVç6—G’Ò÷vW"ò‚F†—2çv–GF‚¢F†—2æ†V–v‡B¢ÖF‚å’“°  —Ð  –6÷’‚6÷W&6R’°  —7WW"æ6÷’‚6÷W&6R“°  —F†—2çv–GF‚Ò6÷W&6Rçv–GFƒ° —F†—2æ†V–v‡BÒ6÷W&6Ræ†V–v‡C°  —&WGW&âF†—3°  —Ð  —Fô¥4ôâ‚ÖWF’°  –6öç7BFFÒ7WW"çFô¥4ôâ‚ÖWF“°  –FFæö&¦V7Bçv–GF‚ÒF†—2çv–GFƒ° –FFæö&¦V7Bæ†V–v‡BÒF†—2æ†V–v‡C°  —&WGW&âFF°  —Ð §Ð ¢ò¢ ¢¢&–Ö'’&VfW&Væ6S ¢¢‡GG3¢òöw&†–72ç7Fæf÷&BæVGR÷W'2öVçfÖöVçfÖçF`¢ ¢¢6V6öæF'’&VfW&Væ6S ¢¢‡GG3¢ò÷wwrç6Æöâæ÷&r÷V&Æ–6F–öç2õ7GW–E4ƒ3bçF`¢¢ð ¢òò2Ö&æB4‚FVf–æVB'’’6öVff–6–VçG0 ¦6Æ727†W&–6Ä†&Ööæ–732°  –6öç7G'V7F÷"‚’°  —F†—2æ—57†W&–6Ä†&Ööæ–732ÒG'VS°  —F†—2æ6öVff–6–VçG2ÒµÓ°  –f÷"‚ÆWB’Ò²’Â“²’²²’°  —F†—2æ6öVff–6–VçG2çW6‚‚æWrfV7F÷#2‚’“°  —Ð  —Ð  —6WB‚6öVff–6–VçG2’°  –f÷"‚ÆWB’Ò²’Â“²’²²’°  —F†—2æ6öVff–6–VçG5²’Òæ6÷’‚6öVff–6–VçG5²’Ò“°  —Ð  —&WGW&âF†—3°  —Ð  —¦W&ò‚’°  –f÷"‚ÆWB’Ò²’Â“²’²²’°  —F†—2æ6öVff–6–VçG5²’Òç6WB‚ÂÂ“°  —Ð  —&WGW&âF†—3°  —Ð  ’òòvWBF†R&F–æ6R–âF†RF—&V7F–öâöbF†Ræ÷&ÖÀ ’òòF&vWB—2fV7F÷#0 –vWDB‚æ÷&ÖÂÂF&vWB’°  ’òòæ÷&ÖÂ—277VÖVBFò&RVæ—BÆVæwF€  –6öç7B‚Òæ÷&ÖÂç‚Â’Òæ÷&ÖÂç’Â¢Òæ÷&ÖÂç£°  –6öç7B6öVfbÒF†—2æ6öVff–6–VçG3°  ’òò&æB  —F&vWBæ6÷’‚6öVfe²Ò’æ×VÇF—Ç•66Æ"‚ã#ƒ#“R“°  ’òò&æB —F&vWBæFE66ÆVEfV7F÷"‚6öVfe²ÒÂãCƒƒc2¢’“° —F&vWBæFE66ÆVEfV7F÷"‚6öVfe²"ÒÂãCƒƒc2¢¢“° —F&vWBæFE66ÆVEfV7F÷"‚6öVfe²2ÒÂãCƒƒc2¢‚“°  ’òò&æB  —F&vWBæFE66ÆVEfV7F÷"‚6öVfe²BÒÂã“#SC‚¢‚‚¢’’“° —F&vWBæFE66ÆVEfV7F÷"‚6öVfe²RÒÂã“#SC‚¢‚’¢¢’“° —F&vWBæFE66ÆVEfV7F÷"‚6öVfe²bÒÂã3S3“"¢‚2ã¢¢¢¢Òã’“° —F&vWBæFE66ÆVEfV7F÷"‚6öVfe²rÒÂã“#SC‚¢‚‚¢¢’“° —F&vWBæFE66ÆVEfV7F÷"‚6öVfe²‚ÒÂãSCc#sB¢‚‚¢‚Ò’¢’’“°  —&WGW&âF&vWC°  —Ð  ’òòvWBF†R—'&F–æ6R‡&F–æ6R6öçföÇfVBv—F‚6÷6–æRÆö&R’–âF†RF—&V7F–öâöbF†Ræ÷&ÖÀ ’òòF&vWB—2fV7F÷#0 ’òò‡GG3¢òöw&†–72ç7Fæf÷&BæVGR÷W'2öVçfÖöVçfÖçF` –vWD—'&F–æ6TB‚æ÷&ÖÂÂF&vWB’°  ’òòæ÷&ÖÂ—277VÖVBFò&RVæ—BÆVæwF€  –6öç7B‚Òæ÷&ÖÂç‚Â’Òæ÷&ÖÂç’Â¢Òæ÷&ÖÂç£°  –6öç7B6öVfbÒF†—2æ6öVff–6–VçG3°  ’òò&æB  —F&vWBæ6÷’‚6öVfe²Ò’æ×VÇF—Ç•66Æ"‚ãƒƒc##r“²òòø¢ã#ƒ#“P  ’òò&æB —F&vWBæFE66ÆVEfV7F÷"‚6öVfe²ÒÂ"ã¢ãSccB¢’“²òò‚"¢øò2’¢ãCƒƒc0 —F&vWBæFE66ÆVEfV7F÷"‚6öVfe²"ÒÂ"ã¢ãSccB¢¢“° —F&vWBæFE66ÆVEfV7F÷"‚6öVfe²2ÒÂ"ã¢ãSccB¢‚“°  ’òò&æB  —F&vWBæFE66ÆVEfV7F÷"‚6öVfe²BÒÂ"ã¢ãC#“C2¢‚¢’“²òò‚øòB’¢ã“#SC€ —F&vWBæFE66ÆVEfV7F÷"‚6öVfe²RÒÂ"ã¢ãC#“C2¢’¢¢“° —F&vWBæFE66ÆVEfV7F÷"‚6öVfe²bÒÂãsC3#R¢¢¢¢Òã#Css‚“²òò‚øòB’¢ã3S3“"¢0 —F&vWBæFE66ÆVEfV7F÷"‚6öVfe²rÒÂ"ã¢ãC#“C2¢‚¢¢“° —F&vWBæFE66ÆVEfV7F÷"‚6öVfe²‚ÒÂãC#“C2¢‚‚¢‚Ò’¢’’“²òò‚øòB’¢ãSCc#s@  —&WGW&âF&vWC°  —Ð  –FB‚6‚’°  –f÷"‚ÆWB’Ò²’Â“²’²²’°  —F†—2æ6öVff–6–VçG5²’ÒæFB‚6‚æ6öVff–6–VçG5²’Ò“°  —Ð  —&WGW&âF†—3°  —Ð  –FE66ÆVE4‚‚6‚Â2’°  –f÷"‚ÆWB’Ò²’Â“²’²²’°  —F†—2æ6öVff–6–VçG5²’ÒæFE66ÆVEfV7F÷"‚6‚æ6öVff–6–VçG5²’ÒÂ2“°  —Ð  —&WGW&âF†—3°  —Ð  —66ÆR‚2’°  –f÷"‚ÆWB’Ò²’Â“²’²²’°  —F†—2æ6öVff–6–VçG5²’Òæ×VÇF—Ç•66Æ"‚2“°  —Ð  —&WGW&âF†—3°  —Ð  –ÆW'‚6‚ÂÇ†’°  –f÷"‚ÆWB’Ò²’Â“²’²²’°  —F†—2æ6öVff–6–VçG5²’ÒæÆW'‚6‚æ6öVff–6–VçG5²’ÒÂÇ†“°  —Ð  —&WGW&âF†—3°  —Ð  –WVÇ2‚6‚’°  –f÷"‚ÆWB’Ò²’Â“²’²²’°  ––b‚F†—2æ6öVff–6–VçG5²’ÒæWVÇ2‚6‚æ6öVff–6–VçG5²’Ò’’°  —&WGW&âfÇ6S°  —Ð  —Ð  —&WGW&âG'VS°  —Ð  –6÷’‚6‚’°  —&WGW&âF†—2ç6WB‚6‚æ6öVff–6–VçG2“°  —Ð  –6ÆöæR‚’°  —&WGW&âæWrF†—2æ6öç7G'V7F÷"‚’æ6÷’‚F†—2“°  —Ð  –g&öÔ'&’‚'&’Âöfg6WBÒ’°  –6öç7B6öVff–6–VçG2ÒF†—2æ6öVff–6–VçG3°  –f÷"‚ÆWB’Ò²’Â“²’²²’°  –6öVff–6–VçG5²’Òæg&öÔ'&’‚'&’Âöfg6WB²‚’¢2’“°  —Ð  —&WGW&âF†—3°  —Ð  —Fô'&’‚'&’ÒµÒÂöfg6WBÒ’°  –6öç7B6öVff–6–VçG2ÒF†—2æ6öVff–6–VçG3°  –f÷"‚ÆWB’Ò²’Â“²’²²’°  –6öVff–6–VçG5²’ÒçFô'&’‚'&’Âöfg6WB²‚’¢2’“°  —Ð  —&WGW&â'&“°  —Ð  ’òòWfÇVFRF†R&6—2gVæ7F–öç0 ’òò6„&6—2—2â'&•²’Ð —7FF–2vWD&6—4B‚æ÷&ÖÂÂ6„&6—2’°  ’òòæ÷&ÖÂ—277VÖVBFò&RVæ—BÆVæwF€  –6öç7B‚Òæ÷&ÖÂç‚Â’Òæ÷&ÖÂç’Â¢Òæ÷&ÖÂç£°  ’òò&æB  —6„&6—5²ÒÒã#ƒ#“S°  ’òò&æB —6„&6—5²ÒÒãCƒƒc2¢“° —6„&6—5²"ÒÒãCƒƒc2¢£° —6„&6—5²2ÒÒãCƒƒc2¢ƒ°  ’òò&æB  —6„&6—5²BÒÒã“#SC‚¢‚¢“° —6„&6—5²RÒÒã“#SC‚¢’¢£° —6„&6—5²bÒÒã3S3“"¢‚2¢¢¢¢Ò“° —6„&6—5²rÒÒã“#SC‚¢‚¢£° —6„&6—5²‚ÒÒãSCc#sB¢‚‚¢‚Ò’¢’“°  —Ð §Ð ¦6Æ72Æ–v‡E&ö&RW‡FVæG2Æ–v‡B°  –6öç7G'V7F÷"‚6‚ÒæWr7†W&–6Ä†&Ööæ–732‚’Â–çFVç6—G’Ò’°  —7WW"‚VæFVf–æVBÂ–çFVç6—G’“°  —F†—2æ—4Æ–v‡E&ö&RÒG'VS°  —F†—2ç6‚Ò6ƒ°  —Ð  –6÷’‚6÷W&6R’°  —7WW"æ6÷’‚6÷W&6R“°  —F†—2ç6‚æ6÷’‚6÷W&6Rç6‚“°  —&WGW&âF†—3°  —Ð  –g&öÔ¥4ôâ‚§6öâ’°  —F†—2æ–çFVç6—G’Ò§6öâæ–çFVç6—G“²òòDôDó¢Ö÷fRF†—2&—BFòÆ–v‡Bæg&öÔ¥4ôâ‚“° —F†—2ç6‚æg&öÔ'&’‚§6öâç6‚“°  —&WGW&âF†—3°  —Ð  —Fô¥4ôâ‚ÖWF’°  –6öç7BFFÒ7WW"çFô¥4ôâ‚ÖWF“°  –FFæö&¦V7Bç6‚ÒF†—2ç6‚çFô'&’‚“°  —&WGW&âFF°  —Ð §Ð ¦6Æ72ÖFW&–ÄÆöFW"W‡FVæG2ÆöFW"°  –6öç7G'V7F÷"‚ÖævW"’°  —7WW"‚ÖævW"“° —F†—2çFW‡GW&W2Ò·Ó°  —Ð  –ÆöB‚W&ÂÂöäÆöBÂöå&öw&W72ÂöäW'&÷"’°  –6öç7B66÷RÒF†—3°  –6öç7BÆöFW"ÒæWrf–ÆTÆöFW"‚66÷RæÖævW"“° –ÆöFW"ç6WEF‚‚66÷RçF‚“° –ÆöFW"ç6WE&WVW7D†VFW"‚66÷Rç&WVW7D†VFW"“° –ÆöFW"ç6WEv—F„7&VFVçF–Ç2‚66÷Rçv—F„7&VFVçF–Ç2“° –ÆöFW"æÆöB‚W&ÂÂgVæ7F–öâ‚FW‡B’°  —G'’°  –öäÆöB‚66÷Rç'6R‚¥4ôâç'6R‚FW‡B’’“°  —Ò6F6‚‚R’°  ––b‚öäW'&÷"’°  –öäW'&÷"‚R“°  —ÒVÇ6R°  –6öç6öÆRæW'&÷"‚R“°  —Ð  —66÷RæÖævW"æ—FVÔW'&÷"‚W&Â“°  —Ð  —ÒÂöå&öw&W72ÂöäW'&÷"“°  —Ð  —'6R‚§6öâ’°  –6öç7BFW‡GW&W2ÒF†—2çFW‡GW&W3°  –gVæ7F–öâvWEFW‡GW&R‚æÖR’°  ––b‚FW‡GW&W5²æÖRÒÓÓÒVæFVf–æVB’°  –6öç6öÆRçv&â‚uD…$TRäÖFW&–ÄÆöFW#¢VæFVf–æVBFW‡GW&RrÂæÖR“°  —Ð  —&WGW&âFW‡GW&W5²æÖRÓ°  —Ð  –6öç7BÖFW&–ÂÒÖFW&–ÄÆöFW"æ7&VFTÖFW&–Äg&öÕG—R‚§6öâçG—R“°  ––b‚§6öâçWV–BÓÒVæFVf–æVB’ÖFW&–ÂçWV–BÒ§6öâçWV–C° ––b‚§6öâææÖRÓÒVæFVf–æVB’ÖFW&–ÂææÖRÒ§6öâææÖS° ––b‚§6öâæ6öÆ÷"ÓÒVæFVf–æVBbbÖFW&–Âæ6öÆ÷"ÓÒVæFVf–æVB’ÖFW&–Âæ6öÆ÷"ç6WD†W‚‚§6öâæ6öÆ÷"“° ––b‚§6öâç&÷Vv†æW72ÓÒVæFVf–æVB’ÖFW&–Âç&÷Vv†æW72Ò§6öâç&÷Vv†æW73° ––b‚§6öâæÖWFÆæW72ÓÒVæFVf–æVB’ÖFW&–ÂæÖWFÆæW72Ò§6öâæÖWFÆæW73° ––b‚§6öâç6†VVâÓÒVæFVf–æVB’ÖFW&–Âç6†VVâÒ§6öâç6†VVã° ––b‚§6öâç6†VVä6öÆ÷"ÓÒVæFVf–æVB’ÖFW&–Âç6†VVä6öÆ÷"ÒæWr6öÆ÷"‚’ç6WD†W‚‚§6öâç6†VVä6öÆ÷"“° ––b‚§6öâç6†VVå&÷Vv†æW72ÓÒVæFVf–æVB’ÖFW&–Âç6†VVå&÷Vv†æW72Ò§6öâç6†VVå&÷Vv†æW73° ––b‚§6öâæVÖ—76—fRÓÒVæFVf–æVBbbÖFW&–ÂæVÖ—76—fRÓÒVæFVf–æVB’ÖFW&–ÂæVÖ—76—fRç6WD†W‚‚§6öâæVÖ—76—fR“° ––b‚§6öâç7V7VÆ"ÓÒVæFVf–æVBbbÖFW&–Âç7V7VÆ"ÓÒVæFVf–æVB’ÖFW&–Âç7V7VÆ"ç6WD†W‚‚§6öâç7V7VÆ"“° ––b‚§6öâç7V7VÆ$–çFVç6—G’ÓÒVæFVf–æVB’ÖFW&–Âç7V7VÆ$–çFVç6—G’Ò§6öâç7V7VÆ$–çFVç6—G“° ––b‚§6öâç7V7VÆ$6öÆ÷"ÓÒVæFVf–æVBbbÖFW&–Âç7V7VÆ$6öÆ÷"ÓÒVæFVf–æVB’ÖFW&–Âç7V7VÆ$6öÆ÷"ç6WD†W‚‚§6öâç7V7VÆ$6öÆ÷"“° ––b‚§6öâç6†–æ–æW72ÓÒVæFVf–æVB’ÖFW&–Âç6†–æ–æW72Ò§6öâç6†–æ–æW73° ––b‚§6öâæ6ÆV&6öBÓÒVæFVf–æVB’ÖFW&–Âæ6ÆV&6öBÒ§6öâæ6ÆV&6öC° ––b‚§6öâæ6ÆV&6öE&÷Vv†æW72ÓÒVæFVf–æVB’ÖFW&–Âæ6ÆV&6öE&÷Vv†æW72Ò§6öâæ6ÆV&6öE&÷Vv†æW73° ––b‚§6öâæF—7W'6–öâÓÒVæFVf–æVB’ÖFW&–ÂæF—7W'6–öâÒ§6öâæF—7W'6–öã° ––b‚§6öâæ—&–FW66Væ6RÓÒVæFVf–æVB’ÖFW&–Âæ—&–FW66Væ6RÒ§6öâæ—&–FW66Væ6S° ––b‚§6öâæ—&–FW66Væ6T”õ"ÓÒVæFVf–æVB’ÖFW&–Âæ—&–FW66Væ6T”õ"Ò§6öâæ—&–FW66Væ6T”õ#° ––b‚§6öâæ—&–FW66Væ6UF†–6¶æW75&ævRÓÒVæFVf–æVB’ÖFW&–Âæ—&–FW66Væ6UF†–6¶æW75&ævRÒ§6öâæ—&–FW66Væ6UF†–6¶æW75&ævS° ––b‚§6öâçG&ç6Ö—76–öâÓÒVæFVf–æVB’ÖFW&–ÂçG&ç6Ö—76–öâÒ§6öâçG&ç6Ö—76–öã° ––b‚§6öâçF†–6¶æW72ÓÒVæFVf–æVB’ÖFW&–ÂçF†–6¶æW72Ò§6öâçF†–6¶æW73° ––b‚§6öâæGFVçVF–öäF—7Fæ6RÓÒVæFVf–æVB’ÖFW&–ÂæGFVçVF–öäF—7Fæ6RÒ§6öâæGFVçVF–öäF—7Fæ6S° ––b‚§6öâæGFVçVF–öä6öÆ÷"ÓÒVæFVf–æVBbbÖFW&–ÂæGFVçVF–öä6öÆ÷"ÓÒVæFVf–æVB’ÖFW&–ÂæGFVçVF–öä6öÆ÷"ç6WD†W‚‚§6öâæGFVçVF–öä6öÆ÷"“° ––b‚§6öâææ—6÷G&÷’ÓÒVæFVf–æVB’ÖFW&–Âææ—6÷G&÷’Ò§6öâææ—6÷G&÷“° ––b‚§6öâææ—6÷G&÷•&÷FF–öâÓÒVæFVf–æVB’ÖFW&–Âææ—6÷G&÷•&÷FF–öâÒ§6öâææ—6÷G&÷•&÷FF–öã° ––b‚§6öâæförÓÒVæFVf–æVB’ÖFW&–ÂæförÒ§6öâæfös° ––b‚§6öâæfÆE6†F–ærÓÒVæFVf–æVB’ÖFW&–ÂæfÆE6†F–ærÒ§6öâæfÆE6†F–æs° ––b‚§6öâæ&ÆVæF–ærÓÒVæFVf–æVB’ÖFW&–Âæ&ÆVæF–ærÒ§6öâæ&ÆVæF–æs° ––b‚§6öâæ6öÖ&–æRÓÒVæFVf–æVB’ÖFW&–Âæ6öÖ&–æRÒ§6öâæ6öÖ&–æS° ––b‚§6öâç6–FRÓÒVæFVf–æVB’ÖFW&–Âç6–FRÒ§6öâç6–FS° ––b‚§6öâç6†F÷u6–FRÓÒVæFVf–æVB’ÖFW&–Âç6†F÷u6–FRÒ§6öâç6†F÷u6–FS° ––b‚§6öâæ÷6—G’ÓÒVæFVf–æVB’ÖFW&–Âæ÷6—G’Ò§6öâæ÷6—G“° ––b‚§6öâçG&ç7&VçBÓÒVæFVf–æVB’ÖFW&–ÂçG&ç7&VçBÒ§6öâçG&ç7&VçC° ––b‚§6öâæÇ†FW7BÓÒVæFVf–æVB’ÖFW&–ÂæÇ†FW7BÒ§6öâæÇ†FW7C° ––b‚§6öâæÇ††6‚ÓÒVæFVf–æVB’ÖFW&–ÂæÇ††6‚Ò§6öâæÇ††6ƒ° ––b‚§6öâæFWF„gVæ2ÓÒVæFVf–æVB’ÖFW&–ÂæFWF„gVæ2Ò§6öâæFWF„gVæ3° ––b‚§6öâæFWF…FW7BÓÒVæFVf–æVB’ÖFW&–ÂæFWF…FW7BÒ§6öâæFWF…FW7C° ––b‚§6öâæFWF…w&—FRÓÒVæFVf–æVB’ÖFW&–ÂæFWF…w&—FRÒ§6öâæFWF…w&—FS° ––b‚§6öâæ6öÆ÷%w&—FRÓÒVæFVf–æVB’ÖFW&–Âæ6öÆ÷%w&—FRÒ§6öâæ6öÆ÷%w&—FS° ––b‚§6öâæ&ÆVæE7&2ÓÒVæFVf–æVB’ÖFW&–Âæ&ÆVæE7&2Ò§6öâæ&ÆVæE7&3° ––b‚§6öâæ&ÆVæDG7BÓÒVæFVf–æVB’ÖFW&–Âæ&ÆVæDG7BÒ§6öâæ&ÆVæDG7C° ––b‚§6öâæ&ÆVæDWVF–öâÓÒVæFVf–æVB’ÖFW&–Âæ&ÆVæDWVF–öâÒ§6öâæ&ÆVæDWVF–öã° ––b‚§6öâæ&ÆVæE7&4Ç†ÓÒVæFVf–æVB’ÖFW&–Âæ&ÆVæE7&4Ç†Ò§6öâæ&ÆVæE7&4Ç†° ––b‚§6öâæ&ÆVæDG7DÇ†ÓÒVæFVf–æVB’ÖFW&–Âæ&ÆVæDG7DÇ†Ò§6öâæ&ÆVæDG7DÇ†° ––b‚§6öâæ&ÆVæDWVF–öäÇ†ÓÒVæFVf–æVB’ÖFW&–Âæ&ÆVæDWVF–öäÇ†Ò§6öâæ&ÆVæDWVF–öäÇ†° ––b‚§6öâæ&ÆVæD6öÆ÷"ÓÒVæFVf–æVBbbÖFW&–Âæ&ÆVæD6öÆ÷"ÓÒVæFVf–æVB’ÖFW&–Âæ&ÆVæD6öÆ÷"ç6WD†W‚‚§6öâæ&ÆVæD6öÆ÷"“° ––b‚§6öâæ&ÆVæDÇ†ÓÒVæFVf–æVB’ÖFW&–Âæ&ÆVæDÇ†Ò§6öâæ&ÆVæDÇ†° ––b‚§6öâç7FVæ6–Åw&—FTÖ6²ÓÒVæFVf–æVB’ÖFW&–Âç7FVæ6–Åw&—FTÖ6²Ò§6öâç7FVæ6–Åw&—FTÖ6³° ––b‚§6öâç7FVæ6–ÄgVæ2ÓÒVæFVf–æVB’ÖFW&–Âç7FVæ6–ÄgVæ2Ò§6öâç7FVæ6–ÄgVæ3° ––b‚§6öâç7FVæ6–Å&VbÓÒVæFVf–æVB’ÖFW&–Âç7FVæ6–Å&VbÒ§6öâç7FVæ6–Å&Vc° ––b‚§6öâç7FVæ6–ÄgVæ4Ö6²ÓÒVæFVf–æVB’ÖFW&–Âç7FVæ6–ÄgVæ4Ö6²Ò§6öâç7FVæ6–ÄgVæ4Ö6³° ––b‚§6öâç7FVæ6–Äf–ÂÓÒVæFVf–æVB’ÖFW&–Âç7FVæ6–Äf–ÂÒ§6öâç7FVæ6–Äf–Ã° ––b‚§6öâç7FVæ6–Å¤f–ÂÓÒVæFVf–æVB’ÖFW&–Âç7FVæ6–Å¤f–ÂÒ§6öâç7FVæ6–Å¤f–Ã° ––b‚§6öâç7FVæ6–Å¥72ÓÒVæFVf–æVB’ÖFW&–Âç7FVæ6–Å¥72Ò§6öâç7FVæ6–Å¥73° ––b‚§6öâç7FVæ6–Åw&—FRÓÒVæFVf–æVB’ÖFW&–Âç7FVæ6–Åw&—FRÒ§6öâç7FVæ6–Åw&—FS°  ––b‚§6öâçv—&Vg&ÖRÓÒVæFVf–æVB’ÖFW&–Âçv—&Vg&ÖRÒ§6öâçv—&Vg&ÖS° ––b‚§6öâçv—&Vg&ÖTÆ–æWv–GF‚ÓÒVæFVf–æVB’ÖFW&–Âçv—&Vg&ÖTÆ–æWv–GF‚Ò§6öâçv—&Vg&ÖTÆ–æWv–GFƒ° ––b‚§6öâçv—&Vg&ÖTÆ–æV6ÓÒVæFVf–æVB’ÖFW&–Âçv—&Vg&ÖTÆ–æV6Ò§6öâçv—&Vg&ÖTÆ–æV6° ––b‚§6öâçv—&Vg&ÖTÆ–æV¦ö–âÓÒVæFVf–æVB’ÖFW&–Âçv—&Vg&ÖTÆ–æV¦ö–âÒ§6öâçv—&Vg&ÖTÆ–æV¦ö–ã°  ––b‚§6öâç&÷FF–öâÓÒVæFVf–æVB’ÖFW&–Âç&÷FF–öâÒ§6öâç&÷FF–öã°  ––b‚§6öâæÆ–æWv–GF‚ÓÒVæFVf–æVB’ÖFW&–ÂæÆ–æWv–GF‚Ò§6öâæÆ–æWv–GFƒ° ––b‚§6öâæF6…6—¦RÓÒVæFVf–æVB’ÖFW&–ÂæF6…6—¦RÒ§6öâæF6…6—¦S° ––b‚§6öâæv6—¦RÓÒVæFVf–æVB’ÖFW&–Âæv6—¦RÒ§6öâæv6—¦S° ––b‚§6öâç66ÆRÓÒVæFVf–æVB’ÖFW&–Âç66ÆRÒ§6öâç66ÆS°  ––b‚§6öâçöÇ–vöäöfg6WBÓÒVæFVf–æVB’ÖFW&–ÂçöÇ–vöäöfg6WBÒ§6öâçöÇ–vöäöfg6WC° ––b‚§6öâçöÇ–vöäöfg6WDf7F÷"ÓÒVæFVf–æVB’ÖFW&–ÂçöÇ–vöäöfg6WDf7F÷"Ò§6öâçöÇ–vöäöfg6WDf7F÷#° ––b‚§6öâçöÇ–vöäöfg6WEVæ—G2ÓÒVæFVf–æVB’ÖFW&–ÂçöÇ–vöäöfg6WEVæ—G2Ò§6öâçöÇ–vöäöfg6WEVæ—G3°  ––b‚§6öâæF—F†W&–ærÓÒVæFVf–æVB’ÖFW&–ÂæF—F†W&–ærÒ§6öâæF—F†W&–æs°  ––b‚§6öâæÇ†Fô6÷fW&vRÓÒVæFVf–æVB’ÖFW&–ÂæÇ†Fô6÷fW&vRÒ§6öâæÇ†Fô6÷fW&vS° ––b‚§6öâç&V×VÇF—Æ–VDÇ†ÓÒVæFVf–æVB’ÖFW&–Âç&V×VÇF—Æ–VDÇ†Ò§6öâç&V×VÇF—Æ–VDÇ†° ––b‚§6öâæf÷&6U6–ævÆU72ÓÒVæFVf–æVB’ÖFW&–Âæf÷&6U6–ævÆU72Ò§6öâæf÷&6U6–ævÆU73°  ––b‚§6öâçf—6–&ÆRÓÒVæFVf–æVB’ÖFW&–Âçf—6–&ÆRÒ§6öâçf—6–&ÆS°  ––b‚§6öâçFöæTÖVBÓÒVæFVf–æVB’ÖFW&–ÂçFöæTÖVBÒ§6öâçFöæTÖVC°  ––b‚§6öâçW6W$FFÓÒVæFVf–æVB’ÖFW&–ÂçW6W$FFÒ§6öâçW6W$FF°  ––b‚§6öâçfW'FW„6öÆ÷'2ÓÒVæFVf–æVB’°  ––b‚G—Vöb§6öâçfW'FW„6öÆ÷'2ÓÓÒvçVÖ&W"r’°  –ÖFW&–ÂçfW'FW„6öÆ÷'2Ò‚§6öâçfW'FW„6öÆ÷'2â’òG'VR¢fÇ6S°  —ÒVÇ6R°  –ÖFW&–ÂçfW'FW„6öÆ÷'2Ò§6öâçfW'FW„6öÆ÷'3°  —Ð  —Ð  ’òò6†FW"ÖFW&–À  ––b‚§6öâçVæ–f÷&×2ÓÒVæFVf–æVB’°  –f÷"‚6öç7BæÖR–â§6öâçVæ–f÷&×2’°  –6öç7BVæ–f÷&ÒÒ§6öâçVæ–f÷&×5²æÖRÓ°  –ÖFW&–ÂçVæ–f÷&×5²æÖRÒÒ·Ó°  —7v—F6‚‚Væ–f÷&ÒçG—R’°  –66RwBs  –ÖFW&–ÂçVæ–f÷&×5²æÖRÒçfÇVRÒvWEFW‡GW&R‚Væ–f÷&ÒçfÇVR“° –'&V³°  –66Rv2s  –ÖFW&–ÂçVæ–f÷&×5²æÖRÒçfÇVRÒæWr6öÆ÷"‚’ç6WD†W‚‚Væ–f÷&ÒçfÇVR“° –'&V³°  –66Rwc"s  –ÖFW&–ÂçVæ–f÷&×5²æÖRÒçfÇVRÒæWrfV7F÷#"‚’æg&öÔ'&’‚Væ–f÷&ÒçfÇVR“° –'&V³°  –66Rwc2s  –ÖFW&–ÂçVæ–f÷&×5²æÖRÒçfÇVRÒæWrfV7F÷#2‚’æg&öÔ'&’‚Væ–f÷&ÒçfÇVR“° –'&V³°  –66RwcBs  –ÖFW&–ÂçVæ–f÷&×5²æÖRÒçfÇVRÒæWrfV7F÷#B‚’æg&öÔ'&’‚Væ–f÷&ÒçfÇVR“° –'&V³°  –66RvÓ2s  –ÖFW&–ÂçVæ–f÷&×5²æÖRÒçfÇVRÒæWrÖG&—ƒ2‚’æg&öÔ'&’‚Væ–f÷&ÒçfÇVR“° –'&V³°  –66RvÓBs  –ÖFW&–ÂçVæ–f÷&×5²æÖRÒçfÇVRÒæWrÖG&—ƒB‚’æg&öÔ'&’‚Væ–f÷&ÒçfÇVR“° –'&V³°  –FVfVÇC  –ÖFW&–ÂçVæ–f÷&×5²æÖRÒçfÇVRÒVæ–f÷&ÒçfÇVS°  —Ð  —Ð  —Ð  ––b‚§6öâæFVf–æW2ÓÒVæFVf–æVB’ÖFW&–ÂæFVf–æW2Ò§6öâæFVf–æW3° ––b‚§6öâçfW'FW…6†FW"ÓÒVæFVf–æVB’ÖFW&–ÂçfW'FW…6†FW"Ò§6öâçfW'FW…6†FW#° ––b‚§6öâæg&vÖVçE6†FW"ÓÒVæFVf–æVB’ÖFW&–Âæg&vÖVçE6†FW"Ò§6öâæg&vÖVçE6†FW#° ––b‚§6öâævÇ6ÅfW'6–öâÓÒVæFVf–æVB’ÖFW&–ÂævÇ6ÅfW'6–öâÒ§6öâævÇ6ÅfW'6–öã°  ––b‚§6öâæW‡FVç6–öç2ÓÒVæFVf–æVB’°  –f÷"‚6öç7B¶W’–â§6öâæW‡FVç6–öç2’°  –ÖFW&–ÂæW‡FVç6–öç5²¶W’ÒÒ§6öâæW‡FVç6–öç5²¶W’Ó°  —Ð  —Ð  ––b‚§6öâæÆ–v‡G2ÓÒVæFVf–æVB’ÖFW&–ÂæÆ–v‡G2Ò§6öâæÆ–v‡G3° ––b‚§6öâæ6Æ—–ærÓÒVæFVf–æVB’ÖFW&–Âæ6Æ—–ærÒ§6öâæ6Æ—–æs°  ’òòf÷"ö–çG4ÖFW&–À  ––b‚§6öâç6—¦RÓÒVæFVf–æVB’ÖFW&–Âç6—¦RÒ§6öâç6—¦S° ––b‚§6öâç6—¦TGFVçVF–öâÓÒVæFVf–æVB’ÖFW&–Âç6—¦TGFVçVF–öâÒ§6öâç6—¦TGFVçVF–öã°  ’òòÖ0  ––b‚§6öâæÖÓÒVæFVf–æVB’ÖFW&–ÂæÖÒvWEFW‡GW&R‚§6öâæÖ“° ––b‚§6öâæÖF6ÓÒVæFVf–æVB’ÖFW&–ÂæÖF6ÒvWEFW‡GW&R‚§6öâæÖF6“°  ––b‚§6öâæÇ†ÖÓÒVæFVf–æVB’ÖFW&–ÂæÇ†ÖÒvWEFW‡GW&R‚§6öâæÇ†Ö“°  ––b‚§6öâæ'V×ÖÓÒVæFVf–æVB’ÖFW&–Âæ'V×ÖÒvWEFW‡GW&R‚§6öâæ'V×Ö“° ––b‚§6öâæ'V×66ÆRÓÒVæFVf–æVB’ÖFW&–Âæ'V×66ÆRÒ§6öâæ'V×66ÆS°  ––b‚§6öâææ÷&ÖÄÖÓÒVæFVf–æVB’ÖFW&–Âææ÷&ÖÄÖÒvWEFW‡GW&R‚§6öâææ÷&ÖÄÖ“° ––b‚§6öâææ÷&ÖÄÖG—RÓÒVæFVf–æVB’ÖFW&–Âææ÷&ÖÄÖG—RÒ§6öâææ÷&ÖÄÖG—S° ––b‚§6öâææ÷&ÖÅ66ÆRÓÒVæFVf–æVB’°  –ÆWBæ÷&ÖÅ66ÆRÒ§6öâææ÷&ÖÅ66ÆS°  ––b‚'&’æ—4'&’‚æ÷&ÖÅ66ÆR’ÓÓÒfÇ6R’°  ’òò&ÆVæFW"W‡÷'FW"W6VBFòW‡÷'B66Æ"â6VR3sCS  –æ÷&ÖÅ66ÆRÒ²æ÷&ÖÅ66ÆRÂæ÷&ÖÅ66ÆRÓ°  —Ð  –ÖFW&–Âææ÷&ÖÅ66ÆRÒæWrfV7F÷#"‚’æg&öÔ'&’‚æ÷&ÖÅ66ÆR“°  —Ð  ––b‚§6öâæF—7Æ6VÖVçDÖÓÒVæFVf–æVB’ÖFW&–ÂæF—7Æ6VÖVçDÖÒvWEFW‡GW&R‚§6öâæF—7Æ6VÖVçDÖ“° ––b‚§6öâæF—7Æ6VÖVçE66ÆRÓÒVæFVf–æVB’ÖFW&–ÂæF—7Æ6VÖVçE66ÆRÒ§6öâæF—7Æ6VÖVçE66ÆS° ––b‚§6öâæF—7Æ6VÖVçD&–2ÓÒVæFVf–æVB’ÖFW&–ÂæF—7Æ6VÖVçD&–2Ò§6öâæF—7Æ6VÖVçD&–3°  ––b‚§6öâç&÷Vv†æW74ÖÓÒVæFVf–æVB’ÖFW&–Âç&÷Vv†æW74ÖÒvWEFW‡GW&R‚§6öâç&÷Vv†æW74Ö“° ––b‚§6öâæÖWFÆæW74ÖÓÒVæFVf–æVB’ÖFW&–ÂæÖWFÆæW74ÖÒvWEFW‡GW&R‚§6öâæÖWFÆæW74Ö“°  ––b‚§6öâæVÖ—76—fTÖÓÒVæFVf–æVB’ÖFW&–ÂæVÖ—76—fTÖÒvWEFW‡GW&R‚§6öâæVÖ—76—fTÖ“° ––b‚§6öâæVÖ—76—fT–çFVç6—G’ÓÒVæFVf–æVB’ÖFW&–ÂæVÖ—76—fT–çFVç6—G’Ò§6öâæVÖ—76—fT–çFVç6—G“°  ––b‚§6öâç7V7VÆ$ÖÓÒVæFVf–æVB’ÖFW&–Âç7V7VÆ$ÖÒvWEFW‡GW&R‚§6öâç7V7VÆ$Ö“° ––b‚§6öâç7V7VÆ$–çFVç6—G”ÖÓÒVæFVf–æVB’ÖFW&–Âç7V7VÆ$–çFVç6—G”ÖÒvWEFW‡GW&R‚§6öâç7V7VÆ$–çFVç6—G”Ö“° ––b‚§6öâç7V7VÆ$6öÆ÷$ÖÓÒVæFVf–æVB’ÖFW&–Âç7V7VÆ$6öÆ÷$ÖÒvWEFW‡GW&R‚§6öâç7V7VÆ$6öÆ÷$Ö“°  ––b‚§6öâæVçdÖÓÒVæFVf–æVB’ÖFW&–ÂæVçdÖÒvWEFW‡GW&R‚§6öâæVçdÖ“° ––b‚§6öâæVçdÖ&÷FF–öâÓÒVæFVf–æVB’ÖFW&–ÂæVçdÖ&÷FF–öâæg&öÔ'&’‚§6öâæVçdÖ&÷FF–öâ“° ––b‚§6öâæVçdÖ–çFVç6—G’ÓÒVæFVf–æVB’ÖFW&–ÂæVçdÖ–çFVç6—G’Ò§6öâæVçdÖ–çFVç6—G“°  ––b‚§6öâç&VfÆV7F—f—G’ÓÒVæFVf–æVB’ÖFW&–Âç&VfÆV7F—f—G’Ò§6öâç&VfÆV7F—f—G“° ––b‚§6öâç&Vg&7F–öå&F–òÓÒVæFVf–æVB’ÖFW&–Âç&Vg&7F–öå&F–òÒ§6öâç&Vg&7F–öå&F–ó°  ––b‚§6öâæÆ–v‡DÖÓÒVæFVf–æVB’ÖFW&–ÂæÆ–v‡DÖÒvWEFW‡GW&R‚§6öâæÆ–v‡DÖ“° ––b‚§6öâæÆ–v‡DÖ–çFVç6—G’ÓÒVæFVf–æVB’ÖFW&–ÂæÆ–v‡DÖ–çFVç6—G’Ò§6öâæÆ–v‡DÖ–çFVç6—G“°  ––b‚§6öâæôÖÓÒVæFVf–æVB’ÖFW&–ÂæôÖÒvWEFW‡GW&R‚§6öâæôÖ“° ––b‚§6öâæôÖ–çFVç6—G’ÓÒVæFVf–æVB’ÖFW&–ÂæôÖ–çFVç6—G’Ò§6öâæôÖ–çFVç6—G“°  ––b‚§6öâæw&F–VçDÖÓÒVæFVf–æVB’ÖFW&–Âæw&F–VçDÖÒvWEFW‡GW&R‚§6öâæw&F–VçDÖ“°  ––b‚§6öâæ6ÆV&6öDÖÓÒVæFVf–æVB’ÖFW&–Âæ6ÆV&6öDÖÒvWEFW‡GW&R‚§6öâæ6ÆV&6öDÖ“° ––b‚§6öâæ6ÆV&6öE&÷Vv†æW74ÖÓÒVæFVf–æVB’ÖFW&–Âæ6ÆV&6öE&÷Vv†æW74ÖÒvWEFW‡GW&R‚§6öâæ6ÆV&6öE&÷Vv†æW74Ö“° ––b‚§6öâæ6ÆV&6öDæ÷&ÖÄÖÓÒVæFVf–æVB’ÖFW&–Âæ6ÆV&6öDæ÷&ÖÄÖÒvWEFW‡GW&R‚§6öâæ6ÆV&6öDæ÷&ÖÄÖ“° ––b‚§6öâæ6ÆV&6öDæ÷&ÖÅ66ÆRÓÒVæFVf–æVB’ÖFW&–Âæ6ÆV&6öDæ÷&ÖÅ66ÆRÒæWrfV7F÷#"‚’æg&öÔ'&’‚§6öâæ6ÆV&6öDæ÷&ÖÅ66ÆR“°  ––b‚§6öâæ—&–FW66Væ6TÖÓÒVæFVf–æVB’ÖFW&–Âæ—&–FW66Væ6TÖÒvWEFW‡GW&R‚§6öâæ—&–FW66Væ6TÖ“° ––b‚§6öâæ—&–FW66Væ6UF†–6¶æW74ÖÓÒVæFVf–æVB’ÖFW&–Âæ—&–FW66Væ6UF†–6¶æW74ÖÒvWEFW‡GW&R‚§6öâæ—&–FW66Væ6UF†–6¶æW74Ö“°  ––b‚§6öâçG&ç6Ö—76–öäÖÓÒVæFVf–æVB’ÖFW&–ÂçG&ç6Ö—76–öäÖÒvWEFW‡GW&R‚§6öâçG&ç6Ö—76–öäÖ“° ––b‚§6öâçF†–6¶æW74ÖÓÒVæFVf–æVB’ÖFW&–ÂçF†–6¶æW74ÖÒvWEFW‡GW&R‚§6öâçF†–6¶æW74Ö“°  ––b‚§6öâææ—6÷G&÷”ÖÓÒVæFVf–æVB’ÖFW&–Âææ—6÷G&÷”ÖÒvWEFW‡GW&R‚§6öâææ—6÷G&÷”Ö“°  ––b‚§6öâç6†VVä6öÆ÷$ÖÓÒVæFVf–æVB’ÖFW&–Âç6†VVä6öÆ÷$ÖÒvWEFW‡GW&R‚§6öâç6†VVä6öÆ÷$Ö“° ––b‚§6öâç6†VVå&÷Vv†æW74ÖÓÒVæFVf–æVB’ÖFW&–Âç6†VVå&÷Vv†æW74ÖÒvWEFW‡GW&R‚§6öâç6†VVå&÷Vv†æW74Ö“°  —&WGW&âÖFW&–Ã°  —Ð  —6WEFW‡GW&W2‚fÇVR’°  —F†—2çFW‡GW&W2ÒfÇVS° —&WGW&âF†—3°  —Ð  —7FF–27&VFTÖFW&–Äg&öÕG—R‚G—R’°  –6öç7BÖFW&–ÄÆ–"Ò° •6†F÷tÖFW&–ÂÀ •7&—FTÖFW&–ÂÀ •&u6†FW$ÖFW&–ÂÀ •6†FW$ÖFW&–ÂÀ •ö–çG4ÖFW&–ÂÀ ”ÖW6…‡—6–6ÄÖFW&–ÂÀ ”ÖW6…7FæF&DÖFW&–ÂÀ ”ÖW6…†öætÖFW&–ÂÀ ”ÖW6…FööäÖFW&–ÂÀ ”ÖW6„æ÷&ÖÄÖFW&–ÂÀ ”ÖW6„ÆÖ&W'DÖFW&–ÂÀ ”ÖW6„FWF„ÖFW&–ÂÀ ”ÖW6„F—7Fæ6TÖFW&–ÂÀ ”ÖW6„&6–4ÖFW&–ÂÀ ”ÖW6„ÖF6ÖFW&–ÂÀ ”Æ–æTF6†VDÖFW&–ÂÀ ”Æ–æT&6–4ÖFW&–ÂÀ ”ÖFW&–À —Ó°  —&WGW&âæWrÖFW&–ÄÆ–%²G—RÒ‚“°  —Ð §Ð ¦6Æ72ÆöFW%WF–Ç2°  —7FF–2FV6öFUFW‡B‚'&’’²òòFW&V6FVBÂ#cP  –6öç6öÆRçv&â‚uD…$TRäÆöFW%WF–Ç3¢FV6öFUFW‡B‚’†2&VVâFW&V6FVBv—F‚#cRæBv–ÆÂ&R&VÖ÷fVBv—F‚#sRâW6RFW‡DFV6öFW"–ç7FVBâr“°  ––b‚G—VöbFW‡DFV6öFW"ÓÒwVæFVf–æVBr’°  —&WGW&âæWrFW‡DFV6öFW"‚’æFV6öFR‚'&’“°  —Ð  ’òòfö–BF†R7G&–æræg&öÔ6†$6öFRæÇ’†çVÆÂÂ'&’’6†÷'F7WBÂv†–6€ ’òòF‡&÷w2&Ö†–×VÒ6ÆÂ7F6²6—¦RW†6VVFVB"W'&÷"f÷"Æ&vR'&—2à  –ÆWB2Òrs°  –f÷"‚ÆWB’ÒÂ–ÂÒ'&’æÆVæwFƒ²’Â–Ã²’²²’°  ’òò–×Æ–6—FÇ’77VÖW2Æ—GFÆRÖVæF–âà —2³Ò7G&–æræg&öÔ6†$6öFR‚'&•²’Ò“°  —Ð  —G'’°  ’òòÖW&vW2×VÇF’Ö'—FRWFbÓ‚6†&7FW'2à  —&WGW&âFV6öFUU$”6ö×öæVçB‚W66R‚2’“°  —Ò6F6‚‚R’²òò6VR3c3S€  —&WGW&â3°  —Ð  —Ð  —7FF–2W‡G&7EW&Ä&6R‚W&Â’°  –6öç7B–æFW‚ÒW&ÂæÆ7D–æFW„öb‚ròr“°  ––b‚–æFW‚ÓÓÒÒ’&WGW&ârâòs°  —&WGW&âW&Âç6Æ–6R‚Â–æFW‚²“°  —Ð  —7FF–2&W6öÇfUU$Â‚W&ÂÂF‚’°  ’òò–çfÆ–BU$À ––b‚G—VöbW&ÂÓÒw7G&–ærrÇÂW&ÂÓÓÒrr’&WGW&ârs°  ’òò†÷7B&VÆF—fRU$À ––b‚õæ‡GG3ó¥ÂõÂòö’çFW7B‚F‚’bbõåÂòòçFW7B‚W&Â’’°  —F‚ÒF‚ç&WÆ6R‚ò…æ‡GG3ó¥ÂõÂõµåÂõÒ²’â¢ö’ÂrCr“°  —Ð  ’òò'6öÇWFRU$Â‡GG¢òòÆ‡GG3¢òòÂòð ––b‚õâ†‡GG3ó¢“õÂõÂòö’çFW7B‚W&Â’’&WGW&âW&Ã°  ’òòFFU$ ––b‚õæFF¢â¢Ââ¢Bö’çFW7B‚W&Â’’&WGW&âW&Ã°  ’òò&Æö"U$À ––b‚õæ&Æö#¢â¢Bö’çFW7B‚W&Â’’&WGW&âW&Ã°  ’òò&VÆF—fRU$À —&WGW&âF‚²W&Ã°  —Ð §Ð ¦6Æ72–ç7Fæ6VD'VffW$vVöÖWG'’W‡FVæG2'VffW$vVöÖWG'’°  –6öç7G'V7F÷"‚’°  —7WW"‚“°  —F†—2æ—4–ç7Fæ6VD'VffW$vVöÖWG'’ÒG'VS°  —F†—2çG—RÒt–ç7Fæ6VD'VffW$vVöÖWG'’s° —F†—2æ–ç7Fæ6T6÷VçBÒ–æf–æ—G“°  —Ð  –6÷’‚6÷W&6R’°  —7WW"æ6÷’‚6÷W&6R“°  —F†—2æ–ç7Fæ6T6÷VçBÒ6÷W&6Ræ–ç7Fæ6T6÷VçC°  —&WGW&âF†—3°  —Ð  —Fô¥4ôâ‚’°  –6öç7BFFÒ7WW"çFô¥4ôâ‚“°  –FFæ–ç7Fæ6T6÷VçBÒF†—2æ–ç7Fæ6T6÷VçC°  –FFæ—4–ç7Fæ6VD'VffW$vVöÖWG'’ÒG'VS°  —&WGW&âFF°  —Ð §Ð ¦6Æ72'VffW$vVöÖWG'”ÆöFW"W‡FVæG2ÆöFW"°  –6öç7G'V7F÷"‚ÖævW"’°  —7WW"‚ÖævW"“°  —Ð  –ÆöB‚W&ÂÂöäÆöBÂöå&öw&W72ÂöäW'&÷"’°  –6öç7B66÷RÒF†—3°  –6öç7BÆöFW"ÒæWrf–ÆTÆöFW"‚66÷RæÖævW"“° –ÆöFW"ç6WEF‚‚66÷RçF‚“° –ÆöFW"ç6WE&WVW7D†VFW"‚66÷Rç&WVW7D†VFW"“° –ÆöFW"ç6WEv—F„7&VFVçF–Ç2‚66÷Rçv—F„7&VFVçF–Ç2“° –ÆöFW"æÆöB‚W&ÂÂgVæ7F–öâ‚FW‡B’°  —G'’°  –öäÆöB‚66÷Rç'6R‚¥4ôâç'6R‚FW‡B’’“°  —Ò6F6‚‚R’°  ––b‚öäW'&÷"’°  –öäW'&÷"‚R“°  —ÒVÇ6R°  –6öç6öÆRæW'&÷"‚R“°  —Ð  —66÷RæÖævW"æ—FVÔW'&÷"‚W&Â“°  —Ð  —ÒÂöå&öw&W72ÂöäW'&÷"“°  —Ð  —'6R‚§6öâ’°  –6öç7B–çFW&ÆVfVD'VffW$ÖÒ·Ó° –6öç7B'&”'VffW$ÖÒ·Ó°  –gVæ7F–öâvWD–çFW&ÆVfVD'VffW"‚§6öâÂWV–B’°  ––b‚–çFW&ÆVfVD'VffW$Ö²WV–BÒÓÒVæFVf–æVB’&WGW&â–çFW&ÆVfVD'VffW$Ö²WV–BÓ°  –6öç7B–çFW&ÆVfVD'VffW'2Ò§6öâæ–çFW&ÆVfVD'VffW'3° –6öç7B–çFW&ÆVfVD'VffW"Ò–çFW&ÆVfVD'VffW'5²WV–BÓ°  –6öç7B'VffW"ÒvWD'&”'VffW"‚§6öâÂ–çFW&ÆVfVD'VffW"æ'VffW"“°  –6öç7B'&’ÒvWEG—VD'&’‚–çFW&ÆVfVD'VffW"çG—RÂ'VffW"“° –6öç7B–"ÒæWr–çFW&ÆVfVD'VffW"‚'&’Â–çFW&ÆVfVD'VffW"ç7G&–FR“° ––"çWV–BÒ–çFW&ÆVfVD'VffW"çWV–C°  ––çFW&ÆVfVD'VffW$Ö²WV–BÒÒ–#°  —&WGW&â–#°  —Ð  –gVæ7F–öâvWD'&”'VffW"‚§6öâÂWV–B’°  ––b‚'&”'VffW$Ö²WV–BÒÓÒVæFVf–æVB’&WGW&â'&”'VffW$Ö²WV–BÓ°  –6öç7B'&”'VffW'2Ò§6öâæ'&”'VffW'3° –6öç7B'&”'VffW"Ò'&”'VffW'5²WV–BÓ°  –6öç7B"ÒæWrV–çC3$'&’‚'&”'VffW"’æ'VffW#°  –'&”'VffW$Ö²WV–BÒÒ#°  —&WGW&â#°  —Ð  –6öç7BvVöÖWG'’Ò§6öâæ—4–ç7Fæ6VD'VffW$vVöÖWG'’òæWr–ç7Fæ6VD'VffW$vVöÖWG'’‚’¢æWr'VffW$vVöÖWG'’‚“°  –6öç7B–æFW‚Ò§6öâæFFæ–æFWƒ°  ––b‚–æFW‚ÓÒVæFVf–æVB’°  –6öç7BG—VD'&’ÒvWEG—VD'&’‚–æFW‚çG—RÂ–æFW‚æ'&’“° –vVöÖWG'’ç6WD–æFW‚‚æWr'VffW$GG&–'WFR‚G—VD'&’Â’“°  —Ð  –6öç7BGG&–'WFW2Ò§6öâæFFæGG&–'WFW3°  –f÷"‚6öç7B¶W’–âGG&–'WFW2’°  –6öç7BGG&–'WFRÒGG&–'WFW5²¶W’Ó° –ÆWB'VffW$GG&–'WFS°  ––b‚GG&–'WFRæ—4–çFW&ÆVfVD'VffW$GG&–'WFR’°  –6öç7B–çFW&ÆVfVD'VffW"ÒvWD–çFW&ÆVfVD'VffW"‚§6öâæFFÂGG&–'WFRæFF“° –'VffW$GG&–'WFRÒæWr–çFW&ÆVfVD'VffW$GG&–'WFR‚–çFW&ÆVfVD'VffW"ÂGG&–'WFRæ—FVÕ6—¦RÂGG&–'WFRæöfg6WBÂGG&–'WFRææ÷&ÖÆ—¦VB“°  —ÒVÇ6R°  –6öç7BG—VD'&’ÒvWEG—VD'&’‚GG&–'WFRçG—RÂGG&–'WFRæ'&’“° –6öç7B'VffW$GG&–'WFT6öç7G"ÒGG&–'WFRæ—4–ç7Fæ6VD'VffW$GG&–'WFRò–ç7Fæ6VD'VffW$GG&–'WFR¢'VffW$GG&–'WFS° –'VffW$GG&–'WFRÒæWr'VffW$GG&–'WFT6öç7G"‚G—VD'&’ÂGG&–'WFRæ—FVÕ6—¦RÂGG&–'WFRææ÷&ÖÆ—¦VB“°  —Ð  ––b‚GG&–'WFRææÖRÓÒVæFVf–æVB’'VffW$GG&–'WFRææÖRÒGG&–'WFRææÖS° ––b‚GG&–'WFRçW6vRÓÒVæFVf–æVB’'VffW$GG&–'WFRç6WEW6vR‚GG&–'WFRçW6vR“°  –vVöÖWG'’ç6WDGG&–'WFR‚¶W’Â'VffW$GG&–'WFR“°  —Ð  –6öç7BÖ÷'„GG&–'WFW2Ò§6öâæFFæÖ÷'„GG&–'WFW3°  ––b‚Ö÷'„GG&–'WFW2’°  –f÷"‚6öç7B¶W’–âÖ÷'„GG&–'WFW2’°  –6öç7BGG&–'WFT'&’ÒÖ÷'„GG&–'WFW5²¶W’Ó°  –6öç7B'&’ÒµÓ°  –f÷"‚ÆWB’ÒÂ–ÂÒGG&–'WFT'&’æÆVæwFƒ²’Â–Ã²’²²’°  –6öç7BGG&–'WFRÒGG&–'WFT'&•²’Ó° –ÆWB'VffW$GG&–'WFS°  ––b‚GG&–'WFRæ—4–çFW&ÆVfVD'VffW$GG&–'WFR’°  –6öç7B–çFW&ÆVfVD'VffW"ÒvWD–çFW&ÆVfVD'VffW"‚§6öâæFFÂGG&–'WFRæFF“° –'VffW$GG&–'WFRÒæWr–çFW&ÆVfVD'VffW$GG&–'WFR‚–çFW&ÆVfVD'VffW"ÂGG&–'WFRæ—FVÕ6—¦RÂGG&–'WFRæöfg6WBÂGG&–'WFRææ÷&ÖÆ—¦VB“°  —ÒVÇ6R°  –6öç7BG—VD'&’ÒvWEG—VD'&’‚GG&–'WFRçG—RÂGG&–'WFRæ'&’“° –'VffW$GG&–'WFRÒæWr'VffW$GG&–'WFR‚G—VD'&’ÂGG&–'WFRæ—FVÕ6—¦RÂGG&–'WFRææ÷&ÖÆ—¦VB“°  —Ð  ––b‚GG&–'WFRææÖRÓÒVæFVf–æVB’'VffW$GG&–'WFRææÖRÒGG&–'WFRææÖS° –'&’çW6‚‚'VffW$GG&–'WFR“°  —Ð  –vVöÖWG'’æÖ÷'„GG&–'WFW5²¶W’ÒÒ'&“°  —Ð  —Ð  –6öç7BÖ÷'…F&vWG5&VÆF—fRÒ§6öâæFFæÖ÷'…F&vWG5&VÆF—fS°  ––b‚Ö÷'…F&vWG5&VÆF—fR’°  –vVöÖWG'’æÖ÷'…F&vWG5&VÆF—fRÒG'VS°  —Ð  –6öç7Bw&÷W2Ò§6öâæFFæw&÷W2ÇÂ§6öâæFFæG&v6ÆÇ2ÇÂ§6öâæFFæöfg6WG3°  ––b‚w&÷W2ÓÒVæFVf–æVB’°  –f÷"‚ÆWB’ÒÂâÒw&÷W2æÆVæwFƒ²’ÓÒã²²²’’°  –6öç7Bw&÷WÒw&÷W5²’Ó°  –vVöÖWG'’æFDw&÷W‚w&÷Wç7F'BÂw&÷Wæ6÷VçBÂw&÷WæÖFW&–Ä–æFW‚“°  —Ð  —Ð  –6öç7B&÷VæF–æu7†W&RÒ§6öâæFFæ&÷VæF–æu7†W&S°  ––b‚&÷VæF–æu7†W&RÓÒVæFVf–æVB’°  –6öç7B6VçFW"ÒæWrfV7F÷#2‚“°  ––b‚&÷VæF–æu7†W&Ræ6VçFW"ÓÒVæFVf–æVB’°  –6VçFW"æg&öÔ'&’‚&÷VæF–æu7†W&Ræ6VçFW"“°  —Ð  –vVöÖWG'’æ&÷VæF–æu7†W&RÒæWr7†W&R‚6VçFW"Â&÷VæF–æu7†W&Rç&F—W2“°  —Ð  ––b‚§6öâææÖR’vVöÖWG'’ææÖRÒ§6öâææÖS° ––b‚§6öâçW6W$FF’vVöÖWG'’çW6W$FFÒ§6öâçW6W$FF°  —&WGW&âvVöÖWG'“°  —Ð §Ð ¦6Æ72ö&¦V7DÆöFW"W‡FVæG2ÆöFW"°  –6öç7G'V7F÷"‚ÖævW"’°  —7WW"‚ÖævW"“°  —Ð  –ÆöB‚W&ÂÂöäÆöBÂöå&öw&W72ÂöäW'&÷"’°  –6öç7B66÷RÒF†—3°  –6öç7BF‚Ò‚F†—2çF‚ÓÓÒrr’òÆöFW%WF–Ç2æW‡G&7EW&Ä&6R‚W&Â’¢F†—2çFƒ° —F†—2ç&W6÷W&6UF‚ÒF†—2ç&W6÷W&6UF‚ÇÂFƒ°  –6öç7BÆöFW"ÒæWrf–ÆTÆöFW"‚F†—2æÖævW"“° –ÆöFW"ç6WEF‚‚F†—2çF‚“° –ÆöFW"ç6WE&WVW7D†VFW"‚F†—2ç&WVW7D†VFW"“° –ÆöFW"ç6WEv—F„7&VFVçF–Ç2‚F†—2çv—F„7&VFVçF–Ç2“° –ÆöFW"æÆöB‚W&ÂÂgVæ7F–öâ‚FW‡B’°  –ÆWB§6öâÒçVÆÃ°  —G'’°  –§6öâÒ¥4ôâç'6R‚FW‡B“°  —Ò6F6‚‚W'&÷"’°  ––b‚öäW'&÷"ÓÒVæFVf–æVB’öäW'&÷"‚W'&÷"“°  –6öç6öÆRæW'&÷"‚uD…$TS¤ö&¦V7DÆöFW#¢6åÂwB'6Rr²W&Â²rârÂW'&÷"æÖW76vR“°  —&WGW&ã°  —Ð  –6öç7BÖWFFFÒ§6öâæÖWFFF°  ––b‚ÖWFFFÓÓÒVæFVf–æVBÇÂÖWFFFçG—RÓÓÒVæFVf–æVBÇÂÖWFFFçG—RçFôÆ÷vW$66R‚’ÓÓÒvvVöÖWG'’r’°  ––b‚öäW'&÷"ÓÒVæFVf–æVB’öäW'&÷"‚æWrW'&÷"‚uD…$TRäö&¦V7DÆöFW#¢6åÂwBÆöBr²W&Â’“°  –6öç6öÆRæW'&÷"‚uD…$TRäö&¦V7DÆöFW#¢6åÂwBÆöBr²W&Â“° —&WGW&ã°  —Ð  —66÷Rç'6R‚§6öâÂöäÆöB“°  —ÒÂöå&öw&W72ÂöäW'&÷"“°  —Ð  –7–æ2ÆöD7–æ2‚W&ÂÂöå&öw&W72’°  –6öç7B66÷RÒF†—3°  –6öç7BF‚Ò‚F†—2çF‚ÓÓÒrr’òÆöFW%WF–Ç2æW‡G&7EW&Ä&6R‚W&Â’¢F†—2çFƒ° —F†—2ç&W6÷W&6UF‚ÒF†—2ç&W6÷W&6UF‚ÇÂFƒ°  –6öç7BÆöFW"ÒæWrf–ÆTÆöFW"‚F†—2æÖævW"“° –ÆöFW"ç6WEF‚‚F†—2çF‚“° –ÆöFW"ç6WE&WVW7D†VFW"‚F†—2ç&WVW7D†VFW"“° –ÆöFW"ç6WEv—F„7&VFVçF–Ç2‚F†—2çv—F„7&VFVçF–Ç2“°  –6öç7BFW‡BÒv—BÆöFW"æÆöD7–æ2‚W&ÂÂöå&öw&W72“°  –6öç7B§6öâÒ¥4ôâç'6R‚FW‡B“°  –6öç7BÖWFFFÒ§6öâæÖWFFF°  ––b‚ÖWFFFÓÓÒVæFVf–æVBÇÂÖWFFFçG—RÓÓÒVæFVf–æVBÇÂÖWFFFçG—RçFôÆ÷vW$66R‚’ÓÓÒvvVöÖWG'’r’°  —F‡&÷ræWrW'&÷"‚uD…$TRäö&¦V7DÆöFW#¢6åÂwBÆöBr²W&Â“°  —Ð  —&WGW&âv—B66÷Rç'6T7–æ2‚§6öâ“°  —Ð  —'6R‚§6öâÂöäÆöB’°  –6öç7Bæ–ÖF–öç2ÒF†—2ç'6Tæ–ÖF–öç2‚§6öâææ–ÖF–öç2“° –6öç7B6†W2ÒF†—2ç'6U6†W2‚§6öâç6†W2“° –6öç7BvVöÖWG&–W2ÒF†—2ç'6TvVöÖWG&–W2‚§6öâævVöÖWG&–W2Â6†W2“°  –6öç7B–ÖvW2ÒF†—2ç'6T–ÖvW2‚§6öâæ–ÖvW2ÂgVæ7F–öâ‚’°  ––b‚öäÆöBÓÒVæFVf–æVB’öäÆöB‚ö&¦V7B“°  —Ò“°  –6öç7BFW‡GW&W2ÒF†—2ç'6UFW‡GW&W2‚§6öâçFW‡GW&W2Â–ÖvW2“° –6öç7BÖFW&–Ç2ÒF†—2ç'6TÖFW&–Ç2‚§6öâæÖFW&–Ç2ÂFW‡GW&W2“°  –6öç7Bö&¦V7BÒF†—2ç'6Tö&¦V7B‚§6öâæö&¦V7BÂvVöÖWG&–W2ÂÖFW&–Ç2ÂFW‡GW&W2Âæ–ÖF–öç2“° –6öç7B6¶VÆWFöç2ÒF†—2ç'6U6¶VÆWFöç2‚§6öâç6¶VÆWFöç2Âö&¦V7B“°  —F†—2æ&–æE6¶VÆWFöç2‚ö&¦V7BÂ6¶VÆWFöç2“°  ’òð  ––b‚öäÆöBÓÒVæFVf–æVB’°  –ÆWB†4–ÖvW2ÒfÇ6S°  –f÷"‚6öç7BWV–B–â–ÖvW2’°  ––b‚–ÖvW5²WV–BÒæFF–ç7Fæ6Vöb…DÔÄ–ÖvTVÆVÖVçB’°  –†4–ÖvW2ÒG'VS° –'&V³°  —Ð  —Ð  ––b‚†4–ÖvW2ÓÓÒfÇ6R’öäÆöB‚ö&¦V7B“°  —Ð  —&WGW&âö&¦V7C°  —Ð  –7–æ2'6T7–æ2‚§6öâ’°  –6öç7Bæ–ÖF–öç2ÒF†—2ç'6Tæ–ÖF–öç2‚§6öâææ–ÖF–öç2“° –6öç7B6†W2ÒF†—2ç'6U6†W2‚§6öâç6†W2“° –6öç7BvVöÖWG&–W2ÒF†—2ç'6TvVöÖWG&–W2‚§6öâævVöÖWG&–W2Â6†W2“°  –6öç7B–ÖvW2Òv—BF†—2ç'6T–ÖvW47–æ2‚§6öâæ–ÖvW2“°  –6öç7BFW‡GW&W2ÒF†—2ç'6UFW‡GW&W2‚§6öâçFW‡GW&W2Â–ÖvW2“° –6öç7BÖFW&–Ç2ÒF†—2ç'6TÖFW&–Ç2‚§6öâæÖFW&–Ç2ÂFW‡GW&W2“°  –6öç7Bö&¦V7BÒF†—2ç'6Tö&¦V7B‚§6öâæö&¦V7BÂvVöÖWG&–W2ÂÖFW&–Ç2ÂFW‡GW&W2Âæ–ÖF–öç2“° –6öç7B6¶VÆWFöç2ÒF†—2ç'6U6¶VÆWFöç2‚§6öâç6¶VÆWFöç2Âö&¦V7B“°  —F†—2æ&–æE6¶VÆWFöç2‚ö&¦V7BÂ6¶VÆWFöç2“°  —&WGW&âö&¦V7C°  —Ð  —'6U6†W2‚§6öâ’°  –6öç7B6†W2Ò·Ó°  ––b‚§6öâÓÒVæFVf–æVB’°  –f÷"‚ÆWB’ÒÂÂÒ§6öâæÆVæwFƒ²’ÂÃ²’²²’°  –6öç7B6†RÒæWr6†R‚’æg&öÔ¥4ôâ‚§6öå²’Ò“°  —6†W5²6†RçWV–BÒÒ6†S°  —Ð  —Ð  —&WGW&â6†W3°  —Ð  —'6U6¶VÆWFöç2‚§6öâÂö&¦V7B’°  –6öç7B6¶VÆWFöç2Ò·Ó° –6öç7B&öæW2Ò·Ó°  ’òòvVæW&FR&öæRÆöö·WF&ÆP  –ö&¦V7BçG&fW'6R‚gVæ7F–öâ‚6†–ÆB’°  ––b‚6†–ÆBæ—4&öæR’&öæW5²6†–ÆBçWV–BÒÒ6†–ÆC°  —Ò“°  ’òò7&VFR6¶VÆWFöç0  ––b‚§6öâÓÒVæFVf–æVB’°  –f÷"‚ÆWB’ÒÂÂÒ§6öâæÆVæwFƒ²’ÂÃ²’²²’°  –6öç7B6¶VÆWFöâÒæWr6¶VÆWFöâ‚’æg&öÔ¥4ôâ‚§6öå²’ÒÂ&öæW2“°  —6¶VÆWFöç5²6¶VÆWFöâçWV–BÒÒ6¶VÆWFöã°  —Ð  —Ð  —&WGW&â6¶VÆWFöç3°  —Ð  —'6TvVöÖWG&–W2‚§6öâÂ6†W2’°  –6öç7BvVöÖWG&–W2Ò·Ó°  ––b‚§6öâÓÒVæFVf–æVB’°  –6öç7B'VffW$vVöÖWG'”ÆöFW"ÒæWr'VffW$vVöÖWG'”ÆöFW"‚“°  –f÷"‚ÆWB’ÒÂÂÒ§6öâæÆVæwFƒ²’ÂÃ²’²²’°  –ÆWBvVöÖWG'“° –6öç7BFFÒ§6öå²’Ó°  —7v—F6‚‚FFçG—R’°  –66Rt'VffW$vVöÖWG'’s  –66Rt–ç7Fæ6VD'VffW$vVöÖWG'’s   –vVöÖWG'’Ò'VffW$vVöÖWG'”ÆöFW"ç'6R‚FF“° –'&V³°  –FVfVÇC   ––b‚FFçG—R–âvVöÖWG&–W2’°  –vVöÖWG'’ÒvVöÖWG&–W5²FFçG—RÒæg&öÔ¥4ôâ‚FFÂ6†W2“°  —ÒVÇ6R°  –6öç6öÆRçv&â‚D…$TRäö&¦V7DÆöFW#¢Vç7W÷'FVBvVöÖWG'’G—R"G²FFçG—RÒ&“°  —Ð  —Ð  –vVöÖWG'’çWV–BÒFFçWV–C°  ––b‚FFææÖRÓÒVæFVf–æVB’vVöÖWG'’ææÖRÒFFææÖS° ––b‚FFçW6W$FFÓÒVæFVf–æVB’vVöÖWG'’çW6W$FFÒFFçW6W$FF°  –vVöÖWG&–W5²FFçWV–BÒÒvVöÖWG'“°  —Ð  —Ð  —&WGW&âvVöÖWG&–W3°  —Ð  —'6TÖFW&–Ç2‚§6öâÂFW‡GW&W2’°  –6öç7B66†RÒ·Ó²òò×VÇF”ÖFW&–À –6öç7BÖFW&–Ç2Ò·Ó°  ––b‚§6öâÓÒVæFVf–æVB’°  –6öç7BÆöFW"ÒæWrÖFW&–ÄÆöFW"‚“° –ÆöFW"ç6WEFW‡GW&W2‚FW‡GW&W2“°  –f÷"‚ÆWB’ÒÂÂÒ§6öâæÆVæwFƒ²’ÂÃ²’²²’°  –6öç7BFFÒ§6öå²’Ó°  ––b‚66†U²FFçWV–BÒÓÓÒVæFVf–æVB’°  –66†U²FFçWV–BÒÒÆöFW"ç'6R‚FF“°  —Ð  –ÖFW&–Ç5²FFçWV–BÒÒ66†U²FFçWV–BÓ°  —Ð  —Ð  —&WGW&âÖFW&–Ç3°  —Ð  —'6Tæ–ÖF–öç2‚§6öâ’°  –6öç7Bæ–ÖF–öç2Ò·Ó°  ––b‚§6öâÓÒVæFVf–æVB’°  –f÷"‚ÆWB’Ò²’Â§6öâæÆVæwFƒ²’²²’°  –6öç7BFFÒ§6öå²’Ó°  –6öç7B6Æ—Òæ–ÖF–öä6Æ—ç'6R‚FF“°  –æ–ÖF–öç5²6Æ—çWV–BÒÒ6Æ—°  —Ð  —Ð  —&WGW&âæ–ÖF–öç3°  —Ð  —'6T–ÖvW2‚§6öâÂöäÆöB’°  –6öç7B66÷RÒF†—3° –6öç7B–ÖvW2Ò·Ó°  –ÆWBÆöFW#°  –gVæ7F–öâÆöD–ÖvR‚W&Â’°  —66÷RæÖævW"æ—FVÕ7F'B‚W&Â“°  —&WGW&âÆöFW"æÆöB‚W&ÂÂgVæ7F–öâ‚’°  —66÷RæÖævW"æ—FVÔVæB‚W&Â“°  —ÒÂVæFVf–æVBÂgVæ7F–öâ‚’°  —66÷RæÖævW"æ—FVÔW'&÷"‚W&Â“° —66÷RæÖævW"æ—FVÔVæB‚W&Â“°  —Ò“°  —Ð  –gVæ7F–öâFW6W&–Æ—¦T–ÖvR‚–ÖvR’°  ––b‚G—Vöb–ÖvRÓÓÒw7G&–ærr’°  –6öç7BW&ÂÒ–ÖvS°  –6öç7BF‚Òõâ…ÂõÂò—Â…¶×¥Ò³¢…ÂõÂò“ò’ö’çFW7B‚W&Â’òW&Â¢66÷Rç&W6÷W&6UF‚²W&Ã°  —&WGW&âÆöD–ÖvR‚F‚“°  —ÒVÇ6R°  ––b‚–ÖvRæFF’°  —&WGW&â° –FF¢vWEG—VD'&’‚–ÖvRçG—RÂ–ÖvRæFF’À —v–GFƒ¢–ÖvRçv–GF‚À –†V–v‡C¢–ÖvRæ†V–v‡@ —Ó°  —ÒVÇ6R°  —&WGW&âçVÆÃ°  —Ð  —Ð  —Ð  ––b‚§6öâÓÒVæFVf–æVBbb§6öâæÆVæwF‚â’°  –6öç7BÖævW"ÒæWrÆöF–ætÖævW"‚öäÆöB“°  –ÆöFW"ÒæWr–ÖvTÆöFW"‚ÖævW"“° –ÆöFW"ç6WD7&÷74÷&–v–â‚F†—2æ7&÷74÷&–v–â“°  –f÷"‚ÆWB’ÒÂ–ÂÒ§6öâæÆVæwFƒ²’Â–Ã²’²²’°  –6öç7B–ÖvRÒ§6öå²’Ó° –6öç7BW&ÂÒ–ÖvRçW&Ã°  ––b‚'&’æ—4'&’‚W&Â’’°  ’òòÆöB'&’öb–ÖvW2Rær7V&UFW‡GW&P  –6öç7B–ÖvT'&’ÒµÓ°  –f÷"‚ÆWB¢ÒÂ¦ÂÒW&ÂæÆVæwFƒ²¢Â¦Ã²¢²²’°  –6öç7B7W'&VçEW&ÂÒW&Å²¢Ó°  –6öç7BFW6W&–Æ—¦VD–ÖvRÒFW6W&–Æ—¦T–ÖvR‚7W'&VçEW&Â“°  ––b‚FW6W&–Æ—¦VD–ÖvRÓÒçVÆÂ’°  ––b‚FW6W&–Æ—¦VD–ÖvR–ç7Fæ6Vöb…DÔÄ–ÖvTVÆVÖVçB’°  ––ÖvT'&’çW6‚‚FW6W&–Æ—¦VD–ÖvR“°  —ÒVÇ6R°  ’òò7V6–Â66S¢†æFÆR'&’öbFFFW‡GW&W2f÷"7V&RFW‡GW&W0  ––ÖvT'&’çW6‚‚æWrFFFW‡GW&R‚FW6W&–Æ—¦VD–ÖvRæFFÂFW6W&–Æ—¦VD–ÖvRçv–GF‚ÂFW6W&–Æ—¦VD–ÖvRæ†V–v‡B’“°  —Ð  —Ð  —Ð  ––ÖvW5²–ÖvRçWV–BÒÒæWr6÷W&6R‚–ÖvT'&’“°  —ÒVÇ6R°  ’òòÆöB6–ævÆR–ÖvP  –6öç7BFW6W&–Æ—¦VD–ÖvRÒFW6W&–Æ—¦T–ÖvR‚–ÖvRçW&Â“° ––ÖvW5²–ÖvRçWV–BÒÒæWr6÷W&6R‚FW6W&–Æ—¦VD–ÖvR“°   —Ð  —Ð  —Ð  —&WGW&â–ÖvW3°  —Ð  –7–æ2'6T–ÖvW47–æ2‚§6öâ’°  –6öç7B66÷RÒF†—3° –6öç7B–ÖvW2Ò·Ó°  –ÆWBÆöFW#°  –7–æ2gVæ7F–öâFW6W&–Æ—¦T–ÖvR‚–ÖvR’°  ––b‚G—Vöb–ÖvRÓÓÒw7G&–ærr’°  –6öç7BW&ÂÒ–ÖvS°  –6öç7BF‚Òõâ…ÂõÂò—Â…¶×¥Ò³¢…ÂõÂò“ò’ö’çFW7B‚W&Â’òW&Â¢66÷Rç&W6÷W&6UF‚²W&Ã°  —&WGW&âv—BÆöFW"æÆöD7–æ2‚F‚“°  —ÒVÇ6R°  ––b‚–ÖvRæFF’°  —&WGW&â° –FF¢vWEG—VD'&’‚–ÖvRçG—RÂ–ÖvRæFF’À —v–GFƒ¢–ÖvRçv–GF‚À –†V–v‡C¢–ÖvRæ†V–v‡@ —Ó°  —ÒVÇ6R°  —&WGW&âçVÆÃ°  —Ð  —Ð  —Ð  ––b‚§6öâÓÒVæFVf–æVBbb§6öâæÆVæwF‚â’°  –ÆöFW"ÒæWr–ÖvTÆöFW"‚F†—2æÖævW"“° –ÆöFW"ç6WD7&÷74÷&–v–â‚F†—2æ7&÷74÷&–v–â“°  –f÷"‚ÆWB’ÒÂ–ÂÒ§6öâæÆVæwFƒ²’Â–Ã²’²²’°  –6öç7B–ÖvRÒ§6öå²’Ó° –6öç7BW&ÂÒ–ÖvRçW&Ã°  ––b‚'&’æ—4'&’‚W&Â’’°  ’òòÆöB'&’öb–ÖvW2Rær7V&UFW‡GW&P  –6öç7B–ÖvT'&’ÒµÓ°  –f÷"‚ÆWB¢ÒÂ¦ÂÒW&ÂæÆVæwFƒ²¢Â¦Ã²¢²²’°  –6öç7B7W'&VçEW&ÂÒW&Å²¢Ó°  –6öç7BFW6W&–Æ—¦VD–ÖvRÒv—BFW6W&–Æ—¦T–ÖvR‚7W'&VçEW&Â“°  ––b‚FW6W&–Æ—¦VD–ÖvRÓÒçVÆÂ’°  ––b‚FW6W&–Æ—¦VD–ÖvR–ç7Fæ6Vöb…DÔÄ–ÖvTVÆVÖVçB’°  ––ÖvT'&’çW6‚‚FW6W&–Æ—¦VD–ÖvR“°  —ÒVÇ6R°  ’òò7V6–Â66S¢†æFÆR'&’öbFFFW‡GW&W2f÷"7V&RFW‡GW&W0  ––ÖvT'&’çW6‚‚æWrFFFW‡GW&R‚FW6W&–Æ—¦VD–ÖvRæFFÂFW6W&–Æ—¦VD–ÖvRçv–GF‚ÂFW6W&–Æ—¦VD–ÖvRæ†V–v‡B’“°  —Ð  —Ð  —Ð  ––ÖvW5²–ÖvRçWV–BÒÒæWr6÷W&6R‚–ÖvT'&’“°  —ÒVÇ6R°  ’òòÆöB6–ævÆR–ÖvP  –6öç7BFW6W&–Æ—¦VD–ÖvRÒv—BFW6W&–Æ—¦T–ÖvR‚–ÖvRçW&Â“° ––ÖvW5²–ÖvRçWV–BÒÒæWr6÷W&6R‚FW6W&–Æ—¦VD–ÖvR“°  —Ð  —Ð  —Ð  —&WGW&â–ÖvW3°  —Ð  —'6UFW‡GW&W2‚§6öâÂ–ÖvW2’°  –gVæ7F–öâ'6T6öç7FçB‚fÇVRÂG—R’°  ––b‚G—VöbfÇVRÓÓÒvçVÖ&W"r’&WGW&âfÇVS°  –6öç6öÆRçv&â‚uD…$TRäö&¦V7DÆöFW"ç'6UFW‡GW&S¢6öç7FçB6†÷VÆB&R–âçVÖW&–2f÷&ÒârÂfÇVR“°  —&WGW&âG—U²fÇVRÓ°  —Ð  –6öç7BFW‡GW&W2Ò·Ó°  ––b‚§6öâÓÒVæFVf–æVB’°  –f÷"‚ÆWB’ÒÂÂÒ§6öâæÆVæwFƒ²’ÂÃ²’²²’°  –6öç7BFFÒ§6öå²’Ó°  ––b‚FFæ–ÖvRÓÓÒVæFVf–æVB’°  –6öç6öÆRçv&â‚uD…$TRäö&¦V7DÆöFW#¢æò&–ÖvR"7V6–f–VBf÷"rÂFFçWV–B“°  —Ð  ––b‚–ÖvW5²FFæ–ÖvRÒÓÓÒVæFVf–æVB’°  –6öç6öÆRçv&â‚uD…$TRäö&¦V7DÆöFW#¢VæFVf–æVB–ÖvRrÂFFæ–ÖvR“°  —Ð  –6öç7B6÷W&6RÒ–ÖvW5²FFæ–ÖvRÓ° –6öç7B–ÖvRÒ6÷W&6RæFF°  –ÆWBFW‡GW&S°  ––b‚'&’æ—4'&’‚–ÖvR’’°  —FW‡GW&RÒæWr7V&UFW‡GW&R‚“°  ––b‚–ÖvRæÆVæwF‚ÓÓÒb’FW‡GW&RææVVG5WFFRÒG'VS°  —ÒVÇ6R°  ––b‚–ÖvRbb–ÖvRæFF’°  —FW‡GW&RÒæWrFFFW‡GW&R‚“°  —ÒVÇ6R°  —FW‡GW&RÒæWrFW‡GW&R‚“°  —Ð  ––b‚–ÖvR’FW‡GW&RææVVG5WFFRÒG'VS²òòFW‡GW&W26â†fRVæFVf–æVB–ÖvRFF  —Ð  —FW‡GW&Rç6÷W&6RÒ6÷W&6S°  —FW‡GW&RçWV–BÒFFçWV–C°  ––b‚FFææÖRÓÒVæFVf–æVB’FW‡GW&RææÖRÒFFææÖS°  ––b‚FFæÖ–ærÓÒVæFVf–æVB’FW‡GW&RæÖ–ærÒ'6T6öç7FçB‚FFæÖ–ærÂDU…EU$UôÔ”är“° ––b‚FFæ6†ææVÂÓÒVæFVf–æVB’FW‡GW&Ræ6†ææVÂÒFFæ6†ææVÃ°  ––b‚FFæöfg6WBÓÒVæFVf–æVB’FW‡GW&Ræöfg6WBæg&öÔ'&’‚FFæöfg6WB“° ––b‚FFç&WVBÓÒVæFVf–æVB’FW‡GW&Rç&WVBæg&öÔ'&’‚FFç&WVB“° ––b‚FFæ6VçFW"ÓÒVæFVf–æVB’FW‡GW&Ræ6VçFW"æg&öÔ'&’‚FFæ6VçFW"“° ––b‚FFç&÷FF–öâÓÒVæFVf–æVB’FW‡GW&Rç&÷FF–öâÒFFç&÷FF–öã°  ––b‚FFçw&ÓÒVæFVf–æVB’°  —FW‡GW&Rçw&2Ò'6T6öç7FçB‚FFçw&²ÒÂDU…EU$Uõu$”är“° —FW‡GW&Rçw&BÒ'6T6öç7FçB‚FFçw&²ÒÂDU…EU$Uõu$”är“°  —Ð  ––b‚FFæf÷&ÖBÓÒVæFVf–æVB’FW‡GW&Ræf÷&ÖBÒFFæf÷&ÖC° ––b‚FFæ–çFW&æÄf÷&ÖBÓÒVæFVf–æVB’FW‡GW&Ræ–çFW&æÄf÷&ÖBÒFFæ–çFW&æÄf÷&ÖC° ––b‚FFçG—RÓÒVæFVf–æVB’FW‡GW&RçG—RÒFFçG—S° ––b‚FFæ6öÆ÷%76RÓÒVæFVf–æVB’FW‡GW&Ræ6öÆ÷%76RÒFFæ6öÆ÷%76S°  ––b‚FFæÖ–äf–ÇFW"ÓÒVæFVf–æVB’FW‡GW&RæÖ–äf–ÇFW"Ò'6T6öç7FçB‚FFæÖ–äf–ÇFW"ÂDU…EU$Uôd”ÅDU"“° ––b‚FFæÖtf–ÇFW"ÓÒVæFVf–æVB’FW‡GW&RæÖtf–ÇFW"Ò'6T6öç7FçB‚FFæÖtf–ÇFW"ÂDU…EU$Uôd”ÅDU"“° ––b‚FFææ—6÷G&÷’ÓÒVæFVf–æVB’FW‡GW&Rææ—6÷G&÷’ÒFFææ—6÷G&÷“°  ––b‚FFæfÆ—’ÓÒVæFVf–æVB’FW‡GW&RæfÆ—’ÒFFæfÆ—“°  ––b‚FFævVæW&FTÖ—Ö2ÓÒVæFVf–æVB’FW‡GW&RævVæW&FTÖ—Ö2ÒFFævVæW&FTÖ—Ö3° ––b‚FFç&V×VÇF—Ç”Ç†ÓÒVæFVf–æVB’FW‡GW&Rç&V×VÇF—Ç”Ç†ÒFFç&V×VÇF—Ç”Ç†° ––b‚FFçVç6´Æ–væÖVçBÓÒVæFVf–æVB’FW‡GW&RçVç6´Æ–væÖVçBÒFFçVç6´Æ–væÖVçC° ––b‚FFæ6ö×&TgVæ7F–öâÓÒVæFVf–æVB’FW‡GW&Ræ6ö×&TgVæ7F–öâÒFFæ6ö×&TgVæ7F–öã°  ––b‚FFçW6W$FFÓÒVæFVf–æVB’FW‡GW&RçW6W$FFÒFFçW6W$FF°  —FW‡GW&W5²FFçWV–BÒÒFW‡GW&S°  —Ð  —Ð  —&WGW&âFW‡GW&W3°  —Ð  —'6Tö&¦V7B‚FFÂvVöÖWG&–W2ÂÖFW&–Ç2ÂFW‡GW&W2Âæ–ÖF–öç2’°  –ÆWBö&¦V7C°  –gVæ7F–öâvWDvVöÖWG'’‚æÖR’°  ––b‚vVöÖWG&–W5²æÖRÒÓÓÒVæFVf–æVB’°  –6öç6öÆRçv&â‚uD…$TRäö&¦V7DÆöFW#¢VæFVf–æVBvVöÖWG'’rÂæÖR“°  —Ð  —&WGW&âvVöÖWG&–W5²æÖRÓ°  —Ð  –gVæ7F–öâvWDÖFW&–Â‚æÖR’°  ––b‚æÖRÓÓÒVæFVf–æVB’&WGW&âVæFVf–æVC°  ––b‚'&’æ—4'&’‚æÖR’’°  –6öç7B'&’ÒµÓ°  –f÷"‚ÆWB’ÒÂÂÒæÖRæÆVæwFƒ²’ÂÃ²’²²’°  –6öç7BWV–BÒæÖU²’Ó°  ––b‚ÖFW&–Ç5²WV–BÒÓÓÒVæFVf–æVB’°  –6öç6öÆRçv&â‚uD…$TRäö&¦V7DÆöFW#¢VæFVf–æVBÖFW&–ÂrÂWV–B“°  —Ð  –'&’çW6‚‚ÖFW&–Ç5²WV–BÒ“°  —Ð  —&WGW&â'&“°  —Ð  ––b‚ÖFW&–Ç5²æÖRÒÓÓÒVæFVf–æVB’°  –6öç6öÆRçv&â‚uD…$TRäö&¦V7DÆöFW#¢VæFVf–æVBÖFW&–ÂrÂæÖR“°  —Ð  —&WGW&âÖFW&–Ç5²æÖRÓ°  —Ð  –gVæ7F–öâvWEFW‡GW&R‚WV–B’°  ––b‚FW‡GW&W5²WV–BÒÓÓÒVæFVf–æVB’°  –6öç6öÆRçv&â‚uD…$TRäö&¦V7DÆöFW#¢VæFVf–æVBFW‡GW&RrÂWV–B“°  —Ð  —&WGW&âFW‡GW&W5²WV–BÓ°  —Ð  –ÆWBvVöÖWG'’ÂÖFW&–Ã°  —7v—F6‚‚FFçG—R’°  –66Ru66VæRs   –ö&¦V7BÒæWr66VæR‚“°  ––b‚FFæ&6¶w&÷VæBÓÒVæFVf–æVB’°  ––b‚çVÖ&W"æ—4–çFVvW"‚FFæ&6¶w&÷VæB’’°  –ö&¦V7Bæ&6¶w&÷VæBÒæWr6öÆ÷"‚FFæ&6¶w&÷VæB“°  —ÒVÇ6R°  –ö&¦V7Bæ&6¶w&÷VæBÒvWEFW‡GW&R‚FFæ&6¶w&÷VæB“°  —Ð  —Ð  ––b‚FFæVçf—&öæÖVçBÓÒVæFVf–æVB’°  –ö&¦V7BæVçf—&öæÖVçBÒvWEFW‡GW&R‚FFæVçf—&öæÖVçB“°  —Ð  ––b‚FFæförÓÒVæFVf–æVB’°  ––b‚FFæförçG—RÓÓÒtförr’°  –ö&¦V7BæförÒæWrför‚FFæföræ6öÆ÷"ÂFFæförææV"ÂFFæföræf"“°  —ÒVÇ6R–b‚FFæförçG—RÓÓÒtfötW‡"r’°  –ö&¦V7BæförÒæWrfötW‡"‚FFæföræ6öÆ÷"ÂFFæföræFVç6—G’“°  —Ð  ––b‚FFæförææÖRÓÒrr’°  –ö&¦V7BæförææÖRÒFFæförææÖS°  —Ð  —Ð  ––b‚FFæ&6¶w&÷VæD&ÇW'&–æW72ÓÒVæFVf–æVB’ö&¦V7Bæ&6¶w&÷VæD&ÇW'&–æW72ÒFFæ&6¶w&÷VæD&ÇW'&–æW73° ––b‚FFæ&6¶w&÷VæD–çFVç6—G’ÓÒVæFVf–æVB’ö&¦V7Bæ&6¶w&÷VæD–çFVç6—G’ÒFFæ&6¶w&÷VæD–çFVç6—G“° ––b‚FFæ&6¶w&÷VæE&÷FF–öâÓÒVæFVf–æVB’ö&¦V7Bæ&6¶w&÷VæE&÷FF–öâæg&öÔ'&’‚FFæ&6¶w&÷VæE&÷FF–öâ“°  ––b‚FFæVçf—&öæÖVçD–çFVç6—G’ÓÒVæFVf–æVB’ö&¦V7BæVçf—&öæÖVçD–çFVç6—G’ÒFFæVçf—&öæÖVçD–çFVç6—G“° ––b‚FFæVçf—&öæÖVçE&÷FF–öâÓÒVæFVf–æVB’ö&¦V7BæVçf—&öæÖVçE&÷FF–öâæg&öÔ'&’‚FFæVçf—&öæÖVçE&÷FF–öâ“°  –'&V³°  –66RuW'7V7F—fT6ÖW&s   –ö&¦V7BÒæWrW'7V7F—fT6ÖW&‚FFæf÷bÂFFæ7V7BÂFFææV"ÂFFæf"“°  ––b‚FFæfö7W2ÓÒVæFVf–æVB’ö&¦V7Bæfö7W2ÒFFæfö7W3° ––b‚FFç¦ööÒÓÒVæFVf–æVB’ö&¦V7Bç¦ööÒÒFFç¦ööÓ° ––b‚FFæf–ÆÔvVvRÓÒVæFVf–æVB’ö&¦V7Bæf–ÆÔvVvRÒFFæf–ÆÔvVvS° ––b‚FFæf–ÆÔöfg6WBÓÒVæFVf–æVB’ö&¦V7Bæf–ÆÔöfg6WBÒFFæf–ÆÔöfg6WC° ––b‚FFçf–WrÓÒVæFVf–æVB’ö&¦V7Bçf–WrÒö&¦V7Bæ76–vâ‚·ÒÂFFçf–Wr“°  –'&V³°  –66Rt÷'F†öw&†–46ÖW&s   –ö&¦V7BÒæWr÷'F†öw&†–46ÖW&‚FFæÆVgBÂFFç&–v‡BÂFFçF÷ÂFFæ&÷GFöÒÂFFææV"ÂFFæf"“°  ––b‚FFç¦ööÒÓÒVæFVf–æVB’ö&¦V7Bç¦ööÒÒFFç¦ööÓ° ––b‚FFçf–WrÓÒVæFVf–æVB’ö&¦V7Bçf–WrÒö&¦V7Bæ76–vâ‚·ÒÂFFçf–Wr“°  –'&V³°  –66RtÖ&–VçDÆ–v‡Bs   –ö&¦V7BÒæWrÖ&–VçDÆ–v‡B‚FFæ6öÆ÷"ÂFFæ–çFVç6—G’“°  –'&V³°  –66RtF—&V7F–öæÄÆ–v‡Bs   –ö&¦V7BÒæWrF—&V7F–öæÄÆ–v‡B‚FFæ6öÆ÷"ÂFFæ–çFVç6—G’“°  –'&V³°  –66Ruö–çDÆ–v‡Bs   –ö&¦V7BÒæWrö–çDÆ–v‡B‚FFæ6öÆ÷"ÂFFæ–çFVç6—G’ÂFFæF—7Fæ6RÂFFæFV6’“°  –'&V³°  –66Ru&V7D&VÆ–v‡Bs   –ö&¦V7BÒæWr&V7D&VÆ–v‡B‚FFæ6öÆ÷"ÂFFæ–çFVç6—G’ÂFFçv–GF‚ÂFFæ†V–v‡B“°  –'&V³°  –66Ru7÷DÆ–v‡Bs   –ö&¦V7BÒæWr7÷DÆ–v‡B‚FFæ6öÆ÷"ÂFFæ–çFVç6—G’ÂFFæF—7Fæ6RÂFFæævÆRÂFFçVçVÖ'&ÂFFæFV6’“°  –'&V³°  –66Rt†VÖ—7†W&TÆ–v‡Bs   –ö&¦V7BÒæWr†VÖ—7†W&TÆ–v‡B‚FFæ6öÆ÷"ÂFFæw&÷VæD6öÆ÷"ÂFFæ–çFVç6—G’“°  –'&V³°  –66RtÆ–v‡E&ö&Rs   –ö&¦V7BÒæWrÆ–v‡E&ö&R‚’æg&öÔ¥4ôâ‚FF“°  –'&V³°  –66Ru6¶–ææVDÖW6‚s   –vVöÖWG'’ÒvWDvVöÖWG'’‚FFævVöÖWG'’“° ’ –ÖFW&–ÂÒvWDÖFW&–Â‚FFæÖFW&–Â“°  –ö&¦V7BÒæWr6¶–ææVDÖW6‚‚vVöÖWG'’ÂÖFW&–Â“°  ––b‚FFæ&–æDÖöFRÓÒVæFVf–æVB’ö&¦V7Bæ&–æDÖöFRÒFFæ&–æDÖöFS° ––b‚FFæ&–æDÖG&—‚ÓÒVæFVf–æVB’ö&¦V7Bæ&–æDÖG&—‚æg&öÔ'&’‚FFæ&–æDÖG&—‚“° ––b‚FFç6¶VÆWFöâÓÒVæFVf–æVB’ö&¦V7Bç6¶VÆWFöâÒFFç6¶VÆWFöã°  –'&V³°  –66RtÖW6‚s   –vVöÖWG'’ÒvWDvVöÖWG'’‚FFævVöÖWG'’“° –ÖFW&–ÂÒvWDÖFW&–Â‚FFæÖFW&–Â“°  –ö&¦V7BÒæWrÖW6‚‚vVöÖWG'’ÂÖFW&–Â“°  –'&V³°  –66Rt–ç7Fæ6VDÖW6‚s   –vVöÖWG'’ÒvWDvVöÖWG'’‚FFævVöÖWG'’“° –ÖFW&–ÂÒvWDÖFW&–Â‚FFæÖFW&–Â“° –6öç7B6÷VçBÒFFæ6÷VçC° –6öç7B–ç7Fæ6TÖG&—‚ÒFFæ–ç7Fæ6TÖG&—ƒ° –6öç7B–ç7Fæ6T6öÆ÷"ÒFFæ–ç7Fæ6T6öÆ÷#°  –ö&¦V7BÒæWr–ç7Fæ6VDÖW6‚‚vVöÖWG'’ÂÖFW&–ÂÂ6÷VçB“° –ö&¦V7Bæ–ç7Fæ6TÖG&—‚ÒæWr–ç7Fæ6VD'VffW$GG&–'WFR‚æWrfÆöC3$'&’‚–ç7Fæ6TÖG&—‚æ'&’’Âb“° ––b‚–ç7Fæ6T6öÆ÷"ÓÒVæFVf–æVB’ö&¦V7Bæ–ç7Fæ6T6öÆ÷"ÒæWr–ç7Fæ6VD'VffW$GG&–'WFR‚æWrfÆöC3$'&’‚–ç7Fæ6T6öÆ÷"æ'&’’Â–ç7Fæ6T6öÆ÷"æ—FVÕ6—¦R“°  –'&V³°  –66Rt&F6†VDÖW6‚s   –vVöÖWG'’ÒvWDvVöÖWG'’‚FFævVöÖWG'’“° –ÖFW&–ÂÒvWDÖFW&–Â‚FFæÖFW&–Â“°  –ö&¦V7BÒæWr&F6†VDÖW6‚‚FFæÖ„vVöÖWG'”6÷VçBÂFFæÖ…fW'FW„6÷VçBÂFFæÖ„–æFW„6÷VçBÂÖFW&–Â“° –ö&¦V7BævVöÖWG'’ÒvVöÖWG'“° –ö&¦V7BçW$ö&¦V7Dg'W7GVÔ7VÆÆVBÒFFçW$ö&¦V7Dg'W7GVÔ7VÆÆVC° –ö&¦V7Bç6÷'Dö&¦V7G2ÒFFç6÷'Dö&¦V7G3°  –ö&¦V7BåöG&u&ævW2ÒFFæG&u&ævW3° –ö&¦V7Bå÷&W6W'fVE&ævW2ÒFFç&W6W'fVE&ævW3°  –ö&¦V7Bå÷f—6–&–Æ—G’ÒFFçf—6–&–Æ—G“° –ö&¦V7Båö7F—fRÒFFæ7F—fS° –ö&¦V7Båö&÷VæG2ÒFFæ&÷VæG2æÖ‚&÷VæBÓâ°  –6öç7B&÷‚ÒæWr&÷ƒ2‚“° –&÷‚æÖ–âæg&öÔ'&’‚&÷VæBæ&÷„Ö–â“° –&÷‚æÖ‚æg&öÔ'&’‚&÷VæBæ&÷„Ö‚“°  –6öç7B7†W&RÒæWr7†W&R‚“° —7†W&Rç&F—W2Ò&÷VæBç7†W&U&F—W3° —7†W&Ræ6VçFW"æg&öÔ'&’‚&÷VæBç7†W&T6VçFW"“°  —&WGW&â° –&÷„–æ—F–Æ—¦VC¢&÷VæBæ&÷„–æ—F–Æ—¦VBÀ –&÷ƒ¢&÷‚À  —7†W&T–æ—F–Æ—¦VC¢&÷VæBç7†W&T–æ—F–Æ—¦VBÀ —7†W&S¢7†W&P —Ó°  —Ò“°  –ö&¦V7BåöÖ„vVöÖWG'”6÷VçBÒFFæÖ„vVöÖWG'”6÷VçC° –ö&¦V7BåöÖ…fW'FW„6÷VçBÒFFæÖ…fW'FW„6÷VçC° –ö&¦V7BåöÖ„–æFW„6÷VçBÒFFæÖ„–æFW„6÷VçC°  –ö&¦V7BåövVöÖWG'”–æ—F–Æ—¦VBÒFFævVöÖWG'”–æ—F–Æ—¦VC° –ö&¦V7BåövVöÖWG'”6÷VçBÒFFævVöÖWG'”6÷VçC°  –ö&¦V7BåöÖG&–6W5FW‡GW&RÒvWEFW‡GW&R‚FFæÖG&–6W5FW‡GW&RçWV–B“° ––b‚FFæ6öÆ÷'5FW‡GW&RÓÒVæFVf–æVB’ö&¦V7Båö6öÆ÷'5FW‡GW&RÒvWEFW‡GW&R‚FFæ6öÆ÷'5FW‡GW&RçWV–B“°  –'&V³°  –66RtÄôBs   –ö&¦V7BÒæWrÄôB‚“°  –'&V³°  –66RtÆ–æRs   –ö&¦V7BÒæWrÆ–æR‚vWDvVöÖWG'’‚FFævVöÖWG'’’ÂvWDÖFW&–Â‚FFæÖFW&–Â’“°  –'&V³°  –66RtÆ–æTÆö÷s   –ö&¦V7BÒæWrÆ–æTÆö÷‚vWDvVöÖWG'’‚FFævVöÖWG'’’ÂvWDÖFW&–Â‚FFæÖFW&–Â’“°  –'&V³°  –66RtÆ–æU6VvÖVçG2s   –ö&¦V7BÒæWrÆ–æU6VvÖVçG2‚vWDvVöÖWG'’‚FFævVöÖWG'’’ÂvWDÖFW&–Â‚FFæÖFW&–Â’“°  –'&V³°  –66Ruö–çD6Æ÷VBs  –66Ruö–çG2s   –ö&¦V7BÒæWrö–çG2‚vWDvVöÖWG'’‚FFævVöÖWG'’’ÂvWDÖFW&–Â‚FFæÖFW&–Â’“°  –'&V³°  –66Ru7&—FRs   –ö&¦V7BÒæWr7&—FR‚vWDÖFW&–Â‚FFæÖFW&–Â’“°  –'&V³°  –66Rtw&÷Ws   –ö&¦V7BÒæWrw&÷W‚“°  –'&V³°  –66Rt&öæRs   –ö&¦V7BÒæWr&öæR‚“°  –'&V³°  –FVfVÇC   –ö&¦V7BÒæWrö&¦V7C4B‚“°  —Ð  –ö&¦V7BçWV–BÒFFçWV–C°  ––b‚FFææÖRÓÒVæFVf–æVB’ö&¦V7BææÖRÒFFææÖS°  ––b‚FFæÖG&—‚ÓÒVæFVf–æVB’°  –ö&¦V7BæÖG&—‚æg&öÔ'&’‚FFæÖG&—‚“°  ––b‚FFæÖG&—„WFõWFFRÓÒVæFVf–æVB’ö&¦V7BæÖG&—„WFõWFFRÒFFæÖG&—„WFõWFFS° ––b‚ö&¦V7BæÖG&—„WFõWFFR’ö&¦V7BæÖG&—‚æFV6ö×÷6R‚ö&¦V7Bç÷6—F–öâÂö&¦V7BçVFW&æ–öâÂö&¦V7Bç66ÆR“°  —ÒVÇ6R°  ––b‚FFç÷6—F–öâÓÒVæFVf–æVB’ö&¦V7Bç÷6—F–öâæg&öÔ'&’‚FFç÷6—F–öâ“° ––b‚FFç&÷FF–öâÓÒVæFVf–æVB’ö&¦V7Bç&÷FF–öâæg&öÔ'&’‚FFç&÷FF–öâ“° ––b‚FFçVFW&æ–öâÓÒVæFVf–æVB’ö&¦V7BçVFW&æ–öâæg&öÔ'&’‚FFçVFW&æ–öâ“° ––b‚FFç66ÆRÓÒVæFVf–æVB’ö&¦V7Bç66ÆRæg&öÔ'&’‚FFç66ÆR“°  —Ð  ––b‚FFçWÓÒVæFVf–æVB’ö&¦V7BçWæg&öÔ'&’‚FFçW“°  ––b‚FFæ67E6†F÷rÓÒVæFVf–æVB’ö&¦V7Bæ67E6†F÷rÒFFæ67E6†F÷s° ––b‚FFç&V6V—fU6†F÷rÓÒVæFVf–æVB’ö&¦V7Bç&V6V—fU6†F÷rÒFFç&V6V—fU6†F÷s°  ––b‚FFç6†F÷r’°  ––b‚FFç6†F÷ræ&–2ÓÒVæFVf–æVB’ö&¦V7Bç6†F÷ræ&–2ÒFFç6†F÷ræ&–3° ––b‚FFç6†F÷rææ÷&ÖÄ&–2ÓÒVæFVf–æVB’ö&¦V7Bç6†F÷rææ÷&ÖÄ&–2ÒFFç6†F÷rææ÷&ÖÄ&–3° ––b‚FFç6†F÷rç&F—W2ÓÒVæFVf–æVB’ö&¦V7Bç6†F÷rç&F—W2ÒFFç6†F÷rç&F—W3° ––b‚FFç6†F÷ræÖ6—¦RÓÒVæFVf–æVB’ö&¦V7Bç6†F÷ræÖ6—¦Ræg&öÔ'&’‚FFç6†F÷ræÖ6—¦R“° ––b‚FFç6†F÷ræ6ÖW&ÓÒVæFVf–æVB’ö&¦V7Bç6†F÷ræ6ÖW&ÒF†—2ç'6Tö&¦V7B‚FFç6†F÷ræ6ÖW&“°  —Ð  ––b‚FFçf—6–&ÆRÓÒVæFVf–æVB’ö&¦V7Bçf—6–&ÆRÒFFçf—6–&ÆS° ––b‚FFæg'W7GVÔ7VÆÆVBÓÒVæFVf–æVB’ö&¦V7Bæg'W7GVÔ7VÆÆVBÒFFæg'W7GVÔ7VÆÆVC° ––b‚FFç&VæFW$÷&FW"ÓÒVæFVf–æVB’ö&¦V7Bç&VæFW$÷&FW"ÒFFç&VæFW$÷&FW#° ––b‚FFçW6W$FFÓÒVæFVf–æVB’ö&¦V7BçW6W$FFÒFFçW6W$FF° ––b‚FFæÆ–W'2ÓÒVæFVf–æVB’ö&¦V7BæÆ–W'2æÖ6²ÒFFæÆ–W'3°  ––b‚FFæ6†–ÆG&VâÓÒVæFVf–æVB’°  –6öç7B6†–ÆG&VâÒFFæ6†–ÆG&Vã°  –f÷"‚ÆWB’Ò²’Â6†–ÆG&VâæÆVæwFƒ²’²²’°  –ö&¦V7BæFB‚F†—2ç'6Tö&¦V7B‚6†–ÆG&Vå²’ÒÂvVöÖWG&–W2ÂÖFW&–Ç2ÂFW‡GW&W2Âæ–ÖF–öç2’“°  —Ð  —Ð  ––b‚FFææ–ÖF–öç2ÓÒVæFVf–æVB’°  –6öç7Bö&¦V7Dæ–ÖF–öç2ÒFFææ–ÖF–öç3°  –f÷"‚ÆWB’Ò²’Âö&¦V7Dæ–ÖF–öç2æÆVæwFƒ²’²²’°  –6öç7BWV–BÒö&¦V7Dæ–ÖF–öç5²’Ó°  –ö&¦V7Bææ–ÖF–öç2çW6‚‚æ–ÖF–öç5²WV–BÒ“°  —Ð  —Ð  ––b‚FFçG—RÓÓÒtÄôBr’°  ––b‚FFæWFõWFFRÓÒVæFVf–æVB’ö&¦V7BæWFõWFFRÒFFæWFõWFFS°  –6öç7BÆWfVÇ2ÒFFæÆWfVÇ3°  –f÷"‚ÆWBÂÒ²ÂÂÆWfVÇ2æÆVæwFƒ²Â²²’°  –6öç7BÆWfVÂÒÆWfVÇ5²ÂÓ° –6öç7B6†–ÆBÒö&¦V7BævWDö&¦V7D'•&÷W'G’‚wWV–BrÂÆWfVÂæö&¦V7B“°  ––b‚6†–ÆBÓÒVæFVf–æVB’°  –ö&¦V7BæFDÆWfVÂ‚6†–ÆBÂÆWfVÂæF—7Fæ6RÂÆWfVÂæ‡—7FW&W6—2“°  —Ð  —Ð  —Ð  —&WGW&âö&¦V7C°  —Ð  –&–æE6¶VÆWFöç2‚ö&¦V7BÂ6¶VÆWFöç2’°  ––b‚ö&¦V7Bæ¶W—2‚6¶VÆWFöç2’æÆVæwF‚ÓÓÒ’&WGW&ã°  –ö&¦V7BçG&fW'6R‚gVæ7F–öâ‚6†–ÆB’°  ––b‚6†–ÆBæ—56¶–ææVDÖW6‚ÓÓÒG'VRbb6†–ÆBç6¶VÆWFöâÓÒVæFVf–æVB’°  –6öç7B6¶VÆWFöâÒ6¶VÆWFöç5²6†–ÆBç6¶VÆWFöâÓ°  ––b‚6¶VÆWFöâÓÓÒVæFVf–æVB’°  –6öç6öÆRçv&â‚uD…$TRäö&¦V7DÆöFW#¢æò6¶VÆWFöâf÷VæBv—F‚UT”C¢rÂ6†–ÆBç6¶VÆWFöâ“°  —ÒVÇ6R°  –6†–ÆBæ&–æB‚6¶VÆWFöâÂ6†–ÆBæ&–æDÖG&—‚“°  —Ð  —Ð  —Ò“°  —Ð §Ð ¦6öç7BDU…EU$UôÔ”ärÒ° •UdÖ–æs¢UdÖ–ærÀ ”7V&U&VfÆV7F–öäÖ–æs¢7V&U&VfÆV7F–öäÖ–ærÀ ”7V&U&Vg&7F–öäÖ–æs¢7V&U&Vg&7F–öäÖ–ærÀ ”WV—&V7FæwVÆ%&VfÆV7F–öäÖ–æs¢WV—&V7FæwVÆ%&VfÆV7F–öäÖ–ærÀ ”WV—&V7FæwVÆ%&Vg&7F–öäÖ–æs¢WV—&V7FæwVÆ%&Vg&7F–öäÖ–ærÀ ”7V&UUe&VfÆV7F–öäÖ–æs¢7V&UUe&VfÆV7F–öäÖ–æp§Ó° ¦6öç7BDU…EU$Uõu$”ärÒ° •&WVEw&–æs¢&WVEw&–ærÀ ”6Æ×FôVFvUw&–æs¢6Æ×FôVFvUw&–ærÀ ”Ö—'&÷&VE&WVEw&–æs¢Ö—'&÷&VE&WVEw&–æp§Ó° ¦6öç7BDU…EU$Uôd”ÅDU"Ò° ”æV&W7Df–ÇFW#¢æV&W7Df–ÇFW"À ”æV&W7DÖ—ÖæV&W7Df–ÇFW#¢æV&W7DÖ—ÖæV&W7Df–ÇFW"À ”æV&W7DÖ—ÖÆ–æV$f–ÇFW#¢æV&W7DÖ—ÖÆ–æV$f–ÇFW"À ”Æ–æV$f–ÇFW#¢Æ–æV$f–ÇFW"À ”Æ–æV$Ö—ÖæV&W7Df–ÇFW#¢Æ–æV$Ö—ÖæV&W7Df–ÇFW"À ”Æ–æV$Ö—ÖÆ–æV$f–ÇFW#¢Æ–æV$Ö—ÖÆ–æV$f–ÇFW §Ó° ¦6Æ72–ÖvT&—FÖÆöFW"W‡FVæG2ÆöFW"°  –6öç7G'V7F÷"‚ÖævW"’°  —7WW"‚ÖævW"“°  —F†—2æ—4–ÖvT&—FÖÆöFW"ÒG'VS°  ––b‚G—Vöb7&VFT–ÖvT&—FÖÓÓÒwVæFVf–æVBr’°  –6öç6öÆRçv&â‚uD…$TRä–ÖvT&—FÖÆöFW#¢7&VFT–ÖvT&—FÖ‚’æ÷B7W÷'FVBâr“°  —Ð  ––b‚G—VöbfWF6‚ÓÓÒwVæFVf–æVBr’°  –6öç6öÆRçv&â‚uD…$TRä–ÖvT&—FÖÆöFW#¢fWF6‚‚’æ÷B7W÷'FVBâr“°  —Ð  —F†—2æ÷F–öç2Ò²&V×VÇF—Ç”Ç†¢væöæRrÓ°  —Ð  —6WD÷F–öç2‚÷F–öç2’°  —F†—2æ÷F–öç2Ò÷F–öç3°  —&WGW&âF†—3°  —Ð  –ÆöB‚W&ÂÂöäÆöBÂöå&öw&W72ÂöäW'&÷"’°  ––b‚W&ÂÓÓÒVæFVf–æVB’W&ÂÒrs°  ––b‚F†—2çF‚ÓÒVæFVf–æVB’W&ÂÒF†—2çF‚²W&Ã°  —W&ÂÒF†—2æÖævW"ç&W6öÇfUU$Â‚W&Â“°  –6öç7B66÷RÒF†—3°  –6öç7B66†VBÒ66†RævWB‚W&Â“°  ––b‚66†VBÓÒVæFVf–æVB’°  —66÷RæÖævW"æ—FVÕ7F'B‚W&Â“°  ’òò–b66†VB—2&öÖ—6RÂv—Bf÷"—BFò&W6öÇfP ––b‚66†VBçF†Vâ’°  –66†VBçF†Vâ‚–ÖvT&—FÖÓâ°  ––b‚öäÆöB’öäÆöB‚–ÖvT&—FÖ“°  —66÷RæÖævW"æ—FVÔVæB‚W&Â“°  —Ò’æ6F6‚‚RÓâ°  ––b‚öäW'&÷"’öäW'&÷"‚R“°  —Ò“° —&WGW&ã°  —Ð  ’òò–b66†VB—2æ÷B&öÖ—6R†’æRâÂ—Bw2Ç&VG’â–ÖvT&—FÖ —6WEF–ÖV÷WB‚gVæ7F–öâ‚’°  ––b‚öäÆöB’öäÆöB‚66†VB“°  —66÷RæÖævW"æ—FVÔVæB‚W&Â“°  —ÒÂ“°  —&WGW&â66†VC°  —Ð  –6öç7BfWF6„÷F–öç2Ò·Ó° –fWF6„÷F–öç2æ7&VFVçF–Ç2Ò‚F†—2æ7&÷74÷&–v–âÓÓÒvæöç–Ö÷W2r’òw6ÖRÖ÷&–v–âr¢v–æ6ÇVFRs° –fWF6„÷F–öç2æ†VFW'2ÒF†—2ç&WVW7D†VFW#°  –6öç7B&öÖ—6RÒfWF6‚‚W&ÂÂfWF6„÷F–öç2’çF†Vâ‚gVæ7F–öâ‚&W2’°  —&WGW&â&W2æ&Æö"‚“°  —Ò’çF†Vâ‚gVæ7F–öâ‚&Æö"’°  —&WGW&â7&VFT–ÖvT&—FÖ‚&Æö"Âö&¦V7Bæ76–vâ‚66÷Ræ÷F–öç2Â²6öÆ÷%76T6öçfW'6–öã¢væöæRrÒ’“°  —Ò’çF†Vâ‚gVæ7F–öâ‚–ÖvT&—FÖ’°  ”66†RæFB‚W&ÂÂ–ÖvT&—FÖ“°  ––b‚öäÆöB’öäÆöB‚–ÖvT&—FÖ“°  —66÷RæÖævW"æ—FVÔVæB‚W&Â“°  —&WGW&â–ÖvT&—FÖ°  —Ò’æ6F6‚‚gVæ7F–öâ‚R’°  ––b‚öäW'&÷"’öäW'&÷"‚R“°  ”66†Rç&VÖ÷fR‚W&Â“°  —66÷RæÖævW"æ—FVÔW'&÷"‚W&Â“° —66÷RæÖævW"æ—FVÔVæB‚W&Â“°  —Ò“°  ”66†RæFB‚W&ÂÂ&öÖ—6R“° —66÷RæÖævW"æ—FVÕ7F'B‚W&Â“°  —Ð §Ð ¦ÆWBö6öçFW‡C° ¦6Æ72VF–ô6öçFW‡B°  —7FF–2vWD6öçFW‡B‚’°  ––b‚ö6öçFW‡BÓÓÒVæFVf–æVB’°  •ö6öçFW‡BÒæWr‚v–æF÷räVF–ô6öçFW‡BÇÂv–æF÷rçvV&¶—DVF–ô6öçFW‡B’‚“°  —Ð  —&WGW&âö6öçFW‡C°  —Ð  —7FF–26WD6öçFW‡B‚fÇVR’°  •ö6öçFW‡BÒfÇVS°  —Ð §Ð ¦6Æ72VF–ôÆöFW"W‡FVæG2ÆöFW"°  –6öç7G'V7F÷"‚ÖævW"’°  —7WW"‚ÖævW"“°  —Ð  –ÆöB‚W&ÂÂöäÆöBÂöå&öw&W72ÂöäW'&÷"’°  –6öç7B66÷RÒF†—3°  –6öç7BÆöFW"ÒæWrf–ÆTÆöFW"‚F†—2æÖævW"“° –ÆöFW"ç6WE&W7öç6UG—R‚v'&–'VffW"r“° –ÆöFW"ç6WEF‚‚F†—2çF‚“° –ÆöFW"ç6WE&WVW7D†VFW"‚F†—2ç&WVW7D†VFW"“° –ÆöFW"ç6WEv—F„7&VFVçF–Ç2‚F†—2çv—F„7&VFVçF–Ç2“° –ÆöFW"æÆöB‚W&ÂÂgVæ7F–öâ‚'VffW"’°  —G'’°  ’òò7&VFR6÷’öbF†R'VffW"âF†RFV6öFTVF–ôFFÖWF†ö@ ’òòFWF6†W2F†R'VffW"v†Vâ6ö×ÆWFRÂ&WfVçF–ær&WW6Rà –6öç7B'VffW$6÷’Ò'VffW"ç6Æ–6R‚“°  –6öç7B6öçFW‡BÒVF–ô6öçFW‡BævWD6öçFW‡B‚“° –6öçFW‡BæFV6öFTVF–ôFF‚'VffW$6÷’ÂgVæ7F–öâ‚VF–ô'VffW"’°  –öäÆöB‚VF–ô'VffW"“°  —Ò’æ6F6‚‚†æFÆTW'&÷"“°  —Ò6F6‚‚R’°  –†æFÆTW'&÷"‚R“°  —Ð  —ÒÂöå&öw&W72ÂöäW'&÷"“°  –gVæ7F–öâ†æFÆTW'&÷"‚R’°  ––b‚öäW'&÷"’°  –öäW'&÷"‚R“°  —ÒVÇ6R°  –6öç6öÆRæW'&÷"‚R“°  —Ð  —66÷RæÖævW"æ—FVÔW'&÷"‚W&Â“°  —Ð  —Ð §Ð ¦6öç7BöW–U&–v‡BÒò¤õõU$Uõò¢òæWrÖG&—ƒB‚“°¦6öç7BöW–TÆVgBÒò¤õõU$Uõò¢òæWrÖG&—ƒB‚“°¦6öç7B÷&ö¦V7F–öäÖG&—‚Òò¤õõU$Uõò¢òæWrÖG&—ƒB‚“° ¦6Æ727FW&Vô6ÖW&°  –6öç7G'V7F÷"‚’°  —F†—2çG—RÒu7FW&Vô6ÖW&s°  —F†—2æ7V7BÒ°  —F†—2æW–U6WÒãcC°  —F†—2æ6ÖW&ÂÒæWrW'7V7F—fT6ÖW&‚“° —F†—2æ6ÖW&ÂæÆ–W'2æVæ&ÆR‚“° —F†—2æ6ÖW&ÂæÖG&—„WFõWFFRÒfÇ6S°  —F†—2æ6ÖW&"ÒæWrW'7V7F—fT6ÖW&‚“° —F†—2æ6ÖW&"æÆ–W'2æVæ&ÆR‚"“° —F†—2æ6ÖW&"æÖG&—„WFõWFFRÒfÇ6S°  —F†—2åö66†RÒ° –fö7W3¢çVÆÂÀ –f÷c¢çVÆÂÀ –7V7C¢çVÆÂÀ –æV#¢çVÆÂÀ –f#¢çVÆÂÀ —¦ööÓ¢çVÆÂÀ –W–U6W¢çVÆÀ —Ó°  —Ð  —WFFR‚6ÖW&’°  –6öç7B66†RÒF†—2åö66†S°  –6öç7BæVVG5WFFRÒ66†Ræfö7W2ÓÒ6ÖW&æfö7W2ÇÂ66†Ræf÷bÓÒ6ÖW&æf÷bÇÀ –66†Ræ7V7BÓÒ6ÖW&æ7V7B¢F†—2æ7V7BÇÂ66†RææV"ÓÒ6ÖW&ææV"ÇÀ –66†Ræf"ÓÒ6ÖW&æf"ÇÂ66†Rç¦ööÒÓÒ6ÖW&ç¦ööÒÇÂ66†RæW–U6WÓÒF†—2æW–U6W°  ––b‚æVVG5WFFR’°  –66†Ræfö7W2Ò6ÖW&æfö7W3° –66†Ræf÷bÒ6ÖW&æf÷c° –66†Ræ7V7BÒ6ÖW&æ7V7B¢F†—2æ7V7C° –66†RææV"Ò6ÖW&ææV#° –66†Ræf"Ò6ÖW&æf#° –66†Rç¦ööÒÒ6ÖW&ç¦ööÓ° –66†RæW–U6WÒF†—2æW–U6W°  ’òòöfbÖ†—27FW&V÷66÷–2VffV7B&6VBöà ’òò‡GG¢ò÷VÆ&÷W&¶RææWB÷7FW&Vöw&†–72÷7FW&V÷&VæFW"ð  •÷&ö¦V7F–öäÖG&—‚æ6÷’‚6ÖW&ç&ö¦V7F–öäÖG&—‚“° –6öç7BW–U6W†ÆbÒ66†RæW–U6Wò#° –6öç7BW–U6Wöå&ö¦V7F–öâÒW–U6W†Æb¢66†RææV"ò66†Ræfö7W3° –6öç7B–Ö‚Ò‚66†RææV"¢ÖF‚çFâ‚DTs%$B¢66†Ræf÷b¢ãR’’ò66†Rç¦ööÓ° –ÆWB†Ö–âÂ†Öƒ°  ’òòG&ç6ÆFR„öfg6W@  •öW–TÆVgBæVÆVÖVçG5²"ÒÒÒW–U6W†Æc° •öW–U&–v‡BæVÆVÖVçG5²"ÒÒW–U6W†Æc°  ’òòf÷"ÆVgBW–P  —†Ö–âÒÒ–Ö‚¢66†Ræ7V7B²W–U6Wöå&ö¦V7F–öã° —†Ö‚Ò–Ö‚¢66†Ræ7V7B²W–U6Wöå&ö¦V7F–öã°  •÷&ö¦V7F–öäÖG&—‚æVÆVÖVçG5²ÒÒ"¢66†RææV"ò‚†Ö‚Ò†Ö–â“° •÷&ö¦V7F–öäÖG&—‚æVÆVÖVçG5²‚ÒÒ‚†Ö‚²†Ö–â’ò‚†Ö‚Ò†Ö–â“°  —F†—2æ6ÖW&Âç&ö¦V7F–öäÖG&—‚æ6÷’‚÷&ö¦V7F–öäÖG&—‚“°  ’òòf÷"&–v‡BW–P  —†Ö–âÒÒ–Ö‚¢66†Ræ7V7BÒW–U6Wöå&ö¦V7F–öã° —†Ö‚Ò–Ö‚¢66†Ræ7V7BÒW–U6Wöå&ö¦V7F–öã°  •÷&ö¦V7F–öäÖG&—‚æVÆVÖVçG5²ÒÒ"¢66†RææV"ò‚†Ö‚Ò†Ö–â“° •÷&ö¦V7F–öäÖG&—‚æVÆVÖVçG5²‚ÒÒ‚†Ö‚²†Ö–â’ò‚†Ö‚Ò†Ö–â“°  —F†—2æ6ÖW&"ç&ö¦V7F–öäÖG&—‚æ6÷’‚÷&ö¦V7F–öäÖG&—‚“°  —Ð  —F†—2æ6ÖW&ÂæÖG&—…v÷&ÆBæ6÷’‚6ÖW&æÖG&—…v÷&ÆB’æ×VÇF—Ç’‚öW–TÆVgB“° —F†—2æ6ÖW&"æÖG&—…v÷&ÆBæ6÷’‚6ÖW&æÖG&—…v÷&ÆB’æ×VÇF—Ç’‚öW–U&–v‡B“°  —Ð §Ð ¦6Æ726Æö6²°  –6öç7G'V7F÷"‚WFõ7F'BÒG'VR’°  —F†—2æWFõ7F'BÒWFõ7F'C°  —F†—2ç7F'EF–ÖRÒ° —F†—2æöÆEF–ÖRÒ° —F†—2æVÆ6VEF–ÖRÒ°  —F†—2ç'Vææ–ærÒfÇ6S°  —Ð  —7F'B‚’°  —F†—2ç7F'EF–ÖRÒæ÷r‚“°  —F†—2æöÆEF–ÖRÒF†—2ç7F'EF–ÖS° —F†—2æVÆ6VEF–ÖRÒ° —F†—2ç'Vææ–ærÒG'VS°  —Ð  —7F÷‚’°  —F†—2ævWDVÆ6VEF–ÖR‚“° —F†—2ç'Vææ–ærÒfÇ6S° —F†—2æWFõ7F'BÒfÇ6S°  —Ð  –vWDVÆ6VEF–ÖR‚’°  —F†—2ævWDFVÇF‚“° —&WGW&âF†—2æVÆ6VEF–ÖS°  —Ð  –vWDFVÇF‚’°  –ÆWBF–fbÒ°  ––b‚F†—2æWFõ7F'BbbF†—2ç'Vææ–ær’°  —F†—2ç7F'B‚“° —&WGW&â°  —Ð  ––b‚F†—2ç'Vææ–ær’°  –6öç7BæWuF–ÖRÒæ÷r‚“°  –F–fbÒ‚æWuF–ÖRÒF†—2æöÆEF–ÖR’ò° —F†—2æöÆEF–ÖRÒæWuF–ÖS°  —F†—2æVÆ6VEF–ÖR³ÒF–fc°  —Ð  —&WGW&âF–fc°  —Ð §Ð ¦gVæ7F–öâæ÷r‚’°  —&WGW&â‚G—VöbW&f÷&Öæ6RÓÓÒwVæFVf–æVBròFFR¢W&f÷&Öæ6R’ææ÷r‚“²òò6VR3s3  §Ð ¦6öç7B÷÷6—F–öâCÒò¤õõU$Uõò¢òæWrfV7F÷#2‚“°¦6öç7B÷VFW&æ–öâCÒò¤õõU$Uõò¢òæWrVFW&æ–öâ‚“°¦6öç7B÷66ÆRCÒò¤õõU$Uõò¢òæWrfV7F÷#2‚“°¦6öç7Bö÷&–VçFF–öâCÒò¤õõU$Uõò¢òæWrfV7F÷#2‚“° ¦6Æ72VF–ôÆ—7FVæW"W‡FVæG2ö&¦V7C4B°  –6öç7G'V7F÷"‚’°  —7WW"‚“°  —F†—2çG—RÒtVF–ôÆ—7FVæW"s°  —F†—2æ6öçFW‡BÒVF–ô6öçFW‡BævWD6öçFW‡B‚“°  —F†—2æv–âÒF†—2æ6öçFW‡Bæ7&VFTv–â‚“° —F†—2æv–âæ6öææV7B‚F†—2æ6öçFW‡BæFW7F–æF–öâ“°  —F†—2æf–ÇFW"ÒçVÆÃ°  —F†—2çF–ÖTFVÇFÒ°  ’òò&—fFP  —F†—2åö6Æö6²ÒæWr6Æö6²‚“°  —Ð  –vWD–çWB‚’°  —&WGW&âF†—2æv–ã°  —Ð  —&VÖ÷fTf–ÇFW"‚’°  ––b‚F†—2æf–ÇFW"ÓÒçVÆÂ’°  —F†—2æv–âæF—66öææV7B‚F†—2æf–ÇFW"“° —F†—2æf–ÇFW"æF—66öææV7B‚F†—2æ6öçFW‡BæFW7F–æF–öâ“° —F†—2æv–âæ6öææV7B‚F†—2æ6öçFW‡BæFW7F–æF–öâ“° —F†—2æf–ÇFW"ÒçVÆÃ°  —Ð  —&WGW&âF†—3°  —Ð  –vWDf–ÇFW"‚’°  —&WGW&âF†—2æf–ÇFW#°  —Ð  —6WDf–ÇFW"‚fÇVR’°  ––b‚F†—2æf–ÇFW"ÓÒçVÆÂ’°  —F†—2æv–âæF—66öææV7B‚F†—2æf–ÇFW"“° —F†—2æf–ÇFW"æF—66öææV7B‚F†—2æ6öçFW‡BæFW7F–æF–öâ“°  —ÒVÇ6R°  —F†—2æv–âæF—66öææV7B‚F†—2æ6öçFW‡BæFW7F–æF–öâ“°  —Ð  —F†—2æf–ÇFW"ÒfÇVS° —F†—2æv–âæ6öææV7B‚F†—2æf–ÇFW"“° —F†—2æf–ÇFW"æ6öææV7B‚F†—2æ6öçFW‡BæFW7F–æF–öâ“°  —&WGW&âF†—3°  —Ð  –vWDÖ7FW%föÇVÖR‚’°  —&WGW&âF†—2æv–âæv–âçfÇVS°  —Ð  —6WDÖ7FW%föÇVÖR‚fÇVR’°  —F†—2æv–âæv–âç6WEF&vWDEF–ÖR‚fÇVRÂF†—2æ6öçFW‡Bæ7W'&VçEF–ÖRÂã“°  —&WGW&âF†—3°  —Ð  —WFFTÖG&—…v÷&ÆB‚f÷&6R’°  —7WW"çWFFTÖG&—…v÷&ÆB‚f÷&6R“°  –6öç7BÆ—7FVæW"ÒF†—2æ6öçFW‡BæÆ—7FVæW#° –6öç7BWÒF†—2çW°  —F†—2çF–ÖTFVÇFÒF†—2åö6Æö6²ævWDFVÇF‚“°  —F†—2æÖG&—…v÷&ÆBæFV6ö×÷6R‚÷÷6—F–öâCÂ÷VFW&æ–öâCÂ÷66ÆRC“°  •ö÷&–VçFF–öâCç6WB‚ÂÂÒ’æÇ•VFW&æ–öâ‚÷VFW&æ–öâC“°  ––b‚Æ—7FVæW"ç÷6—F–öå‚’°  ’òò6öFRF‚f÷"6‡&öÖR‡6VR3C3“2  –6öç7BVæEF–ÖRÒF†—2æ6öçFW‡Bæ7W'&VçEF–ÖR²F†—2çF–ÖTFVÇF°  –Æ—7FVæW"ç÷6—F–öå‚æÆ–æV%&×FõfÇVTEF–ÖR‚÷÷6—F–öâCç‚ÂVæEF–ÖR“° –Æ—7FVæW"ç÷6—F–öå’æÆ–æV%&×FõfÇVTEF–ÖR‚÷÷6—F–öâCç’ÂVæEF–ÖR“° –Æ—7FVæW"ç÷6—F–öå¢æÆ–æV%&×FõfÇVTEF–ÖR‚÷÷6—F–öâCç¢ÂVæEF–ÖR“° –Æ—7FVæW"æf÷'v&E‚æÆ–æV%&×FõfÇVTEF–ÖR‚ö÷&–VçFF–öâCç‚ÂVæEF–ÖR“° –Æ—7FVæW"æf÷'v&E’æÆ–æV%&×FõfÇVTEF–ÖR‚ö÷&–VçFF–öâCç’ÂVæEF–ÖR“° –Æ—7FVæW"æf÷'v&E¢æÆ–æV%&×FõfÇVTEF–ÖR‚ö÷&–VçFF–öâCç¢ÂVæEF–ÖR“° –Æ—7FVæW"çW‚æÆ–æV%&×FõfÇVTEF–ÖR‚Wç‚ÂVæEF–ÖR“° –Æ—7FVæW"çW’æÆ–æV%&×FõfÇVTEF–ÖR‚Wç’ÂVæEF–ÖR“° –Æ—7FVæW"çW¢æÆ–æV%&×FõfÇVTEF–ÖR‚Wç¢ÂVæEF–ÖR“°  —ÒVÇ6R°  –Æ—7FVæW"ç6WE÷6—F–öâ‚÷÷6—F–öâCç‚Â÷÷6—F–öâCç’Â÷÷6—F–öâCç¢“° –Æ—7FVæW"ç6WD÷&–VçFF–öâ‚ö÷&–VçFF–öâCç‚Âö÷&–VçFF–öâCç’Âö÷&–VçFF–öâCç¢ÂWç‚ÂWç’ÂWç¢“°  —Ð  —Ð §Ð ¦6Æ72VF–òW‡FVæG2ö&¦V7C4B°  –6öç7G'V7F÷"‚Æ—7FVæW"’°  —7WW"‚“°  —F†—2çG—RÒtVF–òs°  —F†—2æÆ—7FVæW"ÒÆ—7FVæW#° —F†—2æ6öçFW‡BÒÆ—7FVæW"æ6öçFW‡C°  —F†—2æv–âÒF†—2æ6öçFW‡Bæ7&VFTv–â‚“° —F†—2æv–âæ6öææV7B‚Æ—7FVæW"ævWD–çWB‚’“°  —F†—2æWF÷Æ’ÒfÇ6S°  —F†—2æ'VffW"ÒçVÆÃ° —F†—2æFWGVæRÒ° —F†—2æÆö÷ÒfÇ6S° —F†—2æÆö÷7F'BÒ° —F†—2æÆö÷VæBÒ° —F†—2æöfg6WBÒ° —F†—2æGW&F–öâÒVæFVf–æVC° —F†—2çÆ–&6µ&FRÒ° —F†—2æ—5Æ––ærÒfÇ6S° —F†—2æ†5Æ–&6´6öçG&öÂÒG'VS° —F†—2ç6÷W&6RÒçVÆÃ° —F†—2ç6÷W&6UG—RÒvV×G’s°  —F†—2å÷7F'FVDBÒ° —F†—2å÷&öw&W72Ò° —F†—2åö6öææV7FVBÒfÇ6S°  —F†—2æf–ÇFW'2ÒµÓ°  —Ð  –vWD÷WGWB‚’°  —&WGW&âF†—2æv–ã°  —Ð  —6WDæöFU6÷W&6R‚VF–ôæöFR’°  —F†—2æ†5Æ–&6´6öçG&öÂÒfÇ6S° —F†—2ç6÷W&6UG—RÒvVF–ôæöFRs° —F†—2ç6÷W&6RÒVF–ôæöFS° —F†—2æ6öææV7B‚“°  —&WGW&âF†—3°  —Ð  —6WDÖVF–VÆVÖVçE6÷W&6R‚ÖVF–VÆVÖVçB’°  —F†—2æ†5Æ–&6´6öçG&öÂÒfÇ6S° —F†—2ç6÷W&6UG—RÒvÖVF–æöFRs° —F†—2ç6÷W&6RÒF†—2æ6öçFW‡Bæ7&VFTÖVF–VÆVÖVçE6÷W&6R‚ÖVF–VÆVÖVçB“° —F†—2æ6öææV7B‚“°  —&WGW&âF†—3°  —Ð  —6WDÖVF–7G&VÕ6÷W&6R‚ÖVF–7G&VÒ’°  —F†—2æ†5Æ–&6´6öçG&öÂÒfÇ6S° —F†—2ç6÷W&6UG—RÒvÖVF–7G&VÔæöFRs° —F†—2ç6÷W&6RÒF†—2æ6öçFW‡Bæ7&VFTÖVF–7G&VÕ6÷W&6R‚ÖVF–7G&VÒ“° —F†—2æ6öææV7B‚“°  —&WGW&âF†—3°  —Ð  —6WD'VffW"‚VF–ô'VffW"’°  —F†—2æ'VffW"ÒVF–ô'VffW#° —F†—2ç6÷W&6UG—RÒv'VffW"s°  ––b‚F†—2æWF÷Æ’’F†—2çÆ’‚“°  —&WGW&âF†—3°  —Ð  —Æ’‚FVÆ’Ò’°  ––b‚F†—2æ—5Æ––ærÓÓÒG'VR’°  –6öç6öÆRçv&â‚uD…$TRäVF–ó¢VF–ò—2Ç&VG’Æ––ærâr“° —&WGW&ã°  —Ð  ––b‚F†—2æ†5Æ–&6´6öçG&öÂÓÓÒfÇ6R’°  –6öç6öÆRçv&â‚uD…$TRäVF–ó¢F†—2VF–ò†2æòÆ–&6²6öçG&öÂâr“° —&WGW&ã°  —Ð  —F†—2å÷7F'FVDBÒF†—2æ6öçFW‡Bæ7W'&VçEF–ÖR²FVÆ“°  –6öç7B6÷W&6RÒF†—2æ6öçFW‡Bæ7&VFT'VffW%6÷W&6R‚“° —6÷W&6Ræ'VffW"ÒF†—2æ'VffW#° —6÷W&6RæÆö÷ÒF†—2æÆö÷° —6÷W&6RæÆö÷7F'BÒF†—2æÆö÷7F'C° —6÷W&6RæÆö÷VæBÒF†—2æÆö÷VæC° —6÷W&6RæöæVæFVBÒF†—2æöäVæFVBæ&–æB‚F†—2“° —6÷W&6Rç7F'B‚F†—2å÷7F'FVDBÂF†—2å÷&öw&W72²F†—2æöfg6WBÂF†—2æGW&F–öâ“°  —F†—2æ—5Æ––ærÒG'VS°  —F†—2ç6÷W&6RÒ6÷W&6S°  —F†—2ç6WDFWGVæR‚F†—2æFWGVæR“° —F†—2ç6WEÆ–&6µ&FR‚F†—2çÆ–&6µ&FR“°  —&WGW&âF†—2æ6öææV7B‚“°  —Ð  —W6R‚’°  ––b‚F†—2æ†5Æ–&6´6öçG&öÂÓÓÒfÇ6R’°  –6öç6öÆRçv&â‚uD…$TRäVF–ó¢F†—2VF–ò†2æòÆ–&6²6öçG&öÂâr“° —&WGW&ã°  —Ð  ––b‚F†—2æ—5Æ––ærÓÓÒG'VR’°  ’òòWFFR7W'&VçB&öw&W70  —F†—2å÷&öw&W72³ÒÖF‚æÖ‚‚F†—2æ6öçFW‡Bæ7W'&VçEF–ÖRÒF†—2å÷7F'FVDBÂ’¢F†—2çÆ–&6µ&FS°  ––b‚F†—2æÆö÷ÓÓÒG'VR’°  ’òòVç7W&R÷&öw&W72FöW2æ÷BW†6VVBGW&F–öâv—F‚Æö÷VBVF–÷0  —F†—2å÷&öw&W72ÒF†—2å÷&öw&W72R‚F†—2æGW&F–öâÇÂF†—2æ'VffW"æGW&F–öâ“°  —Ð  —F†—2ç6÷W&6Rç7F÷‚“° —F†—2ç6÷W&6RæöæVæFVBÒçVÆÃ°  —F†—2æ—5Æ––ærÒfÇ6S°  —Ð  —&WGW&âF†—3°  —Ð  —7F÷‚’°  ––b‚F†—2æ†5Æ–&6´6öçG&öÂÓÓÒfÇ6R’°  –6öç6öÆRçv&â‚uD…$TRäVF–ó¢F†—2VF–ò†2æòÆ–&6²6öçG&öÂâr“° —&WGW&ã°  —Ð  —F†—2å÷&öw&W72Ò°  ––b‚F†—2ç6÷W&6RÓÒçVÆÂ’°  —F†—2ç6÷W&6Rç7F÷‚“° —F†—2ç6÷W&6RæöæVæFVBÒçVÆÃ°  —Ð  —F†—2æ—5Æ––ærÒfÇ6S°  —&WGW&âF†—3°  —Ð  –6öææV7B‚’°  ––b‚F†—2æf–ÇFW'2æÆVæwF‚â’°  —F†—2ç6÷W&6Ræ6öææV7B‚F†—2æf–ÇFW'5²Ò“°  –f÷"‚ÆWB’ÒÂÂÒF†—2æf–ÇFW'2æÆVæwFƒ²’ÂÃ²’²²’°  —F†—2æf–ÇFW'5²’ÒÒæ6öææV7B‚F†—2æf–ÇFW'5²’Ò“°  —Ð  —F†—2æf–ÇFW'5²F†—2æf–ÇFW'2æÆVæwF‚ÒÒæ6öææV7B‚F†—2ævWD÷WGWB‚’“°  —ÒVÇ6R°  —F†—2ç6÷W&6Ræ6öææV7B‚F†—2ævWD÷WGWB‚’“°  —Ð  —F†—2åö6öææV7FVBÒG'VS°  —&WGW&âF†—3°  —Ð  –F—66öææV7B‚’°  ––b‚F†—2åö6öææV7FVBÓÓÒfÇ6R’°  —&WGW&ã°  —Ð  ––b‚F†—2æf–ÇFW'2æÆVæwF‚â’°  —F†—2ç6÷W&6RæF—66öææV7B‚F†—2æf–ÇFW'5²Ò“°  –f÷"‚ÆWB’ÒÂÂÒF†—2æf–ÇFW'2æÆVæwFƒ²’ÂÃ²’²²’°  —F†—2æf–ÇFW'5²’ÒÒæF—66öææV7B‚F†—2æf–ÇFW'5²’Ò“°  —Ð  —F†—2æf–ÇFW'5²F†—2æf–ÇFW'2æÆVæwF‚ÒÒæF—66öææV7B‚F†—2ævWD÷WGWB‚’“°  —ÒVÇ6R°  —F†—2ç6÷W&6RæF—66öææV7B‚F†—2ævWD÷WGWB‚’“°  —Ð  —F†—2åö6öææV7FVBÒfÇ6S°  —&WGW&âF†—3°  —Ð  –vWDf–ÇFW'2‚’°  —&WGW&âF†—2æf–ÇFW'3°  —Ð  —6WDf–ÇFW'2‚fÇVR’°  ––b‚fÇVR’fÇVRÒµÓ°  ––b‚F†—2åö6öææV7FVBÓÓÒG'VR’°  —F†—2æF—66öææV7B‚“° —F†—2æf–ÇFW'2ÒfÇVRç6Æ–6R‚“° —F†—2æ6öææV7B‚“°  —ÒVÇ6R°  —F†—2æf–ÇFW'2ÒfÇVRç6Æ–6R‚“°  —Ð  —&WGW&âF†—3°  —Ð  —6WDFWGVæR‚fÇVR’°  —F†—2æFWGVæRÒfÇVS°  ––b‚F†—2æ—5Æ––ærÓÓÒG'VRbbF†—2ç6÷W&6RæFWGVæRÓÒVæFVf–æVB’°  —F†—2ç6÷W&6RæFWGVæRç6WEF&vWDEF–ÖR‚F†—2æFWGVæRÂF†—2æ6öçFW‡Bæ7W'&VçEF–ÖRÂã“°  —Ð  —&WGW&âF†—3°  —Ð  –vWDFWGVæR‚’°  —&WGW&âF†—2æFWGVæS°  —Ð  –vWDf–ÇFW"‚’°  —&WGW&âF†—2ævWDf–ÇFW'2‚•²Ó°  —Ð  —6WDf–ÇFW"‚f–ÇFW"’°  —&WGW&âF†—2ç6WDf–ÇFW'2‚f–ÇFW"ò²f–ÇFW"Ò¢µÒ“°  —Ð  —6WEÆ–&6µ&FR‚fÇVR’°  ––b‚F†—2æ†5Æ–&6´6öçG&öÂÓÓÒfÇ6R’°  –6öç6öÆRçv&â‚uD…$TRäVF–ó¢F†—2VF–ò†2æòÆ–&6²6öçG&öÂâr“° —&WGW&ã°  —Ð  —F†—2çÆ–&6µ&FRÒfÇVS°  ––b‚F†—2æ—5Æ––ærÓÓÒG'VR’°  —F†—2ç6÷W&6RçÆ–&6µ&FRç6WEF&vWDEF–ÖR‚F†—2çÆ–&6µ&FRÂF†—2æ6öçFW‡Bæ7W'&VçEF–ÖRÂã“°  —Ð  —&WGW&âF†—3°  —Ð  –vWEÆ–&6µ&FR‚’°  —&WGW&âF†—2çÆ–&6µ&FS°  —Ð  –öäVæFVB‚’°  —F†—2æ—5Æ––ærÒfÇ6S°  —Ð  –vWDÆö÷‚’°  ––b‚F†—2æ†5Æ–&6´6öçG&öÂÓÓÒfÇ6R’°  –6öç6öÆRçv&â‚uD…$TRäVF–ó¢F†—2VF–ò†2æòÆ–&6²6öçG&öÂâr“° —&WGW&âfÇ6S°  —Ð  —&WGW&âF†—2æÆö÷°  —Ð  —6WDÆö÷‚fÇVR’°  ––b‚F†—2æ†5Æ–&6´6öçG&öÂÓÓÒfÇ6R’°  –6öç6öÆRçv&â‚uD…$TRäVF–ó¢F†—2VF–ò†2æòÆ–&6²6öçG&öÂâr“° —&WGW&ã°  —Ð  —F†—2æÆö÷ÒfÇVS°  ––b‚F†—2æ—5Æ––ærÓÓÒG'VR’°  —F†—2ç6÷W&6RæÆö÷ÒF†—2æÆö÷°  —Ð  —&WGW&âF†—3°  —Ð  —6WDÆö÷7F'B‚fÇVR’°  —F†—2æÆö÷7F'BÒfÇVS°  —&WGW&âF†—3°  —Ð  —6WDÆö÷VæB‚fÇVR’°  —F†—2æÆö÷VæBÒfÇVS°  —&WGW&âF†—3°  —Ð  –vWEföÇVÖR‚’°  —&WGW&âF†—2æv–âæv–âçfÇVS°  —Ð  —6WEföÇVÖR‚fÇVR’°  —F†—2æv–âæv–âç6WEF&vWDEF–ÖR‚fÇVRÂF†—2æ6öçFW‡Bæ7W'&VçEF–ÖRÂã“°  —&WGW&âF†—3°  —Ð §Ð ¦6öç7B÷÷6—F–öâÒò¤õõU$Uõò¢òæWrfV7F÷#2‚“°¦6öç7B÷VFW&æ–öâÒò¤õõU$Uõò¢òæWrVFW&æ–öâ‚“°¦6öç7B÷66ÆRÒò¤õõU$Uõò¢òæWrfV7F÷#2‚“°¦6öç7Bö÷&–VçFF–öâÒò¤õõU$Uõò¢òæWrfV7F÷#2‚“° ¦6Æ72÷6—F–öæÄVF–òW‡FVæG2VF–ò°  –6öç7G'V7F÷"‚Æ—7FVæW"’°  —7WW"‚Æ—7FVæW"“°  —F†—2çææW"ÒF†—2æ6öçFW‡Bæ7&VFUææW"‚“° —F†—2çææW"çææ–ætÖöFVÂÒt…%Dbs° —F†—2çææW"æ6öææV7B‚F†—2æv–â“°  —Ð  –6öææV7B‚’°  —7WW"æ6öææV7B‚“°  —F†—2çææW"æ6öææV7B‚F†—2æv–â“°  —Ð  –F—66öææV7B‚’°  —7WW"æF—66öææV7B‚“°  —F†—2çææW"æF—66öææV7B‚F†—2æv–â“°  —Ð  –vWD÷WGWB‚’°  —&WGW&âF†—2çææW#°  —Ð  –vWE&VdF—7Fæ6R‚’°  —&WGW&âF†—2çææW"ç&VdF—7Fæ6S°  —Ð  —6WE&VdF—7Fæ6R‚fÇVR’°  —F†—2çææW"ç&VdF—7Fæ6RÒfÇVS°  —&WGW&âF†—3°  —Ð  –vWE&öÆÆöfdf7F÷"‚’°  —&WGW&âF†—2çææW"ç&öÆÆöfdf7F÷#°  —Ð  —6WE&öÆÆöfdf7F÷"‚fÇVR’°  —F†—2çææW"ç&öÆÆöfdf7F÷"ÒfÇVS°  —&WGW&âF†—3°  —Ð  –vWDF—7Fæ6TÖöFVÂ‚’°  —&WGW&âF†—2çææW"æF—7Fæ6TÖöFVÃ°  —Ð  —6WDF—7Fæ6TÖöFVÂ‚fÇVR’°  —F†—2çææW"æF—7Fæ6TÖöFVÂÒfÇVS°  —&WGW&âF†—3°  —Ð  –vWDÖ„F—7Fæ6R‚’°  —&WGW&âF†—2çææW"æÖ„F—7Fæ6S°  —Ð  —6WDÖ„F—7Fæ6R‚fÇVR’°  —F†—2çææW"æÖ„F—7Fæ6RÒfÇVS°  —&WGW&âF†—3°  —Ð  —6WDF—&V7F–öæÄ6öæR‚6öæT–ææW$ævÆRÂ6öæT÷WFW$ævÆRÂ6öæT÷WFW$v–â’°  —F†—2çææW"æ6öæT–ææW$ævÆRÒ6öæT–ææW$ævÆS° —F†—2çææW"æ6öæT÷WFW$ævÆRÒ6öæT÷WFW$ævÆS° —F†—2çææW"æ6öæT÷WFW$v–âÒ6öæT÷WFW$v–ã°  —&WGW&âF†—3°  —Ð  —WFFTÖG&—…v÷&ÆB‚f÷&6R’°  —7WW"çWFFTÖG&—…v÷&ÆB‚f÷&6R“°  ––b‚F†—2æ†5Æ–&6´6öçG&öÂÓÓÒG'VRbbF†—2æ—5Æ––ærÓÓÒfÇ6R’&WGW&ã°  —F†—2æÖG&—…v÷&ÆBæFV6ö×÷6R‚÷÷6—F–öâÂ÷VFW&æ–öâÂ÷66ÆR“°  •ö÷&–VçFF–öâç6WB‚ÂÂ’æÇ•VFW&æ–öâ‚÷VFW&æ–öâ“°  –6öç7BææW"ÒF†—2çææW#°  ––b‚ææW"ç÷6—F–öå‚’°  ’òò6öFRF‚f÷"6‡&öÖRæBf—&Vf÷‚‡6VR3C3“2  –6öç7BVæEF–ÖRÒF†—2æ6öçFW‡Bæ7W'&VçEF–ÖR²F†—2æÆ—7FVæW"çF–ÖTFVÇF°  —ææW"ç÷6—F–öå‚æÆ–æV%&×FõfÇVTEF–ÖR‚÷÷6—F–öâç‚ÂVæEF–ÖR“° —ææW"ç÷6—F–öå’æÆ–æV%&×FõfÇVTEF–ÖR‚÷÷6—F–öâç’ÂVæEF–ÖR“° —ææW"ç÷6—F–öå¢æÆ–æV%&×FõfÇVTEF–ÖR‚÷÷6—F–öâç¢ÂVæEF–ÖR“° —ææW"æ÷&–VçFF–öå‚æÆ–æV%&×FõfÇVTEF–ÖR‚ö÷&–VçFF–öâç‚ÂVæEF–ÖR“° —ææW"æ÷&–VçFF–öå’æÆ–æV%&×FõfÇVTEF–ÖR‚ö÷&–VçFF–öâç’ÂVæEF–ÖR“° —ææW"æ÷&–VçFF–öå¢æÆ–æV%&×FõfÇVTEF–ÖR‚ö÷&–VçFF–öâç¢ÂVæEF–ÖR“°  —ÒVÇ6R°  —ææW"ç6WE÷6—F–öâ‚÷÷6—F–öâç‚Â÷÷6—F–öâç’Â÷÷6—F–öâç¢“° —ææW"ç6WD÷&–VçFF–öâ‚ö÷&–VçFF–öâç‚Âö÷&–VçFF–öâç’Âö÷&–VçFF–öâç¢“°  —Ð  —Ð §Ð ¦6Æ72VF–ôæÇ—6W"°  –6öç7G'V7F÷"‚VF–òÂfgE6—¦RÒ#C‚’°  —F†—2ææÇ—6W"ÒVF–òæ6öçFW‡Bæ7&VFTæÇ—6W"‚“° —F†—2ææÇ—6W"æfgE6—¦RÒfgE6—¦S°  —F†—2æFFÒæWrV–çC„'&’‚F†—2ææÇ—6W"æg&WVVæ7”&–ä6÷VçB“°  –VF–òævWD÷WGWB‚’æ6öææV7B‚F†—2ææÇ—6W"“°  —Ð   –vWDg&WVVæ7”FF‚’°  —F†—2ææÇ—6W"ævWD'—FTg&WVVæ7”FF‚F†—2æFF“°  —&WGW&âF†—2æFF°  —Ð  –vWDfW&vTg&WVVæ7’‚’°  –ÆWBfÇVRÒ° –6öç7BFFÒF†—2ævWDg&WVVæ7”FF‚“°  –f÷"‚ÆWB’Ò²’ÂFFæÆVæwFƒ²’²²’°  —fÇVR³ÒFF²’Ó°  —Ð  —&WGW&âfÇVRòFFæÆVæwFƒ°  —Ð §Ð ¦6Æ72&÷W'G”Ö—†W"°  –6öç7G'V7F÷"‚&–æF–ærÂG—TæÖRÂfÇVU6—¦R’°  —F†—2æ&–æF–ærÒ&–æF–æs° —F†—2çfÇVU6—¦RÒfÇVU6—¦S°  –ÆWBÖ—„gVæ7F–öâÀ –Ö—„gVæ7F–öäFF—F—fRÀ —6WD–FVçF—G“°  ’òò'VffW"Æ–÷WC¢²–æ6öÖ–ærÂ67SÂ67SÂ÷&–rÂFD67RÂ†÷F–öæÂv÷&²’Ð ’òð ’òò–çFW'öÆF÷'26âW6Ræ'VffW"2F†V—"ç&W7VÇ@ ’òòF†RFFF†VâvöW2Fòv–æ6öÖ–ærp ’òð ’òòv67SræBv67Sr&RW6VBg&ÖRÖ–çFW&ÆVfVBf÷  ’òòF†R7V×VÆF—fR&W7VÇBæB&R6ö×&VBFòFWFV7@ ’òò6†ævW0 ’òð ’òòv÷&–rr7F÷&W2F†R÷&–v–æÂ7FFRöbF†R&÷W'G ’òð ’òòvFBr—2W6VBf÷"FF—F—fR7V×VÆF—fR&W7VÇG0 ’òð ’òòwv÷&²r—2÷F–öæÂæB—2öæÇ’&W6VçBf÷"VFW&æ–öâG—W2â—B—2W6V@ ’òòFò7F÷&R–çFW&ÖVF–FRVFW&æ–öâ×VÇF—Æ–6F–öâ&W7VÇG0  —7v—F6‚‚G—TæÖR’°  –66RwVFW&æ–öâs  –Ö—„gVæ7F–öâÒF†—2å÷6ÆW'° –Ö—„gVæ7F–öäFF—F—fRÒF†—2å÷6ÆW'FF—F—fS° —6WD–FVçF—G’ÒF†—2å÷6WDFF—F—fT–FVçF—G•VFW&æ–öã°  —F†—2æ'VffW"ÒæWrfÆöCcD'&’‚fÇVU6—¦R¢b“° —F†—2å÷v÷&´–æFW‚ÒS° –'&V³°  –66Rw7G&–ærs  –66Rv&ööÂs  –Ö—„gVæ7F–öâÒF†—2å÷6VÆV7C°  ’òòW6RF†R&VwVÆ"Ö—‚gVæ7F–öâæBf÷"FF—F—fRöâF†W6RG—W2À ’òòFF—F—fR—2æ÷B&VÆWfçBf÷"æöâÖçVÖW&–2G—W0 –Ö—„gVæ7F–öäFF—F—fRÒF†—2å÷6VÆV7C°  —6WD–FVçF—G’ÒF†—2å÷6WDFF—F—fT–FVçF—G”÷F†W#°  —F†—2æ'VffW"ÒæWr'&’‚fÇVU6—¦R¢R“° –'&V³°  –FVfVÇC  –Ö—„gVæ7F–öâÒF†—2åöÆW'° –Ö—„gVæ7F–öäFF—F—fRÒF†—2åöÆW'FF—F—fS° —6WD–FVçF—G’ÒF†—2å÷6WDFF—F—fT–FVçF—G”çVÖW&–3°  —F†—2æ'VffW"ÒæWrfÆöCcD'&’‚fÇVU6—¦R¢R“°  —Ð  —F†—2åöÖ—„'VffW%&Vv–öâÒÖ—„gVæ7F–öã° —F†—2åöÖ—„'VffW%&Vv–öäFF—F—fRÒÖ—„gVæ7F–öäFF—F—fS° —F†—2å÷6WD–FVçF—G’Ò6WD–FVçF—G“° —F†—2åö÷&–t–æFW‚Ò3° —F†—2åöFD–æFW‚ÒC°  —F†—2æ7V×VÆF—fUvV–v‡BÒ° —F†—2æ7V×VÆF—fUvV–v‡DFF—F—fRÒ°  —F†—2çW6T6÷VçBÒ° —F†—2ç&VfW&Væ6T6÷VçBÒ°  —Ð  ’òò67V×VÆFRFF–âF†Rv–æ6öÖ–ærr&Vv–öâ–çFòv67SÆ“âp –67V×VÆFR‚67T–æFW‚ÂvV–v‡B’°  ’òòæ÷FS¢†–Ç’67V×VÆF–æræ÷F†–ærv†VâvV–v‡BÒÂF†R6ÆÆW"¶æ÷w0 ’òòF†RvV–v‡BæB6†÷VÆFâwB†fRÖFRF†R6ÆÂ–âF†Rf—'7BÆ6P  –6öç7B'VffW"ÒF†—2æ'VffW"À —7G&–FRÒF†—2çfÇVU6—¦RÀ –öfg6WBÒ67T–æFW‚¢7G&–FR²7G&–FS°  –ÆWB7W'&VçEvV–v‡BÒF†—2æ7V×VÆF—fUvV–v‡C°  ––b‚7W'&VçEvV–v‡BÓÓÒ’°  ’òò67Tâ£Ò–æ6öÖ–ær¢vV–v‡@  –f÷"‚ÆWB’Ò²’ÓÒ7G&–FS²²²’’°  –'VffW%²öfg6WB²’ÒÒ'VffW%²’Ó°  —Ð  –7W'&VçEvV–v‡BÒvV–v‡C°  —ÒVÇ6R°  ’òò67Tâ£Ò67Tâ²–æ6öÖ–ær¢vV–v‡@  –7W'&VçEvV–v‡B³ÒvV–v‡C° –6öç7BÖ—‚ÒvV–v‡Bò7W'&VçEvV–v‡C° —F†—2åöÖ—„'VffW%&Vv–öâ‚'VffW"Âöfg6WBÂÂÖ—‚Â7G&–FR“°  —Ð  —F†—2æ7V×VÆF—fUvV–v‡BÒ7W'&VçEvV–v‡C°  —Ð  ’òò67V×VÆFRFF–âF†Rv–æ6öÖ–ærr&Vv–öâ–çFòvFBp –67V×VÆFTFF—F—fR‚vV–v‡B’°  –6öç7B'VffW"ÒF†—2æ'VffW"À —7G&–FRÒF†—2çfÇVU6—¦RÀ –öfg6WBÒ7G&–FR¢F†—2åöFD–æFWƒ°  ––b‚F†—2æ7V×VÆF—fUvV–v‡DFF—F—fRÓÓÒ’°  ’òòFBÒ–FVçF—G  —F†—2å÷6WD–FVçF—G’‚“°  —Ð  ’òòFB£ÒFB²–æ6öÖ–ær¢vV–v‡@  —F†—2åöÖ—„'VffW%&Vv–öäFF—F—fR‚'VffW"Âöfg6WBÂÂvV–v‡BÂ7G&–FR“° —F†—2æ7V×VÆF—fUvV–v‡DFF—F—fR³ÒvV–v‡C°  —Ð  ’òòÇ’F†R7FFRöbv67SÆ“ârFòF†R&–æF–ærv†Vâ67W2F–ffW  –Ç’‚67T–æFW‚’°  –6öç7B7G&–FRÒF†—2çfÇVU6—¦RÀ –'VffW"ÒF†—2æ'VffW"À –öfg6WBÒ67T–æFW‚¢7G&–FR²7G&–FRÀ  —vV–v‡BÒF†—2æ7V×VÆF—fUvV–v‡BÀ —vV–v‡DFF—F—fRÒF†—2æ7V×VÆF—fUvV–v‡DFF—F—fRÀ  –&–æF–ærÒF†—2æ&–æF–æs°  —F†—2æ7V×VÆF—fUvV–v‡BÒ° —F†—2æ7V×VÆF—fUvV–v‡DFF—F—fRÒ°  ––b‚vV–v‡BÂ’°  ’òò67Tâ£Ò67Tâ²÷&–v–æÂ¢‚Ò7V×VÆF—fUvV–v‡B  –6öç7B÷&–v–æÅfÇVTöfg6WBÒ7G&–FR¢F†—2åö÷&–t–æFWƒ°  —F†—2åöÖ—„'VffW%&Vv–öâ€ –'VffW"Âöfg6WBÂ÷&–v–æÅfÇVTöfg6WBÂÒvV–v‡BÂ7G&–FR“°  —Ð  ––b‚vV–v‡DFF—F—fRâ’°  ’òò67Tâ£Ò67Tâ²FF—F—fR67Tà  —F†—2åöÖ—„'VffW%&Vv–öäFF—F—fR‚'VffW"Âöfg6WBÂF†—2åöFD–æFW‚¢7G&–FRÂÂ7G&–FR“°  —Ð  –f÷"‚ÆWB’Ò7G&–FRÂRÒ7G&–FR²7G&–FS²’ÓÒS²²²’’°  ––b‚'VffW%²’ÒÓÒ'VffW%²’²7G&–FRÒ’°  ’òòfÇVR†26†ævVBÓâWFFR66VæRw&€  –&–æF–ærç6WEfÇVR‚'VffW"Âöfg6WB“° –'&V³°  —Ð  —Ð  —Ð  ’òò&VÖVÖ&W"F†R7FFRöbF†R&÷VæB&÷W'G’æB6÷’—BFò&÷F‚67W0 —6fT÷&–v–æÅ7FFR‚’°  –6öç7B&–æF–ærÒF†—2æ&–æF–æs°  –6öç7B'VffW"ÒF†—2æ'VffW"À —7G&–FRÒF†—2çfÇVU6—¦RÀ  –÷&–v–æÅfÇVTöfg6WBÒ7G&–FR¢F†—2åö÷&–t–æFWƒ°  –&–æF–ærævWEfÇVR‚'VffW"Â÷&–v–æÅfÇVTöfg6WB“°  ’òò67U³âãÒ£Ò÷&–rÒÒ–æ—F–ÆÇ’FWFV7B6†ævW2v–ç7BF†R÷&–v–æÀ –f÷"‚ÆWB’Ò7G&–FRÂRÒ÷&–v–æÅfÇVTöfg6WC²’ÓÒS²²²’’°  –'VffW%²’ÒÒ'VffW%²÷&–v–æÅfÇVTöfg6WB²‚’R7G&–FR’Ó°  —Ð  ’òòFBFò–FVçF—G’f÷"FF—F—fP —F†—2å÷6WD–FVçF—G’‚“°  —F†—2æ7V×VÆF—fUvV–v‡BÒ° —F†—2æ7V×VÆF—fUvV–v‡DFF—F—fRÒ°  —Ð  ’òòÇ’F†R7FFR&Wf–÷W6Ç’F¶Vâf–w6fT÷&–v–æÅ7FFRrFòF†R&–æF–æp —&W7F÷&T÷&–v–æÅ7FFR‚’°  –6öç7B÷&–v–æÅfÇVTöfg6WBÒF†—2çfÇVU6—¦R¢3° —F†—2æ&–æF–ærç6WEfÇVR‚F†—2æ'VffW"Â÷&–v–æÅfÇVTöfg6WB“°  —Ð  •÷6WDFF—F—fT–FVçF—G”çVÖW&–2‚’°  –6öç7B7F'D–æFW‚ÒF†—2åöFD–æFW‚¢F†—2çfÇVU6—¦S° –6öç7BVæD–æFW‚Ò7F'D–æFW‚²F†—2çfÇVU6—¦S°  –f÷"‚ÆWB’Ò7F'D–æFWƒ²’ÂVæD–æFWƒ²’²²’°  —F†—2æ'VffW%²’ÒÒ°  —Ð  —Ð  •÷6WDFF—F—fT–FVçF—G•VFW&æ–öâ‚’°  —F†—2å÷6WDFF—F—fT–FVçF—G”çVÖW&–2‚“° —F†—2æ'VffW%²F†—2åöFD–æFW‚¢F†—2çfÇVU6—¦R²2ÒÒ°  —Ð  •÷6WDFF—F—fT–FVçF—G”÷F†W"‚’°  –6öç7B7F'D–æFW‚ÒF†—2åö÷&–t–æFW‚¢F†—2çfÇVU6—¦S° –6öç7BF&vWD–æFW‚ÒF†—2åöFD–æFW‚¢F†—2çfÇVU6—¦S°  –f÷"‚ÆWB’Ò²’ÂF†—2çfÇVU6—¦S²’²²’°  —F†—2æ'VffW%²F&vWD–æFW‚²’ÒÒF†—2æ'VffW%²7F'D–æFW‚²’Ó°  —Ð  —Ð   ’òòÖ—‚gVæ7F–öç0  •÷6VÆV7B‚'VffW"ÂG7Döfg6WBÂ7&4öfg6WBÂBÂ7G&–FR’°  ––b‚BãÒãR’°  –f÷"‚ÆWB’Ò²’ÓÒ7G&–FS²²²’’°  –'VffW%²G7Döfg6WB²’ÒÒ'VffW%²7&4öfg6WB²’Ó°  —Ð  —Ð  —Ð  •÷6ÆW'‚'VffW"ÂG7Döfg6WBÂ7&4öfg6WBÂB’°  •VFW&æ–öâç6ÆW'fÆB‚'VffW"ÂG7Döfg6WBÂ'VffW"ÂG7Döfg6WBÂ'VffW"Â7&4öfg6WBÂB“°  —Ð  •÷6ÆW'FF—F—fR‚'VffW"ÂG7Döfg6WBÂ7&4öfg6WBÂBÂ7G&–FR’°  –6öç7Bv÷&´öfg6WBÒF†—2å÷v÷&´–æFW‚¢7G&–FS°  ’òò7F÷&R&W7VÇB–â–çFW&ÖVF–FR'VffW"öfg6W@ •VFW&æ–öâæ×VÇF—Ç•VFW&æ–öç4fÆB‚'VffW"Âv÷&´öfg6WBÂ'VffW"ÂG7Döfg6WBÂ'VffW"Â7&4öfg6WB“°  ’òò6ÆW'FòF†R–çFW&ÖVF–FR&W7VÇ@ •VFW&æ–öâç6ÆW'fÆB‚'VffW"ÂG7Döfg6WBÂ'VffW"ÂG7Döfg6WBÂ'VffW"Âv÷&´öfg6WBÂB“°  —Ð  •öÆW'‚'VffW"ÂG7Döfg6WBÂ7&4öfg6WBÂBÂ7G&–FR’°  –6öç7B2ÒÒC°  –f÷"‚ÆWB’Ò²’ÓÒ7G&–FS²²²’’°  –6öç7B¢ÒG7Döfg6WB²“°  –'VffW%²¢ÒÒ'VffW%²¢Ò¢2²'VffW%²7&4öfg6WB²’Ò¢C°  —Ð  —Ð  •öÆW'FF—F—fR‚'VffW"ÂG7Döfg6WBÂ7&4öfg6WBÂBÂ7G&–FR’°  –f÷"‚ÆWB’Ò²’ÓÒ7G&–FS²²²’’°  –6öç7B¢ÒG7Döfg6WB²“°  –'VffW%²¢ÒÒ'VffW%²¢Ò²'VffW%²7&4öfg6WB²’Ò¢C°  —Ð  —Ð §Ð ¢òò6†&7FW'2µÒã¢ò&R&W6W'fVBf÷"G&6²&–æF–ær7–çF‚à¦6öç7Bõ$U4U%dTEô4„%5õ$RÒuÅÅµÅÅÕÅÂã¥ÅÂòs°¦6öç7B÷&W6W'fVE&RÒæWr&VtW‡‚u²r²õ$U4U%dTEô4„%5õ$R²uÒrÂvrr“° ¢òòGFV×G2FòÆÆ÷ræöFRæÖW2g&öÒç’ÆæwVvRâU3Rw2Çv&VvW‡ÖF6†W0¢òòöæÇ’ÆF–â6†&7FW'2ÂæBF†RVæ–6öFRÇ´ÇÒ—2æ÷B–WB7W÷'FVBâ6ð¢òò–ç7FVBÂvRW†6ÇVFR&W6W'fVB6†&7FW'2æBÖF6‚WfW'—F†–ærVÇ6Rà¦6öç7B÷v÷&D6†"Òuµâr²õ$U4U%dTEô4„%5õ$R²uÒs°¦6öç7B÷v÷&D6†$÷$F÷BÒuµâr²õ$U4U%dTEô4„%5õ$Rç&WÆ6R‚uÅÂârÂrr’²uÒs° ¢òò&VçBF—&V7F÷&–W2ÂFVÆ–Ö—FVB'’ròr÷"s¢râ7W'&VçFÇ’VçW6VBÂ'WB×W7@¢òò&RÖF6†VBFò'6RF†R&W7BöbF†RG&6²æÖRà¦6öç7BöF—&V7F÷'•&RÒò¤õõU$Uõò¢òò‚ƒó¥t2µµÂó¥Ò’¢’òç6÷W&6Rç&WÆ6R‚ut2rÂ÷v÷&D6†"“° ¢òòF&vWBæöFRâÖ’6öçF–âv÷&B6†&7FW'2†×¤Õ£Ó•ò’æBrâr÷"rÒrà¦6öç7BöæöFU&RÒò¤õõU$Uõò¢òò…t4ôB²“òòç6÷W&6Rç&WÆ6R‚ut4ôBrÂ÷v÷&D6†$÷$F÷B“° ¢òòö&¦V7BöâF&vWBæöFRÂæB66W76÷"âÖ’æ÷B6öçF–â&W6W'fV@¢òò6†&7FW'2â66W76÷"Ö’6öçF–âç’6†&7FW"W†6WB6Æ÷6–ær'&6¶WBà¦6öç7Böö&¦V7E&RÒò¤õõU$Uõò¢òòƒó¥Ââ…t2²’ƒó¥Å²‚â²•ÅÒ“ò“òòç6÷W&6Rç&WÆ6R‚ut2rÂ÷v÷&D6†"“° ¢òò&÷W'G’æB66W76÷"âÖ’æ÷B6öçF–â&W6W'fVB6†&7FW'2â66W76÷"Ö¢òò6öçF–âç’æöâÖ'&6¶WB6†&7FW'2à¦6öç7B÷&÷W'G•&RÒò¤õõU$Uõò¢òõÂâ…t2²’ƒó¥Å²‚â²•ÅÒ“òòç6÷W&6Rç&WÆ6R‚ut2rÂ÷v÷&D6†"“° ¦6öç7B÷G&6µ&RÒæWr&VtW‡‚rp ’²uâp ’²öF—&V7F÷'•&P ’²öæöFU&P ’²öö&¦V7E&P ’²÷&÷W'G•&P ’²rBp¢“° ¦6öç7B÷7W÷'FVDö&¦V7DæÖW2Ò²vÖFW&–ÂrÂvÖFW&–Ç2rÂv&öæW2rÂvÖrÓ° ¦6Æ726ö×÷6—FR°  –6öç7G'V7F÷"‚F&vWDw&÷WÂF‚Â÷F–öæÅ'6VEF‚’°  –6öç7B'6VEF‚Ò÷F–öæÅ'6VEF‚ÇÂ&÷W'G”&–æF–ærç'6UG&6´æÖR‚F‚“°  —F†—2å÷F&vWDw&÷WÒF&vWDw&÷W° —F†—2åö&–æF–æw2ÒF&vWDw&÷Wç7V'67&–&Uò‚F‚Â'6VEF‚“°  —Ð  –vWEfÇVR‚'&’Âöfg6WB’°  —F†—2æ&–æB‚“²òò&–æBÆÂ&–æF–æp  –6öç7Bf—'7EfÆ–D–æFW‚ÒF†—2å÷F&vWDw&÷Wæä66†VDö&¦V7G5òÀ –&–æF–ærÒF†—2åö&–æF–æw5²f—'7EfÆ–D–æFW‚Ó°  ’òòæBöæÇ’6ÆÂævWEfÇVRöâF†Rf—'7@ ––b‚&–æF–ærÓÒVæFVf–æVB’&–æF–ærævWEfÇVR‚'&’Âöfg6WB“°  —Ð  —6WEfÇVR‚'&’Âöfg6WB’°  –6öç7B&–æF–æw2ÒF†—2åö&–æF–æw3°  –f÷"‚ÆWB’ÒF†—2å÷F&vWDw&÷Wæä66†VDö&¦V7G5òÂâÒ&–æF–æw2æÆVæwFƒ²’ÓÒã²²²’’°  –&–æF–æw5²’Òç6WEfÇVR‚'&’Âöfg6WB“°  —Ð  —Ð  –&–æB‚’°  –6öç7B&–æF–æw2ÒF†—2åö&–æF–æw3°  –f÷"‚ÆWB’ÒF†—2å÷F&vWDw&÷Wæä66†VDö&¦V7G5òÂâÒ&–æF–æw2æÆVæwFƒ²’ÓÒã²²²’’°  –&–æF–æw5²’Òæ&–æB‚“°  —Ð  —Ð  —Væ&–æB‚’°  –6öç7B&–æF–æw2ÒF†—2åö&–æF–æw3°  –f÷"‚ÆWB’ÒF†—2å÷F&vWDw&÷Wæä66†VDö&¦V7G5òÂâÒ&–æF–æw2æÆVæwFƒ²’ÓÒã²²²’’°  –&–æF–æw5²’ÒçVæ&–æB‚“°  —Ð  —Ð §Ð ¢òòæ÷FS¢F†—26Æ72W6W27FFRGFW&âöâW"ÖÖWF†öB&6—3 ¢òòv&–æBr6WG2wF†—2ævWEfÇVRròw6WEfÇVRræB6†F÷w2F†P¢òò&÷F÷G—RfW'6–öâöbF†W6RÖWF†öG2v—F‚öæRF†B&W&W6VçG0¢òòF†R&÷VæB7FFRâv†VâF†R&÷W'G’—2æ÷Bf÷VæBÂF†RÖWF†öG0¢òò&V6öÖRæòÖ÷2à¦6Æ72&÷W'G”&–æF–ær°  –6öç7G'V7F÷"‚&ö÷DæöFRÂF‚Â'6VEF‚’°  —F†—2çF‚ÒFƒ° —F†—2ç'6VEF‚Ò'6VEF‚ÇÂ&÷W'G”&–æF–ærç'6UG&6´æÖR‚F‚“°  —F†—2ææöFRÒ&÷W'G”&–æF–æræf–æDæöFR‚&ö÷DæöFRÂF†—2ç'6VEF‚ææöFTæÖR“°  —F†—2ç&ö÷DæöFRÒ&ö÷DæöFS°  ’òò–æ—F–Â7FFRöbF†W6RÖWF†öG2F†B6ÆÇ2v&–æBp —F†—2ævWEfÇVRÒF†—2åövWEfÇVU÷Væ&÷VæC° —F†—2ç6WEfÇVRÒF†—2å÷6WEfÇVU÷Væ&÷VæC°  —Ð   —7FF–27&VFR‚&ö÷BÂF‚Â'6VEF‚’°  ––b‚‚&ö÷Bbb&ö÷Bæ—4æ–ÖF–öäö&¦V7Dw&÷W’’°  —&WGW&âæWr&÷W'G”&–æF–ær‚&ö÷BÂF‚Â'6VEF‚“°  —ÒVÇ6R°  —&WGW&âæWr&÷W'G”&–æF–ærä6ö×÷6—FR‚&ö÷BÂF‚Â'6VEF‚“°  —Ð  —Ð  ’ò¢  ’¢&WÆ6W276W2v—F‚VæFW'66÷&W2æB&VÖ÷fW2Vç7W÷'FVB6†&7FW'2g&öÐ ’¢æöFRæÖW2ÂFòVç7W&R6ö×F–&–Æ—G’v—F‚'6UG&6´æÖR‚’à ’  ’¢&Ò·7G&–æwÒæÖRæöFRæÖRFò&R6æ—F—¦VBà ’¢&WGW&â·7G&–æwÐ ’¢ð —7FF–26æ—F—¦TæöFTæÖR‚æÖR’°  —&WGW&âæÖRç&WÆ6R‚õÇ2örÂuòr’ç&WÆ6R‚÷&W6W'fVE&RÂrr“°  —Ð  —7FF–2'6UG&6´æÖR‚G&6´æÖR’°  –6öç7BÖF6†W2Ò÷G&6µ&RæW†V2‚G&6´æÖR“°  ––b‚ÖF6†W2ÓÓÒçVÆÂ’°  —F‡&÷ræWrW'&÷"‚u&÷W'G”&–æF–æs¢6ææ÷B'6RG&6´æÖS¢r²G&6´æÖR“°  —Ð  –6öç7B&W7VÇG2Ò° ’òòF—&V7F÷'”æÖS¢ÖF6†W5²ÒÂòò‡G66‡r’7W'&VçFÇ’VçW6V@ –æöFTæÖS¢ÖF6†W5²"ÒÀ –ö&¦V7DæÖS¢ÖF6†W5²2ÒÀ –ö&¦V7D–æFWƒ¢ÖF6†W5²BÒÀ —&÷W'G”æÖS¢ÖF6†W5²RÒÂòò&WV—&V@ —&÷W'G”–æFWƒ¢ÖF6†W5²bÐ —Ó°  –6öç7BÆ7DF÷BÒ&W7VÇG2ææöFTæÖRbb&W7VÇG2ææöFTæÖRæÆ7D–æFW„öb‚râr“°  ––b‚Æ7DF÷BÓÒVæFVf–æVBbbÆ7DF÷BÓÒÒ’°  –6öç7Bö&¦V7DæÖRÒ&W7VÇG2ææöFTæÖRç7V'7G&–ær‚Æ7DF÷B²“°  ’òòö&¦V7BæÖW2×W7B&R6†V6¶VBv–ç7BâÆÆ÷vÆ—7Bâ÷F†W'v—6RÂF†W&P ’òò—2æòv’Fò'6Rvföòæ&"æ&¢s¢v&¢r×W7B&R&÷W'G’Â'W@ ’òòv&"r6÷VÆB&RF†Rö&¦V7DæÖRÂ÷"'BöbæöFTæÖR‡v†–6‚6à ’òò–æ6ÇVFRrâr6†&7FW'2’à ––b‚÷7W÷'FVDö&¦V7DæÖW2æ–æFW„öb‚ö&¦V7DæÖR’ÓÒÒ’°  —&W7VÇG2ææöFTæÖRÒ&W7VÇG2ææöFTæÖRç7V'7G&–ær‚ÂÆ7DF÷B“° —&W7VÇG2æö&¦V7DæÖRÒö&¦V7DæÖS°  —Ð  —Ð  ––b‚&W7VÇG2ç&÷W'G”æÖRÓÓÒçVÆÂÇÂ&W7VÇG2ç&÷W'G”æÖRæÆVæwF‚ÓÓÒ’°  —F‡&÷ræWrW'&÷"‚u&÷W'G”&–æF–æs¢6âæ÷B'6R&÷W'G”æÖRg&öÒG&6´æÖS¢r²G&6´æÖR“°  —Ð  —&WGW&â&W7VÇG3°  —Ð  —7FF–2f–æDæöFR‚&ö÷BÂæöFTæÖR’°  ––b‚æöFTæÖRÓÓÒVæFVf–æVBÇÂæöFTæÖRÓÓÒrrÇÂæöFTæÖRÓÓÒrârÇÂæöFTæÖRÓÓÒÒÇÂæöFTæÖRÓÓÒ&ö÷BææÖRÇÂæöFTæÖRÓÓÒ&ö÷BçWV–B’°  —&WGW&â&ö÷C°  —Ð  ’òò6V&6‚–çFò6¶VÆWFöâ&öæW2à ––b‚&ö÷Bç6¶VÆWFöâ’°  –6öç7B&öæRÒ&ö÷Bç6¶VÆWFöâævWD&öæT'”æÖR‚æöFTæÖR“°  ––b‚&öæRÓÒVæFVf–æVB’°  —&WGW&â&öæS°  —Ð  —Ð  ’òò6V&6‚–çFòæöFR7V'G&VRà ––b‚&ö÷Bæ6†–ÆG&Vâ’°  –6öç7B6V&6„æöFU7V'G&VRÒgVæ7F–öâ‚6†–ÆG&Vâ’°  –f÷"‚ÆWB’Ò²’Â6†–ÆG&VâæÆVæwFƒ²’²²’°  –6öç7B6†–ÆDæöFRÒ6†–ÆG&Vå²’Ó°  ––b‚6†–ÆDæöFRææÖRÓÓÒæöFTæÖRÇÂ6†–ÆDæöFRçWV–BÓÓÒæöFTæÖR’°  —&WGW&â6†–ÆDæöFS°  —Ð  –6öç7B&W7VÇBÒ6V&6„æöFU7V'G&VR‚6†–ÆDæöFRæ6†–ÆG&Vâ“°  ––b‚&W7VÇB’&WGW&â&W7VÇC°  —Ð  —&WGW&âçVÆÃ°  —Ó°  –6öç7B7V%G&VTæöFRÒ6V&6„æöFU7V'G&VR‚&ö÷Bæ6†–ÆG&Vâ“°  ––b‚7V%G&VTæöFR’°  —&WGW&â7V%G&VTæöFS°  —Ð  —Ð  —&WGW&âçVÆÃ°  —Ð  ’òòF†W6R&RW6VBFò&&–æB"æöæW†—7FVçB&÷W'G •övWEfÇVU÷Væf–Æ&ÆR‚’·Ð •÷6WEfÇVU÷Væf–Æ&ÆR‚’·Ð  ’òòvWGFW'0  •övWEfÇVUöF—&V7B‚'VffW"Âöfg6WB’°  –'VffW%²öfg6WBÒÒF†—2çF&vWDö&¦V7E²F†—2ç&÷W'G”æÖRÓ°  —Ð  •övWEfÇVUö'&’‚'VffW"Âöfg6WB’°  –6öç7B6÷W&6RÒF†—2ç&W6öÇfVE&÷W'G“°  –f÷"‚ÆWB’ÒÂâÒ6÷W&6RæÆVæwFƒ²’ÓÒã²²²’’°  –'VffW%²öfg6WB²²ÒÒ6÷W&6U²’Ó°  —Ð  —Ð  •övWEfÇVUö'&”VÆVÖVçB‚'VffW"Âöfg6WB’°  –'VffW%²öfg6WBÒÒF†—2ç&W6öÇfVE&÷W'G•²F†—2ç&÷W'G”–æFW‚Ó°  —Ð  •övWEfÇVU÷Fô'&’‚'VffW"Âöfg6WB’°  —F†—2ç&W6öÇfVE&÷W'G’çFô'&’‚'VffW"Âöfg6WB“°  —Ð  ’òòF—&V7@  •÷6WEfÇVUöF—&V7B‚'VffW"Âöfg6WB’°  —F†—2çF&vWDö&¦V7E²F†—2ç&÷W'G”æÖRÒÒ'VffW%²öfg6WBÓ°  —Ð  •÷6WEfÇVUöF—&V7E÷6WDæVVG5WFFR‚'VffW"Âöfg6WB’°  —F†—2çF&vWDö&¦V7E²F†—2ç&÷W'G”æÖRÒÒ'VffW%²öfg6WBÓ° —F†—2çF&vWDö&¦V7BææVVG5WFFRÒG'VS°  —Ð  •÷6WEfÇVUöF—&V7E÷6WDÖG&—…v÷&ÆDæVVG5WFFR‚'VffW"Âöfg6WB’°  —F†—2çF&vWDö&¦V7E²F†—2ç&÷W'G”æÖRÒÒ'VffW%²öfg6WBÓ° —F†—2çF&vWDö&¦V7BæÖG&—…v÷&ÆDæVVG5WFFRÒG'VS°  —Ð  ’òòVçF—&T'&  •÷6WEfÇVUö'&’‚'VffW"Âöfg6WB’°  –6öç7BFW7BÒF†—2ç&W6öÇfVE&÷W'G“°  –f÷"‚ÆWB’ÒÂâÒFW7BæÆVæwFƒ²’ÓÒã²²²’’°  –FW7E²’ÒÒ'VffW%²öfg6WB²²Ó°  —Ð  —Ð  •÷6WEfÇVUö'&•÷6WDæVVG5WFFR‚'VffW"Âöfg6WB’°  –6öç7BFW7BÒF†—2ç&W6öÇfVE&÷W'G“°  –f÷"‚ÆWB’ÒÂâÒFW7BæÆVæwFƒ²’ÓÒã²²²’’°  –FW7E²’ÒÒ'VffW%²öfg6WB²²Ó°  —Ð  —F†—2çF&vWDö&¦V7BææVVG5WFFRÒG'VS°  —Ð  •÷6WEfÇVUö'&•÷6WDÖG&—…v÷&ÆDæVVG5WFFR‚'VffW"Âöfg6WB’°  –6öç7BFW7BÒF†—2ç&W6öÇfVE&÷W'G“°  –f÷"‚ÆWB’ÒÂâÒFW7BæÆVæwFƒ²’ÓÒã²²²’’°  –FW7E²’ÒÒ'VffW%²öfg6WB²²Ó°  —Ð  —F†—2çF&vWDö&¦V7BæÖG&—…v÷&ÆDæVVG5WFFRÒG'VS°  —Ð  ’òò'&”VÆVÖVç@  •÷6WEfÇVUö'&”VÆVÖVçB‚'VffW"Âöfg6WB’°  —F†—2ç&W6öÇfVE&÷W'G•²F†—2ç&÷W'G”–æFW‚ÒÒ'VffW%²öfg6WBÓ°  —Ð  •÷6WEfÇVUö'&”VÆVÖVçE÷6WDæVVG5WFFR‚'VffW"Âöfg6WB’°  —F†—2ç&W6öÇfVE&÷W'G•²F†—2ç&÷W'G”–æFW‚ÒÒ'VffW%²öfg6WBÓ° —F†—2çF&vWDö&¦V7BææVVG5WFFRÒG'VS°  —Ð  •÷6WEfÇVUö'&”VÆVÖVçE÷6WDÖG&—…v÷&ÆDæVVG5WFFR‚'VffW"Âöfg6WB’°  —F†—2ç&W6öÇfVE&÷W'G•²F†—2ç&÷W'G”–æFW‚ÒÒ'VffW%²öfg6WBÓ° —F†—2çF&vWDö&¦V7BæÖG&—…v÷&ÆDæVVG5WFFRÒG'VS°  —Ð  ’òò†5Fôg&öÔ'&  •÷6WEfÇVUög&öÔ'&’‚'VffW"Âöfg6WB’°  —F†—2ç&W6öÇfVE&÷W'G’æg&öÔ'&’‚'VffW"Âöfg6WB“°  —Ð  •÷6WEfÇVUög&öÔ'&•÷6WDæVVG5WFFR‚'VffW"Âöfg6WB’°  —F†—2ç&W6öÇfVE&÷W'G’æg&öÔ'&’‚'VffW"Âöfg6WB“° —F†—2çF&vWDö&¦V7BææVVG5WFFRÒG'VS°  —Ð  •÷6WEfÇVUög&öÔ'&•÷6WDÖG&—…v÷&ÆDæVVG5WFFR‚'VffW"Âöfg6WB’°  —F†—2ç&W6öÇfVE&÷W'G’æg&öÔ'&’‚'VffW"Âöfg6WB“° —F†—2çF&vWDö&¦V7BæÖG&—…v÷&ÆDæVVG5WFFRÒG'VS°  —Ð  •övWEfÇVU÷Væ&÷VæB‚F&vWD'&’Âöfg6WB’°  —F†—2æ&–æB‚“° —F†—2ævWEfÇVR‚F&vWD'&’Âöfg6WB“°  —Ð  •÷6WEfÇVU÷Væ&÷VæB‚6÷W&6T'&’Âöfg6WB’°  —F†—2æ&–æB‚“° —F†—2ç6WEfÇVR‚6÷W&6T'&’Âöfg6WB“°  —Ð  ’òò7&VFRvWGFW"ò6WGFW"—"f÷"&÷W'G’–âF†R66VæRw&€ –&–æB‚’°  –ÆWBF&vWDö&¦V7BÒF†—2ææöFS° –6öç7B'6VEF‚ÒF†—2ç'6VEFƒ°  –6öç7Bö&¦V7DæÖRÒ'6VEF‚æö&¦V7DæÖS° –6öç7B&÷W'G”æÖRÒ'6VEF‚ç&÷W'G”æÖS° –ÆWB&÷W'G”–æFW‚Ò'6VEF‚ç&÷W'G”–æFWƒ°  ––b‚F&vWDö&¦V7B’°  —F&vWDö&¦V7BÒ&÷W'G”&–æF–æræf–æDæöFR‚F†—2ç&ö÷DæöFRÂ'6VEF‚ææöFTæÖR“°  —F†—2ææöFRÒF&vWDö&¦V7C°  —Ð  ’òò6WBf–Â7FFR6òvR6â§W7Bw&WGW&âröâW'&÷  —F†—2ævWEfÇVRÒF†—2åövWEfÇVU÷Væf–Æ&ÆS° —F†—2ç6WEfÇVRÒF†—2å÷6WEfÇVU÷Væf–Æ&ÆS°  ’òòVç7W&RF†W&R—2fÇVRæöFP ––b‚F&vWDö&¦V7B’°  –6öç6öÆRçv&â‚uD…$TRå&÷W'G”&–æF–æs¢æòF&vWBæöFRf÷VæBf÷"G&6³¢r²F†—2çF‚²râr“° —&WGW&ã°  —Ð  ––b‚ö&¦V7DæÖR’°  –ÆWBö&¦V7D–æFW‚Ò'6VEF‚æö&¦V7D–æFWƒ°  ’òò7V6–Â66W2vW&RvRæVVBFò&V6‚FVWW"–çFòF†R†–W&&6‡’FòvWBF†Rf6RÖFW&–Ç2âââà —7v—F6‚‚ö&¦V7DæÖR’°  –66RvÖFW&–Ç2s   ––b‚F&vWDö&¦V7BæÖFW&–Â’°  –6öç6öÆRæW'&÷"‚uD…$TRå&÷W'G”&–æF–æs¢6âæ÷B&–æBFòÖFW&–Â2æöFRFöW2æ÷B†fRÖFW&–ÂârÂF†—2“° —&WGW&ã°  —Ð  ––b‚F&vWDö&¦V7BæÖFW&–ÂæÖFW&–Ç2’°  –6öç6öÆRæW'&÷"‚uD…$TRå&÷W'G”&–æF–æs¢6âæ÷B&–æBFòÖFW&–ÂæÖFW&–Ç22æöFRæÖFW&–ÂFöW2æ÷B†fRÖFW&–Ç2'&’ârÂF†—2“° —&WGW&ã°  —Ð  —F&vWDö&¦V7BÒF&vWDö&¦V7BæÖFW&–ÂæÖFW&–Ç3°  –'&V³°  –66Rv&öæW2s   ––b‚F&vWDö&¦V7Bç6¶VÆWFöâ’°  –6öç6öÆRæW'&÷"‚uD…$TRå&÷W'G”&–æF–æs¢6âæ÷B&–æBFò&öæW22æöFRFöW2æ÷B†fR6¶VÆWFöâârÂF†—2“° —&WGW&ã°  —Ð  ’òò÷FVçF–ÂgWGW&R÷F–Ö—¦F–öã¢6¶—F†—2–b&÷W'G”–æFW‚—2Ç&VG’â–çFVvW  ’òòæB6öçfW'BF†R–çFVvW"7G&–ærFòG'VR–çFVvW"à  —F&vWDö&¦V7BÒF&vWDö&¦V7Bç6¶VÆWFöâæ&öæW3°  ’òò7W÷'B&W6öÇf–ærÖ÷'…F&vWBæÖW2–çFò–æF–6W2à –f÷"‚ÆWB’Ò²’ÂF&vWDö&¦V7BæÆVæwFƒ²’²²’°  ––b‚F&vWDö&¦V7E²’ÒææÖRÓÓÒö&¦V7D–æFW‚’°  –ö&¦V7D–æFW‚Ò“° –'&V³°  —Ð  —Ð  –'&V³°  –66RvÖs   ––b‚vÖr–âF&vWDö&¦V7B’°  —F&vWDö&¦V7BÒF&vWDö&¦V7BæÖ° –'&V³°  —Ð  ––b‚F&vWDö&¦V7BæÖFW&–Â’°  –6öç6öÆRæW'&÷"‚uD…$TRå&÷W'G”&–æF–æs¢6âæ÷B&–æBFòÖFW&–Â2æöFRFöW2æ÷B†fRÖFW&–ÂârÂF†—2“° —&WGW&ã°  —Ð  ––b‚F&vWDö&¦V7BæÖFW&–ÂæÖ’°  –6öç6öÆRæW'&÷"‚uD…$TRå&÷W'G”&–æF–æs¢6âæ÷B&–æBFòÖFW&–ÂæÖ2æöFRæÖFW&–ÂFöW2æ÷B†fRÖârÂF†—2“° —&WGW&ã°  —Ð  —F&vWDö&¦V7BÒF&vWDö&¦V7BæÖFW&–ÂæÖ° –'&V³°  –FVfVÇC   ––b‚F&vWDö&¦V7E²ö&¦V7DæÖRÒÓÓÒVæFVf–æVB’°  –6öç6öÆRæW'&÷"‚uD…$TRå&÷W'G”&–æF–æs¢6âæ÷B&–æBFòö&¦V7DæÖRöbæöFRVæFVf–æVBârÂF†—2“° —&WGW&ã°  —Ð  —F&vWDö&¦V7BÒF&vWDö&¦V7E²ö&¦V7DæÖRÓ°  —Ð   ––b‚ö&¦V7D–æFW‚ÓÒVæFVf–æVB’°  ––b‚F&vWDö&¦V7E²ö&¦V7D–æFW‚ÒÓÓÒVæFVf–æVB’°  –6öç6öÆRæW'&÷"‚uD…$TRå&÷W'G”&–æF–æs¢G'––ærFò&–æBFòö&¦V7D–æFW‚öbö&¦V7DæÖRÂ'WB—2VæFVf–æVBârÂF†—2ÂF&vWDö&¦V7B“° —&WGW&ã°  —Ð  —F&vWDö&¦V7BÒF&vWDö&¦V7E²ö&¦V7D–æFW‚Ó°  —Ð  —Ð  ’òò&W6öÇfR&÷W'G –6öç7BæöFU&÷W'G’ÒF&vWDö&¦V7E²&÷W'G”æÖRÓ°  ––b‚æöFU&÷W'G’ÓÓÒVæFVf–æVB’°  –6öç7BæöFTæÖRÒ'6VEF‚ææöFTæÖS°  –6öç6öÆRæW'&÷"‚uD…$TRå&÷W'G”&–æF–æs¢G'––ærFòWFFR&÷W'G’f÷"G&6³¢r²æöFTæÖR° ’râr²&÷W'G”æÖR²r'WB—Bv6åÂwBf÷VæBârÂF&vWDö&¦V7B“° —&WGW&ã°  —Ð  ’òòFWFW&Ö–æRfW'6–öæ–ær66†VÖP –ÆWBfW'6–öæ–ærÒF†—2åfW'6–öæ–æräæöæS°  —F†—2çF&vWDö&¦V7BÒF&vWDö&¦V7C°  ––b‚F&vWDö&¦V7BææVVG5WFFRÓÒVæFVf–æVB’²òòÖFW&–À  —fW'6–öæ–ærÒF†—2åfW'6–öæ–æräæVVG5WFFS°  —ÒVÇ6R–b‚F&vWDö&¦V7BæÖG&—…v÷&ÆDæVVG5WFFRÓÒVæFVf–æVB’²òòæöFRG&ç6f÷&Ð  —fW'6–öæ–ærÒF†—2åfW'6–öæ–æräÖG&—…v÷&ÆDæVVG5WFFS°  —Ð  ’òòFWFW&Ö–æR†÷rF†R&÷W'G’vWG2&÷Væ@ –ÆWB&–æF–æuG—RÒF†—2ä&–æF–æuG—RäF—&V7C°  ––b‚&÷W'G”–æFW‚ÓÒVæFVf–æVB’°  ’òò66W727V"VÆVÖVçBöbF†R&÷W'G’'&’†öæÇ’&–Ö—F—fW2&R7W÷'FVB&–v‡Bæ÷r  ––b‚&÷W'G”æÖRÓÓÒvÖ÷'…F&vWD–æfÇVVæ6W2r’°  ’òò÷FVçF–Â÷F–Ö—¦F–öâÂ6¶—F†—2–b&÷W'G”–æFW‚—2Ç&VG’â–çFVvW"ÂæB6öçfW'BF†R–çFVvW"7G&–ærFòG'VR–çFVvW"à  ’òò7W÷'B&W6öÇf–ærÖ÷'…F&vWBæÖW2–çFò–æF–6W2à ––b‚F&vWDö&¦V7BævVöÖWG'’’°  –6öç6öÆRæW'&÷"‚uD…$TRå&÷W'G”&–æF–æs¢6âæ÷B&–æBFòÖ÷'…F&vWD–æfÇVVæ6W2&V6W6RæöFRFöW2æ÷B†fRvVöÖWG'’ârÂF†—2“° —&WGW&ã°  —Ð  ––b‚F&vWDö&¦V7BævVöÖWG'’æÖ÷'„GG&–'WFW2’°  –6öç6öÆRæW'&÷"‚uD…$TRå&÷W'G”&–æF–æs¢6âæ÷B&–æBFòÖ÷'…F&vWD–æfÇVVæ6W2&V6W6RæöFRFöW2æ÷B†fRvVöÖWG'’æÖ÷'„GG&–'WFW2ârÂF†—2“° —&WGW&ã°  —Ð  ––b‚F&vWDö&¦V7BæÖ÷'…F&vWDF–7F–öæ'•²&÷W'G”–æFW‚ÒÓÒVæFVf–æVB’°  —&÷W'G”–æFW‚ÒF&vWDö&¦V7BæÖ÷'…F&vWDF–7F–öæ'•²&÷W'G”–æFW‚Ó°  —Ð  —Ð  –&–æF–æuG—RÒF†—2ä&–æF–æuG—Rä'&”VÆVÖVçC°  —F†—2ç&W6öÇfVE&÷W'G’ÒæöFU&÷W'G“° —F†—2ç&÷W'G”–æFW‚Ò&÷W'G”–æFWƒ°  —ÒVÇ6R–b‚æöFU&÷W'G’æg&öÔ'&’ÓÒVæFVf–æVBbbæöFU&÷W'G’çFô'&’ÓÒVæFVf–æVB’°  ’òò×W7BW6R6÷’f÷"ö&¦V7C4BäWVÆW"õVFW&æ–öà  –&–æF–æuG—RÒF†—2ä&–æF–æuG—Rä†4g&öÕFô'&“°  —F†—2ç&W6öÇfVE&÷W'G’ÒæöFU&÷W'G“°  —ÒVÇ6R–b‚'&’æ—4'&’‚æöFU&÷W'G’’’°  –&–æF–æuG—RÒF†—2ä&–æF–æuG—RäVçF—&T'&“°  —F†—2ç&W6öÇfVE&÷W'G’ÒæöFU&÷W'G“°  —ÒVÇ6R°  —F†—2ç&÷W'G”æÖRÒ&÷W'G”æÖS°  —Ð  ’òò6VÆV7BvWGFW"ò6WGFW  —F†—2ævWEfÇVRÒF†—2ävWGFW$'”&–æF–æuG—U²&–æF–æuG—RÓ° —F†—2ç6WEfÇVRÒF†—2å6WGFW$'”&–æF–æuG—TæEfW'6–öæ–æu²&–æF–æuG—RÕ²fW'6–öæ–ærÓ°  —Ð  —Væ&–æB‚’°  —F†—2ææöFRÒçVÆÃ°  ’òò&6²FòF†R&÷F÷G—RfW'6–öâöbvWEfÇVRò6WEfÇVP ’òòæ÷FS¢fö–F–ærFò×WFFRF†R6†RöbwF†—2rf–vFVÆWFRp —F†—2ævWEfÇVRÒF†—2åövWEfÇVU÷Væ&÷VæC° —F†—2ç6WEfÇVRÒF†—2å÷6WEfÇVU÷Væ&÷VæC°  —Ð §Ð ¥&÷W'G”&–æF–ærä6ö×÷6—FRÒ6ö×÷6—FS° ¥&÷W'G”&–æF–ærç&÷F÷G—Rä&–æF–æuG—RÒ° ”F—&V7C¢À ”VçF—&T'&“¢À ”'&”VÆVÖVçC¢"À ”†4g&öÕFô'&“¢0§Ó° ¥&÷W'G”&–æF–ærç&÷F÷G—RåfW'6–öæ–ærÒ° ”æöæS¢À ”æVVG5WFFS¢À ”ÖG&—…v÷&ÆDæVVG5WFFS¢ §Ó° ¥&÷W'G”&–æF–ærç&÷F÷G—RävWGFW$'”&–æF–æuG—RÒ°  •&÷W'G”&–æF–ærç&÷F÷G—RåövWEfÇVUöF—&V7BÀ •&÷W'G”&–æF–ærç&÷F÷G—RåövWEfÇVUö'&’À •&÷W'G”&–æF–ærç&÷F÷G—RåövWEfÇVUö'&”VÆVÖVçBÀ •&÷W'G”&–æF–ærç&÷F÷G—RåövWEfÇVU÷Fô'&’À ¥Ó° ¥&÷W'G”&–æF–ærç&÷F÷G—Rå6WGFW$'”&–æF–æuG—TæEfW'6–öæ–ærÒ°  •° ’òòF—&V7@ •&÷W'G”&–æF–ærç&÷F÷G—Rå÷6WEfÇVUöF—&V7BÀ •&÷W'G”&–æF–ærç&÷F÷G—Rå÷6WEfÇVUöF—&V7E÷6WDæVVG5WFFRÀ •&÷W'G”&–æF–ærç&÷F÷G—Rå÷6WEfÇVUöF—&V7E÷6WDÖG&—…v÷&ÆDæVVG5WFFRÀ  •ÒÂ°  ’òòVçF—&T'&  •&÷W'G”&–æF–ærç&÷F÷G—Rå÷6WEfÇVUö'&’À •&÷W'G”&–æF–ærç&÷F÷G—Rå÷6WEfÇVUö'&•÷6WDæVVG5WFFRÀ •&÷W'G”&–æF–ærç&÷F÷G—Rå÷6WEfÇVUö'&•÷6WDÖG&—…v÷&ÆDæVVG5WFFRÀ  •ÒÂ°  ’òò'&”VÆVÖVç@ •&÷W'G”&–æF–ærç&÷F÷G—Rå÷6WEfÇVUö'&”VÆVÖVçBÀ •&÷W'G”&–æF–ærç&÷F÷G—Rå÷6WEfÇVUö'&”VÆVÖVçE÷6WDæVVG5WFFRÀ •&÷W'G”&–æF–ærç&÷F÷G—Rå÷6WEfÇVUö'&”VÆVÖVçE÷6WDÖG&—…v÷&ÆDæVVG5WFFRÀ  •ÒÂ°  ’òò†5Fôg&öÔ'& •&÷W'G”&–æF–ærç&÷F÷G—Rå÷6WEfÇVUög&öÔ'&’À •&÷W'G”&–æF–ærç&÷F÷G—Rå÷6WEfÇVUög&öÔ'&•÷6WDæVVG5WFFRÀ •&÷W'G”&–æF–ærç&÷F÷G—Rå÷6WEfÇVUög&öÔ'&•÷6WDÖG&—…v÷&ÆDæVVG5WFFRÀ  •Ð ¥Ó° ¢ò¢ ¢ ¢¢w&÷Wöbö&¦V7G2F†B&V6V—fW26†&VBæ–ÖF–öâ7FFRà¢ ¢¢W6vS ¢ ¢¢ÒFBö&¦V7G2–÷Rv÷VÆB÷F†W'v—6R722w&ö÷BrFòF†P¢¢6öç7G'V7F÷"÷"F†Ræ6Æ—7F–öâÖWF†öBöbæ–ÖF–öäÖ—†W"à¢ ¢¢Ò–ç7FVB72F†—2ö&¦V7B2w&ö÷Brà¢ ¢¢Ò–÷R6âÇ6òFBæB&VÖ÷fRö&¦V7G2ÆFW"v†VâF†RÖ—†W ¢¢—2'Vææ–ærà¢ ¢¢æ÷FS ¢ ¢¢ö&¦V7G2öbF†—26Æ72V"2öæRö&¦V7BFòF†RÖ—†W"À¢¢6ò66†R6öçG&öÂöbF†R–æF—f–GVÂö&¦V7G2×W7B&RFöæP¢¢öâF†Rw&÷Wà¢ ¢¢Æ–Ö—FF–öã ¢ ¢¢ÒF†Ræ–ÖFVB&÷W'F–W2×W7B&R6ö×F–&ÆRÖöærF†P¢¢ÆÂö&¦V7G2–âF†Rw&÷Wà¢ ¢¢Ò6–ævÆR&÷W'G’6âV—F†W"&R6öçG&öÆÆVBF‡&÷Vv‚¢¢F&vWBw&÷W÷"F—&V7FÇ’Â'WBæ÷B&÷F‚à¢¢ð ¦6Æ72æ–ÖF–öäö&¦V7Dw&÷W°  –6öç7G'V7F÷"‚’°  —F†—2æ—4æ–ÖF–öäö&¦V7Dw&÷WÒG'VS°  —F†—2çWV–BÒvVæW&FUUT”B‚“°  ’òò66†VBö&¦V7G2föÆÆ÷vVB'’F†R7F—fRöæW0 —F†—2åöö&¦V7G2Ò'&’ç&÷F÷G—Rç6Æ–6Ræ6ÆÂ‚&wVÖVçG2“°  —F†—2æä66†VDö&¦V7G5òÒ²òòF‡&W6†öÆ@ ’òòæ÷FS¢&VB'’&÷W'G”&–æF–ærä6ö×÷6—FP  –6öç7B–æF–6W2Ò·Ó° —F†—2åö–æF–6W4'•UT”BÒ–æF–6W3²òòf÷"&öö¶¶VW–æp  –f÷"‚ÆWB’ÒÂâÒ&wVÖVçG2æÆVæwFƒ²’ÓÒã²²²’’°  ––æF–6W5²&wVÖVçG5²’ÒçWV–BÒÒ“°  —Ð  —F†—2å÷F‡2ÒµÓ²òò–ç6–FS¢7G&–æp —F†—2å÷'6VEF‡2ÒµÓ²òò–ç6–FS¢²vRFöâwB6&RÂ†W&RÐ —F†—2åö&–æF–æw2ÒµÓ²òò–ç6–FS¢'&“Â&÷W'G”&–æF–ærà —F†—2åö&–æF–æw4–æF–6W4'•F‚Ò·Ó²òò–ç6–FS¢–æF–6W2–âF†W6R'&—0  –6öç7B66÷RÒF†—3°  —F†—2ç7FG2Ò°  –ö&¦V7G3¢° –vWBF÷FÂ‚’°  —&WGW&â66÷Råöö&¦V7G2æÆVæwFƒ°  —ÒÀ –vWB–åW6R‚’°  —&WGW&âF†—2çF÷FÂÒ66÷Ræä66†VDö&¦V7G5ó°  —Ð —ÒÀ –vWB&–æF–æw5W$ö&¦V7B‚’°  —&WGW&â66÷Råö&–æF–æw2æÆVæwFƒ°  —Ð  —Ó°  —Ð  –FB‚’°  –6öç7Bö&¦V7G2ÒF†—2åöö&¦V7G2À ––æF–6W4'•UT”BÒF†—2åö–æF–6W4'•UT”BÀ —F‡2ÒF†—2å÷F‡2À —'6VEF‡2ÒF†—2å÷'6VEF‡2À –&–æF–æw2ÒF†—2åö&–æF–æw2À –ä&–æF–æw2Ò&–æF–æw2æÆVæwFƒ°  –ÆWB¶æ÷väö&¦V7BÒVæFVf–æVBÀ –äö&¦V7G2Òö&¦V7G2æÆVæwF‚À –ä66†VDö&¦V7G2ÒF†—2æä66†VDö&¦V7G5ó°  –f÷"‚ÆWB’ÒÂâÒ&wVÖVçG2æÆVæwFƒ²’ÓÒã²²²’’°  –6öç7Bö&¦V7BÒ&wVÖVçG5²’ÒÀ —WV–BÒö&¦V7BçWV–C° –ÆWB–æFW‚Ò–æF–6W4'•UT”E²WV–BÓ°  ––b‚–æFW‚ÓÓÒVæFVf–æVB’°  ’òòVæ¶æ÷vâö&¦V7BÓâFB—BFòF†R5D•dR&Vv–öà  ––æFW‚Òäö&¦V7G2²³° ––æF–6W4'•UT”E²WV–BÒÒ–æFWƒ° –ö&¦V7G2çW6‚‚ö&¦V7B“°  ’òò66÷VçF–ær—2FöæRÂæ÷rFòF†R6ÖRf÷"ÆÂ&–æF–æw0  –f÷"‚ÆWB¢ÒÂÒÒä&–æF–æw3²¢ÓÒÓ²²²¢’°  –&–æF–æw5²¢ÒçW6‚‚æWr&÷W'G”&–æF–ær‚ö&¦V7BÂF‡5²¢ÒÂ'6VEF‡5²¢Ò’“°  —Ð  —ÒVÇ6R–b‚–æFW‚Âä66†VDö&¦V7G2’°  –¶æ÷väö&¦V7BÒö&¦V7G5²–æFW‚Ó°  ’òòÖ÷fRW†—7F–ærö&¦V7BFòF†R5D•dR&Vv–öà  –6öç7Bf—'7D7F—fT–æFW‚ÒÒÒä66†VDö&¦V7G2À –Æ7D66†VDö&¦V7BÒö&¦V7G5²f—'7D7F—fT–æFW‚Ó°  ––æF–6W4'•UT”E²Æ7D66†VDö&¦V7BçWV–BÒÒ–æFWƒ° –ö&¦V7G5²–æFW‚ÒÒÆ7D66†VDö&¦V7C°  ––æF–6W4'•UT”E²WV–BÒÒf—'7D7F—fT–æFWƒ° –ö&¦V7G5²f—'7D7F—fT–æFW‚ÒÒö&¦V7C°  ’òò66÷VçF–ær—2FöæRÂæ÷rFòF†R6ÖRf÷"ÆÂ&–æF–æw0  –f÷"‚ÆWB¢ÒÂÒÒä&–æF–æw3²¢ÓÒÓ²²²¢’°  –6öç7B&–æF–æw4f÷%F‚Ò&–æF–æw5²¢ÒÀ –Æ7D66†VBÒ&–æF–æw4f÷%F…²f—'7D7F—fT–æFW‚Ó°  –ÆWB&–æF–ærÒ&–æF–æw4f÷%F…²–æFW‚Ó°  –&–æF–æw4f÷%F…²–æFW‚ÒÒÆ7D66†VC°  ––b‚&–æF–ærÓÓÒVæFVf–æVB’°  ’òò6–æ6RvRFòæ÷B&÷F†W"Fò7&VFRæWr&–æF–æw0 ’òòf÷"ö&¦V7G2F†B&R66†VBÂF†R&–æF–ærÖ ’òò÷"Ö’æ÷BW†—7@  –&–æF–ærÒæWr&÷W'G”&–æF–ær‚ö&¦V7BÂF‡5²¢ÒÂ'6VEF‡5²¢Ò“°  —Ð  –&–æF–æw4f÷%F…²f—'7D7F—fT–æFW‚ÒÒ&–æF–æs°  —Ð  —ÒVÇ6R–b‚ö&¦V7G5²–æFW‚ÒÓÒ¶æ÷väö&¦V7B’°  –6öç6öÆRæW'&÷"‚uD…$TRäæ–ÖF–öäö&¦V7Dw&÷W¢F–ffW&VçBö&¦V7G2v—F‚F†R6ÖRUT”Br° ’vFWFV7FVBâ6ÆVâF†R66†W2÷"&V7&VFR–÷W"–æg&7G'V7GW&Rv†Vâ&VÆöF–ær66VæW2âr“°  —ÒòòVÇ6RF†Rö&¦V7B—2Ç&VG’v†W&RvRvçB—BFò&P  —Òòòf÷"&wVÖVçG0  —F†—2æä66†VDö&¦V7G5òÒä66†VDö&¦V7G3°  —Ð  —&VÖ÷fR‚’°  –6öç7Bö&¦V7G2ÒF†—2åöö&¦V7G2À ––æF–6W4'•UT”BÒF†—2åö–æF–6W4'•UT”BÀ –&–æF–æw2ÒF†—2åö&–æF–æw2À –ä&–æF–æw2Ò&–æF–æw2æÆVæwFƒ°  –ÆWBä66†VDö&¦V7G2ÒF†—2æä66†VDö&¦V7G5ó°  –f÷"‚ÆWB’ÒÂâÒ&wVÖVçG2æÆVæwFƒ²’ÓÒã²²²’’°  –6öç7Bö&¦V7BÒ&wVÖVçG5²’ÒÀ —WV–BÒö&¦V7BçWV–BÀ ––æFW‚Ò–æF–6W4'•UT”E²WV–BÓ°  ––b‚–æFW‚ÓÒVæFVf–æVBbb–æFW‚ãÒä66†VDö&¦V7G2’°  ’òòÖ÷fRW†—7F–ærö&¦V7B–çFòF†R44„TB&Vv–öà  –6öç7BÆ7D66†VD–æFW‚Òä66†VDö&¦V7G2²²À –f—'7D7F—fTö&¦V7BÒö&¦V7G5²Æ7D66†VD–æFW‚Ó°  ––æF–6W4'•UT”E²f—'7D7F—fTö&¦V7BçWV–BÒÒ–æFWƒ° –ö&¦V7G5²–æFW‚ÒÒf—'7D7F—fTö&¦V7C°  ––æF–6W4'•UT”E²WV–BÒÒÆ7D66†VD–æFWƒ° –ö&¦V7G5²Æ7D66†VD–æFW‚ÒÒö&¦V7C°  ’òò66÷VçF–ær—2FöæRÂæ÷rFòF†R6ÖRf÷"ÆÂ&–æF–æw0  –f÷"‚ÆWB¢ÒÂÒÒä&–æF–æw3²¢ÓÒÓ²²²¢’°  –6öç7B&–æF–æw4f÷%F‚Ò&–æF–æw5²¢ÒÀ –f—'7D7F—fRÒ&–æF–æw4f÷%F…²Æ7D66†VD–æFW‚ÒÀ –&–æF–ærÒ&–æF–æw4f÷%F…²–æFW‚Ó°  –&–æF–æw4f÷%F…²–æFW‚ÒÒf—'7D7F—fS° –&–æF–æw4f÷%F…²Æ7D66†VD–æFW‚ÒÒ&–æF–æs°  —Ð  —Ð  —Òòòf÷"&wVÖVçG0  —F†—2æä66†VDö&¦V7G5òÒä66†VDö&¦V7G3°  —Ð  ’òò&VÖ÷fRbf÷&vW@ —Væ66†R‚’°  –6öç7Bö&¦V7G2ÒF†—2åöö&¦V7G2À ––æF–6W4'•UT”BÒF†—2åö–æF–6W4'•UT”BÀ –&–æF–æw2ÒF†—2åö&–æF–æw2À –ä&–æF–æw2Ò&–æF–æw2æÆVæwFƒ°  –ÆWBä66†VDö&¦V7G2ÒF†—2æä66†VDö&¦V7G5òÀ –äö&¦V7G2Òö&¦V7G2æÆVæwFƒ°  –f÷"‚ÆWB’ÒÂâÒ&wVÖVçG2æÆVæwFƒ²’ÓÒã²²²’’°  –6öç7Bö&¦V7BÒ&wVÖVçG5²’ÒÀ —WV–BÒö&¦V7BçWV–BÀ ––æFW‚Ò–æF–6W4'•UT”E²WV–BÓ°  ––b‚–æFW‚ÓÒVæFVf–æVB’°  –FVÆWFR–æF–6W4'•UT”E²WV–BÓ°  ––b‚–æFW‚Âä66†VDö&¦V7G2’°  ’òòö&¦V7B—266†VBÂ6‡&–æ²F†R44„TB&Vv–öà  –6öç7Bf—'7D7F—fT–æFW‚ÒÒÒä66†VDö&¦V7G2À –Æ7D66†VDö&¦V7BÒö&¦V7G5²f—'7D7F—fT–æFW‚ÒÀ –Æ7D–æFW‚ÒÒÒäö&¦V7G2À –Æ7Dö&¦V7BÒö&¦V7G5²Æ7D–æFW‚Ó°  ’òòÆ7B66†VBö&¦V7BF¶W2F†—2ö&¦V7Bw2Æ6P ––æF–6W4'•UT”E²Æ7D66†VDö&¦V7BçWV–BÒÒ–æFWƒ° –ö&¦V7G5²–æFW‚ÒÒÆ7D66†VDö&¦V7C°  ’òòÆ7Bö&¦V7BvöW2FòF†R7F—fFVB6Æ÷BæB÷  ––æF–6W4'•UT”E²Æ7Dö&¦V7BçWV–BÒÒf—'7D7F—fT–æFWƒ° –ö&¦V7G5²f—'7D7F—fT–æFW‚ÒÒÆ7Dö&¦V7C° –ö&¦V7G2ç÷‚“°  ’òò66÷VçF–ær—2FöæRÂæ÷rFòF†R6ÖRf÷"ÆÂ&–æF–æw0  –f÷"‚ÆWB¢ÒÂÒÒä&–æF–æw3²¢ÓÒÓ²²²¢’°  –6öç7B&–æF–æw4f÷%F‚Ò&–æF–æw5²¢ÒÀ –Æ7D66†VBÒ&–æF–æw4f÷%F…²f—'7D7F—fT–æFW‚ÒÀ –Æ7BÒ&–æF–æw4f÷%F…²Æ7D–æFW‚Ó°  –&–æF–æw4f÷%F…²–æFW‚ÒÒÆ7D66†VC° –&–æF–æw4f÷%F…²f—'7D7F—fT–æFW‚ÒÒÆ7C° –&–æF–æw4f÷%F‚ç÷‚“°  —Ð  —ÒVÇ6R°  ’òòö&¦V7B—27F—fRÂ§W7B7vv—F‚F†RÆ7BæB÷   –6öç7BÆ7D–æFW‚ÒÒÒäö&¦V7G2À –Æ7Dö&¦V7BÒö&¦V7G5²Æ7D–æFW‚Ó°  ––b‚Æ7D–æFW‚â’°  ––æF–6W4'•UT”E²Æ7Dö&¦V7BçWV–BÒÒ–æFWƒ°  —Ð  –ö&¦V7G5²–æFW‚ÒÒÆ7Dö&¦V7C° –ö&¦V7G2ç÷‚“°  ’òò66÷VçF–ær—2FöæRÂæ÷rFòF†R6ÖRf÷"ÆÂ&–æF–æw0  –f÷"‚ÆWB¢ÒÂÒÒä&–æF–æw3²¢ÓÒÓ²²²¢’°  –6öç7B&–æF–æw4f÷%F‚Ò&–æF–æw5²¢Ó°  –&–æF–æw4f÷%F…²–æFW‚ÒÒ&–æF–æw4f÷%F…²Æ7D–æFW‚Ó° –&–æF–æw4f÷%F‚ç÷‚“°  —Ð  —Òòò66†VB÷"7F—fP  —Òòò–bö&¦V7B—2¶æ÷và  —Òòòf÷"&wVÖVçG0  —F†—2æä66†VDö&¦V7G5òÒä66†VDö&¦V7G3°  —Ð  ’òò–çFW&æÂ–çFW&f6RW6VB'’&Vg&–VæFVB&÷W'G”&–æF–ærä6ö×÷6—FS   —7V'67&–&Uò‚F‚Â'6VEF‚’°  ’òò&WGW&ç2â'&’öb&–æF–æw2f÷"F†Rv—fVâF‚F†B—26†ævV@ ’òò66÷&F–ærFòF†R6öçF–æVBö&¦V7G2–âF†Rw&÷W   –6öç7B–æF–6W4'•F‚ÒF†—2åö&–æF–æw4–æF–6W4'•Fƒ° –ÆWB–æFW‚Ò–æF–6W4'•F…²F‚Ó° –6öç7B&–æF–æw2ÒF†—2åö&–æF–æw3°  ––b‚–æFW‚ÓÒVæFVf–æVB’&WGW&â&–æF–æw5²–æFW‚Ó°  –6öç7BF‡2ÒF†—2å÷F‡2À —'6VEF‡2ÒF†—2å÷'6VEF‡2À –ö&¦V7G2ÒF†—2åöö&¦V7G2À –äö&¦V7G2Òö&¦V7G2æÆVæwF‚À –ä66†VDö&¦V7G2ÒF†—2æä66†VDö&¦V7G5òÀ –&–æF–æw4f÷%F‚ÒæWr'&’‚äö&¦V7G2“°  ––æFW‚Ò&–æF–æw2æÆVæwFƒ°  ––æF–6W4'•F…²F‚ÒÒ–æFWƒ°  —F‡2çW6‚‚F‚“° —'6VEF‡2çW6‚‚'6VEF‚“° –&–æF–æw2çW6‚‚&–æF–æw4f÷%F‚“°  –f÷"‚ÆWB’Òä66†VDö&¦V7G2ÂâÒö&¦V7G2æÆVæwFƒ²’ÓÒã²²²’’°  –6öç7Bö&¦V7BÒö&¦V7G5²’Ó° –&–æF–æw4f÷%F…²’ÒÒæWr&÷W'G”&–æF–ær‚ö&¦V7BÂF‚Â'6VEF‚“°  —Ð  —&WGW&â&–æF–æw4f÷%Fƒ°  —Ð  —Vç7V'67&–&Uò‚F‚’°  ’òòFVÆÇ2F†Rw&÷WFòf÷&vWB&÷WB&÷W'G’F‚æBæòÆöævW  ’òòWFFRF†R'&’&Wf–÷W6Ç’ö'F–æVBv—F‚w7V'67&–&Uòp  –6öç7B–æF–6W4'•F‚ÒF†—2åö&–æF–æw4–æF–6W4'•F‚À ––æFW‚Ò–æF–6W4'•F…²F‚Ó°  ––b‚–æFW‚ÓÒVæFVf–æVB’°  –6öç7BF‡2ÒF†—2å÷F‡2À —'6VEF‡2ÒF†—2å÷'6VEF‡2À –&–æF–æw2ÒF†—2åö&–æF–æw2À –Æ7D&–æF–æw4–æFW‚Ò&–æF–æw2æÆVæwF‚ÒÀ –Æ7D&–æF–æw2Ò&–æF–æw5²Æ7D&–æF–æw4–æFW‚ÒÀ –Æ7D&–æF–æw5F‚ÒF…²Æ7D&–æF–æw4–æFW‚Ó°  ––æF–6W4'•F…²Æ7D&–æF–æw5F‚ÒÒ–æFWƒ°  –&–æF–æw5²–æFW‚ÒÒÆ7D&–æF–æw3° –&–æF–æw2ç÷‚“°  —'6VEF‡5²–æFW‚ÒÒ'6VEF‡5²Æ7D&–æF–æw4–æFW‚Ó° —'6VEF‡2ç÷‚“°  —F‡5²–æFW‚ÒÒF‡5²Æ7D&–æF–æw4–æFW‚Ó° —F‡2ç÷‚“°  —Ð  —Ð §Ð ¦6Æ72æ–ÖF–öä7F–öâ°  –6öç7G'V7F÷"‚Ö—†W"Â6Æ—ÂÆö6Å&ö÷BÒçVÆÂÂ&ÆVæDÖöFRÒ6Æ—æ&ÆVæDÖöFR’°  —F†—2åöÖ—†W"ÒÖ—†W#° —F†—2åö6Æ—Ò6Æ—° —F†—2åöÆö6Å&ö÷BÒÆö6Å&ö÷C° —F†—2æ&ÆVæDÖöFRÒ&ÆVæDÖöFS°  –6öç7BG&6·2Ò6Æ—çG&6·2À –åG&6·2ÒG&6·2æÆVæwF‚À ––çFW'öÆçG2ÒæWr'&’‚åG&6·2“°  –6öç7B–çFW'öÆçE6WGF–æw2Ò° –VæF–æu7F'C¢¦W&ô7W'fGW&TVæF–ærÀ –VæF–ætVæC¢¦W&ô7W'fGW&TVæF–æp —Ó°  –f÷"‚ÆWB’Ò²’ÓÒåG&6·3²²²’’°  –6öç7B–çFW'öÆçBÒG&6·5²’Òæ7&VFT–çFW'öÆçB‚çVÆÂ“° ––çFW'öÆçG5²’ÒÒ–çFW'öÆçC° ––çFW'öÆçBç6WGF–æw2Ò–çFW'öÆçE6WGF–æw3°  —Ð  —F†—2åö–çFW'öÆçE6WGF–æw2Ò–çFW'öÆçE6WGF–æw3°  —F†—2åö–çFW'öÆçG2Ò–çFW'öÆçG3²òò&÷VæB'’F†RÖ—†W   ’òò–ç6–FS¢&÷W'G”Ö—†W"†ÖævVB'’F†RÖ—†W" —F†—2å÷&÷W'G”&–æF–æw2ÒæWr'&’‚åG&6·2“°  —F†—2åö66†T–æFW‚ÒçVÆÃ²òòf÷"F†RÖVÖ÷'’ÖævW  —F†—2åö'”6Æ—66†T–æFW‚ÒçVÆÃ²òòf÷"F†RÖVÖ÷'’ÖævW   —F†—2å÷F–ÖU66ÆT–çFW'öÆçBÒçVÆÃ° —F†—2å÷vV–v‡D–çFW'öÆçBÒçVÆÃ°  —F†—2æÆö÷ÒÆö÷&WVC° —F†—2åöÆö÷6÷VçBÒÒ°  ’òòvÆö&ÂÖ—†W"F–ÖRv†VâF†R7F–öâ—2Fò&R7F'FV@ ’òò—Bw26WB&6²FòvçVÆÂrWöâ7F'BöbF†R7F–öà —F†—2å÷7F'EF–ÖRÒçVÆÃ°  ’òò66ÆVBÆö6ÂF–ÖRöbF†R7F–öà ’òòvWG26Æ×VB÷"w&VBFòâæ6Æ—æGW&F–öâ66÷&F–ærFòÆö÷  —F†—2çF–ÖRÒ°  —F†—2çF–ÖU66ÆRÒ° —F†—2åöVffV7F—fUF–ÖU66ÆRÒ°  —F†—2çvV–v‡BÒ° —F†—2åöVffV7F—fUvV–v‡BÒ°  —F†—2ç&WWF—F–öç2Ò–æf–æ—G“²òòæòâöb&WWF—F–öç2v†VâÆö÷–æp  —F†—2çW6VBÒfÇ6S²òòG'VRÓâ¦W&òVffV7F—fRF–ÖR66ÆP —F†—2æVæ&ÆVBÒG'VS²òòfÇ6RÓâ¦W&òVffV7F—fRvV–v‡@  —F†—2æ6Æ×v†Väf–æ—6†VBÒfÇ6S²òò¶VWfVVF–ærF†RÆ7Bg&ÖSð  —F†—2ç¦W&õ6Æ÷TE7F'BÒG'VS²òòf÷"6Öö÷F‚–çFW'öÆF–öâröò6W&FP —F†—2ç¦W&õ6Æ÷TDVæBÒG'VS²òò6Æ—2f÷"7F'BÂÆö÷æBVæ@  —Ð  ’òò7FFRb66†VGVÆ–æp  —Æ’‚’°  —F†—2åöÖ—†W"åö7F—fFT7F–öâ‚F†—2“°  —&WGW&âF†—3°  —Ð  —7F÷‚’°  —F†—2åöÖ—†W"åöFV7F—fFT7F–öâ‚F†—2“°  —&WGW&âF†—2ç&W6WB‚“°  —Ð  —&W6WB‚’°  —F†—2çW6VBÒfÇ6S° —F†—2æVæ&ÆVBÒG'VS°  —F†—2çF–ÖRÒ²òò&W7F'B6Æ—  —F†—2åöÆö÷6÷VçBÒÒ²òòf÷&vWB&Wf–÷W2Æö÷0 —F†—2å÷7F'EF–ÖRÒçVÆÃ²òòf÷&vWB66†VGVÆ–æp  —&WGW&âF†—2ç7F÷fF–ær‚’ç7F÷v'–ær‚“°  —Ð  –—5'Vææ–ær‚’°  —&WGW&âF†—2æVæ&ÆVBbbF†—2çW6VBbbF†—2çF–ÖU66ÆRÓÒb` —F†—2å÷7F'EF–ÖRÓÓÒçVÆÂbbF†—2åöÖ—†W"åö—47F—fT7F–öâ‚F†—2“°  —Ð  ’òò&WGW&âG'VRv†VâÆ’†2&VVâ6ÆÆV@ –—566†VGVÆVB‚’°  —&WGW&âF†—2åöÖ—†W"åö—47F—fT7F–öâ‚F†—2“°  —Ð  —7F'DB‚F–ÖR’°  —F†—2å÷7F'EF–ÖRÒF–ÖS°  —&WGW&âF†—3°  —Ð  —6WDÆö÷‚ÖöFRÂ&WWF—F–öç2’°  —F†—2æÆö÷ÒÖöFS° —F†—2ç&WWF—F–öç2Ò&WWF—F–öç3°  —&WGW&âF†—3°  —Ð  ’òòvV–v‡@  ’òò6WBF†RvV–v‡B7F÷–ærç’66†VGVÆVBfF–æp ’òòÇF†÷Vv‚æVæ&ÆVBÒfÇ6R––VÆG2âVffV7F—fRvV–v‡Böb¦W&òÂF†—0 ’òòÖWF†öBFöW2¦æ÷B¢6†ævRæVæ&ÆVBÂ&V6W6R—Bv÷VÆB&R6öægW6–æp —6WDVffV7F—fUvV–v‡B‚vV–v‡B’°  —F†—2çvV–v‡BÒvV–v‡C°  ’òòæ÷FS¢6ÖRÆöv–22v†VâWFFVBB'VçF–ÖP —F†—2åöVffV7F—fUvV–v‡BÒF†—2æVæ&ÆVBòvV–v‡B¢°  —&WGW&âF†—2ç7F÷fF–ær‚“°  —Ð  ’òò&WGW&âF†RvV–v‡B6öç6–FW&–ærfF–æræBæVæ&ÆV@ –vWDVffV7F—fUvV–v‡B‚’°  —&WGW&âF†—2åöVffV7F—fUvV–v‡C°  —Ð  –fFT–â‚GW&F–öâ’°  —&WGW&âF†—2å÷66†VGVÆTfF–ær‚GW&F–öâÂÂ“°  —Ð  –fFT÷WB‚GW&F–öâ’°  —&WGW&âF†—2å÷66†VGVÆTfF–ær‚GW&F–öâÂÂ“°  —Ð  –7&÷74fFTg&öÒ‚fFT÷WD7F–öâÂGW&F–öâÂv'’°  –fFT÷WD7F–öâæfFT÷WB‚GW&F–öâ“° —F†—2æfFT–â‚GW&F–öâ“°  ––b‚v'’°  –6öç7BfFT–äGW&F–öâÒF†—2åö6Æ—æGW&F–öâÀ –fFT÷WDGW&F–öâÒfFT÷WD7F–öâåö6Æ—æGW&F–öâÀ  —7F'DVæE&F–òÒfFT÷WDGW&F–öâòfFT–äGW&F–öâÀ –VæE7F'E&F–òÒfFT–äGW&F–öâòfFT÷WDGW&F–öã°  –fFT÷WD7F–öâçv'‚ãÂ7F'DVæE&F–òÂGW&F–öâ“° —F†—2çv'‚VæE7F'E&F–òÂãÂGW&F–öâ“°  —Ð  —&WGW&âF†—3°  —Ð  –7&÷74fFUFò‚fFT–ä7F–öâÂGW&F–öâÂv'’°  —&WGW&âfFT–ä7F–öâæ7&÷74fFTg&öÒ‚F†—2ÂGW&F–öâÂv'“°  —Ð  —7F÷fF–ær‚’°  –6öç7BvV–v‡D–çFW'öÆçBÒF†—2å÷vV–v‡D–çFW'öÆçC°  ––b‚vV–v‡D–çFW'öÆçBÓÒçVÆÂ’°  —F†—2å÷vV–v‡D–çFW'öÆçBÒçVÆÃ° —F†—2åöÖ—†W"å÷F¶T&6´6öçG&öÄ–çFW'öÆçB‚vV–v‡D–çFW'öÆçB“°  —Ð  —&WGW&âF†—3°  —Ð  ’òòF–ÖR66ÆR6öçG&öÀ  ’òò6WBF†RF–ÖR66ÆR7F÷–ærç’66†VGVÆVBv'–æp ’òòÇF†÷Vv‚çW6VBÒG'VR––VÆG2âVffV7F—fRF–ÖR66ÆRöb¦W&òÂF†—0 ’òòÖWF†öBFöW2¦æ÷B¢6†ævRçW6VBÂ&V6W6R—Bv÷VÆB&R6öægW6–æp —6WDVffV7F—fUF–ÖU66ÆR‚F–ÖU66ÆR’°  —F†—2çF–ÖU66ÆRÒF–ÖU66ÆS° —F†—2åöVffV7F—fUF–ÖU66ÆRÒF†—2çW6VBò¢F–ÖU66ÆS°  —&WGW&âF†—2ç7F÷v'–ær‚“°  —Ð  ’òò&WGW&âF†RF–ÖR66ÆR6öç6–FW&–ærv'–æræBçW6V@ –vWDVffV7F—fUF–ÖU66ÆR‚’°  —&WGW&âF†—2åöVffV7F—fUF–ÖU66ÆS°  —Ð  —6WDGW&F–öâ‚GW&F–öâ’°  —F†—2çF–ÖU66ÆRÒF†—2åö6Æ—æGW&F–öâòGW&F–öã°  —&WGW&âF†—2ç7F÷v'–ær‚“°  —Ð  —7–æ5v—F‚‚7F–öâ’°  —F†—2çF–ÖRÒ7F–öâçF–ÖS° —F†—2çF–ÖU66ÆRÒ7F–öâçF–ÖU66ÆS°  —&WGW&âF†—2ç7F÷v'–ær‚“°  —Ð  –†ÇB‚GW&F–öâ’°  —&WGW&âF†—2çv'‚F†—2åöVffV7F—fUF–ÖU66ÆRÂÂGW&F–öâ“°  —Ð  —v'‚7F'EF–ÖU66ÆRÂVæEF–ÖU66ÆRÂGW&F–öâ’°  –6öç7BÖ—†W"ÒF†—2åöÖ—†W"À –æ÷rÒÖ—†W"çF–ÖRÀ —F–ÖU66ÆRÒF†—2çF–ÖU66ÆS°  –ÆWB–çFW'öÆçBÒF†—2å÷F–ÖU66ÆT–çFW'öÆçC°  ––b‚–çFW'öÆçBÓÓÒçVÆÂ’°  ––çFW'öÆçBÒÖ—†W"åöÆVæD6öçG&öÄ–çFW'öÆçB‚“° —F†—2å÷F–ÖU66ÆT–çFW'öÆçBÒ–çFW'öÆçC°  —Ð  –6öç7BF–ÖW2Ò–çFW'öÆçBç&ÖWFW%÷6—F–öç2À —fÇVW2Ò–çFW'öÆçBç6×ÆUfÇVW3°  —F–ÖW5²ÒÒæ÷s° —F–ÖW5²ÒÒæ÷r²GW&F–öã°  —fÇVW5²ÒÒ7F'EF–ÖU66ÆRòF–ÖU66ÆS° —fÇVW5²ÒÒVæEF–ÖU66ÆRòF–ÖU66ÆS°  —&WGW&âF†—3°  —Ð  —7F÷v'–ær‚’°  –6öç7BF–ÖU66ÆT–çFW'öÆçBÒF†—2å÷F–ÖU66ÆT–çFW'öÆçC°  ––b‚F–ÖU66ÆT–çFW'öÆçBÓÒçVÆÂ’°  —F†—2å÷F–ÖU66ÆT–çFW'öÆçBÒçVÆÃ° —F†—2åöÖ—†W"å÷F¶T&6´6öçG&öÄ–çFW'öÆçB‚F–ÖU66ÆT–çFW'öÆçB“°  —Ð  —&WGW&âF†—3°  —Ð  ’òòö&¦V7B66W76÷'0  –vWDÖ—†W"‚’°  —&WGW&âF†—2åöÖ—†W#°  —Ð  –vWD6Æ—‚’°  —&WGW&âF†—2åö6Æ—°  —Ð  –vWE&ö÷B‚’°  —&WGW&âF†—2åöÆö6Å&ö÷BÇÂF†—2åöÖ—†W"å÷&ö÷C°  —Ð  ’òò–çFW&æ  •÷WFFR‚F–ÖRÂFVÇFF–ÖRÂF–ÖTF—&V7F–öâÂ67T–æFW‚’°  ’òò6ÆÆVB'’F†RÖ—†W   ––b‚F†—2æVæ&ÆVB’°  ’òò6ÆÂå÷WFFUvV–v‡B‚’FòWFFRåöVffV7F—fUvV–v‡@  —F†—2å÷WFFUvV–v‡B‚F–ÖR“° —&WGW&ã°  —Ð  –6öç7B7F'EF–ÖRÒF†—2å÷7F'EF–ÖS°  ––b‚7F'EF–ÖRÓÒçVÆÂ’°  ’òò6†V6²f÷"66†VGVÆVB7F'Böb7F–öà  –6öç7BF–ÖU'Vææ–ærÒ‚F–ÖRÒ7F'EF–ÖR’¢F–ÖTF—&V7F–öã° ––b‚F–ÖU'Vææ–ærÂÇÂF–ÖTF—&V7F–öâÓÓÒ’°  –FVÇFF–ÖRÒ°  —ÒVÇ6R°   —F†—2å÷7F'EF–ÖRÒçVÆÃ²òòVç66†VGVÆP –FVÇFF–ÖRÒF–ÖTF—&V7F–öâ¢F–ÖU'Vææ–æs°  —Ð  —Ð  ’òòÇ’F–ÖR66ÆRæBGfæ6RF–ÖP  –FVÇFF–ÖR£ÒF†—2å÷WFFUF–ÖU66ÆR‚F–ÖR“° –6öç7B6Æ—F–ÖRÒF†—2å÷WFFUF–ÖR‚FVÇFF–ÖR“°  ’òòæ÷FS¢÷WFFUF–ÖRÖ’F—6&ÆRF†R7F–öâ&W7VÇF–ær–à ’òòâVffV7F—fRvV–v‡Böb   –6öç7BvV–v‡BÒF†—2å÷WFFUvV–v‡B‚F–ÖR“°  ––b‚vV–v‡Bâ’°  –6öç7B–çFW'öÆçG2ÒF†—2åö–çFW'öÆçG3° –6öç7B&÷W'G”Ö—†W'2ÒF†—2å÷&÷W'G”&–æF–æw3°  —7v—F6‚‚F†—2æ&ÆVæDÖöFR’°  –66RFF—F—fTæ–ÖF–öä&ÆVæDÖöFS   –f÷"‚ÆWB¢ÒÂÒÒ–çFW'öÆçG2æÆVæwFƒ²¢ÓÒÓ²²²¢’°  ––çFW'öÆçG5²¢ÒæWfÇVFR‚6Æ—F–ÖR“° —&÷W'G”Ö—†W'5²¢Òæ67V×VÆFTFF—F—fR‚vV–v‡B“°  —Ð  –'&V³°  –66Ræ÷&ÖÄæ–ÖF–öä&ÆVæDÖöFS  –FVfVÇC   –f÷"‚ÆWB¢ÒÂÒÒ–çFW'öÆçG2æÆVæwFƒ²¢ÓÒÓ²²²¢’°  ––çFW'öÆçG5²¢ÒæWfÇVFR‚6Æ—F–ÖR“° —&÷W'G”Ö—†W'5²¢Òæ67V×VÆFR‚67T–æFW‚ÂvV–v‡B“°  —Ð  —Ð  —Ð  —Ð  •÷WFFUvV–v‡B‚F–ÖR’°  –ÆWBvV–v‡BÒ°  ––b‚F†—2æVæ&ÆVB’°  —vV–v‡BÒF†—2çvV–v‡C° –6öç7B–çFW'öÆçBÒF†—2å÷vV–v‡D–çFW'öÆçC°  ––b‚–çFW'öÆçBÓÒçVÆÂ’°  –6öç7B–çFW'öÆçEfÇVRÒ–çFW'öÆçBæWfÇVFR‚F–ÖR•²Ó°  —vV–v‡B£Ò–çFW'öÆçEfÇVS°  ––b‚F–ÖRâ–çFW'öÆçBç&ÖWFW%÷6—F–öç5²Ò’°  —F†—2ç7F÷fF–ær‚“°  ––b‚–çFW'öÆçEfÇVRÓÓÒ’°  ’òòfFVB÷WBÂF—6&ÆP —F†—2æVæ&ÆVBÒfÇ6S°  —Ð  —Ð  —Ð  —Ð  —F†—2åöVffV7F—fUvV–v‡BÒvV–v‡C° —&WGW&âvV–v‡C°  —Ð  •÷WFFUF–ÖU66ÆR‚F–ÖR’°  –ÆWBF–ÖU66ÆRÒ°  ––b‚F†—2çW6VB’°  —F–ÖU66ÆRÒF†—2çF–ÖU66ÆS°  –6öç7B–çFW'öÆçBÒF†—2å÷F–ÖU66ÆT–çFW'öÆçC°  ––b‚–çFW'öÆçBÓÒçVÆÂ’°  –6öç7B–çFW'öÆçEfÇVRÒ–çFW'öÆçBæWfÇVFR‚F–ÖR•²Ó°  —F–ÖU66ÆR£Ò–çFW'öÆçEfÇVS°  ––b‚F–ÖRâ–çFW'öÆçBç&ÖWFW%÷6—F–öç5²Ò’°  —F†—2ç7F÷v'–ær‚“°  ––b‚F–ÖU66ÆRÓÓÒ’°  ’òòÖ÷F–öâ†2†ÇFVBÂW6P —F†—2çW6VBÒG'VS°  —ÒVÇ6R°  ’òòv'FöæRÒÇ’f–æÂF–ÖR66ÆP —F†—2çF–ÖU66ÆRÒF–ÖU66ÆS°  —Ð  —Ð  —Ð  —Ð  —F†—2åöVffV7F—fUF–ÖU66ÆRÒF–ÖU66ÆS° —&WGW&âF–ÖU66ÆS°  —Ð  •÷WFFUF–ÖR‚FVÇFF–ÖR’°  –6öç7BGW&F–öâÒF†—2åö6Æ—æGW&F–öã° –6öç7BÆö÷ÒF†—2æÆö÷°  –ÆWBF–ÖRÒF†—2çF–ÖR²FVÇFF–ÖS° –ÆWBÆö÷6÷VçBÒF†—2åöÆö÷6÷VçC°  –6öç7B–æuöærÒ‚Æö÷ÓÓÒÆö÷–æuöær“°  ––b‚FVÇFF–ÖRÓÓÒ’°  ––b‚Æö÷6÷VçBÓÓÒÒ’&WGW&âF–ÖS°  —&WGW&â‚–æuöærbb‚Æö÷6÷VçBb’ÓÓÒ’òGW&F–öâÒF–ÖR¢F–ÖS°  —Ð  ––b‚Æö÷ÓÓÒÆö÷öæ6R’°  ––b‚Æö÷6÷VçBÓÓÒÒ’°  ’òò§W7B7F'FV@  —F†—2åöÆö÷6÷VçBÒ° —F†—2å÷6WDVæF–æw2‚G'VRÂG'VRÂfÇ6R“°  —Ð  –†æFÆU÷7F÷¢°  ––b‚F–ÖRãÒGW&F–öâ’°  —F–ÖRÒGW&F–öã°  —ÒVÇ6R–b‚F–ÖRÂ’°  —F–ÖRÒ°  —ÒVÇ6R°  —F†—2çF–ÖRÒF–ÖS°  –'&V²†æFÆU÷7F÷°  —Ð  ––b‚F†—2æ6Æ×v†Väf–æ—6†VB’F†—2çW6VBÒG'VS° –VÇ6RF†—2æVæ&ÆVBÒfÇ6S°  —F†—2çF–ÖRÒF–ÖS°  —F†—2åöÖ—†W"æF—7F6„WfVçB‚° —G—S¢vf–æ—6†VBrÂ7F–öã¢F†—2À –F—&V7F–öã¢FVÇFF–ÖRÂòÒ¢ —Ò“°  —Ð  —ÒVÇ6R²òò&WWF—F—fR&WVB÷"–æuöæp  ––b‚Æö÷6÷VçBÓÓÒÒ’°  ’òò§W7B7F'FV@  ––b‚FVÇFF–ÖRãÒ’°  –Æö÷6÷VçBÒ°  —F†—2å÷6WDVæF–æw2‚G'VRÂF†—2ç&WWF—F–öç2ÓÓÒÂ–æuöær“°  —ÒVÇ6R°  ’òòv†VâÆö÷–ær–â&WfW'6RF—&V7F–öâÂF†R–æ—F–À ’òòG&ç6—F–öâF‡&÷Vv‚¦W&ò6÷VçG22&WWF—F–öâÀ ’òò6òÆVfRÆö÷6÷VçBBÓ  —F†—2å÷6WDVæF–æw2‚F†—2ç&WWF—F–öç2ÓÓÒÂG'VRÂ–æuöær“°  —Ð  —Ð  ––b‚F–ÖRãÒGW&F–öâÇÂF–ÖRÂ’°  ’òòw&&÷Væ@  –6öç7BÆö÷FVÇFÒÖF‚æfÆö÷"‚F–ÖRòGW&F–öâ“²òò6–væV@ —F–ÖRÓÒGW&F–öâ¢Æö÷FVÇF°  –Æö÷6÷VçB³ÒÖF‚æ'2‚Æö÷FVÇF“°  –6öç7BVæF–ærÒF†—2ç&WWF—F–öç2ÒÆö÷6÷VçC°  ––b‚VæF–ærÃÒ’°  ’òò†fRFò7F÷‡7v—F6‚7FFRÂ6Æ×F–ÖRÂf—&RWfVçB  ––b‚F†—2æ6Æ×v†Väf–æ—6†VB’F†—2çW6VBÒG'VS° –VÇ6RF†—2æVæ&ÆVBÒfÇ6S°  —F–ÖRÒFVÇFF–ÖRâòGW&F–öâ¢°  —F†—2çF–ÖRÒF–ÖS°  —F†—2åöÖ—†W"æF—7F6„WfVçB‚° —G—S¢vf–æ—6†VBrÂ7F–öã¢F†—2À –F—&V7F–öã¢FVÇFF–ÖRâò¢Ò —Ò“°  —ÒVÇ6R°  ’òò¶VW'Vææ–æp  ––b‚VæF–ærÓÓÒ’°  ’òòVçFW&–ærF†RÆ7B&÷Væ@  –6öç7BE7F'BÒFVÇFF–ÖRÂ° —F†—2å÷6WDVæF–æw2‚E7F'BÂE7F'BÂ–æuöær“°  —ÒVÇ6R°  —F†—2å÷6WDVæF–æw2‚fÇ6RÂfÇ6RÂ–æuöær“°  —Ð  —F†—2åöÆö÷6÷VçBÒÆö÷6÷VçC°  —F†—2çF–ÖRÒF–ÖS°  —F†—2åöÖ—†W"æF—7F6„WfVçB‚° —G—S¢vÆö÷rÂ7F–öã¢F†—2ÂÆö÷FVÇF¢Æö÷FVÇF —Ò“°  —Ð  —ÒVÇ6R°  —F†—2çF–ÖRÒF–ÖS°  —Ð  ––b‚–æuöærbb‚Æö÷6÷VçBb’ÓÓÒ’°  ’òò–çfW'BF–ÖRf÷"F†R'öær&÷VæB   —&WGW&âGW&F–öâÒF–ÖS°  —Ð  —Ð  —&WGW&âF–ÖS°  —Ð  •÷6WDVæF–æw2‚E7F'BÂDVæBÂ–æuöær’°  –6öç7B6WGF–æw2ÒF†—2åö–çFW'öÆçE6WGF–æw3°  ––b‚–æuöær’°  —6WGF–æw2æVæF–æu7F'BÒ¦W&õ6Æ÷TVæF–æs° —6WGF–æw2æVæF–ætVæBÒ¦W&õ6Æ÷TVæF–æs°  —ÒVÇ6R°  ’òò77VÖ–ærf÷"Æö÷öæ6RE7F'BÓÒDVæBÓÒG'VP  ––b‚E7F'B’°  —6WGF–æw2æVæF–æu7F'BÒF†—2ç¦W&õ6Æ÷TE7F'Bò¦W&õ6Æ÷TVæF–ær¢¦W&ô7W'fGW&TVæF–æs°  —ÒVÇ6R°  —6WGF–æw2æVæF–æu7F'BÒw&&÷VæDVæF–æs°  —Ð  ––b‚DVæB’°  —6WGF–æw2æVæF–ætVæBÒF†—2ç¦W&õ6Æ÷TDVæBò¦W&õ6Æ÷TVæF–ær¢¦W&ô7W'fGW&TVæF–æs°  —ÒVÇ6R°  —6WGF–æw2æVæF–ætVæB ’Òw&&÷VæDVæF–æs°  —Ð  —Ð  —Ð  •÷66†VGVÆTfF–ær‚GW&F–öâÂvV–v‡Dæ÷rÂvV–v‡EF†Vâ’°  –6öç7BÖ—†W"ÒF†—2åöÖ—†W"Âæ÷rÒÖ—†W"çF–ÖS° –ÆWB–çFW'öÆçBÒF†—2å÷vV–v‡D–çFW'öÆçC°  ––b‚–çFW'öÆçBÓÓÒçVÆÂ’°  ––çFW'öÆçBÒÖ—†W"åöÆVæD6öçG&öÄ–çFW'öÆçB‚“° —F†—2å÷vV–v‡D–çFW'öÆçBÒ–çFW'öÆçC°  —Ð  –6öç7BF–ÖW2Ò–çFW'öÆçBç&ÖWFW%÷6—F–öç2À —fÇVW2Ò–çFW'öÆçBç6×ÆUfÇVW3°  —F–ÖW5²ÒÒæ÷s° —fÇVW5²ÒÒvV–v‡Dæ÷s° —F–ÖW5²ÒÒæ÷r²GW&F–öã° —fÇVW5²ÒÒvV–v‡EF†Vã°  —&WGW&âF†—3°  —Ð §Ð ¦6öç7Bö6öçG&öÄ–çFW'öÆçG5&W7VÇD'VffW"ÒæWrfÆöC3$'&’‚“°  ¦6Æ72æ–ÖF–öäÖ—†W"W‡FVæG2WfVçDF—7F6†W"°  –6öç7G'V7F÷"‚&ö÷B’°  —7WW"‚“°  —F†—2å÷&ö÷BÒ&ö÷C° —F†—2åö–æ—DÖVÖ÷'”ÖævW"‚“° —F†—2åö67T–æFW‚Ò° —F†—2çF–ÖRÒ° —F†—2çF–ÖU66ÆRÒã°  —Ð  •ö&–æD7F–öâ‚7F–öâÂ&÷F÷G—T7F–öâ’°  –6öç7B&ö÷BÒ7F–öâåöÆö6Å&ö÷BÇÂF†—2å÷&ö÷BÀ —G&6·2Ò7F–öâåö6Æ—çG&6·2À –åG&6·2ÒG&6·2æÆVæwF‚À –&–æF–æw2Ò7F–öâå÷&÷W'G”&–æF–æw2À ––çFW'öÆçG2Ò7F–öâåö–çFW'öÆçG2À —&ö÷EWV–BÒ&ö÷BçWV–BÀ –&–æF–æw4'•&ö÷BÒF†—2åö&–æF–æw4'•&ö÷DæDæÖS°  –ÆWB&–æF–æw4'”æÖRÒ&–æF–æw4'•&ö÷E²&ö÷EWV–BÓ°  ––b‚&–æF–æw4'”æÖRÓÓÒVæFVf–æVB’°  –&–æF–æw4'”æÖRÒ·Ó° –&–æF–æw4'•&ö÷E²&ö÷EWV–BÒÒ&–æF–æw4'”æÖS°  —Ð  –f÷"‚ÆWB’Ò²’ÓÒåG&6·3²²²’’°  –6öç7BG&6²ÒG&6·5²’ÒÀ —G&6´æÖRÒG&6²ææÖS°  –ÆWB&–æF–ærÒ&–æF–æw4'”æÖU²G&6´æÖRÓ°  ––b‚&–æF–ærÓÒVæFVf–æVB’°  ’²²&–æF–ærç&VfW&Væ6T6÷VçC° –&–æF–æw5²’ÒÒ&–æF–æs°  —ÒVÇ6R°  –&–æF–ærÒ&–æF–æw5²’Ó°  ––b‚&–æF–ærÓÒVæFVf–æVB’°  ’òòW†—7F–ær&–æF–ærÂÖ¶R7W&RF†R66†R¶æ÷w0  ––b‚&–æF–æråö66†T–æFW‚ÓÓÒçVÆÂ’°  ’²²&–æF–ærç&VfW&Væ6T6÷VçC° —F†—2åöFD–æ7F—fT&–æF–ær‚&–æF–ærÂ&ö÷EWV–BÂG&6´æÖR“°  —Ð  –6öçF–çVS°  —Ð  –6öç7BF‚Ò&÷F÷G—T7F–öâbb&÷F÷G—T7F–öâà •÷&÷W'G”&–æF–æw5²’Òæ&–æF–ærç'6VEFƒ°  –&–æF–ærÒæWr&÷W'G”Ö—†W"€ •&÷W'G”&–æF–æræ7&VFR‚&ö÷BÂG&6´æÖRÂF‚’À —G&6²åfÇVUG—TæÖRÂG&6²ævWEfÇVU6—¦R‚’“°  ’²²&–æF–ærç&VfW&Væ6T6÷VçC° —F†—2åöFD–æ7F—fT&–æF–ær‚&–æF–ærÂ&ö÷EWV–BÂG&6´æÖR“°  –&–æF–æw5²’ÒÒ&–æF–æs°  —Ð  ––çFW'öÆçG5²’Òç&W7VÇD'VffW"Ò&–æF–æræ'VffW#°  —Ð  —Ð  •ö7F—fFT7F–öâ‚7F–öâ’°  ––b‚F†—2åö—47F—fT7F–öâ‚7F–öâ’’°  ––b‚7F–öâåö66†T–æFW‚ÓÓÒçVÆÂ’°  ’òòF†—27F–öâ†2&VVâf÷&v÷GFVâ'’F†R66†RÂ'WBF†RW6W  ’òòV'2Fò&R7F–ÆÂW6–ær—BÓâ&V&–æ@  –6öç7B&ö÷EWV–BÒ‚7F–öâåöÆö6Å&ö÷BÇÂF†—2å÷&ö÷B’çWV–BÀ –6Æ—WV–BÒ7F–öâåö6Æ—çWV–BÀ –7F–öç4f÷$6Æ—ÒF†—2åö7F–öç4'”6Æ—²6Æ—WV–BÓ°  —F†—2åö&–æD7F–öâ‚7F–öâÀ –7F–öç4f÷$6Æ—bb7F–öç4f÷$6Æ—æ¶æ÷vä7F–öç5²Ò“°  —F†—2åöFD–æ7F—fT7F–öâ‚7F–öâÂ6Æ—WV–BÂ&ö÷EWV–B“°  —Ð  –6öç7B&–æF–æw2Ò7F–öâå÷&÷W'G”&–æF–æw3°  ’òò–æ7&VÖVçB&VfW&Væ6R6÷VçG2ò6÷'B÷WB7FFP –f÷"‚ÆWB’ÒÂâÒ&–æF–æw2æÆVæwFƒ²’ÓÒã²²²’’°  –6öç7B&–æF–ærÒ&–æF–æw5²’Ó°  ––b‚&–æF–ærçW6T6÷VçB²²ÓÓÒ’°  —F†—2åöÆVæD&–æF–ær‚&–æF–ær“° –&–æF–ærç6fT÷&–v–æÅ7FFR‚“°  —Ð  —Ð  —F†—2åöÆVæD7F–öâ‚7F–öâ“°  —Ð  —Ð  •öFV7F—fFT7F–öâ‚7F–öâ’°  ––b‚F†—2åö—47F—fT7F–öâ‚7F–öâ’’°  –6öç7B&–æF–æw2Ò7F–öâå÷&÷W'G”&–æF–æw3°  ’òòFV7&VÖVçB&VfW&Væ6R6÷VçG2ò6÷'B÷WB7FFP –f÷"‚ÆWB’ÒÂâÒ&–æF–æw2æÆVæwFƒ²’ÓÒã²²²’’°  –6öç7B&–æF–ærÒ&–æF–æw5²’Ó°  ––b‚ÒÒ&–æF–ærçW6T6÷VçBÓÓÒ’°  –&–æF–ærç&W7F÷&T÷&–v–æÅ7FFR‚“° —F†—2å÷F¶T&6´&–æF–ær‚&–æF–ær“°  —Ð  —Ð  —F†—2å÷F¶T&6´7F–öâ‚7F–öâ“°  —Ð  —Ð  ’òòÖVÖ÷'’ÖævW   •ö–æ—DÖVÖ÷'”ÖævW"‚’°  —F†—2åö7F–öç2ÒµÓ²òòvä7F—fT7F–öç2rföÆÆ÷vVB'’–æ7F—fRöæW0 —F†—2åöä7F—fT7F–öç2Ò°  —F†—2åö7F–öç4'”6Æ—Ò·Ó° ’òò–ç6–FS  ’òò° ’òò –¶æ÷vä7F–öç3¢'&“Âæ–ÖF–öä7F–öââÒW6VB2&÷F÷G—W0 ’òò –7F–öä'•&ö÷C¢æ–ÖF–öä7F–öâÒÆöö·W  ’òòÐ   —F†—2åö&–æF–æw2ÒµÓ²òòvä7F—fT&–æF–æw2rföÆÆ÷vVB'’–æ7F—fRöæW0 —F†—2åöä7F—fT&–æF–æw2Ò°  —F†—2åö&–æF–æw4'•&ö÷DæDæÖRÒ·Ó²òò–ç6–FS¢ÖÂæÖRÂ&÷W'G”Ö—†W"à   —F†—2åö6öçG&öÄ–çFW'öÆçG2ÒµÓ²òò6ÖRvÖR2&÷fP —F†—2åöä7F—fT6öçG&öÄ–çFW'öÆçG2Ò°  –6öç7B66÷RÒF†—3°  —F†—2ç7FG2Ò°  –7F–öç3¢° –vWBF÷FÂ‚’°  —&WGW&â66÷Råö7F–öç2æÆVæwFƒ°  —ÒÀ –vWB–åW6R‚’°  —&WGW&â66÷Råöä7F—fT7F–öç3°  —Ð —ÒÀ –&–æF–æw3¢° –vWBF÷FÂ‚’°  —&WGW&â66÷Råö&–æF–æw2æÆVæwFƒ°  —ÒÀ –vWB–åW6R‚’°  —&WGW&â66÷Råöä7F—fT&–æF–æw3°  —Ð —ÒÀ –6öçG&öÄ–çFW'öÆçG3¢° –vWBF÷FÂ‚’°  —&WGW&â66÷Råö6öçG&öÄ–çFW'öÆçG2æÆVæwFƒ°  —ÒÀ –vWB–åW6R‚’°  —&WGW&â66÷Råöä7F—fT6öçG&öÄ–çFW'öÆçG3°  —Ð —Ð  —Ó°  —Ð  ’òòÖVÖ÷'’ÖævVÖVçBf÷"æ–ÖF–öä7F–öâö&¦V7G0  •ö—47F—fT7F–öâ‚7F–öâ’°  –6öç7B–æFW‚Ò7F–öâåö66†T–æFWƒ° —&WGW&â–æFW‚ÓÒçVÆÂbb–æFW‚ÂF†—2åöä7F—fT7F–öç3°  —Ð  •öFD–æ7F—fT7F–öâ‚7F–öâÂ6Æ—WV–BÂ&ö÷EWV–B’°  –6öç7B7F–öç2ÒF†—2åö7F–öç2À –7F–öç4'”6Æ—ÒF†—2åö7F–öç4'”6Æ—°  –ÆWB7F–öç4f÷$6Æ—Ò7F–öç4'”6Æ—²6Æ—WV–BÓ°  ––b‚7F–öç4f÷$6Æ—ÓÓÒVæFVf–æVB’°  –7F–öç4f÷$6Æ—Ò°  –¶æ÷vä7F–öç3¢²7F–öâÒÀ –7F–öä'•&ö÷C¢·Ð  —Ó°  –7F–öâåö'”6Æ—66†T–æFW‚Ò°  –7F–öç4'”6Æ—²6Æ—WV–BÒÒ7F–öç4f÷$6Æ—°  —ÒVÇ6R°  –6öç7B¶æ÷vä7F–öç2Ò7F–öç4f÷$6Æ—æ¶æ÷vä7F–öç3°  –7F–öâåö'”6Æ—66†T–æFW‚Ò¶æ÷vä7F–öç2æÆVæwFƒ° –¶æ÷vä7F–öç2çW6‚‚7F–öâ“°  —Ð  –7F–öâåö66†T–æFW‚Ò7F–öç2æÆVæwFƒ° –7F–öç2çW6‚‚7F–öâ“°  –7F–öç4f÷$6Æ—æ7F–öä'•&ö÷E²&ö÷EWV–BÒÒ7F–öã°  —Ð  •÷&VÖ÷fT–æ7F—fT7F–öâ‚7F–öâ’°  –6öç7B7F–öç2ÒF†—2åö7F–öç2À –Æ7D–æ7F—fT7F–öâÒ7F–öç5²7F–öç2æÆVæwF‚ÒÒÀ –66†T–æFW‚Ò7F–öâåö66†T–æFWƒ°  –Æ7D–æ7F—fT7F–öâåö66†T–æFW‚Ò66†T–æFWƒ° –7F–öç5²66†T–æFW‚ÒÒÆ7D–æ7F—fT7F–öã° –7F–öç2ç÷‚“°  –7F–öâåö66†T–æFW‚ÒçVÆÃ°   –6öç7B6Æ—WV–BÒ7F–öâåö6Æ—çWV–BÀ –7F–öç4'”6Æ—ÒF†—2åö7F–öç4'”6Æ—À –7F–öç4f÷$6Æ—Ò7F–öç4'”6Æ—²6Æ—WV–BÒÀ –¶æ÷vä7F–öç4f÷$6Æ—Ò7F–öç4f÷$6Æ—æ¶æ÷vä7F–öç2À  –Æ7D¶æ÷vä7F–öâÐ –¶æ÷vä7F–öç4f÷$6Æ—²¶æ÷vä7F–öç4f÷$6Æ—æÆVæwF‚ÒÒÀ  –'”6Æ—66†T–æFW‚Ò7F–öâåö'”6Æ—66†T–æFWƒ°  –Æ7D¶æ÷vä7F–öâåö'”6Æ—66†T–æFW‚Ò'”6Æ—66†T–æFWƒ° –¶æ÷vä7F–öç4f÷$6Æ—²'”6Æ—66†T–æFW‚ÒÒÆ7D¶æ÷vä7F–öã° –¶æ÷vä7F–öç4f÷$6Æ—ç÷‚“°  –7F–öâåö'”6Æ—66†T–æFW‚ÒçVÆÃ°   –6öç7B7F–öä'•&ö÷BÒ7F–öç4f÷$6Æ—æ7F–öä'•&ö÷BÀ —&ö÷EWV–BÒ‚7F–öâåöÆö6Å&ö÷BÇÂF†—2å÷&ö÷B’çWV–C°  –FVÆWFR7F–öä'•&ö÷E²&ö÷EWV–BÓ°  ––b‚¶æ÷vä7F–öç4f÷$6Æ—æÆVæwF‚ÓÓÒ’°  –FVÆWFR7F–öç4'”6Æ—²6Æ—WV–BÓ°  —Ð  —F†—2å÷&VÖ÷fT–æ7F—fT&–æF–æw4f÷$7F–öâ‚7F–öâ“°  —Ð  •÷&VÖ÷fT–æ7F—fT&–æF–æw4f÷$7F–öâ‚7F–öâ’°  –6öç7B&–æF–æw2Ò7F–öâå÷&÷W'G”&–æF–æw3°  –f÷"‚ÆWB’ÒÂâÒ&–æF–æw2æÆVæwFƒ²’ÓÒã²²²’’°  –6öç7B&–æF–ærÒ&–æF–æw5²’Ó°  ––b‚ÒÒ&–æF–ærç&VfW&Væ6T6÷VçBÓÓÒ’°  —F†—2å÷&VÖ÷fT–æ7F—fT&–æF–ær‚&–æF–ær“°  —Ð  —Ð  —Ð  •öÆVæD7F–öâ‚7F–öâ’°  ’òò²7F—fR7F–öç2Â–æ7F—fR7F–öç2Ð ’òò²7F—fR7F–öç2çÂ–æ7F—fR7F–öç2Ð ’òò2 ’òòÂ×7vÓà ’òò0  –6öç7B7F–öç2ÒF†—2åö7F–öç2À —&Wd–æFW‚Ò7F–öâåö66†T–æFW‚À  –Æ7D7F—fT–æFW‚ÒF†—2åöä7F—fT7F–öç2²²À  –f—'7D–æ7F—fT7F–öâÒ7F–öç5²Æ7D7F—fT–æFW‚Ó°  –7F–öâåö66†T–æFW‚ÒÆ7D7F—fT–æFWƒ° –7F–öç5²Æ7D7F—fT–æFW‚ÒÒ7F–öã°  –f—'7D–æ7F—fT7F–öâåö66†T–æFW‚Ò&Wd–æFWƒ° –7F–öç5²&Wd–æFW‚ÒÒf—'7D–æ7F—fT7F–öã°  —Ð  •÷F¶T&6´7F–öâ‚7F–öâ’°  ’òò²7F—fR7F–öç2Â–æ7F—fR7F–öç2Ð ’òò²7F—fR7F–öç2ÃÂ–æ7F—fR7F–öç2Ð ’òò0 ’òòÂ×7vÓà ’òò2  –6öç7B7F–öç2ÒF†—2åö7F–öç2À —&Wd–æFW‚Ò7F–öâåö66†T–æFW‚À  –f—'7D–æ7F—fT–æFW‚ÒÒÒF†—2åöä7F—fT7F–öç2À  –Æ7D7F—fT7F–öâÒ7F–öç5²f—'7D–æ7F—fT–æFW‚Ó°  –7F–öâåö66†T–æFW‚Òf—'7D–æ7F—fT–æFWƒ° –7F–öç5²f—'7D–æ7F—fT–æFW‚ÒÒ7F–öã°  –Æ7D7F—fT7F–öâåö66†T–æFW‚Ò&Wd–æFWƒ° –7F–öç5²&Wd–æFW‚ÒÒÆ7D7F—fT7F–öã°  —Ð  ’òòÖVÖ÷'’ÖævVÖVçBf÷"&÷W'G”Ö—†W"ö&¦V7G0  •öFD–æ7F—fT&–æF–ær‚&–æF–ærÂ&ö÷EWV–BÂG&6´æÖR’°  –6öç7B&–æF–æw4'•&ö÷BÒF†—2åö&–æF–æw4'•&ö÷DæDæÖRÀ –&–æF–æw2ÒF†—2åö&–æF–æw3°  –ÆWB&–æF–æt'”æÖRÒ&–æF–æw4'•&ö÷E²&ö÷EWV–BÓ°  ––b‚&–æF–æt'”æÖRÓÓÒVæFVf–æVB’°  –&–æF–æt'”æÖRÒ·Ó° –&–æF–æw4'•&ö÷E²&ö÷EWV–BÒÒ&–æF–æt'”æÖS°  —Ð  –&–æF–æt'”æÖU²G&6´æÖRÒÒ&–æF–æs°  –&–æF–æråö66†T–æFW‚Ò&–æF–æw2æÆVæwFƒ° –&–æF–æw2çW6‚‚&–æF–ær“°  —Ð  •÷&VÖ÷fT–æ7F—fT&–æF–ær‚&–æF–ær’°  –6öç7B&–æF–æw2ÒF†—2åö&–æF–æw2À —&÷&–æF–ærÒ&–æF–æræ&–æF–ærÀ —&ö÷EWV–BÒ&÷&–æF–ærç&ö÷DæöFRçWV–BÀ —G&6´æÖRÒ&÷&–æF–ærçF‚À –&–æF–æw4'•&ö÷BÒF†—2åö&–æF–æw4'•&ö÷DæDæÖRÀ –&–æF–æt'”æÖRÒ&–æF–æw4'•&ö÷E²&ö÷EWV–BÒÀ  –Æ7D–æ7F—fT&–æF–ærÒ&–æF–æw5²&–æF–æw2æÆVæwF‚ÒÒÀ –66†T–æFW‚Ò&–æF–æråö66†T–æFWƒ°  –Æ7D–æ7F—fT&–æF–æråö66†T–æFW‚Ò66†T–æFWƒ° –&–æF–æw5²66†T–æFW‚ÒÒÆ7D–æ7F—fT&–æF–æs° –&–æF–æw2ç÷‚“°  –FVÆWFR&–æF–æt'”æÖU²G&6´æÖRÓ°  ––b‚ö&¦V7Bæ¶W—2‚&–æF–æt'”æÖR’æÆVæwF‚ÓÓÒ’°  –FVÆWFR&–æF–æw4'•&ö÷E²&ö÷EWV–BÓ°  —Ð  —Ð  •öÆVæD&–æF–ær‚&–æF–ær’°  –6öç7B&–æF–æw2ÒF†—2åö&–æF–æw2À —&Wd–æFW‚Ò&–æF–æråö66†T–æFW‚À  –Æ7D7F—fT–æFW‚ÒF†—2åöä7F—fT&–æF–æw2²²À  –f—'7D–æ7F—fT&–æF–ærÒ&–æF–æw5²Æ7D7F—fT–æFW‚Ó°  –&–æF–æråö66†T–æFW‚ÒÆ7D7F—fT–æFWƒ° –&–æF–æw5²Æ7D7F—fT–æFW‚ÒÒ&–æF–æs°  –f—'7D–æ7F—fT&–æF–æråö66†T–æFW‚Ò&Wd–æFWƒ° –&–æF–æw5²&Wd–æFW‚ÒÒf—'7D–æ7F—fT&–æF–æs°  —Ð  •÷F¶T&6´&–æF–ær‚&–æF–ær’°  –6öç7B&–æF–æw2ÒF†—2åö&–æF–æw2À —&Wd–æFW‚Ò&–æF–æråö66†T–æFW‚À  –f—'7D–æ7F—fT–æFW‚ÒÒÒF†—2åöä7F—fT&–æF–æw2À  –Æ7D7F—fT&–æF–ærÒ&–æF–æw5²f—'7D–æ7F—fT–æFW‚Ó°  –&–æF–æråö66†T–æFW‚Òf—'7D–æ7F—fT–æFWƒ° –&–æF–æw5²f—'7D–æ7F—fT–æFW‚ÒÒ&–æF–æs°  –Æ7D7F—fT&–æF–æråö66†T–æFW‚Ò&Wd–æFWƒ° –&–æF–æw5²&Wd–æFW‚ÒÒÆ7D7F—fT&–æF–æs°  —Ð   ’òòÖVÖ÷'’ÖævVÖVçBöb–çFW'öÆçG2f÷"vV–v‡BæBF–ÖR66ÆP  •öÆVæD6öçG&öÄ–çFW'öÆçB‚’°  –6öç7B–çFW'öÆçG2ÒF†—2åö6öçG&öÄ–çFW'öÆçG2À –Æ7D7F—fT–æFW‚ÒF†—2åöä7F—fT6öçG&öÄ–çFW'öÆçG2²³°  –ÆWB–çFW'öÆçBÒ–çFW'öÆçG5²Æ7D7F—fT–æFW‚Ó°  ––b‚–çFW'öÆçBÓÓÒVæFVf–æVB’°  ––çFW'öÆçBÒæWrÆ–æV$–çFW'öÆçB€ –æWrfÆöC3$'&’‚"’ÂæWrfÆöC3$'&’‚"’À “Âö6öçG&öÄ–çFW'öÆçG5&W7VÇD'VffW"“°  ––çFW'öÆçBåõö66†T–æFW‚ÒÆ7D7F—fT–æFWƒ° ––çFW'öÆçG5²Æ7D7F—fT–æFW‚ÒÒ–çFW'öÆçC°  —Ð  —&WGW&â–çFW'öÆçC°  —Ð  •÷F¶T&6´6öçG&öÄ–çFW'öÆçB‚–çFW'öÆçB’°  –6öç7B–çFW'öÆçG2ÒF†—2åö6öçG&öÄ–çFW'öÆçG2À —&Wd–æFW‚Ò–çFW'öÆçBåõö66†T–æFW‚À  –f—'7D–æ7F—fT–æFW‚ÒÒÒF†—2åöä7F—fT6öçG&öÄ–çFW'öÆçG2À  –Æ7D7F—fT–çFW'öÆçBÒ–çFW'öÆçG5²f—'7D–æ7F—fT–æFW‚Ó°  ––çFW'öÆçBåõö66†T–æFW‚Òf—'7D–æ7F—fT–æFWƒ° ––çFW'öÆçG5²f—'7D–æ7F—fT–æFW‚ÒÒ–çFW'öÆçC°  –Æ7D7F—fT–çFW'öÆçBåõö66†T–æFW‚Ò&Wd–æFWƒ° ––çFW'öÆçG5²&Wd–æFW‚ÒÒÆ7D7F—fT–çFW'öÆçC°  —Ð  ’òò&WGW&ââ7F–öâf÷"6Æ—÷F–öæÆÇ’W6–ær7W7FöÒ&ö÷BF&vW@ ’òòö&¦V7B‡F†—2ÖWF†öBÆÆö6FW2Æ÷BöbG–æÖ–2ÖVÖ÷'’–â66R ’òò&Wf–÷W6Ç’Væ¶æ÷vâ6Æ—÷&ö÷B6öÖ&–æF–öâ—27V6–f–VB –6Æ—7F–öâ‚6Æ—Â÷F–öæÅ&ö÷BÂ&ÆVæDÖöFR’°  –6öç7B&ö÷BÒ÷F–öæÅ&ö÷BÇÂF†—2å÷&ö÷BÀ —&ö÷EWV–BÒ&ö÷BçWV–C°  –ÆWB6Æ—ö&¦V7BÒG—Vöb6Æ—ÓÓÒw7G&–ærròæ–ÖF–öä6Æ—æf–æD'”æÖR‚&ö÷BÂ6Æ—’¢6Æ—°  –6öç7B6Æ—WV–BÒ6Æ—ö&¦V7BÓÒçVÆÂò6Æ—ö&¦V7BçWV–B¢6Æ—°  –6öç7B7F–öç4f÷$6Æ—ÒF†—2åö7F–öç4'”6Æ—²6Æ—WV–BÓ° –ÆWB&÷F÷G—T7F–öâÒçVÆÃ°  ––b‚&ÆVæDÖöFRÓÓÒVæFVf–æVB’°  ––b‚6Æ—ö&¦V7BÓÒçVÆÂ’°  –&ÆVæDÖöFRÒ6Æ—ö&¦V7Bæ&ÆVæDÖöFS°  —ÒVÇ6R°  –&ÆVæDÖöFRÒæ÷&ÖÄæ–ÖF–öä&ÆVæDÖöFS°  —Ð  —Ð  ––b‚7F–öç4f÷$6Æ—ÓÒVæFVf–æVB’°  –6öç7BW†—7F–æt7F–öâÒ7F–öç4f÷$6Æ—æ7F–öä'•&ö÷E²&ö÷EWV–BÓ°  ––b‚W†—7F–æt7F–öâÓÒVæFVf–æVBbbW†—7F–æt7F–öâæ&ÆVæDÖöFRÓÓÒ&ÆVæDÖöFR’°  —&WGW&âW†—7F–æt7F–öã°  —Ð  ’òòvR¶æ÷rF†R6Æ—Â6òvRFöâwB†fRFò'6RÆÀ ’òòF†R&–æF–æw2v–â'WB6â§W7B6÷ —&÷F÷G—T7F–öâÒ7F–öç4f÷$6Æ—æ¶æ÷vä7F–öç5²Ó°  ’òòÇ6òÂF¶RF†R6Æ—g&öÒF†R&÷F÷G—R7F–öà ––b‚6Æ—ö&¦V7BÓÓÒçVÆÂ –6Æ—ö&¦V7BÒ&÷F÷G—T7F–öâåö6Æ—°  —Ð  ’òò6Æ—×W7B&R¶æ÷vâv†Vâ7V6–f–VBf–7G&–æp ––b‚6Æ—ö&¦V7BÓÓÒçVÆÂ’&WGW&âçVÆÃ°  ’òòÆÆö6FRÆÂ&W6÷W&6W2&WV—&VBFò'Vâ—@ –6öç7BæWt7F–öâÒæWræ–ÖF–öä7F–öâ‚F†—2Â6Æ—ö&¦V7BÂ÷F–öæÅ&ö÷BÂ&ÆVæDÖöFR“°  —F†—2åö&–æD7F–öâ‚æWt7F–öâÂ&÷F÷G—T7F–öâ“°  ’òòæBÖ¶RF†R7F–öâ¶æ÷vâFòF†RÖVÖ÷'’ÖævW  —F†—2åöFD–æ7F—fT7F–öâ‚æWt7F–öâÂ6Æ—WV–BÂ&ö÷EWV–B“°  —&WGW&âæWt7F–öã°  —Ð  ’òòvWBâW†—7F–ær7F–öà –W†—7F–æt7F–öâ‚6Æ—Â÷F–öæÅ&ö÷B’°  –6öç7B&ö÷BÒ÷F–öæÅ&ö÷BÇÂF†—2å÷&ö÷BÀ —&ö÷EWV–BÒ&ö÷BçWV–BÀ  –6Æ—ö&¦V7BÒG—Vöb6Æ—ÓÓÒw7G&–ærrð ”æ–ÖF–öä6Æ—æf–æD'”æÖR‚&ö÷BÂ6Æ—’¢6Æ—À  –6Æ—WV–BÒ6Æ—ö&¦V7Bò6Æ—ö&¦V7BçWV–B¢6Æ—À  –7F–öç4f÷$6Æ—ÒF†—2åö7F–öç4'”6Æ—²6Æ—WV–BÓ°  ––b‚7F–öç4f÷$6Æ—ÓÒVæFVf–æVB’°  —&WGW&â7F–öç4f÷$6Æ—æ7F–öä'•&ö÷E²&ö÷EWV–BÒÇÂçVÆÃ°  —Ð  —&WGW&âçVÆÃ°  —Ð  ’òòFV7F—fFW2ÆÂ&Wf–÷W6Ç’66†VGVÆVB7F–öç0 —7F÷ÆÄ7F–öâ‚’°  –6öç7B7F–öç2ÒF†—2åö7F–öç2À –ä7F–öç2ÒF†—2åöä7F—fT7F–öç3°  –f÷"‚ÆWB’Òä7F–öç2Ò²’ãÒ²ÒÒ’’°  –7F–öç5²’Òç7F÷‚“°  —Ð  —&WGW&âF†—3°  —Ð  ’òòGfæ6RF†RF–ÖRæBWFFRÇ’F†Ræ–ÖF–öà —WFFR‚FVÇFF–ÖR’°  –FVÇFF–ÖR£ÒF†—2çF–ÖU66ÆS°  –6öç7B7F–öç2ÒF†—2åö7F–öç2À –ä7F–öç2ÒF†—2åöä7F—fT7F–öç2À  —F–ÖRÒF†—2çF–ÖR³ÒFVÇFF–ÖRÀ —F–ÖTF—&V7F–öâÒÖF‚ç6–vâ‚FVÇFF–ÖR’À  –67T–æFW‚ÒF†—2åö67T–æFW‚ãÒ°  ’òò'Vâ7F—fR7F–öç0  –f÷"‚ÆWB’Ò²’ÓÒä7F–öç3²²²’’°  –6öç7B7F–öâÒ7F–öç5²’Ó°  –7F–öâå÷WFFR‚F–ÖRÂFVÇFF–ÖRÂF–ÖTF—&V7F–öâÂ67T–æFW‚“°  —Ð  ’òòWFFR66VæRw&€  –6öç7B&–æF–æw2ÒF†—2åö&–æF–æw2À –ä&–æF–æw2ÒF†—2åöä7F—fT&–æF–æw3°  –f÷"‚ÆWB’Ò²’ÓÒä&–æF–æw3²²²’’°  –&–æF–æw5²’ÒæÇ’‚67T–æFW‚“°  —Ð  —&WGW&âF†—3°  —Ð  ’òòÆÆ÷w2–÷RFò6VV²Fò7V6–f–2F–ÖR–ââæ–ÖF–öâà —6WEF–ÖR‚F–ÖT–å6V6öæG2’°  —F†—2çF–ÖRÒ²òò¦W&ò÷WBF–ÖRGG&–'WFRf÷"æ–ÖF–öäÖ—†W"ö&¦V7C° –f÷"‚ÆWB’Ò²’ÂF†—2åö7F–öç2æÆVæwFƒ²’²²’°  —F†—2åö7F–öç5²’ÒçF–ÖRÒ²òò¦W&ò÷WBF–ÖRGG&–'WFRf÷"ÆÂ76ö6–FVBæ–ÖF–öä7F–öâö&¦V7G2à  —Ð  —&WGW&âF†—2çWFFR‚F–ÖT–å6V6öæG2“²òòWFFRW6VBFò6WBW†7BF–ÖRâ&WGW&ç2'F†—2"æ–ÖF–öäÖ—†W"ö&¦V7Bà  —Ð  ’òò&WGW&âF†—2Ö—†W"w2&ö÷BF&vWBö&¦V7@ –vWE&ö÷B‚’°  —&WGW&âF†—2å÷&ö÷C°  —Ð  ’òòg&VRÆÂ&W6÷W&6W27V6–f–2Fò'F–7VÆ"6Æ—  —Væ66†T6Æ—‚6Æ—’°  –6öç7B7F–öç2ÒF†—2åö7F–öç2À –6Æ—WV–BÒ6Æ—çWV–BÀ –7F–öç4'”6Æ—ÒF†—2åö7F–öç4'”6Æ—À –7F–öç4f÷$6Æ—Ò7F–öç4'”6Æ—²6Æ—WV–BÓ°  ––b‚7F–öç4f÷$6Æ—ÓÒVæFVf–æVB’°  ’òòæ÷FS¢§W7B6ÆÆ–ær÷&VÖ÷fT–æ7F—fT7F–öâv÷VÆBÖW72WF†P ’òò—FW&F–öâ7FFRæBÇ6ò&WV—&RWFF–ærF†R7FFRvR6à ’òò§W7BF‡&÷rv  –6öç7B7F–öç5Fõ&VÖ÷fRÒ7F–öç4f÷$6Æ—æ¶æ÷vä7F–öç3°  –f÷"‚ÆWB’ÒÂâÒ7F–öç5Fõ&VÖ÷fRæÆVæwFƒ²’ÓÒã²²²’’°  –6öç7B7F–öâÒ7F–öç5Fõ&VÖ÷fU²’Ó°  —F†—2åöFV7F—fFT7F–öâ‚7F–öâ“°  –6öç7B66†T–æFW‚Ò7F–öâåö66†T–æFW‚À –Æ7D–æ7F—fT7F–öâÒ7F–öç5²7F–öç2æÆVæwF‚ÒÓ°  –7F–öâåö66†T–æFW‚ÒçVÆÃ° –7F–öâåö'”6Æ—66†T–æFW‚ÒçVÆÃ°  –Æ7D–æ7F—fT7F–öâåö66†T–æFW‚Ò66†T–æFWƒ° –7F–öç5²66†T–æFW‚ÒÒÆ7D–æ7F—fT7F–öã° –7F–öç2ç÷‚“°  —F†—2å÷&VÖ÷fT–æ7F—fT&–æF–æw4f÷$7F–öâ‚7F–öâ“°  —Ð  –FVÆWFR7F–öç4'”6Æ—²6Æ—WV–BÓ°  —Ð  —Ð  ’òòg&VRÆÂ&W6÷W&6W27V6–f–2Fò'F–7VÆ"&ö÷BF&vWBö&¦V7@ —Væ66†U&ö÷B‚&ö÷B’°  –6öç7B&ö÷EWV–BÒ&ö÷BçWV–BÀ –7F–öç4'”6Æ—ÒF†—2åö7F–öç4'”6Æ—°  –f÷"‚6öç7B6Æ—WV–B–â7F–öç4'”6Æ—’°  –6öç7B7F–öä'•&ö÷BÒ7F–öç4'”6Æ—²6Æ—WV–BÒæ7F–öä'•&ö÷BÀ –7F–öâÒ7F–öä'•&ö÷E²&ö÷EWV–BÓ°  ––b‚7F–öâÓÒVæFVf–æVB’°  —F†—2åöFV7F—fFT7F–öâ‚7F–öâ“° —F†—2å÷&VÖ÷fT–æ7F—fT7F–öâ‚7F–öâ“°  —Ð  —Ð  –6öç7B&–æF–æw4'•&ö÷BÒF†—2åö&–æF–æw4'•&ö÷DæDæÖRÀ –&–æF–æt'”æÖRÒ&–æF–æw4'•&ö÷E²&ö÷EWV–BÓ°  ––b‚&–æF–æt'”æÖRÓÒVæFVf–æVB’°  –f÷"‚6öç7BG&6´æÖR–â&–æF–æt'”æÖR’°  –6öç7B&–æF–ærÒ&–æF–æt'”æÖU²G&6´æÖRÓ° –&–æF–ærç&W7F÷&T÷&–v–æÅ7FFR‚“° —F†—2å÷&VÖ÷fT–æ7F—fT&–æF–ær‚&–æF–ær“°  —Ð  —Ð  —Ð  ’òò&VÖ÷fRF&vWFVB6Æ—g&öÒF†R66†P —Væ66†T7F–öâ‚6Æ—Â÷F–öæÅ&ö÷B’°  –6öç7B7F–öâÒF†—2æW†—7F–æt7F–öâ‚6Æ—Â÷F–öæÅ&ö÷B“°  ––b‚7F–öâÓÒçVÆÂ’°  —F†—2åöFV7F—fFT7F–öâ‚7F–öâ“° —F†—2å÷&VÖ÷fT–æ7F—fT7F–öâ‚7F–öâ“°  —Ð  —Ð §Ð ¦6Æ72Væ–f÷&Ò°  –6öç7G'V7F÷"‚fÇVR’°  —F†—2çfÇVRÒfÇVS°  —Ð  –6ÆöæR‚’°  —&WGW&âæWrVæ–f÷&Ò‚F†—2çfÇVRæ6ÆöæRÓÓÒVæFVf–æVBòF†—2çfÇVR¢F†—2çfÇVRæ6ÆöæR‚’“°  —Ð §Ð ¦ÆWBö–BÒ° ¦6Æ72Væ–f÷&×4w&÷WW‡FVæG2WfVçDF—7F6†W"°  –6öç7G'V7F÷"‚’°  —7WW"‚“°  —F†—2æ—5Væ–f÷&×4w&÷WÒG'VS°  ”ö&¦V7BæFVf–æU&÷W'G’‚F†—2Âv–BrÂ²fÇVS¢ö–B²²Ò“°  —F†—2ææÖRÒrs°  —F†—2çW6vRÒ7FF–4G&uW6vS° —F†—2çVæ–f÷&×2ÒµÓ°  —Ð  –FB‚Væ–f÷&Ò’°  —F†—2çVæ–f÷&×2çW6‚‚Væ–f÷&Ò“°  —&WGW&âF†—3°  —Ð  —&VÖ÷fR‚Væ–f÷&Ò’°  –6öç7B–æFW‚ÒF†—2çVæ–f÷&×2æ–æFW„öb‚Væ–f÷&Ò“°  ––b‚–æFW‚ÓÒÒ’F†—2çVæ–f÷&×2ç7Æ–6R‚–æFW‚Â“°  —&WGW&âF†—3°  —Ð  —6WDæÖR‚æÖR’°  —F†—2ææÖRÒæÖS°  —&WGW&âF†—3°  —Ð  —6WEW6vR‚fÇVR’°  —F†—2çW6vRÒfÇVS°  —&WGW&âF†—3°  —Ð  –F—7÷6R‚’°  —F†—2æF—7F6„WfVçB‚²G—S¢vF—7÷6RrÒ“°  —&WGW&âF†—3°  —Ð  –6÷’‚6÷W&6R’°  —F†—2ææÖRÒ6÷W&6RææÖS° —F†—2çW6vRÒ6÷W&6RçW6vS°  –6öç7BVæ–f÷&×56÷W&6RÒ6÷W&6RçVæ–f÷&×3°  —F†—2çVæ–f÷&×2æÆVæwF‚Ò°  –f÷"‚ÆWB’ÒÂÂÒVæ–f÷&×56÷W&6RæÆVæwFƒ²’ÂÃ²’²²’°  –6öç7BVæ–f÷&×2Ò'&’æ—4'&’‚Væ–f÷&×56÷W&6U²’Ò’òVæ–f÷&×56÷W&6U²’Ò¢²Væ–f÷&×56÷W&6U²’ÒÓ°  –f÷"‚ÆWB¢Ò²¢ÂVæ–f÷&×2æÆVæwFƒ²¢²²’°  —F†—2çVæ–f÷&×2çW6‚‚Væ–f÷&×5²¢Òæ6ÆöæR‚’“°  —Ð  —Ð  —&WGW&âF†—3°  —Ð  –6ÆöæR‚’°  —&WGW&âæWrF†—2æ6öç7G'V7F÷"‚’æ6÷’‚F†—2“°  —Ð §Ð ¦6Æ72–ç7Fæ6VD–çFW&ÆVfVD'VffW"W‡FVæG2–çFW&ÆVfVD'VffW"°  –6öç7G'V7F÷"‚'&’Â7G&–FRÂÖW6…W$GG&–'WFRÒ’°  —7WW"‚'&’Â7G&–FR“°  —F†—2æ—4–ç7Fæ6VD–çFW&ÆVfVD'VffW"ÒG'VS°  —F†—2æÖW6…W$GG&–'WFRÒÖW6…W$GG&–'WFS°  —Ð  –6÷’‚6÷W&6R’°  —7WW"æ6÷’‚6÷W&6R“°  —F†—2æÖW6…W$GG&–'WFRÒ6÷W&6RæÖW6…W$GG&–'WFS°  —&WGW&âF†—3°  —Ð  –6ÆöæR‚FF’°  –6öç7B–"Ò7WW"æ6ÆöæR‚FF“°  ––"æÖW6…W$GG&–'WFRÒF†—2æÖW6…W$GG&–'WFS°  —&WGW&â–#°  —Ð  —Fô¥4ôâ‚FF’°  –6öç7B§6öâÒ7WW"çFô¥4ôâ‚FF“°  –§6öâæ—4–ç7Fæ6VD–çFW&ÆVfVD'VffW"ÒG'VS° –§6öâæÖW6…W$GG&–'WFRÒF†—2æÖW6…W$GG&–'WFS°  —&WGW&â§6öã°  —Ð §Ð ¦6Æ72tÄ'VffW$GG&–'WFR°  –6öç7G'V7F÷"‚'VffW"ÂG—RÂ—FVÕ6—¦RÂVÆVÖVçE6—¦RÂ6÷VçB’°  —F†—2æ—4tÄ'VffW$GG&–'WFRÒG'VS°  —F†—2ææÖRÒrs°  —F†—2æ'VffW"Ò'VffW#° —F†—2çG—RÒG—S° —F†—2æ—FVÕ6—¦RÒ—FVÕ6—¦S° —F†—2æVÆVÖVçE6—¦RÒVÆVÖVçE6—¦S° —F†—2æ6÷VçBÒ6÷VçC°  —F†—2çfW'6–öâÒ°  —Ð  —6WBæVVG5WFFR‚fÇVR’°  ––b‚fÇVRÓÓÒG'VR’F†—2çfW'6–öâ²³°  —Ð  —6WD'VffW"‚'VffW"’°  —F†—2æ'VffW"Ò'VffW#°  —&WGW&âF†—3°  —Ð  —6WEG—R‚G—RÂVÆVÖVçE6—¦R’°  —F†—2çG—RÒG—S° —F†—2æVÆVÖVçE6—¦RÒVÆVÖVçE6—¦S°  —&WGW&âF†—3°  —Ð  —6WD—FVÕ6—¦R‚—FVÕ6—¦R’°  —F†—2æ—FVÕ6—¦RÒ—FVÕ6—¦S°  —&WGW&âF†—3°  —Ð  —6WD6÷VçB‚6÷VçB’°  —F†—2æ6÷VçBÒ6÷VçC°  —&WGW&âF†—3°  —Ð §Ð ¦6öç7BöÖG&—‚Òò¤õõU$Uõò¢òæWrÖG&—ƒB‚“° ¦6Æ72&–67FW"°  –6öç7G'V7F÷"‚÷&–v–âÂF—&V7F–öâÂæV"ÒÂf"Ò–æf–æ—G’’°  —F†—2ç&’ÒæWr&’‚÷&–v–âÂF—&V7F–öâ“° ’òòF—&V7F–öâ—277VÖVBFò&Ræ÷&ÖÆ—¦VB†f÷"67W&FRF—7Fæ6R6Æ7VÆF–öç2  —F†—2ææV"ÒæV#° —F†—2æf"Òf#° —F†—2æ6ÖW&ÒçVÆÃ° —F†—2æÆ–W'2ÒæWrÆ–W'2‚“°  —F†—2ç&×2Ò° ”ÖW6ƒ¢·ÒÀ ”Æ–æS¢²F‡&W6†öÆC¢ÒÀ ”ÄôC¢·ÒÀ •ö–çG3¢²F‡&W6†öÆC¢ÒÀ •7&—FS¢·Ð —Ó°  —Ð  —6WB‚÷&–v–âÂF—&V7F–öâ’°  ’òòF—&V7F–öâ—277VÖVBFò&Ræ÷&ÖÆ—¦VB†f÷"67W&FRF—7Fæ6R6Æ7VÆF–öç2  —F†—2ç&’ç6WB‚÷&–v–âÂF—&V7F–öâ“°  —Ð  —6WDg&öÔ6ÖW&‚6ö÷&G2Â6ÖW&’°  ––b‚6ÖW&æ—5W'7V7F—fT6ÖW&’°  —F†—2ç&’æ÷&–v–âç6WDg&öÔÖG&—…÷6—F–öâ‚6ÖW&æÖG&—…v÷&ÆB“° —F†—2ç&’æF—&V7F–öâç6WB‚6ö÷&G2ç‚Â6ö÷&G2ç’ÂãR’çVç&ö¦V7B‚6ÖW&’ç7V"‚F†—2ç&’æ÷&–v–â’ææ÷&ÖÆ—¦R‚“° —F†—2æ6ÖW&Ò6ÖW&°  —ÒVÇ6R–b‚6ÖW&æ—4÷'F†öw&†–46ÖW&’°  —F†—2ç&’æ÷&–v–âç6WB‚6ö÷&G2ç‚Â6ö÷&G2ç’Â‚6ÖW&ææV"²6ÖW&æf"’ò‚6ÖW&ææV"Ò6ÖW&æf"’’çVç&ö¦V7B‚6ÖW&“²òò6WB÷&–v–â–âÆæRöb6ÖW& —F†—2ç&’æF—&V7F–öâç6WB‚ÂÂÒ’çG&ç6f÷&ÔF—&V7F–öâ‚6ÖW&æÖG&—…v÷&ÆB“° —F†—2æ6ÖW&Ò6ÖW&°  —ÒVÇ6R°  –6öç6öÆRæW'&÷"‚uD…$TRå&–67FW#¢Vç7W÷'FVB6ÖW&G—S¢r²6ÖW&çG—R“°  —Ð  —Ð  —6WDg&öÕ…$6öçG&öÆÆW"‚6öçG&öÆÆW"’°  •öÖG&—‚æ–FVçF—G’‚’æW‡G&7E&÷FF–öâ‚6öçG&öÆÆW"æÖG&—…v÷&ÆB“°  —F†—2ç&’æ÷&–v–âç6WDg&öÔÖG&—…÷6—F–öâ‚6öçG&öÆÆW"æÖG&—…v÷&ÆB“° —F†—2ç&’æF—&V7F–öâç6WB‚ÂÂÒ’æÇ”ÖG&—ƒB‚öÖG&—‚“°  —&WGW&âF†—3°  —Ð  ––çFW'6V7Dö&¦V7B‚ö&¦V7BÂ&V7W'6—fRÒG'VRÂ–çFW'6V7G2ÒµÒ’°  ––çFW'6V7B‚ö&¦V7BÂF†—2Â–çFW'6V7G2Â&V7W'6—fR“°  ––çFW'6V7G2ç6÷'B‚656÷'B“°  —&WGW&â–çFW'6V7G3°  —Ð  ––çFW'6V7Dö&¦V7G2‚ö&¦V7G2Â&V7W'6—fRÒG'VRÂ–çFW'6V7G2ÒµÒ’°  –f÷"‚ÆWB’ÒÂÂÒö&¦V7G2æÆVæwFƒ²’ÂÃ²’²²’°  ––çFW'6V7B‚ö&¦V7G5²’ÒÂF†—2Â–çFW'6V7G2Â&V7W'6—fR“°  —Ð  ––çFW'6V7G2ç6÷'B‚656÷'B“°  —&WGW&â–çFW'6V7G3°  —Ð §Ð ¦gVæ7F–öâ656÷'B‚Â"’°  —&WGW&âæF—7Fæ6RÒ"æF—7Fæ6S° §Ð ¦gVæ7F–öâ–çFW'6V7B‚ö&¦V7BÂ&–67FW"Â–çFW'6V7G2Â&V7W'6—fR’°  –ÆWB&÷vFRÒG'VS°  ––b‚ö&¦V7BæÆ–W'2çFW7B‚&–67FW"æÆ–W'2’’°  –6öç7B&W7VÇBÒö&¦V7Bç&–67B‚&–67FW"Â–çFW'6V7G2“°  ––b‚&W7VÇBÓÓÒfÇ6R’&÷vFRÒfÇ6S°  —Ð  ––b‚&÷vFRÓÓÒG'VRbb&V7W'6—fRÓÓÒG'VR’°  –6öç7B6†–ÆG&VâÒö&¦V7Bæ6†–ÆG&Vã°  –f÷"‚ÆWB’ÒÂÂÒ6†–ÆG&VâæÆVæwFƒ²’ÂÃ²’²²’°  ––çFW'6V7B‚6†–ÆG&Vå²’ÒÂ&–67FW"Â–çFW'6V7G2ÂG'VR“°  —Ð  —Ð §Ð ¢ò¢ ¢¢&Vc¢‡GG3¢òöVâçv–¶—VF–æ÷&r÷v–¶’õ7†W&–6Åö6ö÷&F–æFU÷7—7FVÐ¢ ¢¢†’‡F†RöÆ"ævÆR’—2ÖV7W&VBg&öÒF†R÷6—F—fR’Ö†—2âF†R÷6—F—fR’Ö†—2—2Wà¢¢F†WF‡F†R¦–×WF†ÂævÆR’—2ÖV7W&VBg&öÒF†R÷6—F—fR¢Ö†—2à¢¢ð¦6Æ727†W&–6Â°  –6öç7G'V7F÷"‚&F—W2ÒÂ†’ÒÂF†WFÒ’°  —F†—2ç&F—W2Ò&F—W3° —F†—2ç†’Ò†“²òòöÆ"ævÆP —F†—2çF†WFÒF†WF²òò¦–×WF†ÂævÆP  —&WGW&âF†—3°  —Ð  —6WB‚&F—W2Â†’ÂF†WF’°  —F†—2ç&F—W2Ò&F—W3° —F†—2ç†’Ò†“° —F†—2çF†WFÒF†WF°  —&WGW&âF†—3°  —Ð  –6÷’‚÷F†W"’°  —F†—2ç&F—W2Ò÷F†W"ç&F—W3° —F†—2ç†’Ò÷F†W"ç†“° —F†—2çF†WFÒ÷F†W"çF†WF°  —&WGW&âF†—3°  —Ð  ’òò&W7G&–7B†’Fò&R&WGvVVâU2æB’ÔU0 –Ö¶U6fR‚’°  –6öç7BU2Òã° —F†—2ç†’ÒÖF‚æÖ‚‚U2ÂÖF‚æÖ–â‚ÖF‚å’ÒU2ÂF†—2ç†’’“°  —&WGW&âF†—3°  —Ð  —6WDg&öÕfV7F÷#2‚b’°  —&WGW&âF†—2ç6WDg&öÔ6'FW6–ä6ö÷&G2‚bç‚Âbç’Âbç¢“°  —Ð  —6WDg&öÔ6'FW6–ä6ö÷&G2‚‚Â’Â¢’°  —F†—2ç&F—W2ÒÖF‚ç7'B‚‚¢‚²’¢’²¢¢¢“°  ––b‚F†—2ç&F—W2ÓÓÒ’°  —F†—2çF†WFÒ° —F†—2ç†’Ò°  —ÒVÇ6R°  —F†—2çF†WFÒÖF‚æFã"‚‚Â¢“° —F†—2ç†’ÒÖF‚æ6÷2‚6Æ×‚’òF†—2ç&F—W2ÂÒÂ’“°  —Ð  —&WGW&âF†—3°  —Ð  –6ÆöæR‚’°  —&WGW&âæWrF†—2æ6öç7G'V7F÷"‚’æ6÷’‚F†—2“°  —Ð §Ð ¢ò¢ ¢¢&Vc¢‡GG3¢òöVâçv–¶—VF–æ÷&r÷v–¶’ô7–Æ–æG&–6Åö6ö÷&F–æFU÷7—7FVÐ¢¢ð ¦6Æ727–Æ–æG&–6Â°  –6öç7G'V7F÷"‚&F—W2ÒÂF†WFÒÂ’Ò’°  —F†—2ç&F—W2Ò&F—W3²òòF—7Fæ6Rg&öÒF†R÷&–v–âFòö–çB–âF†R‚×¢ÆæP —F†—2çF†WFÒF†WF²òò6÷VçFW&6Æö6·v—6RævÆR–âF†R‚×¢ÆæRÖV7W&VB–â&F–ç2g&öÒF†R÷6—F—fR¢Ö†—0 —F†—2ç’Ò“²òò†V–v‡B&÷fRF†R‚×¢ÆæP  —&WGW&âF†—3°  —Ð  —6WB‚&F—W2ÂF†WFÂ’’°  —F†—2ç&F—W2Ò&F—W3° —F†—2çF†WFÒF†WF° —F†—2ç’Ò“°  —&WGW&âF†—3°  —Ð  –6÷’‚÷F†W"’°  —F†—2ç&F—W2Ò÷F†W"ç&F—W3° —F†—2çF†WFÒ÷F†W"çF†WF° —F†—2ç’Ò÷F†W"ç“°  —&WGW&âF†—3°  —Ð  —6WDg&öÕfV7F÷#2‚b’°  —&WGW&âF†—2ç6WDg&öÔ6'FW6–ä6ö÷&G2‚bç‚Âbç’Âbç¢“°  —Ð  —6WDg&öÔ6'FW6–ä6ö÷&G2‚‚Â’Â¢’°  —F†—2ç&F—W2ÒÖF‚ç7'B‚‚¢‚²¢¢¢“° —F†—2çF†WFÒÖF‚æFã"‚‚Â¢“° —F†—2ç’Ò“°  —&WGW&âF†—3°  —Ð  –6ÆöæR‚’°  —&WGW&âæWrF†—2æ6öç7G'V7F÷"‚’æ6÷’‚F†—2“°  —Ð §Ð ¦6öç7B÷fV7F÷"CBÒò¤õõU$Uõò¢òæWrfV7F÷#"‚“° ¦6Æ72&÷ƒ"°  –6öç7G'V7F÷"‚Ö–âÒæWrfV7F÷#"‚²–æf–æ—G’Â²–æf–æ—G’’ÂÖ‚ÒæWrfV7F÷#"‚Ò–æf–æ—G’ÂÒ–æf–æ—G’’’°  —F†—2æ—4&÷ƒ"ÒG'VS°  —F†—2æÖ–âÒÖ–ã° —F†—2æÖ‚ÒÖƒ°  —Ð  —6WB‚Ö–âÂÖ‚’°  —F†—2æÖ–âæ6÷’‚Ö–â“° —F†—2æÖ‚æ6÷’‚Ö‚“°  —&WGW&âF†—3°  —Ð  —6WDg&öÕö–çG2‚ö–çG2’°  —F†—2æÖ¶TV×G’‚“°  –f÷"‚ÆWB’ÒÂ–ÂÒö–çG2æÆVæwFƒ²’Â–Ã²’²²’°  —F†—2æW‡æD'•ö–çB‚ö–çG5²’Ò“°  —Ð  —&WGW&âF†—3°  —Ð  —6WDg&öÔ6VçFW$æE6—¦R‚6VçFW"Â6—¦R’°  –6öç7B†Æe6—¦RÒ÷fV7F÷"CBæ6÷’‚6—¦R’æ×VÇF—Ç•66Æ"‚ãR“° —F†—2æÖ–âæ6÷’‚6VçFW"’ç7V"‚†Æe6—¦R“° —F†—2æÖ‚æ6÷’‚6VçFW"’æFB‚†Æe6—¦R“°  —&WGW&âF†—3°  —Ð  –6ÆöæR‚’°  —&WGW&âæWrF†—2æ6öç7G'V7F÷"‚’æ6÷’‚F†—2“°  —Ð  –6÷’‚&÷‚’°  —F†—2æÖ–âæ6÷’‚&÷‚æÖ–â“° —F†—2æÖ‚æ6÷’‚&÷‚æÖ‚“°  —&WGW&âF†—3°  —Ð  –Ö¶TV×G’‚’°  —F†—2æÖ–âç‚ÒF†—2æÖ–âç’Ò²–æf–æ—G“° —F†—2æÖ‚ç‚ÒF†—2æÖ‚ç’ÒÒ–æf–æ—G“°  —&WGW&âF†—3°  —Ð  –—4V×G’‚’°  ’òòF†—2—2Ö÷&R&ö'W7B6†V6²f÷"V×G’F†â‚föÇVÖRÃÒ’&V6W6RföÇVÖR6âvWB÷6—F—fRv—F‚GvòæVvF—fR†W0  —&WGW&â‚F†—2æÖ‚ç‚ÂF†—2æÖ–âç‚’ÇÂ‚F†—2æÖ‚ç’ÂF†—2æÖ–âç’“°  —Ð  –vWD6VçFW"‚F&vWB’°  —&WGW&âF†—2æ—4V×G’‚’òF&vWBç6WB‚Â’¢F&vWBæFEfV7F÷'2‚F†—2æÖ–âÂF†—2æÖ‚’æ×VÇF—Ç•66Æ"‚ãR“°  —Ð  –vWE6—¦R‚F&vWB’°  —&WGW&âF†—2æ—4V×G’‚’òF&vWBç6WB‚Â’¢F&vWBç7V%fV7F÷'2‚F†—2æÖ‚ÂF†—2æÖ–â“°  —Ð  –W‡æD'•ö–çB‚ö–çB’°  —F†—2æÖ–âæÖ–â‚ö–çB“° —F†—2æÖ‚æÖ‚‚ö–çB“°  —&WGW&âF†—3°  —Ð  –W‡æD'•fV7F÷"‚fV7F÷"’°  —F†—2æÖ–âç7V"‚fV7F÷"“° —F†—2æÖ‚æFB‚fV7F÷"“°  —&WGW&âF†—3°  —Ð  –W‡æD'•66Æ"‚66Æ"’°  —F†—2æÖ–âæFE66Æ"‚Ò66Æ"“° —F†—2æÖ‚æFE66Æ"‚66Æ"“°  —&WGW&âF†—3°  —Ð  –6öçF–ç5ö–çB‚ö–çB’°  —&WGW&âö–çBç‚ÂF†—2æÖ–âç‚ÇÂö–çBç‚âF†—2æÖ‚ç‚ÇÀ —ö–çBç’ÂF†—2æÖ–âç’ÇÂö–çBç’âF†—2æÖ‚ç’òfÇ6R¢G'VS°  —Ð  –6öçF–ç4&÷‚‚&÷‚’°  —&WGW&âF†—2æÖ–âç‚ÃÒ&÷‚æÖ–âç‚bb&÷‚æÖ‚ç‚ÃÒF†—2æÖ‚ç‚b` —F†—2æÖ–âç’ÃÒ&÷‚æÖ–âç’bb&÷‚æÖ‚ç’ÃÒF†—2æÖ‚ç“°  —Ð  –vWE&ÖWFW"‚ö–çBÂF&vWB’°  ’òòF†—26â÷FVçF–ÆÇ’†fRF—f–FR'’¦W&ò–bF†R&÷€ ’òò†26—¦RF–ÖVç6–öâöbà  —&WGW&âF&vWBç6WB€ ’‚ö–çBç‚ÒF†—2æÖ–âç‚’ò‚F†—2æÖ‚ç‚ÒF†—2æÖ–âç‚’À ’‚ö–çBç’ÒF†—2æÖ–âç’’ò‚F†—2æÖ‚ç’ÒF†—2æÖ–âç’ ’“°  —Ð  ––çFW'6V7G4&÷‚‚&÷‚’°  ’òòW6–ærB7Æ—GF–ærÆæW2Fò'VÆR÷WB–çFW'6V7F–öç0  —&WGW&â&÷‚æÖ‚ç‚ÂF†—2æÖ–âç‚ÇÂ&÷‚æÖ–âç‚âF†—2æÖ‚ç‚ÇÀ –&÷‚æÖ‚ç’ÂF†—2æÖ–âç’ÇÂ&÷‚æÖ–âç’âF†—2æÖ‚ç’òfÇ6R¢G'VS°  —Ð  –6Æ×ö–çB‚ö–çBÂF&vWB’°  —&WGW&âF&vWBæ6÷’‚ö–çB’æ6Æ×‚F†—2æÖ–âÂF†—2æÖ‚“°  —Ð  –F—7Fæ6UFõö–çB‚ö–çB’°  —&WGW&âF†—2æ6Æ×ö–çB‚ö–çBÂ÷fV7F÷"CB’æF—7Fæ6UFò‚ö–çB“°  —Ð  ––çFW'6V7B‚&÷‚’°  —F†—2æÖ–âæÖ‚‚&÷‚æÖ–â“° —F†—2æÖ‚æÖ–â‚&÷‚æÖ‚“°  ––b‚F†—2æ—4V×G’‚’’F†—2æÖ¶TV×G’‚“°  —&WGW&âF†—3°  —Ð  —Væ–öâ‚&÷‚’°  —F†—2æÖ–âæÖ–â‚&÷‚æÖ–â“° —F†—2æÖ‚æÖ‚‚&÷‚æÖ‚“°  —&WGW&âF†—3°  —Ð  —G&ç6ÆFR‚öfg6WB’°  —F†—2æÖ–âæFB‚öfg6WB“° —F†—2æÖ‚æFB‚öfg6WB“°  —&WGW&âF†—3°  —Ð  –WVÇ2‚&÷‚’°  —&WGW&â&÷‚æÖ–âæWVÇ2‚F†—2æÖ–â’bb&÷‚æÖ‚æWVÇ2‚F†—2æÖ‚“°  —Ð §Ð ¦6öç7B÷7F'EÒò¤õõU$Uõò¢òæWrfV7F÷#2‚“°¦6öç7B÷7F'DVæBÒò¤õõU$Uõò¢òæWrfV7F÷#2‚“° ¦6Æ72Æ–æS2°  –6öç7G'V7F÷"‚7F'BÒæWrfV7F÷#2‚’ÂVæBÒæWrfV7F÷#2‚’’°  —F†—2ç7F'BÒ7F'C° —F†—2æVæBÒVæC°  —Ð  —6WB‚7F'BÂVæB’°  —F†—2ç7F'Bæ6÷’‚7F'B“° —F†—2æVæBæ6÷’‚VæB“°  —&WGW&âF†—3°  —Ð  –6÷’‚Æ–æR’°  —F†—2ç7F'Bæ6÷’‚Æ–æRç7F'B“° —F†—2æVæBæ6÷’‚Æ–æRæVæB“°  —&WGW&âF†—3°  —Ð  –vWD6VçFW"‚F&vWB’°  —&WGW&âF&vWBæFEfV7F÷'2‚F†—2ç7F'BÂF†—2æVæB’æ×VÇF—Ç•66Æ"‚ãR“°  —Ð  –FVÇF‚F&vWB’°  —&WGW&âF&vWBç7V%fV7F÷'2‚F†—2æVæBÂF†—2ç7F'B“°  —Ð  –F—7Fæ6U7‚’°  —&WGW&âF†—2ç7F'BæF—7Fæ6UFõ7V&VB‚F†—2æVæB“°  —Ð  –F—7Fæ6R‚’°  —&WGW&âF†—2ç7F'BæF—7Fæ6UFò‚F†—2æVæB“°  —Ð  –B‚BÂF&vWB’°  —&WGW&âF†—2æFVÇF‚F&vWB’æ×VÇF—Ç•66Æ"‚B’æFB‚F†—2ç7F'B“°  —Ð  –6Æ÷6W7Eö–çEFõö–çE&ÖWFW"‚ö–çBÂ6Æ×FôÆ–æR’°  •÷7F'Eç7V%fV7F÷'2‚ö–çBÂF†—2ç7F'B“° •÷7F'DVæBç7V%fV7F÷'2‚F†—2æVæBÂF†—2ç7F'B“°  –6öç7B7F'DVæC"Ò÷7F'DVæBæF÷B‚÷7F'DVæB“° –6öç7B7F'DVæE÷7F'EÒ÷7F'DVæBæF÷B‚÷7F'E“°  –ÆWBBÒ7F'DVæE÷7F'Eò7F'DVæC#°  ––b‚6Æ×FôÆ–æR’°  —BÒ6Æ×‚BÂÂ“°  —Ð  —&WGW&âC°  —Ð  –6Æ÷6W7Eö–çEFõö–çB‚ö–çBÂ6Æ×FôÆ–æRÂF&vWB’°  –6öç7BBÒF†—2æ6Æ÷6W7Eö–çEFõö–çE&ÖWFW"‚ö–çBÂ6Æ×FôÆ–æR“°  —&WGW&âF†—2æFVÇF‚F&vWB’æ×VÇF—Ç•66Æ"‚B’æFB‚F†—2ç7F'B“°  —Ð  –Ç”ÖG&—ƒB‚ÖG&—‚’°  —F†—2ç7F'BæÇ”ÖG&—ƒB‚ÖG&—‚“° —F†—2æVæBæÇ”ÖG&—ƒB‚ÖG&—‚“°  —&WGW&âF†—3°  —Ð  –WVÇ2‚Æ–æR’°  —&WGW&âÆ–æRç7F'BæWVÇ2‚F†—2ç7F'B’bbÆ–æRæVæBæWVÇ2‚F†—2æVæB“°  —Ð  –6ÆöæR‚’°  —&WGW&âæWrF†—2æ6öç7G'V7F÷"‚’æ6÷’‚F†—2“°  —Ð §Ð ¦6öç7B÷fV7F÷"C2Òò¤õõU$Uõò¢òæWrfV7F÷#2‚“° ¦6Æ727÷DÆ–v‡D†VÇW"W‡FVæG2ö&¦V7C4B°  –6öç7G'V7F÷"‚Æ–v‡BÂ6öÆ÷"’°  —7WW"‚“°  —F†—2æÆ–v‡BÒÆ–v‡C°  —F†—2æÖG&—„WFõWFFRÒfÇ6S°  —F†—2æ6öÆ÷"Ò6öÆ÷#°  —F†—2çG—RÒu7÷DÆ–v‡D†VÇW"s°  –6öç7BvVöÖWG'’ÒæWr'VffW$vVöÖWG'’‚“°  –6öç7B÷6—F–öç2Ò° “ÂÂÂ “ÂÂÀ “ÂÂÂ “ÂÂÀ “ÂÂÀ’ÒÂÂÀ “ÂÂÂ “ÂÂÀ “ÂÂÂ “ÂÒÂ •Ó°  –f÷"‚ÆWB’ÒÂ¢ÒÂÂÒ3#²’ÂÃ²’²²Â¢²²’°  –6öç7BÒ‚’òÂ’¢ÖF‚å’¢#° –6öç7B"Ò‚¢òÂ’¢ÖF‚å’¢#°  —÷6—F–öç2çW6‚€ ”ÖF‚æ6÷2‚’ÂÖF‚ç6–â‚’ÂÀ ”ÖF‚æ6÷2‚"’ÂÖF‚ç6–â‚"’Â ’“°  —Ð  –vVöÖWG'’ç6WDGG&–'WFR‚w÷6—F–öârÂæWrfÆöC3$'VffW$GG&–'WFR‚÷6—F–öç2Â2’“°  –6öç7BÖFW&–ÂÒæWrÆ–æT&6–4ÖFW&–Â‚²fös¢fÇ6RÂFöæTÖVC¢fÇ6RÒ“°  —F†—2æ6öæRÒæWrÆ–æU6VvÖVçG2‚vVöÖWG'’ÂÖFW&–Â“° —F†—2æFB‚F†—2æ6öæR“°  —F†—2çWFFR‚“°  —Ð  –F—7÷6R‚’°  —F†—2æ6öæRævVöÖWG'’æF—7÷6R‚“° —F†—2æ6öæRæÖFW&–ÂæF—7÷6R‚“°  —Ð  —WFFR‚’°  —F†—2æÆ–v‡BçWFFUv÷&ÆDÖG&—‚‚G'VRÂfÇ6R“° —F†—2æÆ–v‡BçF&vWBçWFFUv÷&ÆDÖG&—‚‚G'VRÂfÇ6R“°  ’òòWFFRF†RÆö6ÂÖG&—‚&6VBöâF†R&VçBæBÆ–v‡BF&vWBG&ç6f÷&×0 ––b‚F†—2ç&VçB’°  —F†—2ç&VçBçWFFUv÷&ÆDÖG&—‚‚G'VR“°  —F†—2æÖG&—€ ’æ6÷’‚F†—2ç&VçBæÖG&—…v÷&ÆB ’æ–çfW'B‚ ’æ×VÇF—Ç’‚F†—2æÆ–v‡BæÖG&—…v÷&ÆB“°  —ÒVÇ6R°  —F†—2æÖG&—‚æ6÷’‚F†—2æÆ–v‡BæÖG&—…v÷&ÆB“°  —Ð  —F†—2æÖG&—…v÷&ÆBæ6÷’‚F†—2æÆ–v‡BæÖG&—…v÷&ÆB“°  –6öç7B6öæTÆVæwF‚ÒF†—2æÆ–v‡BæF—7Fæ6RòF†—2æÆ–v‡BæF—7Fæ6R¢° –6öç7B6öæUv–GF‚Ò6öæTÆVæwF‚¢ÖF‚çFâ‚F†—2æÆ–v‡BæævÆR“°  —F†—2æ6öæRç66ÆRç6WB‚6öæUv–GF‚Â6öæUv–GF‚Â6öæTÆVæwF‚“°  •÷fV7F÷"C2ç6WDg&öÔÖG&—…÷6—F–öâ‚F†—2æÆ–v‡BçF&vWBæÖG&—…v÷&ÆB“°  —F†—2æ6öæRæÆöö´B‚÷fV7F÷"C2“°  ––b‚F†—2æ6öÆ÷"ÓÒVæFVf–æVB’°  —F†—2æ6öæRæÖFW&–Âæ6öÆ÷"ç6WB‚F†—2æ6öÆ÷"“°  —ÒVÇ6R°  —F†—2æ6öæRæÖFW&–Âæ6öÆ÷"æ6÷’‚F†—2æÆ–v‡Bæ6öÆ÷"“°  —Ð  —Ð §Ð ¦6öç7B÷fV7F÷"C"Òò¤õõU$Uõò¢òæWrfV7F÷#2‚“°¦6öç7Bö&öæTÖG&—‚Òò¤õõU$Uõò¢òæWrÖG&—ƒB‚“°¦6öç7BöÖG&—…v÷&ÆD–çbÒò¤õõU$Uõò¢òæWrÖG&—ƒB‚“°  ¦6Æ726¶VÆWFöä†VÇW"W‡FVæG2Æ–æU6VvÖVçG2°  –6öç7G'V7F÷"‚ö&¦V7B’°  –6öç7B&öæW2ÒvWD&öæTÆ—7B‚ö&¦V7B“°  –6öç7BvVöÖWG'’ÒæWr'VffW$vVöÖWG'’‚“°  –6öç7BfW'F–6W2ÒµÓ° –6öç7B6öÆ÷'2ÒµÓ°  –6öç7B6öÆ÷#ÒæWr6öÆ÷"‚ÂÂ“° –6öç7B6öÆ÷#"ÒæWr6öÆ÷"‚ÂÂ“°  –f÷"‚ÆWB’Ò²’Â&öæW2æÆVæwFƒ²’²²’°  –6öç7B&öæRÒ&öæW5²’Ó°  ––b‚&öæRç&VçBbb&öæRç&VçBæ—4&öæR’°  —fW'F–6W2çW6‚‚ÂÂ“° —fW'F–6W2çW6‚‚ÂÂ“° –6öÆ÷'2çW6‚‚6öÆ÷#ç"Â6öÆ÷#ærÂ6öÆ÷#æ"“° –6öÆ÷'2çW6‚‚6öÆ÷#"ç"Â6öÆ÷#"ærÂ6öÆ÷#"æ"“°  —Ð  —Ð  –vVöÖWG'’ç6WDGG&–'WFR‚w÷6—F–öârÂæWrfÆöC3$'VffW$GG&–'WFR‚fW'F–6W2Â2’“° –vVöÖWG'’ç6WDGG&–'WFR‚v6öÆ÷"rÂæWrfÆöC3$'VffW$GG&–'WFR‚6öÆ÷'2Â2’“°  –6öç7BÖFW&–ÂÒæWrÆ–æT&6–4ÖFW&–Â‚²fW'FW„6öÆ÷'3¢G'VRÂFWF…FW7C¢fÇ6RÂFWF…w&—FS¢fÇ6RÂFöæTÖVC¢fÇ6RÂG&ç7&VçC¢G'VRÒ“°  —7WW"‚vVöÖWG'’ÂÖFW&–Â“°  —F†—2æ—56¶VÆWFöä†VÇW"ÒG'VS°  —F†—2çG—RÒu6¶VÆWFöä†VÇW"s°  —F†—2ç&ö÷BÒö&¦V7C° —F†—2æ&öæW2Ò&öæW3°  —F†—2æÖG&—‚Òö&¦V7BæÖG&—…v÷&ÆC° —F†—2æÖG&—„WFõWFFRÒfÇ6S°  —Ð  —WFFTÖG&—…v÷&ÆB‚f÷&6R’°  –6öç7B&öæW2ÒF†—2æ&öæW3°  –6öç7BvVöÖWG'’ÒF†—2ævVöÖWG'“° –6öç7B÷6—F–öâÒvVöÖWG'’ævWDGG&–'WFR‚w÷6—F–öâr“°  •öÖG&—…v÷&ÆD–çbæ6÷’‚F†—2ç&ö÷BæÖG&—…v÷&ÆB’æ–çfW'B‚“°  –f÷"‚ÆWB’ÒÂ¢Ò²’Â&öæW2æÆVæwFƒ²’²²’°  –6öç7B&öæRÒ&öæW5²’Ó°  ––b‚&öæRç&VçBbb&öæRç&VçBæ—4&öæR’°  •ö&öæTÖG&—‚æ×VÇF—Ç”ÖG&–6W2‚öÖG&—…v÷&ÆD–çbÂ&öæRæÖG&—…v÷&ÆB“° •÷fV7F÷"C"ç6WDg&öÔÖG&—…÷6—F–öâ‚ö&öæTÖG&—‚“° —÷6—F–öâç6WE…•¢‚¢Â÷fV7F÷"C"ç‚Â÷fV7F÷"C"ç’Â÷fV7F÷"C"ç¢“°  •ö&öæTÖG&—‚æ×VÇF—Ç”ÖG&–6W2‚öÖG&—…v÷&ÆD–çbÂ&öæRç&VçBæÖG&—…v÷&ÆB“° •÷fV7F÷"C"ç6WDg&öÔÖG&—…÷6—F–öâ‚ö&öæTÖG&—‚“° —÷6—F–öâç6WE…•¢‚¢²Â÷fV7F÷"C"ç‚Â÷fV7F÷"C"ç’Â÷fV7F÷"C"ç¢“°  –¢³Ò#°  —Ð  —Ð  –vVöÖWG'’ævWDGG&–'WFR‚w÷6—F–öâr’ææVVG5WFFRÒG'VS°  —7WW"çWFFTÖG&—…v÷&ÆB‚f÷&6R“°  —Ð  –F—7÷6R‚’°  —F†—2ævVöÖWG'’æF—7÷6R‚“° —F†—2æÖFW&–ÂæF—7÷6R‚“°  —Ð §Ð  ¦gVæ7F–öâvWD&öæTÆ—7B‚ö&¦V7B’°  –6öç7B&öæTÆ—7BÒµÓ°  ––b‚ö&¦V7Bæ—4&öæRÓÓÒG'VR’°  –&öæTÆ—7BçW6‚‚ö&¦V7B“°  —Ð  –f÷"‚ÆWB’Ò²’Âö&¦V7Bæ6†–ÆG&VâæÆVæwFƒ²’²²’°  –&öæTÆ—7BçW6‚æÇ’‚&öæTÆ—7BÂvWD&öæTÆ—7B‚ö&¦V7Bæ6†–ÆG&Vå²’Ò’“°  —Ð  —&WGW&â&öæTÆ—7C° §Ð ¦6Æ72ö–çDÆ–v‡D†VÇW"W‡FVæG2ÖW6‚°  –6öç7G'V7F÷"‚Æ–v‡BÂ7†W&U6—¦RÂ6öÆ÷"’°  –6öç7BvVöÖWG'’ÒæWr7†W&TvVöÖWG'’‚7†W&U6—¦RÂBÂ"“° –6öç7BÖFW&–ÂÒæWrÖW6„&6–4ÖFW&–Â‚²v—&Vg&ÖS¢G'VRÂfös¢fÇ6RÂFöæTÖVC¢fÇ6RÒ“°  —7WW"‚vVöÖWG'’ÂÖFW&–Â“°  —F†—2æÆ–v‡BÒÆ–v‡C°  —F†—2æ6öÆ÷"Ò6öÆ÷#°  —F†—2çG—RÒuö–çDÆ–v‡D†VÇW"s°  —F†—2æÖG&—‚ÒF†—2æÆ–v‡BæÖG&—…v÷&ÆC° —F†—2æÖG&—„WFõWFFRÒfÇ6S°  —F†—2çWFFR‚“°   ’ò  ’òòDôDó¢FVÆWFRF†—26öÖÖVçCð –6öç7BF—7Fæ6TvVöÖWG'’ÒæWrD…$TRä–6÷6†VG&öävVöÖWG'’‚Â"“° –6öç7BF—7Fæ6TÖFW&–ÂÒæWrD…$TRäÖW6„&6–4ÖFW&–Â‚²6öÆ÷#¢†W„6öÆ÷"Âfös¢fÇ6RÂv—&Vg&ÖS¢G'VRÂ÷6—G“¢ãÂG&ç7&VçC¢G'VRÒ“°  —F†—2æÆ–v‡E7†W&RÒæWrD…$TRäÖW6‚‚'VÆ$vVöÖWG'’Â'VÆ$ÖFW&–Â“° —F†—2æÆ–v‡DF—7Fæ6RÒæWrD…$TRäÖW6‚‚F—7Fæ6TvVöÖWG'’ÂF—7Fæ6TÖFW&–Â“°  –6öç7BBÒÆ–v‡BæF—7Fæ6S°  ––b‚BÓÓÒã’°  —F†—2æÆ–v‡DF—7Fæ6Rçf—6–&ÆRÒfÇ6S°  —ÒVÇ6R°  —F†—2æÆ–v‡DF—7Fæ6Rç66ÆRç6WB‚BÂBÂB“°  —Ð  —F†—2æFB‚F†—2æÆ–v‡DF—7Fæ6R“° ’¢ð  —Ð  –F—7÷6R‚’°  —F†—2ævVöÖWG'’æF—7÷6R‚“° —F†—2æÖFW&–ÂæF—7÷6R‚“°  —Ð  —WFFR‚’°  —F†—2æÆ–v‡BçWFFUv÷&ÆDÖG&—‚‚G'VRÂfÇ6R“°  ––b‚F†—2æ6öÆ÷"ÓÒVæFVf–æVB’°  —F†—2æÖFW&–Âæ6öÆ÷"ç6WB‚F†—2æ6öÆ÷"“°  —ÒVÇ6R°  —F†—2æÖFW&–Âæ6öÆ÷"æ6÷’‚F†—2æÆ–v‡Bæ6öÆ÷"“°  —Ð  ’ò  –6öç7BBÒF†—2æÆ–v‡BæF—7Fæ6S°  ––b‚BÓÓÒã’°  —F†—2æÆ–v‡DF—7Fæ6Rçf—6–&ÆRÒfÇ6S°  —ÒVÇ6R°  —F†—2æÆ–v‡DF—7Fæ6Rçf—6–&ÆRÒG'VS° —F†—2æÆ–v‡DF—7Fæ6Rç66ÆRç6WB‚BÂBÂB“°  —Ð ’¢ð  —Ð §Ð ¦6öç7B÷fV7F÷"CÒò¤õõU$Uõò¢òæWrfV7F÷#2‚“°¦6öç7Bö6öÆ÷#Òò¤õõU$Uõò¢òæWr6öÆ÷"‚“°¦6öç7Bö6öÆ÷#"Òò¤õõU$Uõò¢òæWr6öÆ÷"‚“° ¦6Æ72†VÖ—7†W&TÆ–v‡D†VÇW"W‡FVæG2ö&¦V7C4B°  –6öç7G'V7F÷"‚Æ–v‡BÂ6—¦RÂ6öÆ÷"’°  —7WW"‚“°  —F†—2æÆ–v‡BÒÆ–v‡C°  —F†—2æÖG&—‚ÒÆ–v‡BæÖG&—…v÷&ÆC° —F†—2æÖG&—„WFõWFFRÒfÇ6S°  —F†—2æ6öÆ÷"Ò6öÆ÷#°  —F†—2çG—RÒt†VÖ—7†W&TÆ–v‡D†VÇW"s°  –6öç7BvVöÖWG'’ÒæWrö7F†VG&öävVöÖWG'’‚6—¦R“° –vVöÖWG'’ç&÷FFU’‚ÖF‚å’¢ãR“°  —F†—2æÖFW&–ÂÒæWrÖW6„&6–4ÖFW&–Â‚²v—&Vg&ÖS¢G'VRÂfös¢fÇ6RÂFöæTÖVC¢fÇ6RÒ“° ––b‚F†—2æ6öÆ÷"ÓÓÒVæFVf–æVB’F†—2æÖFW&–ÂçfW'FW„6öÆ÷'2ÒG'VS°  –6öç7B÷6—F–öâÒvVöÖWG'’ævWDGG&–'WFR‚w÷6—F–öâr“° –6öç7B6öÆ÷'2ÒæWrfÆöC3$'&’‚÷6—F–öâæ6÷VçB¢2“°  –vVöÖWG'’ç6WDGG&–'WFR‚v6öÆ÷"rÂæWr'VffW$GG&–'WFR‚6öÆ÷'2Â2’“°  —F†—2æFB‚æWrÖW6‚‚vVöÖWG'’ÂF†—2æÖFW&–Â’“°  —F†—2çWFFR‚“°  —Ð  –F—7÷6R‚’°  —F†—2æ6†–ÆG&Vå²ÒævVöÖWG'’æF—7÷6R‚“° —F†—2æ6†–ÆG&Vå²ÒæÖFW&–ÂæF—7÷6R‚“°  —Ð  —WFFR‚’°  –6öç7BÖW6‚ÒF†—2æ6†–ÆG&Vå²Ó°  ––b‚F†—2æ6öÆ÷"ÓÒVæFVf–æVB’°  —F†—2æÖFW&–Âæ6öÆ÷"ç6WB‚F†—2æ6öÆ÷"“°  —ÒVÇ6R°  –6öç7B6öÆ÷'2ÒÖW6‚ævVöÖWG'’ævWDGG&–'WFR‚v6öÆ÷"r“°  •ö6öÆ÷#æ6÷’‚F†—2æÆ–v‡Bæ6öÆ÷"“° •ö6öÆ÷#"æ6÷’‚F†—2æÆ–v‡Bæw&÷VæD6öÆ÷"“°  –f÷"‚ÆWB’ÒÂÂÒ6öÆ÷'2æ6÷VçC²’ÂÃ²’²²’°  –6öç7B6öÆ÷"Ò‚’Â‚Âò"’’òö6öÆ÷#¢ö6öÆ÷##°  –6öÆ÷'2ç6WE…•¢‚’Â6öÆ÷"ç"Â6öÆ÷"ærÂ6öÆ÷"æ"“°  —Ð  –6öÆ÷'2ææVVG5WFFRÒG'VS°  —Ð  —F†—2æÆ–v‡BçWFFUv÷&ÆDÖG&—‚‚G'VRÂfÇ6R“°  –ÖW6‚æÆöö´B‚÷fV7F÷"Cç6WDg&öÔÖG&—…÷6—F–öâ‚F†—2æÆ–v‡BæÖG&—…v÷&ÆB’ææVvFR‚’“°  —Ð §Ð ¦6Æ72w&–D†VÇW"W‡FVæG2Æ–æU6VvÖVçG2°  –6öç7G'V7F÷"‚6—¦RÒÂF—f—6–öç2ÒÂ6öÆ÷#ÒƒCCCCCBÂ6öÆ÷#"Òƒƒƒƒƒƒ‚’°  –6öÆ÷#ÒæWr6öÆ÷"‚6öÆ÷#“° –6öÆ÷#"ÒæWr6öÆ÷"‚6öÆ÷#"“°  –6öç7B6VçFW"ÒF—f—6–öç2ò#° –6öç7B7FWÒ6—¦RòF—f—6–öç3° –6öç7B†Æe6—¦RÒ6—¦Rò#°  –6öç7BfW'F–6W2ÒµÒÂ6öÆ÷'2ÒµÓ°  –f÷"‚ÆWB’ÒÂ¢ÒÂ²ÒÒ†Æe6—¦S²’ÃÒF—f—6–öç3²’²²Â²³Ò7FW’°  —fW'F–6W2çW6‚‚Ò†Æe6—¦RÂÂ²Â†Æe6—¦RÂÂ²“° —fW'F–6W2çW6‚‚²ÂÂÒ†Æe6—¦RÂ²ÂÂ†Æe6—¦R“°  –6öç7B6öÆ÷"Ò’ÓÓÒ6VçFW"ò6öÆ÷#¢6öÆ÷##°  –6öÆ÷"çFô'&’‚6öÆ÷'2Â¢“²¢³Ò3° –6öÆ÷"çFô'&’‚6öÆ÷'2Â¢“²¢³Ò3° –6öÆ÷"çFô'&’‚6öÆ÷'2Â¢“²¢³Ò3° –6öÆ÷"çFô'&’‚6öÆ÷'2Â¢“²¢³Ò3°  —Ð  –6öç7BvVöÖWG'’ÒæWr'VffW$vVöÖWG'’‚“° –vVöÖWG'’ç6WDGG&–'WFR‚w÷6—F–öârÂæWrfÆöC3$'VffW$GG&–'WFR‚fW'F–6W2Â2’“° –vVöÖWG'’ç6WDGG&–'WFR‚v6öÆ÷"rÂæWrfÆöC3$'VffW$GG&–'WFR‚6öÆ÷'2Â2’“°  –6öç7BÖFW&–ÂÒæWrÆ–æT&6–4ÖFW&–Â‚²fW'FW„6öÆ÷'3¢G'VRÂFöæTÖVC¢fÇ6RÒ“°  —7WW"‚vVöÖWG'’ÂÖFW&–Â“°  —F†—2çG—RÒtw&–D†VÇW"s°  —Ð  –F—7÷6R‚’°  —F†—2ævVöÖWG'’æF—7÷6R‚“° —F†—2æÖFW&–ÂæF—7÷6R‚“°  —Ð §Ð ¦6Æ72öÆ$w&–D†VÇW"W‡FVæG2Æ–æU6VvÖVçG2°  –6öç7G'V7F÷"‚&F—W2ÒÂ6V7F÷'2ÒbÂ&–æw2Ò‚ÂF—f—6–öç2ÒcBÂ6öÆ÷#ÒƒCCCCCBÂ6öÆ÷#"Òƒƒƒƒƒƒ‚’°  –6öÆ÷#ÒæWr6öÆ÷"‚6öÆ÷#“° –6öÆ÷#"ÒæWr6öÆ÷"‚6öÆ÷#"“°  –6öç7BfW'F–6W2ÒµÓ° –6öç7B6öÆ÷'2ÒµÓ°  ’òò7&VFRF†R6V7F÷'0  ––b‚6V7F÷'2â’°  –f÷"‚ÆWB’Ò²’Â6V7F÷'3²’²²’°  –6öç7BbÒ‚’ò6V7F÷'2’¢‚ÖF‚å’¢"“°  –6öç7B‚ÒÖF‚ç6–â‚b’¢&F—W3° –6öç7B¢ÒÖF‚æ6÷2‚b’¢&F—W3°  —fW'F–6W2çW6‚‚ÂÂ“° —fW'F–6W2çW6‚‚‚ÂÂ¢“°  –6öç7B6öÆ÷"Ò‚’b’ò6öÆ÷#¢6öÆ÷##°  –6öÆ÷'2çW6‚‚6öÆ÷"ç"Â6öÆ÷"ærÂ6öÆ÷"æ"“° –6öÆ÷'2çW6‚‚6öÆ÷"ç"Â6öÆ÷"ærÂ6öÆ÷"æ"“°  —Ð  —Ð  ’òò7&VFRF†R&–æw0  –f÷"‚ÆWB’Ò²’Â&–æw3²’²²’°  –6öç7B6öÆ÷"Ò‚’b’ò6öÆ÷#¢6öÆ÷##°  –6öç7B"Ò&F—W2Ò‚&F—W2ò&–æw2¢’“°  –f÷"‚ÆWB¢Ò²¢ÂF—f—6–öç3²¢²²’°  ’òòf—'7BfW'FW€  –ÆWBbÒ‚¢òF—f—6–öç2’¢‚ÖF‚å’¢"“°  –ÆWB‚ÒÖF‚ç6–â‚b’¢#° –ÆWB¢ÒÖF‚æ6÷2‚b’¢#°  —fW'F–6W2çW6‚‚‚ÂÂ¢“° –6öÆ÷'2çW6‚‚6öÆ÷"ç"Â6öÆ÷"ærÂ6öÆ÷"æ"“°  ’òò6V6öæBfW'FW€  —bÒ‚‚¢²’òF—f—6–öç2’¢‚ÖF‚å’¢"“°  —‚ÒÖF‚ç6–â‚b’¢#° —¢ÒÖF‚æ6÷2‚b’¢#°  —fW'F–6W2çW6‚‚‚ÂÂ¢“° –6öÆ÷'2çW6‚‚6öÆ÷"ç"Â6öÆ÷"ærÂ6öÆ÷"æ"“°  —Ð  —Ð  –6öç7BvVöÖWG'’ÒæWr'VffW$vVöÖWG'’‚“° –vVöÖWG'’ç6WDGG&–'WFR‚w÷6—F–öârÂæWrfÆöC3$'VffW$GG&–'WFR‚fW'F–6W2Â2’“° –vVöÖWG'’ç6WDGG&–'WFR‚v6öÆ÷"rÂæWrfÆöC3$'VffW$GG&–'WFR‚6öÆ÷'2Â2’“°  –6öç7BÖFW&–ÂÒæWrÆ–æT&6–4ÖFW&–Â‚²fW'FW„6öÆ÷'3¢G'VRÂFöæTÖVC¢fÇ6RÒ“°  —7WW"‚vVöÖWG'’ÂÖFW&–Â“°  —F†—2çG—RÒuöÆ$w&–D†VÇW"s°  —Ð  –F—7÷6R‚’°  —F†—2ævVöÖWG'’æF—7÷6R‚“° —F†—2æÖFW&–ÂæF—7÷6R‚“°  —Ð §Ð ¦6öç7B÷cÒò¤õõU$Uõò¢òæWrfV7F÷#2‚“°¦6öç7B÷c"Òò¤õõU$Uõò¢òæWrfV7F÷#2‚“°¦6öç7B÷c2Òò¤õõU$Uõò¢òæWrfV7F÷#2‚“° ¦6Æ72F—&V7F–öæÄÆ–v‡D†VÇW"W‡FVæG2ö&¦V7C4B°  –6öç7G'V7F÷"‚Æ–v‡BÂ6—¦RÂ6öÆ÷"’°  —7WW"‚“°  —F†—2æÆ–v‡BÒÆ–v‡C°  —F†—2æÖG&—‚ÒÆ–v‡BæÖG&—…v÷&ÆC° —F†—2æÖG&—„WFõWFFRÒfÇ6S°  —F†—2æ6öÆ÷"Ò6öÆ÷#°  —F†—2çG—RÒtF—&V7F–öæÄÆ–v‡D†VÇW"s°  ––b‚6—¦RÓÓÒVæFVf–æVB’6—¦RÒ°  –ÆWBvVöÖWG'’ÒæWr'VffW$vVöÖWG'’‚“° –vVöÖWG'’ç6WDGG&–'WFR‚w÷6—F–öârÂæWrfÆöC3$'VffW$GG&–'WFR‚° ’Ò6—¦RÂ6—¦RÂÀ —6—¦RÂ6—¦RÂÀ —6—¦RÂÒ6—¦RÂÀ ’Ò6—¦RÂÒ6—¦RÂÀ ’Ò6—¦RÂ6—¦RÂ  •ÒÂ2’“°  –6öç7BÖFW&–ÂÒæWrÆ–æT&6–4ÖFW&–Â‚²fös¢fÇ6RÂFöæTÖVC¢fÇ6RÒ“°  —F†—2æÆ–v‡EÆæRÒæWrÆ–æR‚vVöÖWG'’ÂÖFW&–Â“° —F†—2æFB‚F†—2æÆ–v‡EÆæR“°  –vVöÖWG'’ÒæWr'VffW$vVöÖWG'’‚“° –vVöÖWG'’ç6WDGG&–'WFR‚w÷6—F–öârÂæWrfÆöC3$'VffW$GG&–'WFR‚²ÂÂÂÂÂÒÂ2’“°  —F†—2çF&vWDÆ–æRÒæWrÆ–æR‚vVöÖWG'’ÂÖFW&–Â“° —F†—2æFB‚F†—2çF&vWDÆ–æR“°  —F†—2çWFFR‚“°  —Ð  –F—7÷6R‚’°  —F†—2æÆ–v‡EÆæRævVöÖWG'’æF—7÷6R‚“° —F†—2æÆ–v‡EÆæRæÖFW&–ÂæF—7÷6R‚“° —F†—2çF&vWDÆ–æRævVöÖWG'’æF—7÷6R‚“° —F†—2çF&vWDÆ–æRæÖFW&–ÂæF—7÷6R‚“°  —Ð  —WFFR‚’°  —F†—2æÆ–v‡BçWFFUv÷&ÆDÖG&—‚‚G'VRÂfÇ6R“° —F†—2æÆ–v‡BçF&vWBçWFFUv÷&ÆDÖG&—‚‚G'VRÂfÇ6R“°  •÷cç6WDg&öÔÖG&—…÷6—F–öâ‚F†—2æÆ–v‡BæÖG&—…v÷&ÆB“° •÷c"ç6WDg&öÔÖG&—…÷6—F–öâ‚F†—2æÆ–v‡BçF&vWBæÖG&—…v÷&ÆB“° •÷c2ç7V%fV7F÷'2‚÷c"Â÷c“°  —F†—2æÆ–v‡EÆæRæÆöö´B‚÷c"“°  ––b‚F†—2æ6öÆ÷"ÓÒVæFVf–æVB’°  —F†—2æÆ–v‡EÆæRæÖFW&–Âæ6öÆ÷"ç6WB‚F†—2æ6öÆ÷"“° —F†—2çF&vWDÆ–æRæÖFW&–Âæ6öÆ÷"ç6WB‚F†—2æ6öÆ÷"“°  —ÒVÇ6R°  —F†—2æÆ–v‡EÆæRæÖFW&–Âæ6öÆ÷"æ6÷’‚F†—2æÆ–v‡Bæ6öÆ÷"“° —F†—2çF&vWDÆ–æRæÖFW&–Âæ6öÆ÷"æ6÷’‚F†—2æÆ–v‡Bæ6öÆ÷"“°  —Ð  —F†—2çF&vWDÆ–æRæÆöö´B‚÷c"“° —F†—2çF&vWDÆ–æRç66ÆRç¢Ò÷c2æÆVæwF‚‚“°  —Ð §Ð ¦6öç7B÷fV7F÷"Òò¤õõU$Uõò¢òæWrfV7F÷#2‚“°¦6öç7Bö6ÖW&Òò¤õõU$Uõò¢òæWr6ÖW&‚“° ¢ò¢ ¢ ’Ò6†÷w2g'W7GVÒÂÆ–æRöb6–v‡BæBWöbF†R6ÖW&¢ ’Ò7V—F&ÆRf÷"f7BWFFW0¢¢ ’Ò&6VBöâg'W7GVÒf—7VÆ—¦F–öâ–âÆ–v‡FvÂæ§26†F÷vÖW†×ÆP¢ –‡GG3¢òöv—F‡V"æ6öÒöWfçröÆ–v‡FvÂæ§2ö&Æö"öÖ7FW"÷FW7G2÷6†F÷vÖæ‡FÖÀ¢¢ð ¦6Æ726ÖW&†VÇW"W‡FVæG2Æ–æU6VvÖVçG2°  –6öç7G'V7F÷"‚6ÖW&’°  –6öç7BvVöÖWG'’ÒæWr'VffW$vVöÖWG'’‚“° –6öç7BÖFW&–ÂÒæWrÆ–æT&6–4ÖFW&–Â‚²6öÆ÷#¢†fffffbÂfW'FW„6öÆ÷'3¢G'VRÂFöæTÖVC¢fÇ6RÒ“°  –6öç7BfW'F–6W2ÒµÓ° –6öç7B6öÆ÷'2ÒµÓ°  –6öç7Bö–çDÖÒ·Ó°  ’òòæV   –FDÆ–æR‚vãrÂvã"r“° –FDÆ–æR‚vã"rÂvãBr“° –FDÆ–æR‚vãBrÂvã2r“° –FDÆ–æR‚vã2rÂvãr“°  ’òòf   –FDÆ–æR‚vcrÂvc"r“° –FDÆ–æR‚vc"rÂvcBr“° –FDÆ–æR‚vcBrÂvc2r“° –FDÆ–æR‚vc2rÂvcr“°  ’òò6–FW0  –FDÆ–æR‚vãrÂvcr“° –FDÆ–æR‚vã"rÂvc"r“° –FDÆ–æR‚vã2rÂvc2r“° –FDÆ–æR‚vãBrÂvcBr“°  ’òò6öæP  –FDÆ–æR‚wrÂvãr“° –FDÆ–æR‚wrÂvã"r“° –FDÆ–æR‚wrÂvã2r“° –FDÆ–æR‚wrÂvãBr“°  ’òòW   –FDÆ–æR‚wSrÂwS"r“° –FDÆ–æR‚wS"rÂwS2r“° –FDÆ–æR‚wS2rÂwSr“°  ’òòF&vW@  –FDÆ–æR‚v2rÂwBr“° –FDÆ–æR‚wrÂv2r“°  ’òò7&÷70  –FDÆ–æR‚v6ãrÂv6ã"r“° –FDÆ–æR‚v6ã2rÂv6ãBr“°  –FDÆ–æR‚v6crÂv6c"r“° –FDÆ–æR‚v6c2rÂv6cBr“°  –gVæ7F–öâFDÆ–æR‚Â"’°  –FEö–çB‚“° –FEö–çB‚"“°  —Ð  –gVæ7F–öâFEö–çB‚–B’°  —fW'F–6W2çW6‚‚ÂÂ“° –6öÆ÷'2çW6‚‚ÂÂ“°  ––b‚ö–çDÖ²–BÒÓÓÒVæFVf–æVB’°  —ö–çDÖ²–BÒÒµÓ°  —Ð  —ö–çDÖ²–BÒçW6‚‚‚fW'F–6W2æÆVæwF‚ò2’Ò“°  —Ð  –vVöÖWG'’ç6WDGG&–'WFR‚w÷6—F–öârÂæWrfÆöC3$'VffW$GG&–'WFR‚fW'F–6W2Â2’“° –vVöÖWG'’ç6WDGG&–'WFR‚v6öÆ÷"rÂæWrfÆöC3$'VffW$GG&–'WFR‚6öÆ÷'2Â2’“°  —7WW"‚vVöÖWG'’ÂÖFW&–Â“°  —F†—2çG—RÒt6ÖW&†VÇW"s°  —F†—2æ6ÖW&Ò6ÖW&° ––b‚F†—2æ6ÖW&çWFFU&ö¦V7F–öäÖG&—‚’F†—2æ6ÖW&çWFFU&ö¦V7F–öäÖG&—‚‚“°  —F†—2æÖG&—‚Ò6ÖW&æÖG&—…v÷&ÆC° —F†—2æÖG&—„WFõWFFRÒfÇ6S°  —F†—2çö–çDÖÒö–çDÖ°  —F†—2çWFFR‚“°  ’òò6öÆ÷'0  –6öç7B6öÆ÷$g'W7GVÒÒæWr6öÆ÷"‚†ff“° –6öç7B6öÆ÷$6öæRÒæWr6öÆ÷"‚†fc“° –6öç7B6öÆ÷%WÒæWr6öÆ÷"‚ƒfb“° –6öç7B6öÆ÷%F&vWBÒæWr6öÆ÷"‚†fffffb“° –6öç7B6öÆ÷$7&÷72ÒæWr6öÆ÷"‚ƒ333332“°  —F†—2ç6WD6öÆ÷'2‚6öÆ÷$g'W7GVÒÂ6öÆ÷$6öæRÂ6öÆ÷%WÂ6öÆ÷%F&vWBÂ6öÆ÷$7&÷72“°  —Ð  —6WD6öÆ÷'2‚g'W7GVÒÂ6öæRÂWÂF&vWBÂ7&÷72’°  –6öç7BvVöÖWG'’ÒF†—2ævVöÖWG'“°  –6öç7B6öÆ÷$GG&–'WFRÒvVöÖWG'’ævWDGG&–'WFR‚v6öÆ÷"r“°  ’òòæV   –6öÆ÷$GG&–'WFRç6WE…•¢‚Âg'W7GVÒç"Âg'W7GVÒærÂg'W7GVÒæ"“²6öÆ÷$GG&–'WFRç6WE…•¢‚Âg'W7GVÒç"Âg'W7GVÒærÂg'W7GVÒæ"“²òòãÂã  –6öÆ÷$GG&–'WFRç6WE…•¢‚"Âg'W7GVÒç"Âg'W7GVÒærÂg'W7GVÒæ"“²6öÆ÷$GG&–'WFRç6WE…•¢‚2Âg'W7GVÒç"Âg'W7GVÒærÂg'W7GVÒæ"“²òòã"Âã@ –6öÆ÷$GG&–'WFRç6WE…•¢‚BÂg'W7GVÒç"Âg'W7GVÒærÂg'W7GVÒæ"“²6öÆ÷$GG&–'WFRç6WE…•¢‚RÂg'W7GVÒç"Âg'W7GVÒærÂg'W7GVÒæ"“²òòãBÂã0 –6öÆ÷$GG&–'WFRç6WE…•¢‚bÂg'W7GVÒç"Âg'W7GVÒærÂg'W7GVÒæ"“²6öÆ÷$GG&–'WFRç6WE…•¢‚rÂg'W7GVÒç"Âg'W7GVÒærÂg'W7GVÒæ"“²òòã2Âã  ’òòf   –6öÆ÷$GG&–'WFRç6WE…•¢‚‚Âg'W7GVÒç"Âg'W7GVÒærÂg'W7GVÒæ"“²6öÆ÷$GG&–'WFRç6WE…•¢‚’Âg'W7GVÒç"Âg'W7GVÒærÂg'W7GVÒæ"“²òòcÂc  –6öÆ÷$GG&–'WFRç6WE…•¢‚Âg'W7GVÒç"Âg'W7GVÒærÂg'W7GVÒæ"“²6öÆ÷$GG&–'WFRç6WE…•¢‚Âg'W7GVÒç"Âg'W7GVÒærÂg'W7GVÒæ"“²òòc"Âc@ –6öÆ÷$GG&–'WFRç6WE…•¢‚"Âg'W7GVÒç"Âg'W7GVÒærÂg'W7GVÒæ"“²6öÆ÷$GG&–'WFRç6WE…•¢‚2Âg'W7GVÒç"Âg'W7GVÒærÂg'W7GVÒæ"“²òòcBÂc0 –6öÆ÷$GG&–'WFRç6WE…•¢‚BÂg'W7GVÒç"Âg'W7GVÒærÂg'W7GVÒæ"“²6öÆ÷$GG&–'WFRç6WE…•¢‚RÂg'W7GVÒç"Âg'W7GVÒærÂg'W7GVÒæ"“²òòc2Âc  ’òò6–FW0  –6öÆ÷$GG&–'WFRç6WE…•¢‚bÂg'W7GVÒç"Âg'W7GVÒærÂg'W7GVÒæ"“²6öÆ÷$GG&–'WFRç6WE…•¢‚rÂg'W7GVÒç"Âg'W7GVÒærÂg'W7GVÒæ"“²òòãÂc –6öÆ÷$GG&–'WFRç6WE…•¢‚‚Âg'W7GVÒç"Âg'W7GVÒærÂg'W7GVÒæ"“²6öÆ÷$GG&–'WFRç6WE…•¢‚’Âg'W7GVÒç"Âg'W7GVÒærÂg'W7GVÒæ"“²òòã"Âc  –6öÆ÷$GG&–'WFRç6WE…•¢‚#Âg'W7GVÒç"Âg'W7GVÒærÂg'W7GVÒæ"“²6öÆ÷$GG&–'WFRç6WE…•¢‚#Âg'W7GVÒç"Âg'W7GVÒærÂg'W7GVÒæ"“²òòã2Âc0 –6öÆ÷$GG&–'WFRç6WE…•¢‚#"Âg'W7GVÒç"Âg'W7GVÒærÂg'W7GVÒæ"“²6öÆ÷$GG&–'WFRç6WE…•¢‚#2Âg'W7GVÒç"Âg'W7GVÒærÂg'W7GVÒæ"“²òòãBÂc@  ’òò6öæP  –6öÆ÷$GG&–'WFRç6WE…•¢‚#BÂ6öæRç"Â6öæRærÂ6öæRæ"“²6öÆ÷$GG&–'WFRç6WE…•¢‚#RÂ6öæRç"Â6öæRærÂ6öæRæ"“²òòÂã –6öÆ÷$GG&–'WFRç6WE…•¢‚#bÂ6öæRç"Â6öæRærÂ6öæRæ"“²6öÆ÷$GG&–'WFRç6WE…•¢‚#rÂ6öæRç"Â6öæRærÂ6öæRæ"“²òòÂã  –6öÆ÷$GG&–'WFRç6WE…•¢‚#‚Â6öæRç"Â6öæRærÂ6öæRæ"“²6öÆ÷$GG&–'WFRç6WE…•¢‚#’Â6öæRç"Â6öæRærÂ6öæRæ"“²òòÂã0 –6öÆ÷$GG&–'WFRç6WE…•¢‚3Â6öæRç"Â6öæRærÂ6öæRæ"“²6öÆ÷$GG&–'WFRç6WE…•¢‚3Â6öæRç"Â6öæRærÂ6öæRæ"“²òòÂã@  ’òòW   –6öÆ÷$GG&–'WFRç6WE…•¢‚3"ÂWç"ÂWærÂWæ"“²6öÆ÷$GG&–'WFRç6WE…•¢‚32ÂWç"ÂWærÂWæ"“²òòSÂS  –6öÆ÷$GG&–'WFRç6WE…•¢‚3BÂWç"ÂWærÂWæ"“²6öÆ÷$GG&–'WFRç6WE…•¢‚3RÂWç"ÂWærÂWæ"“²òòS"ÂS0 –6öÆ÷$GG&–'WFRç6WE…•¢‚3bÂWç"ÂWærÂWæ"“²6öÆ÷$GG&–'WFRç6WE…•¢‚3rÂWç"ÂWærÂWæ"“²òòS2ÂS  ’òòF&vW@  –6öÆ÷$GG&–'WFRç6WE…•¢‚3‚ÂF&vWBç"ÂF&vWBærÂF&vWBæ"“²6öÆ÷$GG&–'WFRç6WE…•¢‚3’ÂF&vWBç"ÂF&vWBærÂF&vWBæ"“²òò2Â@ –6öÆ÷$GG&–'WFRç6WE…•¢‚CÂ7&÷72ç"Â7&÷72ærÂ7&÷72æ"“²6öÆ÷$GG&–'WFRç6WE…•¢‚CÂ7&÷72ç"Â7&÷72ærÂ7&÷72æ"“²òòÂ0  ’òò7&÷70  –6öÆ÷$GG&–'WFRç6WE…•¢‚C"Â7&÷72ç"Â7&÷72ærÂ7&÷72æ"“²6öÆ÷$GG&–'WFRç6WE…•¢‚C2Â7&÷72ç"Â7&÷72ærÂ7&÷72æ"“²òò6ãÂ6ã  –6öÆ÷$GG&–'WFRç6WE…•¢‚CBÂ7&÷72ç"Â7&÷72ærÂ7&÷72æ"“²6öÆ÷$GG&–'WFRç6WE…•¢‚CRÂ7&÷72ç"Â7&÷72ærÂ7&÷72æ"“²òò6ã2Â6ã@  –6öÆ÷$GG&–'WFRç6WE…•¢‚CbÂ7&÷72ç"Â7&÷72ærÂ7&÷72æ"“²6öÆ÷$GG&–'WFRç6WE…•¢‚CrÂ7&÷72ç"Â7&÷72ærÂ7&÷72æ"“²òò6cÂ6c  –6öÆ÷$GG&–'WFRç6WE…•¢‚C‚Â7&÷72ç"Â7&÷72ærÂ7&÷72æ"“²6öÆ÷$GG&–'WFRç6WE…•¢‚C’Â7&÷72ç"Â7&÷72ærÂ7&÷72æ"“²òò6c2Â6c@  –6öÆ÷$GG&–'WFRææVVG5WFFRÒG'VS°  —Ð  —WFFR‚’°  –6öç7BvVöÖWG'’ÒF†—2ævVöÖWG'“° –6öç7Bö–çDÖÒF†—2çö–çDÖ°  –6öç7BrÒÂ‚Ò°  ’òòvRæVVB§W7B6ÖW&&ö¦V7F–öâÖG&—‚–çfW'6P ’òòv÷&ÆBÖG&—‚×W7B&R–FVçF—G  •ö6ÖW&ç&ö¦V7F–öäÖG&—„–çfW'6Ræ6÷’‚F†—2æ6ÖW&ç&ö¦V7F–öäÖG&—„–çfW'6R“°  ’òò6VçFW"òF&vW@  —6WEö–çB‚v2rÂö–çDÖÂvVöÖWG'’Âö6ÖW&ÂÂÂÒ“° —6WEö–çB‚wBrÂö–çDÖÂvVöÖWG'’Âö6ÖW&ÂÂÂ“°  ’òòæV   —6WEö–çB‚vãrÂö–çDÖÂvVöÖWG'’Âö6ÖW&ÂÒrÂÒ‚ÂÒ“° —6WEö–çB‚vã"rÂö–çDÖÂvVöÖWG'’Âö6ÖW&ÂrÂÒ‚ÂÒ“° —6WEö–çB‚vã2rÂö–çDÖÂvVöÖWG'’Âö6ÖW&ÂÒrÂ‚ÂÒ“° —6WEö–çB‚vãBrÂö–çDÖÂvVöÖWG'’Âö6ÖW&ÂrÂ‚ÂÒ“°  ’òòf   —6WEö–çB‚vcrÂö–çDÖÂvVöÖWG'’Âö6ÖW&ÂÒrÂÒ‚Â“° —6WEö–çB‚vc"rÂö–çDÖÂvVöÖWG'’Âö6ÖW&ÂrÂÒ‚Â“° —6WEö–çB‚vc2rÂö–çDÖÂvVöÖWG'’Âö6ÖW&ÂÒrÂ‚Â“° —6WEö–çB‚vcBrÂö–çDÖÂvVöÖWG'’Âö6ÖW&ÂrÂ‚Â“°  ’òòW   —6WEö–çB‚wSrÂö–çDÖÂvVöÖWG'’Âö6ÖW&Âr¢ãrÂ‚¢ãÂÒ“° —6WEö–çB‚wS"rÂö–çDÖÂvVöÖWG'’Âö6ÖW&ÂÒr¢ãrÂ‚¢ãÂÒ“° —6WEö–çB‚wS2rÂö–çDÖÂvVöÖWG'’Âö6ÖW&ÂÂ‚¢"ÂÒ“°  ’òò7&÷70  —6WEö–çB‚v6crÂö–çDÖÂvVöÖWG'’Âö6ÖW&ÂÒrÂÂ“° —6WEö–çB‚v6c"rÂö–çDÖÂvVöÖWG'’Âö6ÖW&ÂrÂÂ“° —6WEö–çB‚v6c2rÂö–çDÖÂvVöÖWG'’Âö6ÖW&ÂÂÒ‚Â“° —6WEö–çB‚v6cBrÂö–çDÖÂvVöÖWG'’Âö6ÖW&ÂÂ‚Â“°  —6WEö–çB‚v6ãrÂö–çDÖÂvVöÖWG'’Âö6ÖW&ÂÒrÂÂÒ“° —6WEö–çB‚v6ã"rÂö–çDÖÂvVöÖWG'’Âö6ÖW&ÂrÂÂÒ“° —6WEö–çB‚v6ã2rÂö–çDÖÂvVöÖWG'’Âö6ÖW&ÂÂÒ‚ÂÒ“° —6WEö–çB‚v6ãBrÂö–çDÖÂvVöÖWG'’Âö6ÖW&ÂÂ‚ÂÒ“°  –vVöÖWG'’ævWDGG&–'WFR‚w÷6—F–öâr’ææVVG5WFFRÒG'VS°  —Ð  –F—7÷6R‚’°  —F†—2ævVöÖWG'’æF—7÷6R‚“° —F†—2æÖFW&–ÂæF—7÷6R‚“°  —Ð §Ð  ¦gVæ7F–öâ6WEö–çB‚ö–çBÂö–çDÖÂvVöÖWG'’Â6ÖW&Â‚Â’Â¢’°  •÷fV7F÷"ç6WB‚‚Â’Â¢’çVç&ö¦V7B‚6ÖW&“°  –6öç7Bö–çG2Òö–çDÖ²ö–çBÓ°  ––b‚ö–çG2ÓÒVæFVf–æVB’°  –6öç7B÷6—F–öâÒvVöÖWG'’ævWDGG&–'WFR‚w÷6—F–öâr“°  –f÷"‚ÆWB’ÒÂÂÒö–çG2æÆVæwFƒ²’ÂÃ²’²²’°  —÷6—F–öâç6WE…•¢‚ö–çG5²’ÒÂ÷fV7F÷"ç‚Â÷fV7F÷"ç’Â÷fV7F÷"ç¢“°  —Ð  —Ð §Ð ¦6öç7Bö&÷‚Òò¤õõU$Uõò¢òæWr&÷ƒ2‚“° ¦6Æ72&÷„†VÇW"W‡FVæG2Æ–æU6VvÖVçG2°  –6öç7G'V7F÷"‚ö&¦V7BÂ6öÆ÷"Ò†fffc’°  –6öç7B–æF–6W2ÒæWrV–çCd'&’‚²ÂÂÂ"Â"Â2Â2ÂÂBÂRÂRÂbÂbÂrÂrÂBÂÂBÂÂRÂ"ÂbÂ2ÂrÒ“° –6öç7B÷6—F–öç2ÒæWrfÆöC3$'&’‚‚¢2“°  –6öç7BvVöÖWG'’ÒæWr'VffW$vVöÖWG'’‚“° –vVöÖWG'’ç6WD–æFW‚‚æWr'VffW$GG&–'WFR‚–æF–6W2Â’“° –vVöÖWG'’ç6WDGG&–'WFR‚w÷6—F–öârÂæWr'VffW$GG&–'WFR‚÷6—F–öç2Â2’“°  —7WW"‚vVöÖWG'’ÂæWrÆ–æT&6–4ÖFW&–Â‚²6öÆ÷#¢6öÆ÷"ÂFöæTÖVC¢fÇ6RÒ’“°  —F†—2æö&¦V7BÒö&¦V7C° —F†—2çG—RÒt&÷„†VÇW"s°  —F†—2æÖG&—„WFõWFFRÒfÇ6S°  —F†—2çWFFR‚“°  —Ð  —WFFR‚ö&¦V7B’°  ––b‚ö&¦V7BÓÒVæFVf–æVB’°  –6öç6öÆRçv&â‚uD…$TRä&÷„†VÇW#¢çWFFR‚’†2æòÆöævW"&wVÖVçG2âr“°  —Ð  ––b‚F†—2æö&¦V7BÓÒVæFVf–æVB’°  •ö&÷‚ç6WDg&öÔö&¦V7B‚F†—2æö&¦V7B“°  —Ð  ––b‚ö&÷‚æ—4V×G’‚’’&WGW&ã°  –6öç7BÖ–âÒö&÷‚æÖ–ã° –6öç7BÖ‚Òö&÷‚æÖƒ°  ’ò  “Uõõõó@ “õõõó÷À —Âeõ÷Åóp “"õõõó2ð  “¢Ö‚ç‚ÂÖ‚ç’ÂÖ‚ç  “¢Ö–âç‚ÂÖ‚ç’ÂÖ‚ç  “#¢Ö–âç‚ÂÖ–âç’ÂÖ‚ç  “3¢Ö‚ç‚ÂÖ–âç’ÂÖ‚ç  “C¢Ö‚ç‚ÂÖ‚ç’ÂÖ–âç  “S¢Ö–âç‚ÂÖ‚ç’ÂÖ–âç  “c¢Ö–âç‚ÂÖ–âç’ÂÖ–âç  “s¢Ö‚ç‚ÂÖ–âç’ÂÖ–âç  ’¢ð  –6öç7B÷6—F–öâÒF†—2ævVöÖWG'’æGG&–'WFW2ç÷6—F–öã° –6öç7B'&’Ò÷6—F–öâæ'&“°  –'&•²ÒÒÖ‚çƒ²'&•²ÒÒÖ‚ç“²'&•²"ÒÒÖ‚ç£° –'&•²2ÒÒÖ–âçƒ²'&•²BÒÒÖ‚ç“²'&•²RÒÒÖ‚ç£° –'&•²bÒÒÖ–âçƒ²'&•²rÒÒÖ–âç“²'&•²‚ÒÒÖ‚ç£° –'&•²’ÒÒÖ‚çƒ²'&•²ÒÒÖ–âç“²'&•²ÒÒÖ‚ç£° –'&•²"ÒÒÖ‚çƒ²'&•²2ÒÒÖ‚ç“²'&•²BÒÒÖ–âç£° –'&•²RÒÒÖ–âçƒ²'&•²bÒÒÖ‚ç“²'&•²rÒÒÖ–âç£° –'&•²‚ÒÒÖ–âçƒ²'&•²’ÒÒÖ–âç“²'&•²#ÒÒÖ–âç£° –'&•²#ÒÒÖ‚çƒ²'&•²#"ÒÒÖ–âç“²'&•²#2ÒÒÖ–âç£°  —÷6—F–öâææVVG5WFFRÒG'VS°  —F†—2ævVöÖWG'’æ6ö×WFT&÷VæF–æu7†W&R‚“°  —Ð  —6WDg&öÔö&¦V7B‚ö&¦V7B’°  —F†—2æö&¦V7BÒö&¦V7C° —F†—2çWFFR‚“°  —&WGW&âF†—3°  —Ð  –6÷’‚6÷W&6RÂ&V7W'6—fR’°  —7WW"æ6÷’‚6÷W&6RÂ&V7W'6—fR“°  —F†—2æö&¦V7BÒ6÷W&6Ræö&¦V7C°  —&WGW&âF†—3°  —Ð  –F—7÷6R‚’°  —F†—2ævVöÖWG'’æF—7÷6R‚“° —F†—2æÖFW&–ÂæF—7÷6R‚“°  —Ð §Ð ¦6Æ72&÷ƒ4†VÇW"W‡FVæG2Æ–æU6VvÖVçG2°  –6öç7G'V7F÷"‚&÷‚Â6öÆ÷"Ò†fffc’°  –6öç7B–æF–6W2ÒæWrV–çCd'&’‚²ÂÂÂ"Â"Â2Â2ÂÂBÂRÂRÂbÂbÂrÂrÂBÂÂBÂÂRÂ"ÂbÂ2ÂrÒ“°  –6öç7B÷6—F–öç2Ò²ÂÂÂÒÂÂÂÒÂÒÂÂÂÒÂÂÂÂÒÂÒÂÂÒÂÒÂÒÂÒÂÂÒÂÒÓ°  –6öç7BvVöÖWG'’ÒæWr'VffW$vVöÖWG'’‚“°  –vVöÖWG'’ç6WD–æFW‚‚æWr'VffW$GG&–'WFR‚–æF–6W2Â’“°  –vVöÖWG'’ç6WDGG&–'WFR‚w÷6—F–öârÂæWrfÆöC3$'VffW$GG&–'WFR‚÷6—F–öç2Â2’“°  —7WW"‚vVöÖWG'’ÂæWrÆ–æT&6–4ÖFW&–Â‚²6öÆ÷#¢6öÆ÷"ÂFöæTÖVC¢fÇ6RÒ’“°  —F†—2æ&÷‚Ò&÷ƒ°  —F†—2çG—RÒt&÷ƒ4†VÇW"s°  —F†—2ævVöÖWG'’æ6ö×WFT&÷VæF–æu7†W&R‚“°  —Ð  —WFFTÖG&—…v÷&ÆB‚f÷&6R’°  –6öç7B&÷‚ÒF†—2æ&÷ƒ°  ––b‚&÷‚æ—4V×G’‚’’&WGW&ã°  –&÷‚ævWD6VçFW"‚F†—2ç÷6—F–öâ“°  –&÷‚ævWE6—¦R‚F†—2ç66ÆR“°  —F†—2ç66ÆRæ×VÇF—Ç•66Æ"‚ãR“°  —7WW"çWFFTÖG&—…v÷&ÆB‚f÷&6R“°  —Ð  –F—7÷6R‚’°  —F†—2ævVöÖWG'’æF—7÷6R‚“° —F†—2æÖFW&–ÂæF—7÷6R‚“°  —Ð §Ð ¦6Æ72ÆæT†VÇW"W‡FVæG2Æ–æR°  –6öç7G'V7F÷"‚ÆæRÂ6—¦RÒÂ†W‚Ò†fffc’°  –6öç7B6öÆ÷"Ò†Wƒ°  –6öç7B÷6—F–öç2Ò²ÂÒÂÂÒÂÂÂÒÂÒÂÂÂÂÂÒÂÂÂÒÂÒÂÂÂÒÂÂÂÂÓ°  –6öç7BvVöÖWG'’ÒæWr'VffW$vVöÖWG'’‚“° –vVöÖWG'’ç6WDGG&–'WFR‚w÷6—F–öârÂæWrfÆöC3$'VffW$GG&–'WFR‚÷6—F–öç2Â2’“° –vVöÖWG'’æ6ö×WFT&÷VæF–æu7†W&R‚“°  —7WW"‚vVöÖWG'’ÂæWrÆ–æT&6–4ÖFW&–Â‚²6öÆ÷#¢6öÆ÷"ÂFöæTÖVC¢fÇ6RÒ’“°  —F†—2çG—RÒuÆæT†VÇW"s°  —F†—2çÆæRÒÆæS°  —F†—2ç6—¦RÒ6—¦S°  –6öç7B÷6—F–öç3"Ò²ÂÂÂÒÂÂÂÒÂÒÂÂÂÂÂÒÂÒÂÂÂÒÂÓ°  –6öç7BvVöÖWG'“"ÒæWr'VffW$vVöÖWG'’‚“° –vVöÖWG'“"ç6WDGG&–'WFR‚w÷6—F–öârÂæWrfÆöC3$'VffW$GG&–'WFR‚÷6—F–öç3"Â2’“° –vVöÖWG'“"æ6ö×WFT&÷VæF–æu7†W&R‚“°  —F†—2æFB‚æWrÖW6‚‚vVöÖWG'“"ÂæWrÖW6„&6–4ÖFW&–Â‚²6öÆ÷#¢6öÆ÷"Â÷6—G“¢ã"ÂG&ç7&VçC¢G'VRÂFWF…w&—FS¢fÇ6RÂFöæTÖVC¢fÇ6RÒ’’“°  —Ð  —WFFTÖG&—…v÷&ÆB‚f÷&6R’°  —F†—2ç÷6—F–öâç6WB‚ÂÂ“°  —F†—2ç66ÆRç6WB‚ãR¢F†—2ç6—¦RÂãR¢F†—2ç6—¦RÂ“°  —F†—2æÆöö´B‚F†—2çÆæRææ÷&ÖÂ“°  —F†—2çG&ç6ÆFU¢‚ÒF†—2çÆæRæ6öç7FçB“°  —7WW"çWFFTÖG&—…v÷&ÆB‚f÷&6R“°  —Ð  –F—7÷6R‚’°  —F†—2ævVöÖWG'’æF—7÷6R‚“° —F†—2æÖFW&–ÂæF—7÷6R‚“° —F†—2æ6†–ÆG&Vå²ÒævVöÖWG'’æF—7÷6R‚“° —F†—2æ6†–ÆG&Vå²ÒæÖFW&–ÂæF—7÷6R‚“°  —Ð §Ð ¦6öç7Bö†—2Òò¤õõU$Uõò¢òæWrfV7F÷#2‚“°¦ÆWBöÆ–æTvVöÖWG'’Âö6öæTvVöÖWG'“° ¦6Æ72'&÷t†VÇW"W‡FVæG2ö&¦V7C4B°  ’òòF—"—277VÖVBFò&Ræ÷&ÖÆ—¦V@  –6öç7G'V7F÷"‚F—"ÒæWrfV7F÷#2‚ÂÂ’Â÷&–v–âÒæWrfV7F÷#2‚ÂÂ’ÂÆVæwF‚ÒÂ6öÆ÷"Ò†fffcÂ†VDÆVæwF‚ÒÆVæwF‚¢ã"Â†VEv–GF‚Ò†VDÆVæwF‚¢ã"’°  —7WW"‚“°  —F†—2çG—RÒt'&÷t†VÇW"s°  ––b‚öÆ–æTvVöÖWG'’ÓÓÒVæFVf–æVB’°  •öÆ–æTvVöÖWG'’ÒæWr'VffW$vVöÖWG'’‚“° •öÆ–æTvVöÖWG'’ç6WDGG&–'WFR‚w÷6—F–öârÂæWrfÆöC3$'VffW$GG&–'WFR‚²ÂÂÂÂÂÒÂ2’“°  •ö6öæTvVöÖWG'’ÒæWr7–Æ–æFW$vVöÖWG'’‚ÂãRÂÂRÂ“° •ö6öæTvVöÖWG'’çG&ç6ÆFR‚ÂÒãRÂ“°  —Ð  —F†—2ç÷6—F–öâæ6÷’‚÷&–v–â“°  —F†—2æÆ–æRÒæWrÆ–æR‚öÆ–æTvVöÖWG'’ÂæWrÆ–æT&6–4ÖFW&–Â‚²6öÆ÷#¢6öÆ÷"ÂFöæTÖVC¢fÇ6RÒ’“° —F†—2æÆ–æRæÖG&—„WFõWFFRÒfÇ6S° —F†—2æFB‚F†—2æÆ–æR“°  —F†—2æ6öæRÒæWrÖW6‚‚ö6öæTvVöÖWG'’ÂæWrÖW6„&6–4ÖFW&–Â‚²6öÆ÷#¢6öÆ÷"ÂFöæTÖVC¢fÇ6RÒ’“° —F†—2æ6öæRæÖG&—„WFõWFFRÒfÇ6S° —F†—2æFB‚F†—2æ6öæR“°  —F†—2ç6WDF—&V7F–öâ‚F—"“° —F†—2ç6WDÆVæwF‚‚ÆVæwF‚Â†VDÆVæwF‚Â†VEv–GF‚“°  —Ð  —6WDF—&V7F–öâ‚F—"’°  ’òòF—"—277VÖVBFò&Ræ÷&ÖÆ—¦V@  ––b‚F—"ç’âã““““’’°  —F†—2çVFW&æ–öâç6WB‚ÂÂÂ“°  —ÒVÇ6R–b‚F—"ç’ÂÒã““““’’°  —F†—2çVFW&æ–öâç6WB‚ÂÂÂ“°  —ÒVÇ6R°  •ö†—2ç6WB‚F—"ç¢ÂÂÒF—"ç‚’ææ÷&ÖÆ—¦R‚“°  –6öç7B&F–ç2ÒÖF‚æ6÷2‚F—"ç’“°  —F†—2çVFW&æ–öâç6WDg&öÔ†—4ævÆR‚ö†—2Â&F–ç2“°  —Ð  —Ð  —6WDÆVæwF‚‚ÆVæwF‚Â†VDÆVæwF‚ÒÆVæwF‚¢ã"Â†VEv–GF‚Ò†VDÆVæwF‚¢ã"’°  —F†—2æÆ–æRç66ÆRç6WB‚ÂÖF‚æÖ‚‚ãÂÆVæwF‚Ò†VDÆVæwF‚’Â“²òò6VR3sCS€ —F†—2æÆ–æRçWFFTÖG&—‚‚“°  —F†—2æ6öæRç66ÆRç6WB‚†VEv–GF‚Â†VDÆVæwF‚Â†VEv–GF‚“° —F†—2æ6öæRç÷6—F–öâç’ÒÆVæwFƒ° —F†—2æ6öæRçWFFTÖG&—‚‚“°  —Ð  —6WD6öÆ÷"‚6öÆ÷"’°  —F†—2æÆ–æRæÖFW&–Âæ6öÆ÷"ç6WB‚6öÆ÷"“° —F†—2æ6öæRæÖFW&–Âæ6öÆ÷"ç6WB‚6öÆ÷"“°  —Ð  –6÷’‚6÷W&6R’°  —7WW"æ6÷’‚6÷W&6RÂfÇ6R“°  —F†—2æÆ–æRæ6÷’‚6÷W&6RæÆ–æR“° —F†—2æ6öæRæ6÷’‚6÷W&6Ræ6öæR“°  —&WGW&âF†—3°  —Ð  –F—7÷6R‚’°  —F†—2æÆ–æRævVöÖWG'’æF—7÷6R‚“° —F†—2æÆ–æRæÖFW&–ÂæF—7÷6R‚“° —F†—2æ6öæRævVöÖWG'’æF—7÷6R‚“° —F†—2æ6öæRæÖFW&–ÂæF—7÷6R‚“°  —Ð §Ð ¦6Æ72†W4†VÇW"W‡FVæG2Æ–æU6VvÖVçG2°  –6öç7G'V7F÷"‚6—¦RÒ’°  –6öç7BfW'F–6W2Ò° “ÂÂÀ—6—¦RÂÂÀ “ÂÂÀ“Â6—¦RÂÀ “ÂÂÀ“ÂÂ6—¦P •Ó°  –6öç7B6öÆ÷'2Ò° “ÂÂÀ“ÂãbÂÀ “ÂÂÀ“ãbÂÂÀ “ÂÂÀ“ÂãbÂ •Ó°  –6öç7BvVöÖWG'’ÒæWr'VffW$vVöÖWG'’‚“° –vVöÖWG'’ç6WDGG&–'WFR‚w÷6—F–öârÂæWrfÆöC3$'VffW$GG&–'WFR‚fW'F–6W2Â2’“° –vVöÖWG'’ç6WDGG&–'WFR‚v6öÆ÷"rÂæWrfÆöC3$'VffW$GG&–'WFR‚6öÆ÷'2Â2’“°  –6öç7BÖFW&–ÂÒæWrÆ–æT&6–4ÖFW&–Â‚²fW'FW„6öÆ÷'3¢G'VRÂFöæTÖVC¢fÇ6RÒ“°  —7WW"‚vVöÖWG'’ÂÖFW&–Â“°  —F†—2çG—RÒt†W4†VÇW"s°  —Ð  —6WD6öÆ÷'2‚„†—46öÆ÷"Â”†—46öÆ÷"Â¤†—46öÆ÷"’°  –6öç7B6öÆ÷"ÒæWr6öÆ÷"‚“° –6öç7B'&’ÒF†—2ævVöÖWG'’æGG&–'WFW2æ6öÆ÷"æ'&“°  –6öÆ÷"ç6WB‚„†—46öÆ÷"“° –6öÆ÷"çFô'&’‚'&’Â“° –6öÆ÷"çFô'&’‚'&’Â2“°  –6öÆ÷"ç6WB‚”†—46öÆ÷"“° –6öÆ÷"çFô'&’‚'&’Âb“° –6öÆ÷"çFô'&’‚'&’Â’“°  –6öÆ÷"ç6WB‚¤†—46öÆ÷"“° –6öÆ÷"çFô'&’‚'&’Â"“° –6öÆ÷"çFô'&’‚'&’ÂR“°  —F†—2ævVöÖWG'’æGG&–'WFW2æ6öÆ÷"ææVVG5WFFRÒG'VS°  —&WGW&âF†—3°  —Ð  –F—7÷6R‚’°  —F†—2ævVöÖWG'’æF—7÷6R‚“° —F†—2æÖFW&–ÂæF—7÷6R‚“°  —Ð §Ð ¦6Æ726†UF‚°  –6öç7G'V7F÷"‚’°  —F†—2çG—RÒu6†UF‚s°  —F†—2æ6öÆ÷"ÒæWr6öÆ÷"‚“°  —F†—2ç7V%F‡2ÒµÓ° —F†—2æ7W'&VçEF‚ÒçVÆÃ°  —Ð  –Ö÷fUFò‚‚Â’’°  —F†—2æ7W'&VçEF‚ÒæWrF‚‚“° —F†—2ç7V%F‡2çW6‚‚F†—2æ7W'&VçEF‚“° —F†—2æ7W'&VçEF‚æÖ÷fUFò‚‚Â’“°  —&WGW&âF†—3°  —Ð  –Æ–æUFò‚‚Â’’°  —F†—2æ7W'&VçEF‚æÆ–æUFò‚‚Â’“°  —&WGW&âF†—3°  —Ð  —VG&F–47W'fUFò‚5‚Â5’Â‚Â’’°  —F†—2æ7W'&VçEF‚çVG&F–47W'fUFò‚5‚Â5’Â‚Â’“°  —&WGW&âF†—3°  —Ð  –&W¦–W$7W'fUFò‚5‚Â5’Â5'‚Â5'’Â‚Â’’°  —F†—2æ7W'&VçEF‚æ&W¦–W$7W'fUFò‚5‚Â5’Â5'‚Â5'’Â‚Â’“°  —&WGW&âF†—3°  —Ð  —7Æ–æUF‡'R‚G2’°  —F†—2æ7W'&VçEF‚ç7Æ–æUF‡'R‚G2“°  —&WGW&âF†—3°  —Ð  —Fõ6†W2‚—445r’°  –gVæ7F–öâFõ6†W4æô†öÆW2‚–å7V'F‡2’°  –6öç7B6†W2ÒµÓ°  –f÷"‚ÆWB’ÒÂÂÒ–å7V'F‡2æÆVæwFƒ²’ÂÃ²’²²’°  –6öç7BF×F‚Ò–å7V'F‡5²’Ó°  –6öç7BF×6†RÒæWr6†R‚“° —F×6†Ræ7W'fW2ÒF×F‚æ7W'fW3°  —6†W2çW6‚‚F×6†R“°  —Ð  —&WGW&â6†W3°  —Ð  –gVæ7F–öâ—5ö–çD–ç6–FUöÇ–vöâ‚–åBÂ–åöÇ–vöâ’°  –6öç7BöÇ”ÆVâÒ–åöÇ–vöâæÆVæwFƒ°  ’òò–åBöâöÇ–vöâ6öçF÷W"Óâ–ÖÖVF–FR7V66W72÷  ’òòFövvÆ–æröb–ç6–FRö÷WG6–FRBWfW'’6–ævÆR–çFW'6V7F–öâö–çBöbâVFvP ’òòv—F‚F†R†÷&—¦öçFÂÆ–æRF‡&÷Vv‚–åBÂÆVgBöb–å@ ’òòæ÷B6÷VçF–ærÆ÷vW%’VæGö–çG2öbVFvW2æBv†öÆRVFvW2öâF†BÆ–æP –ÆWB–ç6–FRÒfÇ6S° –f÷"‚ÆWBÒöÇ”ÆVâÒÂÒ²ÂöÇ”ÆVã²Ò²²’°  –ÆWBVFvTÆ÷uBÒ–åöÇ–vöå²Ó° –ÆWBVFvT†–v…BÒ–åöÇ–vöå²Ó°  –ÆWBVFvTG‚ÒVFvT†–v…Bç‚ÒVFvTÆ÷uBçƒ° –ÆWBVFvTG’ÒVFvT†–v…Bç’ÒVFvTÆ÷uBç“°  ––b‚ÖF‚æ'2‚VFvTG’’âçVÖ&W"äU4”Äôâ’°  ’òòæ÷B&ÆÆVÀ ––b‚VFvTG’Â’°  –VFvTÆ÷uBÒ–åöÇ–vöå²Ó²VFvTG‚ÒÒVFvTGƒ° –VFvT†–v…BÒ–åöÇ–vöå²Ó²VFvTG’ÒÒVFvTG“°  —Ð  ––b‚‚–åBç’ÂVFvTÆ÷uBç’’ÇÂ‚–åBç’âVFvT†–v…Bç’’’ –6öçF–çVS°  ––b‚–åBç’ÓÓÒVFvTÆ÷uBç’’°  ––b‚–åBç‚ÓÓÒVFvTÆ÷uBç‚—&WGW&à—G'VS°’òò–åB—2öâ6öçF÷W"ð ’òò6öçF–çVS°’òòæò–çFW'6V7F–öâ÷"VFvTÆ÷uBÓâFöW6âwB6÷VçB  —ÒVÇ6R°  –6öç7BW'VFvRÒVFvTG’¢‚–åBç‚ÒVFvTÆ÷uBç‚’ÒVFvTG‚¢‚–åBç’ÒVFvTÆ÷uBç’“° ––b‚W'VFvRÓÓÒ—&WGW&à—G'VS°’òò–åB—2öâ6öçF÷W"ð ––b‚W'VFvRÂ’ –6öçF–çVS° ––ç6–FRÒ–ç6–FS°’òòG'VR–çFW'6V7F–öâÆVgBöb–å@  —Ð  —ÒVÇ6R°  ’òò&ÆÆVÂ÷"6öÆÆ–æV  ––b‚–åBç’ÓÒVFvTÆ÷uBç’’ –6öçF–çVS°’òò&ÆÆVÀ ’òòVFvRÆ–W2öâF†R6ÖR†÷&—¦öçFÂÆ–æR2–å@ ––b‚‚‚VFvT†–v…Bç‚ÃÒ–åBç‚’bb‚–åBç‚ÃÒVFvTÆ÷uBç‚’’ÇÀ ’‚‚VFvTÆ÷uBç‚ÃÒ–åBç‚’bb‚–åBç‚ÃÒVFvT†–v…Bç‚’’—&WGW&à—G'VS°’òò–åC¢ö–çBöâ6öçF÷W" ’òò6öçF–çVS°  —Ð  —Ð  —&WGW&à––ç6–FS°  —Ð  –6öç7B—46Æö6µv—6RÒ6†UWF–Ç2æ—46Æö6µv—6S°  –6öç7B7V%F‡2ÒF†—2ç7V%F‡3° ––b‚7V%F‡2æÆVæwF‚ÓÓÒ’&WGW&âµÓ°  –ÆWB6öÆ–BÂF×F‚ÂF×6†S° –6öç7B6†W2ÒµÓ°  ––b‚7V%F‡2æÆVæwF‚ÓÓÒ’°  —F×F‚Ò7V%F‡5²Ó° —F×6†RÒæWr6†R‚“° —F×6†Ræ7W'fW2ÒF×F‚æ7W'fW3° —6†W2çW6‚‚F×6†R“° —&WGW&â6†W3°  —Ð  –ÆWB†öÆW4f—'7BÒ—46Æö6µv—6R‚7V%F‡5²ÒævWEö–çG2‚’“° –†öÆW4f—'7BÒ—445rò†öÆW4f—'7B¢†öÆW4f—'7C°  ’òò6öç6öÆRæÆör‚$†öÆW2f—'7B"Â†öÆW4f—'7B“°  –6öç7B&WGFW%6†T†öÆW2ÒµÓ° –6öç7BæWu6†W2ÒµÓ° –ÆWBæWu6†T†öÆW2ÒµÓ° –ÆWBÖ–ä–G‚Ò° –ÆWBF×ö–çG3°  –æWu6†W5²Ö–ä–G‚ÒÒVæFVf–æVC° –æWu6†T†öÆW5²Ö–ä–G‚ÒÒµÓ°  –f÷"‚ÆWB’ÒÂÂÒ7V%F‡2æÆVæwFƒ²’ÂÃ²’²²’°  —F×F‚Ò7V%F‡5²’Ó° —F×ö–çG2ÒF×F‚ævWEö–çG2‚“° —6öÆ–BÒ—46Æö6µv—6R‚F×ö–çG2“° —6öÆ–BÒ—445rò6öÆ–B¢6öÆ–C°  ––b‚6öÆ–B’°  ––b‚‚†öÆW4f—'7B’bb‚æWu6†W5²Ö–ä–G‚Ò’–Ö–ä–G‚²³°  –æWu6†W5²Ö–ä–G‚ÒÒ²3¢æWr6†R‚’Â¢F×ö–çG2Ó° –æWu6†W5²Ö–ä–G‚Òç2æ7W'fW2ÒF×F‚æ7W'fW3°  ––b‚†öÆW4f—'7B–Ö–ä–G‚²³° –æWu6†T†öÆW5²Ö–ä–G‚ÒÒµÓ°  ’òö6öç6öÆRæÆör‚v7rrÂ’“°  —ÒVÇ6R°  –æWu6†T†öÆW5²Ö–ä–G‚ÒçW6‚‚²ƒ¢F×F‚Â¢F×ö–çG5²ÒÒ“°  ’òö6öç6öÆRæÆör‚v67rrÂ’“°  —Ð  —Ð  ’òòöæÇ’†öÆW3òÓâ&ö&&Ç’ÆÂ6†W2v—F‚w&öær÷&–VçFF–öà ––b‚æWu6†W5²Ò—&WGW&à—Fõ6†W4æô†öÆW2‚7V%F‡2“°   ––b‚æWu6†W2æÆVæwF‚â’°  –ÆWBÖ&–wV÷W2ÒfÇ6S° –ÆWBFô6†ævRÒ°  –f÷"‚ÆWB4–G‚ÒÂ4ÆVâÒæWu6†W2æÆVæwFƒ²4–G‚Â4ÆVã²4–G‚²²’°  –&WGFW%6†T†öÆW5²4–G‚ÒÒµÓ°  —Ð  –f÷"‚ÆWB4–G‚ÒÂ4ÆVâÒæWu6†W2æÆVæwFƒ²4–G‚Â4ÆVã²4–G‚²²’°  –6öç7B6†òÒæWu6†T†öÆW5²4–G‚Ó°  –f÷"‚ÆWB„–G‚Ò²„–G‚Â6†òæÆVæwFƒ²„–G‚²²’°  –6öç7B†òÒ6†õ²„–G‚Ó° –ÆWB†öÆU÷Væ76–væVBÒG'VS°  –f÷"‚ÆWB3$–G‚Ò²3$–G‚ÂæWu6†W2æÆVæwFƒ²3$–G‚²²’°  ––b‚—5ö–çD–ç6–FUöÇ–vöâ‚†òçÂæWu6†W5²3$–G‚Òç’’°  ––b‚4–G‚ÓÒ3$–G‚—Fô6†ævR²³°  ––b‚†öÆU÷Væ76–væVB’°  –†öÆU÷Væ76–væVBÒfÇ6S° –&WGFW%6†T†öÆW5²3$–G‚ÒçW6‚‚†ò“°  —ÒVÇ6R°  –Ö&–wV÷W2ÒG'VS°  —Ð  —Ð  —Ð  ––b‚†öÆU÷Væ76–væVB’°  –&WGFW%6†T†öÆW5²4–G‚ÒçW6‚‚†ò“°  —Ð  —Ð  —Ð  ––b‚Fô6†ævRâbbÖ&–wV÷W2ÓÓÒfÇ6R’°  –æWu6†T†öÆW2Ò&WGFW%6†T†öÆW3°  —Ð  —Ð  –ÆWBF×†öÆW3°  –f÷"‚ÆWB’ÒÂ–ÂÒæWu6†W2æÆVæwFƒ²’Â–Ã²’²²’°  —F×6†RÒæWu6†W5²’Òç3° —6†W2çW6‚‚F×6†R“° —F×†öÆW2ÒæWu6†T†öÆW5²’Ó°  –f÷"‚ÆWB¢ÒÂ¦ÂÒF×†öÆW2æÆVæwFƒ²¢Â¦Ã²¢²²’°  —F×6†Ræ†öÆW2çW6‚‚F×†öÆW5²¢Òæ‚“°  —Ð  —Ð  ’òö6öç6öÆRæÆör‚'6†R"Â6†W2“°  —&WGW&â6†W3°  —Ð §Ð ¦6Æ72vV$tÄ×VÇF—ÆU&VæFW%F&vWG2W‡FVæG2vV$tÅ&VæFW%F&vWB²òòFW&V6FVBÂ#c   –6öç7G'V7F÷"‚v–GF‚ÒÂ†V–v‡BÒÂ6÷VçBÒÂ÷F–öç2Ò·Ò’°  –6öç6öÆRçv&â‚uD…$TRåvV$tÄ×VÇF—ÆU&VæFW%F&vWG2†2&VVâFW&V6FVBæBv–ÆÂ&R&VÖ÷fVB–â#s"âW6RD…$TRåvV$tÅ&VæFW%F&vWBæB6WBF†R&6÷VçB"&ÖWFW"FòVæ&ÆRÕ%Bâr“°  —7WW"‚v–GF‚Â†V–v‡BÂ²ââæ÷F–öç2Â6÷VçBÒ“°  —F†—2æ—5vV$tÄ×VÇF—ÆU&VæFW%F&vWG2ÒG'VS°  —Ð  –vWBFW‡GW&R‚’°  —&WGW&âF†—2çFW‡GW&W3°  —Ð §Ð ¦–b‚G—VöbõõD…$TUôDUeDôôÅ5õòÓÒwVæFVf–æVBr’°  •õõD…$TUôDUeDôôÅ5õòæF—7F6„WfVçB‚æWr7W7FöÔWfVçB‚w&Vv—7FW"rÂ²FWF–Ã¢° —&Wf—6–öã¢$Ud•4”ôâÀ —ÒÒ’“° §Ð ¦–b‚G—Vöbv–æF÷rÓÒwVæFVf–æVBr’°  ––b‚v–æF÷råõõD…$TUõò’°  –6öç6öÆRçv&â‚ut$ä”äs¢×VÇF—ÆR–ç7Fæ6W2öbF‡&VRæ§2&V–ær–×÷'FVBâr“°  —ÒVÇ6R°  —v–æF÷råõõD…$TUõòÒ$Ud•4”ôã°  —Ð §Ð ¦W‡÷'B²4U4f–ÆÖ–5FöæTÖ–ærÂFDWVF–öâÂFD÷W&F–öâÂFF—F—fTæ–ÖF–öä&ÆVæDÖöFRÂFF—F—fT&ÆVæF–ærÂu…FöæTÖ–ærÂÇ†f÷&ÖBÂÇv—46ö×&RÂÇv—4FWF‚ÂÇv—57FVæ6–ÄgVæ2ÂÖ&–VçDÆ–v‡BÂæ–ÖF–öä7F–öâÂæ–ÖF–öä6Æ—Âæ–ÖF–öäÆöFW"Âæ–ÖF–öäÖ—†W"Âæ–ÖF–öäö&¦V7Dw&÷WÂæ–ÖF–öåWF–Ç2Â&47W'fRÂ'&”6ÖW&Â'&÷t†VÇW"ÂGF6†VD&–æDÖöFRÂVF–òÂVF–ôæÇ—6W"ÂVF–ô6öçFW‡BÂVF–ôÆ—7FVæW"ÂVF–ôÆöFW"Â†W4†VÇW"Â&6µ6–FRÂ&6–4FWF…6¶–ærÂ&6–56†F÷tÖÂ&F6†VDÖW6‚Â&öæRÂ&ööÆVä¶W–g&ÖUG&6²Â&÷ƒ"Â&÷ƒ2Â&÷ƒ4†VÇW"Â&÷„vVöÖWG'’Â&÷„†VÇW"Â'VffW$GG&–'WFRÂ'VffW$vVöÖWG'’Â'VffW$vVöÖWG'”ÆöFW"Â'—FUG—RÂ66†RÂ6ÖW&Â6ÖW&†VÇW"Â6çf5FW‡GW&RÂ67VÆTvVöÖWG'’Â6F×VÆÅ&öÔ7W'fS2Â6–æVöåFöæTÖ–ærÂ6—&6ÆTvVöÖWG'’Â6Æ×FôVFvUw&–ærÂ6Æö6²Â6öÆ÷"Â6öÆ÷$¶W–g&ÖUG&6²Â6öÆ÷$ÖævVÖVçBÂ6ö×&W76VD'&•FW‡GW&RÂ6ö×&W76VD7V&UFW‡GW&RÂ6ö×&W76VEFW‡GW&RÂ6ö×&W76VEFW‡GW&TÆöFW"Â6öæTvVöÖWG'’Â6öç7FçDÇ†f7F÷"Â6öç7FçD6öÆ÷$f7F÷"Â7V&T6ÖW&Â7V&U&VfÆV7F–öäÖ–ærÂ7V&U&Vg&7F–öäÖ–ærÂ7V&UFW‡GW&RÂ7V&UFW‡GW&TÆöFW"Â7V&UUe&VfÆV7F–öäÖ–ærÂ7V&–4&W¦–W$7W'fRÂ7V&–4&W¦–W$7W'fS2Â7V&–4–çFW'öÆçBÂ7VÆÄf6T&6²Â7VÆÄf6Tg&öçBÂ7VÆÄf6Tg&öçD&6²Â7VÆÄf6TæöæRÂ7W'fRÂ7W'fUF‚Â7W7FöÔ&ÆVæF–ærÂ7W7FöÕFöæTÖ–ærÂ7–Æ–æFW$vVöÖWG'’Â7–Æ–æG&–6ÂÂFF4EFW‡GW&RÂFF'&•FW‡GW&RÂFFFW‡GW&RÂFFFW‡GW&TÆöFW"ÂFFWF–Ç2ÂFV7&VÖVçE7FVæ6–Ä÷ÂFV7&VÖVçEw&7FVæ6–Ä÷ÂFVfVÇDÆöF–ætÖævW"ÂFWF„f÷&ÖBÂFWF…7FVæ6–Äf÷&ÖBÂFWF…FW‡GW&RÂFWF6†VD&–æDÖöFRÂF—&V7F–öæÄÆ–v‡BÂF—&V7F–öæÄÆ–v‡D†VÇW"ÂF—67&WFT–çFW'öÆçBÂF—7Æ•46öÆ÷%76RÂFöFV6†VG&öävVöÖWG'’ÂF÷V&ÆU6–FRÂG7DÇ†f7F÷"ÂG7D6öÆ÷$f7F÷"ÂG–æÖ–46÷•W6vRÂG–æÖ–4G&uW6vRÂG–æÖ–5&VEW6vRÂVFvW4vVöÖWG'’ÂVÆÆ—6T7W'fRÂWVÄ6ö×&RÂWVÄFWF‚ÂWVÅ7FVæ6–ÄgVæ2ÂWV—&V7FæwVÆ%&VfÆV7F–öäÖ–ærÂWV—&V7FæwVÆ%&Vg&7F–öäÖ–ærÂWVÆW"ÂWfVçDF—7F6†W"ÂW‡G'VFTvVöÖWG'’Âf–ÆTÆöFW"ÂfÆöCd'VffW$GG&–'WFRÂfÆöC3$'VffW$GG&–'WFRÂfÆöEG—RÂförÂfötW‡"Âg&ÖV'VffW%FW‡GW&RÂg&öçE6–FRÂg'W7GVÒÂtÄ'VffW$GG&–'WFRÂtÅ4ÃÂtÅ4Ã2Âw&VFW$6ö×&RÂw&VFW$FWF‚Âw&VFW$WVÄ6ö×&RÂw&VFW$WVÄFWF‚Âw&VFW$WVÅ7FVæ6–ÄgVæ2Âw&VFW%7FVæ6–ÄgVæ2Âw&–D†VÇW"Âw&÷WÂ†ÆdfÆöEG—RÂ†VÖ—7†W&TÆ–v‡BÂ†VÖ—7†W&TÆ–v‡D†VÇW"Â–6÷6†VG&öävVöÖWG'’Â–ÖvT&—FÖÆöFW"Â–ÖvTÆöFW"Â–ÖvUWF–Ç2Â–æ7&VÖVçE7FVæ6–Ä÷Â–æ7&VÖVçEw&7FVæ6–Ä÷Â–ç7Fæ6VD'VffW$GG&–'WFRÂ–ç7Fæ6VD'VffW$vVöÖWG'’Â–ç7Fæ6VD–çFW&ÆVfVD'VffW"Â–ç7Fæ6VDÖW6‚Â–çCd'VffW$GG&–'WFRÂ–çC3$'VffW$GG&–'WFRÂ–çC„'VffW$GG&–'WFRÂ–çEG—RÂ–çFW&ÆVfVD'VffW"Â–çFW&ÆVfVD'VffW$GG&–'WFRÂ–çFW'öÆçBÂ–çFW'öÆFTF—67&WFRÂ–çFW'öÆFTÆ–æV"Â–çFW'öÆFU6Öö÷F‚Â–çfW'E7FVæ6–Ä÷Â¶VW7FVæ6–Ä÷Â¶W–g&ÖUG&6²ÂÄôBÂÆF†TvVöÖWG'’ÂÆ–W'2ÂÆW746ö×&RÂÆW74FWF‚ÂÆW74WVÄ6ö×&RÂÆW74WVÄFWF‚ÂÆW74WVÅ7FVæ6–ÄgVæ2ÂÆW757FVæ6–ÄgVæ2ÂÆ–v‡BÂÆ–v‡E&ö&RÂÆ–æRÂÆ–æS2ÂÆ–æT&6–4ÖFW&–ÂÂÆ–æT7W'fRÂÆ–æT7W'fS2ÂÆ–æTF6†VDÖFW&–ÂÂÆ–æTÆö÷ÂÆ–æU6VvÖVçG2ÂÆ–æV$F—7Æ•46öÆ÷%76RÂÆ–æV$f–ÇFW"ÂÆ–æV$–çFW'öÆçBÂÆ–æV$Ö—ÖÆ–æV$f–ÇFW"ÂÆ–æV$Ö—ÖæV&W7Df–ÇFW"ÂÆ–æV$Ö—ÖÆ–æV$f–ÇFW"ÂÆ–æV$Ö—ÖæV&W7Df–ÇFW"ÂÆ–æV%5$t$6öÆ÷%76RÂÆ–æV%FöæTÖ–ærÂÆ–æV%G&ç6fW"ÂÆöFW"ÂÆöFW%WF–Ç2ÂÆöF–ætÖævW"ÂÆö÷öæ6RÂÆö÷–æuöærÂÆö÷&WVBÂÇVÖ–ææ6TÇ†f÷&ÖBÂÇVÖ–ææ6Tf÷&ÖBÂÔõU4RÂÖFW&–ÂÂÖFW&–ÄÆöFW"ÂÖF…WF–Ç2ÂÖG&—ƒ2ÂÖG&—ƒBÂÖ„WVF–öâÂÖW6‚ÂÖW6„&6–4ÖFW&–ÂÂÖW6„FWF„ÖFW&–ÂÂÖW6„F—7Fæ6TÖFW&–ÂÂÖW6„ÆÖ&W'DÖFW&–ÂÂÖW6„ÖF6ÖFW&–ÂÂÖW6„æ÷&ÖÄÖFW&–ÂÂÖW6…†öætÖFW&–ÂÂÖW6…‡—6–6ÄÖFW&–ÂÂÖW6…7FæF&DÖFW&–ÂÂÖW6…FööäÖFW&–ÂÂÖ–äWVF–öâÂÖ—'&÷&VE&WVEw&–ærÂÖ—„÷W&F–öâÂ×VÇF—Ç”&ÆVæF–ærÂ×VÇF—Ç”÷W&F–öâÂæV&W7Df–ÇFW"ÂæV&W7DÖ—ÖÆ–æV$f–ÇFW"ÂæV&W7DÖ—ÖæV&W7Df–ÇFW"ÂæV&W7DÖ—ÖÆ–æV$f–ÇFW"ÂæV&W7DÖ—ÖæV&W7Df–ÇFW"ÂæWWG&ÅFöæTÖ–ærÂæWfW$6ö×&RÂæWfW$FWF‚ÂæWfW%7FVæ6–ÄgVæ2Âæô&ÆVæF–ærÂæô6öÆ÷%76RÂæõFöæTÖ–ærÂæ÷&ÖÄæ–ÖF–öä&ÆVæDÖöFRÂæ÷&ÖÄ&ÆVæF–ærÂæ÷DWVÄ6ö×&RÂæ÷DWVÄFWF‚Âæ÷DWVÅ7FVæ6–ÄgVæ2ÂçVÖ&W$¶W–g&ÖUG&6²Âö&¦V7C4BÂö&¦V7DÆöFW"Âö&¦V7E76Tæ÷&ÖÄÖÂö7F†VG&öävVöÖWG'’ÂöæTf7F÷"ÂöæTÖ–çW46öç7FçDÇ†f7F÷"ÂöæTÖ–çW46öç7FçD6öÆ÷$f7F÷"ÂöæTÖ–çW4G7DÇ†f7F÷"ÂöæTÖ–çW4G7D6öÆ÷$f7F÷"ÂöæTÖ–çW57&4Ç†f7F÷"ÂöæTÖ–çW57&46öÆ÷$f7F÷"Â÷'F†öw&†–46ÖW&Â5&–Ö&–W2Â4e6†F÷tÖÂ4e6ögE6†F÷tÖÂÕ$TÔvVæW&F÷"ÂF‚ÂW'7V7F—fT6ÖW&ÂÆæRÂÆæTvVöÖWG'’ÂÆæT†VÇW"Âö–çDÆ–v‡BÂö–çDÆ–v‡D†VÇW"Âö–çG2Âö–çG4ÖFW&–ÂÂöÆ$w&–D†VÇW"ÂöÇ–†VG&öävVöÖWG'’Â÷6—F–öæÄVF–òÂ&÷W'G”&–æF–ærÂ&÷W'G”Ö—†W"ÂVG&F–4&W¦–W$7W'fRÂVG&F–4&W¦–W$7W'fS2ÂVFW&æ–öâÂVFW&æ–öä¶W–g&ÖUG&6²ÂVFW&æ–öäÆ–æV$–çFW'öÆçBÂ$TEôu$TTåõ$uD3%ôf÷&ÖBÂ$TEõ$uD3ôf÷&ÖBÂ$Ud•4”ôâÂ$t$FWF…6¶–ærÂ$t$f÷&ÖBÂ$t$–çFVvW$f÷&ÖBÂ$t$ô5D5óƒôf÷&ÖBÂ$t$ô5D5óƒUôf÷&ÖBÂ$t$ô5D5óƒeôf÷&ÖBÂ$t$ô5D5óƒ…ôf÷&ÖBÂ$t$ô5D5ó'ƒôf÷&ÖBÂ$t$ô5D5ó'ƒ%ôf÷&ÖBÂ$t$ô5D5óGƒEôf÷&ÖBÂ$t$ô5D5óWƒEôf÷&ÖBÂ$t$ô5D5óWƒUôf÷&ÖBÂ$t$ô5D5ógƒUôf÷&ÖBÂ$t$ô5D5ógƒeôf÷&ÖBÂ$t$ô5D5ó‡ƒUôf÷&ÖBÂ$t$ô5D5ó‡ƒeôf÷&ÖBÂ$t$ô5D5ó‡ƒ…ôf÷&ÖBÂ$t$ô%D5ôf÷&ÖBÂ$t$ôUD3%ôT5ôf÷&ÖBÂ$t$õe%D5ó$%côf÷&ÖBÂ$t$õe%D5óD%côf÷&ÖBÂ$t$õ35D5ôE…Côf÷&ÖBÂ$t$õ35D5ôE…C5ôf÷&ÖBÂ$t$õ35D5ôE…CUôf÷&ÖBÂ$t$f÷&ÖBÂ$t%ô%D5õ4”täTEôf÷&ÖBÂ$t%ô%D5õTå4”täTEôf÷&ÖBÂ$t%ôUD3ôf÷&ÖBÂ$t%ôUD3%ôf÷&ÖBÂ$t%õe%D5ó$%côf÷&ÖBÂ$t%õe%D5óD%côf÷&ÖBÂ$t%õ35D5ôE…Côf÷&ÖBÂ$tf÷&ÖBÂ$t–çFVvW$f÷&ÖBÂ&u6†FW$ÖFW&–ÂÂ&’Â&–67FW"Â&V3s•&–Ö&–W2Â&V7D&VÆ–v‡BÂ&VDf÷&ÖBÂ&VD–çFVvW$f÷&ÖBÂ&V–æ†&EFöæTÖ–ærÂ&VæFW%F&vWBÂ&WVEw&–ærÂ&WÆ6U7FVæ6–Ä÷Â&WfW'6U7V'G&7DWVF–öâÂ&–ætvVöÖWG'’Â4”täTEõ$TEôu$TTåõ$uD3%ôf÷&ÖBÂ4”täTEõ$TEõ$uD3ôf÷&ÖBÂ5$t$6öÆ÷%76RÂ5$t%G&ç6fW"Â66VæRÂ6†FW$6‡Væ²Â6†FW$Æ–"Â6†FW$ÖFW&–ÂÂ6†F÷tÖFW&–ÂÂ6†RÂ6†TvVöÖWG'’Â6†UF‚Â6†UWF–Ç2Â6†÷'EG—RÂ6¶VÆWFöâÂ6¶VÆWFöä†VÇW"Â6¶–ææVDÖW6‚Â6÷W&6RÂ7†W&RÂ7†W&TvVöÖWG'’Â7†W&–6ÂÂ7†W&–6Ä†&Ööæ–732Â7Æ–æT7W'fRÂ7÷DÆ–v‡BÂ7÷DÆ–v‡D†VÇW"Â7&—FRÂ7&—FTÖFW&–ÂÂ7&4Ç†f7F÷"Â7&4Ç†6GW&FTf7F÷"Â7&46öÆ÷$f7F÷"Â7FF–46÷•W6vRÂ7FF–4G&uW6vRÂ7FF–5&VEW6vRÂ7FW&Vô6ÖW&Â7G&VÔ6÷•W6vRÂ7G&VÔG&uW6vRÂ7G&VÕ&VEW6vRÂ7G&–æt¶W–g&ÖUG&6²Â7V'G&7DWVF–öâÂ7V'G&7F—fT&ÆVæF–ærÂDõT4‚ÂFævVçE76Tæ÷&ÖÄÖÂFWG&†VG&öävVöÖWG'’ÂFW‡GW&RÂFW‡GW&TÆöFW"ÂF÷'W4vVöÖWG'’ÂF÷'W4¶æ÷DvVöÖWG'’ÂG&–ævÆRÂG&–ævÆTfäG&tÖöFRÂG&–ævÆU7G&—G&tÖöFRÂG&–ævÆW4G&tÖöFRÂGV&TvVöÖWG'’ÂUdÖ–ærÂV–çCd'VffW$GG&–'WFRÂV–çC3$'VffW$GG&–'WFRÂV–çC„'VffW$GG&–'WFRÂV–çC„6Æ×VD'VffW$GG&–'WFRÂVæ–f÷&ÒÂVæ–f÷&×4w&÷WÂVæ–f÷&×4Æ–"ÂVæ–f÷&×5WF–Ç2ÂVç6–væVD'—FUG—RÂVç6–væVD–çC#C…G—RÂVç6–væVD–çCS““•G—RÂVç6–væVD–çEG—RÂVç6–væVE6†÷'CCCCEG—RÂVç6–væVE6†÷'CSSSG—RÂVç6–væVE6†÷'EG—RÂe4Õ6†F÷tÖÂfV7F÷#"ÂfV7F÷#2ÂfV7F÷#BÂfV7F÷$¶W–g&ÖUG&6²Âf–FVõFW‡GW&RÂvV$tÃ4E&VæFW%F&vWBÂvV$tÄ'&•&VæFW%F&vWBÂvV$tÄ6ö÷&F–æFU7—7FVÒÂvV$tÄ7V&U&VæFW%F&vWBÂvV$tÄ×VÇF—ÆU&VæFW%F&vWG2ÂvV$tÅ&VæFW%F&vWBÂvV$tÅ&VæFW&W"ÂvV$tÅWF–Ç2ÂvV$uT6ö÷&F–æFU7—7FVÒÂv—&Vg&ÖTvVöÖWG'’Âw&&÷VæDVæF–ærÂ¦W&ô7W'fGW&TVæF–ærÂ¦W&ôf7F÷"Â¦W&õ6Æ÷TVæF–ærÂ¦W&õ7FVæ6–Ä÷Â7&VFT6çf4VÆVÖVçBÓ° 