const distritosCobertura = {
  "Callao": 18,
  "Ate": 18,
  "Independencia": 0,
  "SMP": 0,
  "Los Olivos": 0,
  "La Molina": 0,
  "San Luis": 0,
  "Magdalena": 0,
  "Breña": 0,
  "Lince": 0,
  "Pueblo Libre": 0,
  "Cercado de Lima": 0,
  "Rimac": 0,
  "Jesús María": 0,
  "San Borja": 0,
  "Surco": 0,
  "Surquillo": 0,
  "Barranco": 0,
  "Chorrillos": 0,
  "Miraflores": 0,
  "San Miguel": 0
};

function mostrarFormulario(tipo) {
  if (tipo === 'motorizado') {
    document.getElementById("formularioMotorizado").style.display = "block";
  }
}

function verificarCobertura() {
  const distrito = document.getElementById("distrito").value;
  const resultado = document.getElementById("resultado");
  const paso4 = document.getElementById("paso4");

  if (distritosCobertura.hasOwnProperty(distrito)) {
    const costo = distritosCobertura[distrito];
    resultado.innerHTML = `✅ Hay cobertura en <strong>${distrito}</strong>.` + (costo > 0 ? ` Costo: S/${costo}.00.` : '');
    resultado.className = "success";
    paso4.style.display = "block";
  } else {
    resultado.innerHTML = `❌ No tenemos cobertura en ese distrito.`;
    resultado.className = "error";
    paso4.style.display = "none";
  }
}

function finalizar() {
  const dni = document.getElementById("dni").value;
  const nombre = document.getElementById("nombre").value;
  const whatsapp = document.getElementById("whatsapp").value;
  const direccion = document.getElementById("direccion").value;

  if (!dni || !nombre || !whatsapp || !direccion) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  alert("✅ Envío registrado correctamente.");
}
