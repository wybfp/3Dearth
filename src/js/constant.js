global.camera, global.scene, global.renderer, global.earth, global.cloud, global.earthGroup, global.locationGroup;
global.container = document.getElementById("container");

global.LOCATIONS = [{
    name: 'namibia',
    coord: [39.9, 116.4], // 19° 12' S, 13° 67' E
    position: [4.6, -1.29, -2.42],
    cameraFarPosition: [-20.03, 13.47, -14.61],
    cameraNearPosition: [-3.54, 2.38, -2.58],
    imageName: 'location',
    coordSpriteIndex: 4,
    videoSprite: [10.80, 19.10],
    soundSprite: [0, 10.057142857142857]
  }, 
//   {
//     name: 'mariana',
//     coord: [18.25, 142.81666667], // 17° 75' N, 142° 49' E
//     position: [-4.390, 2.660, -2.410],
//     cameraFarPosition: [26.46, -6.94, -9.96],
//     cameraNearPosition: [4.52, -1.30, -1.63],
//     imageName: 'i_mariana',
//     coordSpriteIndex: 3,
//     videoSprite: [2.80, 8.40],
//     soundSprite: [24, 34.10938775510204]
//   }, {
//     name: 'greenland',
//     coord: [72.16666667, -43], // 71° 70' N, 42° 60' W
//     position: [1.880, 5.09, 0.89],
//     cameraFarPosition: [7.24, 26.52, 7.06],
//     cameraNearPosition: [1.30, 4.66, 1.24],
//     imageName: 'i_greenland',
//     coordSpriteIndex: 2,
//     videoSprite: [40.20, 47.80],
//     soundSprite: [48, 58.10938775510204]
//   }, {
//     name: 'galapagos',
//     coord: [1.33333333, -91.15], // 01° 20' N, 90° 69' W
//     position: [0.550, 0.024, 5.39],
//     cameraFarPosition: [-0.60, 0.14, 28.21],
//     cameraNearPosition: [-0.10, 0.024, 4.99],
//     imageName: 'i_galapagos',
//     coordSpriteIndex: 1,
//     videoSprite: [22.00, 37.43],
//     soundSprite: [12, 22.057142857142857]
//   }, {
//     name: 'antarctica',
//     coord: [-77.96666667, -155.63333333], // 77° 58' S, 155° 38' W
//     position: [-1.32, -5.05, 0.98],
//     cameraFarPosition: [-7.88, -27.00, 1.87],
//     cameraNearPosition: [-1.39, -4.75, 0.33],
//     imageName: 'i_antarctica',
//     coordSpriteIndex: 0,
//     videoSprite: [50.90, 69.00],
//     soundSprite: [36, 46.05714285714286]
//   }
]