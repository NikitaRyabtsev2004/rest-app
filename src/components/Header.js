import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './Header.css';
import logo from '../assets/logo.png';
import phone from '../assets/phone.png';
import bg from '../assets/bg.jpg';

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(getDates()[0]);
  const [selectedSession, setSelectedSession] = useState('10:00');
  const [tables, setTables] = useState(new Array(10).fill({ reserved: false }));

  useEffect(() => {
    const bookings = loadBookings(selectedDate, selectedSession);
    setTables(bookings);
  }, [selectedDate, selectedSession]);

  const handleScroll = (id, e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleToggleTable = (index) => {
    const newTables = tables.map((table, i) =>
      i === index ? { ...table, reserved: !table.reserved } : table
    );
    setTables(newTables);
  };

  const handleConfirmBooking = () => {
    saveBooking(selectedDate, selectedSession, tables);
    setShowModal(false);
  };

  const handleCloseModal = () => setShowModal(false);

  const handleSelectDate = (date) => {
    setSelectedDate(date);
    setSelectedSession('10:00');
  };

  const handleSelectSession = (session) => {
    setSelectedSession(session);
  };

  return (
    <div id="home" className="header" style={{ backgroundImage: `url(${bg})` }}>
      <div className="container">
        <div className="header-line">
          <div className="header-logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="nav">
            <a className="nav-item" href="#home" onClick={(e) => handleScroll('home', e)}>ГЛАВНАЯ</a>
            <a className="nav-item" href="#dishes" onClick={(e) => handleScroll('dishes', e)}>МЕНЮ</a>
            <a className="nav-item" href="#history" onClick={(e) => handleScroll('history', e)}>О НАС</a>
          </div>
          <div className="phone">
            <div className="phone-holder">
              <div className="phone-img">
                <img src={phone} alt="Phone" />
              </div>
              <div className="number">
                <a className="num" href="tel:+9998887654">+999-888-76-54</a>
              </div>
            </div>
            <div className="phone-text">
              Свяжитесь с нами для <br />бронирования
            </div>
          </div>
          <div className="btn">
            <Button variant="primary" onClick={() => setShowModal(true)} className="button">
              ЗАКАЗ СТОЛИКА
            </Button>
          </div>
        </div>
        <div className="header-down">
          <div className="header-title">
            Добро пожаловать в
            <div className="header-subtitle">
              Клод Мане
            </div>
            <div className="header-suptitle">
              ДОМ ЛУЧШЕЙ ЕДЫ
            </div>
            <div className="header-bth">
              <a href="#dishes" className="header-button" onClick={(e) => handleScroll('dishes', e)}>VIEW MENU</a>
            </div>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title className='reserve-title'>Бронирование столика</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Выберите дату</h5>
          <DateSelector dates={getDates()} selectedDate={selectedDate} onSelectDate={handleSelectDate} />
          <h5>Выберите время</h5>
          <SessionSelector selectedSession={selectedSession} onSelectSession={handleSelectSession} />
          <h5>Выберите столик</h5>
          <TableSelector tables={tables} onToggleTable={handleToggleTable} />
        </Modal.Body>
        <Modal.Footer>
          <Button style={{borderRadius:"10px"}} variant="secondary" onClick={handleCloseModal} className="modal-button">
            Отмена
          </Button>
          <Button style={{borderRadius:"10px"}} variant="primary" onClick={handleConfirmBooking} className="modal-button">
            Подтвердить бронирование
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const DateSelector = ({ dates, selectedDate, onSelectDate }) => (
  <div className="date-selector">
    {dates.map((date) => (
      <Button
        style={{borderRadius:"10px", margin:"10px 10px", width:"180px"}}
        key={date}
        variant={date === selectedDate ? 'primary' : 'secondary'}
        onClick={() => onSelectDate(date)}
        className="button m-1"
      >
        {date}
      </Button>
    ))}
  </div>
);

const SessionSelector = ({ selectedSession, onSelectSession }) => {
  const sessions = ['10:00', '12:00', '14:00', '16:00', '18:00', '20:00'];
  return (
    <div className="session-selector">
      {sessions.map((session) => (
        <Button
          style={{borderRadius:"10px", margin:"10px 10px", width:"180px"}}
          key={session}
          variant={session === selectedSession ? 'primary' : 'secondary'}
          onClick={() => onSelectSession(session)}
          className="button m-1"
        >
          {session}
        </Button>
      ))}
    </div>
  );
};

const TableSelector = ({ tables, onToggleTable }) => (
  <div className="table-selector">
    {tables.map((table, index) => (
      <Button
        style={{borderRadius:"20px"}}
        key={index}
        variant={table.reserved ? 'danger' : 'success'}
        onClick={() => onToggleTable(index)}
        className={`table-button ${table.reserved ? 'reserved' : ''}`}
      >
        {index + 1}
      </Button>
    ))}
  </div>
);

const MS_PER_DAY = 24 * 60 * 60 * 1000;
const MAX_BOOKING_DAYS = 7;

const getDates = () => {
  const today = new Date();
  const dates = [];
  for (let i = 0; i <= MAX_BOOKING_DAYS; i++) {
    const date = new Date(today.getTime() + i * MS_PER_DAY);
    dates.push(date.toISOString().split('T')[0]);
  }
  return dates;
};

const saveBooking = (date, session, tables) => {
  const key = `${date}-${session}`;
  localStorage.setItem(key, JSON.stringify(tables));
};

const loadBookings = (date, session) => {
  const key = `${date}-${session}`;
  const bookings = localStorage.getItem(key);
  return bookings ? JSON.parse(bookings) : new Array(10).fill({ reserved: false });
};

export default Header;
