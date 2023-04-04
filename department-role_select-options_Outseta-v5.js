Outseta.on(
    'auth.initialized',
    () => {
        const installHandler = () => {
            const dept = document.querySelector('select[name="Account.Department"]');
            if (!dept) {
                setTimeout(installHandler, 250);
            }
            else {
                dept.addEventListener(
                    'change',
                    (e) => {
                        let roleOptions = [];
                        switch (e.target.value) {
                            case 'Assistant Director':
                                roleOptions = ['Select Role', '1st Assistant Director', '2nd Assistant Director', '2nd 2nd Assistant Director', '3rd Assistant Director', 'Cast Driver', 'Set PA / Base Camp PA / Stand In / Trainee AD', 'Trainee A.D'];
                                break;
                            case 'Art':
                                roleOptions = ["Select Role",
                                    "Animal Wrangler",
                                    "Animal Wrangler Assist",
                                    "Art Department Coordinator",
                                    "Art Dept Assistant / Clearances",
                                    "Art Dept Runner",
                                    "Art Director",
                                    "Art Trainee",
                                    "Assist Plasterer",
                                    "Assist Props Buyer",
                                    "Assistant Art Director",
                                    "Assistant Drapes Master",
                                    "Assistant Model Maker",
                                    "Assistant Props Master",
                                    "Assistant Set Decorator",
                                    "Brush/Plaster Hand",
                                    "Carpenter",
                                    "Casual Props Assist",
                                    "Concept Artist (off site)",
                                    "Construction Coordinator",
                                    "Construction Foreman",
                                    "Construction Manager",
                                    "Construction Runner",
                                    "Construction Supervisor",
                                    "Drapes Master",
                                    "Food Stylist",
                                    "Graphic Assistant",
                                    "Graphic Designer",
                                    "Greens Arborist",
                                    "Greens Assist",
                                    "Greens Foreman",
                                    "Greensman",
                                    "Head Greensman",
                                    "Head Steel Fabricator",
                                    "HOD Fabrication",
                                    "HOD Greens",
                                    "HOD Paint",
                                    "HOD Plaster",
                                    "Key Set Dresser",
                                    "Leading Hand",
                                    "Model Maker",
                                    "Motion Graphics Manager",
                                    "On Set Art Director",
                                    "On Set Carpenter",
                                    "On Set Screens Technician",
                                    "Onset Greensman",
                                    "Onset Set Dresser",
                                    "Painter",
                                    "Plaster Lead Hand",
                                    "Plasterer",
                                    "Prac Lighting Head Tech",
                                    "Prac Lighting Runner",
                                    "Production Designer",
                                    "Prop Maker",
                                    "Props Buyer",
                                    "Props Carpenter",
                                    "Props Co-ordinator",
                                    "Props Designer",
                                    "Props Finisher/Props Assist",
                                    "Props Master",
                                    "Props Standby",
                                    "Scenic Artist",
                                    "Scenic Assistant",
                                    "Scenic Brush Hand",
                                    "Scenic Foreman",
                                    "Scenic Lead Hand",
                                    "Scenic Painter",
                                    "Senior Electrical Tech",
                                    "Senior Set Designer",
                                    "Set Builder",
                                    "Set Dec Assistant",
                                    "Set Dec Buyer",
                                    "Set Dec Buyers Assist",
                                    "Set Dec Carpenter",
                                    "Set Dec Fabricator",];
                                break;
                            default:
                                break;
                        }

                        const role = document.querySelector('select[name="Account.Roles"]');
                        role
                            .querySelectorAll('option')
                            .forEach(option => {
                                if (roleOptions.includes(option.value)) {
                                    option.style.display = 'block';
                                }
                                else {
                                    option.style.display = 'none';
                                }
                            });
                    }
                );
            }
        }

        installHandler();
    }
);