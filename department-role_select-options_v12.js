const departmentSelect = document.querySelector('select[name="Account.Department"]');
const roleSelect = document.querySelector('select[name="Account.Role"]');

// Replace "your-collection-slug" with the actual slug of your Webflow collection
fetch("https://api.webflow.com/collections/member-roles/items?api_version=1.0.0", {
    headers: {
        Authorization: "Bearer 1f80c8f449750add50bac31234662187474257a748414930a8b2682ec990f96c",
    },
})
    .then((response) => response.json())
    .then((data) => {
        // Create an object to store the departments and roles
        const departmentRoles = {};

        // Loop through the collection items and add each role to the appropriate department
        data.items.forEach((item) => {
            const department = item.department;
            const role = item.name; // Use item name as the role value

            if (!departmentRoles[department]) {
                departmentRoles[department] = [];
            }

            departmentRoles[department].push(role);
        });

        // Populate the department select element with options based on the available departments
        const departments = Object.keys(departmentRoles);
        departmentSelect.innerHTML = `
      <option value="">Select Department</option>
      ${departments
                .map((department) => `<option value="${department}">${department}</option>`)
                .join("")}
    `;

        // Listen for changes to the department select element
        departmentSelect.addEventListener("change", (event) => {
            const department = event.target.value;
            if (department === "") {
                // If no department is selected, clear the role select element
                roleSelect.innerHTML = `<option value="">Select Role</option>`;
            } else {
                // Otherwise, populate the role select element with options based on the selected department
                const roles = departmentRoles[department];
                roleSelect.innerHTML = `
          <option value="">Select Role</option>
          ${roles.map((role) => `<option value="${role}">${role}</option>`).join("")}
        `;
            }
        });
    });
