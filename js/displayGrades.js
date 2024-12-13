const gradesData = {
    "Year 1": {
        "GPA": 3.50,
        "Courses": {
            "Software Development 1": "B+",
            "Software Development 2": "B+",
            "Systems Analysis": "C",
            "Computer Architecture": "A",
            "Business & Information Sys": "B",
            "Statistics": "A",
            "Discrete Mathematics": "A",
            "Database Fundamentals": "A",
            "Social Media Communications": "B",
            "Critical Skills Development": "B"
        }
    },
    "Year 2": {
        "GPA": 3.89,
        "Courses": {
            "Networking Fundamentals": "A",
            "Routing & Switching Essentials": "A",
            "Advanced Database Technologies": "B+",
            "Database Admin & Analysis": "B+",
            "Operating Systems Fundamentals": "A",
            "Software Quality Assurance & Testing": "A",
            "Client-side Web Development": "A",
            "Visual Design & User Experience": "A",
            "Discrete Mathematics": "A",
            "Financial Management": "A"
        }
    },
    "Year 3": {
        "GPA": 3.50,
        "Courses": {
            "Project": "A",
            "Big Data Technologies": "A",
            "IT Scripting & Automation": "A",
            "Advanced Routing & Switching": "A",
            "Information Security": "B",
            "Management Science": "A",
            "IT Services Management": "C+",
            "Cloud Service & Distributed Computing": "A",
            "Server-side Web Development": "B",
            "Big Data Technologies": "B",
            "Software Development": "C"
        }
    }
};

const showGrades = function(year) {
    const gradesContent = document.getElementById('grades-content');
    const yearData = gradesData[year];
    let content = `<h3 class="color-primary">${year}</h3>
                   <h5 class="mb-2">GPA: ${yearData.GPA}</h5>
                   <table class="table table-striped min-width-table">
                    <thead>
                        <tr class="grid-table">
                        <th scope="col">Module</th>
                        <th scope="col">Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        `;
    for (const [course, grade] of Object.entries(yearData.Courses)) {
        content += `<tr class="grid-table"><td scope="row">${course}</td>
                    <td scope="row">${grade}</td></tr>`;
    }
    content += '</tbody></table>';
    gradesContent.innerHTML = content;
}

// Display Year 3 grades by default
document.addEventListener('DOMContentLoaded', () => {
    showGrades('Year 3');
});