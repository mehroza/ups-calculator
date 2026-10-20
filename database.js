// --- EQUIPMENT DATABASE ---
const equipmentData = {
    "Switch": [
        { name: "Cisco Catalyst WS-C2960X-24PD-L", watts: 470 },
        { name: "Cisco Catalyst WS-C2960X-24PS-L", watts: 470 },
        { name: "Cisco Catalyst WS-C2960X-48FPD-L", watts: 890 },
        { name: "Cisco Catalyst WS-C2960X-48FPS-L", watts: 890 },
        { name: "Cisco Catalyst C9300-48P", watts: 715 },
        { name: "Cisco Catalyst C9200L-24P- 4G", watts: 466 },
        { name: "Cisco Catalyst C9200L-48P- 4G", watts: 740 },
        { name: "Cisco Catalyst C9200L-24P- 4X", watts: 466 },
        { name: "Cisco Catalyst C9200L-48P- 4X", watts: 740 },
        { name: "Cisco Smart CBS350-16FP-2G", watts: 279 },
        { name: "Cisco Smart CBS350-24P-4G", watts: 236 },
        { name: "Cisco Smart CBS350-48P-4G", watts: 445 },
        { name: "Cisco Smart CBS350-24FP-4G", watts: 438 },
        { name: "Cisco Smart CBS350-48FP-4G", watts: 859 },
        { name: "Cisco Smart CBS350-24P-4X", watts: 236 },
        { name: "Cisco Smart CBS350-24FP-4X", watts: 437 },
        { name: "Cisco Catalyst C1300-24P-4G", watts: 230 },
        { name: "Cisco Catalyst C1300-48P-4G", watts: 437 },
        { name: "Cisco Catalyst C1300-24FP-4G", watts: 436 },
        { name: "Cisco Catalyst C1300-48FP-4G", watts: 819 },
        { name: "Cisco Catalyst C1200-24P-4G", watts: 230 },
        { name: "Cisco Catalyst C1200-48P-4G", watts: 437 },
        { name: "Cisco Catalyst C1200-24FP-4G", watts: 429 },
        { name: "Cisco Smart SG300-28PP", watts: 213 },
        { name: "Cisco Smart SG200-26P", watts: 137 },
        { name: "Cisco Smart SG200-50FP", watts: 430 },
        { name: "Cisco Smart SG220-26P", watts: 200 },
        { name: "Cisco Smart SF220-48P", watts: 405 },
        { name: "Cisco Smart SG350-28P", watts: 195 },
        { name: "Cisco Smart SF220-24P", watts: 188 },
        { name: "Hikvision DS-3E1552P-SI", watts: 500 },
        { name: "Cisco Smart SG220-50P", watts: 427 }
    ],
    "Router": [
        { name: "Cisco 881", watts: 60 },
        { name: "Cisco 1921", watts: 70 },
        { name: "Cisco ISR 921/31", watts: 30 },
        { name: "Cisco 4431/4331", watts: 150 },
        { name: "Cisco C1121-4P", watts: 66 }
    ],
    "Server": [
        { name: "Dell PowerEdge R210 II", watts: 250 },
        { name: "Dell PowerEdge R710", watts: 570 },
        { name: "Dell PowerEdge T410", watts: 525 },
        { name: "Dell PowerEdge R730", watts: 750 },
        { name: "HP ProLiant DL380 Gen 9", watts: 800 },
        { name: "HP ProLiant DL380 Gen 10", watts: 800 },
        { name: "HP ProLiant DL380 Gen 7", watts: 572 },
        { name: "HP ProLiant DL360 Gen 9", watts: 404 },
        { name: "HP ProLiant DL360 Gen 7", watts: 437 },
        { name: "HP ProLiant DL320e Gen 8", watts: 350 },
        { name: "HP ProLiant DL160 Gen 6", watts: 387 },
        { name: "HP ProLiant DL180 Gen 6", watts: 673 },
        { name: "HP ProLiant DL380p Gen 8", watts: 752 }
    ],
    "Firewall": [
        { name: "FortiGate 80F", watts: 15.4 },
        { name: "FortiGate 91G", watts: 23.5 },
        { name: "FortiGate 100E", watts: 28.6 },
        { name: "FortiGate 101E", watts: 33.8 },
        { name: "FortiGate 200D", watts: 83 },
        { name: "FortiGate 200E", watts: 110 },
        { name: "FortiGate 200F", watts: 204 },
        { name: "FortiGate 301E", watts: 108 }
    ],
    "NVR": [
        { name: "Hikvision DS-7604NI-E1", watts: 10 },
        { name: "Hikvision DS-7616NI-K2/16P", watts: 15 },
        { name: "Hikvision DS-7716NI-E4", watts: 20 },
        { name: "Hikvision DS-7716NI-E4/16P", watts: 20 },
        { name: "Hikvision DS-7716NI-I4", watts: 20 },
        { name: "Hikvision DS-7716NI-I4(B)", watts: 20 },
        { name: "Hikvision DS-7732NI-E4", watts: 20 },
        { name: "Hikvision DS-9632NI-I8", watts: 30 },
        { name: "Hikvision DS-9632NI-I16", watts: 45 },
        { name: "Hikvision DS-9664NI-I16", watts: 45 },
        { name: "Hikvision DS-96064NI-I16", watts: 140 },
        { name: "Hikvision DS-96128NI-E24", watts: 140 },
        { name: "Hikvision DS-96128NI-I24/H", watts: 140 }
    ],
    "NVR Hard Disk": [
        { name: "WD Purple (8TB: 5.3 W)", watts: 5.3 },
        { name: "WD Purple (6TB: 4.7 W)", watts: 4.7 },
        { name: "WD Purple (4TB: 4.6 W)", watts: 4.6 },
        { name: "WD Purple (10TB: 9.1 W)", watts: 9.1 }
    ],
    "Storage": [
        { name: "Generic Storage Array (SAN/NAS)", watts: 300 }
    ]
};

// --- UPS DATABASE ---
const upsDatabase = [
    { id: "SMT1000IC", name: "APC Smart-UPS 1kVA Tower (SMT1000IC)", maxWatts: 700, link: "https://www.se.com/sa/en/products-runtime-graph/SMT1000IC/apc-smartups-line-interactive-1000va-tower-230v-8x-iec-c13-outlets-smartconnect-port+smartslot-avr-lcd/", curve: [[100, 6000], [150, 3840], [200, 2700], [250, 1920], [300, 1485], [350, 1143], [400, 898], [450, 720], [500, 589], [700, 349]], supportsExtra: false },
    { id: "SMT1000RMI2UC", name: "APC Smart-UPS 1kVA Rackmount 2U (SMT1000RMI2UC)", maxWatts: 700, link: "https://www.se.com/sa/en/products-runtime-graph/SMT1000RMI2UC/apc-smartups-line-interactive-1000va-rackmount-2u-230v-4x-iec-c13-outlets-smartconnect-port+smartslot-avr-lcd/", curve: [[100, 9300], [200, 4200], [300, 2340], [400, 1504], [500, 1004], [600, 705], [700, 522]], supportsExtra: false },
    { id: "SMT1500IC", name: "APC Smart-UPS 1.5kVA Tower (SMT1500IC)", maxWatts: 1000, link: "https://www.se.com/sa/en/products-runtime-graph/SMT1500IC/apc-smartups-line-interactive-1500va-tower-230v-8x-iec-c13-outlets-smartconnect-port+smartslot-avr-lcd/", curve: [[100, 10320], [200, 5040], [300, 3000], [400, 1980], [500, 1384], [600, 998], [700, 743]], supportsExtra: false },
    { id: "SMT1500RMI2UC", name: "APC Smart-UPS 1.5kVA Rackmount 2U (SMT1500RMI2UC)", maxWatts: 1000, link: "https://www.se.com/sa/en/products-runtime-graph/SMT1500RMI2UC/apc-smartups-line-interactive-1500va-rackmount-2u-230v-4x-iec-c13-outlets-smartconnect-port+smartslot-avr-lcd/", curve: [[100, 8400], [200, 4020], [300, 2520], [400, 1765], [500, 1311], [600, 1013], [700, 803]], supportsExtra: false },
    { id: "SMT2200RMI2UC", name: "APC Smart-UPS 2.2kVA Rackmount 2U (SMT2200RMI2UC)", maxWatts: 1980, link: "https://www.se.com/sa/en/products-runtime-graph/SMT2200RMI2UC/apc-smartups-line-interactive-2200va-rackmount-2u-230v-8x-iec-c13+2x-iec-c19-outlets-smartconnect-port+smartslot-avr-lcd/", curve: [[198, 5580], [200, 5520], [400, 2760], [600, 1791], [800, 1269], [1000, 953], [1200, 742]], supportsExtra: false },
    { id: "SMT3000RMI2UC", name: "APC Smart-UPS 3kVA Rackmount 2U (SMT3000RMI2UC)", maxWatts: 2700, link: "https://www.se.com/sa/en/products-runtime-graph/SMT3000RMI2UC/apc-smartups-line-interactive-3kva-rackmount-2u-230v-8x-iec-c13+1x-iec-c19-outlets-smartconnect-port+smartslot-avr-lcd/", curve: [[270, 4320], [500, 2280], [1000, 1036], [1500, 588], [2000, 364], [2500, 231], [2700, 191]], supportsExtra: false },
    
    // SRT Models (Support Extra Battery)
    { id: "SRT1000XLI", name: "APC Smart-UPS On-Line 1kVA Tower (SRT1000XLI)", maxWatts: 1000, link: "https://www.se.com/sa/en/products-runtime-graph/SRT1000XLI/apc-smartups-online-1000va-1000w-tower-230v-6x-c13-iec-outlets-smartslot-extended-runtime-w-o-rail-kit/", curve: [[100, 7200], [200, 3540], [300, 2280], [400, 1653], [500, 1268], [600, 1012], [700, 830]], supportsExtra: true, curveExtra: [[100, 24360], [200, 12240], [300, 8040], [400, 5880], [500, 4620], [600, 3780]] },
    { id: "SRT1500XLI", name: "APC Smart-UPS On-Line 1.5kVA Tower (SRT1500XLI)", maxWatts: 1500, link: "https://www.se.com/sa/en/products-runtime-graph/SRT1500XLI/apc-smartups-online-1500va-1500w-tower-230v-6x-c13-iec-outlets-smartslot-extended-runtime-w-o-rail-kit/", curve: [[150, 5040], [200, 3780], [300, 2460], [400, 1800], [500, 1403], [600, 1128], [700, 931]], supportsExtra: true, curveExtra: [[150, 17160], [200, 13020], [300, 8640], [400, 6420], [500, 5040], [600, 4140]] },
    { id: "SRT2200XLI", name: "APC Smart-UPS On-Line 2.2kVA Tower (SRT2200XLI)", maxWatts: 1980, link: "https://www.se.com/sa/en/products-runtime-graph/SRT2200XLI/apc-smartups-online-2200va-tower-230v-8x-c13+2x-c19-iec-outlets-smartslot-extended-runtime-w-o-rail-kit/", curve: [[198, 4320], [200, 4260], [400, 2040], [600, 1306], [800, 918], [1000, 686], [1200, 532]], supportsExtra: true, curveExtra: [[198, 14760], [200, 14580], [400, 7260], [600, 4740], [800, 3420], [1000, 2700]] },
    { id: "SRT3000XLI", name: "APC Smart-UPS On-Line 3kVA Tower (SRT3000XLI)", maxWatts: 2700, link: "https://www.se.com/sa/en/products-runtime-graph/SRT3000XLI/apc-smartups-online-3kva-tower-230v-8x-c13+2x-c19-iec-outlets-smartslot-extended-runtime-w-o-rail-kit/", curve: [[270, 4440], [500, 2280], [1000, 1043], [1500, 613], [2000, 401], [2500, 275], [2700, 238]], supportsExtra: true, curveExtra: [[270, 15180], [500, 8160], [1000, 3840], [1500, 2460], [2000, 1766], [2500, 1350]] },
    { id: "SRT5KXLI", name: "APC Smart-UPS On-Line 5kVA Tower (SRT5000XLI)", maxWatts: 4500, link: "https://www.se.com/sa/en/products-runtime-graph/SRT5KXLI/apc-smartups-online-5kva-tower-230v-6x-c13+4x-c19-iec-outlets-network-card+smartslot-extended-runtime-w-o-rail-kit/", curve: [[450, 4260], [500, 3840], [1000, 1860], [1500, 1177], [2000, 823], [2500, 611], [3000, 470], [3500, 370]], supportsExtra: true, curveExtra: [[450, 14700], [500, 13320], [1000, 6660], [1500, 4320], [2000, 3120], [2500, 2460]] },
    { id: "SRT6KXLI", name: "APC Smart-UPS On-Line 6kVA Tower (SRT6KXLI)", maxWatts: 6000, link: "https://www.se.com/sa/en/products-runtime-graph/SRT6KXLI/apc-smartups-online-6kva-6kw-tower-230v-6x-c13+4x-c19-iec-outlets-network-card+smartslot-extended-runtime-w-o-rail-kit/", curve: [[600, 3480], [1000, 2040], [1500, 1282], [2000, 900], [2500, 671], [3000, 520]], supportsExtra: true, curveExtra: [[600, 12060], [1000, 7200], [1500, 4680], [2000, 3360], [2500, 2640], [3000, 2160]] },
    { id: "SRT1000RMXLI", name: "APC Smart-UPS On-Line 1kVA Rackmount (SRT1000RMXLI)", maxWatts: 1000, link: "https://www.se.com/sa/en/products-runtime-graph/SRT1000RMXLI/apc-smartups-online-1000va-1000w-rackmount-2u-230v-6x-c13-iec-outlets-smartslot-extended-runtime-w-rail-kit/", curve: [[100, 7200], [200, 3540], [300, 2280], [400, 1653], [500, 1268], [600, 1012], [700, 830]], supportsExtra: true, curveExtra: [[100, 24360], [200, 12240], [300, 8040], [400, 5880], [500, 4620], [600, 3780]] },
    { id: "SRT1500RMXLI", name: "APC Smart-UPS On-Line 1.5kVA Rackmount (SRT1500RMXLI)", maxWatts: 1500, link: "https://www.se.com/sa/en/products-runtime-graph/SRT1500RMXLI/apc-smartups-online-1500va-1500w-rackmount-2u-230v-6x-c13-iec-outlets-smartslot-extended-runtime-w-rail-kit/", curve: [[150, 5040], [200, 3780], [300, 2460], [400, 1800], [500, 1403], [600, 1128], [700, 931]], supportsExtra: true, curveExtra: [[150, 17160], [200, 13020], [300, 8640], [400, 6420], [500, 5040], [600, 4140]] },
    { id: "SRT2200RMXLI", name: "APC Smart-UPS On-Line 2.2kVA Rackmount (SRT2200RMXLI)", maxWatts: 1980, link: "https://www.se.com/sa/en/products-runtime-graph/SRT2200RMXLI/apc-smartups-online-2200va-rackmount-2u-230v-8x-c13+2x-c19-iec-outlets-smartslot-extended-runtime-w-rail-kit/", curve: [[198, 4320], [200, 4260], [400, 2040], [600, 1306], [800, 918], [1000, 686], [1200, 532], [1400, 423]], supportsExtra: true, curveExtra: [[198, 14760], [200, 14580], [400, 7260], [600, 4740], [800, 3420], [1000, 2700]] },
    { id: "SRT3000RMXLI", name: "APC Smart-UPS On-Line 3kVA Rackmount (SRT3000RMXLI)", maxWatts: 2700, link: "https://www.se.com/sa/en/products-runtime-graph/SRT3000RMXLI/apc-smartups-online-3kva-rackmount-2u-230v-8x-c13+2x-c19-iec-outlets-smartslot-extended-runtime-w-rail-kit/", curve: [[270, 4440], [500, 2280], [1000, 1043], [1500, 613], [2000, 401], [2500, 275], [2700, 238]], supportsExtra: true, curveExtra: [[270, 15180], [500, 8160], [1000, 3840], [1500, 2460], [2000, 1766], [2500, 1350]] },
    { id: "SRT5KRMXLI", name: "APC Smart-UPS On-Line 5kVA Rackmount 3U (SRT5000RMXLI)", maxWatts: 4500, link: "https://www.se.com/sa/en/products-runtime-graph/SRT5KRMXLI/apc-smartups-online-5kva-rackmount-3u-230v-6x-c13+4x-c19-iec-outlets-network-card+smartslot-extended-runtime-w-rail-kit/", curve: [[450, 4260], [500, 3840], [1000, 1860], [1500, 1177], [2000, 823], [2500, 611], [3000, 470], [3500, 370]], supportsExtra: true, curveExtra: [[450, 14700], [500, 13320], [1000, 6660], [1500, 4320], [2000, 3120], [2500, 2460]] },
    { id: "SRT6KRMXLI", name: "APC Smart-UPS On-Line 6kVA Rackmount (SRT6KRMXLI)", maxWatts: 6000, link: "https://www.se.com/sa/en/products-runtime-graph/SRT6KRMXLI/apc-smartups-online-6kva-6kw-rackmount-4u-230v-6x-c13+4x-c19-iec-outlets-network-card+smartslot-extended-runtime-w-rail-kit/", curve: [[600, 3480], [1000, 2040], [1500, 1282], [2000, 900], [2500, 671], [3000, 520]], supportsExtra: true, curveExtra: [[600, 12060], [1000, 7200], [1500, 4680], [2000, 3360], [2500, 2640], [3000, 2160]] },
    
    // Legacy Model
    { id: "SUA5000RMI5U", name: "APC Smart-UPS 5kVA Rackmount/Tower (SUA5000RMI5U)", maxWatts: 4000, link: "https://www.se.com/sa/en/products-runtime-graph/SUA5000RMI5U/apc-smartups-5000va-230v-rackmount-tower/", curve: [[400, 10320], [500, 8220], [1000, 3780], [1500, 2280], [2000, 1600], [2500, 1175], [3000, 898], [3500, 704]], supportsExtra: false }
];
