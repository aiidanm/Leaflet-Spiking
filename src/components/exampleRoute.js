exports.geodata = {
    "routes": [
      {
        "geometry": {
          "coordinates": [
            [-2.242964, 53.478982],
            [-2.240979, 53.47799],
            [-2.241899, 53.477309],
            [-2.242963, 53.476593],
            [-2.243406, 53.477102],
            [-2.24388, 53.477403]
          ],
          "type": "LineString"
        },
        "legs": [
          {
            "steps": [
              {
                "geometry": {
                  "coordinates": [
                    [-2.242964, 53.478982],
                    [-2.242903, 53.478951],
                    [-2.242753, 53.478876],
                    [-2.242692, 53.478846],
                    [-2.242667, 53.478834],
                    [-2.242502, 53.478755],
                    [-2.242377, 53.478696],
                    [-2.242334, 53.478677],
                    [-2.242302, 53.478661],
                    [-2.242278, 53.478647],
                    [-2.242226, 53.47862],
                    [-2.242168, 53.478591],
                    [-2.241816, 53.478409],
                    [-2.241398, 53.478202],
                    [-2.240979, 53.47799]
                  ],
                  "type": "LineString"
                },
                "maneuver": {
                  "bearing_after": 130,
                  "bearing_before": 0,
                  "location": [-2.242964, 53.478982],
                  "type": "depart",
                  "instruction": "Head southeast on Princess Street (A34)"
                },
                "mode": "cycling",
                "ref": "A34",
                "driving_side": "right",
                "name": "Princess Street (A34)",
                "intersections": [
                  {
                    "out": 0,
                    "entry": [true],
                    "bearings": [130],
                    "location": [-2.242964, 53.478982]
                  },
                  {
                    "out": 0,
                    "in": 2,
                    "entry": [true, true, false],
                    "bearings": [135, 225, 315],
                    "location": [-2.241816, 53.478409]
                  },
                  {
                    "out": 1,
                    "in": 3,
                    "entry": [true, true, true, false],
                    "bearings": [45, 135, 225, 315],
                    "location": [-2.241398, 53.478202]
                  }
                ],
                "weight": 65.7,
                "duration": 45.3,
                "distance": 171.6
              },
              {
                "geometry": {
                  "coordinates": [
                    [-2.240979, 53.47799],
                    [-2.241486, 53.477617],
                    [-2.241899, 53.477309],
                    [-2.242963, 53.476593]
                  ],
                  "type": "LineString"
                },
                "maneuver": {
                  "bearing_after": 217,
                  "bearing_before": 129,
                  "location": [-2.240979, 53.47799],
                  "modifier": "right",
                  "type": "turn",
                  "instruction": "Turn right onto St James Street"
                },
                "mode": "cycling",
                "driving_side": "right",
                "name": "St James Street",
                "intersections": [
                  {
                    "out": 2,
                    "in": 3,
                    "entry": [true, true, true, false],
                    "bearings": [45, 135, 225, 315],
                    "location": [-2.240979, 53.47799]
                  },
                  {
                    "out": 1,
                    "in": 0,
                    "entry": [false, true, true],
                    "bearings": [45, 225, 315],
                    "location": [-2.241486, 53.477617]
                  },
                  {
                    "out": 2,
                    "in": 0,
                    "entry": [false, true, true, true],
                    "bearings": [45, 150, 225, 315],
                    "location": [-2.241899, 53.477309]
                  }
                ],
                "weight": 54.900000000000006,
                "duration": 54.900000000000006,
                "distance": 203.5
              },
              {
                "geometry": {
                  "coordinates": [
                    [-2.242963, 53.476593],
                    [-2.243078, 53.476708],
                    [-2.24322, 53.476888],
                    [-2.243243, 53.476923],
                    [-2.243276, 53.476969],
                    [-2.24335, 53.47705],
                    [-2.243406, 53.477102],
                    [-2.243483, 53.477165],
                    [-2.243541, 53.477203],
                    [-2.243635, 53.477264],
                    [-2.243735, 53.477323],
                    [-2.24378, 53.47735],
                    [-2.243796, 53.477359],
                    [-2.243813, 53.477368],
                    [-2.24388, 53.477403]
                  ],
                  "type": "LineString"
                },
                "maneuver": {
                  "bearing_after": 329,
                  "bearing_before": 220,
                  "location": [-2.242963, 53.476593],
                  "modifier": "right",
                  "type": "end of road",
                  "instruction": "Turn right onto Oxford Street (A34)"
                },
                "mode": "cycling",
                "ref": "A34",
                "driving_side": "right",
                "name": "Oxford Street (A34)",
                "intersections": [
                  {
                    "out": 2,
                    "in": 0,
                    "entry": [false, true, true],
                    "bearings": [45, 150, 330],
                    "location": [-2.242963, 53.476593]
                  },
                  {
                    "out": 2,
                    "in": 0,
                    "entry": [false, true, true],
                    "bearings": [150, 240, 345],
                    "location": [-2.24322, 53.476888]
                  },
                  {
                    "out": 2,
                    "in": 1,
                    "entry": [true, false, true],
                    "bearings": [45, 165, 330],
                    "location": [-2.243243, 53.476923]
                  }
                ],
                "weight": 56.4,
                "duration": 45.4,
                "distance": 109.9
              },
              {
                "geometry": {
                  "coordinates": [[-2.24388, 53.477403], [-2.24388, 53.477403]],
                  "type": "LineString"
                },
                "maneuver": {
                  "bearing_after": 0,
                  "bearing_before": 311,
                  "location": [-2.24388, 53.477403],
                  "type": "arrive",
                  "instruction": "You have arrived at your destination"
                },
                "mode": "cycling",
                "ref": "A34",
                "driving_side": "right",
                "name": "Oxford Street (A34)",
                "intersections": [
                  {
                    "in": 0,
                    "entry": [true],
                    "bearings": [131],
                    "location": [-2.24388, 53.477403]
                  }
                ],
                "weight": 0,
                "duration": 0,
                "distance": 0
              }
            ],
            "summary": "St James Street, Oxford Street",
            "weight": 177,
            "duration": 145.6,
            "distance": 485
          }
        ],
        "weight_name": "cyclability",
        "weight": 177,
        "duration": 145.6,
        "distance": 485
      },
      {
        "geometry": {
          "coordinates": [
            [-2.242964, 53.478982],
            [-2.242226, 53.47862],
            [-2.243135, 53.477998],
            [-2.243522, 53.477695],
            [-2.243742, 53.477415],
            [-2.243813, 53.477368],
            [-2.24388, 53.477403]
          ],
          "type": "LineString"
        },
        "legs": [
          {
            "steps": [
              {
                "geometry": {
                  "coordinates": [
                    [-2.242964, 53.478982],
                    [-2.242903, 53.478951],
                    [-2.242753, 53.478876],
                    [-2.242692, 53.478846],
                    [-2.242667, 53.478834],
                    [-2.242502, 53.478755],
                    [-2.242377, 53.478696],
                    [-2.242334, 53.478677],
                    [-2.242302, 53.478661],
                    [-2.242278, 53.478647],
                    [-2.242226, 53.47862]
                  ],
                  "type": "LineString"
                },
                "maneuver": {
                  "bearing_after": 130,
                  "bearing_before": 0,
                  "location": [-2.242964, 53.478982],
                  "type": "depart",
                  "instruction": "Head southeast on Princess Street (A34)"
                },
                "mode": "cycling",
                "ref": "A34",
                "driving_side": "right",
                "name": "Princess Street (A34)",
                "intersections": [
                  {
                    "out": 0,
                    "entry": [true],
                    "bearings": [130],
                    "location": [-2.242964, 53.478982]
                  }
                ],
                "weight": 61.4,
                "duration": 19.6,
                "distance": 63.3
              },
              {
                "geometry": {
                  "coordinates": [
                    [-2.242226, 53.47862],
                    [-2.242251, 53.478605],
                    [-2.242523, 53.478433],
                    [-2.243135, 53.477998],
                    [-2.243189, 53.477957],
                    [-2.243522, 53.477695],
                    [-2.243742, 53.477415],
                    [-2.243771, 53.477396],
                    [-2.243813, 53.477368]
                  ],
                  "type": "LineString"
                },
                "maneuver": {
                  "bearing_after": 222,
                  "bearing_before": 132,
                  "location": [-2.242226, 53.47862],
                  "modifier": "right",
                  "type": "turn",
                  "instruction": "Turn right"
                },
                "mode": "pushing bike",
                "driving_side": "right",
                "name": "",
                "intersections": [
                  {
                    "out": 1,
                    "in": 2,
                    "entry": [true, true, false],
                    "bearings": [135, 225, 315],
                    "location": [-2.242226, 53.47862]
                  },
                  {
                    "out": 2,
                    "in": 0,
                    "entry": [false, true, true],
                    "bearings": [45, 135, 210],
                    "location": [-2.243189, 53.477957]
                  },
                  {
                    "out": 2,
                    "in": 0,
                    "entry": [false, true, true, true],
                    "bearings": [30, 105, 225, 270],
                    "location": [-2.243742, 53.477415]
                  },
                  {
                    "out": 2,
                    "in": 0,
                    "entry": [false, true, true, true],
                    "bearings": [45, 135, 225, 315],
                    "location": [-2.243771, 53.477396]
                  }
                ],
                "weight": 162.2,
                "duration": 162.2,
                "distance": 175.5
              },
              {
                "geometry": {
                  "coordinates": [[-2.243813, 53.477368], [-2.24388, 53.477403]],
                  "type": "LineString"
                },
                "maneuver": {
                  "bearing_after": 310,
                  "bearing_before": 220,
                  "location": [-2.243813, 53.477368],
                  "modifier": "right",
                  "type": "end of road",
                  "instruction": "Turn right onto Oxford Street (A34)"
                },
                "mode": "cycling",
                "ref": "A34",
                "driving_side": "right",
                "name": "Oxford Street (A34)",
                "intersections": [
                  {
                    "out": 2,
                    "in": 0,
                    "entry": [false, true, true],
                    "bearings": [45, 135, 315],
                    "location": [-2.243813, 53.477368]
                  }
                ],
                "weight": 2.8,
                "duration": 1.4,
                "distance": 5.9
              },
              {
                "geometry": {
                  "coordinates": [[-2.24388, 53.477403], [-2.24388, 53.477403]],
                  "type": "LineString"
                },
                "maneuver": {
                  "bearing_after": 0,
                  "bearing_before": 311,
                  "location": [-2.24388, 53.477403],
                  "type": "arrive",
                  "instruction": "You have arrived at your destination"
                },
                "mode": "cycling",
                "ref": "A34",
                "driving_side": "right",
                "name": "Oxford Street (A34)",
                "intersections": [
                  {
                    "in": 0,
                    "entry": [true],
                    "bearings": [131],
                    "location": [-2.24388, 53.477403]
                  }
                ],
                "weight": 0,
                "duration": 0,
                "distance": 0
              }
            ],
            "summary": "Princess Street, St Peter's Square",
            "weight": 226.4,
            "duration": 183.2,
            "distance": 244.7
          }
        ],
        "weight_name": "cyclability",
        "weight": 226.4,
        "duration": 183.2,
        "distance": 244.7
      }
    ],
    "waypoints": [
      {
        "distance": 1.4935564473973029,
        "name": "Princess Street",
        "location": [-2.242964, 53.478982]
      },
      {
        "distance": 1.665236060346921,
        "name": "Oxford Street",
        "location": [-2.24388, 53.477403]
      }
    ],
    "code": "Ok",
    "uuid": "FduofHdgSy7dMixhqhKyS8Dz7f8dvc2dKzs8Dn03UpAFb43G3GYFwg=="
  }