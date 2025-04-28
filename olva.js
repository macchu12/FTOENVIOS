const departamentos = {
  "LIMA": {
    "LIMA": ["Miraflores", "Surco", "San Isidro"],
    "CALLAO": ["Bellavista", "La Perla"]
  },
  "AREQUIPA": {
    "AREQUIPA": ["Cayma", "Cercado"]
  }
};

let tipoEntrega = "";

function seleccionarMetodo(tipo) {
  tipoEntrega = tipo;
  document.getElementById("step1").style.display = "none";
  document.getElementById("step2").style.display = "block";

  const depSel = document.getElementById("departamento");
  depSel.innerHTML = '<option value="">Departamento</option>';
  Object.keys(departamentos).forEach(dep => {
    const opt = document.createElement("option");
    opt.value = dep;
    opt.textContent = dep;
    depSel.appendChild(opt);
  });

  depSel.onchange = function() {
    const provSel = document.getElementById("provincia");
    provSel.innerHTML = '<option value="">Provincia</option>';
    document.getElementById("distrito").innerHTML = '<option value="">Distrito</option>';
    provSel.disabled = true;
    document.getElementById("distrito").disabled = true;
    if (this.value && departamentos[this.value]) {
      Object.keys(departamentos[this.value]).forEach(prov => {
        const opt = document.createElement("option");
        opt.value = prov;
        opt.textContent = prov;
        provSel.appendChild(opt);
      });
      provSel.disabled = false;
    }
  };

  document.getElementById("provincia").onchange = function() {
    const dep = depSel.value;
    const distSel = document.getElementById("distrito");
    distSel.innerHTML = '<option value="">Distrito</option>';
    distSel.disabled = true;
    if (this.value && departamentos[dep][this.value]) {
      departamentos[dep][this.value].forEach(dist => {
        const opt = document.createElement("option");
        opt.value = dist;
        opt.textContent = dist;
        distSel.appendChild(opt);
      });
      distSel.disabled = false;
    }
  };
}

function continuarADatos() {
  const d = document.getElementById("departamento").value;
  const p = document.getElementById("provincia").value;
  const dt = document.getElementById("distrito").value;
  if (!d || !p || !dt) {
    alert("Selecciona un destino completo");
    return;
  }

  document.getElementById("step2").style.display = "none";
  document.getElementById("step3").style.display = "block";
  document.getElementById("campos_direccion").style.display = tipoEntrega === "domicilio" ? "block" : "none";
  document.getElementById("agencia_opcion").style.display = tipoEntrega === "agencia" ? "block" : "none";
}

function mostrarResumen() {
  document.getElementById("step3").style.display = "none";
  document.getElementById("step4").style.display = "block";

  const distrito = document.getElementById("distrito").value;
  let precio = distrito === "Miraflores" ? 18 : 15;

  const subtotal = (precio / 1.18).toFixed(2);
  const igv = (precio - subtotal).toFixed(2);
  const total = precio.toFixed(2);

  document.getElementById("resumen_envio").textContent = `Destino: ${distrito} | Entrega: ${tipoEntrega}`;
  document.getElementById("subtotal").textContent = `S/${subtotal}`;
  document.getElementById("igv").textContent = `S/${igv}`;
  document.getElementById("total").textContent = `S/${total}`;
}

function finalizarPago() {
  document.getElementById("step4").style.display = "none";
  document.getElementById("mensajeFinal").style.display = "block";
}
