const ATTACHMENTS =  Object.freeze({
  optic: [
    "",
    "5XGZH-JLU91-1",
    "8E7Z8-TX9D1-1",
    "AUXYZ-48NH1-1",
    "DBNYQ-DJ3L1-1",
    "FSEYG-MUHQ1-1",
    "I95Y7-X5WU1-1",
    "KPVXY-7GBY1-1",
    "N6LXP-GRR31-1",
    "QMCXF-R3671-1",
    "T43X7-1DKB1-1",
    "VJTWX-ANZF1-1",
    "Y1JWN-JZEJ1-1",
    "21HAW-EUATN-11",
    "23Y1W-64L8S-11",
    "26ERV-WDWMW-11",
    "28VHV-MN831-11",
    "2BC8V-DXIH5-11",
    "2DSYV-57TW9-11",
    "2G9PU-VH5BD-11",
    "2IQFU-LRFQH-11",
    "2L76U-D1R5L-11",
    "2NMWU-4B2JQ-11",
    "2R4MT-UKCYU-11",
    "2TKDT-KUNDY-11",
    "2W24T-C4YT3-11",
    "2YHUT-3EA87-11",
    "31YKS-TNKMB-11"
  ],
  muzzle: [
    "",
    "2KD5Y-11",
    "45QAW-11",
    "5Q3FU-11",
    "7AFKS-11",
    "8USQQ-11",
    "AF5VN-11",
    "BZI1L-11"
  ],
  barrel: [
    "",
    "H11",
    "Q11",
    "Y11",
    "2711",
    "2F11",
    "2N11",
    "2W11",
    "3511",
    "3D11"
  ],
  underbarrel: [
    "",
    "2E9ZS-TS11",
    "3SIZK-MJ11",
    "56SZD-GB11",
    "6K2Z6-A311",
    "7YBYY-3U11",
    "9CKYQ-WL11",
    "AQUYI-QD11"
  ],
  launchers: [
    "",
    "AA942-62863-11",
    "JJH73-B3FB5-11",
    "TTQA4-G4MG7-11",
    "243YD-5L5UL-911",
    "2DD7G-6R72R-B11"
  ],
  magazine: [
    "",
    "2S911",
    "4JH11",
    "6BQ11",
    "83Y11",
    "9V711",
    "BMF11",
    "DEN11"
  ],
  rearGrip: [
    "",
    "6WVQL-H11",
    "9VBKW-Q11",
    "CTRG7-Y11",
    "FS7BI-711",
    "IQM6T-F11",
    "LP324-N11",
    "PMHWE-W11",
    "SKXRQ-511",
    "VJDM1-D11",
    "YHTHB-L11"
  ],
  stock: [
    "",
    "4S11",
    "8J11",
    "CB11",
    "G311",
    "JU11",
    "NL11",
    "SD11",
    "W511",
    "ZW11"
  ],
  laser: [
    "",
    "3LYXL-H9Y11",
    "68XV7-YIW11",
    "8UWST-FSU11",
    "BGVQE-X2S11",
    "E3UN1-EBQ11",
    "GPTKL-VKN11",
    "JBSI8-CUL11",
    "LXRFT-U4J11",
    "PJQDF-BDH11"
  ],
  fireMod: [
    "",
    "131",
    "151",
    "171"
  ],
  ammoMod: [
    "",
    "21WSG-FBYJX-2J11",
    "2JD6P-5HFUD-KB11",
    "32TJW-UMX4U-4311",
    "3K9Y5-JTEEA-LU11",
    "43QCD-9YVNR-5L11"
  ],
  special: [
    "",
    "UCS11",
    "2NPJ1-1"
  ],
  apex:[
    "",
    "311",
    "411",
    "511"
  ]
});

function buildSelect(id, values) {
  const select = document.getElementById(id);
  if (!select) return;

  select.innerHTML = "";
  values.forEach((value, i) => {
    const opt = document.createElement("option");
    opt.value = value;
    opt.textContent = value;
    if (i === 0) opt.selected = true; // erste Option = leer / default
    select.appendChild(opt);
  });
}

for (const [key, values] of Object.entries(ATTACHMENTS)) {
buildSelect(key, values);
}