/* 單元四：實戰方案（新版多情境） */
const planScenarioData = {
  hot_latte: {
    title: "情境：我做熱拿鐵",
    desc: "你正在規劃店內的熱拿鐵，請從管理者角度做 5 個選擇。",
    resultLabel: "這杯熱拿鐵的經營結果",
    steps: [
      {
        key: "原料",
        question: "今天這杯熱拿鐵要使用哪一種咖啡豆？",
        options: [
          {
            id: "hl_bean_classic",
            label: "經典型：巴西＋哥倫比亞（中深焙）",
            kg: 60,
            pros: "風味穩定，與牛奶融合度高，接受度高。",
            cons: "特色感較保守。",
            result: "你做出的是一杯平衡、耐喝、適合大眾市場的熱拿鐵。"
          },
          {
            id: "hl_bean_strong",
            label: "濃厚型：巴西＋曼特寧（偏深焙）",
            kg: 75,
            pros: "厚度高，加入牛奶後仍有存在感。",
            cons: "風味較厚重，不一定每個人都喜歡。",
            result: "你做出的是一杯濃郁、厚實、存在感高的熱拿鐵。"
          },
          {
            id: "hl_bean_sweet",
            label: "甜感型：瓜地馬拉（中焙）",
            kg: 55,
            pros: "甜感柔和，口感較輕盈。",
            cons: "個性可能不如濃厚型明顯。",
            result: "你做出的是一杯柔和、甜感較明顯的熱拿鐵。"
          }
        ]
      },
      {
        key: "運輸",
        question: "今天你選擇哪一種供應與配送方式？",
        options: [
          {
            id: "hl_transport_far",
            label: "長期配合的供應商（距離較遠）",
            kg: 95,
            pros: "合作熟悉、品質穩定。",
            cons: "運輸距離長，排放較高。",
            result: "你的原料供應穩定，但運輸排放也比較高。"
          },
          {
            id: "hl_transport_regional",
            label: "區域型供應商，固定週配",
            kg: 60,
            pros: "穩定與排放之間較平衡。",
            cons: "彈性普通。",
            result: "你的供應模式屬於穩定與排放控制兼顧的中間方案。"
          },
          {
            id: "hl_transport_local",
            label: "在地供應商，集中配送",
            kg: 35,
            pros: "距離短，排放較低。",
            cons: "品項彈性可能較少。",
            result: "你的供應方式更接近低碳經營。"
          }
        ]
      },
      {
        key: "製作",
        question: "今天你要怎麼安排熱拿鐵的製作設備？",
        options: [
          {
            id: "hl_make_eff",
            label: "高效率義式設備",
            kg: 42,
            pros: "品質穩定、效率高。",
            cons: "前期投入較高。",
            result: "你的出杯品質穩定，但設備投資壓力較大。"
          },
          {
            id: "hl_make_standard",
            label: "一般義式設備",
            kg: 70,
            pros: "成本與品質較平衡。",
            cons: "節能表現普通。",
            result: "你的設備策略屬於中間型方案。"
          },
          {
            id: "hl_make_old",
            label: "沿用舊設備",
            kg: 108,
            pros: "短期不需要增加成本。",
            cons: "耗能較高，長期壓力較大。",
            result: "你的短期壓力較小，但長期耗能較高。"
          }
        ]
      },
      {
        key: "銷售",
        question: "今天這杯熱拿鐵要怎麼賣？",
        options: [
          {
            id: "hl_sale_paper",
            label: "外帶熱飲紙杯",
            kg: 45,
            pros: "常見、方便、顧客熟悉。",
            cons: "一次性包材仍然會累積。",
            result: "你的銷售方式方便，但包材排放也會增加。"
          },
          {
            id: "hl_sale_mug",
            label: "內用馬克杯",
            kg: 20,
            pros: "一次性包材少，品牌感較好。",
            cons: "需要清洗與內用管理。",
            result: "你的熱拿鐵更適合店內體驗，也較接近低包材策略。"
          },
          {
            id: "hl_sale_reuse",
            label: "自備杯優惠",
            kg: 15,
            pros: "一次性包材最少，永續形象佳。",
            cons: "需要顧客配合。",
            result: "你的熱拿鐵銷售方式更符合低碳品牌路線。"
          }
        ]
      },
      {
        key: "間接碳排",
        question: "今天門市的人力與通勤會怎麼安排？",
        options: [
          {
            id: "hl_indirect_scooter",
            label: "員工多以機車通勤",
            kg: 52,
            pros: "排班彈性高。",
            cons: "間接碳排較高。",
            result: "你的營運彈性較高，但通勤造成的間接排放也較高。"
          },
          {
            id: "hl_indirect_mrt",
            label: "員工多以大眾運輸通勤",
            kg: 28,
            pros: "間接碳排較低。",
            cons: "排班彈性可能較受限。",
            result: "你的安排較能降低通勤造成的排放。"
          },
          {
            id: "hl_indirect_schedule",
            label: "集中排班與近距離人力配置",
            kg: 18,
            pros: "可進一步降低部分通勤排放。",
            cons: "排班與管理難度較高。",
            result: "你的安排更偏向整體營運優化。"
          }
        ]
      }
    ]
  },

  iced_latte: {
    title: "情境：我想做冰拿鐵",
    desc: "冰拿鐵除了咖啡與牛奶，還會牽涉冰塊、冷藏與塑膠杯等選擇。",
    resultLabel: "這杯冰拿鐵的經營結果",
    steps: [
      {
        key: "原料",
        question: "今天這杯冰拿鐵要使用哪一種咖啡豆？",
        options: [
          {
            id: "il_bean_classic",
            label: "經典型：巴西＋哥倫比亞（中深焙）",
            kg: 62,
            pros: "與牛奶融合度高，接受度高。",
            cons: "特色感較保守。",
            result: "你做出的是一杯平衡、耐喝的大眾型冰拿鐵。"
          },
          {
            id: "il_bean_strong",
            label: "濃厚型：巴西＋曼特寧（偏深焙）",
            kg: 78,
            pros: "冰飲中仍有足夠存在感。",
            cons: "風味較厚重。",
            result: "你做出的是一杯濃郁、存在感高的冰拿鐵。"
          },
          {
            id: "il_bean_sweet",
            label: "甜感型：瓜地馬拉（中焙）",
            kg: 57,
            pros: "口感較柔和，甜感較明顯。",
            cons: "加冰後個性可能被稀釋。",
            result: "你做出的是一杯柔和、甜感較明顯的冰拿鐵。"
          }
        ]
      },
      {
        key: "運輸",
        question: "今天你選擇哪一種供應與配送方式？",
        options: [
          {
            id: "il_transport_far",
            label: "長期配合的供應商（距離較遠）",
            kg: 95,
            pros: "合作熟悉、品質穩定。",
            cons: "運輸距離長，排放較高。",
            result: "你的原料供應穩定，但運輸排放也比較高。"
          },
          {
            id: "il_transport_regional",
            label: "區域型供應商，固定週配",
            kg: 60,
            pros: "穩定與排放較平衡。",
            cons: "彈性普通。",
            result: "你的供應模式屬於穩定與排放控制兼顧的中間方案。"
          },
          {
            id: "il_transport_local",
            label: "在地供應商，集中配送",
            kg: 35,
            pros: "距離短，排放較低。",
            cons: "品項彈性較少。",
            result: "你的供應方式更接近低碳經營。"
          }
        ]
      },
      {
        key: "製作",
        question: "今天你要怎麼安排冰拿鐵的製作設備？",
        options: [
          {
            id: "il_make_eff",
            label: "高效率義式設備＋製冰管理",
            kg: 55,
            pros: "品質穩定，也能控制冰塊耗能。",
            cons: "前期投入較高。",
            result: "你的冰拿鐵品質穩定，也比較重視耗能控制。"
          },
          {
            id: "il_make_standard",
            label: "一般義式設備＋一般製冰方式",
            kg: 82,
            pros: "操作較平衡。",
            cons: "節能表現普通。",
            result: "你的設備策略屬於一般平衡型方案。"
          },
          {
            id: "il_make_old",
            label: "舊設備＋高頻製冰",
            kg: 120,
            pros: "短期不需加大投資。",
            cons: "冰塊與設備耗能都偏高。",
            result: "你的短期壓力較小，但冰飲耗能也會明顯上升。"
          }
        ]
      },
      {
        key: "銷售",
        question: "今天這杯冰拿鐵要怎麼賣？",
        options: [
          {
            id: "il_sale_plastic",
            label: "塑膠杯＋杯蓋",
            kg: 68,
            pros: "常見、展示效果好。",
            cons: "塑膠使用量較高。",
            result: "你的銷售方式偏重視便利與展示效果。"
          },
          {
            id: "il_sale_strawless",
            label: "塑膠杯＋不主動提供吸管",
            kg: 52,
            pros: "較一般塑膠杯少一些耗材。",
            cons: "仍然屬於一次性包材。",
            result: "你的銷售方式有做減量，但仍有塑膠包材。"
          },
          {
            id: "il_sale_reuse",
            label: "自備冷飲杯優惠",
            kg: 18,
            pros: "包材最少，永續形象較好。",
            cons: "需要顧客配合。",
            result: "你的冰拿鐵銷售方式更接近低碳品牌策略。"
          }
        ]
      },
      {
        key: "間接碳排",
        question: "今天哪些間接因素最影響這杯冰拿鐵？",
        options: [
          {
            id: "il_indirect_scooter",
            label: "員工多以機車通勤",
            kg: 50,
            pros: "排班彈性高。",
            cons: "間接碳排較高。",
            result: "你的營運彈性較高，但間接排放也較高。"
          },
          {
            id: "il_indirect_transport",
            label: "員工多以大眾運輸通勤",
            kg: 28,
            pros: "間接碳排較低。",
            cons: "班表彈性較受限制。",
            result: "你的安排較能降低通勤造成的間接排放。"
          },
          {
            id: "il_indirect_customer",
            label: "鼓勵內用與集中取餐",
            kg: 20,
            pros: "可降低部分顧客與營運的額外排放。",
            cons: "需要額外溝通與動線安排。",
            result: "你的安排更重視整體流程中的間接排放控制。"
          }
        ]
      }
    ]
  },

  hot_americano: {
    title: "情境：我想做熱美式",
    desc: "熱美式看起來簡單，但仍會牽涉豆子、設備、熱水與外帶包材等決策。",
    resultLabel: "這杯熱美式的經營結果",
    steps: [
      {
        key: "原料",
        question: "今天這杯熱美式要使用哪一種咖啡豆？",
        options: [
          {
            id: "ha_bean_balanced",
            label: "平衡型：巴西＋哥倫比亞",
            kg: 50,
            pros: "接受度高，穩定好賣。",
            cons: "個性較保守。",
            result: "你做出的是一杯穩定、順口的大眾型熱美式。"
          },
          {
            id: "ha_bean_bright",
            label: "明亮型：衣索比亞（中焙）",
            kg: 58,
            pros: "香氣鮮明，辨識度高。",
            cons: "有些顧客可能不習慣。",
            result: "你做出的是一杯香氣明亮、特色鮮明的熱美式。"
          },
          {
            id: "ha_bean_dark",
            label: "厚實型：深焙拼配豆",
            kg: 68,
            pros: "苦甜明顯，存在感高。",
            cons: "風味較重，不是每個人都喜歡。",
            result: "你做出的是一杯厚實、濃烈的熱美式。"
          }
        ]
      },
      {
        key: "運輸",
        question: "今天你選擇哪一種供應與配送方式？",
        options: [
          {
            id: "ha_transport_far",
            label: "長期配合的供應商（距離較遠）",
            kg: 90,
            pros: "穩定熟悉，合作順暢。",
            cons: "運輸排放較高。",
            result: "你的供應穩定，但距離造成的排放較高。"
          },
          {
            id: "ha_transport_regional",
            label: "區域型供應商，固定週配",
            kg: 55,
            pros: "穩定與排放較平衡。",
            cons: "調整彈性普通。",
            result: "你的供應模式屬於較務實的平衡方案。"
          },
          {
            id: "ha_transport_local",
            label: "在地供應商，集中配送",
            kg: 30,
            pros: "距離短，排放較低。",
            cons: "品項彈性較少。",
            result: "你的供應模式比較接近低碳方向。"
          }
        ]
      },
      {
        key: "製作",
        question: "今天你怎麼安排熱美式的製作設備？",
        options: [
          {
            id: "ha_make_efficient",
            label: "高效率義式設備＋穩定熱水系統",
            kg: 38,
            pros: "出杯效率高，品質穩定。",
            cons: "前期成本高。",
            result: "你的熱美式能維持穩定品質與效率。"
          },
          {
            id: "ha_make_standard",
            label: "一般義式設備",
            kg: 60,
            pros: "成本較平衡。",
            cons: "效率與節能表現一般。",
            result: "你的設備策略屬於中間型。"
          },
          {
            id: "ha_make_old",
            label: "沿用舊設備",
            kg: 95,
            pros: "短期不需加大投資。",
            cons: "耗能偏高。",
            result: "你的短期成本較低，但能源壓力也較高。"
          }
        ]
      },
      {
        key: "銷售",
        question: "今天這杯熱美式要怎麼賣？",
        options: [
          {
            id: "ha_sale_hotcup",
            label: "熱飲紙杯",
            kg: 40,
            pros: "常見方便，顧客熟悉。",
            cons: "一次性包材仍會累積。",
            result: "你的銷售方式穩定，但包材仍有排放。"
          },
          {
            id: "ha_sale_mug",
            label: "內用杯",
            kg: 18,
            pros: "一次性包材少。",
            cons: "需清洗與內用管理。",
            result: "你的銷售方式更偏向店內體驗與減量策略。"
          },
          {
            id: "ha_sale_reuse",
            label: "自備杯優惠",
            kg: 14,
            pros: "包材最少，永續形象佳。",
            cons: "需要顧客配合。",
            result: "你的銷售方式更接近低碳品牌策略。"
          }
        ]
      },
      {
        key: "間接碳排",
        question: "今天門市的人力與通勤會怎麼安排？",
        options: [
          {
            id: "ha_indirect_scooter",
            label: "員工多以機車通勤",
            kg: 50,
            pros: "排班彈性高。",
            cons: "間接排放較高。",
            result: "你的營運彈性高，但間接碳排較高。"
          },
          {
            id: "ha_indirect_transport",
            label: "員工多以大眾運輸通勤",
            kg: 26,
            pros: "間接碳排較低。",
            cons: "排班彈性較受限制。",
            result: "你的營運安排較有助於降低間接排放。"
          },
          {
            id: "ha_indirect_schedule",
            label: "集中排班與近距離人力配置",
            kg: 16,
            pros: "能進一步降低通勤排放。",
            cons: "管理難度較高。",
            result: "你的安排更偏向整體營運優化。"
          }
        ]
      }
    ]
  },

  iced_americano: {
    title: "情境：我想做冰美式",
    desc: "冰美式會多出冰塊、塑膠杯與冷藏管理等選擇。",
    resultLabel: "這杯冰美式的經營結果",
    steps: [
      {
        key: "原料",
        question: "今天這杯冰美式要使用哪一種咖啡豆？",
        options: [
          {
            id: "ia_bean_balanced",
            label: "平衡型：巴西＋哥倫比亞",
            kg: 52,
            pros: "穩定、接受度高。",
            cons: "風味較保守。",
            result: "你做出的是一杯穩定、清爽的大眾型冰美式。"
          },
          {
            id: "ia_bean_bright",
            label: "明亮型：衣索比亞（中焙）",
            kg: 60,
            pros: "冰飲中香氣更鮮明。",
            cons: "有些人可能覺得酸感較明顯。",
            result: "你做出的是一杯香氣明亮、辨識度高的冰美式。"
          },
          {
            id: "ia_bean_dark",
            label: "厚實型：深焙拼配豆",
            kg: 70,
            pros: "苦甜較明顯，存在感高。",
            cons: "口感可能較厚重。",
            result: "你做出的是一杯厚實、存在感高的冰美式。"
          }
        ]
      },
      {
        key: "運輸",
        question: "今天你選擇哪一種供應與配送方式？",
        options: [
          {
            id: "ia_transport_far",
            label: "長期配合的供應商（距離較遠）",
            kg: 90,
            pros: "合作熟悉，穩定性高。",
            cons: "運輸排放較高。",
            result: "你的供應穩定，但距離造成的排放較高。"
          },
          {
            id: "ia_transport_regional",
            label: "區域型供應商，固定週配",
            kg: 55,
            pros: "穩定與排放較平衡。",
            cons: "調整彈性普通。",
            result: "你的供應模式屬於較務實的平衡方案。"
          },
          {
            id: "ia_transport_local",
            label: "在地供應商，集中配送",
            kg: 30,
            pros: "距離短，排放較低。",
            cons: "品項彈性較少。",
            result: "你的供應模式較接近低碳方向。"
          }
        ]
      },
      {
        key: "製作",
        question: "今天你怎麼安排冰美式的製作設備？",
        options: [
          {
            id: "ia_make_efficient",
            label: "高效率義式設備＋製冰管理",
            kg: 45,
            pros: "效率高，也能兼顧冰塊耗能控制。",
            cons: "前期投入較高。",
            result: "你的冰美式品質穩定，也比較重視耗能控制。"
          },
          {
            id: "ia_make_standard",
            label: "一般義式設備＋一般製冰方式",
            kg: 72,
            pros: "操作較平衡。",
            cons: "節能表現普通。",
            result: "你的設備策略屬於一般中間型方案。"
          },
          {
            id: "ia_make_old",
            label: "舊設備＋高頻製冰",
            kg: 108,
            pros: "短期不需增加成本。",
            cons: "冰塊與設備耗能都較高。",
            result: "你的短期成本較低，但冰飲耗能也較高。"
          }
        ]
      },
      {
        key: "銷售",
        question: "今天這杯冰美式要怎麼賣？",
        options: [
          {
            id: "ia_sale_plastic",
            label: "塑膠杯＋杯蓋",
            kg: 60,
            pros: "常見，顧客習慣度高。",
            cons: "塑膠使用量較高。",
            result: "你的銷售方式偏重便利與展示效果。"
          },
          {
            id: "ia_sale_strawless",
            label: "塑膠杯＋不主動提供吸管",
            kg: 48,
            pros: "比一般塑膠杯少一部分耗材。",
            cons: "仍有一次性包材問題。",
            result: "你的銷售方式有減量，但仍屬一次性包材。"
          },
          {
            id: "ia_sale_reuse",
            label: "自備冷飲杯優惠",
            kg: 16,
            pros: "包材最少，品牌形象較好。",
            cons: "需要顧客配合。",
            result: "你的冰美式銷售方式更符合低碳品牌策略。"
          }
        ]
      },
      {
        key: "間接碳排",
        question: "今天哪些間接因素最影響這杯冰美式？",
        options: [
          {
            id: "ia_indirect_scooter",
            label: "員工多以機車通勤",
            kg: 48,
            pros: "排班彈性高。",
            cons: "間接排放較高。",
            result: "你的營運彈性較高，但間接排放也較高。"
          },
          {
            id: "ia_indirect_transport",
            label: "員工多以大眾運輸通勤",
            kg: 26,
            pros: "間接排放較低。",
            cons: "班表彈性較受限制。",
            result: "你的安排較能降低通勤造成的排放。"
          },
          {
            id: "ia_indirect_customer",
            label: "鼓勵內用與集中取餐",
            kg: 18,
            pros: "可降低部分顧客與營運的額外排放。",
            cons: "需要額外溝通與動線安排。",
            result: "你的安排更重視整體流程中的間接排放控制。"
          }
        ]
      }
    ]
  },

  delivery: {
    title: "情境：我想看一筆外送訂單會發生哪些事",
    desc: "你接到一筆外送咖啡訂單，請看見配送與包材額外增加的碳排。",
    resultLabel: "這筆外送訂單的經營結果",
    steps: [
      {
        key: "原料",
        question: "今天這筆外送訂單要使用哪種咖啡基底？",
        options: [
          {
            id: "de_bean_classic",
            label: "平衡型拼配豆",
            kg: 56,
            pros: "穩定、適合大量出杯。",
            cons: "特色感較普通。",
            result: "你的外送咖啡風味穩定，適合大眾市場。"
          },
          {
            id: "de_bean_dark",
            label: "深焙濃厚型豆",
            kg: 72,
            pros: "配送後風味仍較有存在感。",
            cons: "口感較重，不一定每位顧客都喜歡。",
            result: "你的外送咖啡偏濃厚，配送後仍有存在感。"
          },
          {
            id: "de_bean_light",
            label: "較輕盈的中焙豆",
            kg: 50,
            pros: "口感較清爽。",
            cons: "配送後風味辨識度可能降低。",
            result: "你的外送咖啡偏清爽，但存在感可能較弱。"
          }
        ]
      },
      {
        key: "運輸",
        question: "今天原料供應與外送距離怎麼安排？",
        options: [
          {
            id: "de_transport_far",
            label: "原料遠距供應＋配送範圍大",
            kg: 110,
            pros: "選擇多，顧客範圍廣。",
            cons: "運輸與配送排放都偏高。",
            result: "你的外送範圍廣，但整體物流排放高。"
          },
          {
            id: "de_transport_mid",
            label: "區域供應＋中距離配送",
            kg: 72,
            pros: "穩定與排放較平衡。",
            cons: "範圍與彈性普通。",
            result: "你的外送模式屬於較務實的平衡方案。"
          },
          {
            id: "de_transport_local",
            label: "在地供應＋近距離配送",
            kg: 38,
            pros: "排放較低，管理較單純。",
            cons: "服務範圍較小。",
            result: "你的外送模式更偏向低碳與效率優化。"
          }
        ]
      },
      {
        key: "製作",
        question: "今天門市怎麼處理外送出杯流程？",
        options: [
          {
            id: "de_make_fastline",
            label: "高效率設備＋集中出杯",
            kg: 48,
            pros: "效率高，品質較穩定。",
            cons: "前期設備投入較高。",
            result: "你的外送出杯效率高，流程更穩定。"
          },
          {
            id: "de_make_standard",
            label: "一般設備，依單製作",
            kg: 75,
            pros: "操作單純，成本中等。",
            cons: "效率普通。",
            result: "你的外送製作流程屬於中間型方案。"
          },
          {
            id: "de_make_old",
            label: "舊設備＋分散出杯",
            kg: 105,
            pros: "短期不增加成本。",
            cons: "耗能較高，流程較亂。",
            result: "你的外送流程容易增加耗能與管理壓力。"
          }
        ]
      },
      {
        key: "銷售",
        question: "今天這筆外送訂單要用哪一種包材？",
        options: [
          {
            id: "de_sale_basic",
            label: "紙杯＋塑膠杯蓋＋提袋",
            kg: 68,
            pros: "常見、顧客熟悉。",
            cons: "一次性包材偏多。",
            result: "你的外送包材方便，但排放也增加。"
          },
          {
            id: "de_sale_extra",
            label: "加上封膜、吸管、雙層包裝",
            kg: 92,
            pros: "外送穩定性較高。",
            cons: "包材最多，排放也最高。",
            result: "你的外送保護較完整，但包材排放更高。"
          },
          {
            id: "de_sale_reduce",
            label: "精簡包材與不主動提供吸管",
            kg: 34,
            pros: "包材較少，永續形象較好。",
            cons: "需要顧客理解與配合。",
            result: "你的外送方式更接近減量包裝策略。"
          }
        ]
      },
      {
        key: "間接碳排",
        question: "今天外送訂單帶來哪些額外間接排放？",
        options: [
          {
            id: "de_indirect_many",
            label: "高峰時段多單配送",
            kg: 65,
            pros: "營收機會高。",
            cons: "配送混亂時容易增加額外耗損與排放。",
            result: "你的外送接單量高，但間接排放與風險也變高。"
          },
          {
            id: "de_indirect_control",
            label: "控制接單範圍與尖峰量",
            kg: 36,
            pros: "較能控制外送品質與排放。",
            cons: "可能少接部分訂單。",
            result: "你的外送策略比較重視品質與排放控制。"
          },
          {
            id: "de_indirect_schedule",
            label: "集中時段與固定配送策略",
            kg: 24,
            pros: "較能降低部分間接排放。",
            cons: "營運安排較複雜。",
            result: "你的外送策略更偏向整體流程優化。"
          }
        ]
      }
    ]
  }
};

let currentScenarioKey = null;
let currentPlanStep = 1;
let currentPlanSelections = {};

function chooseScenario(key) {
  const data = planScenarioData[key];
  if (!data) return;

  currentScenarioKey = key;
  currentPlanStep = 1;
  currentPlanSelections = {};

  const selector = document.getElementById("scenarioSelectorCard");
  const scenarioCard = document.getElementById("planScenarioCard");
  const title = document.getElementById("planScenarioTitle");
  const desc = document.getElementById("planScenarioDesc");
  const result = document.getElementById("planResultPage");

  if (selector) selector.style.display = "none";
  if (scenarioCard) scenarioCard.style.display = "block";
  if (title) title.textContent = data.title;
  if (desc) desc.textContent = data.desc;
  if (result) {
    result.style.display = "none";
    result.innerHTML = "";
    result.className = "summary-box";
  }

  renderPlanStep();
}

function renderPlanStep() {
  const data = planScenarioData[currentScenarioKey];
  if (!data) return;

  const stepData = data.steps[currentPlanStep - 1];
  if (!stepData) return;

  const stepCounter = document.getElementById("planStepCounter");
  const stepCard = document.getElementById("planStepCard");
  const selectionSummary = document.getElementById("planSelectionSummary");
  const resultPage = document.getElementById("planResultPage");
  const backBtn = document.getElementById("planBackBtn");
  const nextBtn = document.getElementById("planNextBtn");

  if (stepCounter) stepCounter.textContent = `步驟 ${currentPlanStep} / ${data.steps.length}`;
  if (resultPage) {
    resultPage.style.display = "none";
    resultPage.innerHTML = "";
    resultPage.className = "summary-box";
  }

  const selectedOptionId = currentPlanSelections[currentPlanStep];
  const selectedOption = stepData.options.find(opt => opt.id === selectedOptionId);

  if (stepCard) {
    stepCard.innerHTML = `
      <strong>${stepData.key}</strong><br><br>
      ${stepData.question}
      <div style="height:16px"></div>
      <div class="choice-list">
        ${stepData.options.map(opt => `
          <button class="choice-btn ${selectedOptionId === opt.id ? "selected-choice" : ""}" onclick="selectPlanChoice('${opt.id}')">
            ${opt.label}
          </button>
        `).join("")}
      </div>
    `;
  }

  if (selectionSummary) {
    if (selectedOption) {
      selectionSummary.innerHTML = `
        已選擇：${selectedOption.label}<br>
        優點：${selectedOption.pros}<br>
        缺點：${selectedOption.cons}
      `;
    } else {
      selectionSummary.innerHTML = "尚未選擇";
    }
  }

  if (backBtn) {
    backBtn.style.display = currentPlanStep > 1 ? "inline-flex" : "none";
  }

  if (nextBtn) {
    nextBtn.style.display = selectedOption ? "inline-flex" : "none";
    nextBtn.textContent = currentPlanStep === data.steps.length ? "查看結果" : "下一步";
  }
}

function selectPlanChoice(optionId) {
  currentPlanSelections[currentPlanStep] = optionId;
  renderPlanStep();
}

function goNextPlanStep() {
  const data = planScenarioData[currentScenarioKey];
  if (!data) return;

  if (!currentPlanSelections[currentPlanStep]) return;

  if (currentPlanStep < data.steps.length) {
    currentPlanStep += 1;
    renderPlanStep();
  } else {
    calculateScenarioResult();
  }
}

function goPrevPlanStep() {
  if (currentPlanStep > 1) {
    currentPlanStep -= 1;
    renderPlanStep();
  }
}

function getEmissionLevelInfo(totalKg) {
  if (totalKg <= 220) {
    return {
      level: "低",
      className: "emission-low",
      text: "你的整體選擇較偏向低碳經營，代表你有意識地控制了多個流程中的排放。"
    };
  } else if (totalKg <= 360) {
    return {
      level: "中",
      className: "emission-medium",
      text: "你的整體選擇屬於平衡型，兼顧品質、便利與部分排放控制。"
    };
  } else {
    return {
      level: "高",
      className: "emission-high",
      text: "你的整體選擇較偏向高排放模式，雖然可能更方便或更穩定，但長期成本壓力也會比較高。"
    };
  }
}

function calculateScenarioResult() {
  const data = planScenarioData[currentScenarioKey];
  if (!data) return;

  let totalKg = 0;
  let pros = [];
  let cons = [];
  let outcome = [];

  data.steps.forEach((step, index) => {
    const selectedId = currentPlanSelections[index + 1];
    const selected = step.options.find(opt => opt.id === selectedId);
    if (selected) {
      totalKg += selected.kg;
      pros.push(`• ${step.key}｜${selected.label}：${selected.pros}`);
      cons.push(`• ${step.key}｜${selected.label}：${selected.cons}`);
      outcome.push(`• ${step.key}：${selected.result}`);
    }
  });

  const cost = kgToCarbonCost(totalKg);
  const levelInfo = getEmissionLevelInfo(totalKg);

  const stepCard = document.getElementById("planStepCard");
  const resultPage = document.getElementById("planResultPage");
  const selectionSummary = document.getElementById("planSelectionSummary");
  const nextBtn = document.getElementById("planNextBtn");

  if (stepCard) {
    stepCard.innerHTML = `<strong>${data.resultLabel}</strong><br><br>你已完成這個情境的 5 個步驟。`;
  }

  if (selectionSummary) {
    selectionSummary.innerHTML = "你可以重新開始，或返回選擇其他情境。";
  }

  if (resultPage) {
    resultPage.style.display = "block";
    resultPage.className = `summary-box ${levelInfo.className}`;
    resultPage.innerHTML = `
      <strong>${data.resultLabel}</strong><br><br>
      <strong>排放等級：</strong> ${levelInfo.level}<br>
      <strong>模擬排放量：</strong> ${totalKg} kg CO2e<br>
      <strong>模擬碳成本：</strong> NT$ ${cost}<br><br>

      <strong>這次會發生哪些事</strong><br>
      ${outcome.join("<br>")}<br><br>

      <strong>優點</strong><br>
      ${pros.join("<br>")}<br><br>

      <strong>缺點</strong><br>
      ${cons.join("<br>")}<br><br>

      <strong>管理提醒</strong><br>
      ${levelInfo.text}
    `;
  }

  if (nextBtn) nextBtn.style.display = "none";

  const p = getProgress();
  p.quizDone = true;
  p.quizScore = levelInfo.level === "低" ? 3 : levelInfo.level === "中" ? 2 : 1;
  saveProgress(p);
  updateGlobalProgress();
}

function resetPlanScenario() {
  if (!currentScenarioKey) return;
  currentPlanStep = 1;
  currentPlanSelections = {};
  renderPlanStep();

  const p = getProgress();
  p.quizDone = false;
  p.quizScore = 0;
  saveProgress(p);
  updateGlobalProgress();
}

function backToScenarioSelect() {
  currentScenarioKey = null;
  currentPlanStep = 1;
  currentPlanSelections = {};

  const selector = document.getElementById("scenarioSelectorCard");
  const scenarioCard = document.getElementById("planScenarioCard");
  const result = document.getElementById("planResultPage");

  if (selector) selector.style.display = "block";
  if (scenarioCard) scenarioCard.style.display = "none";
  if (result) {
    result.style.display = "none";
    result.innerHTML = "";
    result.className = "summary-box";
  }
}
