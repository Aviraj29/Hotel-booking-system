function countVowel(input) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const vowelCounts = {};
  
    // Initialize vowelCounts with 0 for each vowel
    vowels.forEach(vowel => {
      vowelCounts[vowel] = 0;
    });
  
    // Convert input to lowercase for case-insensitive comparison
    const lowerInput = input.toLowerCase();
  
    // Loop through each character in the input
    for (let char of lowerInput) {
      if (vowels.includes(char)) {
        vowelCounts[char]++;
      }
    }
  
    // Print the vowel counts
    for (let vowel in vowelCounts) {
      console.log(`${vowel}: ${vowelCounts[vowel]}`);
    }
  }
  
  const input = "weghawisdovnaghaoelg qaszqacfweg verd sged";
  countVowel(input);