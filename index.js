// Weight Conversion

function Grams(){
    let g_input = document.getElementById("grams").value;
    let kg_input = document.getElementById("kilograms");
    let mg_input = document.getElementById("milligrams");
    let ounces_input = document.getElementById("ounces");
    let carrats_input = document.getElementById("carrats");

    let kg = (g_input / 1000);
    kg_input.value = kg;

    let mg = (g_input * 1000);
    mg_input.value = mg;

    let ounces = (g_input / 28.34952);
    ounces_input.value = ounces;

    let carrats = (g_input * 5);
    carrats_input.value = carrats;
}

function Kilograms(){
    let g_input = document.getElementById("grams");
    let kg_input = document.getElementById("kilograms").value;
    let mg_input = document.getElementById("milligrams");
    let ounces_input = document.getElementById("ounces");
    let carrats_input = document.getElementById("carrats");

    let g = (kg_input * 1000);
    g_input.value = g;

    let mg = (kg_input * 1000000);
    mg_input.value = mg;

    let ounces = (kg_input * 35.273919);
    ounces_input.value = ounces;

    let carrats = (kg_input * 5000);
    carrats_input.value = carrats;
}

function Milligrams(){
    let g_input = document.getElementById("grams");
    let kg_input = document.getElementById("kilograms");
    let mg_input = document.getElementById("milligrams").value;
    let ounces_input = document.getElementById("ounces");
    let carrats_input = document.getElementById("carrats");

    let g = (mg_input / 1000);
    g_input.value = g;

    let kg = (mg_input / 1000000);
    kg_input.value = kg;

    let ounces = (mg_input * 0.0000352739);
    ounces_input.value = ounces;

    let carrats = (mg_input / 200);
    carrats_input.value = carrats;
}

function Ounce(){
    let g_input = document.getElementById("grams");
    let kg_input = document.getElementById("kilograms");
    let mg_input = document.getElementById("milligrams");
    let ounces_input = document.getElementById("ounces").value;
    let carrats_input = document.getElementById("carrats");

    let g = (ounces_input * 28.34952);
    g_input.value = g;

    let kg = (ounces_input * 0.02834952);
    kg_input.value = kg;

    let mg = (ounces_input * 28349.5);
    mg_input.value = mg;

    let carrats = (ounces_input * 141.747616);
    carrats_input.value = carrats;
}

function Carrats(){
    let g_input = document.getElementById("grams");
    let kg_input = document.getElementById("kilograms");
    let mg_input = document.getElementById("milligrams");
    let ounces_input = document.getElementById("ounces");
    let carrats_input = document.getElementById("carrats").value;

    let g = (carrats_input / 5);
    g_input.value = g;

    let kg = (carrats_input / 5000);
    kg_input.value = kg;

    let mg = (carrats_input * 200);
    mg_input.value = mg;

    let ounces = (carrats_input * 0.0070547923899);
    ounces_input.value = ounces;
}

// Length Conversion

function Meter(){
    let m_input = document.getElementById("meter").value;
    let km_input = document.getElementById("kilometer");
    let dm_input = document.getElementById("decimeter");
    let cm_input = document.getElementById("centimeter");
    let mm_input = document.getElementById("millimeter");

    let km = (m_input * 0.001);
    km_input.value = km;

    let dm = (m_input * 10);
    dm_input.value = dm;

    let cm = (m_input * 100);
    cm_input.value = cm;

    let mm = (m_input * 1000);
    mm_input.value = mm;
}

function Kilometer(){
    let m_input = document.getElementById("meter");
    let km_input = document.getElementById("kilometer").value;
    let dm_input = document.getElementById("decimeter");
    let cm_input = document.getElementById("centimeter");
    let mm_input = document.getElementById("millimeter");

    let m = (km_input * 1000);
    m_input.value = m;

    let dm = (km_input * 10000);
    dm_input.value = dm;

    let cm = (km_input * 100000);
    cm_input.value = cm;

    let mm = (km_input * 1000000);
    mm_input.value = mm;
}

function Decimeter(){
    let m_input = document.getElementById("meter");
    let km_input = document.getElementById("kilometer");
    let dm_input = document.getElementById("decimeter").value;
    let cm_input = document.getElementById("centimeter");
    let mm_input = document.getElementById("millimeter");

    let m = (dm_input * 0.1);
    m_input.value = m;

    let km = (dm_input * 0.0001);
    km_input.value = km;

    let cm = (dm_input * 10);
    cm_input.value = cm;

    let mm = (dm_input * 100);
    mm_input.value = mm;
}

function Centimeter(){
    let m_input = document.getElementById("meter");
    let km_input = document.getElementById("kilometer");
    let dm_input = document.getElementById("decimeter");
    let cm_input = document.getElementById("centimeter").value;
    let mm_input = document.getElementById("millimeter");

    let m = (cm_input * 0.01);
    m_input.value = m;

    let km = (cm_input * 1.0E-5);
    km_input.value = km;

    let dm = (cm_input * 0.1);
    dm_input.value = dm;

    let mm = (cm_input * 10);
    mm_input.value = mm;
}

function Centimeter(){
    let m_input = document.getElementById("meter");
    let km_input = document.getElementById("kilometer");
    let dm_input = document.getElementById("decimeter");
    let cm_input = document.getElementById("centimeter");
    let mm_input = document.getElementById("millimeter").value;

    let m = (mm_input * 0.001);
    m_input.value = m;

    let km = (mm_input * 1.0E-6);
    km_input.value = km;

    let dm = (mm_input * 0.1);
    dm_input.value = dm;

    let cm = (mm_input * 10);
    cm_input.value = cm;
}

// Temperature Conversion
function Celsius(){
    let cel_input = document.getElementById("celsius").value;
    let kel_input = document.getElementById("kelvin");
    let fahr_input = document.getElementById("fahrenheit");

    let kel = parseInt(cel_input) + 273.15;
    kel_input.value = kel;

    let fahr = (cel_input * (9/5)) + 32;
    fahr_input.value = fahr;
}

function Kelvin(){
    let cel_input = document.getElementById("celsius");
    let kel_input = document.getElementById("kelvin").value;
    let fahr_input = document.getElementById("fahrenheit");

    let cel = (kel_input -273.15);
    cel_input.value = cel;

    let fahr = (kel_input -273.15) * 1.8 + 32;
    fahr_input.value = fahr;
}

function Fahrenheit(){
    let cel_input = document.getElementById("celsius");
    let kel_input = document.getElementById("kelvin");
    let fahr_input = document.getElementById("fahrenheit").value;

    let cel = (fahr_input -32) / 1.8;
    cel_input.value = cel;

    let kel = (fahr_input -32) / 1.8 + 273.15;
    kel_input.value = kel;
}

function reset(){
    document.getElementById("grams").value ="";
    document.getElementById("kilograms").value ="";
    document.getElementById("milligrams").value ="";
    document.getElementById("ounces").value ="";
    document.getElementById("carrats").value ="";
}

function reset1(){
    document.getElementById("meter").value ="";
    document.getElementById("kilometer").value ="";
    document.getElementById("decimeter").value ="";
    document.getElementById("centimeter").value ="";
    document.getElementById("millimeter").value ="";
}

function reset2(){
    document.getElementById("celsius").value ="";
    document.getElementById("kelvin").value ="";
    document.getElementById("fahrenheit").value ="";
}