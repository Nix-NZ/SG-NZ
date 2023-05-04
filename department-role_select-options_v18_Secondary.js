const departmentSelect2 = document.querySelector('select[name="Account.Department.2"]');
const roleSelect2 = document.querySelector('select[name="Account.Role.2"]');

departmentSelect2.addEventListener('change', (event) => {
    const department = event.target.value;
    if (department === 'Invalid') {
        roleSelect2.innerHTML = `
      <option value="">Select Role</option>
      <option value="Manager">Manager</option>
      <option value="Assistant">Assistant</option>
    `;
    } else if (department === 'AD') {
        roleSelect2.innerHTML = `
      <option value="">Select Role</option>
      <option value="1st Assistant Director">1st Assistant Director</option>
      <option value="2nd Assistant Director">2nd Assistant Director</option>
      <option value="2nd 2nd Assistant Director">2nd 2nd Assistant Director</option>
      <option value="3rd Assistant Director">3rd Assistant Director</option>
      <option value="Cast Driver">Cast Driver</option>
      <option value="Set PA / Base Camp PA / Stand In / Trainee AD">Set PA / Base Camp PA / Stand In / Trainee AD</option>
      <option value="Trainee A.D">Trainee A.D</option>
    `;
    } else if (department === 'Art') {
        roleSelect2.innerHTML = `
    <option value="">Select Role</option>
    <option value="Animal Wrangler">Animal Wrangler</option>
    <option value="Animal Wrangler Assist">Animal Wrangler Assist</option>
    <option value="Art Department Coordinator">Art Department Coordinator</option>
    <option value="Art Dept Assistant / Clearances">Art Dept Assistant / Clearances</option>
    <option value="Art Dept Runner">Art Dept Runner</option>
    <option value="Art Director">Art Director</option>
    <option value="Art Trainee">Art Trainee</option>
    <option value="Assist Plasterer">Assist Plasterer</option>
    <option value="Assist Props Buyer">Assist Props Buyer</option>
    <option value="Assistant Art Director">Assistant Art Director</option>
    <option value="Assistant Drapes Master">Assistant Drapes Master</option>
    <option value="Assistant Model Maker">Assistant Model Maker</option>
    <option value="Assistant Props Master">Assistant Props Master</option>
    <option value="Assistant Set Decorator">Assistant Set Decorator</option>
    <option value="Brush/Plaster Hand">Brush/Plaster Hand</option>
    <option value="Carpenter">Carpenter</option>
    <option value="Casual Props Assist">Casual Props Assist</option>
    <option value="Concept Artist (off site)">Concept Artist (off site)</option>
    <option value="Construction Coordinator">Construction Coordinator</option>
    <option value="Construction Foreman">Construction Foreman</option>
    <option value="Construction Manager">Construction Manager</option>
    <option value="Construction Runner">Construction Runner</option>
    <option value="Construction Supervisor">Construction Supervisor</option>
    <option value="Drapes Master">Drapes Master</option>
    <option value="Food Stylist">Food Stylist</option>
    <option value="Graphic Assistant">Graphic Assistant</option>
    <option value="Graphic Designer">Graphic Designer</option>
    <option value="Greens Arborist">Greens Arborist</option>
    <option value="Greens Assist">Greens Assist</option>
    <option value="Greens Foreman">Greens Foreman</option>
    <option value="Greensman">Greensman</option>
    <option value="Head Greensman">Head Greensman</option>
    <option value="Head Steel Fabricator">Head Steel Fabricator</option>
    <option value="HOD Fabrication">HOD Fabrication</option>
    <option value="HOD Greens">HOD Greens</option>
    <option value="HOD Paint">HOD Paint</option>
    <option value="HOD Plaster">HOD Plaster</option>
    <option value="Key Set Dresser">Key Set Dresser</option>
    <option value="Leading Hand">Leading Hand</option>
    <option value="Model Maker">Model Maker</option>
        <option value="Motion Graphics Manager">Motion Graphics Manager</option>
    <option value="On Set Art Director">On Set Art Director</option>
    <option value="On Set Carpenter">On Set Carpenter</option>
    <option value="On Set Screens Technician">On Set Screens Technician</option>
    <option value="Onset Greensman">Onset Greensman</option>
    <option value="Onset Set Dresser">Onset Set Dresser</option>
    <option value="Painter">Painter</option>
    <option value="Plaster Lead Hand">Plaster Lead Hand</option>
    <option value="Plasterer">Plasterer</option>
    <option value="Prac Lighting Head Tech">Prac Lighting Head Tech</option>
    <option value="Prac Lighting Runner">Prac Lighting Runner</option>
    <option value="Production Designer">Production Designer</option>
    <option value="Prop Maker">Prop Maker</option>
    <option value="Props Buyer">Props Buyer</option>
    <option value="Props Carpenter">Props Carpenter</option>
    <option value="Props Co-ordinator">Props Co-ordinator</option>
    <option value="Props Designer">Props Designer</option>
    <option value="Props Finisher/Props Assist">Props Finisher/Props Assist</option>
    <option value="Props Master">Props Master</option>
    <option value="Props Standby">Props Standby</option>
    <option value="Scenic Artist">Scenic Artist</option>
    <option value="Scenic Assistant">Scenic Assistant</option>
    <option value="Scenic Brush Hand">Scenic Brush Hand</option>
    <option value="Scenic Foreman">Scenic Foreman</option>
    <option value="Scenic Lead Hand">Scenic Lead Hand</option>
    <option value="Scenic Painter">Scenic Painter</option>
    <option value="Senior Electrical Tech">Senior Electrical Tech</option>
    <option value="Senior Set Designer">Senior Set Designer</option>
    <option value="Set Builder">Set Builder</option>
    <option value="Set Dec Assistant">Set Dec Assistant</option>
    <option value="Set Dec Buyer">Set Dec Buyer</option>
    <option value="Set Dec Buyers Assist">Set Dec Buyers Assist</option>
    <option value="Set Dec Carpenter">Set Dec Carpenter</option>
    <option value="Set Dec Fabricator">Set Dec Fabricator</option>
    <option value="Set Dec Head of Fabrication">Set Dec Head of Fabrication</option>
    <option value="Set Dec Painter">Set Dec Painter</option>
    <option value="Set Dec Painter assist">Set Dec Painter assist</option>
    <option value="Set Dec Rigger">Set Dec Rigger</option>
    <option value="Set Dec Runner">Set Dec Runner</option>
    <option value="Set Dec Textiles">Set Dec Textiles</option>
    <option value="Set Deck Truck Driver">Set Deck Truck Driver</option>
    <option value="Set Decorator">Set Decorator</option>
    <option value="Set Designer">Set Designer</option>
    <option value="Standby Painter">Standby Painter</option>
    <option value="Standby Props Assist">Standby Props Assist</option>
    <option value="Storeroom Manager">Storeroom Manager</option>
    <option value="Sup. Props Fabricator">Sup. Props Fabricator</option>
    <option value="Supervising Art Director">Supervising Art Director</option>
    <option value="Swing Assistant">Swing Assistant</option>
    <option value="Swing Gang">Swing Gang</option>
    <option value="Trade Assist / Construction Support">Trade Assist / Construction Support</option>
    <option value="Truck Driver / Trade Assist">Truck Driver / Trade Assist</option>
    <option value="Vehicle Wrangler">Vehicle Wrangler</option>
    <option value="Vehicle Wrangler Assist">Vehicle Wrangler Assist</option>
    <option value="Workshop Joiner">Workshop Joiner</option>
    `;

    } else if (department === 'Camera') {
        roleSelect2.innerHTML = `
        <option value="">Select Role</option>
   <option value="1st AC / Focus Puller">1st AC / Focus Puller</option>
  <option value="2nd AC / Clapper Loader">2nd AC / Clapper Loader</option>
  <option value="2nd AC / Clapper Loader Truck/Film Loader">2nd AC / Clapper Loader Truck/Film Loader</option>
  <option value="2nd Unit Cinematographer">2nd Unit Cinematographer</option>
  <option value="3D Rig Technician">3D Rig Technician</option>
  <option value="A Camera Operator">A Camera Operator</option>
  <option value="Additional Camera Op (B/C/D)">Additional Camera Op (B/C/D)</option>
  <option value="Aerial Director of Photography">Aerial Director of Photography</option>
  <option value="Cable Runners">Cable Runners</option>
  <option value="Camera Trainee">Camera Trainee</option>
  <option value="CCU Operator">CCU Operator</option>
  <option value="ENG / News Gathering Camera Operators">ENG / News Gathering Camera Operators</option>
  <option value="Gimbal Operator">Gimbal Operator</option>
  <option value="Gimbal Technician">Gimbal Technician</option>
  <option value="Jib / Grip Operators">Jib / Grip Operators</option>
  <option value="Main Unit Cinematographer">Main Unit Cinematographer</option>
  <option value="Motion Control Assistant">Motion Control Assistant</option>
  <option value="Motion Control Operator">Motion Control Operator</option>
  <option value="Motion Control Technician">Motion Control Technician</option>
  <option value="OB / Live Sports Camera Operators">OB / Live Sports Camera Operators</option>
  <option value="Phantom Technician">Phantom Technician</option>
  <option value="Reality TV Camera Operators">Reality TV Camera Operators</option>
  <option value="Steadicam Operator">Steadicam Operator</option>
  <option value="Stereographer">Stereographer</option>
  <option value="Stills Photographer">Stills Photographer</option>
  <option value="Studio / Pedestal Camera Operators">Studio / Pedestal Camera Operators</option>
  <option value="Teleprompter">Teleprompter</option>
  <option value="Truck/Film Loader">Truck/Film Loader</option>
  <option value="Underwater Camera Operator">Underwater Camera Operator</option>
  <option value="Underwater Director of Photography">Underwater Director of Photography</option>
  <option value="Videographer">Videographer</option>
        `;


    } else if (department === 'Costume') {
        roleSelect2.innerHTML = `
        <option value="">Select Role</option>
    <option value="Assistant Costume Buyer">Assistant Costume Buyer</option>
<option value="Assistant Costume Coordinator / Supervisor">Assistant Costume Coordinator / Supervisor</option>
<option value="Assistant Costume Designer">Assistant Costume Designer</option>
<option value="Background / Extras Costume Assistant">Background / Extras Costume Assistant</option>
<option value="Background / Extras Costume Coordinator">Background / Extras Costume Coordinator</option>
<option value="Background / Extras Costume Dresser / Standby">Background / Extras Costume Dresser / Standby</option>
<option value="Background / Extras Costume Supervisor">Background / Extras Costume Supervisor</option>
<option value="Background / Extras Stylist">Background / Extras Stylist</option>
<option value="Background / Key Extras Costume Standby">Background / Key Extras Costume Standby</option>
<option value="Breakdown Artist">Breakdown Artist</option>
<option value="Breakdown Assistant">Breakdown Assistant</option>
<option value="Costume Armour Fabricator">Costume Armour Fabricator</option>
<option value="Costume Assistant Entry  - Qualified">Costume Assistant Entry  - Qualified</option>
<option value="Costume Barding Maker">Costume Barding Maker</option>
<option value="Costume Breakdown Supervisor">Costume Breakdown Supervisor</option>
<option value="Costume Buyer">Costume Buyer</option>
<option value="Costume Clearance Assistant">Costume Clearance Assistant</option>
<option value="Costume Coordinator">Costume Coordinator</option>
<option value="Costume Design Assistant">Costume Design Assistant</option>
<option value="Costume Designer">Costume Designer</option>
<option value="Costume Digital Assisitant">Costume Digital Assisitant</option>
<option value="Costume Dresser">Costume Dresser</option>
<option value="Costume Embroiderer">Costume Embroiderer</option>
<option value="Costume Graphics Artist">Costume Graphics Artist</option>
<option value="Costume Hand Finisher">Costume Hand Finisher</option>
<option value="Costume Illustrator">Costume Illustrator</option>
<option value="Costume Jeweller">Costume Jeweller</option>
<option value="Costume Jeweller Assistant">Costume Jeweller Assistant</option>
<option value="Costume Knitter">Costume Knitter</option>
<option value="Costume Leatherworker">Costume Leatherworker</option>
<option value="Costume Milliner">Costume Milliner</option>
<option value="Costume Milliner Assistant">Costume Milliner Assistant</option>
<option value="Costume Props Assistant">Costume Props Assistant</option>
<option value="Costume Props Junior Assistant">Costume Props Junior Assistant</option>
<option value="Costume Props Maker/Moulder">Costume Props Maker/Moulder</option>
<option value="Costume Props Supervisor">Costume Props Supervisor</option>
<option value="Costume Runner">Costume Runner</option>
<option value="Costume Standby">Costume Standby</option>
<option value="Costume Standby Assistant">Costume Standby Assistant</option>
<option value="Costume Supervisor">Costume Supervisor</option>
<option value="Costume Trainee - Unqualified">Costume Trainee - Unqualified</option>
<option value="Costume Workroom Supervisor">Costume Workroom Supervisor</option>
<option value="Extras Daily Assistant">Extras Daily Assistant</option>
<option value="Head Machinist">Head Machinist</option>
<option value="Head Pattern Cutter">Head Pattern Cutter</option>
<option value="Junior Buyer">Junior Buyer</option>
<option value="Key Costume Standby">Key Costume Standby</option>
<option value="Lead Daily Assistant">Lead Daily Assistant</option>
<option value="Machinist">Machinist</option>
<option value="Military Costume Specialist">Military Costume Specialist</option>
<option value="Offset Costume Coordinator">Offset Costume Coordinator</option>
<option value="Onset Costume Armourer">Onset Costume Armourer</option>
<option value="Onset Costume Assistant Entry">Onset Costume Assistant Entry</option>
<option value="Onset Costume Supervisor">Onset Costume Supervisor</option>
<option value="Pattern Cutter">Pattern Cutter</option>
<option value="SMALL DRAMA/TVC - Makeup and Costume Combo Assistant">SMALL DRAMA/TVC - Makeup and Costume Combo Assistant</option>
<option value="SMALL DRAMA/TVC - Makeup and Costume Combo Technician">SMALL DRAMA/TVC - Makeup and Costume Combo Technician</option>
<option value="SMALL DRAMA/TVC - Makeup and Costume Stylist/Design Combo">SMALL DRAMA/TVC - Makeup and Costume Stylist/Design Combo</option>
<option value="Textile Artist">Textile Artist</option>
<option value="Textile Assistant">Textile Assistant</option>
<option value="Textile Supervisor">Textile Supervisor</option>
<option value="TVC - Costume Stylist">TVC - Costume Stylist</option>
<option value="TVC - Costume Stylist Assistant">TVC - Costume Stylist Assistant</option>
<option value="Workroom Assistant">Workroom Assistant</option>

        `;

    } else if (department === 'Acting') {
        roleSelect2.innerHTML = `
        <option value="">Select Role</option>
    <option value="Actor">Actor</option>
<option value="Extra">Extra</option>

        `;


    } else if (department === 'Stunt') {
        roleSelect2.innerHTML = `
        <option value="">Select Role</option>
<option value="Assistant Stunt Coordinator">Assistant Stunt Coordinator</option>
<option value="Fight Coordinator">Fight Coordinator</option>
<option value="Key Stunt Rigger">Key Stunt Rigger</option>
<option value="Stunt Coordinator">Stunt Coordinator</option>
<option value="Stunt Performer/Specialist">Stunt Performer/Specialist</option>
<option value="Stunt Performer/Utility">Stunt Performer/Utility</option>

        `;


    } else if (department === 'DIT / Video') {
        roleSelect2.innerHTML = `
        <option value="">Select Role</option>
    <option value="DATA - Dailies Colourist">DATA - Dailies Colourist</option>
<option value="DATA - Dailies Producer">DATA - Dailies Producer</option>
<option value="DATA - Data Coordinator">DATA - Data Coordinator</option>
<option value="DATA - Data Manager">DATA - Data Manager</option>
<option value="DATA - Data Wrangler">DATA - Data Wrangler</option>
<option value="DIT - DIT Assistant">DIT - DIT Assistant</option>
<option value="DIT - DIT Utility">DIT - DIT Utility</option>
<option value="DIT - Offset DIT">DIT - Offset DIT</option>
<option value="DIT - Onset DIT">DIT - Onset DIT</option>
<option value="Streaming Assistant">Streaming Assistant</option>
<option value="Streaming Operator">Streaming Operator</option>
<option value="VID - Cable Wrangler">VID - Cable Wrangler</option>
<option value="VID - Video Playback Assistant">VID - Video Playback Assistant</option>
<option value="VID - Video Playback Operator">VID - Video Playback Operator</option>
<option value="VID - Video Playback Trainee">VID - Video Playback Trainee</option>
<option value="VID - Video Playback Utility">VID - Video Playback Utility</option>


        `;

    } else if (department === 'Grip') {
        roleSelect2.innerHTML = `
        <option value="">Select Role</option>
    <option value="A Dolly Grip">A Dolly Grip</option>
<option value="B Dolly Grip">B Dolly Grip</option>
<option value="Best Boy/ Girl ( on set and off)">Best Boy/ Girl (on set and off)</option>
<option value="Company Grip">Company Grip</option>
<option value="Crane Grip">Crane Grip</option>
<option value="Crane Technician">Crane Technician</option>
<option value="Grip">Grip</option>
<option value="Grip Assistant">Grip Assistant</option>
<option value="Key Grip">Key Grip</option>
<option value="Key Production Rigging Grip">Key Production Rigging Grip</option>
<option value="Key Rigging Grip">Key Rigging Grip</option>
<option value="Motion Control Grip">Motion Control Grip</option>
<option value="Production Rigger 1">Production Rigger 1</option>
<option value="Production Rigger 2">Production Rigger 2</option>
<option value="Remote Head Technician">Remote Head Technician</option>
<option value="Rigging Asst">Rigging Asst</option>
<option value="Rigging Best Boy Grip">Rigging Best Boy Grip</option>
<option value="Rigging Grip">Rigging Grip</option>
<option value="Rigging Grip Trainee">Rigging Grip Trainee</option>
<option value="Rigging Lead Hand">Rigging Lead Hand</option>
<option value="Russian Arm Operator">Russian Arm Operator</option>
<option value="Russian Arm Technician">Russian Arm Technician</option>
<option value="Techno Dolly Grip">Techno Dolly Grip</option>
<option value="Techno Dolly Trainee">Techno Dolly Trainee</option>
<option value="Tracking vehicle driver">Tracking vehicle driver</option>
<option value="Tracking Vehicle Grip">Tracking Vehicle Grip</option>
<option value="Trainee Grip">Trainee Grip</option>

        `;


    } else if (department === 'Lighting') {
        roleSelect2.innerHTML = `
        <option value="">Select Role</option>
    <option value="Best Boy Onset">Best Boy Onset</option>
<option value="DMX Tech">DMX Tech</option>
<option value="Gaffer">Gaffer</option>
<option value="Generator Operator">Generator Operator</option>
<option value="Lamp Operator">Lamp Operator</option>
<option value="Lighting Assistant">Lighting Assistant</option>
<option value="Lighting Console Operator">Lighting Console Operator</option>
<option value="Lighting Coordinator">Lighting Coordinator</option>
<option value="Lighting Electrician (Sparkie)">Lighting Electrician (Sparkie)</option>
<option value="Lighting Runner">Lighting Runner</option>
<option value="Lighting Technician">Lighting Technician</option>
<option value="Lighting Trainee">Lighting Trainee</option>
<option value="Rigging Best Boy">Rigging Best Boy</option>
<option value="Rigging CAD Draughtsperson">Rigging CAD Draughtsperson</option>
<option value="Rigging DMX Tech">Rigging DMX Tech</option>
<option value="Rigging Electrician (Sparkie)">Rigging Electrician (Sparkie)</option>
<option value="Rigging Gaffer">Rigging Gaffer</option>
<option value="Rigging Leading Hand">Rigging Leading Hand</option>
<option value="Rigging Lighting Console Operator">Rigging Lighting Console Operator</option>
<option value="Senior Lighting Technician">Senior Lighting Technician</option>


        `;


    } else if (department === 'Location') {
        roleSelect2.innerHTML = `
        <option value="">Select Role</option>
    <option value="Key Location Scout">Key Location Scout</option>
<option value="Location Assistant">Location Assistant</option>
<option value="Location Managers Assist">Location Managers Assist</option>
<option value="Location Managers Coordinator">Location Managers Coordinator</option>
<option value="Location Scout Assist">Location Scout Assist</option>
<option value="Location Scout Co-ordinator">Location Scout Co-ordinator</option>
<option value="Location Trainee">Location Trainee</option>
<option value="Off-Set Location Manager">Off-Set Location Manager</option>
<option value="On-Set Location Manager">On-Set Location Manager</option>
<option value="On-set Location Managers Assistant">On-set Location Managers Assistant</option>
<option value="On-set Location P.A">On-set Location P.A</option>
<option value="Studio Manager">Studio Manager</option>
<option value="Studio Manager Assist">Studio Manager Assist</option>
<option value="Studio Night Manager">Studio Night Manager</option>
<option value="Supervising Location Coordinator">Supervising Location Coordinator</option>
<option value="Supervising Location Manager">Supervising Location Manager</option>
<option value="Supervising Location Manager Assistant">Supervising Location Manager Assistant</option>


        `;


    } else if (department === 'Make Up') {
        roleSelect2.innerHTML = `
        <option value="">Select Role</option>
    <option value="Additional Hair and Makeup Artist">Additional Hair and Makeup Artist</option>
<option value="BG Additional Hair and Makeup Artist">BG Additional Hair and Makeup Artist</option>
<option value="BG Hair and Makeup Artist">BG Hair and Makeup Artist</option>
<option value="BG Hair and Makeup Assistant">BG Hair and Makeup Assistant</option>
<option value="BG Hair and Makeup Trainee">BG Hair and Makeup Trainee</option>
<option value="BG Junior Hair and Makeup Artist">BG Junior Hair and Makeup Artist</option>
<option value="BG Makeup &amp; Hair Supervisor">BG Makeup &amp; Hair Supervisor</option>
<option value="BG Senior Hair and Makeup Artist">BG Senior Hair and Makeup Artist</option>
<option value="Designers Assistant">Designers Assistant</option>
<option value="Facial Hair Maker">Facial Hair Maker</option>
<option value="Hair &amp; Makeup Doubles Supervisor">Hair &amp; Makeup Doubles Supervisor</option>
<option value="Hair &amp; Makeup Onset Supervisor">Hair &amp; Makeup Onset Supervisor</option>
<option value="Hair and Makeup Artist">Hair and Makeup Artist</option>
<option value="Hair and Makeup Assistant">Hair and Makeup Assistant</option>
<option value="Hair and Makeup Co-Designer">Hair and Makeup Co-Designer</option>
<option value="Hair and Makeup Co-Designer (off set)">Hair and Makeup Co-Designer (off set)</option>
<option value="Hair and Makeup Dept Assistant (off set)">Hair and Makeup Dept Assistant (off set)</option>
<option value="Hair and Makeup Dept Coordinator (off set)">Hair and Makeup Dept Coordinator (off set)</option>
<option value="Hair and Makeup Designer">Hair and Makeup Designer</option>
<option value="Hair and Makeup Trainee">Hair and Makeup Trainee</option>
<option value="Junior Hair and Makeup Artist">Junior Hair and Makeup Artist</option>
<option value="Junior Prosthetics Makeup Artist">Junior Prosthetics Makeup Artist</option>
<option value="Leads Hair and Makeup Artist">Leads Hair and Makeup Artist</option>
<option value="Leads Hair Stylist">Leads Hair Stylist</option>
<option value="Leads Makeup Artist">Leads Makeup Artist</option>
<option value="Prosthetics Assistant">Prosthetics Assistant</option>
<option value="Prosthetics Coordinator">Prosthetics Coordinator</option>
<option value="Prosthetics Designer">Prosthetics Designer</option>
<option value="Prosthetics Makeup Artist">Prosthetics Makeup Artist</option>
<option value="Prosthetics Makeup Trainee">Prosthetics Makeup Trainee</option>
<option value="Prosthetics Supervisor">Prosthetics Supervisor</option>
<option value="Senior Hair and Makeup Artist">Senior Hair and Makeup Artist</option>
<option value="Senior Prosthetics Makeup Artist">Senior Prosthetics Makeup Artist</option>
<option value="SMALL DRAMA/TVC - Makeup &amp; Costume Combo Assistant">SMALL DRAMA/TVC - Makeup &amp; Costume Combo Assistant</option>
<option value="SMALL DRAMA/TVC - Makeup &amp; Costume Combo Technician">SMALL DRAMA/TVC - Makeup &amp; Costume Combo Technician</option>
<option value="SMALL DRAMA/TVC - Makeup &amp; Costume Stylist/Design Combo">SMALL DRAMA/TVC - Makeup &amp; Costume Stylist/Design Combo</option>
<option value="Wig Assistant">Wig Assistant</option>
<option value="Wig Build Supervisor">Wig Build Supervisor</option>
    <option value="Wig Knotter">Wig Knotter</option>
<option value="Wig Maker">Wig Maker</option>
<option value="Wig Workroom Supervisor">Wig Workroom Supervisor</option>
</select >
            `;


    } else if (department === 'Production') {
        roleSelect2.innerHTML = `
        <option value="">Select Role</option>
        <option value="Agency Driver">Agency Driver</option>
    <option value="Assets Coordinator">Assets Coordinator</option>
    <option value="Assistant Extras Coordinator">Assistant Extras Coordinator</option>
    <option value="Assistant Production Coordinator">Assistant Production Coordinator</option>
    <option value="Assistant Production Manager">Assistant Production Manager</option>
    <option value="Assistant Travel and Accommodation Coordinator">Assistant Travel and Accommodation Coordinator</option>
    <option value="Body Double">Body Double</option>
    <option value="Cast Assistant">Cast Assistant</option>
    <option value="Cast Coordinator">Cast Coordinator</option>
    <option value="Cast Driver Coordinator">Cast Driver Coordinator</option>
    <option value="Cast Manager">Cast Manager</option>
    <option value="Casting Assistant">Casting Assistant</option>
    <option value="Casting Associate">Casting Associate</option>
    <option value="Casting Coordinator">Casting Coordinator</option>
    <option value="Casting Director">Casting Director</option>
    <option value="Casting Producer">Casting Producer</option>
    <option value="Chaperone">Chaperone</option>
    <option value="Client Driver">Client Driver</option>
    <option value="Casting Director">Casting Director</option>
    <option value="Director's Assistant">Director's Assistant</option>
    <option value="Extras Casting Assistant">Extras Casting Assistant</option>
    <option value="Extras Casting Coordinator">Extras Casting Coordinator</option>
    <option value="Extras Casting Director">Extras Casting Director</option>
    <option value="Extras Coordinator">Extras Coordinator</option>
    <option value="Extras Production Assistant">Extras Production Assistant</option>
    <option value="Intimacy Co-ordinator">Intimacy Co-ordinator</option>
    <option value="Line Producer">Line Producer</option>    
    <option value="Medical Advisor">Medical Advisor</option>
            <option value="Producer">Producer</option>
    <option value="Personal Assistant">Personal Assistant</option>
    <option value="Producer's Assistant">Producer's Assistant</option>
    <option value="Production Accountant">Production Accountant</option>
    <option value="Production Accountant Assistant">Production Accountant Assistant</option>
    <option value="Production Assistant">Production Assistant</option>
    <option value="Production Coordinator">Production Coordinator</option>
    <option value="Production Driver">Production Driver</option>
    <option value="Production Manager">Production Manager</option>
    <option value="Production Runner">Production Runner</option>
    <option value="Production Secretary">Production Secretary</option>
    <option value="Production Supervisor">Production Supervisor</option>
    <option value="Production Trainee">Production Trainee</option>
    <option value="Receptionist">Receptionist</option>
    <option value="Researcher">Researcher</option>
    <option value="Stand In">Stand In</option>
    <option value="Teacher">Teacher</option>
    <option value="Travel and Accommodation Coordinator">Travel and Accommodation Coordinator</option>
    <option value="Unit Production Manager">Unit Production Manager</option>
        `;


    } else if (department === 'Safety') {
        roleSelect2.innerHTML = `
        <option value="">Select Role</option>
    <option value="Covid Cleaners">Covid Cleaners</option>
<option value="COVID Compliance Assistant">COVID Compliance Assistant</option>
<option value="Covid Manager - offset">Covid Manager - offset</option>
<option value="Covid Nurse">Covid Nurse</option>
<option value="Covid Supervisor/Compliance Officer">Covid Supervisor/Compliance Officer</option>
<option value="Covid Testers">Covid Testers</option>
<option value="Doctor">Doctor</option>
<option value="Lifeguard">Lifeguard</option>
<option value="Marine Specialist">Marine Specialist</option>
<option value="Safety Assistant - off/onset">Safety Assistant - off/onset</option>
<option value="Safety Manager offset">Safety Manager offset</option>
<option value="Safety Officer- Off/Onset">Safety Officer- Off/Onset</option>
<option value="Safety Specialist (Riverandlakes, Marine, Alpine, Work at height)">Safety Specialist (Riverandlakes, Marine, Alpine, Work at height)</option>
<option value="Safety Specialist: Onset Nurse">Safety Specialist: Onset Nurse</option>
<option value="Safety Specialist: Onset Paramedical">Safety Specialist: Onset Paramedical</option>
<option value="Safety Supervisor/Manager onset">Safety Supervisor/Manager onset</option>
<option value="Skipper">Skipper</option>
<option value="Trainee Safety Officer (tbc)">Trainee Safety Officer (tbc)</option>

        `;


    } else if (department === 'Script') {
        roleSelect2.innerHTML = `
        <option value="">Select Role</option>
    <option value="Assistant Script Supervisor/ Script Supervisor Co-Ordinator">Assistant Script Supervisor/ Script Supervisor Co-Ordinator</option>
<option value="Script Coordinator">Script Coordinator</option>
<option value="Script Editor">Script Editor</option>
<option value="Script Supervisor">Script Supervisor</option>
<option value="Script Trainee">Script Trainee</option>

        `;


    } else if (department === 'Sound') {
        roleSelect2.innerHTML = `
        <option value="">Select Role</option>
    <option value="1st Assistant Sound (1AS)">1st Assistant Sound (1AS)</option>
<option value="2nd Asisstant Sound (2AS)">2nd Asisstant Sound (2AS)</option>
<option value="3rd Asisstant Sound (3AS)">3rd Asisstant Sound (3AS)</option>
<option value="Production Sound Mixer">Production Sound Mixer</option>
<option value="Sound Playback Operator">Sound Playback Operator</option>
<option value="Sound Rec documentary (International)">Sound Rec documentary (International)</option>
<option value="Sound Rec documentary (Local)">Sound Rec documentary (Local)</option>
<option value="Sound Trainee">Sound Trainee</option>

        `;


    } else if (department === 'SPFX') {
        roleSelect2.innerHTML = `
        <option value="">Select Role</option>
    <option value="Armourer">Armourer</option>
<option value="Assistant Armourer">Assistant Armourer</option>
<option value="SPFX Assistant Supervisor">SPFX Assistant Supervisor</option>
<option value="SPFX Assistant Supervisor">SPFX Assistant Supervisor</option>
<option value="SPFX Intern/Trainee">SPFX Intern/Trainee</option>
<option value="SPFX Office Coordinator">SPFX Office Coordinator</option>
<option value="SPFX Offset Coordinator/Key">SPFX Offset Coordinator/Key</option>
<option value="SPFX Onset Coordinator/Key">SPFX Onset Coordinator/Key</option>
<option value="SPFX Runner/Assistant">SPFX Runner/Assistant</option>
<option value="SPFX Senior Technician">SPFX Senior Technician</option>
<option value="SPFX Supervisor">SPFX Supervisor</option>
<option value="SPFX Technician">SPFX Technician</option>

        `;


    } else if (department === 'Transport') {
        roleSelect2.innerHTML = `
        <option value="">Select Role</option>
    <option value="Assist Transport Coordinator">Assist Transport Coordinator</option>
<option value="Auto Electrician">Auto Electrician</option>
<option value="Mechanic">Mechanic</option>
<option value="Onset Drivers">Onset Drivers</option>
<option value="Swing Captain">Swing Captain</option>
<option value="Swing Coordinator">Swing Coordinator</option>
<option value="Transport Assistant">Transport Assistant</option>
<option value="Transport Captain">Transport Captain</option>
<option value="Transport Coordinator">Transport Coordinator</option>
<option value="Transport Manager">Transport Manager</option>
<option value="Transport Trainee">Transport Trainee</option>
<option value="Waste Driver">Waste Driver</option>

        `;


    } else if (department === 'Unit') {
        roleSelect2.innerHTML = `
        <option value="">Select Role</option>
    <option value="Assistant Unit Manager">Assistant Unit Manager</option>
<option value="Craft Assistant">Craft Assistant</option>
<option value="Craft Manager">Craft Manager</option>
<option value="Senior Unit Technician">Senior Unit Technician</option>
<option value="Unit Assistant">Unit Assistant</option>
<option value="Unit Manager">Unit Manager</option>
<option value="Unit Trainee">Unit Trainee</option>

        `;


    } else if (department === 'Catering') {
        roleSelect2.innerHTML = `
        <option value="">Select Role</option>
    <option value="Caterer">Caterer</option>
<option value="Catering Hand">Catering Hand</option>

        `;




    } else {
        roleSelect2.innerHTML = `<option value="">Select Role</option> `;
    }
});