
function calculateSolar() {
    // Get form inputs
    const form = document.forms.solarForm;
    const monthlyUsage = [
        parseFloat(form.jan.value),
        parseFloat(form.feb.value),
        parseFloat(form.mar.value),
        parseFloat(form.apr.value),
        parseFloat(form.may.value),
        parseFloat(form.jun.value),
        parseFloat(form.jul.value),
        parseFloat(form.aug.value),
        parseFloat(form.sep.value),
        parseFloat(form.oct.value),
        parseFloat(form.nov.value),
        parseFloat(form.dec.value)
    ];
    
    // Calculate total annual usage
    const totalUsage = monthlyUsage.reduce((a, b) => a + b, 0);
    const dailyUsage = totalUsage / 365;

    // Get sunlight hours and panel wattage
    const sunlightHours = parseFloat(form.zone.value);
    const panelWattage = parseFloat(form.panel.value);

    // Calculate solar generation needs
    const generationNeeds = dailyUsage / sunlightHours * 1.25; // Adding 25% buffer for bad weather

    // Calculate number of panels needed
    const panelOutput = panelWattage / 1000; // Convert watts to kW
    const panelCount = Math.ceil(generationNeeds / panelOutput);

    // Update feedback
    const feedback = document.getElementById('feedback');
    feedback.innerHTML = `<p>You need approximately <strong>${panelCount} panels</strong> 
                          to cover your daily usage of <strong>${dailyUsage.toFixed(2)} kWh</strong>.</p>`;
}
