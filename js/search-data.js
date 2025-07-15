// Search data containing all searchable content from the website
const searchData = [
    // Homepage content
    {
        id: 'home-welcome',
        title: 'مرحباً بك في قاعدة معرفة مراسلتي',
        content: 'دليلك الشامل للتعرف على خدمات النظام وإجراءات العمل. اكتشف كيفية استخدام منصة مراسلتي بكفاءة وفعالية.',
        category: 'الرئيسية',
        page: 'index.html',
        section: 'welcome-section'
    },
    {
        id: 'service-templates',
        title: 'النماذج',
        content: 'تعرف على أنواع النماذج المختلفة وكيفية إنشائها واستخدامها في حملاتك التسويقية والخدمية.',
        category: 'الخدمات',
        page: 'templates.html',
        section: 'templates-service'
    },
    {
        id: 'service-campaigns',
        title: 'الحملات التسويقية',
        content: 'دليل شامل لإنشاء وإدارة الحملات التسويقية الفعالة عبر منصة مراسلتي.',
        category: 'الخدمات',
        page: 'index.html',
        section: 'campaigns-service'
    },
    {
        id: 'service-automation',
        title: 'الأتمتة والرد الآلي',
        content: 'تعلم كيفية إعداد الردود الآلية وأتمتة العمليات لتحسين كفاءة خدمة العملاء.',
        category: 'الخدمات',
        page: 'index.html',
        section: 'automation-service'
    },
    {
        id: 'service-integration',
        title: 'التكاملات',
        content: 'اكتشف كيفية ربط مراسلتي مع الأنظمة والتطبيقات الأخرى لتحقيق أقصى استفادة.',
        category: 'الخدمات',
        page: 'index.html',
        section: 'integration-service'
    },
    {
        id: 'service-sop',
        title: 'دليل الموظف',
        content: 'إجراءات العمل المعيارية والتوجيهات اللازمة لاستخدام النظام بشكل صحيح.',
        category: 'الخدمات',
        page: 'index.html',
        section: 'sop-service'
    },
    {
        id: 'service-faq',
        title: 'الأسئلة الشائعة',
        content: 'إجابات على الأسئلة الأكثر شيوعاً حول استخدام منصة مراسلتي وخدماتها.',
        category: 'الخدمات',
        page: 'index.html',
        section: 'faq-service'
    },

    // Templates page content
    {
        id: 'templates-intro',
        title: 'ما هي نماذج الواتساب؟',
        content: 'نماذج الواتساب هي رسائل جاهزة ومُعدة مسبقاً تم الموافقة عليها من شركة Meta (واتساب). تُستخدم هذه النماذج لإرسال رسائل للعملاء خارج نافذة الـ 24 ساعة، أو لإرسال رسائل تلقائية ورسائل تنبيهات مهمة. تساعد النماذج الشركات على التواصل مع عملائها بطريقة منظمة ومهنية.',
        category: 'النماذج',
        page: 'templates.html',
        section: 'templates-intro'
    },
    {
        id: 'template-types',
        title: 'أنواع النماذج',
        content: 'معلوماتي (Transactional) تُستخدم لإرسال معلومات مهمة مثل تأكيد الطلبات، إشعارات الدفع، تحديثات الشحن، وتذكيرات المواعيد. تسويقي (Marketing) تُستخدم للترويج للمنتجات والخدمات، إرسال العروض الخاصة، والإعلان عن الأحداث والفعاليات. خدمي (Utility) تُستخدم لتقديم معلومات مفيدة للعملاء مثل تحديثات الحساب، إعدادات الأمان، وإشعارات النظام.',
        category: 'النماذج',
        page: 'templates.html',
        section: 'template-types'
    },
    {
        id: 'template-creation-steps',
        title: 'خطوات إنشاء نموذج في نظام مراسلتي',
        content: 'قم بتسجيل الدخول إلى حسابك في منصة مراسلتي. انتقل إلى قسم النماذج من القائمة الجانبية. اضغط على زر إنشاء نموذج جديد. اختر نوع النموذج (معلوماتي، تسويقي، أو خدمي). أدخل اسم النموذج باللغة الإنجليزية (بدون مسافات). اختر اللغة المناسبة للنموذج. اكتب محتوى النموذج مع استخدام المتغيرات الديناميكية عند الحاجة. أضف أزرار التفاعل إذا كانت مطلوبة. راجع النموذج وتأكد من صحة المحتوى. اضغط على إرسال للمراجعة لإرسال النموذج لموافقة Meta.',
        category: 'النماذج',
        page: 'templates.html',
        section: 'template-creation-steps'
    },
    {
        id: 'meta-policy',
        title: 'سياسة Meta للنماذج',
        content: 'النماذج التسويقية تخضع لمراجعة صارمة من Meta وقد تستغرق عملية الموافقة من 24 إلى 48 ساعة. يجب أن يكون المحتوى التسويقي مفيداً وغير مزعج للمستخدمين. تجنب استخدام كلمات مثل مجاني، عرض محدود، أو أي محتوى قد يُعتبر spam. النماذج المعلوماتية والخدمية عادة ما تتم الموافقة عليها بشكل أسرع لأنها تقدم معلومات مهمة للعملاء.',
        category: 'النماذج',
        page: 'templates.html',
        section: 'meta-policy'
    },
    {
        id: 'template-examples',
        title: 'أمثلة على محتوى النماذج',
        content: 'مثال على نموذج معلوماتي - تأكيد الطلب: مرحباً، تم تأكيد طلبك رقم بنجاح! تفاصيل الطلب: المنتج، الكمية، المبلغ الإجمالي ريال. سيتم التواصل معك قريباً لتأكيد عملية التسليم. شكراً لثقتك بنا! مثال على نموذج تسويقي - عرض خاص: مرحباً، نود إعلامك بعرضنا الجديد على احصل على خصم عند الشراء خلال الأسبوع القادم. العرض ساري حتى تاريخ لا تفوت هذه الفرصة! مثال على نموذج خدمي - تذكير موعد: عزيزي/عزيزتي، نذكرك بموعدك المحجوز معنا: التاريخ، الوقت، المكان. يرجى الحضور قبل الموعد بـ 15 دقيقة. للإلغاء أو التأجيل، يرجى التواصل معنا.',
        category: 'النماذج',
        page: 'templates.html',
        section: 'template-examples'
    },
    {
        id: 'template-tips',
        title: 'نصائح مهمة لإنشاء النماذج',
        content: 'استخدم لغة واضحة ومهذبة. تجنب الأخطاء الإملائية والنحوية. لا تتجاوز 1024 حرف في النموذج الواحد. استخدم المتغيرات الديناميكية لتخصيص الرسائل. تأكد من أن المحتوى يقدم قيمة حقيقية للعميل. اختبر النموذج قبل إرساله للمراجعة. احتفظ بنسخة احتياطية من النماذج المهمة.',
        category: 'النماذج',
        page: 'templates.html',
        section: 'template-tips'
    },
    {
        id: 'client-requirements',
        title: 'المتطلبات من العميل قبل بدء العمل على النموذج',
        content: 'محتوى الهيدر (Header): هل الهيدر المطلوب صورة (امتداد: JPG أو JPEG)، فيديو (امتداد: MP4 – الحد الأقصى للحجم: 20 ميجا)، أو PDF. تأكد من جودة ودقة المحتوى المرسل. النص الأساسي (Main Text) والمتغيرات: احصل من العميل على النص الكامل الذي يظهر للمستخدم، قائمة المتغيرات الديناميكية المطلوبة داخل النص (مثل الاسم، رقم الطلب...)، تنسيق النص (Bold / Italic / ألوان إن وجدت). الفوتر (Footer): هل سيتم استخدام نفس الفوتر السابق؟ نعم أو لا، هناك فوتر جديد (يرجى إرسال النص والتنسيق). الأزرار (Buttons): كم عدد الأزرار المطلوبة في النموذج؟ لكل زرار: نص الزر (Label)، نوع الإجراء (Action): فتح رابط أو إجراء مخصص.',
        category: 'النماذج',
        page: 'templates.html',
        section: 'client-requirements'
    },
    {
        id: '360dialog-steps',
        title: 'خطوات إنشاء النموذج على 360Dialog',
        content: 'افتح حساب العميل: اذهب إلى https://whatsapp.morasalaty.net/WABA. ابحث عن العميل في 360Dialog: افتح https://hub.360dialog.com/dashboard/partner/pipes الصق رقم العميل؛ تأكد أنك داخل تبويب WhatsApp Accounts – WABA. افتح صفحة العميل: اضغط على الاسم عند ظهوره؛ سيتم الانتقال إلى ملفه الشخصي من أعلى، اختر تبويب Templates. ابدأ إنشاء النموذج: إن كان جديدًا: انقر Create Template إن كان لديه نماذج سابقة: انقر Add Template. املأ بيانات النموذج: اسم النموذج: حرف صغير بالكامل (e.g. u_1008_15_7) Category: اختر (Marketing / Utility / Authentication). حدد مكونات النموذج: اختر ما تريد فعله: Header ✅ اختياري Body ✅ اجباري Footer ✅ اختياري Buttons ✅ اختياري. أضف أو عدّل الهيدر: اختر نوع الهيدر (Image / Video / Document) حسب اختيار العميل. اكتب نص الـBody بالشكل الصحيح: أدخل النص الأصلي.',
        category: 'النماذج',
        page: 'templates.html',
        section: '360dialog-steps'
    },
    {
        id: 'template-rules',
        title: 'قواعد مهمة للمتغيرات والتنسيق',
        content: 'عند المتغيرات لا تضعها متتابعة دون فاصل: صحيح {{1}} ⭐ {{2}} خطأ {{1}} {{2}}. لا تترك سطورًا فارغة متتابعة: صحيح أهلاً وسهلاً 😊\\nاضغط على الرابط. خطأ أهلاً وسهلاً\\n\\nاضغط على الرابط.',
        category: 'النماذج',
        page: 'templates.html',
        section: 'template-rules'
    },
    {
        id: '360dialog-notes',
        title: 'ملاحظات مهمة لمنصة 360Dialog',
        content: 'أسماء النماذج: يجب أن تكون بأحرف صغيرة فقط ولا تحتوي على مسافات. المتغيرات: تبدأ من {{1}} وتزيد تدريجياً {{2}}, {{3}} إلخ. الفئات: اختر الفئة المناسبة حسب نوع المحتوى (تسويقي، خدمي، أو مصادقة). المراجعة: تأكد من مراجعة جميع العناصر قبل الإرسال للموافقة. الصور: تأكد من جودة الصور ومطابقتها لمتطلبات المنصة.',
        category: 'النماذج',
        page: 'templates.html',
        section: '360dialog-notes'
    }
];

// Keywords mapping for better search results
const keywordMapping = {
    'نموذج': ['نماذج', 'template', 'templates'],
    'واتساب': ['whatsapp', 'واتس اب', 'واتس'],
    'رسالة': ['رسائل', 'message', 'messages'],
    'تسويق': ['تسويقي', 'تسويقية', 'marketing'],
    'معلوماتي': ['transactional', 'معلومات'],
    'خدمي': ['utility', 'خدمة', 'خدمات'],
    'حملة': ['حملات', 'campaign', 'campaigns'],
    'أتمتة': ['automation', 'آلي', 'تلقائي'],
    'تكامل': ['تكاملات', 'integration', 'integrations'],
    'موظف': ['موظفين', 'employee', 'staff'],
    'سؤال': ['أسئلة', 'question', 'faq'],
    'meta': ['ميتا', 'فيسبوك', 'facebook'],
    '360dialog': ['360 dialog', 'ثري سكستي دايلوج'],
    'مراسلتي': ['morasalaty', 'مراسلة']
};

// Function to expand search query with related keywords
function expandSearchQuery(query) {
    const words = query.toLowerCase().split(' ');
    const expandedWords = [];
    
    words.forEach(word => {
        expandedWords.push(word);
        if (keywordMapping[word]) {
            expandedWords.push(...keywordMapping[word]);
        }
        // Check if word is a value in keywordMapping
        Object.keys(keywordMapping).forEach(key => {
            if (keywordMapping[key].includes(word)) {
                expandedWords.push(key);
                expandedWords.push(...keywordMapping[key]);
            }
        });
    });
    
    return [...new Set(expandedWords)]; // Remove duplicates
}

// Function to highlight search terms in text
function highlightText(text, searchTerms) {
    let highlightedText = text;
    
    searchTerms.forEach(term => {
        if (term.length > 1) { // Only highlight terms longer than 1 character
            const regex = new RegExp(`(${term})`, 'gi');
            highlightedText = highlightedText.replace(regex, '<span class="highlight">$1</span>');
        }
    });
    
    return highlightedText;
}

// Function to create snippet with highlighted search terms
function createSnippet(text, searchTerms, maxLength = 200) {
    // Find the first occurrence of any search term
    let firstIndex = -1;
    let foundTerm = '';
    
    searchTerms.forEach(term => {
        if (term.length > 1) {
            const index = text.toLowerCase().indexOf(term.toLowerCase());
            if (index !== -1 && (firstIndex === -1 || index < firstIndex)) {
                firstIndex = index;
                foundTerm = term;
            }
        }
    });
    
    if (firstIndex === -1) {
        // No search term found, return beginning of text
        const snippet = text.substring(0, maxLength);
        return snippet + (text.length > maxLength ? '...' : '');
    }
    
    // Calculate start position for snippet
    const start = Math.max(0, firstIndex - 50);
    const end = Math.min(text.length, start + maxLength);
    
    let snippet = text.substring(start, end);
    
    // Add ellipsis if needed
    if (start > 0) snippet = '...' + snippet;
    if (end < text.length) snippet = snippet + '...';
    
    return highlightText(snippet, searchTerms);
}

// Main search function
function performSearchInData(query) {
    if (!query || query.trim().length < 2) {
        return [];
    }
    
    const searchTerms = expandSearchQuery(query.trim());
    const results = [];
    
    searchData.forEach(item => {
        let score = 0;
        const titleLower = item.title.toLowerCase();
        const contentLower = item.content.toLowerCase();
        const categoryLower = item.category.toLowerCase();
        
        // Calculate relevance score
        searchTerms.forEach(term => {
            const termLower = term.toLowerCase();
            
            // Title matches (highest weight)
            if (titleLower.includes(termLower)) {
                score += 10;
            }
            
            // Category matches (high weight)
            if (categoryLower.includes(termLower)) {
                score += 5;
            }
            
            // Content matches (medium weight)
            const contentMatches = (contentLower.match(new RegExp(termLower, 'g')) || []).length;
            score += contentMatches * 2;
        });
        
        if (score > 0) {
            results.push({
                ...item,
                score: score,
                snippet: createSnippet(item.content, searchTerms),
                highlightedTitle: highlightText(item.title, searchTerms)
            });
        }
    });
    
    // Sort by relevance score (highest first)
    return results.sort((a, b) => b.score - a.score);
}

// Function to get search suggestions
function getSearchSuggestions(query) {
    if (!query || query.trim().length < 1) {
        return [];
    }
    
    const suggestions = [];
    const queryLower = query.toLowerCase();
    
    // Get suggestions from titles
    searchData.forEach(item => {
        if (item.title.toLowerCase().includes(queryLower)) {
            suggestions.push({
                text: item.title,
                category: item.category,
                type: 'title'
            });
        }
    });
    
    // Get suggestions from keywords
    Object.keys(keywordMapping).forEach(keyword => {
        if (keyword.includes(queryLower)) {
            suggestions.push({
                text: keyword,
                category: 'كلمة مفتاحية',
                type: 'keyword'
            });
        }
        keywordMapping[keyword].forEach(synonym => {
            if (synonym.includes(queryLower)) {
                suggestions.push({
                    text: synonym,
                    category: 'كلمة مفتاحية',
                    type: 'keyword'
                });
            }
        });
    });
    
    // Remove duplicates and limit results
    const uniqueSuggestions = suggestions.filter((item, index, self) => 
        index === self.findIndex(t => t.text === item.text)
    );
    
    return uniqueSuggestions.slice(0, 5);
}
