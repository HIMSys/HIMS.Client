export function languagesFormattedForDropdown(languages) {
  return languages.map(l => {
    return {
      value: l.id,
      text: l.value
    };
  });
}
