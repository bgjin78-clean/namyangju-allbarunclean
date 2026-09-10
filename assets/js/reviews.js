(function () {
  const YUPUM_SERVICES = ["유품정리", "고독사청소", "특수청소", "유품+특수청소"];
  const CASES_BASE = "/images/cases";

  const REVIEWS = [
    { area: "다산동", service: "유품정리", title: "남양주시 다산동 아파트 유품정리", text: "유품 분류와 폐기물 반출 후 공간을 정돈한 사례입니다. 신도시 단지 반출 동선을 사전에 확인했습니다." },
    { area: "평내동", service: "이사폐기물처리", title: "남양주시 평내동 이사폐기물처리", text: "이사 일정에 맞춰 가구와 생활폐기물을 한 번에 정리·반출한 사례입니다." },
    { area: "금곡동", service: "쓰레기집청소", title: "남양주시 금곡동 쓰레기집청소", text: "장기간 방치된 생활폐기물을 분류·포장·상차까지 진행한 사례입니다." },
    { area: "호평동", service: "빈집정리", title: "남양주시 호평동 빈집정리", text: "임대 전 남은 가구와 생활폐기물을 정리해 공실 상태로 마무리한 사례입니다." },
    { area: "왕숙동", service: "고독사청소", title: "남양주시 왕숙동 고독사청소", text: "오염 정리와 소독, 냄새 저감 작업을 단계적으로 진행한 사례입니다." },
    { area: "진접읍", service: "가정폐기물처리", title: "남양주시 진접읍 가정폐기물처리", text: "대형 가구와 생활용품을 하루 만에 분류·반출한 사례입니다." },
    { area: "화도읍", service: "특수청소", title: "남양주시 화도읍 특수청소", text: "장기간 방치된 공간의 오염 정리와 소독을 함께 진행한 사례입니다." },
    { area: "와부읍", service: "폐업폐기물처리", title: "남양주시 와부읍 폐업폐기물처리", text: "폐업 후 남은 집기와 폐기물을 현장 조건에 맞춰 처리한 사례입니다." },
    { area: "토평읍", service: "유품정리", title: "남양주시 토평읍 유품정리", text: "보관 물품 분류 후 공간을 정돈하고 폐기물을 반출한 사례입니다." },
    { area: "오남읍", service: "폐기물처리", title: "남양주시 오남읍 가정폐기물 대량 반출", text: "오래된 가구와 생활폐기물을 한 번에 정리·상차한 사례입니다." },
    { area: "수동면", service: "빈집정리", title: "남양주시 수동면 빈집정리", text: "주택 매매 전 남은 짐과 생활폐기물을 정리한 사례입니다." },
    { area: "다산동", service: "가정폐기물처리", title: "남양주시 다산동 베란다 대형폐기물 수거", text: "아파트 베란다에 쌓인 세탁기·수납장 등 대형폐기물을 단지 반출 규정에 맞춰 수거한 사례입니다." },
    { area: "평내동", service: "폐기물처리", title: "남양주시 평내동 원룸 가전·잔짐 반출", text: "원룸 퇴실 후 남은 소형 가전과 박스 폐기물을 짧은 동선으로 반출한 사례입니다." },
    { area: "금곡동", service: "이사폐기물처리", title: "남양주시 금곡동 다세대 생활폐기물 상차", text: "다세대주택 계단 반출이 어려운 생활폐기물을 인원 배치 후 상차까지 마무리한 사례입니다." },
    { area: "호평동", service: "가정폐기물처리", title: "남양주시 호평동 리모델링 전 폐기물 정리", text: "인테리어 공사 전 기존 붙박이장·마루 잔재와 생활폐기물을 분리 반출한 사례입니다." },
    { area: "왕숙동", service: "이사폐기물처리", title: "남양주시 왕숙동 오피스텔 잔짐 반출", text: "오피스텔 이사 일정에 맞춰 가전과 생활잡화를 엘리베이터 사용 시간에 맞춰 반출한 사례입니다." },
    { area: "진접읍", service: "빈집정리", title: "남양주시 진접읍 단독주택 적치물 반출", text: "마당·창고에 쌓여 있던 계절용품과 폐가구를 분류한 뒤 차량으로 반출한 사례입니다." },
    { area: "화도읍", service: "폐업폐기물처리", title: "남양주시 화도읍 상가 집기 폐기물 처리", text: "상가 정리 후 남은 진열대·간판·포장재를 진입로와 주차 여건에 맞춰 처리한 사례입니다." },
    { area: "와부읍", service: "폐기물처리", title: "남양주시 와부읍 빌라 가전·가구 일괄 수거", text: "교체 예정인 냉장고·침대·소파를 층수와 주차 위치를 확인해 일괄 수거한 사례입니다." },
    { area: "토평읍", service: "가정폐기물처리", title: "남양주시 토평읍 창고형 폐기물 정리", text: "옥외 창고에 적치된 생활폐기물과 폐가전을 분리·포장 후 상차한 사례입니다." },
    { area: "오남읍", service: "이사폐기물처리", title: "남양주시 오남읍 주차공간 대형가구 반출", text: "단지 주차 공간에 내려둔 대형가구를 차량 진입 동선에 맞춰 반출한 사례입니다." },
    { area: "수동면", service: "폐기물처리", title: "남양주시 수동면 농가주택 생활폐기물 처리", text: "농가주택에 쌓인 생활폐기물과 오래된 가구를 현장 진입로를 확인해 처리한 사례입니다." },
    { area: "다산동", service: "폐기물처리", title: "남양주시 다산동 사무실 폐기물 일괄 반출", text: "사무실 이전 전 책상·파티션·문서상자 등 폐기물을 한 번에 분류·반출한 사례입니다." },
    { area: "평내동", service: "쓰레기집청소", title: "남양주시 평내동 입주 전 폐기물처리", text: "입주 전 남겨진 생활폐기물과 폐가구를 정리해 바로 입주 가능한 상태로 맞춘 사례입니다." },
    { area: "진접읍", service: "가정폐기물처리", title: "남양주시 진접읍 매트리스·소파 대형폐기물", text: "엘리베이터 사용이 제한된 매트리스와 소파를 인력·차량 배치 후 반출한 사례입니다." },
    { area: "화도읍", service: "폐기물처리", title: "남양주시 화도읍 주방 폐가전 수거", text: "교체된 냉장고·김치냉장고·전자레인지 등 주방 폐가전을 분리 수거한 사례입니다." },
    { area: "오남읍", service: "가정폐기물처리", title: "남양주시 오남읍 지하실 적재 폐기물 정리", text: "지하실에 장기간 쌓인 박스·폐가구·생활폐기물을 분류 후 상차까지 진행한 사례입니다." }
  ];

  function pad3(n) {
    return String(n).padStart(3, "0");
  }

  function isYupumService(service) {
    return YUPUM_SERVICES.indexOf(service) !== -1
      || service.indexOf("유품") !== -1
      || service === "고독사청소"
      || service === "특수청소";
  }

  function randomCaseNum(service) {
    const yupum = isYupumService(service);
    const min = yupum ? 1 : 51;
    const max = yupum ? 50 : 100;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function caseImages(num, service) {
    const yupum = isYupumService(service);
    const id = pad3(num);
    if (yupum) {
      return {
        before: CASES_BASE + "/before-" + id + ".jpg",
        after: CASES_BASE + "/after-" + id + ".jpg"
      };
    }
    return {
      before: CASES_BASE + "/waste-before-" + id + ".jpg",
      after: CASES_BASE + "/waste-after-" + id + ".jpg"
    };
  }

  function renderReviews(filterArea) {
    const list = document.getElementById("reviewList");
    if (!list) return;

    list.innerHTML = "";

    REVIEWS.forEach(function (review) {
      if (filterArea && !review.area.includes(filterArea) && !filterArea.includes(review.area)) return;

      const caseNum = randomCaseNum(review.service);
      const imgs = caseImages(caseNum, review.service);
      const article = document.createElement("article");
      article.className = "review-card";
      article.setAttribute("data-area", review.area);
      article.innerHTML =
        '<span class="tag">' + review.service + "</span>" +
        "<strong>" + review.title + "</strong>" +
        '<div class="photo-row photo-row--pair" style="margin:14px 0">' +
        '<img src="' + imgs.before + '" alt="' + review.title + ' 작업 전" loading="lazy" />' +
        '<img src="' + imgs.after + '" alt="' + review.title + ' 작업 후" loading="lazy" />' +
        "</div>" +
        "<p>" + review.text + "</p>";

      list.appendChild(article);
    });
  }

  const params = new URLSearchParams(window.location.search);
  const area = params.get("area");
  if (area) {
    const label = document.getElementById("filterLabel");
    if (label) label.textContent = area + " 작업후기입니다.";
  }

  renderReviews(area);
})();
