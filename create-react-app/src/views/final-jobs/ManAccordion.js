
import React, { useState } from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Button,
    Typography,
    TextField,
    Grid,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const initialFormData = {
    JobNo: '',
    ManPowerQty: '',
    TaskDate: '',
    BuyCost: '',

};

const ManAccordion = ({ expanded, onAccordionChange,  setFormData , jobNo}) => {
    const [formList, setFormList] = useState([initialFormData]);

    // const handleChange = (e, index) => {
    //     const { name, value } = e.target;
    //     const updatedFormList = [...formList];
    //     updatedFormList[index] = { ...updatedFormList[index], [name]: value };
    //     setFormList(updatedFormList);
    //     setFormData(updatedFormList); // Update the parent component's formData
    // };

   

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const updatedFormList = [...formList];
        updatedFormList[index] = {
          ...updatedFormList[index],
          [name]: value,
          // Preserve the existing JobNo
          JobNo: index === 0 ? jobNo : updatedFormList[index].JobNo,
        };
        setFormList(updatedFormList);
        setFormData(updatedFormList); // Update the parent component's formData
      };




    // const handleAddForm = () => {
    //     setFormList([...formList, { ...initialFormData }]);
    // };


    const handleAddForm = () => {
        setFormList([...formList, { ...initialFormData, JobNo: jobNo }]);
      };




    const handleDeleteForm = (index) => {
        if (index !== 0) {
            const updatedFormList = [...formList];
            updatedFormList.splice(index, 1);
            setFormList(updatedFormList);
        }
    };

    return (
        <Accordion
            expanded={expanded}
            sx={{
                border: '0.5px solid #055F85',
                marginTop: '20px',
            }}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                onClick={onAccordionChange}
                sx={{
                    borderBottom: '1px solid #055F85',
                }}
            >
                <Typography variant="h3">Man Power</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="subtitle1" gutterBottom>
                        Man are used for this job
                    </Typography>
                    <Button
                        variant="contained"
                        style={{ backgroundColor: "#055f85", color: "white" }}
                        onClick={handleAddForm}
                    >
                        +Add Logistics
                    </Button>
                </div>

                <br />

                {formList.map((formData, index) => (
                    <form key={index} >


                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' }}>



                            {index !== 0 && (

                                <Button
                                    style={{
                                        marginBottom: '20px',
                                        marginLeft: 'auto',
                                        backgroundColor: '#f7114a', // Set the background color to #f98a86
                                        color: 'white', // Set the text color to white (or any other suitable color)
                                    }}
                                    variant="contained"
                                    onClick={() => handleDeleteForm(index)}
                                    startIcon={<ClearIcon />}
                                >
                                    Delete
                                </Button>
                            )}
                        </div>

                        <Grid container spacing={3}>

                            <Grid item xs={3} md={3}>
                                <TextField
                                    label="JobNo"
                                    fullWidth
                                    variant="outlined"
                                    name="JobNo"
                                    value={formData.JobNo === '' ? jobNo : formData.JobNo}
                                    onChange={(e) => handleChange(e, index)}
                                />
                            </Grid>
                            <Grid item xs={3} md={3}>
                                <TextField
                                    label=" ManPowerQty"
                                    fullWidth
                                    variant="outlined"
                                    name=" ManPowerQty"
                                    value={formData.ManPowerQty}
                                    onChange={(e) => handleChange(e, index)}
                                />
                            </Grid>


                            <Grid item xs={3} md={3}>
                                <TextField
                                    label="TaskDate"
                                    fullWidth
                                    variant="outlined"
                                    name="TaskDate"
                                    type="date"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={formData.TaskDate}
                                    onChange={(e) => handleChange(e, index)}
                                />
                            </Grid>
                            <Grid item xs={3} md={3}>
                                <TextField
                                    label="BuyCost"
                                    fullWidth
                                    variant="outlined"
                                    name="BuyCost"
                                    value={formData.BuyCost}
                                    onChange={(e) => handleChange(e, index)}
                                />
                            </Grid>

                         

                        </Grid>
                    </form>
                ))}

                {/* <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Submit
                </Button> */}

            </AccordionDetails>
        </Accordion>
    );
};

export default ManAccordion;
