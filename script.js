function showSection(section) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(s => s.style.display = 'none');

    // Show the selected section
    document.getElementById(section).style.display = 'block';
}

// Handle the form submission for the calculator
document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const milesDriven = parseFloat(document.getElementById('miles_driven').value) || 0;
    const publicTransport = parseFloat(document.getElementById('public_transport').value) || 0;
    const electricityUsage = parseFloat(document.getElementById('electricity_usage').value) || 0;
    const foodWaste = parseFloat(document.getElementById('food_waste').value) || 0;

    // Basic carbon footprint estimation
    const footprint = (milesDriven * 0.404) + (publicTransport * 0.1) + (electricityUsage * 0.5) + (foodWaste * 0.2);
    
    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Your Carbon Footprint: ${footprint.toFixed(2)} kg CO2 per month`;
    resultElement.style.display = 'block';
});
