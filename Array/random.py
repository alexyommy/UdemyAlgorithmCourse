def funWithAnagrams(text):
    if len(text) >= 1000:
        return 'Error: Anagram list is too long'

    sorted_words = {}
    for word in text:
        if len(word) >= 1000:
            return 'Error: Word length is too long'
        elif word.isalpha() == False:
            return 'Error: Word contains non A-Z characters'
        sorted_words[word] = sorted(word)

    valid_words = {}
    for key, value in sorted_words.items():
        if value not in list(valid_words.values()):
            valid_words[key] = value
    
    return sorted(valid_words.keys())
        
str = ['code', 'doce', 'ecod', 'framer', 'frame']
print(funWithAnagrams(str))