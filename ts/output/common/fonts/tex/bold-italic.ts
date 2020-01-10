/*************************************************************
 *
 *  Copyright (c) 2018 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import {CharMap, CharOptions} from '../../FontData.js';

export const boldItalic: CharMap<CharOptions> = {
    0x20: [0, 0, .25],
    0x2F: [.711, .21, .894],
    0x41: [.711, 0, .869, {sk: .16}],
    0x42: [.686, 0, .866, {sk: .0958}],
    0x43: [.703, .017, .817, {ic: .038, sk: .0958}],
    0x44: [.686, 0, .938, {sk: .0639}],
    0x45: [.68, 0, .81, {ic: .015, sk: .0958}],
    0x46: [.68, 0, .689, {ic: .12, sk: .0958}],
    0x47: [.703, .016, .887, {sk: .0958}],
    0x48: [.686, 0, .982, {ic: .045, sk: .0639}],
    0x49: [.686, 0, .511, {ic: .062, sk: .128}],
    0x4A: [.686, .017, .631, {ic: .063, sk: .192}],
    0x4B: [.686, 0, .971, {ic: .032, sk: .0639}],
    0x4C: [.686, 0, .756, {sk: .0319}],
    0x4D: [.686, 0, 1.142, {ic: .077, sk: .0958}],
    0x4E: [.686, 0, .95, {ic: .077, sk: .0958}],
    0x4F: [.703, .017, .837, {sk: .0958}],
    0x50: [.686, 0, .723, {ic: .124, sk: .0958}],
    0x51: [.703, .194, .869, {sk: .0958}],
    0x52: [.686, .017, .872, {sk: .0958}],
    0x53: [.703, .017, .693, {ic: .021, sk: .0958}],
    0x54: [.675, 0, .637, {ic: .135, sk: .0958}],
    0x55: [.686, .016, .8, {ic: .077, sk: .0319}],
    0x56: [.686, .016, .678, {ic: .208}],
    0x57: [.686, .017, 1.093, {ic: .114}],
    0x58: [.686, 0, .947, {sk: .0958}],
    0x59: [.686, 0, .675, {ic: .201}],
    0x5A: [.686, 0, .773, {ic: .032, sk: .0958}],
    0x61: [.452, .008, .633],
    0x62: [.694, .008, .521],
    0x63: [.451, .008, .513, {sk: .0639}],
    0x64: [.694, .008, .61, {sk: .192}],
    0x65: [.452, .008, .554, {sk: .0639}],
    0x66: [.701, .201, .568, {ic: .056, sk: .192}],
    0x67: [.452, .202, .545, {sk: .0319}],
    0x68: [.694, .008, .668, {sk: -0.0319}],
    0x69: [.694, .008, .405],
    0x6A: [.694, .202, .471],
    0x6B: [.694, .008, .604],
    0x6C: [.694, .008, .348, {sk: .0958}],
    0x6D: [.452, .008, 1.032],
    0x6E: [.452, .008, .713],
    0x6F: [.452, .008, .585, {sk: .0639}],
    0x70: [.452, .194, .601, {sk: .0958}],
    0x71: [.452, .194, .542, {sk: .0958}],
    0x72: [.452, .008, .529, {sk: .0639}],
    0x73: [.451, .008, .531, {sk: .0639}],
    0x74: [.643, .007, .415, {sk: .0958}],
    0x75: [.452, .008, .681, {sk: .0319}],
    0x76: [.453, .008, .567, {sk: .0319}],
    0x77: [.453, .008, .831, {sk: .0958}],
    0x78: [.452, .008, .659, {sk: .0319}],
    0x79: [.452, .202, .59, {sk: .0639}],
    0x7A: [.452, .008, .555, {sk: .0639}],
    0xA0: [0, 0, .25],
    0x391: [.711, 0, .869, {sk: .16}],
    0x392: [.686, 0, .866, {sk: .0958}],
    0x393: [.68, 0, .657, {ic: .12, sk: .0958}],
    0x394: [.711, 0, .958, {sk: .192}],
    0x395: [.68, 0, .81, {ic: .015, sk: .0958}],
    0x396: [.686, 0, .773, {ic: .032, sk: .0958}],
    0x397: [.686, 0, .982, {ic: .045, sk: .0639}],
    0x398: [.702, .017, .867, {sk: .0958}],
    0x399: [.686, 0, .511, {ic: .062, sk: .128}],
    0x39A: [.686, 0, .971, {ic: .032, sk: .0639}],
    0x39B: [.711, 0, .806, {sk: .192}],
    0x39C: [.686, 0, 1.142, {ic: .077, sk: .0958}],
    0x39D: [.686, 0, .95, {ic: .077, sk: .0958}],
    0x39E: [.675, 0, .841, {ic: .026, sk: .0958}],
    0x39F: [.703, .017, .837, {sk: .0958}],
    0x3A0: [.68, 0, .982, {ic: .044, sk: .0639}],
    0x3A1: [.686, 0, .723, {ic: .124, sk: .0958}],
    0x3A2: [.702, .017, .867, {sk: .0958}],
    0x3A3: [.686, 0, .885, {ic: .017, sk: .0958}],
    0x3A4: [.675, 0, .637, {ic: .135, sk: .0958}],
    0x3A5: [.703, 0, .671, {ic: .131, sk: .0639}],
    0x3A6: [.686, 0, .767, {sk: .0958}],
    0x3A7: [.686, 0, .947, {sk: .0958}],
    0x3A8: [.686, 0, .714, {ic: .076, sk: .0639}],
    0x3A9: [.703, 0, .879, {sk: .0958}],
    0x3B1: [.452, .008, .761, {sk: .0319}],
    0x3B2: [.701, .194, .66, {sk: .0958}],
    0x3B3: [.451, .211, .59, {ic: .027}],
    0x3B4: [.725, .008, .522, {sk: .0639}],
    0x3B5: [.461, .017, .529, {sk: .0958}],
    0x3B6: [.711, .202, .508, {ic: .013, sk: .0958}],
    0x3B7: [.452, .211, .6, {sk: .0639}],
    0x3B8: [.702, .008, .562, {sk: .0958}],
    0x3B9: [.452, .008, .412, {sk: .0639}],
    0x3BA: [.452, .008, .668],
    0x3BB: [.694, .013, .671],
    0x3BC: [.452, .211, .708, {sk: .0319}],
    0x3BD: [.452, 0, .577, {ic: .031, sk: .0319}],
    0x3BE: [.711, .201, .508, {sk: .128}],
    0x3BF: [.452, .008, .585, {sk: .0639}],
    0x3C0: [.444, .008, .682],
    0x3C1: [.451, .211, .612, {sk: .0958}],
    0x3C2: [.451, .105, .424, {ic: .033, sk: .0958}],
    0x3C3: [.444, .008, .686],
    0x3C4: [.444, .013, .521, {ic: .089, sk: .0319}],
    0x3C5: [.453, .008, .631, {sk: .0319}],
    0x3C6: [.452, .216, .747, {sk: .0958}],
    0x3C7: [.452, .201, .718, {sk: .0639}],
    0x3C8: [.694, .202, .758, {sk: .128}],
    0x3C9: [.453, .008, .718],
    0x3D1: [.701, .008, .692, {sk: .0958}],
    0x3D2: [.703, 0, .671, {ic: .131, sk: .0639}],
    0x3D5: [.694, .202, .712, {sk: .0958}],
    0x3D6: [.444, .008, .975],
    0x3DC: [.68, 0, .689, {ic: .12, sk: .0958}],
    0x3F1: [.451, .194, .612, {sk: .0958}],
    0x3F5: [.444, .007, .483, {sk: .0639}],
    0x2044: [.711, .21, .894],
    0x2206: [.711, 0, .958, {sk: .192}],
    0x29F8: [.711, .21, .894],
};
