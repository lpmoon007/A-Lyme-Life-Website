#!/usr/bin/env bash
# Verify alymelife.com redirects (301s) + canonical host. Auto-generated from
# docs/nginx-directives.conf. Run locally: bash verify-redirects.sh
# Requires: curl. Reports PASS/FAIL per rule with a summary at the end.
set -u
pass=0; fail=0
BASE="https://alymelife.com"

check () {  # $1 = path/URL to request, $2 = expected redirect target (substring match on Location)
  local url="$1" want="$2"
  read -r code loc < <(curl -sS -o /dev/null -w "%{http_code} %{redirect_url}" -I "$url")
  if [ "$code" = "301" ] && [ "${loc%%#*}" = "${want%%#*}" ]; then
    printf "  \033[32mPASS\033[0m %s  ->  %s\n" "$url" "$loc"; pass=$((pass+1))
  else
    printf "  \033[31mFAIL\033[0m %s  (got %s -> %s ; want 301 -> %s)\n" "$url" "$code" "${loc:-none}" "$want"; fail=$((fail+1))
  fi
}

echo "== Canonical host / protocol (all should 301 to https://alymelife.com/) =="
check "https://www.alymelife.com/" "https://alymelife.com/"
check "http://alymelife.com/"      "https://alymelife.com/"
check "http://www.alymelife.com/"  "https://alymelife.com/"
echo
echo "== Exact-match legacy redirects (41) =="
check "$BASE/article.html" "https://alymelife.com/whole-body-hyperthermia-lyme.html"
check "$BASE/what-is-whole-body-hyperthermia/" "https://alymelife.com/whole-body-hyperthermia-lyme.html"
check "$BASE/category/treatment/hyperthermia-treatment/" "https://alymelife.com/whole-body-hyperthermia-lyme.html"
check "$BASE/1a-hyperthermia-3-things-im-glad-i-did-for-germany/" "https://alymelife.com/blog-germany.html"
check "$BASE/whole-body-hyperthermia-for-lyme-disease-treatment-was-it-worth-the-money/" "https://alymelife.com/blog-cost.html"
check "$BASE/is-hyperthermia-right-for-me.html" "https://alymelife.com/hyperthermia-self-assessment.html"
check "$BASE/is-hyperthermia-right-for-me-print-1nh7xez.html" "https://alymelife.com/hyperthermia-self-assessment.html"
check "$BASE/category/treatment/wiegman-protocol/" "https://alymelife.com/blog-wiegman-protocol.html"
check "$BASE/does-disulfiram-work-to-treat-lyme-disease-and-what-is-azlocillin/" "https://alymelife.com/blog-disulfiram-azlocillin.html"
check "$BASE/dose-1-minocycline-will-wiegman-protocol/" "https://alymelife.com/blog-wiegman-protocol.html"
check "$BASE/dose-2-will-wiegman-protocol/" "https://alymelife.com/blog-wiegman-protocol.html"
check "$BASE/dose-3-wiegman-protocol/" "https://alymelife.com/blog-wiegman-protocol.html"
check "$BASE/author/ccarter/" "https://alymelife.com/christina-carter.html"
check "$BASE/about-lyme-life/christinas-story/" "https://alymelife.com/index.html#story"
check "$BASE/first-post-treatment-hike/" "https://alymelife.com/index.html#story"
check "$BASE/the-fight-for-boy-wonder/" "https://alymelife.com/videos.html"
check "$BASE/need-funds-for-treatment/" "https://alymelife.com/blog-treatment-funding.html"
check "$BASE/lyme-treatment-funding-for-your-child/" "https://alymelife.com/blog-treatment-funding.html"
check "$BASE/sanoviv-day-1-morning-review-dark-field/" "https://alymelife.com/blog-sanoviv-review.html"
check "$BASE/sanoviv-stem-cell-1/" "https://alymelife.com/blog-sanoviv-review.html"
check "$BASE/sanoviv-friday-update/" "https://alymelife.com/blog-sanoviv-review.html"
check "$BASE/category/sanoviv/" "https://alymelife.com/blog-sanoviv-review.html"
check "$BASE/category/treatment/recovery/" "https://alymelife.com/treg-therapy.html"
check "$BASE/cooking-with-lyme-disease/" "https://alymelife.com/blog-lyme-diet.html"
check "$BASE/1-french-onion-soup/" "https://alymelife.com/blog-lyme-diet.html"
check "$BASE/welcome-to-what-the-fk-do-i-make-for-dinner/" "https://alymelife.com/blog-lyme-diet.html"
check "$BASE/category/food-nutrition/" "https://alymelife.com/blog-lyme-diet.html"
check "$BASE/new-lyme-test-available/" "https://alymelife.com/blog-lyme-testing.html"
check "$BASE/category/treatment/testing-for-lyme/" "https://alymelife.com/blog-lyme-testing.html"
check "$BASE/natural-remedies-for-lyme-disease/" "https://alymelife.com/blog-natural-remedies.html"
check "$BASE/bryan-rosners-experience-with-rife-machines/" "https://alymelife.com/blog-alternative-therapies.html"
check "$BASE/intravenous-light-therapy-for-lyme/" "https://alymelife.com/blog-alternative-therapies.html"
check "$BASE/21st-century-lyme-treatment/" "https://alymelife.com/chronic-lyme-treatment.html"
check "$BASE/three-current-lyme-trends/" "https://alymelife.com/blog-lyme-recovery-timeline.html"
check "$BASE/amandas-lyme-disease-story-from-a-wheelchair-to-walking/" "https://alymelife.com/blog.html"
check "$BASE/gigi-hadid-tearfully-addresses-her-familys-battle-with-lyme-disease-on-masterchef/" "https://alymelife.com/blog.html"
check "$BASE/the-spoon-theory/" "https://alymelife.com/videos.html"
check "$BASE/category/chris-sez/" "https://alymelife.com/blog.html"
check "$BASE/contact/" "https://alymelife.com/index.html#contact"
check "$BASE/page/2/" "https://alymelife.com/blog.html"
check "$BASE/about.html" "https://alymelife.com/christina-carter.html"
echo
echo "== Prefix catch-alls (3) — tested with a sample sub-path =="
check "$BASE/category/treatment/some-old-post/" "https://alymelife.com/whole-body-hyperthermia-lyme.html"
check "$BASE/category/some-old-cat/" "https://alymelife.com/blog.html"
check "$BASE/author/some-old-author/" "https://alymelife.com/christina-carter.html"
echo
echo "== Sanity: canonical homepage should return 200, NOT redirect =="
code=$(curl -sS -o /dev/null -w "%{http_code}" "$BASE/"); [ "$code" = "200" ] && { echo "  PASS  $BASE/ -> 200"; pass=$((pass+1)); } || { echo "  FAIL  $BASE/ -> $code (want 200)"; fail=$((fail+1)); }
echo
echo "================================================"
printf "  RESULT: %s passed, %s failed\n" "$pass" "$fail"
echo "================================================"
[ "$fail" = "0" ]
