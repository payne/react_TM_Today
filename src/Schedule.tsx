

function MeetingOrder() {
    const meetingOrder = {
                      'PO': 'Presiding Officer',
                      'I': 'Invocator',
                      'GR': 'Grammarian',
                      'J': 'Jester',
                      'TT': 'Table Topics',
                      'T': 'Timer', 
                      'TM': 'Toastmaster',
                      'CE': 'General Evaluator',
                      'S': 'Speaker',
                      'E': 'Evaluator',
                      'BC': 'Vote Counter',
                      'GT': 'Grunt Tabulator'
                    };
    return meetingOrder;
}

function GetDates(schedule: any[]) {
    const dates = Object.keys(schedule[0]);
    return dates.slice(2);
}

function GetAssigned(schedule: any[], date: string) {
    // TODO: This is not right -- fix it
    const rolePeople = schedule.map((person) => {
        const name = `${person["First Name"]} ${person["Last Name"]}`;  
        const role = person[date];
        return {name, role};
    });
    const roleToPerson = rolePeople.reduce((acc: any, person: any) => {
        const {name, role} = person;
        if (acc[role]) {
            acc[role].push(name);
        } else {
            acc[role] = [name];
        }
        return acc;
    }, {});

    // This looks good! Even has '' for people with no roles assigned
    // console.log(roleToPerson);

    const assginments: string[] = [];
    const meetingOrder = MeetingOrder();
    for (const role in meetingOrder) {
        // console.log(`for role ${role} roleToPerson[role] is ${roleToPerson[role]}`);
        if (roleToPerson[role]) {
            roleToPerson[role].forEach( (person: string) => {
                assginments.push(`${role}: ${person}`);
            });
        }
    }

    return assginments;
}

function Schedule() {
    return  [
{"First Name":"Shelly","Last Name":"Anzalone","3/29": "GR", "4/5":"S","4/12":"E","4/19":"","4/26":"T","5/3":"","5/10":"BC","5/17":"","5/24":"S","5/31":"E"},
{"First Name":"Suzie","Last Name":"Bremer","3/29": "I", "4/5":"I","4/12":"S","4/19":"","4/26":"","5/3":"T","5/10":"","5/17":"BC","5/24":"","5/31":"S"},
{"First Name":"Lee","Last Name":"Brungardt","3/29": "", "4/5":"GR","4/12":"I","4/19":"S","4/26":"","5/3":"","5/10":"T","5/17":"","5/24":"BC","5/31":""},
{"First Name":"Betsy","Last Name":"Conway","3/29": "E", "4/5":"","4/12":"GR","4/19":"I","4/26":"S","5/3":"","5/10":"","5/17":"T","5/24":"","5/31":"BC"},
{"First Name":"John","Last Name":"Fleming","3/29": "CE", "4/5":"E","4/12":"","4/19":"GR","4/26":"I","5/3":"S","5/10":"CE","5/17":"","5/24":"T","5/31":""},
{"First Name":"Travis","Last Name":"Forsman","3/29": "", "4/5":"CE","4/12":"E","4/19":"","4/26":"GR","5/3":"I","5/10":"S","5/17":"GT","5/24":"","5/31":"T"},
{"First Name":"Bruce","Last Name":"Godfrey","3/29": "", "4/5":"GT","4/12":"CE","4/19":"E","4/26":"","5/3":"GR","5/10":"I","5/17":"S","5/24":"GT","5/31":""},
{"First Name":"John","Last Name":"Hall","3/29": "S", "4/5":"","4/12":"GT","4/19":"CE","4/26":"E","5/3":"","5/10":"GR","5/17":"I","5/24":"S","5/31":"GT"},
{"First Name":"Mark","Last Name":"Hjelle","3/29": "GT", "4/5":"S","4/12":"","4/19":"GT","4/26":"CE","5/3":"E","5/10":"","5/17":"GR","5/24":"I","5/31":"S"},
{"First Name":"Steve","Last Name":"Nabity","3/29": "J", "4/5":"E","4/12":"S","4/19":"","4/26":"GT","5/3":"CE","5/10":"E","5/17":"","5/24":"GR","5/31":"I"},
{"First Name":"Roxy","Last Name":"Orr","3/29": "TM", "4/5":"J","4/12":"X","4/19":"S","4/26":"","5/3":"GT","5/10":"X","5/17":"E","5/24":"","5/31":"GR"},
{"First Name":"Matt","Last Name":"Payne","3/29": "E", "4/5":"TM","4/12":"J","4/19":"E","4/26":"S","5/3":"","5/10":"GT","5/17":"CE","5/24":"E","5/31":""},
{"First Name":"Bob","Last Name":"Perrin","3/29": "TT", "4/5":"","4/12":"TM","4/19":"J","4/26":"E","5/3":"S","5/10":"","5/17":"X","5/24":"X","5/31":"X"},
{"First Name":"Scott","Last Name":"Petersen","3/29": "", "4/5":"TT","4/12":"","4/19":"TM","4/26":"J","5/3":"E","5/10":"S","5/17":"","5/24":"CE","5/31":"E"},
{"First Name":"Curt","Last Name":"Reiter","3/29": "S", "4/5":"E","4/12":"TT","4/19":"","4/26":"TM","5/3":"J","5/10":"E","5/17":"S","5/24":"","5/31":"CE"},
{"First Name":"Ellen","Last Name":"Scott","3/29": "BC", "4/5":"S","4/12":"E","4/19":"TT","4/26":"","5/3":"TM","5/10":"J","5/17":"E","5/24":"S","5/31":""},
{"First Name":"Leslie","Last Name":"Shi","3/29": "", "4/5":"","4/12":"S","4/19":"E","4/26":"TT","5/3":"","5/10":"TM","5/17":"J","5/24":"E","5/31":"S"},
{"First Name":"Roger","Last Name":"Snowden","3/29": "T", "4/5":"BC","4/12":"","4/19":"S","4/26":"E","5/3":"TT","5/10":"","5/17":"TM","5/24":"J","5/31":"E"},
{"First Name":"Bill","Last Name":"Sousan","3/29": "", "4/5":"","4/12":"BC","4/19":"","4/26":"S","5/3":"E","5/10":"TT","5/17":"","5/24":"TM","5/31":"J"},
{"First Name":"Bill","Last Name":"Stowell","3/29": "PO", "4/5":"PO","4/12":"PO","4/19":"PO","4/26":"PO","5/3":"PO","5/10":"PO","5/17":"PO","5/24":"PO","5/31":"PO"},
{"First Name":"Anitha","Last Name":"Teekaraman","3/29": "", "4/5":"T","4/12":"","4/19":"BC","4/26":"","5/3":"S","5/10":"E","5/17":"TT","5/24":"","5/31":"TM"},
{"First Name":"Andrew","Last Name":"Wesely","3/29": "E", "4/5":"","4/12":"T","4/19":"","4/26":"BC","5/3":"","5/10":"S","5/17":"E","5/24":"TT","5/31":""},
{"First Name":"Keith","Last Name":"Wilbur","3/29": "S", "4/5":"X","4/12":"","4/19":"T","4/26":"","5/3":"BC","5/10":"","5/17":"S","5/24":"E","5/31":"TT"}
].map((item) => {
    let lastName = item["Last Name"];
    lastName = lastName.slice(0,1);
    item["Last Name"] = lastName;
    return item;
});
}
const getUnassigned = (d: string, schedule: Array<any>): Array<any> => {
    return schedule.filter((person) => !person[d]);
}
export { MeetingOrder, Schedule , GetDates, GetAssigned, getUnassigned};