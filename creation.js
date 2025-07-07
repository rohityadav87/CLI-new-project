//  `fs` (File System) — Node.js का module है जो फाइलें बनाने/पढ़ने/लिखने में मदद करता है।
// `readline` — ये यूज़र से command line में input लेने के लिए है।
 import readline from 'readline';
import fs from 'fs';

// ये line एक interface बनाती है जिससे हम terminal पर user से input ले सकते हैं।
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//  ये एक function है जिसका नाम `filecreation` है, जो सारा काम करेगा।
const filecreation = () => {
    // ये user से एक सवाल पूछता है: "Enter your filename:"
// जो भी यूज़र टाइप करेगा वो filename में आएगा।
    r1.question("Enter your filename: ", (filename) => {
        // इसके अंदर एक और question पूछा जा रहा है: "Enter the content for your file:"
//  इसका जवाब `content` variable में आएगा।
        r1.question("Enter the content for your file: ", (content) => {
            // अब यह line यूज़र द्वारा दिया गया content को एक फाइल में लिख देती है।
            // ${filename}.txt मतलब फाइल का नाम जो user ने दिया, उसके साथ .txt जोड़ना।
            // अगर filename = "hello" है तो फाइल बनेगी hello.txt
            fs.writeFile(`${filename}.txt`, content, (err) => {
                // - अगर फाइल बनाते समय कोई error हुआ तो error दिखाएगा।
                // - नहीं तो success message देगा।
                if (err) {
                    console.error("Error writing the file");
                } else {
                    console.log(`File "${filename}.txt" created successfully!`);
                }
                r1.close();
            });
        });
    });
};
filecreation();
