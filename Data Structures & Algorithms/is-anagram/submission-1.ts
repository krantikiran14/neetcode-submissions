class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;
        const sor = s.split('').sort();
        const tor = t.split('').sort();
        for(let i=0;i<sor.length;i++){
            if(sor[i]!=tor[i]){
                return false
            }
        }
        return true
    }
}
