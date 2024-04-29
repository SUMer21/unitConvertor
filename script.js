/* This is project made to convert different units i.e mks to cgs to SI systems .
 some major conversions involved are :
 1. length 
 2. temperature 
 3. volume 
 4. weight
 5. time */
/* 1. length parameter : 

From/To	Meter (m)	Kilometer (km)	Centimeter (cm)	Decameter (dam)	Yard (yd)	Foot (ft)	Inch (in)	Mile (mi)	Millimeter (mm)	Nanometer (nm)	Micrometer (μm)
Meter (m)	1	0.001	100	0.1	1.09361	3.28084	39.3701	0.000621371	1000	1e+9	1e+6
Kilometer (km)	1000	1	100000	100	1093.61	3280.84	39370.1	0.621371	1e+6	1e+12	1e+9
Centimeter (cm)	0.01	0.00001	1	0.001	0.0109361	0.0328084	0.393701	6.2137e-6	10	1e+7	1e+4
Decameter (dam)	10	0.01	1000	1	10.9361	32.8084	393.701	0.00621371	10000	1e+10	1e+7
Yard (yd)	0.9144	0.0009144	91.44	0.09144	1	3	36	0.000568182	914.4	9.144e+5	914400
Foot (ft)	0.3048	0.0003048	30.48	0.03048	0.333333	1	12	0.000189394	304.8	3.048e+5	304800
Inch (in)	0.0254	0.0000254	2.54	0.00254	0.0277778	0.0833333	1	1.57828e-5	25.4	25400	25400
Mile (mi)	1609.34	1.60934	160934	160.934	1760	5280	63360	1	1.60934e+6	1.60934e+12	1.60934e+9
Millimeter (mm)	0.001	1e-6	0.1	0.0001	0.0000011	0.00328084	0.0393701	6.2137e-7	1	1000000	1000
Nanometer (nm)	1e-9	1e-12	1e-7	1e-10	1.0936e-9	3.28084e-9	3.93701e-8	6.2137e-13	0.000001	1	0.001
Micrometer (μm)	1e-6	1e-9	0.0001	1e-7	1.0936e-6	3.28084e-6	0.00003937	6.2137e-10 */

 

   

function select1() {
  
    


    var buttons = document.getElementsByClassName('units');
    for (let button of buttons) {
        button.style.color = 'black';
        button.style.backgroundColor = 'white';
    }


    var selectLength = document.getElementById('units1');
    selectLength.style.backgroundColor = '#009900';
    selectLength.style.color = 'white';



    lengthConvert();

}


function select2() {

    var  buttons = document.getElementsByClassName('units');
    for (let button of buttons) {
        button.style.color = 'black';
        button.style.backgroundColor = 'white';
    }
   
    
    
    var selectTemperature = document.getElementById('units2');
    selectTemperature.style.backgroundColor = '#009900';
    selectTemperature.style.color = 'white';


   /* document.getElementById('units2').addEventListener('click', function() {
        document.getElementById('overlay').classList.add('blur-effect');
        setTimeout(function() {
            document.getElementById('overlay').classList.remove('blur-effect');

        },300);
    });*/

    temperatureConvert();
    
}

function select3() {

    var buttons = document.getElementsByClassName('units');
    for (let button of buttons) {
        button.style.color = 'black';
        button.style.backgroundColor = 'white';
    }
   
    
    
    var selectVolume = document.getElementById('units3');
    selectVolume.style.backgroundColor = '#009900';
    selectVolume.style.color = 'white';

    areaConvert();
    
}

function select4() {

    var buttons = document.getElementsByClassName('units');
    for (let button of buttons) {
        button.style.color = 'black';
        button.style.backgroundColor = 'white';
    }
   
    
    
    var selectWeight = document.getElementById('units4');
    selectWeight.style.backgroundColor = '#009900';
    selectWeight.style.color = 'white';


    weightConvert();
    
}


function select5() {

    var buttons = document.getElementsByClassName('units');
    for (let button of buttons) {
        button.style.color = 'black';
        button.style.backgroundColor = 'white';
    }
   
    
    
    var selectTime = document.getElementById('units5');
    selectTime.style.backgroundColor = '#009900';
    selectTime.style.color = 'white';
    
}


function lengthConvert() {
document.getElementById('conversionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let inputValue = parseFloat(document.getElementById('inputValue').value);
    let inputUnit = document.getElementById('inputUnit').value;
    let outputUnit = document.getElementById('outputUnit').value;
    let outputValue = 0;

    if((inputUnit=='meters')&&(outputUnit=='kiloMeters')){
         outputValue = inputValue * (0.001);
    } else if((inputUnit=='meters')&&(outputUnit=='meters')) {
         outputValue = inputValue;
    }else if((inputUnit=='meters')&&(outputUnit=='centiMeters')) {
         outputValue = inputValue * (100);
    }else if((inputUnit=='meters')&&(outputUnit=='milliMeters')) {
         outputValue = inputValue * (1000);
    }else if((inputUnit=='meters')&&(outputUnit=='nanoMeters')) {
     outputValue = inputValue * (1000000000);
    }else if((inputUnit=='meters')&&(outputUnit=='microMeters')) {
         outputValue = inputValue * (1000000);
    }else if((inputUnit=='meters')&&(outputUnit=='miles')) {
         outputValue = inputValue * (0.000621371);
    }else if((inputUnit=='meters')&&(outputUnit=='yard')) {
         outputValue = inputValue * (1.09361);
    }else if((inputUnit=='meters')&&(outputUnit=='foot')) {
         outputValue = inputValue * ( 3.28084);
    }else if((inputUnit=='meters')&&(outputUnit=='inch')) {
         outputValue = inputValue * ( 39.3701);
    }else if((inputUnit=='kiloMeters')&&(outputUnit=='kiloMeters')){
         outputValue = inputValue;
    } else if((inputUnit=='kiloMeters')&&(outputUnit=='meters')) {
         outputValue = inputValue * (1000)
    }else if((inputUnit=='kiloMeters')&&(outputUnit=='centiMeters')) {
         outputValue = inputValue * (100000);
    }else if((inputUnit=='kiloMeters')&&(outputUnit=='milliMeters')) {
         outputValue = inputValue * (1000000);
    }else if((inputUnit=='kiloMeters')&&(outputUnit=='nanoMeters')) {
         outputValue = inputValue * (1000000000000);
    }else if((inputUnit=='kiloMeters')&&(outputUnit=='microMeters')) {
         outputValue = inputValue * (1000000000);
    }else if((inputUnit=='kiloMeters')&&(outputUnit=='miles')) {
         outputValue = inputValue * (0.621371);
    }else if((inputUnit=='kiloMeters')&&(outputUnit=='yard')) {
         outputValue = inputValue * (1093.61);
    }else if((inputUnit=='kiloMeters')&&(outputUnit=='foot')) {
         outputValue = inputValue * (  3280.84);
    }else if((inputUnit=='kiloMeters')&&(outputUnit=='inch')) {
         outputValue = inputValue * ( 39370.1);
    }else  if((inputUnit=='centiMeters')&&(outputUnit=='kiloMeters')){
         outputValue = inputValue * (0.00001);
    } else if((inputUnit=='centiMeters')&&(outputUnit=='meters')) {
         outputValue = inputValue * (0.01);
    }else if((inputUnit=='centiMeters')&&(outputUnit=='centiMeters')) {
         outputValue = inputValue;
    }else if((inputUnit=='centiMeters')&&(outputUnit=='milliMeters')) {
         outputValue = inputValue * (10);
    }else if((inputUnit=='centiMeters')&&(outputUnit=='nanoMeters')) {
         outputValue = inputValue * (10000000);
    }else if((inputUnit=='centiMeters')&&(outputUnit=='microMeters')) {
         outputValue = inputValue * (10000);
    }else if((inputUnit=='centiMeters')&&(outputUnit=='miles')) {
         outputValue = inputValue * (0.00000621371);
    }else if((inputUnit=='centiMeters')&&(outputUnit=='yard')) {
         outputValue = inputValue * (0.0109361);
    }else if((inputUnit=='centiMeters')&&(outputUnit=='foot')) {
         outputValue = inputValue * ( 0.0328084);
    }else if((inputUnit=='centiMeters')&&(outputUnit=='inch')) {
         outputValue = inputValue * (0.393701);
    } else  if((inputUnit=='milliMeters')&&(outputUnit=='kiloMeters')){
         outputValue = inputValue * (0.000001);
    } else if((inputUnit=='milliMeters')&&(outputUnit=='meters')) {
         outputValue = inputValue * (0.001);
    }else if((inputUnit=='milliMeters')&&(outputUnit=='centiMeters')) {
          outputValue = inputValue * (0.01);
    }else if((inputUnit=='milliMeters')&&(outputUnit=='milliMeters')) {
          outputValue = inputValue;
    }else if((inputUnit=='milliMeters')&&(outputUnit=='nanoMeters')) {
          outputValue = inputValue * (1000000);
    }else if((inputUnit=='milliMeters')&&(outputUnit=='microMeters')) {
          outputValue = inputValue * (1000);
    }else if((inputUnit=='milliMeters')&&(outputUnit=='miles')) {
      outputValue = inputValue * (0.000000621371);
    }else if((inputUnit=='milliMeters')&&(outputUnit=='yard')) {
          outputValue = inputValue * (0.00109361);
    }else if((inputUnit=='milliMeters')&&(outputUnit=='foot')) {
          outputValue = inputValue * ( 0.00328084);
    }else if((inputUnit=='milliMeters')&&(outputUnit=='inch')) {
          outputValue = inputValue * (0.0393701);
    }else if ((inputUnit == 'miles') && (outputUnit == 'kiloMeters')) {
        outputValue = inputValue * 1.60934;
    } else if ((inputUnit == 'miles') && (outputUnit == 'meters')) {
        outputValue = inputValue * 1609.34;
    } else if ((inputUnit == 'miles') && (outputUnit == 'centiMeters')) {
        outputValue = inputValue * 160934;
    } else if ((inputUnit == 'miles') && (outputUnit == 'milliMeters')) {
        outputValue = inputValue * 1609340;
    } else if ((inputUnit == 'miles') && (outputUnit == 'nanoMeters')) {
        outputValue = inputValue * 1609340000;
    } else if ((inputUnit == 'miles') && (outputUnit == 'microMeters')) {
        outputValue = inputValue * 1609340000000;
    } else if ((inputUnit == 'miles') && (outputUnit == 'miles')) {
        outputValue = inputValue;
    } else if ((inputUnit == 'miles') && (outputUnit == 'yard')) {
        outputValue = inputValue * 1760;
    } else if ((inputUnit == 'miles') && (outputUnit == 'foot')) {
        outputValue = inputValue * 5280;
    } else if ((inputUnit == 'miles') && (outputUnit == 'inch')) {
        outputValue = inputValue * 63360;
    }else if ((inputUnit == 'inch') && (outputUnit == 'kiloMeters')) {
        outputValue = inputValue * 0.0000254;
    } else if ((inputUnit == 'inch') && (outputUnit == 'meters')) {
        outputValue = inputValue * 0.0254;
    } else if ((inputUnit == 'inch') && (outputUnit == 'centiMeters')) {
        outputValue = inputValue * 2.54;
    } else if ((inputUnit == 'inch') && (outputUnit == 'milliMeters')) {
        outputValue = inputValue * 25.4;
    } else if ((inputUnit == 'inch') && (outputUnit == 'nanoMeters')) {
        outputValue = inputValue * 25400;
    } else if ((inputUnit == 'inch') && (outputUnit == 'microMeters')) {
        outputValue = inputValue * 25400;
    } else if ((inputUnit == 'inch') && (outputUnit == 'miles')) {
        outputValue = inputValue * 0.0000157828;
    } else if ((inputUnit == 'inch') && (outputUnit == 'yard')) {
        outputValue = inputValue * 0.0277778;
    } else if ((inputUnit == 'inch') && (outputUnit == 'foot')) {
        outputValue = inputValue * 0.0833333;
    } else if ((inputUnit == 'inch') && (outputUnit == 'inch')) {
        outputValue = inputValue;
    }else if ((inputUnit == 'yard') && (outputUnit == 'kiloMeters')) {
        outputValue = inputValue * 0.0009144;
    } else if ((inputUnit == 'yard') && (outputUnit == 'meters')) {
        outputValue = inputValue * 0.9144;
    } else if ((inputUnit == 'yard') && (outputUnit == 'centiMeters')) {
        outputValue = inputValue * 91.44;
    } else if ((inputUnit == 'yard') && (outputUnit == 'milliMeters')) {
        outputValue = inputValue * 914.4;
    } else if ((inputUnit == 'yard') && (outputUnit == 'nanoMeters')) {
        outputValue = inputValue * 914400;
    } else if ((inputUnit == 'yard') && (outputUnit == 'microMeters')) {
        outputValue = inputValue * 914400000;
    } else if ((inputUnit == 'yard') && (outputUnit == 'miles')) {
        outputValue = inputValue * 0.000568182;
    } else if ((inputUnit == 'yard') && (outputUnit == 'inch')) {
        outputValue = inputValue * 36;
    } else if ((inputUnit == 'yard') && (outputUnit == 'foot')) {
        outputValue = inputValue * 3;
    } else if ((inputUnit == 'yard') && (outputUnit == 'yard')) {
        outputValue = inputValue;
    } else {
        alert('select an unit !');
    }
    
    
    document.getElementById('output').innerHTML = outputValue;
});

}





function temperatureConvert() {


  let temperatureSelect1 = document.getElementById('inputUnit');
  temperatureSelect1.innerHTML = '';



  let temperatureSelect2 = document.getElementById('outputUnit');
  temperatureSelect2.innerHTML = '';


const celsiusOption = document.createElement('option');
celsiusOption.value = 'celsius';
celsiusOption.textContent = 'celsius';


const fahrenheit = document.createElement('option');
fahrenheit.value = 'fahrenheit';
fahrenheit.textContent = 'fahrenheit';


const kelvin = document.createElement('option');
kelvin.value = 'kelvin';
kelvin.textContent = 'kelvin';


const celsiusOption2 = document.createElement('option');
celsiusOption2.value = 'celsius';
celsiusOption2.textContent = 'celsius';


const fahrenheit2 = document.createElement('option');
fahrenheit2.value = 'fahrenheit';
fahrenheit2.textContent = 'fahrenheit';


const kelvin2 = document.createElement('option');
kelvin2.value = 'kelvin';
kelvin2.textContent = 'kelvin';


temperatureSelect1.appendChild(celsiusOption);
temperatureSelect1.appendChild(fahrenheit);
temperatureSelect1.appendChild(kelvin);


temperatureSelect2.appendChild(fahrenheit2);
temperatureSelect2.appendChild(celsiusOption2);
temperatureSelect2.appendChild(kelvin2);



document.getElementById('conversionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let inputValue = parseFloat(document.getElementById('inputValue').value);
    let inputUnit = document.getElementById('inputUnit').value;
    let outputUnit = document.getElementById('outputUnit').value;
    let outputValue = 0;



    if(inputUnit == 'celsius' && outputUnit == 'celsius') {
        outputValue = inputValue;
    } else if(inputUnit == 'celsius' && outputUnit == 'fahrenheit') {
        outputValue = ( inputValue * 9 / 5 ) + 32;
    }else if(inputUnit == 'celsius' && outputUnit == 'kelvin') {
        outputValue = inputValue + 273.15;
    }else if(inputUnit == 'fahrenheit' && outputUnit == 'celsius') {
        outputValue = ( inputValue - 32 ) * ( 5 / 9 );
    }else if(inputUnit == 'fahrenheit' && outputUnit == 'fahrenheit') {
        outputValue = inputValue;
    }else if(inputUnit == 'fahrenheit' && outputUnit == 'kelvin') {
        var celsiusP = ( inputValue - 32 ) * ( 5 / 9 );
        outputValue = celsiusP + 273.15;
    }else if(inputUnit == 'kelvin' && outputUnit == 'kelvin') {
        outputValue = inputValue;
    }else if(inputUnit == 'kelvin' && outputUnit == 'celsius') {
        outputValue = inputValue - 273.15;
    }else{
         celsiusP = inputValue - 273.15;
         outputValue = ( celsiusP - 32 ) * ( 5 / 9 );
    }





    document.getElementById('output').innerHTML = outputValue;



});
}



function areaConvert() {
    document.getElementById('inputUnit').innerHTML = '';

    document.getElementById('outputUnit').innerHTML = '';

    const squareMeter = document.createElement('option');

    const squareKiloMeter = document.createElement('option');

    const squareCentiMeter = document.createElement('option');

    const hectare = document.createElement('option');

    const acre = document.createElement('option');



    const squareMeter2 = document.createElement('option');

    const squareKiloMeter2 = document.createElement('option');

    const squareCentiMeter2 = document.createElement('option');

    const hectare2 = document.createElement('option');

    const acre2 = document.createElement('option');


    squareMeter.value = 'squareMeter';

    squareKiloMeter.value = 'squareKiloMeter';

    squareCentiMeter.value = 'squareCentiMeter';

    hectare.value = 'hectare';

    acre.value = 'acre';


    squareMeter2.value = 'squareMeter';

    squareKiloMeter2.value = 'squareKiloMeter';

    squareCentiMeter2.value = 'squareCentiMeter';

    hectare2.value = 'hectare';

    acre2.value = 'acre';


    squareMeter.textContent = 'Square Meter';

    squareKiloMeter.textContent = 'Square Kilometer';

    squareCentiMeter.textContent = 'Square Centimeter';

    hectare.textContent = 'Hectare';

    acre.textContent = 'Acre';



    squareMeter2.textContent = 'Square Meter';

    squareKiloMeter2.textContent = 'Square Kilometer';

    squareCentiMeter2.textContent = 'Square Centimeter';

    hectare2.textContent = 'Hectare';

    acre2.textContent = 'Acre';



    const addAreaOptions1 =  document.getElementById('inputUnit');
    const addAreaOptions2 =  document.getElementById('outputUnit');


    addAreaOptions1.appendChild(squareMeter);
    addAreaOptions1.appendChild(squareKiloMeter);
    addAreaOptions1.appendChild(squareCentiMeter);
    addAreaOptions1.appendChild(hectare);
    addAreaOptions1.appendChild(acre);


    addAreaOptions2.appendChild(squareKiloMeter2);
    addAreaOptions2.appendChild(squareMeter2);
    addAreaOptions2.appendChild(squareCentiMeter2);
    addAreaOptions2.appendChild(hectare2);
    addAreaOptions2.appendChild(acre2);



    

}



function weightConvert() {


    const addWeightOptions1 = document.getElementById('inputUnit');
    const addWeightOptions2 = document.getElementById('outputUnit');


    addWeightOptions1.innerHTML = '';
    addWeightOptions2.innerHTML = '';

    const kiloGram = document.createElement('option');
    const gram = document.createElement('option');
    const milliGram = document.createElement('option');
    const metricTon = document.createElement('option');
    const pound = document.createElement('option');
    const atomicMassUnit = document.createElement('option');


    const kiloGram2 = document.createElement('option');
    const gram2 = document.createElement('option');
    const milliGram2 = document.createElement('option');
    const metricTon2 = document.createElement('option');
    const pound2 = document.createElement('option');
    const atomicMassUnit2 = document.createElement('option');


    kiloGram.value = 'kiloGram';
    gram.value = 'gram';
    milliGram.value = 'milliGram';
    metricTon.value = 'metricTon';
    pound.value = 'pound';
    atomicMassUnit.value = 'atomicMassUnit';

    kiloGram2.value = 'kiloGram';
    gram2.value = 'gram';
    milliGram2.value = 'milliGram';
    metricTon2.value = 'metricTon';
    pound2.value = 'pound';
    atomicMassUnit2.value = 'atomicMassUnit';


    kiloGram.textContent = 'Kilogram';
    gram.textContent = 'Gram';
    milliGram.textContent = 'Milligram';
    metricTon.textContent = 'Metric Ton';
    pound.textContent = 'Pound';
    atomicMassUnit.textContent = 'Atomic Mass Unit';

    kiloGram2.textContent = 'Kilogram';
    gram2.textContent = 'Gram';
    milliGram2.textContent = 'Milligram';
    metricTon2.textContent = 'Metric Ton';
    pound2.textContent = 'Pound';
    atomicMassUnit2.textContent = 'Atomic Mass Unit';


    addWeightOptions1.appendChild(kiloGram);
    addWeightOptions1.appendChild(gram);
    addWeightOptions1.appendChild(milliGram);
    addWeightOptions1.appendChild(metricTon);
    addWeightOptions1.appendChild(pound);
    addWeightOptions1.appendChild(atomicMassUnit);


    addWeightOptions2.appendChild(milliGram2);
    addWeightOptions2.appendChild(gram2);
    addWeightOptions2.appendChild(kiloGram2);
    addWeightOptions2.appendChild(metricTon2);
    addWeightOptions2.appendChild(pound2);
    addWeightOptions2.appendChild(atomicMassUnit2);




    
}




 











