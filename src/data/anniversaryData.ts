import { AnniversaryConfig } from '../types';

export const anniversaryData: AnniversaryConfig = {
  coupleNames: {
    partnerName: "Partner Name",
    userName: "Your Name",
  },
  
  // İlişkinin başlangıç tarihi (Yıl-Ay-GünTHH:mm:ss formatında)
  startDate: "2024-01-01T12:00:00",

  anniversaryDateText: "1 Ocak — Yıldönümümüz",

  heroTagline: "Zamanın durduğu, birlikte paylaşılan en güzel anların dijital hikâyesi.",

  // Ortam Müziği (Telif hakkı içermeyen örnek piyano müziği)
  musicTrack: {
    title: "Cinematic Warm Memories",
    artist: "Ambient Romance",
    src: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=piano-moment-114004.mp3",
  },

  // BÖLÜM 1: ZAMAN ÇİZELGESİ (Başlangıç ve İlkler)
  timeline: [
    {
      id: "tl-1",
      date: "1 Ocak 2024",
      title: "İlk Tanışma",
      location: "Çevrimiçi / Ortak Alan",
      description: "Saatlerin nasıl geçtiğini anlamadığımız, hayatımızın en özel yolculuğuna dönüştüğü o ilk konuşma.",
      photos: ["/images/placeholder.jpg"],
      caption: "O gün başlayan bu güzel hikâye...",
      layoutType: "single-large",
      songSnippet: "İlk kelimeler...",
      note: "O ilk anın heyecanı ve tebessümü dün gibi aklımızda."
    },
    {
      id: "tl-2",
      date: "15 Ocak 2024",
      title: "İlk Buluşma",
      location: "Şehir Merkezi",
      description: "Göz göze geldiğimiz, zamanın yavaşladığı ve gülümsemelerin hiç eksilmediği ilk buluşmamız.",
      photos: ["/images/placeholder.jpg"],
      caption: "İlk kahvemiz ve saatler süren sohbetimiz.",
      layoutType: "single-large",
      note: "Birlikte geçirilen her dakikanın değer kazandığı gün."
    },
    {
      id: "tl-3",
      date: "1 Şubat 2024",
      title: "İlk Ortak Gezi",
      location: "Sahil Yürüyüşü",
      description: "Rüzgarın ve denizin sesine karışan neşeli sohbetlerimizle geçen unutulmaz bir gün.",
      photos: ["/images/placeholder.jpg"],
      caption: "Huzurun ve mutluluğun en saf hali.",
      layoutType: "single-large",
      note: "Yeni rotaları keşfetmenin başlangıcı."
    },
    {
      id: "tl-4",
      date: "14 Şubat 2024",
      title: "Özel Bir Akşam",
      location: "Sakin Bir Restoran",
      description: "Birlikte kutlanan ilk özel günümüz, paylaşılan lezzetler ve verilen sözler.",
      photos: ["/images/placeholder.jpg"],
      caption: "Her anın bir hatıraya dönüştüğü anlar.",
      layoutType: "single-large",
      note: "Birlikte nice güzel kutlamalara."
    }
  ],

  // BÖLÜM 2: DİJİTAL ANI DEFTERİ (Editorial Düzenler)
  memories: [
    {
      id: "mem-1",
      date: "15 Mart 2024",
      title: "Doğum Günü Kutlaması",
      location: "Sürpriz Mekan",
      description: "Tüm sevdiklerimizle birlikte hazırlanan, pasta ve kahkahalarla dolu sürpriz bir kutlama.",
      photos: [
        "/images/placeholder.jpg",
        "/images/placeholder.jpg"
      ],
      caption: "En içten gülüşlerin yakalandığı an.",
      layoutType: "editorial-duo",
      note: ""
    },
    {
      id: "mem-2",
      date: "20 Nisan 2024",
      title: "Işıklar Altında Bir Gece",
      location: "Şehir Terası",
      description: "Şehrin parlayan ışıkları eşliğinde geleceğe dair kurulan hayaller ve samimi sohbetler.",
      photos: ["/images/placeholder.jpg"],
      caption: "Yıldızların altında huzur dolu bir gece.",
      layoutType: "cinematic-full",
      note: ""
    },
    {
      id: "mem-3",
      date: "10 Temmuz 2024",
      title: "Yaz Tatili ve Keşifler",
      location: "Ege / Akdeniz Kıyıları",
      description: "Güneşin, denizin ve yeni yerler görmenin verdiği eşsiz mutluluk.",
      photos: [
        "/images/placeholder.jpg",
        "/images/placeholder.jpg",
        "/images/placeholder.jpg"
      ],
      caption: "Birlikte keşfedilen yepyeni koylar.",
      layoutType: "scrapbook-trio",
      note: ""
    },
    {
      id: "mem-4",
      date: "25 Eylül 2024",
      title: "Sonbahar Yürüyüşü",
      location: "Orman Kampı",
      description: "Sarı yapraklar arasında temiz havanın ve doğanın tadını çıkardığımız hafta sonu kaçamağı.",
      photos: [
        "/images/placeholder.jpg",
        "/images/placeholder.jpg"
      ],
      caption: "Doğanın renkleriyle iç içe bir gün.",
      layoutType: "editorial-duo",
      note: ""
    }
  ],

  // BÖLÜM 3: CANLI ANILAR (Video / Live Photos)
  livePhotosSection: {
    title: "Canlı Hatıralar",
    subtitle: "Özel anların kısa video klipleri ve canlı görüntüleri... Buraya tıklayarak anıları yeniden yaşayabilirsiniz.",
    centerPhoto: "/images/placeholder.jpg",
    centerCaption: "Zaman akıp gitse de hatıralar hep canlı...",
    livePhotos: [
      {
        id: "live-1",
        title: "Kısa Video Anısı 1",
        src: "/images/placeholder.jpg",
        poster: "/images/placeholder.jpg",
        caption: "Gülümseyen anlar..."
      },
      {
        id: "live-2",
        title: "Kısa Video Anısı 2",
        src: "/images/placeholder.jpg",
        poster: "/images/placeholder.jpg",
        caption: "Birlikte yolculuk..."
      },
      {
        id: "live-3",
        title: "Kısa Video Anısı 3",
        src: "/images/placeholder.jpg",
        poster: "/images/placeholder.jpg",
        caption: "Kutlama anı..."
      }
    ]
  },

  // GELECEK LİSTESİ (Bucket List)
  futureBucketList: [
    {
      id: "fut-1",
      category: "places",
      title: "Kuzey Işıkları Gezisi",
      description: "Dondurucu soğukta yeşil ışıkların altında birlikte durup gökyüzünü izlemek.",
      completed: false
    },
    {
      id: "fut-2",
      category: "activities",
      title: "Seramik & Çömlek Atölyesi",
      description: "Birlikte bir sanat atölyesine katılıp kendi el yapımı fincanlarımızı tasarlamak.",
      completed: false
    },
    {
      id: "fut-3",
      category: "photos",
      title: "Retro Film Fotoğrafı",
      description: "Nostaljik bir analog kamera ile tarihi sokaklarda anılarımızı ölümsüzleştirmek.",
      completed: false
    }
  ],

  // KAPANIŞ EKRANI VE MEKTUP
  finalMessage: {
    heading: "Birlikte Nice Yıllara",
    subheading: "Bizim hikâyemiz her geçen gün güzelleşiyor.",
    letter: "Değerlim,\n\nBu dijital anı defterini hazırlarken birlikte paylaştığımız her anı, güldüğümüz her günü ve paylaştığımız tüm güzellikleri bir araya getirmek istedim.\n\nHayatıma kattığın renk ve güzellik için teşekkür ederim. Birlikte keşfedeceğimiz nice güzel rotalara, biriktireceğimiz nice yeni anılara...\n\nİyi ki varsın!",
    footerDate: "1 Ocak 2025",
    note: "Hikâyemiz devam ediyor..."
  }
};
