import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import cn from 'classnames';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  const handleClearButton = () => setSelectedGood('');

  return (
    <main className="section container">
      {!selectedGood && (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      <h1 className="title is-flex is-align-items-center">
        {!!selectedGood && `${selectedGood} is selected`}
        {!!selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={handleClearButton}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(g => (
            <tr
              key={g}
              data-cy="Good"
              className={cn({
                'has-background-success-light': selectedGood === g,
              })}
            >
              {selectedGood !== g ? (
                <td>
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => setSelectedGood(g)}
                  >
                    +
                  </button>
                </td>
              ) : (
                <td>
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={handleClearButton}
                  >
                    -
                  </button>
                </td>
              )}
              <td data-cy="GoodTitle" className="is-vcentered">
                {g}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
