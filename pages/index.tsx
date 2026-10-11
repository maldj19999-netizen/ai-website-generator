import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [userInput, setUserInput] = useState('')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)

  const handleAIQuery = async () => {
    if (!userInput.trim()) return
    
    setLoading(true)
    try {
      // محاكاة استدعاء API ذكي
      const result = await generateResponse(userInput)
      setResponse(result)
    } catch (error) {
      setResponse('حدث خطأ، حاول مرة أخرى')
    }
    setLoading(false)
  }

  const generateResponse = async (input: string) => {
    // يمكن استبدالها بـ OpenAI API أو أي خدمة ذكاء اصطناعي
    return `إجابة ذكية: ${input} - معالجة بنجاح بواسطة ماجد AI`
  }

  return (
    <>
      <Head>
        <title>ماجد - موقع ذكي</title>
        <meta name="description" content="موقع ماجد - منصة ذكية تعمل بالذكاء الاصطناعي" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-dark via-blue-900 to-dark">
        {/* Navbar */}
        <nav className="bg-dark/80 backdrop-blur-md border-b border-primary/20 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">ماجد</h1>
            <div className="flex gap-4">
              <button className="text-white hover:text-primary transition">الرئيسية</button>
              <button className="text-white hover:text-primary transition">عن الموقع</button>
              <button className="text-white hover:text-primary transition">التواصل</button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              موقع ماجد
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                منصة ذكية متقدمة
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              تجربة فريدة من الذكاء الاصطناعي المتقدم مع واجهة احترافية وسهلة الاستخدام
            </p>
          </div>

          {/* AI Chat Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur border border-primary/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">🤖 استعلم من الذكاء الاصطناعي</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAIQuery()}
                  placeholder="اكتب سؤالك هنا..."
                  className="w-full px-4 py-3 bg-dark/50 border border-primary/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition"
                />
                <button
                  onClick={handleAIQuery}
                  disabled={loading}
                  className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition disabled:opacity-50"
                >
                  {loading ? 'جاري المعالجة...' : 'اسأل الآن'}
                </button>
                {response && (
                  <div className="mt-4 p-4 bg-primary/20 border border-primary/50 rounded-lg text-white">
                    <p className="text-sm text-gray-300">الإجابة:</p>
                    <p className="mt-2">{response}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 backdrop-blur border border-secondary/30 rounded-2xl p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-4">✨ المميزات</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <span className="text-secondary">✓</span>
                  ذكاء اصطناعي متقدم
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-secondary">✓</span>
                  واجهة احترافية وسريعة
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-secondary">✓</span>
                  دعم اللغة العربية الكامل
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-secondary">✓</span>
                  أمان عالي المستوى
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-secondary">✓</span>
                  أداء سريع وموثوق
                </li>
              </ul>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-4 mb-16">
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-secondary">100+</p>
              <p className="text-gray-400 mt-2">استعلام يومي</p>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-secondary">99.9%</p>
              <p className="text-gray-400 mt-2">معدل التوفرية</p>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-secondary">24/7</p>
              <p className="text-gray-400 mt-2">خدمة مستمرة</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-dark/80 border-t border-primary/20 py-8">
          <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
            <p>© 2026 ماجد - جميع الحقوق محفوظة</p>
            <p className="mt-2 text-sm">منصة ذكية تعمل بأحدث تقنيات الذكاء الاصطناعي</p>
          </div>
        </footer>
      </main>
    </>
  )
}
