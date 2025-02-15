
# [프로젝트 이름]  
**실험적 학습을 위한 토이 프로젝트**  
*(ex. "신기술 검증", "아키텍처 탐구", "알고리즘 최적화 테스트")*

## 🎯 **Project Purpose**  
- **핵심 목표**: [기술/도구]의 동작 원리 파악, [문제]에 대한 최소 기능 구현  
  *(ex. "WebGL 렌더링 프로세스 이해", "서버리스 함수의 Cold Start 시간 측정")*  
- **실험 범위**: [구체적 기술 스택 or 방법론]  
  *(ex. "Vanilla JS만 사용", "Zero-Dependency 환경 구성")*  

## 🔨 **Tech Stack**  
- **주력 기술**: React 18, TypeScript 5.0  
- **측정/분석 도구**: Lighthouse, Chrome DevTools  

## 📝 **Key Learnings**  
- [기술명]의 [특정 동작] 확인 → [인사이트]  
  *(ex. "useEffect 클린업 함수의 비동기 처리 한계 발견")*  
- [문제] 발생 → [해결 시도] → [결과]  

## ⚙️ **Setup**  
```bash
# 의존성 최소화 (package.json 직접 구성 권장)
npm init -y
npm install
```

## 📈 **Usage**  
```js
// 핵심 로직 실행 (학습 포인트 주석 처리)
experiment({ 
  target: "WebSocket Latency", 
  iterations: 1000 
});
```
- **테스트 케이스**: `src/test` 디렉토리 참고  

