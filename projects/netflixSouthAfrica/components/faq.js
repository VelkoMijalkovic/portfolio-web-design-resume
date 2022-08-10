app.component('faq', {
    
    template:
      /*html*/
      `
      <div class="ftr-content">
      <ul>
          <li v-for="x in faqList1">
              <a v-bind:href="'#'+x.href">{{ x }}</a>
            </li>
      </ul>
      <ul>
          <li v-for="x in faqList2">
              <a v-bind:href="'#'+x.href">{{ x }}</a>
            </li>
      </ul>
      <ul>
          <li v-for="x in faqList3">
              <a v-bind:href="'#'+x.href">{{ x }}</a>
            </li>
      </ul>
      <ul>
          <li v-for="x in faqList4">
              <a v-bind:href="'#'+x.href">{{ x }}</a>
            </li>
      </ul>
  </div>
     `,

    data() {
      return {
        faqList1: ['Help Centre', 'Jobs', 'Cookie Preferences', 'Watch for Free', 'Netflix South Africa'],
        faqList2: ['FAQ', 'Investor Relations', 'Privacy', 'Speed Test'],
        faqList3: ['Account','Ways to Watch','Corporate Information','Legal Notices'],
        faqList4: ['Media Centre','Terms of Use','Contact Us','Netflix Originals'],
      }
    },
    
  })