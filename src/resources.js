export default {
  title: "Kicker Club",
  signUp: "Зарегистрироваться",
  signIn: "Войти",
  cancel: "Отмена",
  menu: {
    home: "Главная",
    contacts: "Контакты",
    signIn: "Войти",
    signOut: "Выйти"
  },
  intro: {
    title: "Создайте свой кикерный клуб!",
    largeDescription: `Создавайте турниры любого из восьми типов, управляйте их ходом
            и сравнивайте рейтинг игроков клуба.`,
    smallDescription: `И все это - абсолютно бесплатно! Просто нажмите кнопку,
            чтобы пройти несложный процесс регистрации.`
  },
  advantages: {
    title: "Наши преимущества",
    ratingCard: {
      title: "Клубный рейтинг, высчитываемый по системе Эло",
      subtitle: "Впервые среди кикерных приложений!",
      description: `Система рейтинга Эло -
            это метод для подсчета относительного уровня мастерства игроков. Вы можете
            легко посмотреть рейтинг любого игрока вашего клуба в разделе "Рейтинг".`
    },
    tournamentsCard: {
      title: "8 типов турниров",
      description: `Вы можете найти любой из популярных видов кикерных турниров.
                Запустить и настроить турнир можно всего лишь в несколько кликов.`
    },
    accessToTournamentCard: {
      title: "Любой игрок может следить за ходом турнира",
      description: `Дайте игроку пароль клуба, и он сможет следить за ходом турнира на
                своем телефоне или компьютере`
    }
  },
  howItWorks: {
    title: "Как это работает",
    description: `Всего лишь пройдите простую регистрацию и создайте свой первый турнир!
            Выберите тип турнира и введите имена тех, кто будет принимать участие.
            Раунды турнира будут сгенерированы автоматически. Сообщите игрокам пароль клуба.
            Теперь вы можете управлять турниром и обновлять его результаты, а игроки смогут
            наблюдать за ходом турнира.`
  },
  // Image defautl height is 357px. Please change styles to use a different height.
  carouselImages: [
    {
      src: '/img/mobile.jpg',
      altText: 'Вы можете использовать приложение на любом девайсе',
      caption: 'Вы можете использовать приложение на любом девайсе'
    },
    {
      src: '/img/tablet.jpg',
      altText: 'Невероятно дружественный пользовательский интерфейс',
      caption: 'Невероятно дружественный пользовательский интерфейс'
    },
    {
      src: '/img/players.jpg',
      altText: 'Игроку клуба не нужно проходить регистрацию',
      caption: 'Игроку клуба не нужно проходить регистрацию'
    }
  ],
  tournamentTypes: "Типы турниров",
  footer: {
    facebookShare: "Поделиться на Facebook",
    vkShare: "Поделиться в VK",
  },
  signUpForm: {
    title: 'Регистрация',
    clubName: 'Имя Вашего клуба',
    username: 'Ваше имя',
    email: 'Адрес электронной почты',
    password: 'Пароль',
    repeatPassword: 'Повторите пароль',
    subscribeToNews: 'Подписаться на анонсы о новой функциональности'
  },
  signInForm: {
    title: 'Вход',
    email: 'Email',
    password: 'Пароль',
    rememberMe: 'Запомнить меня'
  }
}