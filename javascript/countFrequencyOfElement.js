let arr = [3, 2, "a", 3, "b", 3, 2, "a", "b", 3, 3, 2, 1, "a", 3];
let max = 0;
let maxElement = "";

function countMaxFrequency(m) {

    for (i = 0; i < m.length; i++) {
        let count = 1;
        {
            for (j = i + 1; j < m.length; j++)
                if (m[i] == m[j])
                    count += 1;
                else
                    continue;

        }
        if (count > max) {
            max = count;
            maxElement = m[i];
        }
        else
            continue;

    }
    console.log(maxElement + " repeated " + max + " times");
}
countMaxFrequency(arr);

