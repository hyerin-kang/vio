//언어별 json파일 가져오기
export async function getDict(lang) {
  try {
    const dict = await import(`../dict/${lang}.json`).then((m) => m.default);
    return dict;
  } catch {
    return null; // 언어 없으면 null 반환
  }
}
