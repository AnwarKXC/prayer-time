<script>
// translationService.js
import axios from 'axios';

const API_KEY = 'AIzaSyAd2OvEwJF73OCmpPCf5pachKetrd9ycKI';
const API_URL = 'https://translation.googleapis.com/language/translate/v2';

export const translateText = async (text, targetLanguage) => {
    try {
        const response = await axios.post(
            `${API_URL}?key=${API_KEY}`,
            {
                q: text,
                target: targetLanguage,
            }
        );
        // alert(response.data.data.translations[0].translatedText.replace(/\s+/g, '_').trim(), 'hai ye');
        return response.data.data.translations[0].translatedText.replace(/\s+/g, '-').trim();
    } catch (error) {
        console.error('Translation error:', error);
        throw error;
    }
};

</script>
