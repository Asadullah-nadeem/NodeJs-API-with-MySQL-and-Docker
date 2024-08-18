const QUERY = {
    SELECT_PATIENTS: 'SELECT * FROM patients ORDER BY created_at DESC LIMIT 80',
    SELECT_PATIENT: 'SELECT * FROM patients WHERE id = ?',
    CREATE_PATIENT: 'INSERT INFO patients(first_name, last_name, email, phone, address, diagnosis, image_url) VALUES(?, ?, ?, ?, ?, ?, ?, ?)',
    UPDATE_PATIENT: 'UPDATE patients SET first_name = ?, last_name = ?, email = ?, phone = ?, address = ?, diagnosis = ?, image_url = ?',
    DELETE_PATIENTS: 'DELETE FROM patients WHERE id = ?',
}

export default QUERY;