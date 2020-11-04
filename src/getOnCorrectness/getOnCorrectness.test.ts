import util from './'

describe('getOnCorrectness', () => {
  const res = util(false, {
    true(cond) {
      return 'google' as const
    },
    false() {
      return 'youtube' as const
    },
  })
})
