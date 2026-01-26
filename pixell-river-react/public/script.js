document.addEventListener("DOMContentLoaded", () => {

    const departments = [
        {
            name: "Management",
            employees: [
                { firstName: "Jigneshkumar", lastName: "Pandya" },
                { firstName: "Harsh", lastName: "Pandya" }
            ]
        },
        {
            name: "Finance",
            employees: [
                { firstName: "Vraj", lastName: "Patel" },
                { firstName: "Nil", lastName: "Patel" }
            ]
        },
        {
            name: "Customer Support",
            employees: [
                { firstName: "Ava", lastName: "Patel" },
                { firstName: "James", lastName: "Miller" }
            ]
        }
    ];

    const main = document.getElementById("employee-directory");

    departments.forEach(department => {
        const section = document.createElement("section");
        section.className = "department";

        const heading = document.createElement("h2");
        heading.textContent = department.name;

        const list = document.createElement("ul");

        department.employees.forEach(employee => {
            const listItem = document.createElement("li");
            listItem.textContent = `${employee.firstName} ${employee.lastName || ""}`;
            list.appendChild(listItem);
        });

        section.appendChild(heading);
        section.appendChild(list);
        main.appendChild(section);
    });

    const year = new Date().getFullYear();
    document.getElementById("copyright")
        .textContent = `Copyright Pixell River Financial ${year}.`;
});