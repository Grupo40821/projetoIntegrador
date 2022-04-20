-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 20-Abr-2022 às 06:25
-- Versão do servidor: 10.4.22-MariaDB
-- versão do PHP: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `projetointegrador`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `motoristasativos`
--

CREATE TABLE `motoristasativos` (
  `principal_id` bigint(255) NOT NULL,
  `id_motorista` int(11) NOT NULL,
  `regiao` varchar(50) NOT NULL,
  `reboque` varchar(7) NOT NULL,
  `pneu` varchar(7) NOT NULL,
  `bateria` varchar(7) NOT NULL,
  `patins` varchar(7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `motoristasativos`
--

INSERT INTO `motoristasativos` (`principal_id`, `id_motorista`, `regiao`, `reboque`, `pneu`, `bateria`, `patins`) VALUES
(37, 6, 'zona1', '0', 'true', 'true', '0'),
(45, 4, 'zona1', '0', 'true', 'true', '0'),
(46, 7, 'zona1', '0', 'true', 'true', '0'),
(47, 8, 'zona1', '0', 'true', 'true', '0'),
(48, 9, 'zona1', '0', 'true', 'true', '0'),
(49, 10, 'zona1', '0', 'true', 'true', '0');

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

CREATE TABLE `usuario` (
  `usuario_id` int(11) NOT NULL,
  `nome` varchar(150) NOT NULL,
  `email` varchar(150) NOT NULL,
  `senha` varchar(20) NOT NULL,
  `telefone` varchar(14) NOT NULL,
  `cpf` varchar(14) NOT NULL,
  `RG` varchar(12) NOT NULL,
  `estado` varchar(20) NOT NULL,
  `cidade` varchar(30) NOT NULL,
  `estadoCivil` varchar(50) NOT NULL,
  `imagem` varchar(200) NOT NULL,
  `tipo` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `usuario`
--

INSERT INTO `usuario` (`usuario_id`, `nome`, `email`, `senha`, `telefone`, `cpf`, `RG`, `estado`, `cidade`, `estadoCivil`, `imagem`, `tipo`) VALUES
(4, 'Gustavo Reis Godinho da Silva', 'GustavoReis@email.com', '123456', '(00)00000-0000', '000.000.000-00', '00.000.000-0', 'DF', 'Brasília', 'solteiro', '', 'motorista'),
(6, 'Usuario de teste', 'teste@email.com', '123456', '(99)99999-9999', '999.999.999-99', '99.999.999-9', 'AC', 'Acrelândia', 'solteiro', '', 'usuario'),
(7, 'Gustavo Reis', 'Gustavo@email.com', '123456', '(15)98765-4321', '987.654.321-00', '98.765.432-1', 'AC', 'Assis Brasil', 'solteiro', '', 'motorista'),
(8, 'Guilherme Dantas', 'Guilherme@email.com', '123456', '(00)12345-6789', '012.345.678-90', '01.234.567-8', 'AC', 'Marechal Thaumaturgo', 'solteiro', '', 'motorista'),
(9, 'Joao', 'Joao@email.com', '123456', '(98)46541-6546', '654.654.651-65', '65.465.465-1', 'AM', 'Caapiranga', 'solteiro', '', 'motorista'),
(10, 'Cicero', 'Cicero@email.com', '123456', '(54)65126-4654', '654.465.456-41', '65.465.416-5', 'MT', 'Aripuanã', 'solteiro', '', 'motorista');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `motoristasativos`
--
ALTER TABLE `motoristasativos`
  ADD PRIMARY KEY (`principal_id`),
  ADD KEY `id_motorista` (`id_motorista`);

--
-- Índices para tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`usuario_id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `motoristasativos`
--
ALTER TABLE `motoristasativos`
  MODIFY `principal_id` bigint(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `usuario_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `motoristasativos`
--
ALTER TABLE `motoristasativos`
  ADD CONSTRAINT `motoristasativos_ibfk_1` FOREIGN KEY (`id_motorista`) REFERENCES `usuario` (`usuario_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
