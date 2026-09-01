let resultText =  document.getElementById('result');
let optic = document.getElementById('optic');
let muzzle = document.getElementById('muzzle');   
let barrel = document.getElementById('barrel');
let underbarrel = document.getElementById('underbarrel'); 
let launchers = document.getElementById('launchers');
let magazine = document.getElementById('magazine');
let rearGrip = document.getElementById('rearGrip');
let stock = document.getElementById('stock');
let laser = document.getElementById('laser');
let fireMod = document.getElementById('fireMod');
let ammoMod = document.getElementById('ammoMod');
let apex = document.getElementById('apex');
let special = document.getElementById('special');  

function reset(){
        optic.value = "";
        muzzle.value = "";
        barrel.value = "";
        underbarrel.value = "";
        launchers.value = "";
        magazine.value = "";
        rearGrip.value = "";
        stock.value = "";
        laser.value = "";
        if (fireMod) fireMod.value = "";
        ammoMod.value = "";
        if(apex) apex.value = "";
        special.value = "";  
        resultText.innerText = "";
        };
 
const weaponMap = {
  assaultRifle,
  submachinegun,
  shotgun,
  lightmachinegun,
  marksmanRifle,
  sniper,
  pistol,
  specialW
};
 
function categorymap(categorySelect){
 const weapon = document.getElementById('weapon');
 weapon.innerHTML = "";
  const selectedCategory = weaponMap[categorySelect.value];
  if (!selectedCategory) return;

  //get options
  Object.entries(selectedCategory).forEach(([name, code]) => {
    const opt = document.createElement("option");
    opt.value = code;     
    opt.textContent = name; 
    weapon.appendChild(opt);
  });
 if (weapon.options.length > 0) 
     weapon.selectedIndex = 0;
 
    calculate();
}
 
function customAddMultiple(...inputs) {
    if (inputs.length === 0) return '';

    const charset = "123456789ABCDEFGHIJKLMNPQRSTUVWXYZ"; // Base34 without O
    const baseValue = charset.length;

    const charToIndex = {};
    const indexToChar = {};

    for (let i = 0; i < charset.length; i++) {
        charToIndex[charset[i]] = i;
        indexToChar[i] = charset[i];
    }
    charToIndex['1'] = 0; // 1 = 0

    const maxLength = Math.max(...inputs.map(s => s.length));
    const padded = inputs.map(s => s.padStart(maxLength, '1'));

    let carry = 0;
    let result = '';

    for (let i = maxLength - 1; i >= 0; i--) {
        let sum = carry;
        for (const str of padded) {
            sum += charToIndex[str[i]] || 0; // Treat empty or invalid chars as 0
        }
        const digit = sum % baseValue;
        carry = Math.floor(sum / baseValue);
        result = indexToChar[digit] + result;
    }

    while (carry > 0) {
        const digit = carry % baseValue;
        carry = Math.floor(carry / baseValue);
        result = indexToChar[digit] + result;
    }

    return result;
}
let weaponvalue = "";
function calculate() {
    weaponvalue = document.getElementById('weapon').value;
    const values = [
        optic.value,
        muzzle.value,
        barrel.value,
        underbarrel.value,
        launchers.value,
        magazine.value,
        rearGrip.value,
        stock.value,
        laser.value,
        fireMod ? fireMod.value : "",
        ammoMod.value,
        apex ? apex.value : "",
        special.value     
    ];
     for (let i = 0; i < values.length; i++) {
        values[i] = values[i].replace(/-/g, '');
    }
    const hasAttachment = values.some(v => v.length > 0);
    if (!weaponvalue || !hasAttachment) {
        resultText.innerText = ""; // clear result if not ready
        return;
    }
      
    const result = customAddMultiple(...values);
   resultText.innerText = "Result: " + weaponvalue + "-" + result.match(/.{1,5}/g).join('-');
}
window.addEventListener('pageshow', () => {
    const category = document.getElementById('category');
    categorymap(category);
 });