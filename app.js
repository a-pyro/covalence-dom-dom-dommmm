window.addEventListener('DOMContentLoaded', () => {
  console.log('dom loaded');

  // function to select the current target of an event
  const currentTarget = (e) => {
    return e.currentTarget;
  };

  const container = document.createElement('div');
  container.classList.add('container', 'mt-5');
  document.body.prepend(container);

  const row = document.createElement('div');
  row.classList.add('row', 'flex-wrap', 'mt-5');
  container.appendChild(row);

  const addSquareBtn = document.createElement('button');
  addSquareBtn.classList.add('btn', 'btn-light');
  addSquareBtn.innerText = 'Add Square';
  container.prepend(addSquareBtn);

  let clicker = 0;
  // create div function
  const createDiv = () => {
    clicker++;
    const newSquare = document.createElement('div');
    newSquare.classList.add(
      'col',
      'p-0',
      'd-flex',
      'justify-content-center',
      'align-items-center',
      'bg-white'
    );
    newSquare.id = `${clicker}`;
    // console.log(newSquare);
    row.appendChild(newSquare);
    newSquare.addEventListener('mouseover', mouseOverID);
    newSquare.addEventListener('mouseout', mouseOutID);
    newSquare.addEventListener('click', randomBgColor);
  };

  addSquareBtn.addEventListener('click', createDiv);

  //   display id on mouse overfunctiom
  const mouseOverID = (e) => {
    // const currentTarget = e.target;
    const id = currentTarget(e).id;
    currentTarget(e).innerText = `${id}`;
  };

  const mouseOutID = (e) => {
    currentTarget(e).innerText = '';
  };
  const bgColors = ['primary', 'info', 'success', 'danger', 'warning'];

  const randomBgColor = (e) => {
    const randomIndex = Math.floor(Math.random() * 5);

    for (let element of currentTarget(e).classList) {
      // need to check if the previous bg color
      //   console.log(element);

      if (element.slice(0, 2) === 'bg') {
        // console.log(element);
        // remove that class
        do {

        } while ()
        currentTarget(e).classList.remove(element);
        // add new bg class

        currentTarget(e).classList.add(`bg-${bgColors[randomIndex]}`);
      }
    }
  };
});
