document.addEventListener('DOMContentLoaded', function () {
    const { Editor } = toastui;
    const { colorSyntax, tableMergedCell } = Editor.plugin;
  
    // 텍스트 정렬 스타일을 적용하는 함수
    function applyTextAlignStyle(alignment) {
      const selection = window.getSelection();
      const range = selection.getRangeAt(0);
      let commonAncestorContainer = range.commonAncestorContainer;
  
      // 텍스트 노드를 포함하는 부모 요소를 찾음
      while (commonAncestorContainer.nodeType !== Node.ELEMENT_NODE) {
        commonAncestorContainer = commonAncestorContainer.parentNode;
      }
  
      // 커서가 위치한 줄의 블럭 요소를 찾음
      let blockElement = commonAncestorContainer;
      while (blockElement && !blockElement.matches('p, div, h1, h2, h3, h4, h5, h6, blockquote, li')) {
        blockElement = blockElement.parentNode;
      }
  
      if (blockElement) {
        blockElement.style.textAlign = alignment;
      } else {
        alert('정렬할 텍스트를 선택하거나 커서를 블럭 내에 위치시켜주세요.');
      }
    }
  
    // 커스텀 버튼 추가를 위한 함수
    function createCustomToolbarItem(alignment, iconClass, title) {
      const button = document.createElement('button');
      button.className = iconClass; // FontAwesome 아이콘 사용
      button.type = 'button';
      button.title = title;
      button.style.background = 'none'; // 배경색 제거
      button.style.border = 'none'; // 테두리 제거
      button.style.padding = '10px'; // 기본 버튼과 동일한 패딩 적용
  
      button.onclick = function () {
        applyTextAlignStyle(alignment); // 스타일 적용 함수 호출
      };
  
      return button;
    }
  
    // 에디터 초기화
    const editor = new Editor({
      el: document.querySelector('#editor'),
      height: '500px',
      initialEditType: 'wysiwyg',
      previewStyle: 'vertical',
      initialValue: 'Hello, Toast UI Editor!',
      plugins: [colorSyntax, tableMergedCell],
      toolbarItems: [
        ['heading', 'bold', 'italic', 'strike'],
        ['hr', 'quote'],
        ['ul', 'ol', 'task', 'indent', 'outdent'],
        ['table', 'image', 'link'],
        ['code', 'codeblock'],
        ['scrollSync'],
      ],
    });

  
    // 에디터 로드 후 커스텀 버튼 추가
    window.addEventListener('load', function () {
      const toolbar = document.querySelector('.toastui-editor-defaultUI-toolbar');
  
      // 왼쪽 정렬 버튼
      const alignLeftButton = createCustomToolbarItem('left', 'fas fa-align-left', 'Align Left');
  
      // 중앙 정렬 버튼
      const alignCenterButton = createCustomToolbarItem('center', 'fas fa-align-center', 'Align Center');
  
      // 오른쪽 정렬 버튼
      const alignRightButton = createCustomToolbarItem('right', 'fas fa-align-right', 'Align Right');
  
      const customButtonWrapper = document.createElement('div');
      customButtonWrapper.className = 'toastui-editor-toolbar-group';
      customButtonWrapper.style.display = 'inline-block'; // 인라인 블록 설정
      customButtonWrapper.style.padding = '0'; // 패딩 설정
  
      customButtonWrapper.appendChild(alignLeftButton);
      customButtonWrapper.appendChild(alignCenterButton);
      customButtonWrapper.appendChild(alignRightButton);
      toolbar.appendChild(customButtonWrapper);
    });
  });
  