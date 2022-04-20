const isSafariOnIpad =
  navigator?.userAgentData?.platform === 'MacIntel' &&
  navigator?.maxTouchPoints > 1
export const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator?.userAgent,
  ) || isSafariOnIpad
