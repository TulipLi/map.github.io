// 地图上需要标点的数据
const points = [
    {
        "id": 0,
        "position": {
            "lng": "121.101788",
            "lat": "31.461566"
        },
        "title": "大发熙悦澜庭",
        "remark": "/",
        "distribution": "好屋/五优",
        "infos": [
            {
                "key": "板块",
                "value": "市区"
            },
            {
                "key": "总体量",
                "value": 400
            },
            {
                "key": "总货值（亿）",
                "value": 8
            },
            {
                "key": "在售套数",
                "value": 60
            },
            {
                "key": "在售货值（亿）",
                "value": 1.2
            }
        ]
    },
    {
        "id": 1,
        "position": {
            "lng": "121.067471",
            "lat": "31.477937"
        },
        "title": "新沪紫郡苑",
        "remark": "/",
        "distribution": "无",
        "infos": [
            {
                "key": "板块",
                "value": "双凤"
            },
            {
                "key": "总体量",
                "value": 1343
            },
            {
                "key": "总货值（亿）",
                "value": 16.7875
            },
            {
                "key": "在售套数",
                "value": 80
            },
            {
                "key": "在售货值（亿）",
                "value": 1
            }
        ]
    },
    {
        "id": 2,
        "position": {
            "lng": "121.119236",
            "lat": "31.420185"
        },
        "title": "融侨悦江南",
        "remark": "尾盘，无营销费用。现已停止合作",
        "distribution": "无",
        "infos": [
            {
                "key": "板块",
                "value": "科教新城"
            },
            {
                "key": "总体量",
                "value": 838
            },
            {
                "key": "总货值（亿）",
                "value": 14
            },
            {
                "key": "在售套数",
                "value": 7
            },
            {
                "key": "在售货值（亿）",
                "value": 0.145
            },
            {
                "key": "月均去化",
                "value": 30
            }
        ]
    },
    {
        "id": 3,
        "position": {
            "lng": "121.087998",
            "lat": "31.563439"
        },
        "title": "橄榄岛花苑",
        "remark": "4%，结佣流程慢",
        "distribution": "小猛牛/讯楷",
        "infos": [
            {
                "key": "板块",
                "value": "沙溪"
            },
            {
                "key": "总体量",
                "value": 392
            },
            {
                "key": "总货值（亿）",
                "value": 0.6272
            },
            {
                "key": "在售套数",
                "value": 10
            },
            {
                "key": "在售货值（亿）",
                "value": 0.16
            }
        ]
    },
    {
        "id": 4,
        "position": {
            "lng": "121.212416",
            "lat": "31.621764"
        },
        "title": "万和四季",
        "remark": "暂无，空档期",
        "distribution": "无",
        "infos": [
            {
                "key": "板块",
                "value": "港区"
            },
            {
                "key": "总体量",
                "value": 778
            },
            {
                "key": "总货值（亿）",
                "value": 0.0011
            },
            {
                "key": "在售套数",
                "value": 135
            },
            {
                "key": "在售货值（亿）",
                "value": 1.1
            },
            {
                "key": "月均去化",
                "value": 15
            }
        ]
    },
    {
        "id": 5,
        "position": {
            "lng": "121.099123",
            "lat": "31.513395"
        },
        "title": "湖畔祥云花苑",
        "remark": 0.04,
        "distribution": "置尚",
        "infos": [
            {
                "key": "板块",
                "value": "城厢镇"
            },
            {
                "key": "总体量",
                "value": 433
            },
            {
                "key": "总货值（亿）",
                "value": 0.0005
            },
            {
                "key": "在售套数",
                "value": 340
            },
            {
                "key": "在售货值（亿）",
                "value": 2.3
            }
        ]
    },
    {
        "id": 6,
        "position": {
            "lng": "121.150291",
            "lat": "31.436567"
        },
        "title": "翡丽云邸",
        "remark": 0.025,
        "distribution": "置尚",
        "infos": [
            {
                "key": "板块",
                "value": "科教新城"
            },
            {
                "key": "总体量",
                "value": 670
            },
            {
                "key": "总货值（亿）",
                "value": 16.75
            },
            {
                "key": "在售套数",
                "value": 20
            },
            {
                "key": "在售货值（亿）",
                "value": 0.56
            }
        ]
    },
    {
        "id": 7,
        "position": {
            "lng": "121.097856",
            "lat": "31.460066"
        },
        "title": "碧桂园天璞",
        "remark": "万店同盟",
        "distribution": "无",
        "infos": [
            {
                "key": "板块",
                "value": "城厢镇"
            },
            {
                "key": "总体量",
                "value": 1291
            },
            {
                "key": "总货值（亿）",
                "value": 22
            },
            {
                "key": "在售套数",
                "value": 80
            },
            {
                "key": "在售货值（亿）",
                "value": 1.4
            }
        ]
    },
    {
        "id": 8,
        "position": {
            "lng": "121.297501",
            "lat": "31.526139"
        },
        "title": "恒大文化旅游城",
        "remark": "诉讼中，2%",
        "distribution": "房多多，常亨，比特",
        "infos": [
            {
                "key": "板块",
                "value": "浏河"
            },
            {
                "key": "总体量",
                "value": 30000
            },
            {
                "key": "总货值（亿）",
                "value": 400
            },
            {
                "key": "在售套数",
                "value": 200
            },
            {
                "key": "在售货值（亿）",
                "value": 3
            },
            {
                "key": "月均去化",
                "value": 366
            }
        ]
    },
    {
        "id": 9,
        "position": {
            "lng": "121.111788",
            "lat": "31.647217"
        },
        "title": "金辉海上风华",
        "remark": "淘房独代，5%",
        "distribution": "淘房",
        "infos": [
            {
                "key": "板块",
                "value": "璜泾"
            },
            {
                "key": "总体量",
                "value": 344
            },
            {
                "key": "总货值（亿）",
                "value": 3
            },
            {
                "key": "在售套数",
                "value": 50
            },
            {
                "key": "在售货值（亿）",
                "value": 0.6
            },
            {
                "key": "月均去化",
                "value": 27
            }
        ]
    },
    {
        "id": 10,
        "position": {
            "lng": "121.109144",
            "lat": "31.651151"
        },
        "title": "海伦堡溪璟园",
        "remark": "开发商不合作，4%",
        "distribution": "境鸿",
        "infos": [
            {
                "key": "板块",
                "value": "璜泾"
            },
            {
                "key": "总体量",
                "value": 664
            },
            {
                "key": "总货值（亿）",
                "value": 8
            },
            {
                "key": "在售套数",
                "value": 120
            },
            {
                "key": "在售货值（亿）",
                "value": 1.4
            },
            {
                "key": "月均去化",
                "value": 16.6
            }
        ]
    },
    {
        "id": 11,
        "position": {
            "lng": "121.203897",
            "lat": "31.61846"
        },
        "title": "金辉悠步江来",
        "remark": "淘房独代，5%",
        "distribution": "淘房",
        "infos": [
            {
                "key": "板块",
                "value": "港区"
            },
            {
                "key": "总体量",
                "value": 1538
            },
            {
                "key": "总货值（亿）",
                "value": 20
            },
            {
                "key": "在售套数",
                "value": 180
            },
            {
                "key": "在售货值（亿）",
                "value": 2
            },
            {
                "key": "月均去化",
                "value": 36.6
            }
        ]
    },
    {
        "id": 12,
        "position": {
            "lng": "121.056445",
            "lat": "31.398345"
        },
        "title": "上湾璟园",
        "remark": "甲方不需要分销",
        "distribution": "无",
        "infos": [
            {
                "key": "板块",
                "value": "玉山镇"
            },
            {
                "key": "总体量",
                "value": 1542
            },
            {
                "key": "总货值（亿）",
                "value": 42.405
            },
            {
                "key": "在售套数",
                "value": 65
            },
            {
                "key": "在售货值（亿）",
                "value": 0.8125
            },
            {
                "key": "月均去化",
                "value": 45.2
            }
        ]
    },
    {
        "id": 13,
        "position": {
            "lng": "121.003868",
            "lat": "31.408331"
        },
        "title": "睿怡庭",
        "remark": "开发商停分销",
        "distribution": "无",
        "infos": [
            {
                "key": "板块",
                "value": "周市"
            },
            {
                "key": "总体量",
                "value": 524
            },
            {
                "key": "总货值（亿）",
                "value": 7.598
            },
            {
                "key": "在售套数",
                "value": 10
            },
            {
                "key": "在售货值（亿）",
                "value": 0.145
            }
        ]
    },
    {
        "id": 14,
        "position": {
            "lng": "120.982838",
            "lat": "31.446847"
        },
        "title": "碧桂园星澜",
        "remark": "万店联盟目前房源10套左右，待加推",
        "distribution": "万店联盟",
        "infos": [
            {
                "key": "板块",
                "value": "周市"
            },
            {
                "key": "总体量",
                "value": 1786
            },
            {
                "key": "总货值（亿）",
                "value": 30.6299
            },
            {
                "key": "在售套数",
                "value": 60
            },
            {
                "key": "在售货值（亿）",
                "value": 1.029
            },
            {
                "key": "月均去化",
                "value": 179.2
            }
        ]
    },
    {
        "id": 15,
        "position": {
            "lng": "120.894",
            "lat": "31.46603"
        },
        "title": "兰亭大境花园",
        "remark": 0.01,
        "distribution": "微好房、贝壳",
        "infos": [
            {
                "key": "板块",
                "value": "玉山"
            },
            {
                "key": "总体量",
                "value": 1730
            },
            {
                "key": "总货值（亿）",
                "value": 28.8218
            },
            {
                "key": "在售套数",
                "value": 890
            },
            {
                "key": "在售货值（亿）",
                "value": 14
            },
            {
                "key": "月均去化",
                "value": 75.6
            }
        ]
    },
    {
        "id": 16,
        "position": {
            "lng": "120.967329",
            "lat": "31.336089"
        },
        "title": "江湾澜庭",
        "remark": 0.023,
        "distribution": "无",
        "infos": [
            {
                "key": "板块",
                "value": "玉山"
            },
            {
                "key": "总体量",
                "value": 1645
            },
            {
                "key": "总货值（亿）",
                "value": 32.9
            },
            {
                "key": "在售套数",
                "value": 700
            },
            {
                "key": "在售货值（亿）",
                "value": 14
            },
            {
                "key": "月均去化",
                "value": 77.2
            }
        ]
    },
    {
        "id": 17,
        "position": {
            "lng": "120.983576",
            "lat": "31.444841"
        },
        "title": "翡丽兰亭花园",
        "remark": "/",
        "distribution": "无",
        "infos": [
            {
                "key": "板块",
                "value": "周市"
            },
            {
                "key": "总体量",
                "value": 1276
            },
            {
                "key": "总货值（亿）",
                "value": 25.14039
            },
            {
                "key": "在售套数",
                "value": 280
            },
            {
                "key": "在售货值（亿）",
                "value": 5
            },
            {
                "key": "月均去化",
                "value": 72.8
            }
        ]
    },
    {
        "id": 18,
        "position": {
            "lng": "120.985106",
            "lat": "31.38083"
        },
        "title": "君悦豪庭",
        "remark": "总代项目，需要保证金",
        "distribution": "众悦传媒",
        "infos": [
            {
                "key": "板块",
                "value": "玉山镇"
            },
            {
                "key": "总体量",
                "value": 466
            },
            {
                "key": "总货值（亿）",
                "value": 6.99
            },
            {
                "key": "在售套数",
                "value": 50
            },
            {
                "key": "在售货值（亿）",
                "value": 0.75
            },
            {
                "key": "月均去化",
                "value": 1.6
            }
        ]
    },
    {
        "id": 19,
        "position": {
            "lng": "120.889501",
            "lat": "31.438346"
        },
        "title": "神州通城西印象",
        "remark": "开发商不需要分销",
        "distribution": "无",
        "infos": [
            {
                "key": "板块",
                "value": "巴城"
            },
            {
                "key": "总体量",
                "value": 2528
            },
            {
                "key": "总货值（亿）",
                "value": 43.5942
            },
            {
                "key": "在售套数",
                "value": 23
            },
            {
                "key": "在售货值（亿）",
                "value": 0.4036
            },
            {
                "key": "月均去化",
                "value": 29
            }
        ]
    },
    {
        "id": 20,
        "position": {
            "lng": "121.021701",
            "lat": "31.170166"
        },
        "title": "淀山湖院子",
        "remark": "开发商内部资金链断裂",
        "distribution": "无",
        "infos": [
            {
                "key": "板块",
                "value": "淀山湖"
            },
            {
                "key": "总体量",
                "value": 3900
            },
            {
                "key": "总货值（亿）",
                "value": 98.28
            },
            {
                "key": "在售套数",
                "value": 0
            },
            {
                "key": "在售货值（亿）",
                "value": 0
            }
        ]
    },
    {
        "id": 21,
        "position": {
            "lng": "121.00224",
            "lat": "31.162815"
        },
        "title": "鹿鸣九里",
        "remark": "目前无房可售",
        "distribution": "无",
        "infos": [
            {
                "key": "板块",
                "value": "淀山湖"
            },
            {
                "key": "总体量",
                "value": 1080
            },
            {
                "key": "总货值（亿）",
                "value": 18.468
            },
            {
                "key": "在售套数",
                "value": 0
            },
            {
                "key": "在售货值（亿）",
                "value": 0
            }
        ]
    },
    {
        "id": 22,
        "position": {
            "lng": "120.840828",
            "lat": "31.139861"
        },
        "title": "中锐星悦江南",
        "infos": [
            {
                "key": "板块",
                "value": "周庄"
            },
            {
                "key": "总体量",
                "value": 430
            },
            {
                "key": "总货值（亿）",
                "value": 7.6
            },
            {
                "key": "在售套数",
                "value": 0
            },
            {
                "key": "在售货值（亿）",
                "value": 0
            }
        ]
    },
    {
        "id": 23,
        "position": {
            "lng": "120.867262",
            "lat": "31.130616"
        },
        "title": "水月周庄",
        "remark": 0.026,
        "distribution": "贝壳",
        "infos": [
            {
                "key": "板块",
                "value": "周庄"
            },
            {
                "key": "总体量",
                "value": 147
            },
            {
                "key": "总货值（亿）",
                "value": 1.71
            },
            {
                "key": "在售套数",
                "value": 0
            },
            {
                "key": "在售货值（亿）",
                "value": 0
            }
        ]
    },
    {
        "id": 24,
        "position": {
            "lng": "121.001666",
            "lat": "31.187992"
        },
        "title": "大自然花园",
        "remark": "总代项目，需要保证金，总代不支付，5%",
        "distribution": "无",
        "infos": [
            {
                "key": "板块",
                "value": "淀山湖"
            },
            {
                "key": "总体量",
                "value": 60
            },
            {
                "key": "总货值（亿）",
                "value": 6
            },
            {
                "key": "在售套数",
                "value": 10
            },
            {
                "key": "在售货值（亿）",
                "value": 0.4
            },
            {
                "key": "月均去化",
                "value": 1
            }
        ]
    },
    {
        "id": 25,
        "position": {
            "lng": "120.959769",
            "lat": "31.367396"
        },
        "title": "巴比伦国际广场",
        "remark": "总代项目，需要保证金，总代不支付，5万/套",
        "distribution": "无",
        "infos": [
            {
                "key": "板块",
                "value": "玉山镇"
            },
            {
                "key": "总体量",
                "value": 550
            },
            {
                "key": "总货值（亿）",
                "value": 4.95
            },
            {
                "key": "在售套数",
                "value": 120
            },
            {
                "key": "在售货值（亿）",
                "value": 1.08
            },
            {
                "key": "月均去化",
                "value": 5
            }
        ]
    },
    {
        "id": 26,
        "position": {
            "lng": "121.1171",
            "lat": "31.29934"
        },
        "title": "廊桥嘉苑",
        "remark": "入市以来自销，不启动分销",
        "distribution": "无",
        "infos": [
            {
                "key": "板块",
                "value": "花桥"
            },
            {
                "key": "总体量",
                "value": 400
            },
            {
                "key": "总货值（亿）",
                "value": 9.6
            },
            {
                "key": "在售套数",
                "value": 87
            },
            {
                "key": "在售货值（亿）",
                "value": 1.9
            },
            {
                "key": "月均去化",
                "value": 10
            }
        ]
    },
    {
        "id": 27,
        "position": {
            "lng": "121.14628",
            "lat": "31.300873"
        },
        "title": "宏图国际花苑",
        "remark": "合作期到期，预证未拿",
        "distribution": "无",
        "infos": [
            {
                "key": "板块",
                "value": "花桥"
            },
            {
                "key": "总体量",
                "value": 630
            },
            {
                "key": "总货值（亿）",
                "value": 15.75
            },
            {
                "key": "在售套数",
                "value": 4
            },
            {
                "key": "在售货值（亿）",
                "value": 0.1334
            },
            {
                "key": "月均去化",
                "value": 5
            }
        ]
    },
    {
        "id": 28,
        "position": {
            "lng": "121.11081",
            "lat": "31.304466"
        },
        "title": "中骏世界城",
        "remark": "还未开盘，甲方暂时不考虑分销",
        "distribution": "无",
        "infos": [
            {
                "key": "板块",
                "value": "花桥"
            },
            {
                "key": "总体量",
                "value": 1370
            },
            {
                "key": "总货值（亿）",
                "value": 30.14
            },
            {
                "key": "在售套数",
                "value": 0
            },
            {
                "key": "在售货值（亿）",
                "value": 0
            }
        ]
    },
    {
        "id": 29,
        "position": {
            "lng": "121.040992",
            "lat": "31.309498"
        },
        "title": "建滔菁庭",
        "remark": "还未开盘，甲方暂时不考虑分销",
        "distribution": "无",
        "infos": [
            {
                "key": "板块",
                "value": "陆家"
            },
            {
                "key": "总体量",
                "value": 1964
            },
            {
                "key": "总货值（亿）",
                "value": 39.28
            },
            {
                "key": "在售套数",
                "value": 0
            },
            {
                "key": "在售货值（亿）",
                "value": 0
            }
        ]
    },
    {
        "id": 30,
        "position": {
            "lng": "121.079063",
            "lat": "31.279262"
        },
        "title": "建滔浦岸花园",
        "remark": "还未开盘，甲方暂时不考虑分销",
        "distribution": "无",
        "infos": [
            {
                "key": "板块",
                "value": "花桥"
            },
            {
                "key": "总体量",
                "value": 1080
            },
            {
                "key": "总货值（亿）",
                "value": 22.68
            },
            {
                "key": "在售套数",
                "value": 0
            },
            {
                "key": "在售货值（亿）",
                "value": 0
            }
        ]
    },
    {
        "id": 31,
        "position": {
            "lng": "121.068201",
            "lat": "31.29875"
        },
        "title": "嘉宝梦之悦",
        "remark": "外渠总代是房盟，内场华燕是房盟分公司，存在洗客风险",
        "distribution": "华燕",
        "infos": [
            {
                "key": "板块",
                "value": "花桥"
            },
            {
                "key": "总体量",
                "value": 1911
            },
            {
                "key": "总货值（亿）",
                "value": 38.2
            },
            {
                "key": "在售套数",
                "value": 25
            },
            {
                "key": "在售货值（亿）",
                "value": 0
            },
            {
                "key": "月均去化",
                "value": 75.6
            }
        ]
    },
    {
        "id": 32,
        "position": {
            "lng": "121.038471",
            "lat": "31.329114"
        },
        "title": "宋都·如意铭著",
        "remark": "仅剩不到100套房源，甲方有意停止分销，",
        "distribution": "贝壳、房多多",
        "infos": [
            {
                "key": "板块",
                "value": "陆家"
            },
            {
                "key": "总体量",
                "value": 861
            },
            {
                "key": "总货值（亿）",
                "value": 14.6
            },
            {
                "key": "在售套数",
                "value": 80
            },
            {
                "key": "在售货值（亿）",
                "value": 0
            },
            {
                "key": "月均去化",
                "value": 40.4
            }
        ]
    },
    {
        "id": 33,
        "position": {
            "lng": "121.077707",
            "lat": "31.38436"
        },
        "title": "保利正荣堂悦花园",
        "remark": "第三方公司不是直签，商务条款洽谈不成功",
        "distribution": "无",
        "infos": [
            {
                "key": "板块",
                "value": "开发区"
            },
            {
                "key": "总体量",
                "value": 2003
            },
            {
                "key": "总货值（亿）",
                "value": 48
            },
            {
                "key": "在售套数",
                "value": 5
            },
            {
                "key": "在售货值（亿）",
                "value": 0
            },
            {
                "key": "月均去化",
                "value": 93.2
            }
        ]
    },
    {
        "id": 34,
        "position": {
            "lng": "120.934176",
            "lat": "31.289239"
        },
        "title": "兰亭都荟",
        "remark": "甲方表示目前中介成交量已够量，控制分销占比，目前其他分销只合作115平",
        "distribution": "快房/贝壳",
        "infos": [
            {
                "key": "板块",
                "value": "张浦"
            },
            {
                "key": "总体量",
                "value": 2679
            },
            {
                "key": "总货值（亿）",
                "value": 47
            },
            {
                "key": "在售套数",
                "value": 150
            },
            {
                "key": "在售货值（亿）",
                "value": 2.88
            },
            {
                "key": "月均去化",
                "value": 26.4
            }
        ]
    },
    {
        "id": 35,
        "position": {
            "lng": "120.939533",
            "lat": "31.279044"
        },
        "title": "江湾四季",
        "remark": "目前正在合作洽谈，2.8%",
        "distribution": "58/贝壳",
        "infos": [
            {
                "key": "板块",
                "value": "张浦"
            },
            {
                "key": "总体量",
                "value": 1293
            },
            {
                "key": "总货值（亿）",
                "value": 20.36
            },
            {
                "key": "在售套数",
                "value": 500
            },
            {
                "key": "在售货值（亿）",
                "value": 8.25
            },
            {
                "key": "月均去化",
                "value": 62
            }
        ]
    },
    {
        "id": 36,
        "position": {
            "lng": "121.026633",
            "lat": "31.24871"
        },
        "title": "颐和天樾花园",
        "remark": "甲方未开盘，暂时分销不合作",
        "distribution": "无",
        "infos": [
            {
                "key": "板块",
                "value": "千灯"
            },
            {
                "key": "总体量",
                "value": 1500
            },
            {
                "key": "总货值（亿）",
                "value": 22.5
            },
            {
                "key": "在售套数",
                "value": 0
            },
            {
                "key": "在售货值（亿）",
                "value": 0
            }
        ]
    },
    {
        "id": 37,
        "position": {
            "lng": "121.023099",
            "lat": "31.249373"
        },
        "title": "海伦堡云璟台",
        "remark": "甲方原因不与合作，4.5%",
        "distribution": "标房/房多多/贝壳",
        "infos": [
            {
                "key": "板块",
                "value": "千灯"
            },
            {
                "key": "总体量",
                "value": 1200
            },
            {
                "key": "总货值（亿）",
                "value": 18.24
            },
            {
                "key": "在售套数",
                "value": 150
            },
            {
                "key": "在售货值（亿）",
                "value": 2.19
            },
            {
                "key": "月均去化",
                "value": 77.4
            }
        ]
    },
    {
        "id": 38,
        "position": {
            "lng": "120.930147",
            "lat": "31.289864"
        },
        "title": "首创禧悦棠礼",
        "remark": "贝壳独家，2.5%",
        "distribution": "贝壳",
        "infos": [
            {
                "key": "板块",
                "value": "张浦"
            },
            {
                "key": "总体量",
                "value": 1682
            },
            {
                "key": "总货值（亿）",
                "value": 25.2
            },
            {
                "key": "在售套数",
                "value": 70
            },
            {
                "key": "在售货值（亿）",
                "value": 1.09
            },
            {
                "key": "月均去化",
                "value": 73.8
            }
        ]
    },
    {
        "id": 39,
        "position": {
            "lng": "120.953455",
            "lat": "31.299728"
        },
        "title": "绿地境启澜庭",
        "remark": "公司黑名单/甲方需要成交量，2.3%",
        "distribution": "58/微好房",
        "infos": [
            {
                "key": "板块",
                "value": "张浦"
            },
            {
                "key": "总体量",
                "value": 2200
            },
            {
                "key": "总货值（亿）",
                "value": 33
            },
            {
                "key": "在售套数",
                "value": 120
            },
            {
                "key": "在售货值（亿）",
                "value": 2.112
            },
            {
                "key": "月均去化",
                "value": 26.4
            }
        ]
    },
    {
        "id": 40,
        "position": {
            "lng": "121.0327",
            "lat": "31.253252"
        },
        "title": "裕花园4期",
        "remark": "甲方未开盘，暂时分销不合作",
        "distribution": "无",
        "infos": [
            {
                "key": "板块",
                "value": "千灯"
            },
            {
                "key": "总体量",
                "value": 0
            },
            {
                "key": "总货值（亿）",
                "value": 1
            },
            {
                "key": "在售套数",
                "value": 0
            },
            {
                "key": "在售货值（亿）",
                "value": 0
            }
        ]
    },
    {
        "id": 41,
        "position": {
            "lng": "121.0272",
            "lat": "31.255314"
        },
        "title": "梦悦佳苑",
        "remark": "案场独家，6万/套+现金奖5千/套",
        "distribution": "优枫",
        "infos": [
            {
                "key": "板块",
                "value": "千灯"
            },
            {
                "key": "总体量",
                "value": 244
            },
            {
                "key": "总货值（亿）",
                "value": 3.904
            },
            {
                "key": "在售套数",
                "value": 24
            },
            {
                "key": "在售货值（亿）",
                "value": 0.24
            },
            {
                "key": "月均去化",
                "value": 19.2
            }
        ]
    },
    {
        "id": 42,
        "position": {
            "lng": "120.950152",
            "lat": "31.306503"
        },
        "title": "祥源悦江南",
        "remark": "甲方未开盘，暂时分销不合作",
        "distribution": "无",
        "infos": [
            {
                "key": "板块",
                "value": "张浦"
            },
            {
                "key": "总体量",
                "value": 1026
            },
            {
                "key": "总货值（亿）",
                "value": 16.41
            },
            {
                "key": "在售套数",
                "value": 0
            },
            {
                "key": "在售货值（亿）",
                "value": 0
            }
        ]
    },
    {
        "id": 43,
        "position": {
            "lng": "120.950171",
            "lat": "31.304972"
        },
        "title": "上坤·都荟四季",
        "remark": "甲方未开盘，暂时分销不合作",
        "distribution": "无",
        "infos": [
            {
                "key": "板块",
                "value": "张浦"
            },
            {
                "key": "总体量",
                "value": 820
            },
            {
                "key": "总货值（亿）",
                "value": 14.2
            },
            {
                "key": "在售套数",
                "value": 0
            },
            {
                "key": "在售货值（亿）",
                "value": 0
            }
        ]
    },
    {
        "id": 44,
        "position": {
            "lng": "121.025025",
            "lat": "31.258339"
        },
        "title": "奥园 印象高迪",
        "remark": "商住公寓，甲方想找代理全包，目前未售",
        "distribution": "无",
        "infos": [
            {
                "key": "板块",
                "value": "千灯"
            },
            {
                "key": "总体量",
                "value": 23
            },
            {
                "key": "总货值（亿）",
                "value": 0.138
            },
            {
                "key": "在售套数",
                "value": 0
            },
            {
                "key": "在售货值（亿）",
                "value": 0
            }
        ]
    },
    {
        "id": 45,
        "position": {
            "lng": "120.837977",
            "lat": "31.031299"
        },
        "title": "国风云樾",
        "remark": 0.04,
        "distribution": "贝壳",
        "infos": [
            {
                "key": "板块",
                "value": "汾湖"
            },
            {
                "key": "总体量",
                "value": 1744
            },
            {
                "key": "总货值（亿）",
                "value": 34.88
            },
            {
                "key": "在售套数",
                "value": 550
            },
            {
                "key": "在售货值（亿）",
                "value": 11
            },
            {
                "key": "月均去化",
                "value": 82.4
            }
        ]
    },
    {
        "id": 46,
        "position": {
            "lng": "120.867774",
            "lat": "31.048336"
        },
        "title": "实地华鹤岭",
        "remark": "在谈，4%",
        "distribution": "乐居苑/金润/58/轩天/贝壳/房全全",
        "infos": [
            {
                "key": "板块",
                "value": "汾湖"
            },
            {
                "key": "总体量",
                "value": 564
            },
            {
                "key": "总货值（亿）",
                "value": 11.28
            },
            {
                "key": "在售套数",
                "value": 0
            },
            {
                "key": "在售货值（亿）",
                "value": 52.8
            }
        ]
    },
    {
        "id": 47,
        "position": {
            "lng": "120.867927",
            "lat": "31.045955"
        },
        "title": "保利湖畔云上",
        "remark": "捂盘加茶水费 ，不接受，4%",
        "distribution": "金润",
        "infos": [
            {
                "key": "板块",
                "value": "汾湖"
            },
            {
                "key": "总体量",
                "value": 1520
            },
            {
                "key": "总货值（亿）",
                "value": 30.4
            },
            {
                "key": "在售套数",
                "value": 240
            },
            {
                "key": "在售货值（亿）",
                "value": 4.8
            },
            {
                "key": "月均去化",
                "value": 71.2
            }
        ]
    },
    {
        "id": 48,
        "position": {
            "lng": "120.870945",
            "lat": "31.04283"
        },
        "title": "新天地熙照华庭",
        "remark": "开发商要求抵房，正在谈",
        "distribution": "金润/58/杭州房百通/上海中天",
        "infos": [
            {
                "key": "板块",
                "value": "汾湖"
            },
            {
                "key": "总体量",
                "value": 809
            },
            {
                "key": "总货值（亿）",
                "value": 16.18
            },
            {
                "key": "在售套数",
                "value": 240
            },
            {
                "key": "在售货值（亿）",
                "value": 4.8
            }
        ]
    },
    {
        "id": 49,
        "position": {
            "lng": "120.867891",
            "lat": "31.042791"
        },
        "title": "湖城风华",
        "remark": "贝壳本地客户多，4%",
        "distribution": "贝壳、轩天",
        "infos": [
            {
                "key": "板块",
                "value": "汾湖"
            },
            {
                "key": "总体量",
                "value": 1220
            },
            {
                "key": "总货值（亿）",
                "value": 24.4
            },
            {
                "key": "在售套数",
                "value": 0
            },
            {
                "key": "在售货值（亿）",
                "value": 0
            }
        ]
    },
    {
        "id": 50,
        "position": {
            "lng": "120.625042",
            "lat": "31.126781"
        },
        "title": "苏州湾藏璟",
        "remark": "甲方自销",
        "distribution": "无",
        "infos": [
            {
                "key": "板块",
                "value": "吴江"
            },
            {
                "key": "总体量",
                "value": 587
            },
            {
                "key": "总货值（亿）",
                "value": 17
            },
            {
                "key": "在售套数",
                "value": 90
            },
            {
                "key": "在售货值（亿）",
                "value": 2.7
            },
            {
                "key": "月均去化",
                "value": 35.4
            }
        ]
    },
    {
        "id": 51,
        "position": {
            "lng": "120.83148",
            "lat": "31.03753"
        },
        "title": "绿地潮映江南",
        "remark": "甲方自销",
        "distribution": "无",
        "infos": [
            {
                "key": "板块",
                "value": "汾湖"
            },
            {
                "key": "总体量",
                "value": 733
            },
            {
                "key": "总货值（亿）",
                "value": 13
            },
            {
                "key": "在售套数",
                "value": 170
            },
            {
                "key": "在售货值（亿）",
                "value": 2.7
            },
            {
                "key": "月均去化",
                "value": 24.6
            }
        ]
    },
    {
        "id": 52,
        "position": {
            "lng": "121.922776",
            "lat": "31.728108"
        },
        "title": "恒大世纪海岸",
        "remark": "长账龄，5%+2000认购奖+13000签约奖",
        "distribution": "堂烁",
        "infos": [
            {
                "key": "板块",
                "value": "圆陀角"
            },
            {
                "key": "总体量",
                "value": "5000套"
            },
            {
                "key": "总货值（亿）",
                "value": 1.76
            },
            {
                "key": "在售套数",
                "value": 40
            },
            {
                "key": "在售货值（亿）",
                "value": 0.4
            },
            {
                "key": "月均去化",
                "value": 5.2
            }
        ]
    },
    {
        "id": 53,
        "position": {
            "lng": "121.922776",
            "lat": "31.728108"
        },
        "title": "绿地奥莱缤纷广场",
        "remark": "甲方配合度低，回款慢，4%",
        "distribution": "江苏瑞世，南通银座，上海中鲲",
        "infos": [
            {
                "key": "板块",
                "value": "惠萍镇"
            },
            {
                "key": "总体量",
                "value": "1140套"
            },
            {
                "key": "总货值（亿）",
                "value": 15
            },
            {
                "key": "在售套数",
                "value": 342
            },
            {
                "key": "在售货值（亿）",
                "value": 3.7
            },
            {
                "key": "月均去化",
                "value": 11.4
            }
        ]
    },
    {
        "id": 54,
        "position": {
            "lng": "121.62638",
            "lat": "31.915106"
        },
        "title": "樱花庄园",
        "remark": "开发商自己外拓签分销",
        "distribution": "无",
        "infos": [
            {
                "key": "板块",
                "value": "曹家镇"
            },
            {
                "key": "总体量",
                "value": 120
            },
            {
                "key": "总货值（亿）",
                "value": 3.4
            },
            {
                "key": "在售套数",
                "value": 80
            },
            {
                "key": "在售货值（亿）",
                "value": 2.3
            },
            {
                "key": "月均去化",
                "value": 0
            }
        ]
    },
    {
        "id": 55,
        "position": {
            "lng": "121.450462",
            "lat": "32.1629"
        },
        "title": "世茂江海天成",
        "remark": "本地总代客群在本地低点位愿意打，4%",
        "distribution": "爱心",
        "infos": [
            {
                "key": "板块",
                "value": "通州湾"
            },
            {
                "key": "总体量",
                "value": 808
            },
            {
                "key": "总货值（亿）",
                "value": 3.8
            },
            {
                "key": "在售套数",
                "value": 80
            },
            {
                "key": "在售货值（亿）",
                "value": 1
            },
            {
                "key": "月均去化",
                "value": 112
            }
        ]
    },
    {
        "id": 56,
        "position": {
            "lng": "120.842648",
            "lat": "32.065576"
        },
        "title": "世茂璀璨未来",
        "remark": "佣金1.6%无带看奖",
        "distribution": "爱心，贝壳",
        "infos": [
            {
                "key": "板块",
                "value": "港闸区"
            },
            {
                "key": "总体量",
                "value": 1062
            },
            {
                "key": "总货值（亿）",
                "value": 25
            },
            {
                "key": "在售套数",
                "value": 100
            },
            {
                "key": "在售货值（亿）",
                "value": 2.4
            },
            {
                "key": "月均去化",
                "value": 44
            }
        ]
    },
    {
        "id": 57,
        "position": {
            "lng": "121.910952",
            "lat": "31.716359"
        },
        "title": "新湖绿城海上明月",
        "remark": "商务条件洽谈中",
        "distribution": "兴策，开基，汇皇",
        "infos": [
            {
                "key": "板块",
                "value": "启东"
            },
            {
                "key": "总体量",
                "value": 40000
            },
            {
                "key": "总货值（亿）",
                "value": 320
            },
            {
                "key": "在售套数",
                "value": 500
            },
            {
                "key": "在售货值（亿）",
                "value": 4
            },
            {
                "key": "月均去化",
                "value": 72.4
            }
        ]
    },
    {
        "id": 58,
        "position": {
            "lng": "120.978319",
            "lat": "31.945282"
        },
        "title": "远创宸樾",
        "remark": "洽谈中，1.5%+1000元/平",
        "distribution": "58，贝壳",
        "infos": [
            {
                "key": "板块",
                "value": "崇川区"
            },
            {
                "key": "总体量",
                "value": 3142
            },
            {
                "key": "总货值（亿）",
                "value": 125
            },
            {
                "key": "在售套数",
                "value": 1200
            },
            {
                "key": "在售货值（亿）",
                "value": 48
            },
            {
                "key": "月均去化",
                "value": 218
            }
        ]
    },
    {
        "id": 59,
        "position": {
            "lng": "120.978319",
            "lat": "31.945282"
        },
        "title": "远创湖悦云境",
        "remark": "洽谈中，1.5%+1000元/平",
        "distribution": "58，贝壳",
        "infos": [
            {
                "key": "板块",
                "value": "港闸区"
            },
            {
                "key": "总体量",
                "value": 2553
            },
            {
                "key": "总货值（亿）",
                "value": 98
            },
            {
                "key": "在售套数",
                "value": 1200
            },
            {
                "key": "在售货值（亿）",
                "value": 46
            },
            {
                "key": "月均去化",
                "value": 159
            }
        ]
    },
    {
        "id": 60,
        "position": {
            "lng": "120.944063",
            "lat": "32.052218"
        },
        "title": "观江海",
        "remark": "洽谈中，1.5%",
        "distribution": "贝壳",
        "infos": [
            {
                "key": "板块",
                "value": "通州区"
            },
            {
                "key": "总体量",
                "value": 886
            },
            {
                "key": "总货值（亿）",
                "value": 18
            },
            {
                "key": "在售套数",
                "value": 300
            },
            {
                "key": "在售货值（亿）",
                "value": 6
            },
            {
                "key": "月均去化",
                "value": 49
            }
        ]
    },
    {
        "id": 61,
        "position": {
            "lng": "121.020212",
            "lat": "31.92097"
        },
        "title": "大华铂璟湾",
        "remark": "洽谈中，1.8%",
        "distribution": "贝壳",
        "infos": [
            {
                "key": "板块",
                "value": "通州区"
            },
            {
                "key": "总体量",
                "value": 1034
            },
            {
                "key": "总货值（亿）",
                "value": 0
            },
            {
                "key": "在售套数",
                "value": 0
            },
            {
                "key": "在售货值（亿）",
                "value": 0
            },
            {
                "key": "月均去化",
                "value": 0
            }
        ]
    },
    {
        "id": 62,
        "position": {
            "lng": "121.361923",
            "lat": "32.063511"
        },
        "title": "智汇雅苑",
        "remark": "待开拓。103㎡/60000元，135㎡/80000元",
        "distribution": "房居客全案独家",
        "infos": [
            {
                "key": "板块",
                "value": "海门"
            },
            {
                "key": "总体量",
                "value": 550
            },
            {
                "key": "总货值（亿）",
                "value": 4.928
            },
            {
                "key": "在售套数",
                "value": 85
            },
            {
                "key": "在售货值（亿）",
                "value": 0.748
            },
            {
                "key": "月均去化",
                "value": 5.8
            }
        ]
    },
    {
        "id": 63,
        "position": {
            "lng": "121.016143",
            "lat": "31.921353"
        },
        "title": "阳光城未来悦",
        "remark": "即将开盘，待开拓区域",
        "distribution": "贝壳等三家公司",
        "infos": [
            {
                "key": "板块",
                "value": "科技园区"
            },
            {
                "key": "总体量",
                "value": 1986
            },
            {
                "key": "总货值（亿）",
                "value": 32.8
            },
            {
                "key": "在售套数",
                "value": 0
            },
            {
                "key": "在售货值（亿）",
                "value": 0
            },
            {
                "key": "月均去化",
                "value": 0
            }
        ]
    },
    {
        "id": 64,
        "position": {
            "lng": "121.019374",
            "lat": "31.91074"
        },
        "title": "好得家悦城",
        "remark": "待开拓，42㎡/30000元，84㎡/60000元",
        "distribution": "甲方启动了很多家分销",
        "infos": [
            {
                "key": "板块",
                "value": "科技园区"
            },
            {
                "key": "总体量",
                "value": 1040
            },
            {
                "key": "总货值（亿）",
                "value": 4.6
            },
            {
                "key": "在售套数",
                "value": 525
            },
            {
                "key": "在售货值（亿）",
                "value": 2.3
            },
            {
                "key": "月均去化",
                "value": 16
            }
        ]
    },
    {
        "id": 65,
        "position": {
            "lng": "121.054331",
            "lat": "32.082899"
        },
        "title": "紫云朗境",
        "remark": "有意向，暂未开盘，待开拓",
        "distribution": "无",
        "infos": [
            {
                "key": "板块",
                "value": "通州区"
            },
            {
                "key": "总体量",
                "value": 1600
            },
            {
                "key": "总货值（亿）",
                "value": 35.2
            },
            {
                "key": "在售套数",
                "value": 0
            },
            {
                "key": "在售货值（亿）",
                "value": 0
            },
            {
                "key": "月均去化",
                "value": 0
            }
        ]
    }
]

export default points