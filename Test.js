<script>
    const departmentSelect = document.querySelector('select[name="Account.Department"]');
    const roleSelect = document.querySelector('select[name="Account.Role"]');

departmentSelect.addEventListener('change', (event) => {
  const department = event.target.value;
    if (department === 'Lighting') {
        roleSelect.innerHTML = `
      <option value="">Select Role</option>
      <option value="Manager">Manager</option>
      <option value="Assistant">Assistant</option>
    `;
  } else if (department === 'Audio') {
        roleSelect.innerHTML = `
      <option value="">Select Role</option>
      <option value="Sound Engineer">Sound Engineer</option>
      <option value="Mixer">Mixer</option>
    `;
  } else if (department === 'AD') {
        roleSelect.innerHTML = `
      <option value="">Select Role</option>
      <option value="1st Assistant Director">1st Assistant Director</option>
      <option value="2nd Assistant Director">2nd Assistant Director</option>
      <option value="2nd 2nd Assistant Director">2nd 2nd Assistant Director</option>
      <option value="3rd Assistant Director">3rd Assistant Director</option>
      <option value="Cast Driver">Cast Driver</option>
      <option value="Set PA / Base Camp PA / Stand In / Trainee AD">Set PA / Base Camp PA / Stand In / Trainee AD</option>
      <option value="Trainee A.D">Trainee A.D</option>
    `;
  } else {
        roleSelect.innerHTML = `<option value="">Select Role</option>`;
  }
});
</script>