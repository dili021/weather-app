const fetchForm = () => `
    <div class="form-wrap">
      <form >
        <input type="text" id="city" placeholder="City"/>
        <label for="celsius">Celsius</label>
        <input type="checkbox" name="units" id="celsius"/>
        <label for="fahrenheit">Fahrenheit</label>
        <input type="checkbox" name="units" id="fahrenheit"/>
        <button type="submit">Search</button>
      </form>
    </div>
  `;

export default fetchForm;