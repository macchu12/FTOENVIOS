const data = {
  "LIMA": {
    "LIMA": ["Miraflores", "Surco", "San Isidro"],
    "CALLAO": ["Bellavista", "La Perla"]
  },
  "AREQUIPA": {
    "AREQUIPA": ["Cayma", "Cercado"]
  }
};

window.onload = function() {
  const depSel = document.getElementById("departamento");
  Object.keys(data).forEach(dep => {
    const opt = document.createElement("option");
    opt.value = dep;
    opt.textContent = dep;
    depSel.appendChild(opt);
  });

  depSel.onchange = function() {
    const provSel = document.getElementById("provincia");
    provSel.innerHTML = '<option value="">Provincia</option>';
    document.getElementById("distrito").innerHTML = '<option value="">Distrito</option>';
    document.getElementById("sede").innerHTML = '<option value="">Sede</option>';
    provSel.disabled = true;
    document.getElementById("distrito").disabled = true;
    document.getElementById("sede").disabled = true;

    if (this.value && data[this.value]) {
      Object.keys(data[this.value]).forEach(prov => {
        const opt = document.createElement("option");
        opt.value = prov;
        opt.textContent = prov;
        provSel.appendChild(opt);
      });
      provSel.disabled = false;
    }
  };

  document.getElementById("provincia").onchange = function() {
    const distSel = document.getElementById("distrito");
    distSel.innerHTML = '<option value="">Distrito</option>';
    document.getElementById("sede").innerHTML = '<option value="">Sede</option>';
    distSel.disabled = true;
    document.getElementById("sede").disabled = true;

    const dep = depSel.value;
    const prov = this.value;
    if (data[dep] && data[dep][prov]) {
      data[dep][prov].forEach(dist => {
        const opt = document.createElement("option");
        opt.value = dist;
        opt.textContent = dist;
        distSel.appendChild(opt);
      });
      distSel.disabled = false;
    }
  };

  document.getElementById("distrito").onchange = function() {
    const sedeSel = document.getElementById("sede");
    sedeSel.innerHTML = '<option value="">Sede</option>';
    sedeSel.disabled = this.value ? false : true;
    if (this.value) {
      const opt = document.createElement("option");
      opt.value = "Principal";
      opt.textContent = "Principal";
      sedeSel.appendChild(opt);
    }
  };
};
