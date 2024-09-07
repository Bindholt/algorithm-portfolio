        const values = [21,22,23,25,27,28,29,31,32,34,35];
        const wordList = ["andedam", "andegård", "bondefanget", "bondegård", "børnearbejde", "gadefejer", "gær", "gødning", "gaardejer", "kalapøjser", "kalundborg", "kørt", "kårde", "ålborg"];
        const persons = [{name: "Draco Malfoy", house: "Slytherin"},
            {name: "Harry Potter", house: "Gryffindor"},
            {name: "Hermione Granger", house: "Gryffindor"},
            {name: "Neville Longbottom", house: "Gryffindor"},
            {name: "Ron Weasley", house: "Gryffindor"}
        ];
        
        // få denne søgning til at virke
        binarySearch("Ron Weasley", persons, namecomparefunction);

        function binarySearch(search, values, compFunc) {
            let min = 0;
            let max = values.length - 1;

            while(min <= max){
                let middleIndex = Math.floor((max+min)/2);
                let compared = compFunc(search, values[middleIndex])
                switch (true) {
                    case compared > 0:
                        min = middleIndex + 1;
                        break;
                    case compared < 0:
                        max = middleIndex - 1;
                        break;
                    case compared == 0:
                        return middleIndex;
                    default:
                        break;
                }
            }

            return -1;
        }

        function compare(val1, val2) {
            return val1-val2;
        }

        function stringcomparefunction(val1, val2) {
            return val1.localeCompare(val2, "da");
        }

        function namecomparefunction(val1, val2) {
            return val1.localeCompare(val2.name, "da");
        }


        let index = binarySearch(35, values, compare);
        console.log(index);

        index = binarySearch("gaardejer", wordList, stringcomparefunction);
        console.log(index);

        index = binarySearch("Ron Weasley", persons, namecomparefunction);
        console.log(index);