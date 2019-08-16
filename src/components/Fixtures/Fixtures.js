import React, { useEffect } from "react";

const Fixtures = ({ fixtures, getFixtures, loading }) => {
  useEffect(() => {
    getFixtures();
  }, [getFixtures]);

  const handleOnChange = e => {
    getFixtures(e.target.value);
  };
  return (
    <>
      <select onChange={handleOnChange} name="Fixtures">
        <option value="1">Matchday 1</option>
        <option value="2">Matchday 2</option>
        <option value="3">Matchday 3</option>
        <option value="4">Matchday 4</option>
        <option value="5">Matchday 5</option>
        <option value="6">Matchday 6</option>
        <option value="7">Matchday 7</option>
        <option value="8">Matchday 8</option>
        <option value="9">Matchday 9</option>
        <option value="10">Matchday 10</option>
        <option value="11">Matchday 11</option>
        <option value="12">Matchday 12</option>
        <option value="13">Matchday 13</option>
        <option value="14">Matchday 14</option>
        <option value="15">Matchday 15</option>
        <option value="16">Matchday 16</option>
        <option value="17">Matchday 17</option>
        <option value="18">Matchday 18</option>
        <option value="19">Matchday 19</option>
        <option value="20">Matchday 20</option>
        <option value="21">Matchday 21</option>
        <option value="22">Matchday 22</option>
        <option value="23">Matchday 23</option>
        <option value="24">Matchday 24</option>
        <option value="25">Matchday 25</option>
        <option value="26">Matchday 26</option>
        <option value="27">Matchday 27</option>
        <option value="28">Matchday 28</option>
        <option value="29">Matchday 29</option>
        <option value="30">Matchday 30</option>
        <option value="31">Matchday 31</option>
        <option value="32">Matchday 32</option>
        <option value="33">Matchday 33</option>
        <option value="34">Matchday 34</option>
        <option value="35">Matchday 35</option>
        <option value="36">Matchday 36</option>
        <option value="37">Matchday 37</option>
        <option value="38">Matchday 38</option>
      </select>
    </>
  );
};

export default Fixtures;
