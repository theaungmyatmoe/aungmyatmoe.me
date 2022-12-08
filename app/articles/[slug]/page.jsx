import {getAllArticles, getArticleBySlug} from "@/lib/api";
import {formatDate} from "@/lib/formatDate";
import {Prose} from "@/components/Prose";

export default function ArticlePageBySlug({params: {slug}}) {
    const {meta, content} = getArticleBySlug(slug)

    return (
        <article>
            <header className="flex flex-col">
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                    {meta.title}
                </h1>
                <time
                    dateTime={meta.date}
                    className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
                >
                    <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"/>
                    <span className="ml-3">{formatDate(meta.date)}</span>
                </time>
            </header>
            <Prose className="mt-8">
                {/* markdown remote will place here */}
                Content here
                The Developing of Tiny Programming  Language
                Tech Stack 🥞
                JavaScript
                Syntax (Parser Generator)
                Vitepress (for Documentation)
                v1.0.0 (Zoro) ⚔️
                Documentation
                https://wuttyi.vercel.app/
                Motivation
                အရှုံးမပေးနဲ့ကြိုးစား။ - Banana
                အခုရက်ပိုင်း Higher Level Abstraction တွေချည်းလုပ်နေရတာအရမ်းပျင်းနေတာနဲ့ Programming Language ပိစိသေးသေးလေး Develop ထားပါတယ်။
                Language ကသေးပြီးတော့ Syntactic Sugar သိပ်မဖြစ်တာကလွဲရင်ပေါ့။ LISP like ဆိုတော့လေ။ သိတဲ့အတိုင်း Params တွေနဲ့ချည်းပဲ။
                အပျော်တမ်းရေးထားပေမဲ့လို့ Language နဲ့အဆင်ပြေတဲ့ Parser Generator ကိုသုံးထားပါတယ်။ syntax လို့ခေါ်ပါတယ်။ သူက State အနေနဲ့ Parse Tree ကိုပြန်ထုတ်ပေးတာပါ။ pcode လိုပုံစံမျိုးပါ။ JavaScript Parser ဖြစ်ဝာာကြောင့်မို့လို့ Array State လိုက်ပြန်ထွက်ပါတယ်။ ဒီမှာ State Machine တွေကိုသိဖို့လိုနေပြီနော် 🤭။
                Language Implementation က Tree Walker  အနေနဲ့ Implement ထားတာပါ။ ဒါ့ကြောင့် Interpreter လို့ပြောလို့ရပါတယ်။
                Interpreter ကသေးတာမို့လို့ နောက်ခံ Theory Background ရှိပြီးသားဆိုရင် လွယ်လွယ်ကူကူနားလည်နိုင်ပါတယ်။ Source Code ကိုကြည့်ပြီးတော့နားလည်နိုင်တာမျိုးပါ။
                ဒီ Interpreter Implement တော့ DS & Algo တချို့ Abstract အနေနဲ့ပါလာပါတယ်။ ဒါပေမဲ့နော် Source Code ထဲသွားရှာနေရင်တွေ့မှာမဟုတ်ပါဘူး။ Thinking model အနေနဲ့ပါတာပါ။
                ဥပမာပြောရရင် Stack, Tree ဒီလိုကောင်တွေပေါ့။
                ဆိုပါစို့ ဒီနိုင်ငံမှာ Data Structure & Algorithm လို့ပြောလိုက်တာနဲ့ ဆရာကြီးဆိုပြီးကောက်မြင်သွားတာပဲ။ အဲ့ကောင်တွေက အလွတ်ကျက်ထားရမှာမဟုတ်ဘူး။ ချသုံးရမှာ။ Practically မသုံးတတ်ရင် Time and Space Complexity Problems တွေကိုအလွတ်‌ကျက်ပြီးတော့ ဘယ်မှာသွားသုံးမှာလဲ။ 😝
                Language Feature
                Everything is Expression  👻
                Language တစ်ခုလုံးက Expression ပါပဲ။ ဝင်လာသမျှ ချက်ချင်း Evaluate လုပ်ပြီးတော့ Result တန်းပေးနိုင်တာမျိုးပါ။ ဒါ့ကြောင့် If statement လိုကောင်တွေတောင် Variable အနေနဲ့ပြန် Assign လို့ရ‌ပါတယ်။
                Variable Shadowing, Block Scope လိုကောင်တွေလည်းသုံးရအောင်လုပ်ထားတယ်။ Block Scope Implement တော့ပြဿနာတက်ပါတယ်။ Current Scope အပြင်က Variable ကိုလှမ်း access လုပ်တဲ့အခါမျိုးပေါ့။ အဲ့တာကို Scope Resolution သုံးပြီးတော့ Implement ထားတယ်။ ဒါ့ကြောင့် JavaScript လိုမျိုး Block Construct ကိုရမယ်။
                ‌Language မှာ Basic Construct တွေပဲဆောက်ထားတာပါ။ while, set တို့လိုပေါ့။ for loop ပြန်လိုချင်တော့ for loop အတွက် သပ်သပ် implement တာမျိုးမလုပ်ပါဘူး။ On the fly မှာ  ပြောင်းပစ်တာပါ။ Just In Time (JIT) complication technique ကိုသုံးထားတာပါ။ တော်တော်ကြာ VM မှာမှ JIT သုံးရမယ်၊ ဘာပုတယ် ညာပုတယ်ဖြစ်နေပါအုံးမယ်။ VM မှတင်သုံးရတာမျိုးမဟုတ်ဘူးဆိုတာပြချင်တာပါ။
                ခုနောက်ပိုင်းလူသုံးများတဲ့ Lambd Expression လို၊ HoFs တွေ၊ Closure တွေပါ Support ပေးထားပါတယ်။ Closure က Variable Object (Current Scope က variable) တွေကို Capture ရိုက်နိုင်အောင်လည်းလုပ်ထားတယ်။
                Paradigm နဲ့ပတ်သက်ရင် FP ကလူသုံးများတဲ့ Feature တွေတော်တော်ပါပေမဲ့ OO ကတော့ Basic လောက်ပဲပါပါတယ်။ Object and Class Inheritance ထိပဲပါပါတယ်။ Paradigm Construct ကမတရား deep လို့။
                အချိန်နည်းနည်းပေးနိုင်ရင်ကိုယ်ပိုင် Programming Language လေး Implement ကြည့်ပါ။။ JavaScript ပဲရလို့ဆိုပြီးတော့ Butthurt မဖြစ်တော့ဘူးပေါ့ 😛။
                ကိုယ်လည်းနောက်မို့ဆိုတစ်ဝက်လောက်နဲ့ထားခဲ့မှာ။ ဒါပေမဲ့ပတ်‌အာချောင်ထားတော့ရှက်ရှက်နဲ့အပြီးသတ်လိုက်ရပါတယ်။
                Contributing
                Ability to become the pirate king
                Ability to attack Titans
                Ability to save Konoha
                Just kidding 😆
                Grammar fixed are welcome 🫂
                Basic TDD
                Basic understanding of Parsing Theories
                Algorithm and Data Structure
                Recursion
                Finite State Machine
                https://wuttyi.vercel.app/developer/contributing
                Documentation
                https://wuttyi.vercel.app/
                Project Repository
                https://github.com/amm834/wuttyi-lang
                Change Log
                https://github.com/amm834/wuttyi-lang/blob/main/CHANGELOG.md
                Resource To Develop Programming Language?
                https://wuttyi.vercel.app/.../create-a-programming-language
                https://wuttyi.vercel.app/resources/further-reading
            </Prose>
        </article>
    )
}

export function generateStaticParams() {
    const articles = getAllArticles();

    return articles.map((article) => ({
        slug: article.meta.slug,
    }));
}